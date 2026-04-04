/**
 * GRAPHIC WORKS — Kisha Irezumi portfolio
 * Design: Figma spec 1920 / 1440 / 390px
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
import { getTranslations } from 'next-intl/server'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { GWorkImage } from '@/components/graphic/GWorkImage'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'works' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/works', locale })
}

/* ── Data ──────────────────────────────────────────────────────────────────── */

const ROW1_LEFT = {
  src: '/images/work/middle-graphic-body-flower-tattoo.jpg',
  alt: 'Grafik Blumen Körper Tattoo München — Kisha',
  tags: ['Grafik', 'Körper', 'München'],
}
const ROW1_RIGHT = [
  { src: '/images/work/4x4-japan-fox-tattoo-graphic.jpg', alt: 'Japanisches Fuchs Tattoo München — Kisha',  tags: ['Japanisch', 'Fuchs', 'München']    },
  { src: '/images/work/4x4-rabbit-tattoo-graphic.jpg',    alt: 'Grafik Hasen Tattoo München — Kisha',       tags: ['Grafik', 'Hase', 'München']        },
  { src: '/images/work/4x4-birds-tattoo-graphic.jpg',     alt: 'Grafik Vögel Tattoo München — Kisha',       tags: ['Grafik', 'Vögel', 'München']       },
  { src: '/images/work/4x4-bugs-tattoo-graphic.jpg',      alt: 'Grafik Insekten Tattoo München — Kisha',    tags: ['Grafik', 'Insekten', 'München']    },
]
const ROW2 = {
  src: '/images/work/row2-snake-knie-tattoo.jpg',
  alt: 'Grafik Schlangen Knie Tattoo München — Kisha',
  tags: ['Grafik', 'Schlange', 'München'],
}
const ROW3 = [
  { src: '/images/work/middle-graphic-hand-with-flower-tattoo.jpg', alt: 'Grafik Blumen Hand Tattoo München — Kisha', tags: ['Grafik', 'Hand', 'München']  },
  { src: '/images/work/middle-graphic-legs-tattoo.jpg',             alt: 'Grafik Bein Tattoo München — Kisha',        tags: ['Grafik', 'Bein', 'München']  },
]
const ROW4 = [
  { src: '/images/work/4x4-dog-tattoo-fineline.jpg',  alt: 'Fineline Hund Tattoo München — Kisha',  tags: ['Fineline', 'Hund', 'München']  },
  { src: '/images/work/4x4-fogel-tattoo-graphic.jpg', alt: 'Grafik Vogel Tattoo München — Kisha',   tags: ['Grafik', 'Vogel', 'München']   },
  { src: '/images/work/4x4-owl-tattoo-fineline.jpg',  alt: 'Fineline Eule Tattoo München — Kisha',  tags: ['Fineline', 'Eule', 'München']  },
  { src: '/images/work/4x4-sakura-tattoo.jpg',        alt: 'Sakura Tattoo München — Kisha',         tags: ['Sakura', 'Grafik', 'München']  },
]

const H_LARGE = 'clamp(720px, 50vw, 820px)'
const H_SMALL = 'clamp(356px, calc(8px + 24.17vw), 472px)'

/* ── Page ───────────────────────────────────────────────────────────────────── */
export default async function GraphicWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'works' })
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
          src="/images/work/main-work-tattoo.jpg"
          alt="Japanisches Irezumi Tattoo — KishaTattoo München"
          aria-hidden="true"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(13,13,13,0.35)',
            zIndex: 1,
          }}
        />

        <GHeader theme="dark" />

        {/* H1 */}
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
          {t('hero.h1')}
        </h1>

        {/* Subtitle */}
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
          {t('hero.sub')}
        </p>

        {/* Kanji 術 + caption */}
        <div
          className="g-works-kanji"
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 'clamp(72px, 7.5vw, 92px)',
            left: 'var(--g-pad)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '170px',
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: 'var(--g-xl)', lineHeight: 0.9, color: '#F2F2F2' }}>
            術
          </span>
          <span style={{ fontSize: 'var(--g-bxs)', lineHeight: 1.4, color: '#BFBFBF' }}>
            {t('hero.kanjiCaption')}
          </span>
        </div>

        {/* CTA button — bottom of hero */}
        <Link
          href="/booking"
          style={{
            position: 'absolute',
            bottom: '20px',
            left: 'var(--g-pad)',
            right: 'var(--g-pad)',
            height: '52px',
            background: '#F2F2F2',
            color: '#0D0D0D',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 'var(--g-bm)',
            fontWeight: 500,
            letterSpacing: 'var(--g-ls)',
            textDecoration: 'none',
            zIndex: 2,
          }}
        >
          {t('hero.cta')}
        </Link>
      </section>

      {/* ── GALLERY ────────────────────────────────────────────────────────── */}
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

          {/* ROW 1 — Left large + Right 2×2 grid */}
          <div
            className="g-works-row1"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
          >
            <GWorkImage
              src={ROW1_LEFT.src}
              alt={ROW1_LEFT.alt}
              tags={ROW1_LEFT.tags}
              sizes="50vw"
              style={{ height: H_LARGE }}
            />
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
                <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} sizes="25vw" />
              ))}
            </div>
          </div>

          {/* ROW 2 — Full-width */}
          <GWorkImage
            src={ROW2.src}
            alt={ROW2.alt}
            tags={ROW2.tags}
            sizes="100vw"
            style={{ height: 'clamp(432px, 39.6vw, 672px)' }}
          />

          {/* ROW 3 — 2 equal columns */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ROW3.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} sizes="50vw" style={{ height: H_LARGE }} />
            ))}
          </div>

          {/* ROW 4 — 4 equal small columns */}
          <div
            className="g-works-row4"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}
          >
            {ROW4.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} sizes="25vw" style={{ height: H_SMALL }} />
            ))}
          </div>

        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <GFooter />

    </main>
  )
}
