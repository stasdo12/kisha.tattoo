/**
 * STORY / ARTICLE PAGE — Individual editorial piece
 *
 * Rendering: SSG via generateStaticParams (builds all story pages at build time)
 * Future: add `export const revalidate = 3600` for ISR when content is CMS-driven.
 *
 * SEO: Article schema, OG image per story, unique title+description per slug.
 */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { articleSchema, breadcrumbSchema } from '@/lib/structured-data'
import { Breadcrumb } from '@/components/shared/Breadcrumb'
import { STORIES, getStoryBySlug } from '@/content/stories'
import { formatDate } from '@/lib/utils'

type Props = {
  params: Promise<{ slug: string }>
}

/* Generates all static paths at build time */
export async function generateStaticParams() {
  return STORIES.map((story) => ({ slug: story.slug }))
}

/* Per-story metadata — unique title and OG image per article */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    return { title: 'Story not found', robots: { index: false, follow: false } }
  }

  return buildMetadata({
    title: story.title,
    description: story.excerpt,
    path: `/graphic/stories/${story.slug}`,
    ogImage: story.coverImage,
    ogType: 'article',
    publishedTime: story.publishedAt,
    keywords: ['tattoo article', story.category.toLowerCase(), 'kisha tattoo munich'],
  })
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) notFound()

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Graphic Tattoos', url: '/graphic' },
    { name: 'Stories', url: '/graphic/stories' },
    { name: story.title, url: `/graphic/stories/${story.slug}` },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema(story)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(breadcrumbs)),
        }}
      />

      <main id="main-content">
        {/* Hero image */}
        <div style={{ position: 'relative', height: 'clamp(280px, 45vh, 520px)', overflow: 'hidden' }}>
          <Image
            src={story.coverImage}
            alt={story.coverAlt}
            fill
            priority
            style={{ objectFit: 'cover' }}
            sizes="100vw"
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 40%, rgba(242,242,242,0.95) 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Article body */}
        <article className="container" style={{ maxWidth: '720px', paddingBlock: 'var(--space-xl)' }}>
          <Breadcrumb items={breadcrumbs} />

          <header style={{ marginBottom: 'var(--space-lg)' }}>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                marginBottom: '1rem',
                fontSize: '0.8rem',
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

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                lineHeight: 1.15,
                marginBottom: '1rem',
              }}
            >
              {story.title}
            </h1>

            <p
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: 'var(--space-md)',
              }}
            >
              {story.excerpt}
            </p>
          </header>

          {/* Body — whitespace-pre-line preserves paragraph breaks from the content string */}
          <div
            style={{
              color: 'var(--color-text)',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              whiteSpace: 'pre-line',
            }}
          >
            {story.body}
          </div>

          {/* Internal linking — drives users to commercial pages */}
          <footer style={{ marginTop: 'var(--space-xl)', paddingTop: 'var(--space-md)', borderTop: '1px solid var(--color-border)' }}>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Interested in your own piece?
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/booking" className="btn btn-primary">
                Book Japanese Tattoo
              </Link>
              <Link href="/graphic/contact" className="btn btn-secondary">
                Book Graphic Tattoo
              </Link>
            </div>

            <div style={{ marginTop: 'var(--space-lg)' }}>
              <Link href="/graphic/stories" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                ← Back to Stories
              </Link>
            </div>
          </footer>
        </article>
      </main>
    </>
  )
}
