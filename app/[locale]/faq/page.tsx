/**
 * FAQ — Full FAQ page
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { faqSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'faq' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/faq', locale })
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'faq' })

  type QA = { q: string; a: string }
  const sections = [
    { id: 'booking',     label: t('sections.booking'),     items: t.raw('booking')     as QA[] },
    { id: 'pricing',     label: t('sections.pricing'),     items: t.raw('pricing')     as QA[] },
    { id: 'preparation', label: t('sections.preparation'), items: t.raw('preparation') as QA[] },
    { id: 'aftercare',   label: t('sections.aftercare'),   items: t.raw('aftercare')   as QA[] },
    { id: 'style',       label: t('sections.style'),       items: t.raw('style')       as QA[] },
  ]

  const allFaq = sections.flatMap((s) => s.items.map((item) => ({ question: item.q, answer: item.a })))

  return (
    <main id="main-content" style={{ background: '#F2F2F2' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaq)) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="FAQ — KishaTattoo München"
        style={{ background: '#F2F2F2', position: 'relative' }}
      >
        <GHeader theme="light" />

        {/* Tags + Title row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '72px var(--g-pad) clamp(3rem, 8vw, 9rem)',
          }}
        >
          {/* Left: category tags */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              fontSize: 'var(--g-bs)',
              lineHeight: 1,
              color: '#0D0D0D',
              flexShrink: 0,
            }}
          >
            <span>[ {t('sections.booking')} ]</span>
            <span>[ {t('sections.pricing')} ]</span>
            <span>[ {t('sections.preparation')} ]</span>
            <span>[ {t('sections.style')} ]</span>
          </div>

          {/* Right: main title */}
          <h1
            style={{
              fontSize: 'var(--g-xl)',
              lineHeight: 'var(--g-lh-xl)',
              color: '#0D0D0D',
              width: 'clamp(18rem, 32vw, 36rem)',
              letterSpacing: 'var(--g-ls)',
            }}
          >
            {t('hero.h1')}
          </h1>
        </div>
      </section>

      {/* ── FAQ SECTIONS ──────────────────────────────────────────────────── */}
      <section
        aria-label="FAQ sections"
        style={{
          background: '#F2F2F2',
          padding: '0 var(--g-pad) clamp(3rem, 6vw, 7.5rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1.5rem, 2.78vw, 2.5rem)',
          }}
        >
          {sections.map((section) => (
            <div
              key={section.id}
              className="g-faq-row"
              style={{
                borderTop: '2px solid #0D0D0D',
                paddingTop: 'clamp(1rem, 1.39vw, 1.25rem)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '2rem',
              }}
            >
              {/* Category title */}
              <h2
                id={`faq-${section.id}`}
                style={{
                  fontSize: 'var(--g-l)',
                  lineHeight: 'var(--g-lh-l)',
                  color: '#0D0D0D',
                  letterSpacing: 'var(--g-ls)',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {section.label}
              </h2>

              {/* FAQ items */}
              <div
                className="g-faq-items"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(1rem, 1.11vw, 1rem)',
                  width: 'clamp(20rem, 47.5vw, 57rem)',
                  flexShrink: 0,
                }}
              >
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(0.75rem, 1.39vw, 1.25rem)',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        fontSize: 'var(--g-tag)',
                        color: '#0D0D0D',
                        letterSpacing: 'var(--g-ls)',
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
                        letterSpacing: 'var(--g-ls)',
                        maxWidth: 'clamp(18rem, 22.5vw, 27rem)',
                        paddingRight: '9rem',
                      }}
                    >
                      {item.q}
                    </h3>

                    <p
                      style={{
                        fontSize: 'var(--g-bm)',
                        lineHeight: 'var(--g-lh-bm)',
                        color: '#0D0D0D',
                        letterSpacing: 'var(--g-ls)',
                        maxWidth: 'clamp(18rem, 21.875vw, 26.25rem)',
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#E8E8E8' }}>
        <div
          style={{
            padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(3rem, 14.583vw, 17.5rem)',
          }}
        >
          {/* Heading + arrow */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span
                style={{
                  fontSize: 'var(--g-tag)',
                  color: '#0D0D0D',
                  letterSpacing: 'var(--g-ls)',
                }}
              >
                [ Contact ]
              </span>
              <p
                style={{
                  fontSize: 'var(--g-l)',
                  lineHeight: 'var(--g-lh-l)',
                  color: '#0D0D0D',
                  letterSpacing: 'var(--g-ls)',
                  width: 'clamp(20rem, 33vw, 30rem)',
                }}
              >
                {t('cta.heading')}
              </p>
            </div>

            {/* Arrow → rotated */}
            <div
              aria-hidden="true"
              style={{
                fontSize: 'clamp(2.5rem, 4.167vw, 5rem)',
                color: '#0D0D0D',
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              →
            </div>
          </div>

          {/* Book button */}
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
              letterSpacing: 'var(--g-ls)',
              textDecoration: 'none',
            }}
          >
            {t('cta.booking')}
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
