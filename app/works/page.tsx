/**
 * GRAPHIC WORKS — Kisha Irezumi portfolio
 * Design: Figma spec 1920 / 1440 / 390px
 * Font: DM Sans weight 500  ·  Colors: #0D0D0D · #BFBFBF · #F2F2F2
 *
 * Gallery layout:
 *  ROW 1 — Left large (1fr) + Right 2×2 grid (1fr)  each 50vw tall
 *  ROW 2 — Full-width                                 50vw tall
 *  ROW 3 — 2 equal columns                            50vw tall
 *  ROW 4 — 4 equal columns                            ~24.5vw tall
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'
import { GWorkImage } from '@/components/graphic/GWorkImage'

export const metadata: Metadata = buildMetadata({
  title: 'Latest Works — Kisha Irezumi',
  description:
    'Dive into the collection and witness the result of deep devotion, precise technique, and unwavering standards.',
  path: '/works',
})

/* ── Data ──────────────────────────────────────────────────────────────────── */

/* Gallery images — replace src with real photos */
const ROW1_LEFT = {
  src: 'https://picsum.photos/seed/w-back-oni/912/960',
  alt: 'Irezumi back piece — Oni mask',
}
const ROW1_RIGHT = [
  { src: '/images/work/4x4-japan-fox-tattoo-graphic.jpg', alt: 'Japanisches Fuchs Tattoo München — Kisha' },
  { src: '/images/work/4x4-rabbit-tattoo-graphic.jpg',    alt: 'Grafik Hasen Tattoo München — Kisha'     },
  { src: '/images/work/4x4-birds-tattoo-graphic.jpg',    alt: 'Grafik Vögel Tattoo München — Kisha'     },
  { src: '/images/work/4x4-bugs-tattoo-graphic.jpg',     alt: 'Grafik Insekten Tattoo München — Kisha'  },
]
const ROW2 = {
  src: 'https://picsum.photos/seed/w-sakura-back/1840/960',
  alt: 'Full back sakura and dragon Irezumi',
}
const ROW3 = [
  { src: 'https://picsum.photos/seed/w-hands-2/912/960', alt: 'Hands and fingers tattoo' },
  { src: 'https://picsum.photos/seed/w-back-wolf/912/960', alt: 'Back piece wolf mask'  },
]
const ROW4 = [
  { src: '/images/work/4x4-dog-tattoo-fineline.jpg',     alt: 'Fineline Hund Tattoo München — Kisha'   },
  { src: '/images/work/4x4-fogel-tattoo-graphic.jpg',    alt: 'Grafik Vogel Tattoo München — Kisha'    },
  { src: '/images/work/4x4-owl-tattoo-fineline.jpg',     alt: 'Fineline Eule Tattoo München — Kisha'   },
  { src: '/images/work/4x4-sakura-tattoo.jpg',           alt: 'Sakura Tattoo München — Kisha'          },
]

/* Shared image height tokens (fluid, anchored 1440→1920) */
// Large: 720px@1440 → 960px@1920  = 50vw
// Small: 356px@1440 → 472px@1920  ≈ calc(8px + 24.17vw)
const H_LARGE = 'clamp(720px, 50vw, 960px)'
const H_SMALL = 'clamp(356px, calc(8px + 24.17vw), 472px)'

/* ── Page ───────────────────────────────────────────────────────────────────── */
export default function GraphicWorksPage() {
  return (
    <main id="main-content">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Latest works — Kisha Irezumi"
        className="g-works-hero"
        data-nav-dark
        style={{
          position: 'relative',
          height: '100dvh',
          minHeight: '780px',
          overflow: 'hidden',
          background: '#0D0D0D',
        }}
      >
        {/* Background image */}
        <Image
          src="/images/work/main-work-tattoo.JPG"
          alt=""
          aria-hidden="true"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="100vw"
        />
        {/* Dark overlay rgba(13,13,13,0.35) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(13,13,13,0.35)',
            zIndex: 1,
          }}
        />

        {/* ── Logo bar ── */}
        <GLogoBar theme="dark" />

        {/* ── H1 ── */}
        <h1
          className="g-works-hero-h1"
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#F2F2F2',
            zIndex: 2,
          }}
        >
          Latest works
        </h1>

        {/* ── Subtitle ── */}
        <p
          className="g-works-hero-sub"
          style={{
            position: 'absolute',
            top: 'clamp(148px, calc(88px + 4.17vw), 164px)',
            left: 'var(--g-pad)',
            width: 'clamp(280px, 24.8vw, 357px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 1.5,
            color: 'rgba(242,242,242,0.85)',
            zIndex: 2,
          }}
        >
          Dive into the collection and witness the result of deep devotion,
          precise technique, and unwavering standards
        </p>

        {/* ── Vertical nav ── */}
        <GNav activePath="/works" theme="dark" />

        {/* ── Kanji 術 + caption ── */}
        <div
          className="g-works-kanji"
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 'clamp(30px, 4.6vw, 60px)',
            left: 'var(--g-pad)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '170px',
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: 'clamp(48px, 4.44vw, 64px)', lineHeight: 1, color: '#F2F2F2' }}>
            術
          </span>
          <span style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: 'rgba(242,242,242,0.6)' }}>
            In the context of large-scale Irezumi, underscores the professionalism of the master
          </span>
        </div>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────────────────── */}
      {/*
        Container uses var(--g-pad) on both sides.
        100px gap between hero bottom and first row.
        All rows gap: 16px.
      */}
      <section
        aria-label="Works gallery"
        className="g-works-gallery-section"
        style={{
          background: '#F2F2F2',
          paddingTop: 'clamp(60px, 6.25vw, 100px)',
          paddingBottom: 'clamp(60px, 6.25vw, 100px)',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
        }}
      >
        <div
          className="g-works-gallery"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >

          {/* ROW 1 — Left large + Right 2×2 grid ─────────────────────── */}
          <div
            className="g-works-row1"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
          >
            {/* Left: single tall image */}
            <GWorkImage
              src={ROW1_LEFT.src}
              alt={ROW1_LEFT.alt}
              sizes="50vw"
              style={{ height: H_LARGE }}
            />

            {/* Right: 2×2 grid */}
            <div
              className="g-works-row1-right"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '16px',
                height: H_LARGE,
              }}
            >
              {ROW1_RIGHT.map((img) => (
                <GWorkImage key={img.src} src={img.src} alt={img.alt} sizes="25vw" />
              ))}
            </div>
          </div>

          {/* ROW 2 — Full-width ─────────────────────────────────────────── */}
          <GWorkImage
            src={ROW2.src}
            alt={ROW2.alt}
            sizes="100vw"
            style={{ height: H_LARGE }}
          />

          {/* ROW 3 — 2 equal columns ────────────────────────────────────── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ROW3.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} sizes="50vw" style={{ height: H_LARGE }} />
            ))}
          </div>

          {/* ROW 4 — 4 equal small columns ──────────────────────────────── */}
          <div
            className="g-works-row4"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
          >
            {ROW4.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} sizes="25vw" style={{ height: H_SMALL }} />
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        data-nav-dark
        style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
              Dein Custom Tattoo — bereit für den nächsten Schritt?
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: 'rgba(242,242,242,0.55)', textDecoration: 'none', borderBottom: '1px solid rgba(242,242,242,0.3)', paddingBottom: '2px' }}>
                Preise ansehen
              </Link>
              <Link href="/about" style={{ fontSize: 'var(--g-bm)', color: 'rgba(242,242,242,0.55)', textDecoration: 'none', borderBottom: '1px solid rgba(242,242,242,0.3)', paddingBottom: '2px' }}>
                Über Kisha
              </Link>
            </div>
          </div>
          <Link
            href="/booking"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.5rem',
              background: '#F2F2F2',
              color: '#0D0D0D',
              fontSize: 'var(--g-bm)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Termin anfragen
          </Link>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <GFooter />

    </main>
  )
}
