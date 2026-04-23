/**
 * JAPANISCHES TATTOO MÜNCHEN — Style landing page
 * Target keyword: "japanisches tattoo münchen" + "irezumi münchen"
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
  const t = await getTranslations({ locale, namespace: 'japanisch' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/japanisches-tattoo-muenchen', locale, hreflang: false })
}

export default async function JapanischesTattooMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'japanisch' })
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Japanischer Tätowierer München — KishaTattoo', description: 'Japanischer Tätowierer in München — Traditional Japanese Tattoo, Irezumi, Koi, Drachen, Oni, Sleeve, Backpiece.', url: '/japanisches-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Japanisches Tattoo München', url: '/japanisches-tattoo-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        data-nav-dark
        aria-label="Japanisches Tattoo München — KishaTattoo"
        style={{ position: 'relative', height: '100svh', minHeight: '680px', background: '#0D0D0D', overflow: 'hidden' }}
      >
        <Image
          src="/images/home/works-04-god-japanese.jpg"
          alt="Japanisches Tattoo München — Irezumi KishaTattoo"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          sizes="100vw"
        />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.45)', zIndex: 1 }} />

        <GHeader theme="dark" />

        <h1 style={{
          position: 'absolute', top: '72px', left: 'var(--g-pad)',
          width: 'clamp(18rem, 39.6vw, 571px)',
          fontSize: 'var(--g-xl)', lineHeight: 'var(--g-lh-xl)',
          color: '#F2F2F2', whiteSpace: 'pre-line', zIndex: 2,
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
        aria-labelledby="jp-works-heading"
        style={{ background: '#F2F2F2', paddingTop: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)' }}
      >
        <div className="g-container">
          <div style={{ borderBottom: '2px solid #0D0D0D', paddingBottom: '1.25rem', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="jp-works-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('intro.heading')}
            </h2>
          </div>
          <div style={{
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
          <div className="g-gallery-loc-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <GWorkImage
                src="/images/work/4x4-japan-fox-tattoo-graphic.jpg"
                alt="Japanisches Fuchs Tattoo München — Irezumi KishaTattoo"
                sizes="(max-width: 767px) 100vw, 50vw"
                style={{ height: 'clamp(720px, 50vw, 960px)' }}
              />
              <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px' }}>
                {['Irezumi', 'München', 'Kisha'].map(tag => (
                  <span key={tag} style={{ background: '#F2F2F2', color: '#0D0D0D', padding: '6px 10px', fontSize: 'var(--g-tag)', fontWeight: 500, lineHeight: 1 }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="g-gallery-loc-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: 'clamp(720px, 50vw, 960px)' }}>
              {[
                { src: '/images/work/4x4-rabbit-tattoo-graphic.jpg', alt: 'Japanisches Hase Tattoo München — KishaTattoo' },
                { src: '/images/work/4x4-birds-tattoo-graphic.jpg', alt: 'Japanisches Vögel Tattoo München — KishaTattoo' },
                { src: '/images/work/4x4-bugs-tattoo-graphic.jpg', alt: 'Japanisches Insekten Tattoo München — KishaTattoo' },
                { src: '/images/work/4x4-sakura-tattoo.jpg', alt: 'Sakura Kirschblüten Tattoo München — KishaTattoo' },
              ].map(img => (
                <div key={img.src} style={{ position: 'relative' }}>
                  <GWorkImage src={img.src} alt={img.alt} sizes="25vw" />
                  <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px' }}>
                    {['München', 'Kisha'].map(tag => (
                      <span key={tag} style={{ background: '#F2F2F2', color: '#0D0D0D', padding: '5px 8px', fontSize: 'var(--g-tag)', fontWeight: 500, lineHeight: 1 }}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
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

      {/* ── MOTIVES ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="jp-motive-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', display: 'flex', justifyContent: 'center', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="jp-motive-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}>
              {t('motives.heading')}
            </h2>
          </div>
          <div className="g-about-steps" style={{ display: 'flex' }}>
            {(t.raw('motives.items') as Array<{ title: string; body: string }>).map((col, i) => (
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
        aria-labelledby="jp-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div style={{ borderTop: '2px solid #0D0D0D', paddingTop: '1.25rem', display: 'flex', gap: 'clamp(2rem, 4vw, 5rem)', alignItems: 'flex-start' }}>
            <h2 id="jp-faq-heading" style={{
              fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D',
              width: 'clamp(14rem, 21.5vw, 414px)', flexShrink: 0,
            }}>
              {t('faq.heading')}
            </h2>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
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
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.grafik')}</Link>
          <Link href="/fineline-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.fineline')}</Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}