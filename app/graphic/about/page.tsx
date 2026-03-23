/**
 * GRAPHIC ABOUT — Kisha Tattoo
 * Design: Figma spec 1920 / 1440 / 390px
 * Font: DM Sans weight 500  ·  Colors: #0D0D0D · #BFBFBF · #F2F2F2
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'About — Kisha Tattoo. One grand story at a time',
  description:
    'Five years dedicated to preserving the tradition of Japanese tattooing. Learn about Kisha — the philosophy, discipline, and devotion behind every piece.',
  path: '/graphic/about',
})

const MINI_GALLERY = [
  { id: 1, src: 'https://picsum.photos/seed/about-mini-1/200/200', alt: 'Irezumi detail 1' },
  { id: 2, src: 'https://picsum.photos/seed/about-mini-2/200/200', alt: 'Irezumi detail 2' },
  { id: 3, src: 'https://picsum.photos/seed/about-mini-3/200/200', alt: 'Irezumi detail 3' },
  { id: 4, src: 'https://picsum.photos/seed/about-mini-4/200/200', alt: 'Irezumi detail 4' },
]

const STEPS = [
  {
    title: 'For the artist',
    body: 'It requires the focused discipline to master the technique, respect the body\u2019s anatomy, and dedicate countless hours to perfection.',
  },
  {
    title: 'For the client',
    body: 'The courage and patience to commit to a long, multi-session process, knowing that the final masterpiece will be a permanent testament to your inner strength.',
  },
  {
    title: 'My dedication',
    body: 'Is to those who seek an authentic, meaningful, and enduring piece of art. If you are ready to embark on this focused journey, I am here to guide the process and ensure your legacy is beautifully etched in skin.',
  },
]

export default function GraphicAboutPage() {
  return (
    <main id="main-content">

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
        <GLogoBar theme="light" />

        {/* H1 — top left */}
        <h1
          className="g-about-h1"
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 42.6vw, 817px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
          }}
        >
          About Kisha Tattoo.<br />
          One grand story at a time
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
            fontSize: 'clamp(6rem, 16.67vw, 20rem)',
            lineHeight: 0.9,
            color: '#0D0D0D',
            opacity: 0.07,
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
            left: 0,
            bottom: 'calc(clamp(3rem, 5vw, 6rem) - 80px)',
            width: 'clamp(120px, 12.5vw, 240px)',
            height: 'clamp(130px, 13.5vw, 260px)',
            overflow: 'hidden',
          }}
        >
          <Image
            src="https://picsum.photos/seed/kisha-master-about/480/520"
            alt="Kisha — Japanese tattoo master at work"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            sizes="14vw"
          />
        </div>

        {/* "Dedicated to..." — right of photo, bottom-aligned */}
        <p
          className="g-about-dedicated"
          style={{
            position: 'absolute',
            left: 'calc(clamp(120px, 12.5vw, 240px) + 1.5rem)',
            bottom: 'calc(clamp(3rem, 5vw, 6rem) - 80px)',
            width: 'clamp(180px, 17.7vw, 340px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#0D0D0D',
          }}
        >
          Dedicated to preserving the tradition of Japanese tattooing,
          one grand story at a time
        </p>


        <GNav activePath="/graphic/about" theme="light" />
      </section>

      {/* ── 2. ABOUT SECTION ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="about-journey-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          {/* Heading row: [ tag ] — centered title — [ tag ] */}
          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{
              fontSize: 'var(--g-tag)', color: '#0D0D0D',
              whiteSpace: 'nowrap', flexShrink: 0,
            }}>
              [ Art that becomes a story ]
            </span>
            <h2
              id="about-journey-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              The journey: etched in discipline
            </h2>
            <Link
              href="/graphic/works"
              style={{
                fontSize: 'var(--g-tag)', color: '#0D0D0D',
                textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
              }}
            >
              [ Explore work and tattooing ]
            </Link>
          </div>

          {/* Full-width image */}
          <div
            className="g-about-img"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '1840 / 960',
              overflow: 'hidden',
              borderRadius: '2px',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <Image
              src="https://picsum.photos/seed/about-studio-wide/1840/960"
              alt="Kisha tattooing in progress — traditional Japanese technique"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          {/* Two text columns — right-aligned */}
          <div
            className="g-about-info"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 'clamp(2rem, 4.2vw, 5rem)',
            }}
          >
            <p style={{
              fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D',
              width: 'clamp(16rem, 23.3vw, 448px)',
              flexShrink: 0,
            }}>
              For over five years, my life has been dedicated to the pursuit of
              traditional Japanese tattooing. My journey began with a profound
              respect for the legacy of Irezumi, seeing it not as a trend, but
              as a commitment — a powerful, living art form.
            </p>
            <p style={{
              fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D',
              width: 'clamp(16rem, 23.3vw, 448px)',
              flexShrink: 0,
            }}>
              I specialize in the large, complex works that define this tradition:
              full backpieces, sleeves, and bodysuits. These projects require a
              special level of discipline and patience, which I bring to every
              single line.
            </p>
          </div>

        </div>
      </section>

      {/* ── 3. PASSION SECTION ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="passion-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
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
              The philosophy —{' '}
              <span style={{ textTransform: 'lowercase' }}>love and devotion</span>
            </h2>
            <p style={{
              fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D',
              flex: '1 1 0',
              textAlign: 'right',
              maxWidth: '22rem',
              marginLeft: 'auto',
            }}>
              In our studio, we are guided by the principle of deep love for the
              craft and heartfelt devotion to your vision
            </p>
          </div>

          {/* Dark block: text+gallery left, large photo right */}
          <div
            className="g-about-passion-block"
            style={{
              background: '#0D0D0D',
              display: 'flex',
              gap: '1rem',
              overflow: 'hidden',
              borderRadius: '2px',
            }}
          >
            {/* Left: heading + body + mini gallery */}
            <div
              className="g-about-passion-left"
              style={{
                flex: '0 0 clamp(18rem, 40%, 700px)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                padding: 'clamp(1.5rem, 2.08vw, 2.5rem)',
                paddingRight: 0,
              }}
            >
              <h3 style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#F2F2F2',
              }}>
                The art we create is far more than just an image
              </h3>
              <p style={{
                fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#F2F2F2',
              }}>
                It is a profound transformation. Every single element, from the flow
                of the Nami (Waves) to the intricate scales of the Ryu (Dragon), is
                drawn with intention and fuelled by this passion. I work directly with
                you, the client, to distill your unique idea, personal metaphor, or
                life philosophy into a timeless design.
              </p>
              {/* Mini gallery row */}
              <div
                className="g-about-mini-gallery"
                style={{
                  display: 'flex',
                  gap: '0.5rem',
                  marginTop: 'auto',
                  paddingTop: '1rem',
                }}
              >
                {MINI_GALLERY.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      flex: '1 1 0',
                      position: 'relative',
                      aspectRatio: '1 / 1',
                      overflow: 'hidden',
                      borderRadius: '2px',
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="8vw"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: large photo */}
            <div
              className="g-about-passion-right"
              style={{
                flex: '1 1 0',
                position: 'relative',
                minHeight: 'clamp(400px, 50vw, 800px)',
              }}
            >
              <Image
                src="https://picsum.photos/seed/about-back-piece/800/1000"
                alt="Full back Irezumi — traditional Japanese tattooing masterpiece"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="55vw"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── 4. MASTERY SECTION ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="mastery-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
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
              The commitment of endurance and mastery
            </h2>
          </div>

          {/* Sub-text */}
          <p style={{
            fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D',
            textAlign: 'center',
            maxWidth: '25rem',
            margin: '0 auto clamp(2rem, 3.5vw, 4rem)',
          }}>
            Traditional Irezumi is an act of endurance, requiring patience from
            both the artist and the client
          </p>

          {/* Three columns */}
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
                  gap: '1.5rem',
                  padding: i === 0
                    ? '0 clamp(1rem, 2vw, 2rem) 0 0'
                    : i === 1
                    ? '0 clamp(1rem, 2vw, 2rem)'
                    : '0 0 0 clamp(1rem, 2vw, 2rem)',
                  borderLeft: i > 0 ? '1px solid #0D0D0D' : 'none',
                }}
              >
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
            ))}
          </div>

        </div>
      </section>

      <GFooter />

    </main>
  )
}
