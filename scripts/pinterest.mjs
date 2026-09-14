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
// TWO ENVIRONMENTS, AND TRIAL ACCESS ONLY WRITES TO ONE OF THEM. Production
// (api.pinterest.com) refuses pin creation on Trial outright — error 29, "Apps
// with Trial access may not create Pins in production". Reads work there, which
// is why `boards` without a flag lists the real account. Writes have to go to
// Sandbox (api-sandbox.pinterest.com), which holds entirely separate data: its
// own boards, its own pins, none of it visible on the real profile and none of
// it transferable to production later.
//
// So the Sandbox pass is a rehearsal, not a soft launch. It proves the code
// works and gives the Standard access review something to watch; real pins
// start only once Standard is granted and the same calls point at production.
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

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
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
  const { id, secret } = credentials()
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
  const parsed = JSON.parse(text)
  console.log(`\n${sandbox ? 'Sandbox' : 'Production'} token stored in ${path.basename(tokenPath())}`)
  console.log(`  scopes: ${parsed.scope ?? SCOPES.join(',')}`)
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

/** Real article title and excerpt — a pin description is searchable on
 *  Pinterest, so shipping the slug there would waste the surface. */
function articleText(slug) {
  const messages = JSON.parse(readFileSync(path.join(root, 'messages', 'de.json'), 'utf8'))
  const story = messages.blog?.stories?.[slug]
  if (!story) throw new Error(`No article "${slug}" in messages/de.json`)
  return { title: story.title, excerpt: story.excerpt }
}

async function pin(boardId, slug) {
  if (!boardId || !slug) throw new Error('Usage: npm run pinterest pin <board_id> <article-slug>')

  const { title, excerpt } = articleText(slug)
  const image = `${SITE_URL}/og/blog/${slug}.jpg`
  const link = `${SITE_URL}/blog/${slug}`

  // Fail loudly here rather than letting Pinterest report a vague media error.
  const head = await fetch(image, { method: 'HEAD' })
  if (!head.ok) throw new Error(`${image} → ${head.status}. Run npm run og first.`)

  const created = await api('/pins', {
    method: 'POST',
    body: {
      board_id: boardId,
      link,
      title,
      // Pinterest caps the description at 500 characters.
      description: excerpt.slice(0, 500),
      media_source: { source_type: 'image_url', url: image },
    },
  })

  console.log(`\n  ${title}`)

  console.log(`\nPin created in ${sandbox ? 'Sandbox' : 'production'}: ${created.id}`)
  console.log(`  image  ${image}`)
  console.log(`  link   ${link}`)
  if (sandbox) console.log('\nSandbox pin — not on the real profile, and not transferable to it.')
}

const argv = process.argv.slice(2)
sandbox = argv.includes('--sandbox')

const [command, ...args] = argv.filter((a) => a !== '--sandbox')
const commands = { auth, boards, board, pin }

if (!commands[command]) {
  console.log('Usage: npm run pinterest <auth|boards|board|pin> [--sandbox]')
  process.exit(1)
}

commands[command](...args).catch((err) => {
  console.error(`\n${err.message}`)
  process.exit(1)
})
