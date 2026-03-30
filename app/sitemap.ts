import type { MetadataRoute } from 'next'
import { SITE } from '@/content/site'
import { STORIES } from '@/content/stories'

// Pages available in all 3 locales (DE = no prefix, EN = /en/, UK = /uk/)
const I18N_PAGES = [
  { path: '',                                  freq: 'monthly' as const, pri: 1.0  },
  { path: '/works',                            freq: 'weekly'  as const, pri: 0.9  },
  { path: '/booking',                          freq: 'monthly' as const, pri: 0.9  },
  { path: '/contact',                          freq: 'monthly' as const, pri: 0.8  },
  { path: '/about',                            freq: 'monthly' as const, pri: 0.7  },
  { path: '/blog',                             freq: 'weekly'  as const, pri: 0.7  },
  { path: '/faq',                              freq: 'monthly' as const, pri: 0.65 },
  { path: '/aftercare',                        freq: 'yearly'  as const, pri: 0.5  },
  { path: '/awards',                           freq: 'yearly'  as const, pri: 0.6  },
  { path: '/tattoo-preise-muenchen',           freq: 'monthly' as const, pri: 0.9  },
  { path: '/japanisches-tattoo-muenchen',      freq: 'monthly' as const, pri: 0.85 },
  { path: '/grafik-tattoo-muenchen',           freq: 'monthly' as const, pri: 0.85 },
  { path: '/fineline-tattoo-muenchen',         freq: 'monthly' as const, pri: 0.85 },
  { path: '/motive',                           freq: 'monthly' as const, pri: 0.8  },
  { path: '/walk-in-tattoo-muenchen',          freq: 'monthly' as const, pri: 0.8  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Expand each i18n page into DE + EN + UK entries
  const i18nRoutes: MetadataRoute.Sitemap = I18N_PAGES.flatMap(({ path, freq, pri }) => [
    { url: `${SITE.url}${path}`,        lastModified: now, changeFrequency: freq, priority: pri   },
    { url: `${SITE.url}/en${path}`,     lastModified: now, changeFrequency: freq, priority: pri * 0.9 },
    { url: `${SITE.url}/uk${path}`,     lastModified: now, changeFrequency: freq, priority: pri * 0.9 },
  ])

  // Location pages — DE-only geo-targeting, no EN/UK versions
  const locationRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/tattoo-eching`,    lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.url}/tattoo-freising`,  lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.url}/tattoo-neufahrn`,  lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.url}/tattoo-ottobrunn`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.url}/tattoo-dachau`,    lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = STORIES.map((story) => ({
    url: `${SITE.url}/blog/${story.slug}`,
    lastModified: new Date(story.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [...i18nRoutes, ...locationRoutes, ...blogRoutes]
}
