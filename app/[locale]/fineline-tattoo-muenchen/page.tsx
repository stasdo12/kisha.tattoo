/**
 * FINELINE TATTOO MÜNCHEN — Style landing page
 * Primary keyword: "fineline tattoo münchen" (590/mo, KD 10)
 * Design: Figma spec — dark photo hero, merged works section, stacked price cards, 2-col FAQ
 */
import type { Metadata } from 'next'
import Image from 'next/image'
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
  const t = await getTranslations({ locale, namespace: 'fineline' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/fineline-tattoo-muenchen', locale, hreflang: false })
}

export default async function FinelineTattooMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'fineline' })
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Fineline Tattoo München', description: 'Fineline und Fine Line Tattoo in München — botanische Motive, Single Needle, Linework. KishaTattoo München.', url: '/fineline-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Fineline Tattoo München', url: '/fineline-tattoo-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        data-nav-dark
        aria-label="Fineline Tattoo München — KishaTattoo"
        style={{ position: 'relative', height: '100svh', minHeight: '680px', background: '#0D0D0D', overflow: 'hidden' }}
      >
        <Image
          src="/images/work/spiegel-tattoo-graphic.jpg"
          alt="Fineline Tattoo München — Spiegel Blumen Tattoo KishaTattoo"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center 35%' }}
          sizes="100vw"
        />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.45)', zIndex: 1 }} />

        <GHeader theme="dark" />

        <h1 style={{
          position: 'absolute', top: '72px', left: 'var(--g-pad)',
          width: 'clamp(22rem, 50vw, 720px)',
          fontSize: 'var(--g-xl)', lineHeight: 'var(--g-lh-xl)',
          color: '#F2F2F2', zIndex: 2,
        }}>
          {t('hero.h1')}
        </h1>

        <p style={{
          position: 'absolute', left: 'var(--g-pad)',
          bottom: 'clamp(90px, 13.3vh, 145px)',
          width: 'clamp(18rem, 28vw, 480px)',
          fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)',
          color: '#F2F2F2', zIndex: 2,
        }}>
          {t('hero.sub')}
        </p>

        <Link href="/booking" style={{
          position: 'absolute', bottom: 'clamp(12px, 1.85vh, 20px)',
          left: 'var(--g-pad)', right: 'var(--g-pad)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px 12px',
          background: '#F2F2F2', color: '#0D0D0D',
          fontSize: 'var(--g-bm)', fontWeight: 500, textDecoration: 'none',
          zIndex: 2,
        }}>
          {t('cta.button')}
        </Link>
      </section>

      {/* ── WORKS SECTION ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="lw-works-heading"
        style={{ background: '#F2F2F2', paddingTop: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)' }}
      >
        <div className="g-container">
          <div style={{ borderBottom: '2px solid #0D0D0D', paddingBottom: '1.25rem', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="lw-works-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('intro.heading')}
            </h2>
          </div>
          <div className="g-intro-cols" style={{
            display: 'flex', justifyContent: 'flex-end',
            gap: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)',
            marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
          }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              {t('intro.body1')}
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              {t('intro.body2')}
            </p>
          </div>
        </div>

        <div style={{ paddingLeft: 'var(--g-pad)', paddingRight: 'var(--g-pad)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="g-gallery-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GWorkImage
                src="/images/work/4x4-dog-tattoo-fineline.jpg"
                alt="Fineline Hund Tattoo München — KishaTattoo Fine Line"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Fineline', 'München', 'Kisha']}
                style={{ height: 'clamp(480px, calc(8px + 32vw), 640px)' }}
              />
              <GWorkImage
                src="/images/work/4x4-owl-tattoo-fineline.jpg"
                alt="Fineline Eule Tattoo München — KishaTattoo Linework"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Fineline', 'München', 'Kisha']}
                style={{ height: 'clamp(480px, calc(8px + 32vw), 640px)' }}
              />
            </div>
            <div className="g-gallery-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GWorkImage
                src="/images/work/tattoo-lego-fineline-work.jpg"
                alt="Fineline Lego Tattoo München — KishaTattoo Fine Line"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Fineline', 'München', 'Kisha']}
                style={{ height: 'clamp(480px, calc(8px + 32vw), 640px)', objectPosition: 'center 45%' }}
              />
              <GWorkImage
                src="/images/work/spiegel-tattoo-graphic.jpg"
                alt="Fineline Spiegel Blumen Tattoo München — KishaTattoo"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Fineline', 'München', 'Kisha']}
                style={{ height: 'clamp(480px, calc(8px + 32vw), 640px)', objectPosition: 'center 35%' }}
              />
            </div>
            <div className="g-gallery-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GWorkImage
                src="/images/work/maigloeckchen-tattoo-unterarm.jpg"
                alt="Fineline Maiglöckchen Tattoo München — KishaTattoo Fine Line"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Fineline', 'München', 'Kisha']}
                style={{ height: 'clamp(480px, calc(8px + 32vw), 640px)' }}
              />
              <GWorkImage
                src="/images/work/feines-linien-tattoo-daten-portraet-unterarm.jpg"
                alt="Fineline Portrait Tattoo München — KishaTattoo Linework"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Fineline', 'München', 'Kisha']}
                style={{ height: 'clamp(480px, calc(8px + 32vw), 640px)' }}
              />
            </div>
          </div>
        </div>

        <Link href="/works" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '16px var(--g-pad) 0',
          padding: '16px 12px',
          background: '#0D0D0D', color: '#F2F2F2',
          fontSize: 'var(--g-bm)', fontWeight: 500, textDecoration: 'none',
        }}>
          {t('gallery.viewAll')}
        </Link>
      </section>

      {/* ── SUBSTYLES ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="lw-substyle-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', display: 'flex', justifyContent: 'center', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="lw-substyle-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}>
              {t('substyles.heading')}
            </h2>
          </div>
          <div className="g-about-steps" style={{ display: 'flex' }}>
            {(t.raw('substyles.items') as Array<{ title: string; body: string }>).map((col, i) => (
              <div key={col.title} className="g-about-step-col" style={{
                flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '1.5rem',
                padding: i === 0 ? '0 clamp(1rem, 2vw, 2rem) 0 0' : i === 1 ? '0 clamp(1rem, 2vw, 2rem)' : '0 0 0 clamp(1rem, 2vw, 2rem)',
                borderLeft: i > 0 ? '1px solid #0D0D0D' : 'none',
              }}>
                <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{col.title}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLACEMENTS ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="lw-placements-heading"
        style={{ background: '#0D0D0D', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid rgba(242,242,242,0.2)', display: 'flex', justifyContent: 'center', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="lw-placements-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', textAlign: 'center' }}>
              {t('placements.heading')}
            </h2>
          </div>
          <div className="g-about-steps" style={{ display: 'flex' }}>
            {(t.raw('placements.items') as Array<{ title: string; body: string }>).map((col, i) => (
              <div key={col.title} className="g-about-step-col" style={{
                flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: '1.5rem',
                padding: i === 0 ? '0 clamp(1rem, 2vw, 2rem) 0 0' : i === 1 ? '0 clamp(1rem, 2vw, 2rem)' : '0 0 0 clamp(1rem, 2vw, 2rem)',
                borderLeft: i > 0 ? '1px solid rgba(242,242,242,0.15)' : 'none',
              }}>
                <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#F2F2F2' }}>{col.title}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(242,242,242,0.65)' }}>{col.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICE ─────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', paddingTop: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('price.heading')}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
            {(t.raw('price.rows') as Array<{ size: string; price: string; time: string }>).map(row => (
              <div key={row.size} style={{
                background: '#E8E8E8',
                display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
                padding: 'clamp(1.5rem, 2.5vw, 2.5rem)',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <p style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{row.size}</p>
                  <p style={{ fontSize: 'var(--g-bs)', color: '#0D0D0D', opacity: 0.6 }}>{row.time}</p>
                </div>
                <p style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{row.price}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href="/tattoo-preise-muenchen" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 var(--g-pad)',
          padding: '16px 12px',
          background: '#0D0D0D', color: '#F2F2F2',
          fontSize: 'var(--g-bm)', fontWeight: 500, textDecoration: 'none',
        }}>
          {t('price.link')}
        </Link>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="lw-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div className="g-faq-row" style={{ borderTop: '2px solid #0D0D0D', paddingTop: '1.25rem', display: 'flex', gap: 'clamp(2rem, 4vw, 5rem)', alignItems: 'flex-start' }}>
            <h2 id="lw-faq-heading" style={{
              fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D',
              width: 'clamp(14rem, 21.5vw, 414px)', flexShrink: 0,
            }}>
              {t('faq.heading')}
            </h2>
            <div className="g-faq-items" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {faqItems.map((item, i) => (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  padding: 'clamp(1rem, 1.8vw, 1.75rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.2)',
                }}>
                  <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{item.q}</h3>
                  <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED STYLES ────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{t('related.label')}</span>
          <Link href="/japanisches-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.japanese')}</Link>
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.grafik')}</Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
