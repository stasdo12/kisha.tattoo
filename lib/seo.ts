import type { Metadata } from 'next'
import { SITE } from '@/content/site'

type SeoInput = {
  title: string
  description: string
  path: string
  locale?: string
  /** Pass false for location pages that should only index in DE */
  hreflang?: boolean
  ogImage?: string
  ogType?: 'website' | 'article'
  noIndex?: boolean
  publishedTime?: string
  keywords?: string[]
}

/**
 * Central metadata factory.
 * Every page calls this to guarantee consistent, complete SEO tags.
 */
export function buildMetadata(input: SeoInput): Metadata {
  const {
    title,
    description,
    path,
    locale = 'de',
    hreflang = true,
    ogImage = `${SITE.url}/og/default.jpg`,
    ogType = 'website',
    noIndex = false,
    publishedTime,
    keywords = [],
  } = input

  // Canonical: DE has no prefix, EN/UK have /en/ /uk/
  // hreflang=false pages (location pages) always use DE canonical
  const canonical = (!hreflang || locale === 'de')
    ? `${SITE.url}${path}`
    : `${SITE.url}/${locale}${path}`

  const fullTitle = `${title} | ${SITE.name}`

  // hreflang alternates — only for pages that exist in all locales
  // Strip trailing slash for EN/UK locale roots (/en/ → /en, /uk/ → /uk)
  const p = path === '/' ? '' : path
  const languages = hreflang ? {
    'de':        `${SITE.url}${path}`,
    'en':        `${SITE.url}/en${p}`,
    'uk':        `${SITE.url}/uk${p}`,
    'x-default': `${SITE.url}${path}`,
  } : undefined

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
      ...(languages ? { languages } : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: SITE.locale,
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      // TODO: add @kishatattoo twitter handle when available
    },
  }
}

/**
 * Shared keyword pools by topic for consistent keyword targeting.
 */
export const KEYWORDS = {
  japanese: [
    'japanese tattoo Munich',
    'Irezumi Munich',
    'japanese tattoo artist Munich',
    'traditional japanese tattoo',
    'tebori tattoo Munich',
    'Koi tattoo Munich',
    'dragon tattoo Munich',
    'Oni tattoo Munich',
    'Hannya tattoo Munich',
    'japanese sleeve tattoo Munich',
  ],
  graphic: [
    'graphic tattoo Munich',
    'blackwork tattoo Munich',
    'fine line tattoo Munich',
    'geometric tattoo Munich',
    'contemporary tattoo Munich',
    'illustrative tattoo Munich',
  ],
  general: [
    'tattoo studio Munich',
    'custom tattoo Munich',
    'Kisha Tattoo',
    'tattoo artist Munich',
    'premium tattoo Munich',
  ],
} as const
