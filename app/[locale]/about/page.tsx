/**
 * GRAPHIC ABOUT — Kisha Tattoo
 * Design: Figma spec 1920 / 1440 / 390px
 * Font: DM Sans weight 500  ·  Colors: #0D0D0D · #BFBFBF · #F2F2F2
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { personSchema, localBusinessSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { GAboutPassionBlock } from '@/components/graphic/GAboutPassionBlock'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/about', locale })
}


/* STEPS defined inside component */

export default async function GraphicAboutPage() {
  const t = await getTranslations('about')
  const STEPS = (t.raw('mastery.steps') as Array<{ title: string; body: string }>)

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />

      {/* ── 1. HERO — light bg, black text, vertical nav right, 命 centered ── */}
      <section
        aria-label="About Kisha Tattoo"
        className="g-hero-section g-about-hero"
        style={{
          position: 'relative',
          height: 'clamp(680px, 90vh, 900px)',
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GHeader theme="light" />

        {/* H1 — top left */}
        <h1
          className="g-about-h1"
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 42.6vw, 817px)',
            fontSize: 'var(--g-l)',
            lineHeight: 'var(--g-lh-l)',
            color: '#0D0D0D',
          }}
        >
          {t('hero.h1').split('\n')[0]}<br />
          {t('hero.h1').split('\n')[1]}
        </h1>

        {/* 命 kanji — centered in hero, large, decorative */}
        <div
          aria-hidden="true"
          className="g-about-kanji"
          style={{
            position: 'absolute',
            left: '50%',
            top: '48%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(4rem, 10vw, 12rem)',
            lineHeight: 0.9,
            color: '#0D0D0D',
            opacity: 0.45,
            userSelect: 'none',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          命
        </div>

        {/* Master photo — bottom left */}
        <div
          className="g-about-master-photo"
          style={{
            position: 'absolute',
            left: 'var(--g-pad)',
            bottom: '24px',
            width: 'clamp(120px, 12.5vw, 240px)',
            height: 'clamp(130px, 13.5vw, 260px)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/about/hero-portrait.jpg"
            alt="Kisha — Tattoo Artist München, Spezialistin für Japanisches Tattoo"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            sizes="(max-width: 767px) 240px, 14vw"
          />
        </div>

        {/* "Dedicated to..." — right of photo, bottom-aligned */}
        <p
          className="g-about-dedicated"
          style={{
            position: 'absolute',
            left: 'calc(var(--g-pad) + clamp(120px, 12.5vw, 240px) + 1.5rem)',
            bottom: '24px',
            width: 'clamp(180px, 17.7vw, 340px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D',
          }}
        >
          {t('hero.dedicated')}
        </p>


      </section>

      {/* ── 2. ABOUT SECTION ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-journey-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">

          {/* Heading row: h2 centered, border-bottom */}
          <div style={{
            paddingBottom: '1.25rem',
            borderBottom: '2px solid #0D0D0D',
            marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <h2
              id="about-journey-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 21.25vw, 408px)',
              }}
            >
              {t('journey.heading')}
            </h2>
          </div>

          {/* Full-width image */}
          <div
            className="g-about-img"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1840 / 960',
              maxHeight: '730px',
              overflow: 'hidden',
              borderRadius: '2px',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <Image
              src="/images/about/studio-wide.jpg"
              alt="Kisha beim Tätowieren in München — Tattoo Artist bei der Arbeit"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          {/* Two text columns — centered */}
          <div
            className="g-about-info"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem)',
            }}
          >
            <p style={{
              fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D',
              width: 'clamp(16rem, 23.3vw, 448px)',
              flexShrink: 0,
            }}>
              {t('journey.p1')}
            </p>
            <p style={{
              fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D',
              width: 'clamp(16rem, 23.3vw, 448px)',
              flexShrink: 0,
            }}>
              {t('journey.p2')}
            </p>
          </div>

        </div>
      </section>

      {/* ── 3. PASSION SECTION ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="passion-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">

          {/* Header: heading left — body text right */}
          <div
            className="g-section-header g-about-passion-header"
            style={{ alignItems: 'flex-start', gap: '2rem' }}
          >
            <h2
              id="passion-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                flex: '0 0 clamp(18rem, 32.6vw, 470px)',
              }}
            >
              {t('philosophy.heading').split('—')[0].trim()} —{' '}
              <span style={{ textTransform: 'lowercase' }}>{t('philosophy.heading').split('—')[1].trim()}</span>
            </h2>
            <p style={{
              fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D',
              flex: '1 1 0',
              textAlign: 'right',
              maxWidth: '22rem',
              marginLeft: 'auto',
            }}>
              {t('philosophy.body')}
            </p>
          </div>

          <GAboutPassionBlock />

        </div>
      </section>

      {/* ── 4. MASTERY SECTION ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="mastery-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) 0' }}
      >
        <div className="g-container">

          {/* Centered heading with border-bottom */}
          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <h2
              id="mastery-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
              }}
            >
              {t('mastery.heading')}
            </h2>
          </div>

          {/* Sub-text */}
          <p style={{
            fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D',
            textAlign: 'center',
            maxWidth: '25rem',
            margin: '0 auto clamp(2rem, 3.5vw, 4rem)',
          }}>
            {t('mastery.sub')}
          </p>

          {/* Three columns — A / B / C */}
          <div
            className="g-about-steps"
            style={{ display: 'flex' }}
          >
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="g-about-step-col"
                style={{
                  flex: '1 1 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: 'clamp(260px, 29vw, 418px)',
                  padding: i === 0
                    ? '0 clamp(1rem, 2vw, 2rem) 1.25rem 0'
                    : i === 1
                    ? '0 clamp(1rem, 2vw, 2rem) 1.25rem'
                    : '0 clamp(1rem, 2vw, 2rem) 1.25rem',
                  borderRight: i < 2 ? '1px solid #0D0D0D' : 'none',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignSelf: 'stretch' }}>
                  <h3 style={{
                    fontSize: 'var(--g-s)',
                    lineHeight: 'var(--g-lh-s)',
                    color: '#0D0D0D',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--g-bm)',
                    lineHeight: 'var(--g-lh-bm)',
                    color: '#0D0D0D',
                  }}>
                    {step.body}
                  </p>
                </div>
                <span style={{
                  fontSize: 'var(--g-s)',
                  lineHeight: 'var(--g-lh-s)',
                  color: '#0D0D0D',
                  alignSelf: 'center',
                }}>
                  {String.fromCharCode(65 + i)}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. AWARDS TEASER ──────────────────────────────────────────────── */}
      <section style={{ background: '#E8E8E8' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(120px, 19.4vw, 280px)',
            padding: 'clamp(2rem, calc(20px + 4.167vw), 6.25rem) clamp(20px, 2.08vw, 40px)',
          }}
        >
          {/* Top row: heading left + arrow right */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>{t('awards.tag')}</span>
              <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: 'clamp(20rem, 27.4vw, 527px)' }}>
                {t('awards.heading')}
              </p>
            </div>
            <span aria-hidden="true" style={{ fontSize: '4rem', lineHeight: 1, color: '#0D0D0D', flexShrink: 0 }}>→</span>
          </div>

          {/* Full-width dark CTA button */}
          <Link
            href="/awards"
            className="g-cta-strip"
          >
            <span>{t('awards.link')}</span>
          </Link>
        </div>
      </section>

      <GFooter />

    </main>
  )
}
