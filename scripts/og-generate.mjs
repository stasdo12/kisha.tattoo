// Generates one 1200x630 Open Graph image per blog article from its cover.
// Sources and framing come from content/stories.ts (coverImageBig) — the same
// file the article hero reads, cropped the same way the hero crops it
// (objectFit: cover / objectPosition: center, see app/[locale]/blog/[slug]/page.tsx).
// Output: public/og/blog/<slug>.jpg, wired in via buildMetadata's ogImage.
// Run after adding an article: npm run og
//
// 1200x630 is not cosmetic — lib/seo.ts declares those exact dimensions in the
// og:image tags, so a source passed through unresized would advertise a size it
// does not have and get cropped arbitrarily by each platform.

import { mkdirSync, readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const OG_WIDTH = 1200
const OG_HEIGHT = 630

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
const outDir = path.join(publicDir, 'og', 'blog')

// Landing pages have no cover field to read, so their source is named here.
// Each photo is picked to represent that page honestly and is not in use as an
// article cover — otherwise two different links would unfurl with one image.
const LANDINGS = [
  { name: 'fineline-tattoo-muenchen', source: '/images/work/maigloeckchen-tattoo-unterarm.jpg' },
  { name: 'walk-in-tattoo-muenchen', source: '/images/work/4x4-dog-tattoo-fineline.jpg' },
  { name: 'tattoo-preise-muenchen', source: '/images/work/spiegel-tattoo-graphic.jpg' },
]

/** Pulls slug + coverImageBig pairs straight out of the TS source. */
function readStories() {
  const src = readFileSync(path.join(root, 'content', 'stories.ts'), 'utf8')
  const re = /slug:\s*'([^']+)'[\s\S]*?coverImageBig:\s*'([^']+)'/g
  const stories = [...src.matchAll(re)].map(([, slug, cover]) => ({ slug, cover }))
  if (stories.length === 0) throw new Error('No stories parsed from content/stories.ts')
  return stories
}

async function generate({ slug, cover, dir = outDir }) {
  const source = path.join(publicDir, cover)
  const target = path.join(dir, `${slug}.jpg`)

  const meta = await sharp(source).metadata()

  const info = await sharp(source)
    .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: 'centre' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(target)

  return {
    slug,
    kb: Math.round(info.size / 1024),
    // Anything narrower than the OG width gets upscaled — still far better than
    // a generic fallback, but worth flagging so a better source can replace it.
    upscaled: meta.width < OG_WIDTH ? `${meta.width}x${meta.height}` : null,
  }
}

async function main() {
  const landingDir = path.join(publicDir, 'og')
  mkdirSync(outDir, { recursive: true })
  mkdirSync(landingDir, { recursive: true })

  const jobs = [
    ...readStories().map(({ slug, cover }) => ({ slug, cover })),
    ...LANDINGS.map(({ name, source }) => ({ slug: name, cover: source, dir: landingDir })),
  ]

  const results = []
  const failures = []

  for (const job of jobs) {
    try {
      results.push(await generate(job))
    } catch (err) {
      failures.push({ slug: job.slug, cover: job.cover, message: err.message })
    }
  }

  for (const r of results) {
    const note = r.upscaled ? `  ⚠ upscaled from ${r.upscaled}` : ''
    console.log(`  ${r.slug.padEnd(46)} ${String(r.kb).padStart(4)} KB${note}`)
  }

  const totalKb = results.reduce((sum, r) => sum + r.kb, 0)
  console.log(`\n${results.length}/${jobs.length} images → public/og/ (${totalKb} KB total)`)

  const upscaled = results.filter((r) => r.upscaled)
  if (upscaled.length > 0) {
    console.log(`${upscaled.length} upscaled from a source narrower than ${OG_WIDTH}px — replace those covers when a bigger original shows up.`)
  }

  if (failures.length > 0) {
    console.error('\nFailed:')
    for (const f of failures) console.error(`  ${f.slug} (${f.cover}): ${f.message}`)
    process.exit(1)
  }
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})
