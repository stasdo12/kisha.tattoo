import type { MetadataRoute } from 'next'
import { SITE } from '@/content/site'
import { STORIES } from '@/content/stories'

// Pages available in all 3 locales (DE = no prefix, EN = /en/, UK = /uk/)
const I18N_PAGES = [
  { path: '',           freq: 'monthly' as const, pri: 1.0  },
  { path: '/works',     freq: 'weekly'  as const, pri: 0.9  },
  { path: '/booking',   freq: 'monthly' as const, pri: 0.9  },
  { path: '/contact',   freq: 'monthly' as const, pri: 0.8  },
  { path: '/about',     freq: 'monthly' as const, pri: 0.7  },
  { path: '/blog',      freq: 'weekly'  as const, pri: 0.7  },
  { path: '/faq',       freq: 'monthly' as const, pri: 0.65 },
  { path: '/aftercare', freq: 'yearly'  as const, pri: 0.5  },
  { path: '/awards',    freq: 'yearly'  as const, pri: 0.6  },
  { path: '/motive',    freq: 'monthly' as const, pri: 0.8  },
]

// DE-only: German-slug service pages + geo location pages
// These pages have German keywords in the URL — EN/UK versions must NOT appear in sitemap
const DE_ONLY_PAGES = [
  { path: '/tattoo-preise-muenchen',      freq: 'monthly' as const, pri: 0.9  },
  { path: '/japanisches-tattoo-muenchen', freq: 'monthly' as const, pri: 0.85 },
  { path: '/grafik-tattoo-muenchen',      freq: 'monthly' as const, pri: 0.85 },
  { path: '/fineline-tattoo-muenchen',    freq: 'monthly' as const, pri: 0.85 },
  { path: '/walk-in-tattoo-muenchen',     freq: 'monthly' as const, pri: 0.8  },
  { path: '/tattoo-eching',               freq: 'yearly'  as const, pri: 0.6  },
  { path: '/tattoo-freising',             freq: 'yearly'  as const, pri: 0.6  },
  { path: '/tattoo-neufahrn',             freq: 'yearly'  as const, pri: 0.6  },
  { path: '/tattoo-ottobrunn',            freq: 'yearly'  as const, pri: 0.6  },
  { path: '/tattoo-dachau',               freq: 'yearly'  as const, pri: 0.6  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  // Expand each i18n page into DE + EN + UK entries
  const i18nRoutes: MetadataRoute.Sitemap = I18N_PAGES.flatMap(({ path, freq, pri }) => [
    { url: `${SITE.url}${path || '/'}`,    lastModified: now, changeFrequency: freq, priority: pri        },
    { url: `${SITE.url}/en${path}`,        lastModified: now, changeFrequency: freq, priority: pri * 0.9  },
    { url: `${SITE.url}/uk${path}`,        lastModified: now, changeFrequency: freq, priority: pri * 0.9  },
  ])

  // DE-only routes — no EN/UK versions in sitemap
  const deOnlyRoutes: MetadataRoute.Sitemap = DE_ONLY_PAGES.map(({ path, freq, pri }) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority: pri,
  }))

  // Blog posts — DE + EN + UK versions
  const blogRoutes: MetadataRoute.Sitemap = STORIES.flatMap((story) => {
    const published = new Date(story.publishedAt).toISOString()
    return [
      { url: `${SITE.url}/blog/${story.slug}`,     lastModified: published, changeFrequency: 'monthly' as const, priority: 0.65 },
      { url: `${SITE.url}/en/blog/${story.slug}`,  lastModified: published, changeFrequency: 'monthly' as const, priority: 0.60 },
      { url: `${SITE.url}/uk/blog/${story.slug}`,  lastModified: published, changeFrequency: 'monthly' as const, priority: 0.60 },
    ]
  })

  return [...i18nRoutes, ...deOnlyRoutes, ...blogRoutes]
}
