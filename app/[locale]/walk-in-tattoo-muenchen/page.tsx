/**
 * WALK IN TATTOO MÜNCHEN — Service landing page
 * Primary keyword: "walk in tattoo münchen" (170/mo, KD 18)
 * Cluster: walk in tattoo, spontan tattoo münchen, tattoo ohne termin münchen
 */
import type { Metadata } from 'next'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'walkin' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/walk-in-tattoo-muenchen', locale, hreflang: false })
}

export default async function WalkInTattooMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'walkin' })
  const faqItems  = t.raw('faq.items')   as Array<{ q: string; a: string }>
  const stepItems = t.raw('steps.items') as Array<{ num: string; title: string; body: string }>

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Walk In Tattoo München — KishaTattoo', description: 'Walk-In Tattoo München: spontan und kurzfristig stechen lassen. Fineline, Japanisch, Grafik.', url: '/walk-in-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Walk In Tattoo München', url: '/walk-in-tattoo-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Walk In Tattoo München — KishaTattoo"
        className="g-walkin-hero"
        style={{
          position: 'relative',
          height: 'clamp(560px, 46.875vw, 900px)',
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GHeader theme="light" />

        {/* H1 — top left */}
        <h1
          className="g-walkin-hero-h1"
          style={{
            position: 'absolute',
            top: 'clamp(3.5rem, 3.75vw, 72px)',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 35vw, 670px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
            whiteSpace: 'pre-line',
          }}
        >
          {t('hero.h1')}
        </h1>

        {/* Subtitle — top right */}
        <p
          className="g-walkin-hero-sub"
          style={{
            position: 'absolute',
            top: 'clamp(3.5rem, 3.75vw, 72px)',
            right: 'var(--g-pad)',
            width: 'clamp(10rem, 13.64vw, 262px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D',
            textAlign: 'right',
          }}
        >
          {t('hero.sub')}
        </p>

        {/* Kanji 今 — centered */}
        <div
          aria-hidden="true"
          className="g-walkin-hero-kanji"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(5rem, 8.23vw, 158px)',
            lineHeight: 1,
            color: '#0D0D0D',
            textAlign: 'center',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          今
        </div>
      </section>

      {/* ── INFO — how it works ───────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2.5rem, 5.56vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div
            className="g-walkin-info"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: 'clamp(30rem, 47.7vw, 916px)' }}
          >
            <h2
              id="walkin-intro-heading"
              style={{
                fontSize: 'var(--g-s)',
                lineHeight: 'var(--g-lh-s)',
                color: '#0D0D0D',
                width: 'clamp(14rem, 15.99vw, 307px)',
              }}
            >
              {t('intro.heading')}
            </h2>

            <div
              className="g-walkin-info-cols"
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '1.25rem' }}
            >
              <p
                style={{
                  fontSize: 'var(--g-bm)',
                  lineHeight: 'var(--g-lh-bm)',
                  color: '#0D0D0D',
                  flex: '1 1 0',
                  minWidth: 0,
                }}
              >
                {t('intro.body1')}
              </p>
              <p
                style={{
                  fontSize: 'var(--g-bm)',
                  lineHeight: 'var(--g-lh-bm)',
                  color: '#0D0D0D',
                  flex: '1 1 0',
                  minWidth: 0,
                }}
              >
                {t('intro.body2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STEPS ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-steps-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2.5rem, 5.56vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'clamp(1.5rem, 2.08vw, 2rem)',
            }}
          >
            <h2
              id="walkin-steps-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(20rem, 35.1vw, 674px)',
              }}
            >
              {t('steps.heading')}
            </h2>
          </div>

          {/* Dark steps card */}
          <div
            className="g-walkin-steps"
            style={{
              background: '#0D0D0D',
              padding: 'clamp(1.5rem, 2.08vw, 2.5rem)',
              display: 'flex',
            }}
          >
            {stepItems.map((step, i) => (
              <div
                key={step.title}
                className="g-walkin-step-col"
                style={{
                  flex: '1 1 0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 'clamp(6rem, 11.46vw, 13.75rem)',
                  paddingRight: i < stepItems.length - 1 ? 'clamp(1rem, 1.67vw, 2rem)' : 0,
                  paddingLeft: i > 0 ? 'clamp(1rem, 1.67vw, 2rem)' : 0,
                  borderRight: i < stepItems.length - 1 ? '1px solid rgba(242,242,242,0.3)' : 'none',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3
                    style={{
                      fontSize: 'var(--g-s)',
                      lineHeight: 'var(--g-lh-s)',
                      color: '#F2F2F2',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--g-bm)',
                      lineHeight: 'var(--g-lh-bm)',
                      color: '#F2F2F2',
                      maxWidth: 'clamp(14rem, 18.75vw, 360px)',
                    }}
                  >
                    {step.body}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  style={{
                    fontSize: 'var(--g-s)',
                    lineHeight: 'var(--g-lh-s)',
                    color: '#F2F2F2',
                    alignSelf: 'center',
                  }}
                >
                  {step.num}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2.5rem, 5.56vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div
            className="g-preise-faq-layout"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              borderTop: '2px solid #0D0D0D',
              paddingTop: '1.25rem',
            }}
          >
            <h2
              id="walkin-faq-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                flexShrink: 0,
                width: 'clamp(16rem, 19.27vw, 370px)',
              }}
            >
              {t('faq.heading')}
            </h2>

            <div
              className="g-faq-content g-walkin-faq-items"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: 'clamp(30rem, 47.5vw, 912px)',
                flexShrink: 0,
              }}
            >
              {faqItems.map((item, i) => (
                <div key={i} className="g-faq-item">
                  <span className="g-faq-item__num g-tag">[ Question №{i + 1} ]</span>
                  <h3 className="g-faq-item__q">{item.q}</h3>
                  <p className="g-faq-item__a">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}