/**
 * STORIES LISTING — Informational / editorial
 *
 * Rendering: SSG (with ISR revalidation when CMS is integrated)
 * When stories come from a CMS: add `export const revalidate = 3600`
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { buildMetadata } from '@/lib/seo'
import { breadcrumbSchema } from '@/lib/structured-data'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { STORIES } from '@/content/stories'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = buildMetadata({
  title: 'Tattoo Stories & Articles — Japanese and Graphic Ink Culture',
  description:
    'In-depth articles on Japanese tattoo culture, Irezumi history, graphic tattoo styles, aftercare guides, and the stories behind the art. By Kisha Tattoo Munich.',
  path: '/graphic/stories',
  keywords: [
    'tattoo articles',
    'japanese tattoo culture',
    'irezumi history',
    'tattoo blog munich',
    'graphic tattoo guide',
  ],
})

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Graphic Tattoos', url: '/graphic' },
  { name: 'Stories', url: '/graphic/stories' },
]

export default function StoriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <main id="main-content">
        <div className="container section">
          <Breadcrumb items={breadcrumbs} />

          <header style={{ marginBottom: 'var(--space-xl)' }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                marginBottom: '0.75rem',
              }}
            >
              Stories
            </h1>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '55ch' }}>
              Essays on Japanese tattoo culture, graphic tattooing, and the art of permanent marks.
            </p>
          </header>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: 'var(--space-lg)',
            }}
          >
            {STORIES.map((story) => (
              <article key={story.slug}>
                <Link
                  href={`/graphic/stories/${story.slug}`}
                  style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}
                >
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                    }}
                  >
                    <Image
                      src={story.coverImage}
                      alt={story.coverAlt}
                      fill
                      style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '0.5rem',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                      }}
                    >
                      <span>{story.category}</span>
                      <span>·</span>
                      <time dateTime={story.publishedAt}>{formatDate(story.publishedAt)}</time>
                      <span>·</span>
                      <span>{story.readingTime}</span>
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        marginBottom: '0.5rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {story.title}
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      {story.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
