/**
 * IMPRESSUM — Legal notice (DE/EN/UK)
 * Name, address and contact come from content/site.ts, so a move changes one file.
 */
import type { Metadata } from 'next'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { SITE } from '@/content/site'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'impressum' })
  return {
    title: `${t('meta.title')}`,
    description: t('meta.description'),
    robots: { index: false, follow: true },
  }
}

type Section = {
  id: string
  title: string
  items: Array<{ heading: string; lines: string[] }>
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'impressum' })

  const tags = t.raw('hero.tags') as string[]
  const owner = SITE.legal.owner
  const street = SITE.location.street
  const city = `${SITE.location.postalCode} ${SITE.location.city}`

  const sections: Section[] = [
    {
      id: 'anbieter',
      title: t('provider.title'),
      items: [
        {
          heading: t('provider.heading'),
          lines: [owner, SITE.name, street, city, t('provider.country')],
        },
        {
          heading: t('provider.contact'),
          lines: [
            `${t('provider.phone')}: ${SITE.contact.phoneDisplay}`,
            `${t('provider.email')}: ${SITE.contact.email}`,
          ],
        },
      ],
    },
    {
      id: 'inhalt',
      title: t('editorial.title'),
      items: [{ heading: t('editorial.heading'), lines: [owner, street, city] }],
    },
  ]

  return (
    <main id="main-content" style={{ background: '#F2F2F2' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Impressum — KishaTattoo München"
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
              overflowWrap: 'break-word',
              hyphens: 'auto',
            }}
          >
            {t('hero.h1')}
          </h1>
        </div>
      </section>

      {/* ── SECTIONS ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Impressum Inhalt"
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
                {section.items.map((item) => (
                  <div
                    key={item.heading}
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
                      {item.lines.map((line) => (
                        <span key={line} style={{ display: 'block' }}>{line}</span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <GFooter />
    </main>
  )
}
