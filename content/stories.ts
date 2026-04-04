/**
 * Stories / blog article metadata.
 * Text content (title, excerpt, body) lives in messages/[locale].json → blog.stories.[slug]
 */

export type StoryMeta = {
  slug: string
  publishedAt: string
  readingTime: string
  category: string
  coverImage: string
  coverImageBig: string
  coverAlt: string
}

export const STORIES: StoryMeta[] = [
  {
    slug: 'fineline-tattoo-ideen-muenchen',
    publishedAt: '2025-01-15',
    readingTime: '3 min',
    category: 'Style Guide',
    coverImage: '/images/blog/finelineBlog1.png',
    coverImageBig: '/images/blog/fineLineBlog1(big).png',
    coverAlt: 'Fineline Tattoo München — zarte Linien von Kisha',
  },
  {
    slug: 'japan-tattoo-bedeutung-irezumi-motive',
    publishedAt: '2025-02-10',
    readingTime: '4 min',
    category: 'Culture',
    coverImage: '/images/blog/japanBlog2.png',
    coverImageBig: '/images/blog/japanBlog2(Big).png',
    coverAlt: 'Japanisches Irezumi Tattoo München — Kisha',
  },
  {
    slug: 'blackwork-graphic-tattoo-bedeutung-ideen',
    publishedAt: '2025-03-05',
    readingTime: '4 min',
    category: 'Style Guide',
    coverImage: '/images/blog/graphicBlog3.png',
    coverImageBig: '/images/blog/graphicBlog3(Big).png',
    coverAlt: 'Blackwork Graphic Tattoo München — Kisha',
  },
  {
    slug: 'tattoo-schmerzen-was-du-wirklich-fuehlen-wirst',
    publishedAt: '2025-03-20',
    readingTime: '3 min',
    category: 'Guide',
    coverImage: '/images/blog/schmerzenTattooBlog4.png',
    coverImageBig: '/images/blog/schmerzenTattooBlog4(big).png',
    coverAlt: 'Tattoo Schmerzen — Kisha Tattoo Artistin München',
  },
  {
    slug: 'erste-tattoo-ideen-wie-nicht-bereuen',
    publishedAt: '2025-04-01',
    readingTime: '5 min',
    category: 'Guide',
    coverImage: '/images/blog/ErsteTattooBlog5.png',
    coverImageBig: '/images/blog/ErsteTattooBlog5(Big).png',
    coverAlt: 'Erstes Tattoo München — Ratgeber von Kisha',
  },
]

export function getStoryBySlug(slug: string): StoryMeta | undefined {
  return STORIES.find((s) => s.slug === slug)
}
