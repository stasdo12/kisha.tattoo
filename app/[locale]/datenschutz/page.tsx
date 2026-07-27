/**
 * DATENSCHUTZ — Privacy policy (DE/EN/UK)
 */
import type { Metadata } from 'next'
import { Link } from '@/i18n/navigation'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'datenschutz' })
  return {
    title: `${t('meta.title')}`,
    description: t('meta.description'),
    robots: { index: false, follow: true },
  }
}

type Section = {
  id: string
  title: string
  items: Array<{ heading: string; body: string }>
}

export default async function DatenschutzPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'datenschutz' })

  const tags = t.raw('hero.tags') as string[]
  const sections = t.raw('sections') as Section[]

  return (
    <main id="main-content" style={{ background: '#F2F2F2' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Datenschutz — KishaTattoo München"
        style={{ background: '#F2F2F2', position: 'relative' }}
      >
        <GHeader theme="light" />

        <div
          className="g-agb-hero"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '72px var(--g-pad) clamp(3rem, 8vw, 9rem)',
          }}
        >
          {/* Left: tags */}
          <div
            className="g-agb-tags"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center',
              fontSize: 'var(--g-bs)',
              lineHeight: 1,
              color: '#0D0D0D',
              flexShrink: 0,
            }}
          >
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>

          {/* Right: H1 */}
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

      {/* ── SECTIONS ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Datenschutz Inhalt"
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
              {/* Section title */}
              <h2
                style={{
                  fontSize: 'var(--g-l)',
                  lineHeight: 'var(--g-lh-l)',
                  color: '#0D0D0D',
                  letterSpacing: 'var(--g-ls)',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {section.title}
              </h2>

              {/* Items */}
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
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(0.75rem, 1.39vw, 1.25rem)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 'var(--g-s)',
                        lineHeight: 'var(--g-lh-s)',
                        color: '#0D0D0D',
                        letterSpacing: 'var(--g-ls)',
                        maxWidth: 'min(100%, clamp(20rem, 22.5vw, 27rem))',
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      style={{
                        fontSize: 'var(--g-bm)',
                        lineHeight: 'var(--g-lh-bm)',
                        color: '#0D0D0D',
                        letterSpacing: 'var(--g-ls)',
                        maxWidth: 'min(100%, clamp(20rem, 21.875vw, 26.25rem))',
                      }}
                    >
                      {item.body}
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
          className="g-agb-cta"
          style={{
            padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
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
              {t('cta.tag')}
            </span>
            <p
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                letterSpacing: 'var(--g-ls)',
                maxWidth: 'clamp(18rem, 30vw, 36rem)',
              }}
            >
              {t('cta.heading')}
            </p>
          </div>

          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 2rem',
              background: '#0D0D0D',
              color: '#F2F2F2',
              fontSize: 'var(--g-bm)',
              lineHeight: 1,
              letterSpacing: 'var(--g-ls)',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'opacity 0.15s',
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
