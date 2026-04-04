/**
 * GRAPHIC BLOG — Kisha Irezumi
 * Design: Figma spec 1920 / 1440 / 390px
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { STORIES } from '@/content/stories'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { BlogFilter } from '@/components/graphic/BlogFilter'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/blog', locale })
}

export default async function GraphicBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })

  // Build localized article list
  const articles = STORIES.map((meta) => {
    const content = t.raw(`stories.${meta.slug}`) as { title: string; excerpt: string }
    return {
      slug: meta.slug,
      title: content.title,
      category: meta.category,
      publishedAt: meta.publishedAt,
      coverImage: meta.coverImage,
    }
  })

  const heroMeta = STORIES[0]
  const heroContent = t.raw(`stories.${heroMeta.slug}`) as { title: string; excerpt: string }

  return (
    <main id="main-content">

      {/* ── HERO SECTION ──────────────────────────────────────────────────── */}
      <section
        aria-label="Blog — The artisan's dô"
        className="g-blog-hero"
        style={{
          position: 'relative',
          minHeight: '814px',
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GHeader theme="light" />

        {/* H1 — centred */}
        <h1
          className="g-blog-h1"
          style={{
            position: 'absolute',
            top: '72px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'clamp(500px, 55.5vw, 800px)',
            textAlign: 'center',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
            whiteSpace: 'nowrap',
          }}
        >
          {t('hero.h1')}
        </h1>

        {/* hero-info: left-tag | card | right-tag */}
        <div
          className="g-blog-hero-info"
          style={{
            position: 'absolute',
            top: 'clamp(248px, calc(168px + 5.56vw), 268px)',
            left: 'var(--g-pad)',
            right: 'var(--g-pad)',
            height: '546px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          {/* Left tag */}
          <span
            className="g-blog-side-tag"
            style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}
          >
            [ Behind-the-scenes stories ]
          </span>

          {/* Featured article card */}
          <article
            className="g-blog-main-card"
            style={{
              alignSelf: 'flex-start',
              width: 'clamp(300px, 28.9vw, 416px)',
              background: '#0D0D0D',
              display: 'flex',
              flexDirection: 'column',
              padding: '20px',
              gap: '20px',
            }}
          >
            <div style={{ position: 'relative', width: '100%', height: '220px', flexShrink: 0 }}>
              <Image
                src={heroMeta.coverImage}
                alt={heroMeta.coverAlt}
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 430px) 100vw, 30vw"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2
                style={{
                  fontSize: '24px',
                  lineHeight: '21.6px',
                  color: '#F2F2F2',
                  fontWeight: 500,
                }}
              >
                {heroContent.title}
              </h2>
              <span style={{ fontSize: '12px', color: '#F2F2F2' }}>
                {heroMeta.category} · {heroMeta.publishedAt}
              </span>
              <Link
                href={`/blog/${heroMeta.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#F2F2F2',
                  padding: '16px 12px',
                  fontSize: '20px',
                  lineHeight: '20px',
                  fontFamily: 'var(--g-font)',
                  fontWeight: 500,
                  color: '#0D0D0D',
                  textDecoration: 'none',
                }}
              >
                {t('readMore')}
              </Link>
            </div>
          </article>

          {/* Right tag */}
          <span
            className="g-blog-side-tag"
            style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}
          >
            [ Key insights from my work ]
          </span>
        </div>
      </section>

      {/* ── ARTICLES SECTION ─────────────────────────────────────────────── */}
      <section
        aria-label="All articles"
        className="g-blog-articles"
        style={{
          background: '#F2F2F2',
          paddingTop: 'clamp(60px, 6.94vw, 100px)',
          paddingBottom: 'clamp(60px, 6.94vw, 100px)',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
        }}
      >
        <div
          className="g-blog-heading-wrapper"
          style={{
            borderTop: '2px solid #0D0D0D',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '52px',
          }}
        >
          <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
            All articles
          </h2>
        </div>

        <BlogFilter articles={articles} />
      </section>

      {/* ── KISHA TEASER ──────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div
          className="g-container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            paddingTop: 'clamp(1.5rem, 2.5vw, 3rem)',
            borderTop: '2px solid #0D0D0D',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '28rem' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>[ KishaTattoo München ]</span>
            <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('teaser.heading')}
            </p>
            <Link href="/about" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              {t('cta.about')}
            </Link>
          </div>
          <Link
            href="/booking"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.5rem',
              border: '1px solid #0D0D0D',
              color: '#0D0D0D',
              fontSize: 'var(--g-bm)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {t('cta.booking')}
          </Link>
        </div>
      </section>

      <GFooter />

    </main>
  )
}
