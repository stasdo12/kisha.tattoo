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
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { MotiveAccordion } from '@/components/graphic/MotiveAccordion'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'motive' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/motive', locale })
}

/* ── Static motif structure (locale-independent) ─────────────────────────── */

const MOTIF_STRUCTURE = [
  { id: 'drachen', kanji: '龍', reading: 'Ryū',     imgSrc: '/images/home/motif-dragon.jpg' },
  { id: 'koi',     kanji: '鯉', reading: 'Koi',     imgSrc: '/images/home/motif-koi.jpg'    },
  { id: 'kitsune', kanji: '狐', reading: 'Kitsune', imgSrc: '/images/home/motif-fox.jpg'    },
  { id: 'sakura',  kanji: '桜', reading: 'Sakura',  imgSrc: '/images/home/motif-sakura.jpg' },
  { id: 'tiger',   kanji: '虎', reading: 'Tora',    imgSrc: '/images/home/motif-tiger.jpg'  },
]

/* ── Page ────────────────────────────────────────────────────────────────── */

export default async function MotiveHub({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'motive' })

  type MotifTx = {
    label: string
    imgAlt: string
    tagline: string
    intro1: string
    intro2: string
    cols: Array<{ title: string; body: string }>
    faq: Array<{ q: string; a: string }>
  }
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
          height: '100svh',
          minHeight: 680,
          maxHeight: 1080,
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GHeader theme="light" />

        {/* Top-right decorative label */}
        <p style={{
          position: 'absolute',
          top: 24,
          right: 'var(--g-pad)',
          fontSize: 'var(--g-tag)',
          color: '#BFBFBF',
          whiteSpace: 'nowrap',
          lineHeight: 'normal',
        }}>
          {t('hero.label')}
        </p>

        {/* H1 */}
        <h1
          style={{
            position: 'absolute',
            top: 72,
            left: 'var(--g-pad)',
            width: 'clamp(16rem, 26.8vw, 32.2rem)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
            whiteSpace: 'pre-line',
          }}
        >
          {t('hero.h1')}
        </h1>

        {/* Subtitle — below H1 */}
        <p
          style={{
            position: 'absolute',
            top: 'clamp(160px, 21.85vh, 236px)',
            left: 'var(--g-pad)',
            width: 'clamp(12rem, 13.8vw, 16.5rem)',
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D',
          }}
        >
          {t('hero.sub')}
        </p>

        {/* Central kanji 柄 */}
        <p
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '44%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(5rem, 6.82vw, 8.19rem)',
            lineHeight: 1,
            color: '#0D0D0D',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          柄
        </p>

        {/* Nav tabs */}
        <nav
          className="g-motive-tabs"
          aria-label={t('hero.h1').replace('\n', ' ')}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 'var(--g-pad)',
            right: 'var(--g-pad)',
            display: 'flex',
          }}
        >
          {MOTIFS.map((m, i) => {
            const tabLabel = `${m.label}${m.reading !== m.label ? ` (${m.reading})` : ''}`
            return (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="g-motive-tab"
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '20px',
                  padding: 'clamp(1rem, 2.08vw, 2.5rem)',
                  borderTop: '1px solid #0D0D0D',
                  borderBottom: '1px solid #0D0D0D',
                  borderRight: '1px solid #0D0D0D',
                  borderLeft: i === 0 ? '1px solid #0D0D0D' : 'none',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>
                  {m.kanji}
                </span>
                <span style={{ fontSize: 'var(--g-bm)', lineHeight: 1, color: '#0D0D0D' }}>
                  {tabLabel}
                </span>
              </a>
            )
          })}
        </nav>
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">

          {/* Heading with bottom border */}
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('intro.heading')}
            </h2>
          </div>

          {/* Two-column body text */}
          <div className="g-motive-intro-cols" style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', marginBottom: 'clamp(2rem, 3.5vw, 4rem)' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 28rem)', flexShrink: 0 }}>
              {t('intro.body1')}
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 28rem)', flexShrink: 0 }}>
              {t('intro.body2')}
            </p>
          </div>

          {/* CTA button */}
          <Link
            href="/booking"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '1rem 0.75rem',
              background: '#0D0D0D',
              color: '#F2F2F2',
              fontSize: 'var(--g-bm)',
              lineHeight: 1,
              textDecoration: 'none',
            }}
          >
            {t('intro.cta')}
          </Link>

        </div>
      </section>

      {/* ── MOTIF CARDS ──────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2' }}>
        <div className="g-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 2.5vw, 2.5rem)' }}>

            {MOTIFS.map((m) => {
              const tags = m.tagline.split(' · ')
              const displayName = `${m.label}${m.reading !== m.label ? ` (${m.reading})` : ''}`
              const sectionTitle = `${displayName} Tattoo — ${t('motifHeadingSuffix')}`

              return (
                <article
                  key={m.id}
                  id={m.id}
                  style={{
                    borderBottom: '2px solid #0D0D0D',
                    paddingBottom: 'clamp(2rem, 3.61vw, 3.25rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(2rem, 3.61vw, 3.25rem)',
                  }}
                >
                  {/* Top: image + content */}
                  <div className="g-motive-card-top" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>

                    {/* Image */}
                    <div
                      className="g-motive-card-img"
                      style={{ position: 'relative', width: 'calc(50% - 8px)', flexShrink: 0, overflow: 'hidden', minHeight: 480 }}
                    >
                      <Image
                        src={m.imgSrc}
                        alt={m.imgAlt}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 430px) 100vw, 50vw"
                      />
                    </div>

                    {/* Content */}
                    <div
                      className="g-motive-card-content"
                      style={{ width: 'calc(50% - 8px)', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 3.61vw, 3.25rem)' }}
                    >
                      {/* Heading + tags */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: 'clamp(18rem, 26.7vw, 32rem)' }}>
                          {sectionTitle}
                        </h2>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                          {tags.map((tag) => (
                            <span key={tag} style={{ fontSize: 'var(--g-bs)', lineHeight: 1, color: '#0D0D0D' }}>
                              [ {tag} ]
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Body paragraphs */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1, color: '#0D0D0D', maxWidth: 'clamp(18rem, 27.1vw, 32.5rem)' }}>
                          {m.intro1}
                        </p>
                        <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1, color: '#0D0D0D', maxWidth: 'clamp(18rem, 27.1vw, 32.5rem)' }}>
                          {m.intro2}
                        </p>
                      </div>

                      {/* Accordion */}
                      <MotiveAccordion items={m.cols} />
                    </div>

                  </div>

                  {/* Bottom: FAQ + buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 2.22vw, 2rem)' }}>

                    {/* FAQ */}
                    <div className="g-motive-card-faq" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '2rem' }}>
                      <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', paddingTop: '0.2em' }}>
                        [ FAQ ]
                      </span>
                      <div style={{ flex: 1, maxWidth: 'calc(50% - 8px)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {m.faq.map((item, qi) => (
                          <div key={qi} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>
                              {item.q}
                            </h3>
                            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 1, color: '#0D0D0D', maxWidth: 'clamp(16rem, 21.9vw, 26.25rem)' }}>
                              {item.a}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="g-motive-card-btns" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1px' }}>
                      <Link
                        href="/booking"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 'calc(50% - 0.5px)', height: 52,
                          background: '#0D0D0D',
                          color: '#F2F2F2',
                          fontSize: 'var(--g-bm)', lineHeight: 1,
                          textDecoration: 'none',
                        }}
                      >
                        {t('motifCta').replace('{label}', m.label)}
                      </Link>
                      <Link
                        href="/japanisches-tattoo-muenchen"
                        style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          width: 'calc(50% - 0.5px)', height: 52,
                          border: '1px solid #0D0D0D',
                          color: '#0D0D0D',
                          fontSize: 'var(--g-bm)', lineHeight: 1,
                          textDecoration: 'none',
                        }}
                      >
                        {t('motifLink')}
                      </Link>
                    </div>

                  </div>
                </article>
              )
            })}

          </div>
        </div>
      </section>

      {/* ── WORKS TEASER ─────────────────────────────────────────────────── */}
      <section style={{ background: '#E8E8E8', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 14.58vw, 17.5rem)' }}>

            {/* Heading row */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>[ Portfolio ]</span>
                <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: 'clamp(18rem, 24.8vw, 29.75rem)' }}>
                  {t('works.heading')}
                </p>
              </div>
              {/* Arrow */}
              <div style={{ flexShrink: 0, width: 'clamp(2.5rem, 3.7vw, 4.5rem)', height: 'clamp(2.5rem, 3.8vw, 4.5625rem)' }}>
                <svg viewBox="0 0 71 73" fill="none" style={{ width: '100%', height: '100%' }}>
                  <path d="M8 36.5h55M42 16.5l22 20-22 20" stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* CTA button */}
            <Link
              href="/works"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '100%', padding: '1rem 0.75rem',
                background: '#0D0D0D',
                color: '#F2F2F2',
                fontSize: 'var(--g-bm)', lineHeight: 1,
                textDecoration: 'none',
              }}
            >
              {t('works.portfolio')}
            </Link>

          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}