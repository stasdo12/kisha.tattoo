// Checks live Google rankings for the golden keyword list via DataForSEO SERP API.
// Requires DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD in .env.local (paid calls — see PLAN-DATAFORSEO-2026-07-27.md).
// Appends every run to scripts/rank-history.csv so trends are visible over time, not just single snapshots.
// Usage: npm run seo:ranks

import { appendFileSync, existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const HISTORY_FILE = join(__dirname, 'rank-history.csv')
// rank = rank_absolute (position among ALL SERP blocks, ads and local pack included) — kept for
// continuity with rows written before 2026-09-02. rank_organic is the position among organic
// results only, which is the number that is actually comparable across runs. location says which
// SERP was asked for: national keywords measured in Munich are meaningless (GSC shows a ~10
// position gap), so the price cluster is queried for Germany as a whole from 2026-09-02 on.
const HISTORY_HEADER = 'date,keyword,rank,top1,top2,top3,rank_organic,location\n'

const DOMAIN = 'kisha.tattoo'
const LANGUAGE_CODE = 'de'
const MUNICH = 'Munich,Bavaria,Germany'
const GERMANY = 'Germany'

// Priority keywords from the SEO master plan (project_seo_master_plan.md).
// Local intent -> Munich SERP. The price cluster is national demand, so it is measured for
// Germany; it is also kept on the Munich SERP for one overlap run so the old series stays readable.
const KEYWORDS = [
  { keyword: 'fineline tattoo münchen', location: MUNICH },
  { keyword: 'fine line tattoo münchen', location: MUNICH },
  { keyword: 'tattoo freising', location: MUNICH },
  { keyword: 'munich tattoo', location: MUNICH },
  { keyword: 'walk in tattoo münchen', location: MUNICH },
  { keyword: 'bester tätowierer münchen', location: MUNICH },
  { keyword: 'tattoo artist münchen', location: MUNICH },
  { keyword: 'tattoo münchen', location: MUNICH },
  { keyword: 'tattoo kosten', location: GERMANY },
  { keyword: 'tattoo preise', location: GERMANY },
  { keyword: 'was kostet kleines tattoo', location: GERMANY },
  { keyword: 'tattoo kosten', location: MUNICH },
  { keyword: 'tattoo preise', location: MUNICH },
  { keyword: 'was kostet kleines tattoo', location: MUNICH },
]

const login = process.env.DATAFORSEO_LOGIN
const password = process.env.DATAFORSEO_PASSWORD
if (!login || !password) {
  console.error('Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD. Run with: node --env-file=.env.local scripts/dataforseo-rank-check.mjs')
  process.exit(1)
}
const auth = Buffer.from(`${login}:${password}`).toString('base64')

async function checkKeyword(keyword, locationName) {
  const res = await fetch('https://api.dataforseo.com/v3/serp/google/organic/live/advanced', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        keyword,
        location_name: locationName,
        language_code: LANGUAGE_CODE,
        device: 'mobile',
        depth: 30,
      },
    ]),
  })
  const data = await res.json()
  const task = data.tasks?.[0]
  if (!task || task.status_code !== 20000) {
    return { keyword, error: task?.status_message ?? data.status_message ?? `HTTP ${res.status}`, cost: task?.cost ?? 0 }
  }
  const items = task.result?.[0]?.items ?? []
  const organic = items.filter((i) => i.type === 'organic')
  const ownIndex = organic.findIndex((i) => i.domain?.includes(DOMAIN))
  const own = ownIndex === -1 ? null : organic[ownIndex]
  const top3 = organic.slice(0, 3).map((i) => i.domain)
  return {
    keyword,
    cost: task.cost,
    rank: own?.rank_absolute ?? null,
    rankOrganic: ownIndex === -1 ? null : ownIndex + 1,
    top3,
  }
}

let totalCost = 0
console.log(`Checking ${KEYWORDS.length} keyword/location pairs for ${DOMAIN} (mobile)...\n`)

if (!existsSync(HISTORY_FILE)) {
  appendFileSync(HISTORY_FILE, HISTORY_HEADER)
} else if (!readFileSync(HISTORY_FILE, 'utf8').endsWith('\n')) {
  // A previous run (or a manual edit) left the file without a trailing newline —
  // appending straight away would glue today's first row onto the last one.
  appendFileSync(HISTORY_FILE, '\n')
}
const today = new Date().toISOString().slice(0, 10)
const csvEscape = (s) => (s?.includes(',') ? `"${s}"` : (s ?? ''))

for (const { keyword, location } of KEYWORDS) {
  const r = await checkKeyword(keyword, location)
  totalCost += r.cost ?? 0
  const where = location === GERMANY ? 'DE' : 'MUC'
  if (r.error) {
    console.log(`✗ ${keyword} [${where}] — ${r.error}`)
    continue
  }
  const position = r.rankOrganic ? `#${r.rankOrganic} org (abs #${r.rank})` : 'not in top 30'
  console.log(`${r.rankOrganic ? '●' : '○'} ${keyword.padEnd(26)} ${where.padEnd(4)} ${position.padEnd(24)} top3: ${r.top3.join(', ')}`)
  const [top1, top2, top3] = r.top3
  const row = [
    today,
    csvEscape(keyword),
    r.rank ?? '',
    csvEscape(top1),
    csvEscape(top2),
    csvEscape(top3),
    r.rankOrganic ?? '',
    csvEscape(location),
  ].join(',')
  appendFileSync(HISTORY_FILE, row + '\n')
}

console.log(`\nTotal cost: $${totalCost.toFixed(4)}`)
console.log(`History appended to ${HISTORY_FILE}`)
