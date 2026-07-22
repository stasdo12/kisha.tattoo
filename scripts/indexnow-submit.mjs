// Submits all sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver).
// Google does not participate in IndexNow — this has no effect on Google indexing.
// Usage: npm run indexnow

import { readdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const HOST = 'kisha.tattoo'
const SITE_URL = `https://${HOST}`

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(__dirname, '..', 'public')

function findKeyFile() {
  const match = readdirSync(publicDir).find((f) => /^[a-f0-9]{32}\.txt$/.test(f))
  if (!match) throw new Error('No IndexNow key file found in /public (expected a 32-char hex .txt file)')
  return match.replace('.txt', '')
}

async function fetchSitemapUrls() {
  const res = await fetch(`${SITE_URL}/sitemap.xml`)
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`)
  const xml = await res.text()
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
  if (urls.length === 0) throw new Error('No URLs found in sitemap.xml')
  return urls
}

async function submit(key, urls) {
  const body = {
    host: HOST,
    key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList: urls,
  }
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(body),
  })
  return res
}

const key = findKeyFile()
console.log(`Using IndexNow key: ${key}`)

const urls = await fetchSitemapUrls()
console.log(`Submitting ${urls.length} URLs from sitemap.xml...`)

const res = await submit(key, urls)
console.log(`IndexNow response: ${res.status} ${res.statusText}`)
if (!res.ok) {
  const text = await res.text()
  console.error(text)
  process.exit(1)
}
console.log('Done.')
