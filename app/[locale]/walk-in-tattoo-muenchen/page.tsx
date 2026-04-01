/**
 * WALK IN TATTOO MÜNCHEN — Service landing page
 * Primary keyword: "walk in tattoo münchen" (170/mo, KD 18)
 * Cluster: walk in tattoo, spontan tattoo münchen, tattoo ohne termin münchen
 */
import type { Metadata } from 'next'
import Link from 'next/link'
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
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>
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
        style={{
          position: 'relative',
          height: 'clamp(680px, 90vh, 900px)',
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GHeader theme="light" />

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

        {/* Decorative kanji 今 — now / the present moment */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            top: '48%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(4rem, 10vw, 12rem)',
            lineHeight: 0.9,
            color: '#0D0D0D',
            opacity: 0.07,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          今
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

      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {t('intro.tag')}
            </span>
            <h2
              id="walkin-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              {t('intro.heading')}
            </h2>
            <Link
              href="/booking"
              style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              {t('intro.requestLink')}
            </Link>
          </div>

          <div
            className="g-text-cols"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 'clamp(2rem, 4.2vw, 5rem)',
              marginTop: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              {t('intro.body1')}
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              {t('intro.body2')}
            </p>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-steps-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <h2
              id="walkin-steps-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}
            >
              {t('steps.heading')}
            </h2>
          </div>

          <div className="g-about-steps" style={{ display: 'flex' }}>
            {(t.raw('steps.items') as Array<{ num: string; title: string; body: string }>).map((step, i) => (
              <div
                key={step.title}
                className="g-about-step-col"
                style={{
                  flex: '1 1 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  padding: i === 0 ? '0 clamp(1rem, 2vw, 2rem) 0 0' : i === 1 ? '0 clamp(1rem, 2vw, 2rem)' : '0 0 0 clamp(1rem, 2vw, 2rem)',
                  borderLeft: i > 0 ? '1px solid #0D0D0D' : 'none',
                }}
              >
                <span style={{ fontSize: 'var(--g-l)', lineHeight: 1, color: 'rgba(13,13,13,0.15)' }} aria-hidden="true">{step.num}</span>
                <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{step.title}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="walkin-faq-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
            }}
          >
            {t('faq.heading')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(2rem, 4vw, 5rem)',
                  padding: 'clamp(1rem, 1.8vw, 1.75rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.2)',
                }}
              >
                <h3 style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{item.q}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{t('related.label')}</span>
          <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.prices')}</Link>
          <Link href="/fineline-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.fineline')}</Link>
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.grafik')}</Link>
          <Link href="/booking" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.booking')}</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        data-nav-dark
        style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            {t('cta.heading')}
          </p>
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
            {t('cta.button')}
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
