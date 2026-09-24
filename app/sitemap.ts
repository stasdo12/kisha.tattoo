import type { MetadataRoute } from 'next'
import { SITE } from '@/content/site'
import { STORIES } from '@/content/stories'
import { SLUG_PAGES } from '@/content/routes'

// Pages available in all 3 locales (DE = no prefix, EN = /en/, UK = /uk/)
const I18N_PAGES = [
  { path: '',           freq: 'monthly' as const, pri: 1.0  },
  { path: '/works',     freq: 'weekly'  as const, pri: 0.9  },
  { path: '/booking',   freq: 'monthly' as const, pri: 0.9  },
  { path: '/contact',   freq: 'monthly' as const, pri: 0.8  },
  { path: '/about',     freq: 'monthly' as const, pri: 0.7  },
  { path: '/team',      freq: 'monthly' as const, pri: 0.7  },
  { path: '/blog',      freq: 'weekly'  as const, pri: 0.7  },
  { path: '/faq',       freq: 'monthly' as const, pri: 0.65 },
  { path: '/aftercare', freq: 'yearly'  as const, pri: 0.5  },
  { path: '/awards',    freq: 'yearly'  as const, pri: 0.6  },
  { path: '/motive',    freq: 'monthly' as const, pri: 0.8  },
]


export default function sitemap(): MetadataRoute.Sitemap {
  // No `lastModified` on the pages below on purpose. It used to be the build
  // timestamp, so every deploy told Google that sixty-odd pages had just
  // changed — none of them had. Google drops lastmod it catches lying, and a
  // missing value is worth more than one that is never true. Blog entries keep
  // theirs: those dates are real.

  // Expand each i18n page into DE + EN + UK entries
  const i18nRoutes: MetadataRoute.Sitemap = I18N_PAGES.flatMap(({ path, freq, pri }) => [
    { url: `${SITE.url}${path || '/'}`,    changeFrequency: freq, priority: pri        },
    { url: `${SITE.url}/en${path}`,        changeFrequency: freq, priority: pri * 0.9  },
    { url: `${SITE.url}/uk${path}`,        changeFrequency: freq, priority: pri * 0.9  },
  ])

  // German-slug routes, each in the locales that earn a listing
  const slugRoutes: MetadataRoute.Sitemap = SLUG_PAGES.flatMap(({ path, freq, pri, locales }) =>
    locales.map((locale) => ({
      url: `${SITE.url}${locale}${path}`,
      changeFrequency: freq,
      priority: locale === '' ? pri : pri * 0.9,
    }))
  )

  // Blog posts — DE + EN + UK versions
  // Stories with an explicit canonicalPath point elsewhere — listing them here would
  // tell Google the opposite of what their canonical tag says.
  const blogRoutes: MetadataRoute.Sitemap = STORIES
    .filter((story) => !story.canonicalPath)
    .flatMap((story) => {
      const published = new Date(story.updatedAt ?? story.publishedAt).toISOString()
      return [
        { url: `${SITE.url}/blog/${story.slug}`,     lastModified: published, changeFrequency: 'monthly' as const, priority: 0.65 },
        { url: `${SITE.url}/en/blog/${story.slug}`,  lastModified: published, changeFrequency: 'monthly' as const, priority: 0.60 },
        { url: `${SITE.url}/uk/blog/${story.slug}`,  lastModified: published, changeFrequency: 'monthly' as const, priority: 0.60 },
      ]
    })

  return [...i18nRoutes, ...slugRoutes, ...blogRoutes]
}
