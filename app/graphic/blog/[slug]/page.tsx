/**
 * GRAPHIC BLOG — Article detail page
 * Design: Figma spec 1920 / 1440 / 390px
 *
 * Hero: fullscreen photo + 35% overlay, H1, Back to blog, meta bar, vertical nav
 * Content: centred 692px column — lead, h2 subheadings, body paragraphs
 * Related: 4-col grid of article cards
 * Footer: standard dark footer
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { STORIES, getStoryBySlug } from '@/content/stories'
import { buildMetadata } from '@/lib/seo'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'
import { GArticleCard } from '@/components/graphic/GArticleCard'

export function generateStaticParams() {
  return STORIES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  return buildMetadata({
    title: story ? `${story.title} — Kisha Irezumi` : 'Article — Kisha Irezumi',
    description: story?.excerpt ?? '',
    path: `/graphic/blog/${slug}`,
  })
}

const RELATED = [
  { id: 1, slug: 'history-of-japanese-irezumi',    title: 'The History of Japanese Irezumi',          category: 'Culture',     date: 'November 2024' },
  { id: 2, slug: 'choosing-your-first-japanese-tattoo', title: 'Choosing Your First Japanese Tattoo', category: 'Guide',       date: 'October 2024'  },
  { id: 3, slug: 'blackwork-tattoo-explained',      title: 'Blackwork Tattooing: Bold & Built to Last', category: 'Style Guide', date: 'September 2024' },
]

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  return (
    <main id="main-content">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Article hero"
        className="g-article-hero"
        style={{
          position: 'relative',
          height: 'clamp(780px, 56.25vw, 1080px)',
          background: '#0D0D0D',
          overflow: 'hidden',
        }}
      >
        {/* Background photo */}
        <Image
          src={story?.coverImage ?? 'https://picsum.photos/seed/article-hero/1920/1080'}
          alt=""
          aria-hidden="true"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        {/* Overlay 35% */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.55)', zIndex: 1 }}
        />

        {/* ── Logo bar — 3-column ── */}
        <GLogoBar layout="spread" theme="dark" />

        {/* ── Back to blog ── */}
        <Link
          href="/graphic/blog"
          className="g-article-back"
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 2,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px',
            background: '#F2F2F2',
            fontSize: '20px',
            fontFamily: 'var(--g-font)',
            fontWeight: 500,
            lineHeight: '20px',
            color: '#0D0D0D',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Back to blog
        </Link>

        {/* ── H1 ── */}
        <h1
          className="g-article-h1"
          style={{
            position: 'absolute',
            top: 'clamp(140px, calc(108px + 2.22vw), 168px)',
            left: 'var(--g-pad)',
            width: 'clamp(520px, 53.75vw, 774px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#F2F2F2',
            zIndex: 2,
          }}
        >
          {story?.title ?? 'Article'}
        </h1>

        {/* ── Bottom meta bar ── */}
        <div
          className="g-article-meta"
          style={{
            position: 'absolute',
            bottom: '28px',
            left: 'var(--g-pad)',
            right: 'var(--g-pad)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.7)' }}>
            {story?.category} · {story?.publishedAt}
          </span>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.7)' }}>
            {story?.readingTime}
          </span>
        </div>

        {/* ── Vertical nav ── */}
        <GNav activePath="/graphic/blog" theme="dark" />
      </section>

      {/* ── ARTICLE CONTENT ──────────────────────────────────────────────── */}
      <section
        aria-label="Article content"
        className="g-article-content-section"
        style={{
          background: '#F2F2F2',
          paddingTop: 'clamp(60px, 5.56vw, 80px)',
          paddingBottom: 'clamp(60px, 5.56vw, 80px)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <article
          className="g-article-body"
          style={{
            width: 'clamp(320px, 48.06vw, 692px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
          }}
        >
          {story?.body.split('\n\n').map((para, i) => (
            <p key={i} style={{ fontSize: 'var(--g-bm)', lineHeight: 1.5, color: '#0D0D0D', fontWeight: 500 }}>
              {para}
            </p>
          ))}
        </article>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────────────────────────── */}
      <section
        aria-label="Related articles"
        className="g-blog-articles"
        style={{
          background: '#F2F2F2',
          paddingBottom: 'clamp(60px, 6.94vw, 100px)',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
        }}
      >
        {/* Heading */}
        <div
          className="g-blog-heading-wrapper"
          style={{
            borderTop: '2px solid #0D0D0D',
            paddingTop: '20px',
            marginBottom: '52px',
          }}
        >
          <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
            Related articles
          </h2>
        </div>

        {/* 4-col grid */}
        <div
          className="g-blog-articles-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
        >
          {RELATED.map((article) => (
            <GArticleCard
              key={article.id}
              id={article.id}
              title={article.title}
              category={article.category}
              date={article.date}
              href={`/graphic/blog/${article.slug}`}
            />
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <GFooter />

    </main>
  )
}
