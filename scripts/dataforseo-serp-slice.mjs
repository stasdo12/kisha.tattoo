// Monthly wide SERP slice over the head keywords — who owns the Munich market, and who the AI Overview cites.
// Complements dataforseo-rank-check.mjs: that one tracks OUR position on a long keyword list,
// this one photographs the whole top-10 so a new competitor can't appear unnoticed
// (that is how 13munich.de was found — see PLAN-SEO-ROADMAP-2026-07-28.md).
//
// The keyword list lives HERE ON PURPOSE. The first slice (July 2026) recorded only "6 head keywords"
// in prose, so it could not be reproduced or compared. Change this list only deliberately.
//
// Every keyword below is genuinely LOCAL (contains "münchen"), so the Munich locale is correct.
// Do NOT add national queries like `tattoo kosten` here — for those the Munich locale
// flatters us badly (GSC says `tattoo preise` sits at 17.5 while Munich live SERP said #5-8).
//
// Usage: npm run seo:slice

import { appendFileSync, existsSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const HISTORY_FILE = join(__dirname, 'serp-slice-history.csv')
const HISTORY_HEADER = 'date,keyword,our_organic,our_absolute,ai_overview,ai_refs,top10\n'

const DOMAIN = 'kisha.tattoo'
const LOCATION_NAME = 'Munich,Bavaria,Germany'
const LANGUAGE_CODE = 'de'

// 3 market-wide head terms + 3 covering Kisha's actual specialities (black-and-grey only).
const KEYWORDS = [
  'tattoo münchen',
  'tätowierer münchen',
  'tattoo studio münchen',
  'fineline tattoo münchen',
  'japanisches tattoo münchen',
  'blackwork tattoo münchen',
]

const login = process.env.DATAFORSEO_LOGIN
const password = process.env.DATAFORSEO_PASSWORD
if (!login || !password) {
  console.error('Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD. Run with: node --env-file=.env.local scripts/dataforseo-serp-slice.mjs')
  process.exit(1)
}
const auth = Buffer.from(`${login}:${password}`).toString('base64')

async function slice(keyword) {
  const res = await fetch('https://api.dataforseo.com/v3/serp/google/organic/live/advanced', {
    method: 'POST',
    headers: { Authorization: `Basic ${auth}`, 'Content-Type': 'application/json' },
    body: JSON.stringify([
      { keyword, location_name: LOCATION_NAME, language_code: LANGUAGE_CODE, device: 'mobile', depth: 20 },
    ]),
  })
  const data = await res.json()
  const task = data.tasks?.[0]
  if (!task || task.status_code !== 20000) {
    return { keyword, error: task?.status_message ?? data.status_message ?? `HTTP ${res.status}`, cost: task?.cost ?? 0 }
  }

  const items = task.result?.[0]?.items ?? []
  const organic = items.filter((i) => i.type === 'organic')

  // rank_absolute counts every SERP block; the organic index is what people mean by "position".
  // Storing both is the fix for the ambiguity that made rank-history.csv unreadable.
  const ownIdx = organic.findIndex((i) => i.domain?.includes(DOMAIN))
  const own = ownIdx === -1 ? null : organic[ownIdx]

  const aiBlock = items.find((i) => i.type === 'ai_overview')
  const aiRefs = [
    ...new Set(
      (aiBlock?.references ?? [])
        .map((r) => r.domain)
        .filter(Boolean)
        .concat(
          (aiBlock?.items ?? []).flatMap((s) => (s.references ?? []).map((r) => r.domain).filter(Boolean)),
        ),
    ),
  ]

  return {
    keyword,
    cost: task.cost,
    ourOrganic: ownIdx === -1 ? null : ownIdx + 1,
    ourAbsolute: own?.rank_absolute ?? null,
    aiOverview: Boolean(aiBlock),
    aiRefs,
    aiCitesUs: aiRefs.some((d) => d.includes(DOMAIN)),
    top10: organic.slice(0, 10).map((i) => i.domain),
  }
}

if (!existsSync(HISTORY_FILE)) {
  appendFileSync(HISTORY_FILE, HISTORY_HEADER)
} else if (!readFileSync(HISTORY_FILE, 'utf8').endsWith('\n')) {
  appendFileSync(HISTORY_FILE, '\n')
}

const today = new Date().toISOString().slice(0, 10)
const q = (s) => `"${String(s ?? '').replace(/"/g, '""')}"`

let totalCost = 0
const results = []

console.log(`Wide SERP slice — ${KEYWORDS.length} head keywords, ${DOMAIN}, Munich/mobile, depth 20\n`)

for (const keyword of KEYWORDS) {
  const r = await slice(keyword)
  totalCost += r.cost ?? 0
  if (r.error) {
    console.log(`✗ ${keyword} — ${r.error}`)
    continue
  }
  results.push(r)

  const pos = r.ourOrganic ? `organic #${r.ourOrganic} (abs #${r.ourAbsolute})` : 'not in top 20'
  const ai = r.aiOverview ? (r.aiCitesUs ? 'AI: CITES US' : `AI: ${r.aiRefs.length} refs, not us`) : 'AI: none'
  console.log(`${r.ourOrganic ? '●' : '○'} ${keyword}`)
  console.log(`    us: ${pos}    ${ai}`)
  console.log(`    top10: ${r.top10.join(', ')}`)
  if (r.aiOverview && r.aiRefs.length) console.log(`    AI cites: ${r.aiRefs.join(', ')}`)
  console.log()

  appendFileSync(
    HISTORY_FILE,
    [today, q(keyword), r.ourOrganic ?? '', r.ourAbsolute ?? '', r.aiOverview ? 'yes' : 'no', q(r.aiRefs.join('|')), q(r.top10.join('|'))].join(',') + '\n',
  )
}

// A domain in the top 10 of several head keywords owns the market, not just one query.
const freq = new Map()
for (const r of results) for (const d of r.top10) freq.set(d, (freq.get(d) ?? 0) + 1)
const leaders = [...freq.entries()].filter(([, n]) => n >= 3).sort((a, b) => b[1] - a[1])

console.log('--- Domains in the top 10 of 3+ head keywords ---')
for (const [d, n] of leaders) console.log(`  ${String(n).padStart(2)}/${results.length}  ${d}`)

const aiFreq = new Map()
for (const r of results) for (const d of r.aiRefs) aiFreq.set(d, (aiFreq.get(d) ?? 0) + 1)
const aiLeaders = [...aiFreq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)
if (aiLeaders.length) {
  console.log('\n--- Most-cited domains in AI Overviews ---')
  for (const [d, n] of aiLeaders) console.log(`  ${String(n).padStart(2)}x  ${d}`)
}

console.log(`\nTotal cost: $${totalCost.toFixed(4)}`)
console.log(`History appended to ${HISTORY_FILE}`)