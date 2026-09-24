import { SITE } from '@/content/site'
import { STORIES } from '@/content/stories'
import { CURATED_IMAGE_PAGES, type SitemapImagePage } from '@/content/image-sitemap'

/**
 * Image sitemap. Was a static file in public/ listing four pages, so the 28
 * blog covers — every one of them a real photo of Kisha's work — were never
 * offered to Google Images. Generated now, from the same STORIES list the blog
 * itself renders, so a new article brings its cover along automatically.
 */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export function GET(): Response {
  const blogPages: SitemapImagePage[] = STORIES.map((story) => ({
    path: `/blog/${story.slug}`,
    images: [{
      loc: `${SITE.url}${encodeURI(story.coverImageBig ?? story.coverImage)}`,
      title: story.coverAlt,
      caption: story.coverAlt,
    }],
  }))

  const body = [...CURATED_IMAGE_PAGES, ...blogPages]
    .map((page) => {
      const images = page.images
        .map((image) => [
          '    <image:image>',
          `      <image:loc>${escapeXml(image.loc)}</image:loc>`,
          `      <image:title>${escapeXml(image.title)}</image:title>`,
          `      <image:caption>${escapeXml(image.caption)}</image:caption>`,
          '    </image:image>',
        ].join('\n'))
        .join('\n')
      const loc = page.path === '/' ? `${SITE.url}/` : `${SITE.url}${page.path}`
      return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n${images}\n  </url>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${body}
</urlset>
`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  })
}
