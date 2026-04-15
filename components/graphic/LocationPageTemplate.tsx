/**
 * LocationPageTemplate — shared template for all suburb location pages.
 * Redesigned to match Figma spec (2026-04-15): large hero, near-section with gallery, FAQ left/right.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { buildMetadata } from '@/lib/seo'
import { locationServiceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { GWorkImage } from '@/components/graphic/GWorkImage'
import { CtaStrip } from '@/components/graphic/CtaStrip'

export interface LocationPageConfig {
  citySlug: string       // i18n key under 'locations' namespace, e.g. 'eching'
  cityName: string       // Schema city name, e.g. 'Eching'
  travelMinutes: number  // Drive time from Munich for LocalBusiness schema
  path: string           // Canonical URL path, e.g. '/tattoo-eching'
}

/* ── Metadata factory (call from each page's generateMetadata) ──────────── */
export async function buildLocationMetadata(
  locale: string,
  config: LocationPageConfig,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'locations' })
  return buildMetadata({
    title: t(`${config.citySlug}.meta.title`),
    description: t(`${config.citySlug}.meta.description`),
    path: config.path,
    locale,
    hreflang: false,
  })
}

const GALLERY_BIG = {
  src: '/images/work/middle-graphic-body-flower-tattoo.jpg',
  alt: 'Grafik Blumen Körper Tattoo München — Kisha',
  name: 'Blumen Körper — Grafik',
  tags: ['München'],
}

const GALLERY_WORKS = [
  { src: '/images/work/4x4-japan-fox-tattoo-graphic.jpg',  alt: 'Japanisches Fuchs Tattoo München — Kisha', name: 'Fuchs — Japanisch', tags: ['München'] },
  { src: '/images/work/4x4-rabbit-tattoo-graphic.jpg',     alt: 'Grafik Hase Tattoo München — Kisha',       name: 'Hase — Grafik',     tags: ['München'] },
  { src: '/images/work/4x4-sakura-tattoo.jpg',             alt: 'Sakura Tattoo München — Kisha',            name: 'Sakura — Grafik',   tags: ['München'] },
  { src: '/images/work/4x4-birds-tattoo-graphic.jpg',      alt: 'Grafik Vögel Tattoo München — Kisha',      name: 'Vögel — Grafik',    tags: ['München'] },
]

/* ── Page component ─────────────────────────────────────────────────────── */
export async function LocationPageTemplate({
  locale,
  config,
}: {
  locale: string
  config: LocationPageConfig
}) {
  const { citySlug, cityName, travelMinutes, path } = config
  const t = await getTranslations({ locale, namespace: 'locations' })
  const faqItems = t.raw(`${citySlug}.faq.items`) as Array<{ q: string; a: string }>

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        locationServiceSchema({ cityName, citySlug, travelMinutes })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: `Tattoo ${cityName}`, url: path }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label={`Tattoo ${cityName} — KishaTattoo München`}
        style={{ position: 'relative', minHeight: 'clamp(820px, 56.25vw, 1080px)', background: '#F2F2F2', overflow: 'hidden' }}
      >
        <GHeader theme="light" />

        {/* H1 — top left */}
        <h1
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(300px, 44vw, 817px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
            whiteSpace: 'pre-line',
          }}
        >
          {t(`${citySlug}.hero.h1`)}
        </h1>

        {/* Travel info — top right */}
        <p
          style={{
            position: 'absolute',
            top: '72px',
            right: 'var(--g-pad)',
            width: 'clamp(180px, 18.75vw, 285px)',
            textAlign: 'right',
            fontSize: 'var(--g-bm)',
            lineHeight: 1.4,
            color: '#0D0D0D',
          }}
        >
          {t(`${citySlug}.hero.sub`)}
        </p>

        {/* Kanji — centred */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '48%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(100px, 11.2vw, 160px)',
            lineHeight: 0.9,
            color: '#0D0D0D',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          彫
        </div>

        {/* CTA booking button — bottom of hero */}
        <CtaStrip
          label={t('ctaBooking')}
          style={{ position: 'absolute', bottom: 0, left: 'var(--g-pad)', right: 'var(--g-pad)' }}
        />
      </section>

      {/* ── NEAR SECTION ─────────────────────────────────────────────────── */}
      <section
        aria-label={`Tattoo near ${cityName}`}
        style={{
          background: '#F2F2F2',
          paddingTop: 'clamp(40px, 5.56vw, 80px)',
          paddingBottom: 0,
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
        }}
      >
        {/* Section heading */}
        <div style={{ borderBottom: '2px solid #0D0D0D', paddingBottom: '20px', marginBottom: 'clamp(40px, 4.9vw, 95px)' }}>
          <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
            {t(`${citySlug}.content.heading`)}
          </h2>
        </div>

        {/* Two text columns */}
        <div
          className="g-loc-text-cols"
          style={{ display: 'flex', gap: 'clamp(1.5rem, 4vw, 5rem)', marginBottom: 'clamp(40px, 5.4vw, 80px)', flexWrap: 'wrap' }}
        >
          <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1.4, color: '#0D0D0D', width: 'clamp(260px, 23.3vw, 448px)', flexShrink: 0 }}>
            {t(`${citySlug}.content.body1`)}
          </p>
          <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1.4, color: '#0D0D0D', width: 'clamp(260px, 23.3vw, 448px)', flexShrink: 0 }}>
            {t(`${citySlug}.content.body2`)}
          </p>
        </div>

        {/* Gallery — 1 large left + 2×2 right */}
        <div
          className="g-loc-gallery"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}
        >
          {/* Big image */}
          <GWorkImage
            src={GALLERY_BIG.src}
            alt={GALLERY_BIG.alt}
            name={GALLERY_BIG.name}
            tags={GALLERY_BIG.tags}
            sizes="(max-width: 767px) 100vw, 50vw"
            style={{ height: 'clamp(400px, 50vw, 960px)' }}
          />

          {/* 2×2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '8px', height: 'clamp(400px, 50vw, 960px)' }}>
            {GALLERY_WORKS.map(({ src, alt, name, tags }) => (
              <GWorkImage key={src} src={src} alt={alt} name={name} tags={tags} sizes="(max-width: 767px) 100vw, 25vw" style={{ height: '100%' }} />
            ))}
          </div>
        </div>

        {/* View all works — dark full-width button */}
        <Link
          href="/works"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0D0D0D',
            padding: '16px 12px',
            marginLeft: 'calc(-1 * var(--g-pad))',
            marginRight: 'calc(-1 * var(--g-pad))',
            textDecoration: 'none',
            marginTop: '32px',
          }}
        >
          <span style={{ fontSize: 'var(--g-bm)', lineHeight: 1, fontFamily: 'var(--g-font)', fontWeight: 500, color: '#F2F2F2', whiteSpace: 'nowrap' }}>
            {t(`${citySlug}.gallery.link`)}
          </span>
        </Link>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        aria-label={`FAQ Tattoo ${cityName}`}
        style={{
          background: '#F2F2F2',
          paddingTop: 'clamp(40px, 5.56vw, 80px)',
          paddingBottom: 'clamp(40px, 5.56vw, 80px)',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
        }}
      >
        <div
          className="g-loc-faq"
          style={{
            borderTop: '2px solid #0D0D0D',
            paddingTop: '20px',
            display: 'flex',
            gap: 'clamp(2rem, 5vw, 6rem)',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {/* Heading left */}
          <h2
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              width: 'clamp(180px, 19.3vw, 370px)',
              flexShrink: 0,
            }}
          >
            {t(`${citySlug}.faq.heading`)}
          </h2>

          {/* FAQ items right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 3.5vw, 3.5rem)', flex: 1, minWidth: '260px' }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span style={{ position: 'absolute', top: 0, right: 0, fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', whiteSpace: 'nowrap' }}>
                  [ Question №{i + 1} ]
                </span>
                <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', paddingRight: '130px' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1.4, color: '#0D0D0D', maxWidth: '430px' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}