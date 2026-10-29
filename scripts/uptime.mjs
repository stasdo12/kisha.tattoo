// Uptime check for kisha.tattoo, run from GitHub Actions every 10 minutes and once a day.
// Writes to the same Telegram chat as the enquiries, but only when something changes:
// 🔴 when the site stops answering, 🟢 when it is back. The daily run always reports.
//
// Usage: node scripts/uptime.mjs [--daily] [--state <file>] [--dry]
//   --daily   always send a short "all fine / what is wrong" summary
//   --state   JSON file remembering the last result between runs (restored by actions/cache)
//   --dry     print the message instead of sending it
// Needs TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID (repo secrets in Actions, .env.local locally).
//
// Why from outside: on 29.10.2026 Cloudflare could not reach the server for Googlebot (edge 525),
// Search Console reported robots.txt as unreachable, and nobody would have known without
// looking. 55 such origin errors in the week before. A check living on the VPS itself would
// fall silent exactly when the server is down, so it runs on GitHub's machines.

import { connect } from 'node:tls'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'

const SITE = 'https://kisha.tattoo'
const ORIGIN_IP = '94.130.96.166'
const CERT_WARN_DAYS = 14

// Each page must answer 200 and contain its marker — a 200 with an empty or broken page
// (an error boundary, a half-deployed build) should count as down too.
const CHECKS = [
  { path: '/', marker: 'Kisha' },
  { path: '/robots.txt', marker: 'User-Agent' },
  { path: '/sitemap.xml', marker: '<urlset' },
  { path: '/booking', marker: 'Anfrage senden' },
  { path: '/tattoo-preise-muenchen', marker: 'ab 150' },
]

const args = process.argv.slice(2)
const daily = args.includes('--daily')
const dry = args.includes('--dry')
const stateFile = args.includes('--state') ? args[args.indexOf('--state') + 1] : null

async function checkOnce({ path, marker }) {
  const started = Date.now()
  try {
    const res = await fetch(SITE + path, {
      headers: { 'user-agent': 'kisha-uptime/1.0 (+https://kisha.tattoo)' },
      signal: AbortSignal.timeout(15_000),
    })
    const body = await res.text()
    const ms = Date.now() - started
    if (res.status !== 200) return { ok: false, ms, why: `код ${res.status}` }
    if (!body.includes(marker)) return { ok: false, ms, why: 'страница без нужного текста' }
    return { ok: true, ms }
  } catch (err) {
    return { ok: false, ms: Date.now() - started, why: err.name === 'TimeoutError' ? 'нет ответа 15 с' : err.message }
  }
}

/** A single blip is retried once after 30 s, so a deploy restart does not wake anybody. */
async function check(target) {
  const first = await checkOnce(target)
  if (first.ok) return { ...target, ...first }
  await new Promise((r) => setTimeout(r, 30_000))
  return { ...target, ...(await checkOnce(target)) }
}

/** Days left on the origin's own certificate (Let's Encrypt), asked of the VPS directly. */
function certDaysLeft() {
  return new Promise((resolve) => {
    const socket = connect({ host: ORIGIN_IP, port: 443, servername: 'kisha.tattoo', timeout: 10_000 }, () => {
      const cert = socket.getPeerCertificate()
      socket.end()
      resolve(cert?.valid_to ? Math.floor((new Date(cert.valid_to) - Date.now()) / 86_400_000) : null)
    })
    socket.on('error', () => resolve(null))
    socket.on('timeout', () => { socket.destroy(); resolve(null) })
  })
}

async function send(text) {
  if (dry) return console.log(`--- would send ---\n${text}`)
  const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: process.env.TELEGRAM_CHAT_ID, text, parse_mode: 'HTML', disable_web_page_preview: true }),
  })
  if (!res.ok) throw new Error(`Telegram ${res.status}: ${await res.text()}`)
}

const results = await Promise.all(CHECKS.map(check))
const days = await certDaysLeft()
const failed = results.filter((r) => !r.ok)
const certBad = days === null || days < CERT_WARN_DAYS
const ok = failed.length === 0 && !certBad

const previous = stateFile && existsSync(stateFile) ? JSON.parse(readFileSync(stateFile, 'utf8')) : { ok: true }
if (stateFile) writeFileSync(stateFile, JSON.stringify({ ok, at: new Date().toISOString() }))

const problems = [
  ...failed.map((r) => `• ${r.path} — ${r.why}`),
  ...(certBad ? [`• SSL-сертификат сервера: ${days === null ? 'не удалось проверить' : `осталось ${days} дн.`}`] : []),
].join('\n')
const slowest = Math.max(...results.map((r) => r.ms))

console.log(results.map((r) => `${r.ok ? 'ok ' : 'BAD'} ${r.path} ${r.ms} ms${r.why ? ` (${r.why})` : ''}`).join('\n'))
console.log(`cert days left: ${days}; previous ok: ${previous.ok}; now ok: ${ok}`)

if (daily) {
  await send(ok
    ? `🟢 <b>kisha.tattoo работает</b>\n${CHECKS.length} страниц отвечают, самая медленная ${slowest} мс\nSSL-сертификат ещё ${days} дн.`
    : `🔴 <b>kisha.tattoo: есть проблемы</b>\n${problems}`)
} else if (!ok && previous.ok) {
  await send(`🔴 <b>Сайт kisha.tattoo не в порядке</b>\n${problems}\n\nПроверено дважды с интервалом 30 с.`)
} else if (ok && !previous.ok) {
  await send(`🟢 <b>kisha.tattoo снова работает</b>\nВсе ${CHECKS.length} страниц отвечают, самая медленная ${slowest} мс`)
}
