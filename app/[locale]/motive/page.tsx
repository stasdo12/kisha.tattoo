/**
 * MOTIVE HUB — Japanische Tattoo Motive — pillar page
 * Primary: "japanische tattoo motive", "irezumi motive", "japanisches tattoo bedeutung"
 * All motifs on one page: Drachen · Koi · Kitsune · Sakura · Tiger
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'motive' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/motive', locale })
}

/* ── Static motif structure (locale-independent) ─────────────────────────── */

const MOTIF_STRUCTURE = [
  { id: 'drachen', kanji: '龍', reading: 'Ryū',    imgSrc: '/images/home/motif-dragon.jpg', slug: 'drachen-tattoo-muenchen' },
  { id: 'koi',     kanji: '鯉', reading: 'Koi',    imgSrc: '/images/home/motif-koi.jpg',    slug: 'koi-tattoo-muenchen'     },
  { id: 'kitsune', kanji: '狐', reading: 'Kitsune', imgSrc: '/images/home/motif-fox.jpg',   slug: 'kitsune-tattoo-muenchen' },
  { id: 'sakura',  kanji: '桜', reading: 'Sakura', imgSrc: '/images/home/motif-sakura.jpg', slug: 'sakura-tattoo-muenchen'  },
  { id: 'tiger',   kanji: '虎', reading: 'Tora',   imgSrc: '/images/home/motif-tiger.jpg',  slug: 'tiger-tattoo-muenchen'  },
]

/* ── Page ────────────────────────────────────────────────────────────────── */

export default async function MotiveHub({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'motive' })

  type MotifTx = { label: string; imgAlt: string; tagline: string; intro1: string; intro2: string; cols: Array<{ title: string; body: string }>; faq: Array<{ q: string; a: string }> }
  const motifsTx = t.raw('motifs') as Record<string, MotifTx>
  const MOTIFS = MOTIF_STRUCTURE.map((m) => ({ ...m, ...motifsTx[m.id] }))
  const ALL_FAQ = MOTIFS.flatMap((m) => m.faq)

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Japanische Tattoo Motive', description: 'Irezumi Motive — Drachen, Koi, Kitsune, Sakura, Tiger. Bedeutung und Symbolik erklärt.', url: '/motive' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Japanische Tattoo Motive', url: '/motive' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(ALL_FAQ.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Japanische Tattoo Motive — KishaTattoo München"
        style={{
          position: 'relative',
          height: 'clamp(680px, 90vh, 900px)',
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GLogoBar theme="light" />

        <h1
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 42.6vw, 817px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
            whiteSpace: 'pre-line',
          }}
        >
          {t('hero.h1')}
        </h1>

        {/* Floating kanji cluster */}
        <div
          aria-hidden="true"
          className="g-motive-hero-kanji"
          style={{
            position: 'absolute',
            left: '50%',
            top: '48%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 4rem)',
            fontSize: 'clamp(3rem, 7vw, 9rem)',
            lineHeight: 0.9,
            color: '#0D0D0D',
            opacity: 0.06,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '0.1em',
          }}
        >
          龍鯉狐桜虎
        </div>

        <p
          style={{
            position: 'absolute',
            left: 'var(--g-pad)',
            bottom: '24px',
            width: 'clamp(18rem, 28vw, 480px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D',
          }}
        >
          {t('hero.sub')}
        </p>

        <GNav activePath="/motive" theme="light" />
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('intro.heading')}
            </h2>
          </div>

          <div className="g-text-cols" style={{ display: 'flex', justifyContent: 'flex-end', gap: 'clamp(2rem, 4.2vw, 5rem)' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              {t('intro.body1')}
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              {t('intro.body2')}
            </p>
          </div>

          {/* Motif navigation grid */}
          <div
            className="g-motive-nav-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1px',
              marginTop: 'clamp(2rem, 3.5vw, 4rem)',
              background: '#0D0D0D',
              border: '1px solid #0D0D0D',
            }}
          >
            {MOTIFS.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: 'clamp(1.5rem, 2.5vw, 3rem) 1rem',
                  background: '#F2F2F2',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1, color: '#0D0D0D' }}>{m.kanji}</span>
                <span style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', fontWeight: 500 }}>{m.label}</span>
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{m.reading}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTIF SECTIONS ───────────────────────────────────────────────── */}
      {MOTIFS.map((m, idx) => (
        <section
          key={m.id}
          id={m.id}
          style={{
            background: idx % 2 === 0 ? '#F2F2F2' : '#EBEBEB',
            padding: 'clamp(3rem, 5.5vw, 7rem) 0',
            borderTop: '2px solid #0D0D0D',
          }}
        >
          <div className="g-container">

            {/* Section header */}
            <div className="g-motive-section-header" style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: '2rem', paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
              <div>
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', display: 'block', marginBottom: '0.5rem' }}>{m.reading} — {m.tagline}</span>
                <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
                  {m.label} {t('motifHeadingSuffix')}
                </h2>
              </div>
              <div
                aria-hidden="true"
                style={{
                  fontSize: 'clamp(4rem, 8vw, 10rem)',
                  lineHeight: 1,
                  color: '#0D0D0D',
                  opacity: 0.12,
                  userSelect: 'none',
                  flexShrink: 0,
                }}
              >
                {m.kanji}
              </div>
            </div>

            {/* Intro: photo left (homepage proportions) + text right */}
            <div className="g-motive-intro" style={{ display: 'grid', gridTemplateColumns: 'clamp(200px, 26vw, 400px) 1fr', gap: 'clamp(1.5rem, 3vw, 4rem)', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)', alignItems: 'start' }}>
              <div style={{ position: 'relative', height: 'clamp(380px, calc(180px + 16.67vw), 480px)', overflow: 'hidden' }}>
                <Image
                  src={m.imgSrc}
                  alt={m.imgAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 430px) 100vw, 50vw"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.75rem)' }}>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
                  {m.intro1}
                </p>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
                  {m.intro2}
                </p>
              </div>
            </div>

            {/* Symbolism columns */}
            <div
              className="g-motive-sym-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                background: '#0D0D0D',
                border: '1px solid #0D0D0D',
                marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              }}
            >
              {m.cols.map((col) => (
                <div
                  key={col.title}
                  style={{
                    background: idx % 2 === 0 ? '#F2F2F2' : '#EBEBEB',
                    padding: 'clamp(1.25rem, 2vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <h3 style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', lineHeight: 'var(--g-lh-bm)' }}>{col.title}</h3>
                  <p style={{ fontSize: 'var(--g-bs)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{col.body}</p>
                </div>
              ))}
            </div>

            {/* FAQ for this motif */}
            <div style={{ marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              {m.faq.map((item, i) => (
                <div key={i} className="g-motive-faq-item" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 4vw, 5rem)', padding: 'clamp(1rem, 1.8vw, 1.75rem) 0', borderBottom: '1px solid rgba(13,13,13,0.2)' }}>
                  <h3 style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{item.q}</h3>
                  <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{item.a}</p>
                </div>
              ))}
            </div>

            {/* CTA for this motif */}
            <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', flexWrap: 'wrap', alignItems: 'center', paddingTop: '0.5rem' }}>
              <Link
                href="/booking"
                style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  background: '#0D0D0D',
                  color: '#F2F2F2',
                  fontSize: 'var(--g-bm)',
                  textDecoration: 'none',
                }}
              >
                {t('motifCta').replace('{label}', m.label)}
              </Link>
              <Link
                href="/japanisches-tattoo-muenchen"
                style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  border: '1px solid #0D0D0D',
                  color: '#0D0D0D',
                  fontSize: 'var(--g-bm)',
                  textDecoration: 'none',
                }}
              >
                {t('motifLink')}
              </Link>
            </div>

          </div>
        </section>
      ))}

      {/* ── WORKS TEASER ─────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0', borderTop: '2px solid #0D0D0D' }}>
        <div className="g-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '30rem' }}>
              {t('works.heading')}
            </h2>
            <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', flexWrap: 'wrap' }}>
              <Link href="/works" style={{ display: 'inline-block', padding: '0.6rem 1.5rem', background: '#0D0D0D', color: '#F2F2F2', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
                {t('works.portfolio')}
              </Link>
              <Link href="/booking" style={{ display: 'inline-block', padding: '0.6rem 1.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
                {t('works.booking')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
