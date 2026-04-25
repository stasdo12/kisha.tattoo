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
        aria-label="Blog hero"
        className="g-blog-hero"
        style={{
          position: 'relative',
          minHeight: 'clamp(900px, 56.25vw, 1080px)',
          overflow: 'hidden',
          background: '#0D0D0D',
        }}
      >
        {/* Background image */}
        <Image
          src="/images/home/works-01-blackwork-fullbody.jpg"
          alt=""
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.35)', zIndex: 1 }} />

        <GHeader theme="dark" />

        {/* H1 — centred at top */}
        <h1
          className="g-blog-h1"
          style={{
            position: 'absolute',
            zIndex: 2,
            top: '72px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#F2F2F2',
            whiteSpace: 'nowrap',
          }}
        >
          {t('hero.h1')}
        </h1>

        {/* Featured article card — centred */}
        <article
          className="g-blog-main-card"
          style={{
            position: 'absolute',
            zIndex: 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 'clamp(300px, 28.9vw, 416px)',
            background: '#F2F2F2',
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 24px',
            gap: '20px',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '320px', flexShrink: 0 }}>
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
                fontSize: 'var(--g-s)',
                lineHeight: 'var(--g-lh-s)',
                color: '#0D0D0D',
                fontWeight: 500,
              }}
            >
              {heroContent.title}
            </h2>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>
              {heroMeta.category} · {heroMeta.publishedAt}
            </span>
            <Link
              href={`/blog/${heroMeta.slug}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0D0D0D',
                padding: '16px 12px',
                fontSize: '20px',
                lineHeight: '20px',
                fontFamily: 'var(--g-font)',
                fontWeight: 500,
                color: '#F2F2F2',
                textDecoration: 'none',
              }}
            >
              {t('readMore')}
            </Link>
          </div>
        </article>

        {/* Bottom tags */}
        <span
          className="g-blog-side-tag"
          style={{
            position: 'absolute',
            zIndex: 2,
            bottom: '29px',
            left: 'var(--g-pad)',
            fontSize: 'var(--g-tag)',
            color: '#F2F2F2',
          }}
        >
          [ Behind-the-scenes stories ]
        </span>
        <span
          className="g-blog-side-tag"
          style={{
            position: 'absolute',
            zIndex: 2,
            bottom: '29px',
            right: 'var(--g-pad)',
            textAlign: 'right',
            fontSize: 'var(--g-tag)',
            color: '#F2F2F2',
          }}
        >
          [ Key insights from my work ]
        </span>
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
        <BlogFilter
          articles={articles}
          allArticlesLabel={t('allArticles')}
          loadMoreLabel={t('loadMore')}
        />
      </section>

      <GFooter />

    </main>
  )
}
