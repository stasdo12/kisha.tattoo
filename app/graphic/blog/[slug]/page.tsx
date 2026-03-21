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
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'
import { GArticleCard } from '@/components/graphic/GArticleCard'

export const metadata: Metadata = {
  title: 'Chrome tattoos: the hyper-polished future of ink — Kisha Irezumi',
}

const RELATED = [
  { id: 1, title: 'Inspiring small tattoo ideas with Kisha Tattoo', category: 'Tattoo', date: 'October 2025' },
  { id: 2, title: 'Inspiring small tattoo ideas with Kisha Tattoo', category: 'Tattoo', date: 'October 2025' },
  { id: 3, title: 'Inspiring small tattoo ideas with Kisha Tattoo', category: 'Tattoo', date: 'October 2025' },
  { id: 4, title: 'Inspiring small tattoo ideas with Kisha Tattoo', category: 'Tattoo', date: 'October 2025' },
]

export default function ArticleDetailPage() {
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
          src="https://picsum.photos/seed/article-hero-chrome/1920/1080"
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
            top: '72px',
            left: 'var(--g-pad)',
            zIndex: 2,
            display: 'inline-flex',
            alignItems: 'center',
            padding: '10px 16px',
            border: '1px solid #F2F2F2',
            fontSize: 'var(--g-tag)',
            fontFamily: 'var(--g-font)',
            fontWeight: 500,
            letterSpacing: 'var(--g-ls)',
            color: '#F2F2F2',
            textDecoration: 'none',
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
          Chrome tattoos: the hyper-polished future of ink
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
            Tattoo · October, 2025
          </span>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.7)' }}>
            5 min read
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
          {/* Lead */}
          <p
            style={{
              fontSize: 'var(--g-bm)',
              lineHeight: 1.5,
              color: '#0D0D0D',
              fontWeight: 500,
            }}
          >
            We&apos;ve always stood at the crossroads of innovation and craftsmanship—
            bringing together some of the most forward-thinking tattoo artists from around the world.
            From architectural linework to generative art based on brainwaves, pushing boundaries is
            in our DNA. Today, we&apos;re diving into a tattoo style that&apos;s been capturing the
            attention of collectors, artists, and design obsessives alike: chrome tattoos. Whether
            you&apos;ve seen them trending online or you&apos;re just hearing about them for the first
            time, this blog was written to give you everything you need to know—from the roots of the
            style to why some of the best chrome tattoo work in the world is being created right here
          </p>

          {/* H2 */}
          <h2
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              fontWeight: 500,
            }}
          >
            Chrome Tattoos
          </h2>

          <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1.5, color: '#0D0D0D', fontWeight: 500 }}>
            Chrome tattoos are tattoos designed to mimic the reflective, high-shine appearance of
            polished metal—think liquid silver, molten chrome, or a high-gloss metallic object. The
            illusion of shine, depth, and reflection is achieved entirely through expert shading, light
            placement, and hyperrealistic techniques
          </p>

          <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1.5, color: '#0D0D0D', fontWeight: 500 }}>
            They belong to the broader realism and hyperrealism tattoo family but stand out for their
            futuristic, surreal, and eye-catching finish. At first glance, a great chrome tattoo can
            genuinely look like there&apos;s a 3D metallic object embedded in the skin. No filters. No
            edits. Just insanely skilled artistry
          </p>

          {/* H2 */}
          <h2
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              fontWeight: 500,
            }}
          >
            The Rise of Chrome Aesthetics in Art &amp; Tattooing
          </h2>

          <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1.5, color: '#0D0D0D', fontWeight: 500 }}>
            The popularity of chrome visuals can be traced back to digital and graphic art—especially
            the 3D design community. With the rise of Y2K revival aesthetics, liquid metal typography,
            and surreal renderings in generative art, chrome became a symbol of futuristic luxury and
            tech-influenced design
          </p>

          <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1.5, color: '#0D0D0D', fontWeight: 500 }}>
            Tattoo artists started to experiment with how they could bring that same feel into the
            analog world of ink and skin. The result? Chrome tattoos: a cutting-edge style that blurs
            the line between fantasy and physicality
          </p>

          <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1.5, color: '#0D0D0D', fontWeight: 500 }}>
            Today, chrome ink is everywhere in modern design, from album art and fashion to NFTs and
            immersive installations. And now it&apos;s made its way to tattooing—with Monolith Studio
            proudly leading the charge
          </p>
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
              href={`/graphic/blog/article-${article.id}`}
            />
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <GFooter />

    </main>
  )
}
