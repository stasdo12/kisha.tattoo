import type { MetadataRoute } from 'next'
import { SITE } from '@/content/site'
import { STORIES } from '@/content/stories'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = [
    // ── Core pages ──────────────────────────────────────────────────────────
    { url: SITE.url,                   lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE.url}/works`,        lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${SITE.url}/booking`,      lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/contact`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/blog`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${SITE.url}/faq`,          lastModified: now, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${SITE.url}/aftercare`,    lastModified: now, changeFrequency: 'yearly',  priority: 0.5 },
    { url: `${SITE.url}/awards`,       lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },

    // ── Pricing page — 7000+/mo keyword cluster ──────────────────────────────
    { url: `${SITE.url}/tattoo-preise-muenchen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ── Style pages — keyword landing pages ──────────────────────────────────
    { url: `${SITE.url}/japanisches-tattoo-muenchen`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE.url}/grafik-tattoo-muenchen`,      lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE.url}/linework-tattoo-muenchen`,    lastModified: now, changeFrequency: 'monthly', priority: 0.85 },

    // ── Motive pages ─────────────────────────────────────────────────────────
    { url: `${SITE.url}/motive/drachen-tattoo-muenchen`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/motive/koi-tattoo-muenchen`,      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/motive/tiger-tattoo-muenchen`,    lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/motive/kitsune-tattoo-muenchen`,  lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/motive/sakura-tattoo-muenchen`,   lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ── Location pages — near-zero competition suburbs ───────────────────────
    { url: `${SITE.url}/tattoo-eching`,    lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.url}/tattoo-freising`,  lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE.url}/tattoo-neufahrn`,  lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = STORIES.map((story) => ({
    url: `${SITE.url}/blog/${story.slug}`,
    lastModified: new Date(story.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }))

  return [...staticRoutes, ...blogRoutes]
}
