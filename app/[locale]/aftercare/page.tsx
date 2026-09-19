/**
 * AFTERCARE — Tattoo Pflege Guide
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/content/site'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { breadcrumbSchema, faqSchema, personSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { FaqAccordion } from '@/components/graphic/FaqAccordion'

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
  type FaqItem = { q: string; a: string }

  const days    = t.raw('guide.days')    as DayItem[]
  const avoid   = t.raw('avoid.items')  as AvoidItem[]
  const products = t.raw('products.items') as ProductItem[]
  const faq     = t.raw('faq.items')      as FaqItem[]
  const normal  = t.raw('healing.normal.items') as string[]
  const alarm   = t.raw('healing.alarm.items')  as string[]

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Aftercare', url: '/aftercare' }], locale)
        )}}
      />
      {/* A care guide competing with health portals needs to say who wrote it and
          when it was last checked — the blog already does this, this page did not.
          personSchema resolves the #person-kisha id the layout's employee points at. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${SITE.url}${locale === 'de' ? '' : `/${locale}`}/aftercare#webpage`,
          url: `${SITE.url}${locale === 'de' ? '' : `/${locale}`}/aftercare`,
          name: t('meta.title'),
          description: t('meta.description'),
          inLanguage: locale,
          datePublished: '2026-07-14',
          dateModified: '2026-09-19',
          author: { '@id': `${SITE.url}/#person-kisha` },
          reviewedBy: { '@id': `${SITE.url}/#person-kisha` },
          publisher: { '@id': `${SITE.url}/#business` },
        })}}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />

      {/* Every question below is rendered on the page, which is what FAQPage requires. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(
          faqSchema(faq.map((item) => ({ question: item.q, answer: item.a })))
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
            bottom: '88px',
            width: 'clamp(18rem, 28vw, 480px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D',
          }}
        >
          {t('hero.sub')}
        </p>

        {/* Who is speaking and when it was last checked. On a care guide that
            competes with health portals, this is the missing E-E-A-T signal —
            and it gives the first-person passages below an antecedent. */}
        <p
          className="g-aftercare-byline"
          style={{
            position: 'absolute',
            left: 'var(--g-pad)',
            bottom: '24px',
            width: 'clamp(18rem, 34vw, 580px)',
            fontSize: 'var(--g-tag)',
            lineHeight: 1.5,
            color: '#0D0D0D',
          }}
        >
          {t('hero.byline')}
        </p>

      </section>

      {/* ── DAY BY DAY ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="aftercare-guide-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
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
                className="g-aftercare-day-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(9rem, 14vw, 14rem) 1fr',
                  gap: 'clamp(1.5rem, 3vw, 4rem)',
                  padding: 'clamp(1.5rem, 2.5vw, 3rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.15)',
                }}
              >
                <div>
                  <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', display: 'block', marginBottom: '0.4rem' }}>{day.period}</span>
                  <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{day.title}</h3>
                </div>
                <ul className="g-aftercare-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem', maxWidth: 'clamp(18rem, 42vw, 50rem)' }}>
                  {day.steps.map((step, j) => (
                    <li key={j} style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', paddingLeft: '1.2rem', position: 'relative' }}>
                      <span aria-hidden="true" style={{ position: 'absolute', left: 0, color: '#0D0D0D' }}>–</span>
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
      <section aria-labelledby="avoid-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="avoid-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('avoid.heading')}
            </h2>
          </div>

          <div className="g-aftercare-avoid-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 1.5vw, 1.5rem)' }}>
            {avoid.map((item) => (
              <div
                key={item.label}
                style={{ padding: 'clamp(1rem, 1.5vw, 1.5rem)', border: '1px solid rgba(13,13,13,0.15)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                <span style={{ fontSize: 'var(--g-l)', lineHeight: 1, color: 'rgba(13,13,13,0.15)', fontWeight: 500 }} aria-hidden="true">{item.icon}</span>
                <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{item.label}</span>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS NORMAL / WHEN TO SEE A DOCTOR ─────────────────────────── */}
      <section aria-labelledby="healing-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="healing-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('healing.heading')}
            </h2>
          </div>

          <div className="g-aftercare-healing-top" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: '16px' }}>

            {/* Fineline heals the most demandingly, which is what this section is about */}
            <div
              className="g-aftercare-healing-img"
              style={{ position: 'relative', width: 'calc(50% - 8px)', flexShrink: 0, overflow: 'hidden', aspectRatio: '3 / 4', minHeight: 480 }}
            >
              <Image
                src="/images/work/feines-linien-tattoo-daten-portraet-unterarm.jpg"
                alt={t('healing.imageAlt')}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div
              className="g-aftercare-healing-grid"
              style={{ width: 'calc(50% - 8px)', flexShrink: 0, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'clamp(1.25rem, 1.67vw, 1.5rem)' }}
            >
              {([['normal', normal], ['alarm', alarm]] as const).map(([key, items]) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 1.2vw, 1rem)' }}>
                  <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', paddingBottom: '0.75rem', borderBottom: '1px solid #0D0D0D', fontWeight: 'inherit', minHeight: 'calc(2.2em + 0.75rem)' }}>
                    {t(`healing.${key}.label`)}
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {items.map((item, i) => (
                      <li key={i} style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', paddingLeft: '1.2rem', position: 'relative' }}>
                        <span aria-hidden="true" style={{ position: 'absolute', left: 0, color: '#0D0D0D' }}>–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Sits under the two lists, not under the photo — it is the conclusion
                  drawn from them, and left hanging below the image it read as orphaned. */}
              <p style={{ gridColumn: '1 / -1', fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', marginTop: 'clamp(1.25rem, 2vw, 2rem)', paddingTop: 'clamp(1rem, 1.5vw, 1.5rem)', borderTop: '1px solid rgba(13,13,13,0.15)' }}>
                {t('healing.note')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="products-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="products-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('products.heading')}
            </h2>
          </div>

          <div className="g-aftercare-products-top" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', gap: '16px' }}>
            <div style={{ width: 'calc(50% - 8px)', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
              {/* Same two-column rhythm as the day-by-day rows above: a fixed label
                  column, the text beside it, one hairline between rows. */}
              {products.map((p, i) => (
                <div
                  key={i}
                  className="g-aftercare-product-row"
                  style={{ display: 'grid', gridTemplateColumns: 'clamp(9rem, 14vw, 14rem) 1fr', gap: 'clamp(1rem, 1.8vw, 1.75rem)', padding: 'clamp(1rem, 1.6vw, 1.5rem) 0', borderBottom: '1px solid rgba(13,13,13,0.15)', alignItems: 'baseline' }}
                >
                  <span style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{p.name}</span>
                  <span style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{p.note}</span>
                </div>
              ))}

              {/* Belongs to the list, so it sits inside the same column instead of
                  spanning the full width under the photo. */}
              <p style={{ fontSize: 'var(--g-bs)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', marginTop: 'clamp(1.25rem, 2vw, 2rem)' }}>
                {t('products.disclaimer')}
              </p>
            </div>

            <div
              className="g-aftercare-products-img"
              style={{ position: 'relative', width: 'calc(50% - 8px)', flexShrink: 0, overflow: 'hidden', aspectRatio: '3 / 4', minHeight: 480 }}
            >
              <Image
                src="/images/work/middle-graphic-hand-with-flower-tattoo.jpg"
                alt={t('products.imageAlt')}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="faq-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('faq.heading')}
            </h2>
          </div>

          {/* Collapsed by default: 21 answers left open is a wall of text. The copy
              stays in the HTML, which is what FAQPage schema needs. */}
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#E8E8E8', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '28rem' }}>
            {t('cta.heading')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/blog/tattoo-nachsorge-pflege-tipps" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              {t('cta.blog')}
            </Link>
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
