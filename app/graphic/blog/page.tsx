'use client'
/**
 * GRAPHIC BLOG — Kisha Irezumi
 * Design: Figma spec 1920 / 1440 / 390px
 *
 * Hero: light bg, 3-col logo bar, centred H1, featured card + side tags, vertical nav
 * Articles: 4-col grid with filter tabs
 * Footer: standard dark footer
 */
import type React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/content/site'
import { CtaStrip } from '@/components/graphic/CtaStrip'

const NAV_LINKS = [
  { href: '/graphic',          label: 'Home'    },
  { href: '/graphic/works',    label: 'Works'   },
  { href: '/graphic/about',    label: 'About'   },
  { href: '/graphic/blog',     label: 'Blog'    },
  { href: '/graphic/contact',  label: 'Contact' },
]

const HERO_ARTICLE = {
  src: 'https://picsum.photos/seed/blog-hero-chrome/448/368',
  alt: 'Chrome tattoo back piece — hyper-polished Irezumi',
  category: 'Tattoo',
  date: 'October 2025',
  title: 'Chrome tattoos: the hyper-polished future of ink',
  href: '/graphic/blog/chrome-tattoos',
}

const ARTICLES = [
  { id: 1,  title: 'Inspiring small tattoo ideas with Kisha Tattoo',      category: 'Tattoo',     date: 'October 2025' },
  { id: 2,  title: 'Inspiring small tattoo ideas with Kisha Tattoo',      category: 'Tattoo',     date: 'October 2025' },
  { id: 3,  title: 'Inspiring small tattoo ideas with Kisha Tattoo',      category: 'Education',  date: 'October 2025' },
  { id: 4,  title: 'Inspiring small tattoo ideas with Kisha Tattoo',      category: 'Culture',    date: 'October 2025' },
  { id: 5,  title: 'Inspiring small tattoo ideas with Kisha Tattoo',      category: 'Tattoo',     date: 'October 2025' },
  { id: 6,  title: 'Inspiring small tattoo ideas with Kisha Tattoo',      category: 'Tattoo',     date: 'October 2025' },
  { id: 7,  title: 'Inspiring small tattoo ideas with Kisha Tattoo',      category: 'Education',  date: 'October 2025' },
  { id: 8,  title: 'Inspiring small tattoo ideas with Kisha Tattoo',      category: 'Culture',    date: 'October 2025' },
]

const FILTER_TABS = ['All', 'Tattoo', 'Education', 'Culture']

export default function GraphicBlogPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleArticles = activeFilter === 'All'
    ? ARTICLES
    : ARTICLES.filter((a) => a.category === activeFilter)

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

        {/* ── Logo bar — 3-column ── */}
        <div
          className="g-blog-logobar"
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '6px var(--g-pad) 12px',
            background: '#F2F2F2',
            borderBottom: '2px solid #0D0D0D',
            zIndex: 10,
          }}
        >
          <span style={{ fontSize: 'var(--g-bs)', color: '#0D0D0D' }}>● Kisha</span>
          <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>[ タトゥ ]</span>
          <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>Tattoo</span>
        </div>

        {/* ── H1 — centred ── */}
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
          The artisan&apos;s dô:<br />insights on the craft
        </h1>

        {/* ── hero-info: left-tag | card | right-tag ── */}
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
              overflow: 'hidden',
            }}
          >
            {/* Image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '448/368', flexShrink: 0 }}>
              <Image
                src={HERO_ARTICLE.src}
                alt={HERO_ARTICLE.alt}
                fill
                priority
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 430px) 100vw, 30vw"
              />
            </div>

            {/* Body */}
            <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <h2
                style={{
                  fontSize: 'var(--g-bm)',
                  lineHeight: 1.3,
                  color: '#F2F2F2',
                  fontWeight: 500,
                }}
              >
                {HERO_ARTICLE.title}
              </h2>
              <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}>
                {HERO_ARTICLE.category} · {HERO_ARTICLE.date}
              </span>
              <Link
                href={HERO_ARTICLE.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #F2F2F2',
                  padding: '10px 24px',
                  fontSize: 'var(--g-tag)',
                  fontFamily: 'var(--g-font)',
                  fontWeight: 500,
                  letterSpacing: 'var(--g-ls)',
                  color: '#F2F2F2',
                  textDecoration: 'none',
                }}
              >
                Read this article
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

        {/* ── Vertical nav ── */}
        <nav
          className="g-hero-nav"
          aria-label="Main navigation"
          style={{
            position: 'absolute',
            right: 'var(--g-pad)',
            top: '360px',
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
                  color: '#0D0D0D',
                  textDecoration: 'none',
                  textAlign: 'right',
                  lineHeight: 1,
                  opacity: isActive ? 1 : 0.45,
                  borderBottom: isActive ? '1px solid #0D0D0D' : 'none',
                  paddingBottom: isActive ? '1px' : '0',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

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

        {/* Heading + filter tabs */}
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

          {/* Filter tabs */}
          <div className="g-blog-filter-tabs" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                style={{
                  padding: '4px 14px',
                  border: 'none',
                  background: activeFilter === tab ? '#0D0D0D' : 'transparent',
                  color: activeFilter === tab ? '#F2F2F2' : '#0D0D0D',
                  fontSize: 'var(--g-tag)',
                  fontFamily: 'var(--g-font)',
                  fontWeight: 500,
                  letterSpacing: 'var(--g-ls)',
                  cursor: 'pointer',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Articles grid — 4 columns */}
        <div
          className="g-blog-articles-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
        >
          {visibleArticles.map((article) => (
            <article key={article.id}>
              <Link
                href={`/graphic/blog/article-${article.id}`}
                style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                {/* Square image */}
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

                {/* Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <h3
                    style={{
                      fontSize: 'var(--g-s)',
                      lineHeight: 'var(--g-lh-s)',
                      color: '#0D0D0D',
                      fontWeight: 500,
                    }}
                  >
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
