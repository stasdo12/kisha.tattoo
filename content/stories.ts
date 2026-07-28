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
  canonicalPath?: string
}

export const STORIES: StoryMeta[] = [
  {
    slug: 'fineline-tattoo-ideen-muenchen',
    publishedAt: '2025-01-15',
    readingTime: '3 min',
    category: 'Style Guide',
    coverImage: '/images/work/blumen-rucken-tattoo-graphic.jpg',
    coverImageBig: '/images/work/blumen-rucken-tattoo-graphic.jpg',
    coverAlt: 'Fineline Tattoo München — zarte Linien von Kisha',
    canonicalPath: '/fineline-tattoo-muenchen',
  },
  {
    slug: 'japan-tattoo-bedeutung-irezumi-motive',
    publishedAt: '2025-02-10',
    readingTime: '4 min',
    category: 'Culture',
    coverImage: '/images/work/4x4-sakura-tattoo.jpg',
    coverImageBig: '/images/work/4x4-sakura-tattoo.jpg',
    coverAlt: 'Japanisches Irezumi Tattoo München — Kisha',
  },
  {
    slug: 'blackwork-graphic-tattoo-bedeutung-ideen',
    publishedAt: '2025-03-05',
    readingTime: '4 min',
    category: 'Style Guide',
    coverImage: '/images/work/big-snake-tattoo-graphic.jpg',
    coverImageBig: '/images/work/big-snake-tattoo-graphic.jpg',
    coverAlt: 'Blackwork Graphic Tattoo München — Kisha',
  },
  {
    slug: 'tattoo-schmerzen-was-du-wirklich-fuehlen-wirst',
    publishedAt: '2025-03-20',
    readingTime: '3 min',
    category: 'Guide',
    coverImage: '/images/work/tattoo-lego-fineline-work.jpg',
    coverImageBig: '/images/work/tattoo-lego-fineline-work.jpg',
    coverAlt: 'Tattoo Schmerzen — Kisha Tattoo Artistin München',
  },
  {
    slug: 'erste-tattoo-ideen-wie-nicht-bereuen',
    publishedAt: '2025-04-01',
    readingTime: '5 min',
    category: 'Guide',
    coverImage: '/images/work/4x4-owl-tattoo-fineline.jpg',
    coverImageBig: '/images/work/4x4-owl-tattoo-fineline.jpg',
    coverAlt: 'Erstes Tattoo München — Ratgeber von Kisha',
  },
  {
    slug: 'tattoo-placement-muenchen',
    publishedAt: '2026-04-11',
    readingTime: '5 min',
    category: 'Guide',
    coverImage: '/images/blog/placementBlog6.jpg',
    coverImageBig: '/images/blog/placementBlog6(Big).jpg',
    coverAlt: 'Tattoo Placement München — Kisha Tattoo Studio',
  },
  {
    slug: 'wie-du-deinen-tattoo-stil-findest',
    publishedAt: '2026-04-15',
    readingTime: '4 min',
    category: 'Guide',
    coverImage: '/images/blog/styleBlog7.jpg',
    coverImageBig: '/images/blog/styleBlog7(Big).jpg',
    coverAlt: 'Tattoo Studio Kisha München — japanische Prints an der Wand',
  },
  {
    slug: 'warum-ich-manchmal-von-einem-tattoo-abrate',
    publishedAt: '2026-04-20',
    readingTime: '5 min',
    category: 'Studio',
    coverImage: '/images/blog/studioBlog8.jpg',
    coverImageBig: '/images/blog/studioBlog8(Big).jpg',
    coverAlt: 'Tattoo Beratung München — Kisha Tattoo Studio',
  },
  {
    slug: 'wie-tattoos-altern',
    publishedAt: '2026-04-23',
    readingTime: '6 min',
    category: 'Guide',
    coverImage: '/images/blog/agingBlog9.jpg',
    coverImageBig: '/images/blog/agingBlog9(Big).jpg',
    coverAlt: 'Tattoo aging — Kisha Tattoo München',
  },
  {
    slug: 'tattoo-coverup-muenchen',
    publishedAt: '2026-04-25',
    readingTime: '5 min',
    category: 'Guide',
    coverImage: '/images/blog/coverupBlog10.jpg',
    coverImageBig: '/images/blog/coverupBlog10(Big).jpg',
    coverAlt: 'Tattoo Coverup München — Kisha Tattoo Studio',
  },
  {
    slug: 'tattoo-kopieren-referenz-original',
    publishedAt: '2026-04-29',
    readingTime: '4 min',
    category: 'Guide',
    coverImage: '/images/blog/copyBlog11.jpg',
    coverImageBig: '/images/blog/copyBlog11(Big).jpg',
    coverAlt: 'Tattoo Referenz kopieren — Kisha Tattoo München',
  },
  {
    slug: 'tattoo-nachsorge-pflege-tipps',
    publishedAt: '2026-05-06',
    readingTime: '5 min',
    category: 'Guide',
    coverImage: '/images/blog/aftercareBlog12.jpg',
    coverImageBig: '/images/blog/aftercareBlog12(Big).jpg',
    coverAlt: 'Tattoo Nachsorge Pflege — Hannya Maske Irezumi von Kisha München',
  },
  {
    slug: 'tattoo-problemzonen-muenchen',
    publishedAt: '2026-05-20',
    readingTime: '5 min',
    category: 'Guide',
    coverImage: '/images/blog/tattoo-problemzonen.jpg',
    coverImageBig: '/images/blog/tattoo-problemzonen(Big).jpg',
    coverAlt: 'Tattoo Problemzonen München — Kisha Tattoo Studio',
  },
  {
    slug: 'japanese-sleeve-tattoo-muenchen',
    publishedAt: '2026-05-26',
    readingTime: '6 min',
    category: 'Culture',
    coverImage: '/images/blog/japanese-sleeve-tattoo.jpg',
    coverImageBig: '/images/blog/japanese-sleeve-tattoo(Big).jpg',
    coverAlt: 'Japanese Sleeve Tattoo München — Irezumi von Kisha',
  },
  {
    slug: 'tattoo-im-sommer-muenchen',
    publishedAt: '2026-06-08',
    readingTime: '5 min',
    category: 'Guide',
    coverImage: '/images/blog/tattoo-im-sommer.jpg',
    coverImageBig: '/images/blog/tattoo-im-sommer(Big).jpg',
    coverAlt: 'Tattoo im Sommer München — Kisha Tattoo Studio',
  },
  {
    slug: 'tattoo-beratung-muenchen',
    publishedAt: '2026-06-02',
    readingTime: '4 min',
    category: 'Guide',
    coverImage: '/images/blog/tattoo-beratung.jpg',
    coverImageBig: '/images/blog/tattoo-beratung(Big).jpg',
    coverAlt: 'Tattoo Beratung München — Olympiapark Kisha Studio',
  },
  {
    slug: 'schriftzug-tattoo-muenchen',
    publishedAt: '2026-06-16',
    readingTime: '5 min',
    category: 'Style Guide',
    coverImage: '/images/blog/schriftzug-tattoo.jpg',
    coverImageBig: '/images/blog/schriftzug-tattoo(Big).jpg',
    coverAlt: 'Schriftzug Tattoo München — Lettering von Kisha',
  },
  {
    slug: 'tattoo-job-beruf-muenchen',
    publishedAt: '2026-06-23',
    readingTime: '5 min',
    category: 'Guide',
    coverImage: '/images/blog/jobBlog18.jpg',
    coverImageBig: '/images/blog/jobBlog18(Big).jpg',
    coverAlt: 'Tattoo im Job — Kisha Tattoo Studio München',
  },
  {
    slug: 'tattoo-convention-muenchen',
    publishedAt: '2026-06-30',
    readingTime: '5 min',
    category: 'Culture',
    coverImage: '/images/blog/tattoo-convention.jpg',
    coverImageBig: '/images/blog/tattoo-convention(Big).jpg',
    coverAlt: 'Tattoo Convention München — Kisha Tattoo Artistin gewinnt auf der Convention',
  },
  {
    slug: 'botanisches-tattoo-muenchen',
    publishedAt: '2026-07-07',
    readingTime: '6 min',
    category: 'Style Guide',
    coverImage: '/images/blog/botanicBlog20.jpg',
    coverImageBig: '/images/blog/botanicBlog20(Big).jpg',
    coverAlt: 'Botanisches Tattoo München — Fineline Sleeve von Kisha',
  },
  {
    slug: 'tattoo-nachstechen-muenchen',
    publishedAt: '2026-07-22',
    readingTime: '5 min',
    category: 'Studio',
    coverImage: '/images/blog/nachstechenBlog21.jpg',
    coverImageBig: '/images/blog/nachstechenBlog21(Big).jpg',
    coverAlt: 'Tattoo Nachstechen München — feines Kanji-Lettering am Nacken von Kisha',
  },
  {
    slug: 'patchwork-tattoo-muenchen',
    publishedAt: '2026-07-28',
    readingTime: '5 min',
    category: 'Style Guide',
    coverImage: '/images/blog/patchworkBlog22.jpg',
    coverImageBig: '/images/blog/patchworkBlog22(Big).jpg',
    coverAlt: 'Patchwork Tattoo München — Mandala und Schmetterling am Bein',
  },
  {
    // Draft only — do NOT publish/push before the synchronized /team launch (llms.txt currently still says solo artist)
    slug: 'black-grey-realismus-tattoo-muenchen',
    publishedAt: '2026-07-28',
    readingTime: '5 min',
    category: 'Studio',
    coverImage: '/images/ira/portrait-2.jpg',
    coverImageBig: '/images/ira/portrait-2.jpg',
    coverAlt: 'Iren Red — neue Tattoo Artistin bei KishaTattoo München, Black & Grey Realismus',
  },
]

export function getStoryBySlug(slug: string): StoryMeta | undefined {
  return STORIES.find((s) => s.slug === slug)
}
