/**
 * TATTOO PREISE MÜNCHEN — Pricing landing page
 * Primary: "tattoo preise münchen" / "was kostet ein tattoo münchen"
 * Cluster: tattoo kosten (2400) · tattoo preise (1600) · was kostet tattoo (590×3) · tattoo preis (410) · kosten oberarm (320) · rücken kosten (260) · sleeve kosten (170)
 * Total cluster: ~7000+/mo, KD 4–34
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
  const t = await getTranslations({ locale, namespace: 'preise' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/tattoo-preise-muenchen', locale, hreflang: false })
}

export default async function TattooPreiseMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'preise' })
  const faqItems    = t.raw('faq.items')    as Array<{ q: string; a: string }>
  const tableRows   = t.raw('table.rows')   as Array<{ size: string; style: string; price: string; time: string; desc: string }>
  const factorItems = t.raw('factors.items') as Array<{ title: string; body: string }>

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Tattoo Preise München', description: 'Tattoo Kosten und Preise in München — KishaTattoo. Kleine Tattoos ab 150 €, Sleeve ab 2.500 €. Transparente Preisübersicht.', url: '/tattoo-preise-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Preise München', url: '/tattoo-preise-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO — H1 ─────────────────────────────────────────────────────── */}
      <section
        aria-label="Tattoo Preise München — KishaTattoo"
        style={{ background: '#F2F2F2', paddingBottom: 'clamp(2.5rem, 5.56vw, 5rem)' }}
      >
        <GHeader theme="light" />
        <div className="g-container" style={{ paddingTop: 'clamp(3.5rem, 5vw, 4.5rem)' }}>
          <h1
            style={{
              fontSize: 'var(--g-xl)',
              lineHeight: 'var(--g-lh-xl)',
              color: '#0D0D0D',
              width: 'clamp(18rem, 33.5vw, 30.2rem)',
            }}
          >
            {t('hero.h1')}
          </h1>
        </div>
      </section>

      {/* ── PRICE CARDS ───────────────────────────────────────────────────── */}
      <section
        aria-label={t('table.heading')}
        style={{ background: '#F2F2F2', paddingBottom: 'clamp(1.25rem, 2.08vw, 2.5rem)' }}
      >
        <div className="g-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.39vw, 1.25rem)' }}>
            {tableRows.map((row) => {
              const styleTags = row.style.replace(/\s[·/]\s/g, '|').split('|')
              return (
                <div
                  key={row.size}
                  className="g-price-card"
                  style={{
                    background: '#E8E8E8',
                    padding: 'clamp(1.25rem, 2.08vw, 2.5rem)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                >
                  {/* Left */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 1.94vw, 1.75rem)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.625rem, 1.11vw, 1rem)' }}>
                      <p
                        style={{
                          fontSize: 'var(--g-s)',
                          lineHeight: 'var(--g-lh-s)',
                          color: '#0D0D0D',
                        }}
                      >
                        {row.size}
                      </p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
                        {styleTags.map((tag) => (
                          <span
                            key={tag}
                            style={{ fontSize: 'var(--g-bs)', lineHeight: 1, color: '#0D0D0D' }}
                          >
                            [ {tag} ]
                          </span>
                        ))}
                        <span style={{ fontSize: 'var(--g-bs)', lineHeight: 1, color: '#0D0D0D' }}>
                          [ {row.time} ]
                        </span>
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: 'var(--g-bm)',
                        lineHeight: 1,
                        color: '#0D0D0D',
                        maxWidth: 'clamp(12rem, 16.3vw, 14.7rem)',
                      }}
                    >
                      {row.desc}
                    </p>
                  </div>
                  {/* Right — price */}
                  <p
                    style={{
                      fontSize: 'var(--g-s)',
                      lineHeight: 'var(--g-lh-s)',
                      color: '#0D0D0D',
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}
                  >
                    {row.price}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Disclaimer */}
          <p
            style={{
              fontSize: 'var(--g-bm)',
              lineHeight: 'var(--g-lh-bm)',
              color: '#0D0D0D',
              marginTop: 'clamp(1.5rem, 2.08vw, 2.5rem)',
              maxWidth: 'clamp(20rem, 26.5vw, 31.8rem)',
            }}
          >
            {t('table.disclaimer')}
          </p>
        </div>
      </section>

      {/* ── WHAT DOES A TATTOO COST — info + CTA ─────────────────────────── */}
      <section
        aria-labelledby="preise-info-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2.5rem, 5.56vw, 5rem) 0' }}
      >
        <div className="g-container">
          {/* Heading */}
          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              marginBottom: 'clamp(2rem, 3.47vw, 3.25rem)',
            }}
          >
            <h2
              id="preise-info-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                maxWidth: 'clamp(22rem, 33.7vw, 40.4rem)',
              }}
            >
              {t('intro.heading')}
            </h2>
          </div>

          {/* Two text columns */}
          <div
            className="g-preise-info-cols"
            style={{
              display: 'flex',
              gap: 'clamp(1.25rem, 1.39vw, 1.25rem)',
              marginBottom: 'clamp(2rem, 3.47vw, 3.25rem)',
            }}
          >
            <p
              style={{
                fontSize: 'var(--g-bm)',
                lineHeight: 1,
                color: '#0D0D0D',
                flex: '1 1 0',
              }}
            >
              {t('intro.body1')}
            </p>
            <p
              style={{
                fontSize: 'var(--g-bm)',
                lineHeight: 1,
                color: '#0D0D0D',
                flex: '1 1 0',
              }}
            >
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
              padding: '1rem 0.75rem',
              background: '#0D0D0D',
              color: '#F2F2F2',
              fontSize: 'var(--g-bm)',
              lineHeight: 1,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {t('intro.ctaButton')}
          </Link>
        </div>
      </section>

      {/* ── WHAT AFFECTS THE COST — factors ──────────────────────────────── */}
      <section
        aria-labelledby="preise-factors-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2.5rem, 5.56vw, 5rem) 0' }}
      >
        <div className="g-container">
          {/* Heading centered */}
          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'clamp(2rem, 3.61vw, 3.25rem)',
            }}
          >
            <h2
              id="preise-factors-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                maxWidth: 'clamp(20rem, 31.25vw, 37.5rem)',
              }}
            >
              {t('factors.heading')}
            </h2>
          </div>

          {/* 3 factor cards */}
          <div
            className="g-preise-factors"
            style={{ display: 'flex', gap: 0 }}
          >
            {factorItems.map((col, i) => (
              <div
                key={col.title}
                style={{
                  flex: '1 1 0',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: 'clamp(8rem, 15.28vw, 13.75rem)',
                  paddingRight: i < factorItems.length - 1 ? 'clamp(1rem, 2.22vw, 2rem)' : 0,
                  paddingLeft: i > 0 ? 'clamp(1rem, 2.22vw, 2rem)' : 0,
                  paddingBottom: '1.25rem',
                  borderRight: i < factorItems.length - 1 ? '1px solid #0D0D0D' : 'none',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3
                    style={{
                      fontSize: 'var(--g-s)',
                      lineHeight: 'var(--g-lh-s)',
                      color: '#0D0D0D',
                    }}
                  >
                    {col.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--g-bm)',
                      lineHeight: 1,
                      color: '#0D0D0D',
                      maxWidth: 'clamp(14rem, 26.39vw, 31.7rem)',
                    }}
                  >
                    {col.body}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: 'var(--g-s)',
                    lineHeight: 'var(--g-lh-s)',
                    color: '#0D0D0D',
                    alignSelf: 'center',
                  }}
                >
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="preise-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2.5rem, 5.56vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div
            className="g-preise-faq-layout"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: 'clamp(2rem, 4.17vw, 4rem)',
              borderTop: '2px solid #0D0D0D',
              paddingTop: '1.25rem',
            }}
          >
            {/* Left — heading */}
            <h2
              id="preise-faq-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                flexShrink: 0,
                width: 'clamp(16rem, 25.69vw, 30.9rem)',
              }}
            >
              {t('faq.heading')}
            </h2>

            {/* Right — FAQ items */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                flex: 1,
              }}
            >
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                    position: 'relative',
                  }}
                >
                  {/* Label — absolute top-right of each item, matching Figma */}
                  <span
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      fontSize: 'var(--g-tag)',
                      lineHeight: 'normal',
                      color: '#0D0D0D',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    [ Question №{i + 1} ]
                  </span>
                  <h3
                    style={{
                      fontSize: 'var(--g-s)',
                      lineHeight: 'var(--g-lh-s)',
                      color: '#0D0D0D',
                      maxWidth: 'clamp(18rem, 30vw, 27rem)',
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      fontSize: 'var(--g-bm)',
                      lineHeight: 1,
                      color: '#0D0D0D',
                      maxWidth: 'clamp(16rem, 29.17vw, 26.25rem)',
                    }}
                  >
                    {item.a}
                  </p>
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
