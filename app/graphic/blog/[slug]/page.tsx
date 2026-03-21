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
import { SITE } from '@/content/site'
import { CtaStrip } from '@/components/graphic/CtaStrip'

export const metadata: Metadata = {
  title: 'Chrome tattoos: the hyper-polished future of ink — Kisha Irezumi',
}

const NAV_LINKS = [
  { href: '/graphic',         label: 'Home'    },
  { href: '/graphic/works',   label: 'Works'   },
  { href: '/graphic/about',   label: 'About'   },
  { href: '/graphic/blog',    label: 'Blog'    },
  { href: '/graphic/contact', label: 'Contact' },
]

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
        <div
          className="g-blog-logobar"
          style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '6px var(--g-pad) 12px',
            borderBottom: '1px solid rgba(242,242,242,0.2)',
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: 'var(--g-bs)', color: '#F2F2F2' }}>● Kisha</span>
          <span style={{ fontSize: 'var(--g-tag)', color: '#F2F2F2' }}>[ タトゥ ]</span>
          <span style={{ fontSize: 'var(--g-tag)', color: '#F2F2F2' }}>Tattoo</span>
        </div>

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
        <nav
          className="g-hero-nav"
          aria-label="Main navigation"
          style={{
            position: 'absolute',
            right: 'var(--g-pad)',
            top: '45.5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '0.5rem',
            zIndex: 10,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/graphic/blog'
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  fontSize: 'var(--g-bs)',
                  color: '#F2F2F2',
                  textDecoration: 'none',
                  textAlign: 'right',
                  lineHeight: 1,
                  opacity: isActive ? 1 : 0.55,
                  borderBottom: isActive ? '1px solid #F2F2F2' : 'none',
                  paddingBottom: isActive ? '1px' : '0',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
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
            <article key={article.id}>
              <Link
                href={`/graphic/blog/article-${article.id}`}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div
                  style={{
                    position: 'relative',
                    aspectRatio: '1/1',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    background: '#BFBFBF',
                  }}
                >
                  <Image
                    src={`https://picsum.photos/seed/blog-card-${article.id}/448/448`}
                    alt={article.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 430px) 100vw, 25vw"
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', fontWeight: 500 }}>
                    {article.title}
                  </h3>
                  <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}>
                    {article.category} · {article.date}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        role="contentinfo"
        className="g-footer-section"
        style={{ background: '#0D0D0D', padding: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}
      >
        <div className="g-container">
          <div
            className="g-footer-top"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 'clamp(3rem, 17.7vw, 21.25rem)',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
            <h2
              className="g-footer-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '40rem' }}
            >
              Relax and book your seat right now
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
              <span className="g-tag g-tag--white">Social media</span>
              <a
                href={SITE.social.instagram}
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none' }}
              >
                Instagram
              </a>
              <a
                href={`https://wa.me/${SITE.contact.phone.replace(/\D/g, '')}`}
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none' }}
              >
                What&apos;s App
              </a>
            </div>
          </div>

          <CtaStrip
            label="Discuss your vision"
            style={{ background: '#F2F2F2', color: '#0D0D0D', marginBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}
          />

          <div
            className="g-footer-bottom"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
          >
            <Link href="/graphic" style={{ fontSize: 'var(--g-bs)', color: '#F2F2F2', textDecoration: 'none' }}>
              ● Kisha
            </Link>
            <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}>[ All Rights Reserved. 2025 ]</span>
            <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}>Design by Artist Nowhere</span>
          </div>
        </div>
      </footer>

    </main>
  )
}
