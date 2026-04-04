/**
 * GRAFIK TATTOO MÜNCHEN — Style landing page
 * Target keyword: "grafik tattoo münchen" + "blackwork tattoo münchen"
 * Design: Graphic design system — matches existing pages
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { GWorkImage } from '@/components/graphic/GWorkImage'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'grafik' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/grafik-tattoo-muenchen', locale, hreflang: false })
}

export default async function GrafikTattooMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'grafik' })
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Tattoo Munich — KishaTattoo', description: 'Tattoo Munich: custom grafik tattoo, blackwork & illustration. Munich tattoo studio specialized in individual designs.', url: '/grafik-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Munich — Grafik & Blackwork', url: '/grafik-tattoo-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Grafik Tattoo München — KishaTattoo"
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

        {/* Decorative kanji 墨 — ink */}
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
          墨
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
        aria-labelledby="gr-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {t('intro.tag')}
            </span>
            <h2
              id="gr-intro-heading"
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
              href="/works"
              style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              {t('intro.portfolioLink')}
            </Link>
          </div>

          <div
            className="g-text-cols"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)',
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

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Grafik Tattoo Portfolio München"
        style={{
          background: '#F2F2F2',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
          paddingBottom: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Row 1: 2 equal large columns — exact same as works ROW3 */}
          <div className="g-gallery-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <GWorkImage
              src="/images/work/middle-graphic-body-flower-tattoo.jpg"
              alt="Grafik Blumen Körper Tattoo München — KishaTattoo"
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{ height: 'clamp(720px, 50vw, 820px)' }}
            />
            <GWorkImage
              src="/images/work/middle-graphic-hand-with-flower-tattoo.jpg"
              alt="Grafik Hand mit Blumen Tattoo München — KishaTattoo"
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{ height: 'clamp(720px, 50vw, 820px)' }}
            />
          </div>
          {/* Row 2: 4-column grid — same as works ROW4, each item 25vw × H_SMALL = square */}
          <div className="g-gallery-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            <GWorkImage
              src="/images/work/4x4-bugs-tattoo-graphic.jpg"
              alt="Grafik Insekten Tattoo München — KishaTattoo Blackwork"
              sizes="(max-width: 767px) 100vw, 25vw"
              style={{ height: 'clamp(356px, calc(8px + 24.17vw), 472px)' }}
            />
            <GWorkImage
              src="/images/work/4x4-fogel-tattoo-graphic.jpg"
              alt="Grafik Vogel Tattoo München — KishaTattoo"
              sizes="(max-width: 767px) 100vw, 25vw"
              style={{ height: 'clamp(356px, calc(8px + 24.17vw), 472px)' }}
            />
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
          <Link href="/works" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            {t('gallery.viewAll')}
          </Link>
        </div>
      </section>

      {/* ── SUBSTYLES ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="gr-substyle-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
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
            <h2 id="gr-substyle-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}>
              {t('substyles.heading')}
            </h2>
          </div>
          <div className="g-about-steps" style={{ display: 'flex' }}>
            {(t.raw('substyles.items') as Array<{ title: string; body: string }>).map((col, i) => (
              <div
                key={col.title}
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
                <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{col.title}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICE TEASER ──────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('price.heading')}
            </h2>
          </div>
          <div className="g-feature-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 2vw, 2rem)' }}>
            {(t.raw('price.rows') as Array<{ size: string; price: string; time: string }>).map((row) => (
              <div key={row.size} style={{ padding: 'clamp(1rem, 1.5vw, 1.5rem)', borderBottom: '1px solid rgba(13,13,13,0.15)' }}>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{row.size}</p>
                <p style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', marginTop: '0.5rem' }}>{row.price}</p>
                <p style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.55)', marginTop: '0.25rem' }}>{row.time}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              {t('price.link')}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="gr-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="gr-faq-heading"
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
                className="g-faq-row"
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

      {/* ── RELATED + CTA ─────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{t('related.label')}</span>
          <Link href="/japanisches-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.japanese')}</Link>
          <Link href="/fineline-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.fineline')}</Link>
        </div>
      </section>

      <section data-nav-dark style={{ background: '#0D0D0D', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            {t('cta.heading')}
          </p>
          <Link href="/booking" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#F2F2F2', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            {t('cta.button')}
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
