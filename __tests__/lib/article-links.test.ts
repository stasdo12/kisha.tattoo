import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'

// Article links go through the locale-aware Link, which adds /en or /uk itself.
// A link written as [x](/en/motive) therefore lands on /en/en/motive, a 404.
describe.each(['de', 'en', 'uk'])('article links in %s', (locale) => {
  const messages = JSON.parse(readFileSync(join(process.cwd(), 'messages', `${locale}.json`), 'utf8'))
  const stories = messages.blog.stories as Record<string, { body?: string }>
  const links = Object.entries(stories).flatMap(([slug, story]) =>
    [...(story.body ?? '').matchAll(/(?<!!)\[[^\]]+\]\(([^)\s]+)/g)].map((match) => `${slug} → ${match[1]}`),
  )

  it.each(links)('%s', (link) => {
    expect(link).not.toMatch(/→ \/(de|en|uk)(\/|$)/)
  })
})
