// Search Console + GA4, read straight from Google with the kisha-reader service account.
// Key: .google-sa.json in the repo root (git-ignored). Project kishatattoo, GA4 property 530315154.
//
// Usage: npm run google -- <command> [--flags]
//   gsc      [--start 28daysAgo] [--end yesterday] [--dims query,page] [--page /works] [--query koi] [--limit 25]
//   inspect  <url>                         index status of one URL as Google sees it
//   sitemaps                               submitted sitemaps and when Google last read them
//   submit   <sitemap url>                 (re)submit a sitemap
//   ga4      [--start 28daysAgo] [--end yesterday] [--dims pagePath] [--metrics sessions,totalUsers] [--limit 25]
//
// Dates take YYYY-MM-DD or NdaysAgo / yesterday / today. GSC data lags 2–3 days.

import { readFileSync } from 'node:fs'
import { createSign } from 'node:crypto'

const GSC_SITE = 'sc-domain:kisha.tattoo'
const GA4_PROPERTY = '530315154'

const sa = JSON.parse(readFileSync(new URL('../.google-sa.json', import.meta.url), 'utf8'))
const b64 = (v) => Buffer.from(typeof v === 'string' ? v : JSON.stringify(v)).toString('base64url')

async function token(scope) {
  const now = Math.floor(Date.now() / 1000)
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({
    iss: sa.client_email, scope, aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600,
  })}`
  const signature = createSign('RSA-SHA256').update(unsigned).sign(sa.private_key, 'base64url')
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${signature}` }),
  })
  const json = await res.json()
  if (!json.access_token) throw new Error(`Token: ${JSON.stringify(json)}`)
  return json.access_token
}

async function call(scope, url, body, method = body ? 'POST' : 'GET') {
  const res = await fetch(url, {
    method,
    headers: { authorization: `Bearer ${await token(scope)}`, 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`${res.status} ${text}`)
  return text ? JSON.parse(text) : {}
}

// GSC wants real dates; GA4 understands NdaysAgo itself. Resolve both the same way.
function date(v) {
  if (/^\d{4}-\d{2}-\d{2}$/.test(v)) return v
  const d = new Date()
  if (v === 'yesterday') d.setDate(d.getDate() - 1)
  else if (/^\d+daysAgo$/.test(v)) d.setDate(d.getDate() - parseInt(v))
  else if (v !== 'today') throw new Error(`Bad date: ${v}`)
  return d.toISOString().slice(0, 10)
}

const [cmd, ...rest] = process.argv.slice(2)
const flags = {}
const args = []
for (let i = 0; i < rest.length; i++) {
  if (rest[i].startsWith('--')) flags[rest[i].slice(2)] = rest[++i]
  else args.push(rest[i])
}
const start = date(flags.start ?? '28daysAgo')
const end = date(flags.end ?? 'yesterday')
const limit = Number(flags.limit ?? 25)

const WM = 'https://www.googleapis.com/auth/webmasters'
const WM_RO = 'https://www.googleapis.com/auth/webmasters.readonly'
const site = encodeURIComponent(GSC_SITE)

if (cmd === 'gsc') {
  const dims = (flags.dims ?? 'query').split(',')
  const filters = []
  if (flags.page) filters.push({ dimension: 'page', operator: 'contains', expression: flags.page })
  if (flags.query) filters.push({ dimension: 'query', operator: 'contains', expression: flags.query })
  const res = await call(WM_RO, `https://www.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`, {
    startDate: start, endDate: end, dimensions: dims, rowLimit: limit,
    dimensionFilterGroups: filters.length ? [{ filters }] : undefined,
  })
  console.log(`GSC ${start} → ${end}, by ${dims.join('+')}`)
  console.log(['clicks', 'impr', 'ctr', 'pos', ...dims].join('\t'))
  for (const r of res.rows ?? []) {
    console.log([r.clicks, r.impressions, `${(r.ctr * 100).toFixed(1)}%`, r.position.toFixed(1), ...r.keys.map((k) => k.replace('https://kisha.tattoo', ''))].join('\t'))
  }
} else if (cmd === 'inspect') {
  const res = await call(WM_RO, 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    inspectionUrl: args[0], siteUrl: GSC_SITE,
  })
  const r = res.inspectionResult.indexStatusResult
  console.log({ verdict: r.verdict, coverage: r.coverageState, lastCrawl: r.lastCrawlTime, googleCanonical: r.googleCanonical, userCanonical: r.userCanonical, robots: r.robotsTxtState, indexing: r.indexingState })
} else if (cmd === 'sitemaps') {
  const res = await call(WM_RO, `https://www.googleapis.com/webmasters/v3/sites/${site}/sitemaps`)
  for (const s of res.sitemap ?? []) {
    console.log(s.path, '| submitted', s.lastSubmitted, '| read', s.lastDownloaded, '| errors', s.errors, '| warnings', s.warnings)
  }
} else if (cmd === 'submit') {
  await call(WM, `https://www.googleapis.com/webmasters/v3/sites/${site}/sitemaps/${encodeURIComponent(args[0])}`, undefined, 'PUT')
  console.log('Submitted', args[0])
} else if (cmd === 'ga4') {
  const dims = (flags.dims ?? 'pagePath').split(',').filter(Boolean)
  const metrics = (flags.metrics ?? 'sessions,totalUsers').split(',')
  const res = await call('https://www.googleapis.com/auth/analytics.readonly', `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY}:runReport`, {
    dateRanges: [{ startDate: start, endDate: end }],
    dimensions: dims.map((name) => ({ name })),
    metrics: metrics.map((name) => ({ name })),
    orderBys: [{ metric: { metricName: metrics[0] }, desc: true }],
    limit,
  })
  console.log(`GA4 ${start} → ${end}`)
  console.log([...metrics, ...dims].join('\t'))
  for (const r of res.rows ?? []) {
    console.log([...r.metricValues.map((m) => m.value), ...(r.dimensionValues ?? []).map((d) => d.value)].join('\t'))
  }
} else {
  console.log('Commands: gsc, inspect, sitemaps, submit, ga4 — see the header of scripts/google.mjs')
}
