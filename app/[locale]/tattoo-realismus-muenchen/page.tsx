/**
 * REALISMUS TATTOO MÜNCHEN — Style + Master landing page (Iren Red)
 * Primary keywords: city-phrases for local relevance (near-zero volume, see PLAN-KOMANDA §5),
 * body content targets DE-wide demand (realistic tattoo 1900/mo, portrait tattoo 720/mo, black and grey tattoo 590/mo)
 * plus the Tier-Tattoo cluster (tier tattoos für frauen 260/mo etc.)
 * Design: same template as fineline-tattoo-muenchen, extended with History + Hygiene blocks
 * (this single page = style page + full master profile, see PLAN-KOMANDA §2)
 *
 * Confirmed by Stas (2026-07-28):
 * - No price table — price section intentionally links to /tattoo-preise-muenchen only ("ab" pricing lives there)
 * - Awards: 4x 1st place, Kharkiv — structured list + awardsPageSchema (see AWARDS constant below)
 * - Color realism work (e.g. the phoenix piece) intentionally excluded from the gallery — main focus stays Black & Grey
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { SITE } from '@/content/site'
import { getTranslations } from 'next-intl/server'
import { serviceSchema, breadcrumbSchema, faqSchema, personSchema, awardsPageSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { GWorkImage } from '@/components/graphic/GWorkImage'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'realismus' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/tattoo-realismus-muenchen', locale, hreflang: false })
}

export default async function RealismusTattooMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'realismus' })
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>
  const awardItems = t.raw('awards.items') as Array<{ year: string; event: string; category: string }>
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Realismus Tattoo München', description: 'Black & Grey Realism Tattoo in München — Portrait-, Tier- und Realismus-Tattoos mit Iren Red. KishaTattoo München.', url: '/tattoo-realismus-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Realismus Tattoo München', url: '/tattoo-realismus-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        personSchema({
          slug: 'iren',
          name: 'Iren Red',
          alternateName: 'irene.red.tattoo',
          jobTitle: 'Tattoo Artist — Black & Grey Realism',
          description: 'Tattoo-Künstlerin in München — Black & Grey Realism, Portrait- und Tier-Tattoos. Mehrfache Preisträgerin, über 10 Jahre Erfahrung.',
          image: `${SITE.url}/images/ira/hero-portrait.jpg`,
          sameAs: ['https://www.instagram.com/irene.red.tattoo'],
          skills: ['Black & Grey Realism', 'Portrait Tattoo', 'Animal Realism'],
        })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        awardsPageSchema(awardItems.map((a) => ({ year: a.year, event: a.event, category: a.category })), { slug: 'iren', name: 'Iren Red' })
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        data-nav-dark
        aria-label="Realismus Tattoo München — Iren Red, KishaTattoo"
        style={{ position: 'relative', height: '100svh', minHeight: '680px', background: '#0D0D0D', overflow: 'hidden' }}
      >
        <Image
          src="/images/ira/hero-portrait.jpg"
          alt="Iren Red — Realismus Tattoo Artist München, KishaTattoo"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: '65% 30%' }}
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
        aria-labelledby="rl-works-heading"
        style={{ background: '#F2F2F2', paddingTop: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)' }}
      >
        <div className="g-container">
          <div style={{ borderBottom: '2px solid #0D0D0D', paddingBottom: '1.25rem', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="rl-works-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
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

        {/*
          Same rhythm as grafik-tattoo-muenchen: big 2-col pairs alternating with a small
          4-col cluster, not one repeated shape. Real source ratios (checked with `sips`):
          ~3:4 (632-620x843, 1500x2000) and ~9:16 (474x843, 1125x2000) — big rows are paired
          by matching ratio so nothing gets force-cropped into a square.
        */}
        <div style={{ paddingLeft: 'var(--g-pad)', paddingRight: 'var(--g-pad)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Row 1 — big, 3:4 pair, LEADS with the two portrait pieces (Stas: put portraits first) */}
            <div className="g-gallery-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GWorkImage
                src="/images/work/marilyn-monroe-portrait-tattoo-realismus.jpg"
                alt="Marilyn Monroe Portrait Tattoo München — Iren Red Realismus"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Portrait', 'München', 'Iren Red']}
                style={{ height: 'clamp(520px, calc(8px + 50vw), 780px)' }}
              />
              <GWorkImage
                src="/images/work/braut-frankenstein-portrait-tattoo-realismus.jpg"
                alt="Braut von Frankenstein Portrait Tattoo München — Iren Red Realismus"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Portrait', 'München', 'Iren Red']}
                style={{ height: 'clamp(520px, calc(8px + 50vw), 780px)' }}
              />
            </div>
            {/* Row 2 — big, 9:16 pair (the two full-sleeve pieces) */}
            <div className="g-gallery-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GWorkImage
                src="/images/work/zeus-engel-sleeve-tattoo-realismus.jpg"
                alt="Zeus Engel Sleeve Tattoo München — Iren Red Black & Grey Realismus"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Realismus', 'München', 'Iren Red']}
                style={{ height: 'clamp(560px, calc(8px + 58vw), 860px)', objectPosition: 'center 15%' }}
              />
              <GWorkImage
                src="/images/work/poseidon-tattoo-bein-realismus.jpg"
                alt="Poseidon Tattoo Bein München — Iren Red Black & Grey Realismus"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Realismus', 'München', 'Iren Red']}
                style={{ height: 'clamp(560px, calc(8px + 58vw), 860px)' }}
              />
            </div>
            {/* Row 3 — small 4-col cluster, deliberate scale contrast against the big rows above/below */}
            <div className="g-gallery-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              <GWorkImage
                src="/images/work/batman-portrait-tattoo-realismus.jpg"
                alt="Batman Portrait Tattoo München — Iren Red Black & Grey Realismus"
                sizes="25vw"
                tags={['Iren Red']}
                style={{ height: 'clamp(300px, calc(8px + 22vw), 420px)' }}
              />
              <GWorkImage
                src="/images/work/engel-statue-tattoo-oberschenkel-realismus.jpg"
                alt="Engel Statue Tattoo Oberschenkel München — Iren Red Black & Grey Realismus"
                sizes="25vw"
                tags={['Iren Red']}
                style={{ height: 'clamp(300px, calc(8px + 22vw), 420px)' }}
              />
              <GWorkImage
                src="/images/work/drachen-frau-portrait-tattoo-realismus.jpg"
                alt="Drachen Portrait Tattoo München — Iren Red Black & Grey Realismus"
                sizes="25vw"
                tags={['Iren Red']}
                style={{ height: 'clamp(300px, calc(8px + 22vw), 420px)' }}
              />
              <GWorkImage
                src="/images/work/sphinx-katze-tattoo-realismus.jpg"
                alt="Sphinx Katze Tattoo München — Iren Red Tier-Tattoo Realismus"
                sizes="25vw"
                tags={['Iren Red']}
                style={{ height: 'clamp(300px, calc(8px + 22vw), 420px)' }}
              />
            </div>
            {/* Row 4 — big, mixed leftovers pair */}
            <div className="g-gallery-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <GWorkImage
                src="/images/work/loewe-lilie-tattoo-unterarm-realismus.jpg"
                alt="Löwe Tattoo Unterarm München — Iren Red Black & Grey Realismus"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Realismus', 'München', 'Iren Red']}
                style={{ height: 'clamp(520px, calc(8px + 50vw), 780px)' }}
              />
              <GWorkImage
                src="/images/work/baby-yoda-tattoo-realismus.jpg"
                alt="Baby Yoda Tattoo München — Iren Red Realismus"
                sizes="(max-width: 767px) 100vw, 50vw"
                tags={['Realismus', 'München', 'Iren Red']}
                style={{ height: 'clamp(520px, calc(8px + 50vw), 780px)' }}
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
        aria-labelledby="rl-substyle-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', display: 'flex', justifyContent: 'center', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="rl-substyle-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}>
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

      {/* ── HISTORY (Über meine Arbeit) ──────────────────────────────────────── */}
      <section
        aria-labelledby="rl-history-heading"
        style={{ background: '#0D0D0D', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid rgba(242,242,242,0.2)', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="rl-history-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2' }}>
              {t('history.heading')}
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)', flexWrap: 'wrap' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(242,242,242,0.85)', width: 'clamp(16rem, 40vw, 560px)', flex: '1 1 320px' }}>
              {t('history.body1')}
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(242,242,242,0.85)', width: 'clamp(16rem, 40vw, 560px)', flex: '1 1 320px' }}>
              {t('history.body2')}
            </p>
          </div>

          <div style={{ marginTop: 'clamp(2rem, 3.5vw, 3.5rem)', paddingTop: '1.5rem', borderTop: '1px solid rgba(242,242,242,0.2)' }}>
            <p style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.6)', marginBottom: '1rem' }}>
              {t('awards.heading')}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {awardItems.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '1rem', fontSize: 'var(--g-bm)', color: 'rgba(242,242,242,0.85)' }}>
                  <span style={{ opacity: 0.6, flexShrink: 0 }}>{a.year}</span>
                  <span>{a.event} — {a.category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HYGIENE & SICHERHEIT ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="rl-hygiene-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 id="rl-hygiene-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              {t('hygiene.heading')}
            </h2>
          </div>
          <div style={{ display: 'flex', gap: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)', flexWrap: 'wrap' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 40vw, 560px)', flex: '1 1 320px' }}>
              {t('hygiene.body1')}
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 40vw, 560px)', flex: '1 1 320px' }}>
              {t('hygiene.body2')}
            </p>
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
          {/* No price rows yet — waiting on price decision, PLAN-KOMANDA §6. Links straight to the general price page for now. */}
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
        aria-labelledby="rl-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">
          <div className="g-faq-row" style={{ borderTop: '2px solid #0D0D0D', paddingTop: '1.25rem', display: 'flex', gap: 'clamp(2rem, 4vw, 5rem)', alignItems: 'flex-start' }}>
            <h2 id="rl-faq-heading" style={{
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
          <Link href="/fineline-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.fineline')}</Link>
          <Link href="/japanisches-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.japanese')}</Link>
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>{t('related.grafik')}</Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
