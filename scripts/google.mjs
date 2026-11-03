// Search Console + GA4, read straight from Google with the kisha-reader service account.
// Key: .google-sa.json in the repo root (git-ignored). Project kishatattoo, GA4 property 530315154.
//
// Usage: npm run google -- <command> [--flags]
//   gsc      [--start 28daysAgo] [--end yesterday] [--dims query,page] [--page /works] [--query koi] [--limit 25]
//   inspect  <url>                         index status of one URL as Google sees it
//   sitemaps                               submitted sitemaps and when Google last read them
//   submit   <sitemap url>                 (re)submit a sitemap
//   weekly   [--days 7]                    leads, channels, landing pages, Search Console — this period vs the one before
//   ga4      [--start 28daysAgo] [--end yesterday] [--dims pagePath] [--metrics sessions,totalUsers] [--limit 25]
//   gbp-login                              one-time browser sign-in to Business Profile, saves the refresh token
//   gbp      [--days 28] [--end 4daysAgo] [--reviews 5]  Business Profile: rating, latest reviews, views/routes/calls/site clicks, search terms
//   gbp-media                              photos already on the Kisha listing, newest first, with views and thumbnail URLs
//   gbp-posts                              latest posts with state (LIVE / PROCESSING / REJECTED)
//   gbp-photo <file.jpg> [--publish]       add a photo to the gallery; without --publish only shows what would go out
//   gbp-post --text <file> --link /path [--photo <file.jpg | accounts/…/media/… | https url>] [--publish]
//                                          "Update" post with a Learn more button (UTM gbp_post); same dry run without --publish
//   gbp-delete <accounts/…/localPosts/… | accounts/…/media/…>   undo a post or photo
//   (--publish goes last: the flag parser takes the next word as its value)
//
// Dates take YYYY-MM-DD or NdaysAgo / yesterday / today. GSC data lags 2–3 days.
//
// Business Profile has no service-account access: it signs in as Stas, a manager of the listing.
// OAuth Desktop client and refresh token sit next to the SA key, both git-ignored.
// Writes go out only with --publish and only to the Kisha listing: the same sign-in manages another studio.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { createSign, createHash, randomBytes } from 'node:crypto'
import { createServer } from 'node:http'
import { execFile } from 'node:child_process'

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

// Business Profile signs in as Stas; these are read by the gbp functions at the bottom.
const GBP_CLIENT = new URL('../.google-gbp-client.json', import.meta.url)
const GBP_TOKEN = new URL('../.google-gbp-token.json', import.meta.url)
const GBP_SCOPE = 'https://www.googleapis.com/auth/business.manage'
const gbpClient = () => JSON.parse(readFileSync(GBP_CLIENT, 'utf8')).installed
const GBP_LOCATION = 'locations/16541041380732066850'
const V4 = 'https://mybusiness.googleapis.com/v4'
let gbpAccess

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
} else if (cmd === 'weekly') {
  await weekly(Number(flags.days ?? 7))
} else if (cmd === 'gbp-login') {
  await gbpLogin()
} else if (cmd === 'gbp') {
  await gbp(Number(flags.days ?? 28), Number(flags.reviews ?? 5))
} else if (cmd === 'gbp-media') {
  await gbpMedia()
} else if (cmd === 'gbp-posts') {
  await gbpPosts()
} else if (cmd === 'gbp-photo') {
  await gbpPhoto(args[0], 'publish' in flags)
} else if (cmd === 'gbp-post') {
  await gbpPost(flags, 'publish' in flags)
} else if (cmd === 'gbp-delete') {
  await gbpDelete(args[0])
} else {
  console.log('Commands: gsc, inspect, sitemaps, submit, ga4, weekly, gbp-login, gbp, gbp-media, gbp-posts, gbp-photo, gbp-post, gbp-delete — see the header of scripts/google.mjs')
}

// ── weekly: one summary, this period against the one before ─────────────────
async function weekly(days) {
  const GA = 'https://www.googleapis.com/auth/analytics.readonly'
  const shift = (from, n) => { const d = new Date(`${from}T12:00:00Z`); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0, 10) }
  const range = (endDate) => ({ startDate: shift(endDate, days - 1), endDate })
  const pct = (a, b) => (b ? `${a >= b ? '+' : ''}${Math.round(((a - b) / b) * 100)}%` : '—')
  const pad = (v, n) => String(v).padEnd(n)

  // GA4 is complete up to yesterday; Search Console lags about three days.
  const gaNow = range(date('yesterday'))
  const gaPrev = range(shift(gaNow.startDate, 1))
  const scNow = range(date('3daysAgo'))
  const scPrev = range(shift(scNow.startDate, 1))

  const ga = async (r, dims, metrics, extra = {}) => {
    const res = await call(GA, `https://analyticsdata.googleapis.com/v1beta/properties/${GA4_PROPERTY}:runReport`, {
      dateRanges: [r], dimensions: dims.map((name) => ({ name })), metrics: metrics.map((name) => ({ name })), limit: 50, ...extra,
    })
    return (res.rows ?? []).map((row) => ({ d: (row.dimensionValues ?? []).map((v) => v.value), m: row.metricValues.map((v) => Number(v.value)) }))
  }
  const onlyEvent = (name) => ({ dimensionFilter: { filter: { fieldName: 'eventName', stringFilter: { value: name } } } })
  const sc = async (r, dims) => {
    const res = await call(WM_RO, `https://www.googleapis.com/webmasters/v3/sites/${site}/searchAnalytics/query`, {
      startDate: r.startDate, endDate: r.endDate, dimensions: dims, rowLimit: 500,
    })
    return res.rows ?? []
  }

  console.log(`\n═══ Kisha Tattoo — ${days} Tage ═══`)
  console.log(`GA4 ${gaNow.startDate} → ${gaNow.endDate} (vs ${gaPrev.startDate} → ${gaPrev.endDate})`)

  // Leads first: they are what the site is for.
  const leadsNow = await ga(gaNow, ['pagePath', 'sessionSource'], ['eventCount'], onlyEvent('generate_lead'))
  const leadsPrev = await ga(gaPrev, [], ['eventCount'], onlyEvent('generate_lead'))
  const leadTotal = leadsNow.reduce((s, r) => s + r.m[0], 0)
  console.log(`\nЗАЯВКИ  ${leadTotal}  (было ${leadsPrev[0]?.m[0] ?? 0})`)
  for (const r of leadsNow) console.log(`  ${pad(r.m[0], 3)} ${pad(r.d[0], 40)} ← ${r.d[1]}`)
  try {
    const byForm = await ga(gaNow, ['customEvent:form_location'], ['eventCount'], onlyEvent('generate_lead'))
    console.log('  по формам: ' + byForm.map((r) => `${r.d[0]} ${r.m[0]}`).join(' · '))
  } catch {
    console.log('  по формам: нужен пользовательский параметр form_location в GA4')
  }
  const wa = await ga(gaNow, ['pagePath'], ['eventCount'], onlyEvent('whatsapp_click'))
  console.log(`WhatsApp-клики  ${wa.reduce((s, r) => s + r.m[0], 0)}  ${wa.slice(0, 5).map((r) => `${r.d[0]} ${r.m[0]}`).join(' · ')}`)

  const chNow = await ga(gaNow, ['sessionDefaultChannelGroup'], ['sessions', 'engagedSessions'])
  const chPrev = new Map((await ga(gaPrev, ['sessionDefaultChannelGroup'], ['sessions'])).map((r) => [r.d[0], r.m[0]]))
  console.log('\nКАНАЛЫ (сессии, вовлечённые, к прошлому периоду)')
  for (const r of chNow.sort((a, b) => b.m[0] - a.m[0])) {
    console.log(`  ${pad(r.d[0], 18)} ${pad(r.m[0], 5)} ${pad(r.m[1], 5)} ${pct(r.m[0], chPrev.get(r.d[0]) ?? 0)}`)
  }
  const ai = await ga(gaNow, ['sessionSource'], ['sessions'], { dimensionFilter: { filter: { fieldName: 'sessionDefaultChannelGroup', stringFilter: { value: 'AI Assistant' } } } })
  if (ai.length) console.log('  AI: ' + ai.map((r) => `${r.d[0]} ${r.m[0]}`).join(' · '))

  const land = await ga(gaNow, ['landingPage'], ['sessions', 'engagedSessions'], { orderBys: [{ metric: { metricName: 'sessions' }, desc: true }], limit: 10 })
  console.log('\nСТРАНИЦЫ ВХОДА (сессии / вовлечённые)')
  for (const r of land) console.log(`  ${pad(r.m[0], 4)} ${pad(r.m[1], 4)} ${r.d[0]}`)

  console.log(`\nSEARCH CONSOLE ${scNow.startDate} → ${scNow.endDate} (данные отстают ~3 дня)`)
  const [tNow] = await sc(scNow, [])
  const [tPrev] = await sc(scPrev, [])
  console.log(`  клики ${tNow?.clicks ?? 0} (${pct(tNow?.clicks ?? 0, tPrev?.clicks ?? 0)})  показы ${tNow?.impressions ?? 0} (${pct(tNow?.impressions ?? 0, tPrev?.impressions ?? 0)})  позиция ${tNow?.position.toFixed(1) ?? '—'} (было ${tPrev?.position.toFixed(1) ?? '—'})`)
  const pNow = await sc(scNow, ['page'])
  const pPrev = new Map((await sc(scPrev, ['page'])).map((r) => [r.keys[0], r]))
  const KEY_PAGES = ['/walk-in-tattoo-muenchen', '/tattoo-preise-muenchen', '/japanisches-tattoo-muenchen', '/fineline-tattoo-muenchen', '/grafik-tattoo-muenchen', '/tattoo-unikate', '/tattoo-gutschein-muenchen', '/']
  console.log('  ключевые страницы: клики · показы · позиция (было)')
  for (const path of KEY_PAGES) {
    const match = (r) => { const p = r.keys[0].replace('https://kisha.tattoo', '') || '/'; return path === '/' ? p === '/' : p.startsWith(path) }
    const now = pNow.filter(match)
    const prev = [...pPrev.values()].filter(match)
    const sum = (rows, k) => rows.reduce((s, r) => s + r[k], 0)
    const pos = (rows) => { const i = sum(rows, 'impressions'); return i ? (rows.reduce((s, r) => s + r.position * r.impressions, 0) / i).toFixed(1) : '—' }
    console.log(`  ${pad(path, 30)} ${pad(sum(now, 'clicks'), 4)} ${pad(sum(now, 'impressions'), 6)} ${pos(now)} (${pos(prev)})`)
  }
  console.log('  лучшие страницы:')
  for (const r of pNow.sort((a, b) => b.clicks - a.clicks).slice(0, 5)) {
    console.log(`    ${pad(r.clicks, 4)} ${r.keys[0].replace('https://kisha.tattoo', '') || '/'}`)
  }
}

// ── Business Profile: signed in as Stas ─────────────────────────────────────

// Loopback flow with PKCE: a one-shot local server catches Google's redirect.
async function gbpLogin() {
  const c = gbpClient()
  const verifier = randomBytes(32).toString('base64url')
  const state = randomBytes(16).toString('hex')
  const server = createServer()
  await new Promise((ok) => server.listen(0, '127.0.0.1', ok))
  const redirect = `http://127.0.0.1:${server.address().port}`
  const url = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams({
    client_id: c.client_id, redirect_uri: redirect, response_type: 'code', scope: GBP_SCOPE, access_type: 'offline',
    prompt: 'consent', state, code_challenge: createHash('sha256').update(verifier).digest('base64url'), code_challenge_method: 'S256',
  })}`
  console.log(`Opening the browser. If nothing opens, visit:\n${url}\n`)
  execFile('open', [url])
  const code = await new Promise((ok, fail) => {
    const timer = setTimeout(() => { server.close(); fail(new Error('No sign-in within 10 minutes')) }, 600_000)
    server.on('request', (req, res) => {
      const q = new URL(req.url, redirect).searchParams
      if (!q.has('code') && !q.has('error')) return res.end()
      res.end(q.has('code') ? 'Kisha GBP: signed in. You can close this tab.' : `Kisha GBP: ${q.get('error')}`)
      clearTimeout(timer)
      server.close()
      if (q.get('state') !== state) fail(new Error('State mismatch'))
      else if (q.has('error')) fail(new Error(`Google said: ${q.get('error')}`))
      else ok(q.get('code'))
    })
  })
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: new URLSearchParams({ grant_type: 'authorization_code', code, code_verifier: verifier, redirect_uri: redirect, client_id: c.client_id, client_secret: c.client_secret }),
  })
  const json = await res.json()
  if (!json.refresh_token) throw new Error(`Token: ${json.error ?? 'no refresh_token'} ${json.error_description ?? ''}`)
  writeFileSync(GBP_TOKEN, JSON.stringify({ refresh_token: json.refresh_token, scope: json.scope, created: new Date().toISOString() }), { mode: 0o600 })
  console.log(`Signed in. Refresh token saved (git-ignored). Scope: ${json.scope}`)
}

async function gbpCall(url, body, method = body ? 'POST' : 'GET') {
  if (!gbpAccess) {
    if (!existsSync(GBP_TOKEN)) throw new Error('No Business Profile sign-in yet: npm run google -- gbp-login')
    const c = gbpClient()
    const res = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      body: new URLSearchParams({ grant_type: 'refresh_token', refresh_token: JSON.parse(readFileSync(GBP_TOKEN, 'utf8')).refresh_token, client_id: c.client_id, client_secret: c.client_secret }),
    })
    const json = await res.json()
    if (!json.access_token) throw new Error(`Business Profile token: ${json.error} ${json.error_description ?? ''}. Sign in again: npm run google -- gbp-login`)
    gbpAccess = json.access_token
  }
  const raw = Buffer.isBuffer(body)
  const res = await fetch(url, {
    method,
    headers: { authorization: `Bearer ${gbpAccess}`, ...(body && { 'content-type': raw ? 'application/octet-stream' : 'application/json' }) },
    body: body && (raw ? body : JSON.stringify(body)),
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`${res.status} ${text}`)
  return text ? JSON.parse(text) : {}
}

async function gbp(days, reviewsToShow) {
  const shift = (from, n) => { const d = new Date(`${from}T12:00:00Z`); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0, 10) }
  const pct = (a, b) => (b ? `${a >= b ? '+' : ''}${Math.round(((a - b) / b) * 100)}%` : '—')
  const pad = (v, n) => String(v).padEnd(n)
  const STARS = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 }
  const METRICS = {
    BUSINESS_IMPRESSIONS_MOBILE_SEARCH: 'просмотры · поиск, телефон',
    BUSINESS_IMPRESSIONS_DESKTOP_SEARCH: 'просмотры · поиск, компьютер',
    BUSINESS_IMPRESSIONS_MOBILE_MAPS: 'просмотры · карты, телефон',
    BUSINESS_IMPRESSIONS_DESKTOP_MAPS: 'просмотры · карты, компьютер',
    BUSINESS_DIRECTION_REQUESTS: 'маршруты',
    CALL_CLICKS: 'звонки',
    WEBSITE_CLICKS: 'переходы на сайт',
    BUSINESS_CONVERSATIONS: 'чаты',
  }

  const { accounts = [] } = await gbpCall('https://mybusinessaccountmanagement.googleapis.com/v1/accounts')
  for (const account of accounts) {
    const { locations = [] } = await gbpCall(`https://mybusinessbusinessinformation.googleapis.com/v1/${account.name}/locations?readMask=name,title,metadata&pageSize=100`)
    for (const loc of locations) {
      console.log(`\n═══ ${loc.title} — ${loc.name} (${account.accountName ?? account.name}) ═══`)

      const rv = await gbpCall(`https://mybusiness.googleapis.com/v4/${account.name}/${loc.name}/reviews?pageSize=50&orderBy=${encodeURIComponent('updateTime desc')}`)
      const replied = (rv.reviews ?? []).filter((r) => r.reviewReply).length
      console.log(`\nОТЗЫВЫ  ${rv.totalReviewCount ?? 0}, средняя ${rv.averageRating ?? '—'}, с ответом ${replied} из ${(rv.reviews ?? []).length} последних`)
      for (const r of (rv.reviews ?? []).slice(0, reviewsToShow)) {
        const text = (r.comment ?? '').replace(/\s+/g, ' ').replace(/\(Translated by Google\).*/, '').slice(0, 70)
        console.log(`  ${r.createTime.slice(0, 10)} ${'★'.repeat(STARS[r.starRating] ?? 0)} ${pad(r.reviewer?.displayName ?? '?', 22)} ${r.reviewReply ? 'ответ ✓' : 'без ответа'}  ${text}`)
      }

      // Performance data trails by about four days (03.11 the last filled day was 30.10), like Search Console.
      const end = date(flags.end ?? '4daysAgo')
      const split = shift(end, days - 1)
      const ymd = (d, k) => `dailyRange.${k}.year=${+d.slice(0, 4)}&dailyRange.${k}.month=${+d.slice(5, 7)}&dailyRange.${k}.day=${+d.slice(8, 10)}`
      const perf = await gbpCall(`https://businessprofileperformance.googleapis.com/v1/${loc.name}:fetchMultiDailyMetricsTimeSeries?${Object.keys(METRICS).map((m) => `dailyMetrics=${m}`).join('&')}&${ymd(shift(end, days * 2 - 1), 'startDate')}&${ymd(end, 'endDate')}`)
      console.log(`\nКАРТОЧКА ${split} → ${end} (к ${days} дням до этого)`)
      const totals = new Map()
      for (const series of (perf.multiDailyMetricTimeSeries ?? []).flatMap((m) => m.dailyMetricTimeSeries ?? [])) {
        const t = { now: 0, prev: 0 }
        for (const v of series.timeSeries?.datedValues ?? []) {
          const d = `${v.date.year}-${String(v.date.month).padStart(2, '0')}-${String(v.date.day).padStart(2, '0')}`
          t[d >= split ? 'now' : 'prev'] += Number(v.value ?? 0)
        }
        totals.set(series.dailyMetric, t)
      }
      const views = [...totals].filter(([k]) => k.startsWith('BUSINESS_IMPRESSIONS')).reduce((s, [, t]) => ({ now: s.now + t.now, prev: s.prev + t.prev }), { now: 0, prev: 0 })
      console.log(`  ${pad('просмотры всего', 30)} ${pad(views.now, 6)} ${pct(views.now, views.prev)}`)
      for (const [k, label] of Object.entries(METRICS)) {
        const t = totals.get(k) ?? { now: 0, prev: 0 }
        console.log(`  ${pad(label, 30)} ${pad(t.now, 6)} ${pct(t.now, t.prev)}`)
      }

      // Search terms come per month only; take the last three full months.
      const first = new Date(); first.setUTCDate(1)
      const month = (back) => { const d = new Date(first); d.setUTCMonth(d.getUTCMonth() - back); return { y: d.getUTCFullYear(), m: d.getUTCMonth() + 1 } }
      const [from, to] = [month(3), month(1)]
      const kw = await gbpCall(`https://businessprofileperformance.googleapis.com/v1/${loc.name}/searchkeywords/impressions/monthly?monthlyRange.startMonth.year=${from.y}&monthlyRange.startMonth.month=${from.m}&monthlyRange.endMonth.year=${to.y}&monthlyRange.endMonth.month=${to.m}&pageSize=100`)
      console.log(`\nПОИСКОВЫЕ ЗАПРОСЫ ${from.y}-${String(from.m).padStart(2, '0')} → ${to.y}-${String(to.m).padStart(2, '0')}`)
      for (const r of (kw.searchKeywordsCounts ?? []).slice(0, 15)) {
        const v = r.insightsValue ?? {}
        console.log(`  ${pad(v.value ?? `<${v.threshold}`, 6)} ${r.searchKeyword}`)
      }
    }
  }
}

// v4 paths need the account too; find the one the Kisha listing sits under.
async function kishaParent() {
  const { accounts = [] } = await gbpCall('https://mybusinessaccountmanagement.googleapis.com/v1/accounts')
  for (const a of accounts) {
    const { locations = [] } = await gbpCall(`https://mybusinessbusinessinformation.googleapis.com/v1/${a.name}/locations?readMask=name&pageSize=100`)
    if (locations.some((l) => l.name === GBP_LOCATION)) return `${a.name}/${GBP_LOCATION}`
  }
  throw new Error(`${GBP_LOCATION} is not under this sign-in`)
}

async function gbpMedia() {
  const parent = await kishaParent()
  const items = []
  let page
  do {
    const r = await gbpCall(`${V4}/${parent}/media?pageSize=100${page ? `&pageToken=${page}` : ''}`)
    items.push(...(r.mediaItems ?? []))
    page = r.nextPageToken
  } while (page)
  console.log(`${items.length} photos/videos on the listing, newest first`)
  console.log(['created', 'format', 'category', 'views', 'size', 'id', 'thumbnail'].join('\t'))
  for (const m of items.sort((a, b) => b.createTime.localeCompare(a.createTime))) {
    console.log([m.createTime.slice(0, 10), m.mediaFormat, m.locationAssociation?.category ?? '', m.insights?.viewCount ?? '', `${m.dimensions?.widthPixels}x${m.dimensions?.heightPixels}`, m.name, m.thumbnailUrl].join('\t'))
  }
}

async function gbpPosts() {
  const parent = await kishaParent()
  const { localPosts = [] } = await gbpCall(`${V4}/${parent}/localPosts?pageSize=20`)
  for (const p of localPosts) {
    console.log(`${p.createTime.slice(0, 10)} ${p.state} ${p.topicType} ${(p.summary ?? '').replace(/\s+/g, ' ').slice(0, 60)}…`)
    console.log(`  ${p.callToAction?.url ?? '(no button)'}\n  ${p.searchUrl ?? ''}\n  ${p.name}`)
  }
}

// Google takes 10 KB–5 MB and at least 250 px. Re-encode every photo: it drops EXIF and keeps big originals under the cap.
async function gbpJpeg(file) {
  const sharp = (await import('sharp')).default
  return sharp(file).rotate().resize({ width: 2400, height: 2400, fit: 'inside', withoutEnlargement: true }).jpeg({ quality: 92 }).toBuffer()
}

async function gbpPhoto(file, publish) {
  if (!file || !existsSync(file)) throw new Error(`No such file: ${file}`)
  const bytes = await gbpJpeg(file)
  console.log(`${file} → ${Math.round(bytes.length / 1024)} KB JPEG, no EXIF`)
  if (!publish) return console.log('Dry run. Add --publish at the end to upload.')
  const parent = await kishaParent()
  const { resourceName } = await gbpCall(`${V4}/${parent}/media:startUpload`, {})
  await gbpCall(`https://mybusiness.googleapis.com/upload/v1/media/${resourceName}?upload_type=media`, bytes)
  const item = await gbpCall(`${V4}/${parent}/media`, { mediaFormat: 'PHOTO', locationAssociation: { category: 'ADDITIONAL' }, dataRef: { resourceName } })
  console.log(`Uploaded ${item.name}\n  ${item.googleUrl}`)
  return item
}

async function gbpPost(f, publish) {
  if (!f.text || !f.link?.startsWith('/')) throw new Error('Need --text <file> and --link /path')
  const summary = readFileSync(f.text, 'utf8').trim()
  if (summary.length > 1500) throw new Error(`Post is ${summary.length} chars, Google allows 1500`)
  const url = `https://kisha.tattoo${f.link}?utm_source=google&utm_medium=organic&utm_campaign=gbp_post`
  // A post takes photos only by public URL: reuse a gallery photo (accounts/…/media/…), or upload a local file to the gallery first.
  const gallery = f.photo?.includes(`/${GBP_LOCATION}/media/`)
  const local = f.photo && !gallery && !/^https?:/.test(f.photo)
  if (local && !existsSync(f.photo)) throw new Error(`No such file: ${f.photo}`)
  const galleryUrl = gallery && (await gbpCall(`${V4}/${f.photo}`)).googleUrl
  console.log(`Text (${summary.length} chars):\n${summary}\n\nButton "Learn more" → ${url}\nPhoto: ${galleryUrl || f.photo || 'none'}${local ? ' (uploaded to the gallery first, the post uses its Google URL)' : ''}`)
  if (!publish) return console.log('\nDry run. Add --publish at the end to post.')
  const sourceUrl = galleryUrl || (local ? (await gbpPhoto(f.photo, true)).googleUrl : f.photo)
  const parent = await kishaParent()
  const post = await gbpCall(`${V4}/${parent}/localPosts`, {
    languageCode: f.lang ?? 'de', topicType: 'STANDARD', summary,
    callToAction: { actionType: 'LEARN_MORE', url },
    ...(sourceUrl && { media: [{ mediaFormat: 'PHOTO', sourceUrl }] }),
  })
  console.log(`\nPosted: ${post.state}\n  ${post.searchUrl ?? ''}\n  ${post.name}`)
}

async function gbpDelete(name) {
  if (!name?.includes(`/${GBP_LOCATION}/`) || !/\/(localPosts|media)\/[^/]+$/.test(name)) throw new Error('Give the full name of a Kisha post or photo, as gbp-posts / gbp-photo print it')
  await gbpCall(`${V4}/${name}`, undefined, 'DELETE')
  console.log('Deleted', name)
}
