/**
 * Stories / blog content for the Graphic section.
 * In production, replace with a CMS or MDX files for ISR-driven content.
 */

export type Story = {
  slug: string
  title: string
  excerpt: string
  publishedAt: string
  readingTime: string
  category: string
  coverImage: string
  coverAlt: string
  body: string
}

export const STORIES: Story[] = [
  {
    slug: 'history-of-japanese-irezumi',
    title: 'The History of Japanese Irezumi: From Ritual to Art Form',
    excerpt:
      'Irezumi has marked the human body for over 5,000 years in Japan. Explore how criminal branding evolved into the most revered tattoo tradition on earth.',
    publishedAt: '2024-11-15',
    readingTime: '8 min read',
    category: 'Culture',
    coverImage: 'https://picsum.photos/seed/story1/1200/630',
    coverAlt: 'Traditional Japanese Irezumi tattoo art — history and culture',
    body: `
Japanese tattooing — known as Irezumi (入れ墨) or Horimono (彫り物) — carries one of the richest histories in the world of body art. Archaeological evidence suggests tattooing in Japan dates back to at least 300 BCE, with clay figurines bearing facial markings discovered from the Jōmon period.

For centuries, tattooing oscillated between sacred ritual and criminal punishment. The Edo period (1603–1868) saw both extremes: merchants and artisans adopted decorative tattoos as fashion statements, while courts used them to brand criminals — a practice that cast a shadow over tattooing in mainstream Japanese society for generations.

It was the Meiji Restoration of 1868 that made tattooing illegal in Japan, aimed at modernising the nation's image for Western eyes. This ban remained until 1948, yet paradoxically drove the art underground, where it flourished in the hands of master horishi who preserved classical techniques and iconography.

Today, Irezumi stands as a globally celebrated art form, with collectors from Munich to Tokyo seeking authentic traditional work.
    `.trim(),
  },
  {
    slug: 'choosing-your-first-japanese-tattoo',
    title: 'Choosing Your First Japanese Tattoo: A Complete Guide',
    excerpt:
      'Placement, motif, size — everything you need to know before committing to your first Irezumi piece. A practical guide from first consultation to healed tattoo.',
    publishedAt: '2024-10-02',
    readingTime: '6 min read',
    category: 'Guide',
    coverImage: 'https://picsum.photos/seed/story2/1200/630',
    coverAlt: 'Guide to choosing a Japanese tattoo design and placement',
    body: `
Choosing a first Japanese tattoo is not simply about picking a picture you like. Traditional Irezumi is a compositional art — motifs are selected for their symbolism, placed to flow with the body's musculature, and designed as part of a larger visual language.

**Start with meaning.** Japanese tattoo iconography is dense with symbolism. A Koi fish swimming upstream symbolises perseverance through adversity. A Hannya mask captures the duality of love and rage. Understand what you want to carry on your skin.

**Consider placement early.** Japanese compositions are designed around specific body parts — the back, chest, sleeve, and thigh each have traditional compositional templates. Where your tattoo lives determines much of its design.

**Think about growth.** Many collectors begin with a single motif and build outward over years. A forearm piece can anchor a future half-sleeve. Thinking ahead allows your collection to grow cohesively.
    `.trim(),
  },
  {
    slug: 'blackwork-tattoo-explained',
    title: 'Blackwork Tattooing: Bold, Graphic, and Built to Last',
    excerpt:
      'Blackwork is one of the fastest-growing tattoo styles. Here\'s what defines it, why it ages so well, and whether it\'s right for you.',
    publishedAt: '2024-09-18',
    readingTime: '5 min read',
    category: 'Style Guide',
    coverImage: 'https://picsum.photos/seed/story3/1200/630',
    coverAlt: 'Blackwork tattoo style guide — bold graphic tattooing',
    body: `
Blackwork tattooing uses solid black ink — no colour, no grey wash — to create bold graphic imagery. The style encompasses geometric patterns, tribal-inspired work, illustrative designs, and large solid-fill compositions.

**Why blackwork ages so well.** Colour tattoos fade. Grey wash blurs. But solid black, applied correctly, holds its shape and contrast for decades. This makes blackwork one of the most durable tattoo styles available.

**The graphic connection.** Blackwork draws heavily from graphic design — the same principles of contrast, weight, and negative space that define great visual communication apply directly to blackwork tattooing.

**Is it right for you?** If you prefer bold, high-contrast aesthetics over delicate detail, and you want a tattoo that reads clearly from a distance, blackwork is an excellent choice.
    `.trim(),
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return STORIES.find((s) => s.slug === slug)
}
