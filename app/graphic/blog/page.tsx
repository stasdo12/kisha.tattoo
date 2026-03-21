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
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'
import { GArticleCard } from '@/components/graphic/GArticleCard'

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
        <GLogoBar layout="spread" theme="light" />

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
        <GNav activePath="/graphic/blog" theme="light" top="360px" />

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
