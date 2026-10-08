/**
 * TATTOO GUTSCHEIN MÜNCHEN — gift voucher landing page.
 * Primary keyword: "tattoo gutschein münchen" (10/mo; the local SERP was
 * studio-only in Aug 2026). Cluster: gutschein tattoo (480), tattoo geschenk
 * (210), tattoo gutschein kaufen (20). The national "tattoo gutschein" (1 600,
 * ×2.75 in December) belongs to Amazon, Etsy and template sites — not a target.
 *
 * Built on the Unikate page, block for block: dark hero with the vouchers
 * lying like loose sheets, two-column intro, numbered "Gut zu wissen" list,
 * tile grid on warm grey, two-column FAQ, black CTA. No shop and no payment
 * step on the site. Each button opens the voucher modal (GutscheinPopup), and the
 * request lands in Telegram like every other request here.
 *
 * GEO layer: the lead and the numbered list carry the atomic facts ChatGPT,
 * Perplexity and the AI Overview quote from voucher pages — amounts, validity
 * with its reference point, transferability, delivery, redemption. The FAQ is
 * the People-Also-Ask set. Research: PLAN-TATTOO-GUTSCHEIN-2026-08-12.md.
 *
 * No address and no "my studio" anywhere: a voucher lives three years and the
 * studio may move. The vouchers themselves come from `npm run gutschein`.
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import { SITE } from '@/content/site'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { isNoIndexLocale } from '@/content/routes'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { Link } from '@/i18n/navigation'
import { GutscheinButton } from '@/components/graphic/GutscheinButton'
import { GutscheinPopup } from '@/components/graphic/GutscheinPopup'
import s from './page.module.css'

const PATH = '/tattoo-gutschein-muenchen'
const OG_IMAGE = `${SITE.url}/og/tattoo-gutschein-muenchen.jpg`
const AMOUNTS = [200, 500, 1000] as const

/** Rendered from scripts/gutschein-template.html by the same script that makes the PDFs. */
const IMG = (name: string) => `/images/gutschein/gutschein-${name}.png`

/**
 * Hero: three vouchers on a dark surface — light, light back, dark in front —
 * so both versions are seen before a word is read. Hand-set positions, like
 * the Unikate sheets.
 */
const HERO_SHEETS = [
  { img: IMG('200-hell'),          top: '2%',  left: '0%',  width: '58%', rotate: -7, dark: false },
  { img: IMG('rueckseite-hell'),   top: '8%',  left: '40%', width: '56%', rotate: 5,  dark: false },
  { img: IMG('1000-dunkel'),       top: '38%', left: '14%', width: '62%', rotate: -2, dark: true  },
] as const

/** The grid alternates the two versions so the row itself says "dark or light". */
const TILE_IMAGES: Record<(typeof AMOUNTS)[number], string> = {
  200: IMG('200-dunkel'),
  500: IMG('500-hell'),
  1000: IMG('1000-dunkel'),
}

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gutschein' })
  return buildMetadata({
    title: t('meta.title'),
    description: t('meta.description'),
    path: PATH,
    locale,
    ogImage: OG_IMAGE,
    noIndex: isNoIndexLocale(PATH, locale),
    keywords: ['tattoo gutschein münchen', 'gutschein tattoo', 'tattoo geschenk', 'tattoo gutschein kaufen', 'tattoo gift card munich', 'tattoo voucher munich'],
  })
}

/**
 * Product + AggregateOffer with the three fixed amounts. ChatGPT cites the one
 * Munich voucher page that carries product/offer markup; the AI Overview reads
 * amounts straight off studio pages. Prices are face value.
 */
function voucherProductSchema(locale: string, name: string, description: string) {
  const prefix = locale === 'de' ? '' : `/${locale}`
  const url = `${SITE.url}${prefix}${PATH}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${url}#gutschein`,
    name,
    description,
    image: `${SITE.url}${IMG('500-dunkel')}`,
    brand: { '@type': 'Brand', name: SITE.name },
    category: 'Gift voucher',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: AMOUNTS[0],
      highPrice: AMOUNTS[AMOUNTS.length - 1],
      offerCount: AMOUNTS.length,
      availability: 'https://schema.org/InStock',
      url,
      offers: AMOUNTS.map((value) => ({
        '@type': 'Offer',
        name: `Tattoo Gutschein ${value} €`,
        price: value,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${url}#gutschein-${value}`,
        seller: { '@type': 'Organization', name: SITE.name, url: SITE.url },
      })),
    },
  }
}

export default async function TattooGutscheinMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'gutschein' })
  const faqItems  = t.raw('faq.items')   as Array<{ q: string; a: string }>
  const factItems = t.raw('facts.items') as Array<{ k: string; v: string }>
  const tiles     = t.raw('grid.items')  as Array<{ value: string; label: string; title: string; line: string; body: string; cta: string }>
  const noteSteps = t.raw('grid.note.steps') as string[]

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Tattoo Gutschein München — Kisha Tattoo', description: t('meta.description'), url: PATH, image: OG_IMAGE, locale })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        voucherProductSchema(locale, 'Tattoo Gutschein — Kisha Tattoo München', t('meta.description'))
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Gutschein München', url: PATH }], locale)
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      {/* Decorative: the same vouchers appear properly in the grid below, so
          these carry empty alt text instead of repeating it for a screenreader. */}
      <section
        data-nav-dark
        aria-label={t('hero.h1')}
        style={{
          position: 'relative',
          minHeight: 'clamp(560px, 82svh, 760px)',
          background: 'var(--g-black)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <GHeader theme="dark" />

        <div className={s.hero}>
          <div className={s.heroText}>
            <h1 style={{
              fontSize: 'var(--g-xl)',
              lineHeight: 'var(--g-lh-xl)',
              color: 'var(--g-white)',
              margin: 0,
            }}>
              {t('hero.h1')}
            </h1>
            <p style={{
              maxWidth: '46ch',
              fontSize: 'var(--g-bm)',
              lineHeight: 'var(--g-lh-bm)',
              color: 'var(--g-grey)',
              margin: 0,
            }}>
              {t('hero.sub')}
            </p>
          </div>

          <div className={s.sheets} aria-hidden="true">
            {HERO_SHEETS.map((sheet, i) => (
              <div
                key={sheet.img}
                className={`${s.sheet}${sheet.dark ? ` ${s.sheetDark}` : ''}`}
                style={{
                  top: sheet.top,
                  left: sheet.left,
                  width: sheet.width,
                  transform: `rotate(${sheet.rotate}deg)`,
                  zIndex: i + 1,
                }}
              >
                <Image
                  src={sheet.img}
                  alt=""
                  fill
                  priority={i === HERO_SHEETS.length - 1}
                  sizes="(max-width: 767px) 70vw, 32vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-white)',
        padding: 'clamp(48px, 9vh, 104px) var(--g-pad)',
      }}>
        <div className={s.intro}>
          <p style={{
            fontSize: 'var(--g-s)',
            lineHeight: 1.15,
            color: 'var(--g-black)',
            margin: 0,
          }}>
            {t('intro.lead')}
          </p>
          <p style={{
            fontSize: 'var(--g-bm)',
            lineHeight: 1.45,
            color: '#4A4A4A',
            margin: 0,
            alignSelf: 'end',
          }}>
            {t.rich('intro.body', {
              preise:  (chunks) => <Link href="/tattoo-preise-muenchen" style={{ color: 'var(--g-black)' }}>{chunks}</Link>,
              unikate: (chunks) => <Link href="/tattoo-unikate" style={{ color: 'var(--g-black)' }}>{chunks}</Link>,
            })}
          </p>
        </div>
      </section>

      {/* ── GUT ZU WISSEN ─────────────────────────────────────────────────── */}
      {/* One fact per cell, the part an answer engine lifts whole. */}
      <section
        aria-labelledby="gutschein-facts-heading"
        style={{
          background: 'var(--g-white)',
          padding: '0 var(--g-pad) clamp(48px, 9vh, 104px)',
        }}
      >
        <h2 id="gutschein-facts-heading" style={{
          fontSize: 'var(--g-xs)',
          lineHeight: 1.1,
          color: 'var(--g-black)',
          margin: '0 0 clamp(20px, 3vh, 36px)',
          fontWeight: 500,
        }}>
          {t('facts.heading')}
        </h2>
        <ul className={s.terms}>
          {factItems.map((f, i) => (
            <li key={f.k} style={{
              borderTop: '1px solid var(--g-black)',
              paddingTop: '14px',
              fontSize: 'var(--g-bs)',
              lineHeight: 1.4,
              color: 'var(--g-black)',
            }}>
              <span aria-hidden="true" style={{
                display: 'block',
                fontSize: 'var(--g-tag)',
                color: '#8A8A8A',
                marginBottom: '8px',
              }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span style={{ display: 'block', fontWeight: 500, marginBottom: '4px' }}>{f.k}</span>
              {f.v}
            </li>
          ))}
        </ul>
      </section>

      {/* ── GRID — the three amounts as tiles, plus how it works ─────────── */}
      <section
        aria-labelledby="gutschein-grid-heading"
        style={{
          background: '#E8E6E1',
          padding: 'clamp(48px, 9vh, 104px) var(--g-pad)',
        }}
      >
        <h2 id="gutschein-grid-heading" style={{
          fontSize: 'var(--g-m)',
          lineHeight: 1.05,
          color: 'var(--g-black)',
          margin: '0 0 clamp(24px, 4vh, 48px)',
        }}>
          {t('grid.heading')}
        </h2>

        <ul className={s.grid}>
          {tiles.map((tile) => (
            <li key={tile.value} id={`gutschein-${tile.value}`}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                background: 'var(--g-white)',
              }}>
                <div style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '210 / 148',
                  background: 'var(--g-white)',
                  overflow: 'hidden',
                }}>
                  <Image
                    src={TILE_IMAGES[Number(tile.value) as (typeof AMOUNTS)[number]]}
                    alt={`Tattoo Gutschein ${tile.label} — Kisha Tattoo München`}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                    style={{ objectFit: 'contain', padding: '5%' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'var(--g-black)',
                    color: 'var(--g-white)',
                    fontSize: 'var(--g-tag)',
                    fontWeight: 500,
                    lineHeight: 1,
                    padding: '8px 10px',
                  }}>
                    {tile.label}
                  </span>
                </div>

                <div style={{
                  borderTop: '1px solid #DAD7D1',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  flexGrow: 1,
                }}>
                  <span style={{ fontSize: 'var(--g-xs)', lineHeight: 1.1, color: 'var(--g-black)' }}>
                    {tile.title}
                  </span>
                  <span style={{ fontSize: 'var(--g-bxs)', color: '#6A6A6A' }}>
                    {tile.line}
                  </span>
                  <p style={{ fontSize: 'var(--g-bs)', lineHeight: 1.45, color: '#4A4A4A', margin: '6px 0 0' }}>
                    {tile.body}
                  </p>
                  {/* Opens the voucher modal with this amount preselected. */}
                  <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                    <GutscheinButton betrag={tile.value as '200' | '500' | '1000'} className={s.tileCta}>
                      {tile.cta}
                    </GutscheinButton>
                  </div>
                </div>
              </div>
            </li>
          ))}

          {/* How it works — the text cell, as on the Unikate grid. */}
          <li className={s.note} style={{
            background: 'transparent',
            border: '1px solid #C9C5BD',
            padding: 'clamp(20px, 2.5vw, 32px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 'clamp(16px, 2vw, 28px)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <span style={{ fontSize: 'var(--g-xs)', lineHeight: 1.1, color: 'var(--g-black)' }}>
                {t('grid.note.title')}
              </span>
              <p style={{ fontSize: 'var(--g-bs)', lineHeight: 1.45, color: '#4A4A4A', margin: 0 }}>
                {t('grid.note.body')}
              </p>
            </div>

            <ol style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {noteSteps.map((step, n) => (
                <li key={step} style={{
                  display: 'flex',
                  gap: '10px',
                  fontSize: 'var(--g-bxs)',
                  lineHeight: 1.35,
                  color: '#4A4A4A',
                }}>
                  <span aria-hidden="true" style={{ color: '#8A8A8A', flexShrink: 0 }}>
                    {String(n + 1).padStart(2, '0')}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <GutscheinButton className={s.noteCta}>
              {t('grid.note.link')}
            </GutscheinButton>
          </li>

          {/* The back of the voucher — the terms are printed on every one. */}
          <li style={{ display: 'flex', flexDirection: 'column', background: 'var(--g-white)' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '210 / 148',
              background: 'var(--g-white)',
              overflow: 'hidden',
            }}>
              <Image
                src={IMG('rueckseite-dunkel')}
                alt={`${t('grid.back.label')} — ${t('grid.back.title')}`}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                style={{ objectFit: 'contain', padding: '5%' }}
              />
              <span style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                background: '#8A8A8A',
                color: 'var(--g-white)',
                fontSize: 'var(--g-tag)',
                fontWeight: 500,
                lineHeight: 1,
                padding: '8px 10px',
              }}>
                {t('grid.back.label')}
              </span>
            </div>
            <div style={{
              borderTop: '1px solid #DAD7D1',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              flexGrow: 1,
            }}>
              <span style={{ fontSize: 'var(--g-xs)', lineHeight: 1.1, color: 'var(--g-black)' }}>
                {t('grid.back.title')}
              </span>
              <span style={{ fontSize: 'var(--g-bxs)', color: '#6A6A6A' }}>
                {t('grid.back.line')}
              </span>
            </div>
          </li>
        </ul>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="gutschein-faq-heading"
        style={{
          background: 'var(--g-white)',
          padding: 'clamp(48px, 9vh, 104px) var(--g-pad)',
        }}
      >
        <h2 id="gutschein-faq-heading" style={{
          fontSize: 'var(--g-m)',
          lineHeight: 1.05,
          color: 'var(--g-black)',
          margin: '0 0 clamp(24px, 4vh, 48px)',
        }}>
          {t('faq.heading')}
        </h2>
        <div className={s.faq}>
          {faqItems.map((f) => (
            <div key={f.q} style={{ borderTop: '1px solid var(--g-black)', paddingTop: '16px' }}>
              <h3 style={{
                fontSize: 'var(--g-bm)',
                lineHeight: 1.2,
                color: 'var(--g-black)',
                margin: '0 0 8px',
                fontWeight: 500,
              }}>
                {f.q}
              </h3>
              <p style={{
                fontSize: 'var(--g-bs)',
                lineHeight: 1.45,
                color: '#4A4A4A',
                margin: 0,
              }}>
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-black)',
        padding: 'clamp(48px, 9vh, 96px) var(--g-pad)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'clamp(16px, 2.5vh, 28px)',
        }}>
          <p style={{
            fontSize: 'var(--g-s)',
            lineHeight: 1.15,
            color: 'var(--g-white)',
            margin: 0,
            maxWidth: '24ch',
          }}>
            {t('cta.hint')}
          </p>
          <GutscheinButton className={s.ctaButton}>
            {t('cta.button')}
          </GutscheinButton>
        </div>
      </section>

      <GFooter />
      <GutscheinPopup />
    </main>
  )
}
