// Bing Webmaster Tools, read with the API key from .env.local (BING_WEBMASTER_API_KEY).
// Bing matters beyond Bing: ChatGPT search answers from the Bing index.
//
// Usage: npm run bing -- <command> [--flags]
//   summary  [--days 28]                   clicks, impressions, index size — this period vs the one before
//   queries  [--days 28] [--limit 25]      queries by impressions, summed over the period
//   pages    [--days 28] [--limit 25]      pages by impressions, summed over the period
//   inspect  <url>                         when Bing found and last crawled one URL
//   submit   <url> [<url> …]               push URLs to Bing for crawling (quota 100/day, 500/month)
//   sitemaps                               submitted sitemaps and when Bing last read them
//   resubmit                               ask Bing to read sitemap.xml again
//   quota                                  submission quota left
//
// Data lags 1–2 days. Positions are Bing's averages; -1 means no clicks.

const KEY = process.env.BING_WEBMASTER_API_KEY
if (!KEY) {
  console.error('Missing BING_WEBMASTER_API_KEY. Run with: node --env-file=.env.local scripts/bing.mjs')
  process.exit(1)
}
const SITE = 'https://kisha.tattoo/'
const API = 'https://ssl.bing.com/webmaster/api.svc/json'

async function bing(method, params = {}, body) {
  const qs = new URLSearchParams({ siteUrl: SITE, ...params, apikey: KEY })
  const res = await fetch(`${API}/${method}?${qs}`, {
    method: body ? 'POST' : 'GET',
    headers: body ? { 'content-type': 'application/json; charset=utf-8' } : undefined,
    body: body ? JSON.stringify({ siteUrl: SITE, ...body }) : undefined,
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`${res.status} ${text}`)
  return text ? JSON.parse(text).d : null
}

// Bing dates come as "/Date(1792713600000)/".
const ms = (v) => Number(/\d+/.exec(v)[0])
const day = (v) => new Date(ms(v)).toISOString().slice(0, 10)

const [cmd, ...rest] = process.argv.slice(2)
const flags = {}
const args = []
for (let i = 0; i < rest.length; i++) {
  if (rest[i].startsWith('--')) flags[rest[i].slice(2)] = rest[++i]
  else args.push(rest[i])
}
const days = Number(flags.days ?? 28)
const limit = Number(flags.limit ?? 25)
const since = Date.now() - days * 86400000
const pct = (a, b) => (b ? `${a >= b ? '+' : ''}${Math.round(((a - b) / b) * 100)}%` : '—')

// Query and page stats are per-day rows; sum them per key over the window.
function sum(rows, key) {
  const m = new Map()
  for (const r of rows.filter((r) => ms(r.Date) >= since)) {
    const e = m.get(r[key]) ?? { clicks: 0, impr: 0, posSum: 0 }
    e.clicks += r.Clicks
    e.impr += r.Impressions
    e.posSum += r.AvgImpressionPosition * r.Impressions
    m.set(r[key], e)
  }
  return [...m].sort((a, b) => b[1].impr - a[1].impr).slice(0, limit)
}

if (cmd === 'summary') {
  const traffic = await bing('GetRankAndTrafficStats')
  const crawl = await bing('GetCrawlStats')
  const now = traffic.filter((r) => ms(r.Date) >= since)
  const prev = traffic.filter((r) => ms(r.Date) < since && ms(r.Date) >= since - days * 86400000)
  const t = (rows, k) => rows.reduce((s, r) => s + r[k], 0)
  const last = crawl.at(-1)
  console.log(`Bing ${days} Tage (bis ${day(traffic.at(-1).Date)})`)
  console.log(`  клики ${t(now, 'Clicks')} (${pct(t(now, 'Clicks'), t(prev, 'Clicks'))})  показы ${t(now, 'Impressions')} (${pct(t(now, 'Impressions'), t(prev, 'Impressions'))})`)
  console.log(`  в индексе ${last.InIndex} · обойдено за день ${last.CrawledPages} · 4xx ${last.Code4xx} · 5xx ${last.Code5xx} · ошибок обхода ${last.CrawlErrors} (${day(last.Date)})`)
} else if (cmd === 'queries' || cmd === 'pages') {
  const rows = await bing(cmd === 'queries' ? 'GetQueryStats' : 'GetPageStats')
  console.log(`Bing ${cmd}, ${days} Tage\nclicks\timpr\tpos\t${cmd === 'queries' ? 'query' : 'page'}`)
  for (const [k, e] of sum(rows, 'Query')) {
    console.log(`${e.clicks}\t${e.impr}\t${(e.posSum / e.impr).toFixed(1)}\t${cmd === 'pages' ? k.replace(SITE.slice(0, -1), '') : k}`)
  }
} else if (cmd === 'inspect') {
  const u = await bing('GetUrlInfo', { url: args[0] })
  console.log({
    url: u.Url,
    discovered: day(u.DiscoveryDate),
    lastCrawled: ms(u.LastCrawledDate) > 0 ? day(u.LastCrawledDate) : 'never',
    httpStatus: u.HttpStatus,
    inboundLinks: u.AnchorCount,
  })
} else if (cmd === 'submit') {
  if (!args.length) throw new Error('submit needs at least one URL')
  await bing('SubmitUrlBatch', {}, { urlList: args })
  console.log(`submitted ${args.length}:\n  ${args.join('\n  ')}`)
} else if (cmd === 'sitemaps') {
  for (const f of await bing('GetFeeds')) {
    console.log(`${f.Url}  ${f.Status} · ${f.UrlCount} URL · последнее чтение ${day(f.LastCrawled)}`)
  }
} else if (cmd === 'resubmit') {
  await bing('SubmitFeed', {}, { feedUrl: `${SITE}sitemap.xml` })
  console.log(`sitemap resubmitted: ${SITE}sitemap.xml`)
} else if (cmd === 'quota') {
  const q = await bing('GetUrlSubmissionQuota')
  console.log(`осталось сегодня ${q.DailyQuota}, в этом месяце ${q.MonthlyQuota}`)
} else {
  console.log('Commands: summary, queries, pages, inspect, submit, sitemaps, resubmit, quota — see the header of scripts/bing.mjs')
}
