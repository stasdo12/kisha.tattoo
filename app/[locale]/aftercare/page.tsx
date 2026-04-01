/**
 * AFTERCARE — Tattoo Pflege Guide
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { breadcrumbSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'aftercare' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/aftercare', locale })
}

export default async function AftercarePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'aftercare' })

  type DayItem = { period: string; title: string; steps: string[] }
  type AvoidItem = { icon: string; label: string; note: string }
  type ProductItem = { name: string; note: string }

  const days    = t.raw('guide.days')    as DayItem[]
  const avoid   = t.raw('avoid.items')  as AvoidItem[]
  const products = t.raw('products.items') as ProductItem[]

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Aftercare', url: '/aftercare' }])
        )}}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Tattoo Aftercare — KishaTattoo"
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
            opacity: 0.08,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          癒
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

      {/* ── DAY BY DAY ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="aftercare-guide-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="aftercare-guide-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('guide.heading')}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {days.map((day, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(5rem, 8vw, 9rem) 1fr',
                  gap: 'clamp(1.5rem, 3vw, 4rem)',
                  padding: 'clamp(1.5rem, 2.5vw, 3rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.15)',
                }}
              >
                <div>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.45)', display: 'block', marginBottom: '0.4rem' }}>{day.period}</span>
                  <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{day.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {day.steps.map((step, j) => (
                    <li key={j} style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', paddingLeft: '1.2rem', position: 'relative' }}>
                      <span aria-hidden="true" style={{ position: 'absolute', left: 0, color: 'rgba(13,13,13,0.35)' }}>–</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO AVOID ─────────────────────────────────────────────────── */}
      <section aria-labelledby="avoid-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="avoid-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('avoid.heading')}
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
            {avoid.map((item) => (
              <div
                key={item.label}
                style={{ padding: 'clamp(1rem, 1.5vw, 1.5rem)', border: '1px solid rgba(13,13,13,0.15)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                <span style={{ fontSize: 'var(--g-l)', lineHeight: 1, color: 'rgba(13,13,13,0.15)', fontWeight: 500 }} aria-hidden="true">{item.icon}</span>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{item.label}</span>
                <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.5, color: 'rgba(13,13,13,0.6)' }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="products-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="products-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('products.heading')}
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {products.map((p, i) => (
              <div
                key={i}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 4vw, 5rem)', padding: 'clamp(0.75rem, 1.2vw, 1.25rem) 0', borderBottom: '1px solid rgba(13,13,13,0.15)', alignItems: 'center' }}
              >
                <span style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D' }}>{p.name}</span>
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.6)' }}>{p.note}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', marginTop: '1.5rem' }}>
            {t('products.disclaimer')}
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '28rem' }}>
            {t('cta.heading')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/faq" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              {t('cta.faq')}
            </Link>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#0D0D0D', color: '#F2F2F2', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
