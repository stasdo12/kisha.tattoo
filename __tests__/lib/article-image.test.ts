import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it, expect } from 'vitest'
import { parseArticleImage } from '@/lib/article-image'

describe('parseArticleImage', () => {
  it('reads alt, src, size and caption', () => {
    expect(parseArticleImage('![Farn am Arm](/images/work/farn.jpg 1024x1536 "Farn in Fineline")')).toEqual({
      src: '/images/work/farn.jpg',
      alt: 'Farn am Arm',
      width: 1024,
      height: 1536,
      caption: 'Farn in Fineline',
    })
  })

  it('treats the caption as optional', () => {
    expect(parseArticleImage('![Farn](/images/work/farn.jpg 1024x1536)')?.caption).toBeUndefined()
  })

  it('leaves ordinary paragraphs and links alone', () => {
    expect(parseArticleImage('Mehr dazu [hier](/booking).')).toBeNull()
  })
})

// A block the parser rejects would land on the page as raw markdown, and a wrong
// path as a broken image, so every photo in every article is checked here.
describe.each(['de', 'en', 'uk'])('article photos in %s', (locale) => {
  const messages = JSON.parse(readFileSync(join(process.cwd(), 'messages', `${locale}.json`), 'utf8'))
  const stories = messages.blog.stories as Record<string, { body?: string }>
  const blocks = Object.values(stories)
    .flatMap((story) => story.body?.split('\n\n') ?? [])
    .filter((block) => block.startsWith('!['))

  it.each(blocks)('%s', (block) => {
    const image = parseArticleImage(block)
    expect(image).not.toBeNull()
    expect(existsSync(join(process.cwd(), 'public', image!.src))).toBe(true)
  })
})
