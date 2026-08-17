import type { MetadataRoute } from 'next'
import { SITE } from '@/content/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard crawlers.
      // /_next/ stays crawlable on purpose: /_next/static holds the CSS and JS
      // a renderer needs, and every <img> is served through /_next/image, so
      // blocking the prefix hides the layout and all images from Bing, Yandex
      // and social preview fetchers.
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // AI crawlers — explicitly allowed for GEO/AEO visibility
      { userAgent: 'GPTBot',           allow: '/' }, // OpenAI — training
      { userAgent: 'OAI-SearchBot',    allow: '/' }, // OpenAI — powers ChatGPT search/citations
      { userAgent: 'ChatGPT-User',     allow: '/' }, // OpenAI — user-triggered fetch
      { userAgent: 'ClaudeBot',        allow: '/' }, // Anthropic — training
      { userAgent: 'Claude-User',      allow: '/' }, // Anthropic — user-triggered fetch
      { userAgent: 'Claude-SearchBot', allow: '/' }, // Anthropic — search relevance
      { userAgent: 'PerplexityBot',    allow: '/' }, // Perplexity — training/index
      { userAgent: 'Perplexity-User',  allow: '/' }, // Perplexity — user-triggered fetch
      { userAgent: 'Google-Extended',  allow: '/' }, // Google — Gemini/AI Overviews training
      { userAgent: 'Googlebot',        allow: '/' },
    ],
    sitemap: [`${SITE.url}/sitemap.xml`, `${SITE.url}/image-sitemap.xml`],
  }
}
