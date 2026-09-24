import type { StoryMeta } from '@/content/stories'

/**
 * The four articles linked from the foot of an article.
 *
 * Same category first, then whatever follows this article in publication order,
 * wrapping around at the end of the archive.
 *
 * The old rule was "the four newest", on every page. That gave four articles an
 * inbound link from all 28 and left the rest with nothing but the blog index —
 * and the ones with nothing are exactly the ones Google stopped indexing.
 * Rotating from each article's own position spreads the same four slots across
 * the whole archive, so no article depends on a single link.
 */
export function pickRelated(stories: readonly StoryMeta[], slug: string, count = 4): StoryMeta[] {
  const here = stories.findIndex((s) => s.slug === slug)
  const rotated = here === -1
    ? stories.filter((s) => s.slug !== slug)
    : [...stories.slice(here + 1), ...stories.slice(0, here)]

  const category = stories[here]?.category
  const sameCategory = category ? rotated.filter((s) => s.category === category) : []

  const picked: StoryMeta[] = []
  for (const story of [...sameCategory, ...rotated]) {
    if (picked.length === count) break
    if (story.slug !== slug && !picked.some((p) => p.slug === story.slug)) picked.push(story)
  }
  return picked
}
