// Pinterest API v5 — OAuth, boards, and pin creation.
//
//   npm run pinterest auth            one-time browser login, stores the token
//   npm run pinterest boards          lists boards with their ids
//   npm run pinterest board <name>    creates a board
//   npm run pinterest pin <board_id> <slug>
//                                     pins a blog article using the OG image
//                                     already published at /og/blog/<slug>.jpg
//
// Add --sandbox to any command to talk to the Sandbox environment instead.
// Through npm it needs the separator, or npm eats the flag itself:
//   npm run pinterest boards -- --sandbox
//
// TWO HOSTS, AND ON TRIAL ONLY ONE OF THEM ACCEPTS WRITES. Production
// (api.pinterest.com) refuses pin creation outright — error 29, "Apps with
// Trial access may not create Pins in production". Reads work there, which is
// why `boards` without a flag lists the real account. Writes go to
// api-sandbox.pinterest.com, reached with --sandbox.
//
// WHAT --sandbox ACTUALLY DOES, AND WHY IT LOOKS LIKE PUBLISHING: writes land
// in the real account, not in a copy of it. A board created through the sandbox
// host showed up on the live KishaTattoo profile next to the real ones; pins
// landed on real boards, came back from GET /pins in production, carried
// is_standard true, and accumulated view counts. Everything an owner can see
// says "published".
//
// It is not published. The public oEmbed endpoint settles it — it answers only
// for pins visible to everyone:
//   pinterest.com/oembed.json?url=<a pin made by hand>  → 200, pin data
//   pinterest.com/oembed.json?url=<a pin made here>     → 400, "Url was not found"
// The view counts were us: the owner's own visits are counted, and the owner is
// the only one who can visit.
//
// So a Trial pin is real, lives in the account, and is invisible to everyone
// else. Not an isolated copy, not a live post. Nothing published this way
// reaches an audience until Standard access is granted.
//
// One thing does behave like a separate environment: GET /boards on the sandbox
// host reports an empty list no matter what exists.
//
// Credentials come from .env.local (gitignored):
//   PINTEREST_APP_ID / PINTEREST_APP_SECRET   OAuth, production
//   PINTEREST_SANDBOX_TOKEN                   generated in the app console:
//     developers.pinterest.com/apps → Manage → Configure → Generate Access
//     Token → environment Sandbox. Valid 30 days. Sandbox rejects production
//     tokens, so OAuth cannot stand in for it.
//
// The OAuth token is written to .pinterest-token.json, also gitignored — it is
// a credential, not a build artifact.

import { readFileSync, writeFileSync, existsSync, unlinkSync } from 'node:fs'
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const SITE_URL = 'https://kisha.tattoo'
const AUTH_URL = 'https://www.pinterest.com/oauth/'
const API = 'https://api.pinterest.com/v5'
const SANDBOX_API = 'https://api-sandbox.pinterest.com/v5'

// Set by the --sandbox flag before any command runs.
let sandbox = false

// Must match a redirect URI registered on the app, character for character.
const REDIRECT_PORT = 8385
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}/callback`

const SCOPES = ['boards:read', 'boards:write', 'pins:read', 'pins:write', 'user_accounts:read']

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const tokenFile = path.join(root, '.pinterest-token.json')

function credentials() {
  const id = process.env.PINTEREST_APP_ID
  const secret = process.env.PINTEREST_APP_SECRET
  if (!id || !secret) {
    throw new Error(
      'Missing PINTEREST_APP_ID / PINTEREST_APP_SECRET in .env.local.\n' +
      'Both are on the app page at developers.pinterest.com → Manage apps.'
    )
  }
  return { id, secret }
}

/** Each environment issues its own token; keep them in separate files. */
function tokenPath() {
  return sandbox ? `${tokenFile.replace('.json', '')}-sandbox.json` : tokenFile
}

function readToken() {
  // Two ways to hold a Sandbox token, both valid: the console generates one in
  // a click (Sandbox grants the full scope table there — it is the Production
  // console token that is read-only), or OAuth issues one. The console token
  // wins when present because it is the cheaper path to re-establish.
  if (sandbox && process.env.PINTEREST_SANDBOX_TOKEN) {
    return process.env.PINTEREST_SANDBOX_TOKEN
  }
  const file = tokenPath()
  if (!existsSync(file)) {
    throw new Error(
      `No ${sandbox ? 'Sandbox' : 'production'} token.\n` +
      `Either run: npm run pinterest auth${sandbox ? ' -- --sandbox' : ''}\n` +
      (sandbox ? 'or paste a console token into .env.local as PINTEREST_SANDBOX_TOKEN.' : '')
    )
  }
  return JSON.parse(readFileSync(file, 'utf8')).access_token
}

async function api(pathname, { method = 'GET', body } = {}) {
  const res = await fetch(`${sandbox ? SANDBOX_API : API}${pathname}`, {
    method,
    headers: {
      Authorization: `Bearer ${readToken()}`,
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })
  const text = await res.text()
  if (!res.ok) throw new Error(`${method} ${pathname} → ${res.status}\n${text}`)
  return text ? JSON.parse(text) : null
}

/** Opens the consent page, catches the redirect locally, swaps code for token. */
async function auth() {
  const { id } = credentials()
  const state = `kisha-${process.pid}`

  const url = new URL(AUTH_URL)
  url.searchParams.set('client_id', id)
  url.searchParams.set('redirect_uri', REDIRECT_URI)
  url.searchParams.set('response_type', 'code')
  url.searchParams.set('scope', SCOPES.join(','))
  url.searchParams.set('state', state)

  console.log('\nOpen this in the browser where the Pinterest account is logged in:\n')
  console.log(url.toString())
  console.log(`\nWaiting for the redirect back to ${REDIRECT_URI} ...`)

  const code = await new Promise((resolve, reject) => {
    const server = createServer((req, res) => {
      const incoming = new URL(req.url, `http://localhost:${REDIRECT_PORT}`)
      if (incoming.pathname !== '/callback') {
        res.writeHead(404).end()
        return
      }
      const error = incoming.searchParams.get('error')
      const returned = incoming.searchParams.get('code')

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(`<p style="font:16px system-ui">${error ? `Pinterest returned: ${error}` : 'Done — back to the terminal.'}</p>`)
      server.close()

      if (error) return reject(new Error(`Pinterest denied authorization: ${error}`))
      if (incoming.searchParams.get('state') !== state) return reject(new Error('state mismatch — aborting'))
      if (!returned) return reject(new Error('No code in the redirect'))
      resolve(returned)
    })
    server.on('error', reject)
    server.listen(REDIRECT_PORT)
  })

  const parsed = await exchangeCode(code)
  console.log(`\n${sandbox ? 'Sandbox' : 'Production'} token stored in ${path.basename(tokenPath())}`)
  console.log(`  scopes: ${parsed.scope ?? SCOPES.join(',')}`)
}

/** Swaps an authorization code for a token and stores it. Shared by the CLI
 *  flow and the local UI, so the two cannot drift apart. */
async function exchangeCode(code) {
  const { id, secret } = credentials()
  // Same consent page for both environments — only the exchange host differs,
  // and that is what decides which environment the token is good for.
  const res = await fetch(`${sandbox ? SANDBOX_API : API}/oauth/token`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString('base64')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }),
  })

  const text = await res.text()
  if (!res.ok) throw new Error(`Token exchange failed → ${res.status}\n${text}`)

  writeFileSync(tokenPath(), text)
  return JSON.parse(text)
}

async function boards() {
  const data = await api('/boards')
  if (!data.items?.length) {
    console.log(
      sandbox
        ? 'No boards in Sandbox — it starts empty. Create one: npm run pinterest board "Arbeit" --sandbox'
        : 'No boards on this account yet — create one in Pinterest, then run this again.'
    )
    return
  }
  for (const b of data.items) {
    console.log(`  ${b.id}  ${b.name}${b.privacy && b.privacy !== 'PUBLIC' ? `  (${b.privacy})` : ''}`)
  }
  console.log(`\n${data.items.length} board(s) in ${sandbox ? 'Sandbox' : 'production'}.`)
}

async function board(name) {
  if (!name) throw new Error('Usage: npm run pinterest board "<name>" [--sandbox]')
  const created = await api('/boards', { method: 'POST', body: { name } })
  console.log(`\nBoard created in ${sandbox ? 'Sandbox' : 'production'}: ${created.id}  ${created.name}`)
}

async function unpin(pinId) {
  if (!pinId) throw new Error('Usage: npm run pinterest unpin <pin_id>')
  await api(`/pins/${pinId}`, { method: 'DELETE' })
  console.log(`Pin ${pinId} deleted.`)
}

async function unboard(boardId) {
  if (!boardId) throw new Error('Usage: npm run pinterest unboard <board_id>')
  await api(`/boards/${boardId}`, { method: 'DELETE' })
  console.log(`Board ${boardId} deleted — along with every Pin on it.`)
}

/** Everything one article contributes to a Pin. The title and excerpt come from
 *  the German messages rather than the slug, because a Pin description is
 *  searchable on Pinterest and a slug would waste that surface. */
function articleFor(slug) {
  const messages = JSON.parse(readFileSync(path.join(root, 'messages', 'de.json'), 'utf8'))
  const story = messages.blog?.stories?.[slug]
  if (!story) throw new Error(`No article "${slug}" in messages/de.json`)
  return {
    slug,
    title: story.title,
    excerpt: story.excerpt ?? '',
    image: `${SITE_URL}/og/blog/${slug}.jpg`,
    link: `${SITE_URL}/blog/${slug}`,
  }
}

/** Articles offered by the UI, newest first — the same list and order the blog
 *  itself publishes, read from content/stories.ts. */
function listArticles() {
  const src = readFileSync(path.join(root, 'content', 'stories.ts'), 'utf8')
  const entries = [...src.matchAll(/slug:\s*'([^']+)'[\s\S]*?publishedAt:\s*'([^']+)'/g)]
  return entries
    .map(([, slug, publishedAt]) => ({ ...articleFor(slug), publishedAt }))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

async function pin(boardId, slug) {
  if (!boardId || !slug) throw new Error('Usage: npm run pinterest pin <board_id> <article-slug>')
  const created = await createPin(boardId, slug)
  console.log(`\n  ${created.article.title}`)
  console.log(`\nPin created in ${sandbox ? 'Sandbox' : 'production'}: ${created.id}`)
  console.log(`  image  ${created.article.image}`)
  console.log(`  link   ${created.article.link}`)
  console.log('\nIn the account and visible to you, invisible to everyone else until Standard access.')
}

/** Creates one Pin from an article. Returns Pinterest's object plus the
 *  article fields, so callers need not look them up a second time. */
async function createPin(boardId, slug) {
  const article = articleFor(slug)

  // Fail loudly here rather than letting Pinterest report a vague media error.
  const head = await fetch(article.image, { method: 'HEAD' })
  if (!head.ok) throw new Error(`${article.image} → ${head.status}. Run npm run og first.`)

  const created = await api('/pins', {
    method: 'POST',
    body: {
      board_id: boardId,
      link: article.link,
      title: article.title,
      // Pinterest caps the description at 500 characters.
      description: article.excerpt.slice(0, 500),
      media_source: { source_type: 'image_url', url: article.image },
    },
  })

  return { ...created, article }
}

const argv = process.argv.slice(2)
sandbox = argv.includes('--sandbox')

/**
 * Local one-page console: connect, pick a board, pin an article.
 *
 * Reads boards from production — Trial allows reads there, and those are the
 * real boards — but writes Pins to Sandbox, which is the only place Trial may
 * write. Production board ids are accepted by Sandbox (verified), so the two
 * halves line up and the flow stays coherent end to end. When Standard lands,
 * WRITE_ENV flips to 'production' and nothing else changes.
 */
const WRITE_ENV = 'sandbox'

async function ui() {
  credentials() // fail early if the app is not configured
  const html = readFileSync(path.join(__dirname, 'pinterest-ui.html'), 'utf8')
  const icon = readFileSync(path.join(root, 'app', 'icon.png'))

  const json = (res, code, data) => {
    res.writeHead(code, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(data))
  }

  /** Runs fn against a chosen environment without disturbing the global flag. */
  const withEnv = async (env, fn) => {
    const previous = sandbox
    sandbox = env === 'sandbox'
    try { return await fn() } finally { sandbox = previous }
  }

  const server = createServer(async (req, res) => {
    const url = new URL(req.url, `http://localhost:${REDIRECT_PORT}`)

    try {
      if (url.pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        return res.end(html)
      }

      if (url.pathname === '/icon.png') {
        res.writeHead(200, { 'Content-Type': 'image/png' })
        return res.end(icon)
      }

      if (url.pathname === '/connect') {
        const { id } = credentials()
        const to = new URL(AUTH_URL)
        to.searchParams.set('client_id', id)
        to.searchParams.set('redirect_uri', REDIRECT_URI)
        to.searchParams.set('response_type', 'code')
        to.searchParams.set('scope', SCOPES.join(','))
        to.searchParams.set('state', 'ui')
        res.writeHead(302, { Location: to.toString() })
        return res.end()
      }

      if (url.pathname === '/callback') {
        const code = url.searchParams.get('code')
        if (!code) throw new Error(url.searchParams.get('error') ?? 'no code returned')
        await withEnv('production', () => exchangeCode(code))
        res.writeHead(302, { Location: '/' })
        return res.end()
      }

      if (url.pathname === '/api/state') {
        if (!existsSync(tokenFile)) return json(res, 200, { connected: false })
        const [account, boardList] = await withEnv('production', async () => [
          await api('/user_account'),
          await api('/boards'),
        ])
        return json(res, 200, {
          connected: true,
          writeEnv: WRITE_ENV,
          account: { name: account.business_name ?? account.username, avatar: account.profile_image },
          boards: (boardList.items ?? []).map((b) => ({ id: b.id, name: b.name })),
          articles: listArticles(),
        })
      }

      if (url.pathname === '/api/pin' && req.method === 'POST') {
        const body = JSON.parse(await readBody(req))
        const created = await withEnv(WRITE_ENV, () => createPin(body.board_id, body.slug))
        return json(res, 200, { id: created.id })
      }

      if (url.pathname === '/api/disconnect' && req.method === 'POST') {
        if (existsSync(tokenFile)) unlinkSync(tokenFile)
        return json(res, 200, { ok: true })
      }

      res.writeHead(404).end()
    } catch (err) {
      json(res, 500, { error: err.message.split('\n')[0] })
    }
  })

  server.listen(REDIRECT_PORT, () => {
    console.log(`\n  KishaTattoo → Pinterest\n  http://localhost:${REDIRECT_PORT}\n\n  Ctrl+C to stop.`)
  })
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => { data += chunk })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })
}

const [command, ...args] = argv.filter((a) => a !== '--sandbox')
const commands = { auth, boards, board, pin, unpin, unboard, ui }

if (!commands[command]) {
  console.log('Usage: npm run pinterest <ui|auth|boards|board|pin|unpin|unboard> [-- --sandbox]')
  process.exit(1)
}

commands[command](...args).catch((err) => {
  console.error(`\n${err.message}`)
  process.exit(1)
})
