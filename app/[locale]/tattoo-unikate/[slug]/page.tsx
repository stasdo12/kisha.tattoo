/**
 * TATTOO UNIKATE — one design, one page.
 *
 * Each card targets `motif + one body zone` and nothing else: the six cards
 * must not compete with each other, so the other placements a drawing would
 * also suit are mentioned in prose without keywords.
 *
 * No price anywhere on this page by design. /tattoo-preise-muenchen holds 27
 * "arm" and 7 "rücken" keywords, every one of them a price variant, and it is
 * the strongest page on the site — putting `Preis` next to a body zone here
 * would aim a new page straight at it. What stays is the deposit, which is not
 * a price anybody searches for.
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { breadcrumbSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { UNIKATE, getUnikat } from '@/content/unikate'
import { isNoIndexLocale } from '@/content/routes'

export function generateStaticParams() {
  const locales = ['de', 'en', 'uk']
  return locales.flatMap((locale) => UNIKATE.map((u) => ({ locale, slug: u.slug })))
}

// Unknown slugs must 404, not render an empty shell with a 200.
export const dynamicParams = false

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string; slug: string }> }
): Promise<Metadata> {
  const { locale, slug } = await params
  if (!getUnikat(slug)) return {}
  const t = await getTranslations({ locale, namespace: 'unikate' })
  return buildMetadata({
    title: t(`items.${slug}.title`),
    description: t(`items.${slug}.description`),
    path: `/tattoo-unikate/${slug}`,
    locale,
    noIndex: isNoIndexLocale('/tattoo-unikate', locale),
  })
}

export default async function UnikatPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  const unikat = getUnikat(slug)
  if (!unikat) notFound()

  const t = await getTranslations({ locale, namespace: 'unikate' })
  const body = t.raw(`items.${slug}.body`) as string[]
  const name = t(`items.${slug}.name`)
  const statusLabel = t(`status.${unikat.status}`)
  const isGone = unikat.status === 'vergeben'
  const others = UNIKATE.filter((u) => u.slug !== slug).slice(0, 3)

  return (
    <main id="main-content" style={{ background: 'var(--g-white)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Unikate', url: '/tattoo-unikate' },
          { name, url: `/tattoo-unikate/${slug}` },
        ], locale)
      )}} />

      <GHeader theme="light" />

      {/* ── BACK + BREADCRUMB ─────────────────────────────────────────────── */}
      {/* Same affordance as an article page, inverted for a light background:
          there the chip is light on a dark hero, here it is dark on paper. */}
      <nav
        aria-label="Breadcrumb"
        // The header is position:fixed, so the first element needs to clear it.
        style={{ padding: 'clamp(76px, 11vh, 104px) var(--g-pad) 0' }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <Link
            href="/tattoo-unikate"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 16px',
              background: 'var(--g-black)',
              color: 'var(--g-white)',
              fontSize: 'var(--g-bs)',
              fontWeight: 500,
              lineHeight: 1,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {t('backToList')}
          </Link>
          <span style={{ fontSize: 'var(--g-bxs)', color: '#6A6A6A' }}>
            {name}
          </span>
        </div>
      </nav>

      {/* ── DESIGN + TEXT ─────────────────────────────────────────────────── */}
      <article style={{ padding: 'clamp(24px, 4vh, 48px) var(--g-pad) clamp(48px, 9vh, 96px)' }}>
        <div className="g-unikat-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 'clamp(24px, 4vw, 72px)',
          alignItems: 'start',
        }}>
          {/* Drawing — never cropped, it is the product */}
          <div style={{
            position: 'relative',
            width: '100%',
            aspectRatio: String(unikat.width / unikat.height),
            background: '#E8E6E1',
          }}>
            <Image
              src={unikat.image}
              alt={t(`items.${slug}.alt`)}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 55vw"
              style={{ objectFit: 'contain', padding: '4%', opacity: isGone ? 0.5 : 1 }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 3vh, 32px)' }}>
            <div>
              <span style={{
                display: 'inline-block',
                background: isGone ? '#8A8A8A' : 'var(--g-black)',
                color: 'var(--g-white)',
                fontSize: 'var(--g-tag)',
                fontWeight: 500,
                lineHeight: 1,
                padding: '8px 10px',
                marginBottom: '16px',
              }}>
                {unikat.status === 'reserviert' && unikat.reservedUntil
                  ? `${statusLabel} ${unikat.reservedUntil}`
                  : statusLabel}
              </span>

              <h1 style={{
                fontSize: 'var(--g-l)',
                lineHeight: 1.03,
                color: 'var(--g-black)',
                margin: '0 0 12px',
              }}>
                {name}
              </h1>

              <p style={{ fontSize: 'var(--g-bs)', color: '#6A6A6A', margin: 0 }}>
                {t('grid.zone')}: {t(`items.${slug}.zone`)}
              </p>
            </div>

            {body.map((para, i) => (
              <p key={i} style={{
                fontSize: i === 0 ? 'var(--g-bm)' : 'var(--g-bs)',
                lineHeight: 1.45,
                color: i === 0 ? 'var(--g-black)' : '#4A4A4A',
                margin: 0,
              }}>
                {para}
              </p>
            ))}

            {/* Terms — the deposit is the only number on this page */}
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}>
              {(['once', 'free', 'deposit', 'adapt'] as const).map((key) => (
                <li key={key} style={{
                  borderTop: '1px solid #DAD7D1',
                  paddingTop: '12px',
                  fontSize: 'var(--g-bs)',
                  lineHeight: 1.4,
                  color: 'var(--g-black)',
                }}>
                  {t(`terms.${key}`)}
                </li>
              ))}
            </ul>

            {isGone ? (
              <p style={{
                fontSize: 'var(--g-bs)',
                lineHeight: 1.4,
                color: '#6A6A6A',
                margin: 0,
                borderTop: '1px solid #DAD7D1',
                paddingTop: '16px',
              }}>
                {t('status.vergebenNote')}
              </p>
            ) : (
              <Link href={`/booking?entwurf=${slug}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px 28px',
                background: 'var(--g-black)',
                color: 'var(--g-white)',
                fontSize: 'var(--g-bm)',
                fontWeight: 500,
                textDecoration: 'none',
              }}>
                {t('cta.button')}
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* ── OTHER DESIGNS ─────────────────────────────────────────────────── */}
      <section style={{
        background: '#E8E6E1',
        padding: 'clamp(48px, 8vh, 88px) var(--g-pad)',
      }}>
        <div style={{  }}>
          <h2 style={{
            fontSize: 'var(--g-m)',
            lineHeight: 1.05,
            color: 'var(--g-black)',
            margin: '0 0 clamp(20px, 3vh, 40px)',
          }}>
            {t('grid.heading')}
          </h2>

          <ul className="g-unikat-others" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px, 2vw, 32px)',
            listStyle: 'none',
            margin: '0 0 clamp(24px, 4vh, 40px)',
            padding: 0,
          }}>
            {others.map((u) => (
              <li key={u.slug}>
                <Link
                  href={`/tattoo-unikate/${u.slug}`}
                  style={{ display: 'block', textDecoration: 'none', color: 'inherit', background: 'var(--g-white)' }}
                >
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '3 / 4',
                    overflow: 'hidden',
                  }}>
                    <Image
                      src={u.image}
                      alt={t(`items.${u.slug}.alt`)}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      style={{ objectFit: 'contain', padding: '8%' }}
                    />
                  </div>
                  <div style={{ borderTop: '1px solid #DAD7D1', padding: '14px' }}>
                    <span style={{ fontSize: 'var(--g-bm)', color: 'var(--g-black)' }}>
                      {t(`items.${u.slug}.name`)}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/tattoo-unikate" style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '14px 24px',
            border: '1px solid var(--g-black)',
            color: 'var(--g-black)',
            fontSize: 'var(--g-bs)',
            fontWeight: 500,
            textDecoration: 'none',
          }}>
            {t('cta.all')}
          </Link>
        </div>
      </section>

      <GFooter />

      <style>{`
        @media (max-width: 1199px) {
          .g-unikat-others { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 767px) {
          .g-unikat-layout { grid-template-columns: 1fr !important; }
          .g-unikat-others { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
