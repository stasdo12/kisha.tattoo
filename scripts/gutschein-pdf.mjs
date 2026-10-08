// Renders a Tattoo Gutschein as a two-page A5-landscape PDF from the design in
// scripts/gutschein-template.html (Claude Design handoff, 2026-10-08).
//
//   npm run gutschein -- --betrag 200 --fuer "Anna Muster" --von "Max Muster"
//
// Options
//   --betrag   200 | 500 | 1000 (required)
//   --fuer     recipient, printed after "Für" (optional — leave blank to write by hand)
//   --von      giver, printed after "Von" (optional)
//   --datum    issue date DD.MM.YYYY (default: today)
//   --nr       voucher number (default: next free KT-<year>-NNNN from the log)
//   --hell     light variant for home printing (default: dark)
//   --bleed    add 3 mm bleed for a print shop (default: trim size 210 × 148 mm)
//   --unterschrift  path to a PNG/JPG signature placed on the signature line
//   --out      output directory (default: ./gutscheine, git-ignored)
//
// Validity: three years counted from the end of the issue year — the BGB
// default (§195) and what the AI Overview on "wie lange ist ein tattoo
// gutschein gültig" tells buyers to expect. A shorter printed term is contestable
// and buys nothing.
//
// Every issued voucher is appended to <out>/gutscheine.csv so numbers never
// repeat and Kisha can look up who got what.

import { parseArgs } from 'node:util'
import { existsSync, mkdirSync, readFileSync, appendFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { chromium } from '@playwright/test'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const TEMPLATE = path.join(__dirname, 'gutschein-template.html')
const AMOUNTS = ['200', '500', '1000']

const { values: args } = parseArgs({
  options: {
    betrag: { type: 'string' },
    fuer: { type: 'string', default: '' },
    von: { type: 'string', default: '' },
    datum: { type: 'string' },
    nr: { type: 'string' },
    hell: { type: 'boolean', default: false },
    bleed: { type: 'boolean', default: false },
    unterschrift: { type: 'string' },
    out: { type: 'string', default: path.join(__dirname, '..', 'gutscheine') },
  },
})

if (!args.betrag || !AMOUNTS.includes(args.betrag)) {
  console.error(`--betrag must be one of ${AMOUNTS.join(', ')}`)
  process.exit(1)
}

const today = new Date()
const pad = (n) => String(n).padStart(2, '0')
const issued = args.datum ?? `${pad(today.getDate())}.${pad(today.getMonth() + 1)}.${today.getFullYear()}`
const issuedMatch = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(issued)
if (!issuedMatch) {
  console.error('--datum must be DD.MM.YYYY')
  process.exit(1)
}
const issueYear = Number(issuedMatch[3])
const validUntil = `31.12.${issueYear + 3}`

mkdirSync(args.out, { recursive: true })
const LOG = path.join(args.out, 'gutscheine.csv')
const LOG_HEADER = 'nummer,ausgestellt,gueltig_bis,betrag,fuer,von,variante,datei\n'

function nextNumber() {
  const prefix = `KT-${issueYear}-`
  let max = 0
  if (existsSync(LOG)) {
    for (const line of readFileSync(LOG, 'utf8').split('\n')) {
      const m = new RegExp(`^${prefix}(\\d{4}),`).exec(line)
      if (m) max = Math.max(max, Number(m[1]))
    }
  }
  return `${prefix}${String(max + 1).padStart(4, '0')}`
}
const number = args.nr ?? nextNumber()

if (existsSync(LOG) && readFileSync(LOG, 'utf8').split('\n').some((l) => l.startsWith(`${number},`))) {
  console.error(`${number} is already in ${LOG} — pass --nr to override on purpose`)
  process.exit(1)
}

let signature = ''
if (args.unterschrift) {
  const file = path.resolve(args.unterschrift)
  if (!existsSync(file)) {
    console.error(`signature file not found: ${file}`)
    process.exit(1)
  }
  const ext = path.extname(file).slice(1).toLowerCase()
  const mime = ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : ext === 'svg' ? 'image/svg+xml' : 'image/png'
  signature = `<img src="data:${mime};base64,${readFileSync(file).toString('base64')}" alt="">`
}

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
const bleedMm = args.bleed ? 3 : 0
const fill = {
  amount: `${args.betrag} €`,
  recipient: esc(args.fuer),
  giver: esc(args.von),
  number: esc(number),
  issued,
  validUntil,
  signature,
  theme: args.hell ? 'light' : 'dark',
  bleed: `${bleedMm}mm`,
  pageW: `${210 + 2 * bleedMm}mm`,
  pageH: `${148 + 2 * bleedMm}mm`,
}
const html = readFileSync(TEMPLATE, 'utf8').replace(/\{\{(\w+)\}\}/g, (_, k) => {
  if (!(k in fill)) throw new Error(`template placeholder without a value: ${k}`)
  return fill[k]
})

const variant = [args.hell ? 'hell' : 'dunkel', args.bleed ? 'bleed' : null].filter(Boolean).join('-')
const file = path.join(args.out, `${number}-${args.betrag}-${variant}.pdf`)

const browser = await chromium.launch()
try {
  const page = await browser.newPage()
  await page.setContent(html, { waitUntil: 'networkidle' })
  // Google Fonts arrive after networkidle on a cold cache — wait for them, or
  // Cinzel falls back to Times in the PDF.
  await page.evaluate(() => document.fonts.ready)
  await page.pdf({
    path: file,
    width: fill.pageW,
    height: fill.pageH,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  })
} finally {
  await browser.close()
}

if (!existsSync(LOG)) appendFileSync(LOG, LOG_HEADER)
const q = (s) => `"${String(s).replace(/"/g, '""')}"`
appendFileSync(LOG, [number, issued, validUntil, args.betrag, q(args.fuer), q(args.von), variant, path.basename(file)].join(',') + '\n')

console.log(`${number}  ${args.betrag} €  ${issued} → ${validUntil}  ${args.hell ? 'hell' : 'dunkel'}${args.bleed ? ' +3 mm bleed' : ''}`)
console.log(file)
console.log(`logged in ${LOG}`)
