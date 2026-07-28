// Checks live Google rankings for the golden keyword list via DataForSEO SERP API.
// Requires DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD in .env.local (paid calls — see PLAN-DATAFORSEO-2026-07-27.md).
// Usage: npm run seo:ranks

const DOMAIN = 'kisha.tattoo'
const LOCATION_NAME = 'Munich,Bavaria,Germany'
const LANGUAGE_CODE = 'de'

// Priority keywords from the SEO master plan (project_seo_master_plan.md)
const KEYWORDS = [
  'fineline tattoo münchen',
  'fine line tattoo münchen',
  'tattoo freising',
  'munich tattoo',
  'walk in tattoo münchen',
  'bester tätowierer münchen',
  'tattoo artist münchen',
  'tattoo kosten',
  'tattoo preise',
  'was kostet kleines tattoo',
  'tattoo münchen',
]

const login = process.env.DATAFORSEO_LOGIN
const password = process.env.DATAFORSEO_PASSWORD
if (!login || !password) {
  console.error('Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD. Run with: node --env-file=.env.local scripts/dataforseo-rank-check.mjs')
  process.exit(1)
}
const auth = Buffer.from(`${login}:${password}`).toString('base64')

async function checkKeyword(keyword) {
  const res = await fetch('https://api.dataforseo.com/v3/serp/google/organic/live/advanced', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([
      {
        keyword,
        location_name: LOCATION_NAME,
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
  const own = organic.find((i) => i.domain?.includes(DOMAIN))
  const top3 = organic.slice(0, 3).map((i) => i.domain)
  return { keyword, cost: task.cost, rank: own?.rank_absolute ?? null, top3 }
}

let totalCost = 0
console.log(`Checking ${KEYWORDS.length} keywords for ${DOMAIN} (Munich, mobile)...\n`)

for (const keyword of KEYWORDS) {
  const r = await checkKeyword(keyword)
  totalCost += r.cost ?? 0
  if (r.error) {
    console.log(`✗ ${keyword} — ${r.error}`)
    continue
  }
  const position = r.rank ? `#${r.rank}` : 'not in top 30'
  console.log(`${r.rank ? '●' : '○'} ${keyword.padEnd(30)} ${position.padEnd(14)} top3: ${r.top3.join(', ')}`)
}

console.log(`\nTotal cost: $${totalCost.toFixed(4)}`)