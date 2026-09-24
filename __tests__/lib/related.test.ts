import { describe, it, expect } from 'vitest'
import { pickRelated } from '@/lib/related'
import { STORIES } from '@/content/stories'

describe('pickRelated', () => {
  it('returns four articles and never the current one', () => {
    for (const story of STORIES) {
      const related = pickRelated(STORIES, story.slug)
      expect(related).toHaveLength(4)
      expect(related.map((r) => r.slug)).not.toContain(story.slug)
    }
  })

  it('never repeats an article within one block', () => {
    for (const story of STORIES) {
      const slugs = pickRelated(STORIES, story.slug).map((r) => r.slug)
      expect(new Set(slugs).size).toBe(slugs.length)
    }
  })

  // The regression that cost us the index: "four newest on every page" left most
  // of the archive with no inbound link at all.
  it('spreads inbound links across the whole archive', () => {
    const inbound = new Map(STORIES.map((s) => [s.slug, 0]))
    for (const story of STORIES) {
      for (const r of pickRelated(STORIES, story.slug)) {
        inbound.set(r.slug, (inbound.get(r.slug) ?? 0) + 1)
      }
    }
    const counts = [...inbound.values()]
    expect(Math.min(...counts)).toBeGreaterThan(0)
    // No article may hoard more than a quarter of the archive's links.
    expect(Math.max(...counts)).toBeLessThanOrEqual(Math.ceil(STORIES.length / 4))
  })

  it('prefers articles from the same category', () => {
    const withPeers = STORIES.filter(
      (s) => STORIES.filter((o) => o.category === s.category && o.slug !== s.slug).length >= 4
    )
    expect(withPeers.length).toBeGreaterThan(0)
    for (const story of withPeers) {
      const related = pickRelated(STORIES, story.slug)
      expect(related.every((r) => r.category === story.category)).toBe(true)
    }
  })

  it('copes with a slug that is not in the archive', () => {
    expect(pickRelated(STORIES, 'does-not-exist')).toHaveLength(4)
  })

  it('does not fall over on a tiny archive', () => {
    const tiny = STORIES.slice(0, 3)
    expect(pickRelated(tiny, tiny[0].slug).length).toBe(2)
  })
})
