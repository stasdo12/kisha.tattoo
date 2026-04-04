/**
 * FAQ — Full FAQ page
 */
import type { Metadata } from 'next'
import Image from 'next/image'
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
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaq)) }}
      />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="FAQ — KishaTattoo München"
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
            opacity: 0.07,
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        >
          問
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

      {/* ── FAQ SECTIONS ──────────────────────────────────────────────────── */}
      {sections.map((section, si) => (
        <section
          key={section.id}
          aria-labelledby={`faq-${section.id}`}
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
        >
          <div className="g-container">
            <span className="g-tag" style={{ display: 'block', marginBottom: '2rem' }}>FAQ</span>

            <div
              className="g-faq-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'clamp(180px, 18.4vw, 354px) 1fr 2fr',
                gap: 'clamp(1rem, 2vw, 2rem)',
                alignItems: 'start',
              }}
            >
              {si === 0 ? (
                <div
                  className="g-faq-portrait"
                  style={{ position: 'relative', aspectRatio: '354 / 384', borderRadius: '2px', overflow: 'hidden' }}
                >
                  <Image
                    src="https://picsum.photos/seed/kisha-portrait-faq/354/384"
                    alt="Kisha — tattoo master München"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="20vw"
                  />
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%', paddingBottom: '0.5rem' }}>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.35)', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.1em' }}>
                    {String(si + 1).padStart(2, '0')}
                  </span>
                </div>
              )}

              <div aria-hidden="true" />

              <div className="g-faq-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2
                  id={`faq-${section.id}`}
                  style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '30rem' }}
                >
                  {section.label}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {section.items.map((item, i) => (
                    <div key={i} className="g-faq-item">
                      <span className="g-faq-item__num g-tag">Question №{i + 1}</span>
                      <h3 className="g-faq-item__q">{item.q}</h3>
                      <p className="g-faq-item__a">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '28rem' }}>
            {t('cta.heading')}
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/booking" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#0D0D0D', color: '#F2F2F2', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              {t('cta.booking')}
            </Link>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              {t('cta.contact')}
            </Link>
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
