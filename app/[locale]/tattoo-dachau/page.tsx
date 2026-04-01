/**
 * TATTOO DACHAU — Location landing page
 * Primary keyword: "tattoo dachau" (110/mo, KD 5)
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { GWorkImage } from '@/components/graphic/GWorkImage'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { locationServiceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'locations' })
  return buildMetadata({
    title: t('dachau.meta.title'),
    description: t('dachau.meta.description'),
    path: '/tattoo-dachau',
    locale,
    hreflang: false,
  })
}

export default async function TattooDachau({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'locations' })
  const faqItems = t.raw('dachau.faq.items') as Array<{ q: string; a: string }>
  const buttons = t.raw('dachau.content.buttons') as Array<{ label: string; href: string }>

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        locationServiceSchema({ cityName: 'Dachau', citySlug: 'dachau', travelMinutes: 30 })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Dachau', url: '/tattoo-dachau' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Tattoo Dachau — KishaTattoo München"
        style={{ position: 'relative', height: 'clamp(680px, 90vh, 900px)', background: '#F2F2F2', overflow: 'hidden' }}
      >
        <GHeader theme="light" />
        <h1 style={{ position: 'absolute', top: '72px', left: 'var(--g-pad)', width: 'clamp(18rem, 42.6vw, 817px)', fontSize: 'var(--g-xl)', lineHeight: 'var(--g-lh-xl)', color: '#0D0D0D', whiteSpace: 'pre-line' }}>
          {t('dachau.hero.h1')}
        </h1>
        <div aria-hidden="true" style={{ position: 'absolute', left: '50%', top: '48%', transform: 'translate(-50%, -50%)', fontSize: 'clamp(4rem, 10vw, 12rem)', lineHeight: 0.9, color: '#0D0D0D', opacity: 0.07, userSelect: 'none', pointerEvents: 'none' }}>
          彫
        </div>
        <p style={{ position: 'absolute', left: 'var(--g-pad)', bottom: '24px', width: 'clamp(18rem, 28vw, 480px)', fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
          {t('dachau.hero.sub')}
        </p>
      </section>

      {/* ── CONTENT ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>{t('dachau.content.heading')}</h2>
          </div>
          <div className="g-text-cols" style={{ display: 'flex', justifyContent: 'flex-end', gap: 'clamp(2rem, 4.2vw, 5rem)' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>{t('dachau.content.body1')}</p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>{t('dachau.content.body2')}</p>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', marginTop: 'clamp(2rem, 3.5vw, 4rem)', flexWrap: 'wrap' }}>
            {buttons.map((link) => (
              <Link key={link.href} href={link.href} style={{ display: 'inline-block', padding: '0.6rem 1.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Gallery preview */}
          <div style={{ marginTop: 'clamp(2rem, 3.5vw, 4rem)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <GWorkImage src="/images/work/middle-graphic-body-flower-tattoo.jpg" alt="Grafik Blumen Körper Tattoo München — Kisha" sizes="50vw" style={{ height: 'clamp(720px, 50vw, 820px)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '12px', height: 'clamp(720px, 50vw, 820px)' }}>
                <GWorkImage src="/images/work/4x4-japan-fox-tattoo-graphic.jpg" alt="Japanisches Fuchs Tattoo München" sizes="25vw" />
                <GWorkImage src="/images/work/4x4-rabbit-tattoo-graphic.jpg"    alt="Grafik Hase Tattoo München"       sizes="25vw" />
                <GWorkImage src="/images/work/4x4-sakura-tattoo.jpg"            alt="Sakura Tattoo München"            sizes="25vw" />
                <GWorkImage src="/images/work/4x4-birds-tattoo-graphic.jpg"     alt="Grafik Vögel Tattoo München"      sizes="25vw" />
              </div>
            </div>
            <Link href="/works" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              {t('dachau.gallery.link')}
            </Link>
          </div>

          {/* FAQ */}
          <div style={{ marginTop: 'clamp(2rem, 3.5vw, 4rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', marginBottom: '1.5rem', paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D' }}>
              {t('dachau.faq.heading')}
            </h2>
            {faqItems.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 4vw, 5rem)', padding: 'clamp(1rem, 1.8vw, 1.75rem) 0', borderBottom: '1px solid rgba(13,13,13,0.2)' }}>
                <h3 style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{item.q}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{item.a}</p>
              </div>
            ))}
          </div>

          {/* Related */}
          <div style={{ marginTop: 'clamp(1.5rem, 2.5vw, 3rem)', display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{t('dachau.related.label')}</span>
            <Link href={t('dachau.related.link1_href')} style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('dachau.related.link1')}</Link>
            <Link href={t('dachau.related.link2_href')} style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('dachau.related.link2')}</Link>
            <Link href={t('dachau.related.prices_href')} style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('dachau.related.prices')}</Link>
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
