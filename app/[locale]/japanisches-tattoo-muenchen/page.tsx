/**
 * JAPANISCHES TATTOO MÜNCHEN — Style landing page
 * Target keyword: "japanisches tattoo münchen" + "irezumi münchen"
 * Design: Graphic design system — matches existing pages
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'
import { GWorkImage } from '@/components/graphic/GWorkImage'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'japanisch' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/japanisches-tattoo-muenchen', locale })
}

const FAQ = [
  {
    question: 'Wie finde ich einen japanischen Tätowierer in München?',
    answer: 'Einen echten japanischen Tätowierer in München zu finden, erfordert Recherche: achte auf Erfahrung mit Traditional Japanese Tattoo, Kenntnis der Kompositionslehre und ein Portfolio mit großformatigen Irezumi-Arbeiten. KishaTattoo spezialisiert sich seit 5+ Jahren ausschließlich auf diesen Stil.',
  },
  {
    question: 'Was kostet ein japanisches Tattoo in München?',
    answer: 'Japanische Irezumi-Arbeiten werden nach Stunden abgerechnet. Kleine Motive starten bei ca. 200–300 €, große Backpieces oder Sleeves ab 800 € pro Sitzung. Details zu Tattoo Preisen München findest du auf unserer Preisseite.',
  },
  {
    question: 'Was bedeutet Traditional Tattoo München?',
    answer: 'Traditional Tattoo München bezieht sich auf klassische Tattoo-Stile mit klaren Umrissen und satten Farben — darunter japanisches Irezumi. Bei KishaTattoo steht "traditional" für die Treue zur japanischen Kompositionslehre: Motive werden an der natürlichen Muskulatur ausgerichtet.',
  },
  {
    question: 'Was ist der Unterschied zwischen Irezumi und modernem Japanese Style?',
    answer: 'Traditionelles Irezumi folgt einer jahrhundertealten Kompositionslehre: Motive wie Koi, Drachen oder Oni werden nach den Muskeln des Körpers ausgerichtet und in klare Flächen und Übergänge gegliedert. Modernes "Japanese Style" ist oft freier interpretiert.',
  },
]

export default async function JapanischesTattooMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'japanisch' })
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Japanischer Tätowierer München — KishaTattoo', description: 'Japanischer Tätowierer in München — Traditional Japanese Tattoo, Irezumi, Koi, Drachen, Oni, Sleeve, Backpiece.', url: '/japanisches-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Japanisches Tattoo München', url: '/japanisches-tattoo-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ)
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Japanisches Tattoo München — KishaTattoo"
        style={{
          position: 'relative',
          height: 'clamp(680px, 90vh, 900px)',
          background: '#F2F2F2',
          overflow: 'hidden',
        }}
      >
        <GLogoBar theme="light" />

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

        {/* Decorative kanji 刺青 — Irezumi */}
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
          刺青
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

        <GNav activePath="/" theme="light" />
      </section>

      {/* ── INTRO TEXT ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="jp-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Irezumi · Horimono · Tebori ]
            </span>
            <h2
              id="jp-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              Japanische Tattoos München — Traditional Style
            </h2>
            <Link
              href="/works"
              style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              [ Portfolio ansehen ]
            </Link>
          </div>

          <div
            className="g-text-cols"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 'clamp(2rem, 4.2vw, 5rem)',
              marginTop: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Als japanischer Tätowierer in München bietet KishaTattoo authentisches Irezumi (刺青) und
              Horimono (彫り物) nach klassischer Kompositionslehre. Traditional Tattoo München bedeutet
              hier: Motive wie Koi, Drachen, Oni-Masken und Kirschblüten, ausgerichtet an der natürlichen
              Muskulatur des Körpers — keine Schablonen, kein Flash.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Als Japanese Tattoo Artist in Germany spezialisiert sich Kisha auf großformatige
              Irezumi-Projekte: vollständige Backpieces, Sleeves und Bodysuits. Japanische Tattoos
              München von KishaTattoo — jede Linie mit der Geduld und Präzision, die diese
              Jahrhunderte alte Kunstform verlangt.
            </p>
          </div>

        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Japanisches Tattoo Portfolio München"
        style={{
          background: '#F2F2F2',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
          paddingBottom: 'clamp(2rem, 4.2vw, 5rem)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Row 1: exact same as works ROW1 — left large + right 2×2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <GWorkImage
              src="/images/work/4x4-japan-fox-tattoo-graphic.jpg"
              alt="Japanisches Fuchs Tattoo München — Irezumi KishaTattoo"
              sizes="50vw"
              style={{ height: 'clamp(720px, 50vw, 820px)' }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '16px', height: 'clamp(720px, 50vw, 820px)' }}>
              <GWorkImage src="/images/work/4x4-rabbit-tattoo-graphic.jpg"    alt="Japanisches Hase Tattoo München — KishaTattoo"    sizes="25vw" />
              <GWorkImage src="/images/work/4x4-birds-tattoo-graphic.jpg"     alt="Japanisches Vögel Tattoo München — KishaTattoo"   sizes="25vw" />
              <GWorkImage src="/images/work/4x4-bugs-tattoo-graphic.jpg"      alt="Japanisches Insekten Tattoo München — KishaTattoo" sizes="25vw" />
              <GWorkImage src="/images/work/4x4-sakura-tattoo.jpg"            alt="Sakura Kirschblüten Tattoo München — KishaTattoo" sizes="25vw" />
            </div>
          </div>
          {/* Row 2: full-width landscape — exact same as works ROW2 */}
          <GWorkImage
            src="/images/work/row2-snake-knie-tattoo.jpg"
            alt="Japanische Schlange Knie Tattoo München — KishaTattoo"
            sizes="100vw"
            style={{ height: 'clamp(432px, 39.6vw, 672px)' }}
          />
        </div>
        <div style={{ textAlign: 'center', marginTop: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
          <Link href="/works" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Alle Arbeiten ansehen →
          </Link>
        </div>
      </section>

      {/* ── MOTIVES ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="jp-motive-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
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
            <h2
              id="jp-motive-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}
            >
              Klassische japanische Motive
            </h2>
          </div>

          <div className="g-about-steps" style={{ display: 'flex' }}>
            {[
              { title: 'Koi & Drachen', body: 'Koi symbolisiert Ausdauer und Transformation. Der Drachen (Ryū) steht für Stärke und Weisheit. Beide sind Kernmotive des klassischen Irezumi — in München von KishaTattoo authentisch umgesetzt.' },
              { title: 'Oni & Hannya', body: 'Oni-Masken und Hannya stehen für die duale Natur des Menschen — Stärke, Furcht, verlorene Liebe. Charakterstarke Motive, die auf dem Körper leben und Geschichten erzählen.' },
              { title: 'Natur & Jahreszeiten', body: 'Kirschblüten (Sakura), Chrysanthemen, Pfingstrosen, Wellen (Nami) und Blitze (Raijin) bilden den kompositorischen Rahmen, der ein Irezumi zu einem Gesamtkunstwerk macht.' },
            ].map((col, i) => (
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
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              Was kostet ein japanisches Tattoo?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 2vw, 2rem)' }}>
            {[
              { size: 'Kleines Motiv (bis 10 cm)', price: 'ab 200 €', time: '2–3 Std.' },
              { size: 'Halbärmel / Oberarm', price: 'ab 800 € / Sitzung', time: '5–7 Std.' },
              { size: 'Full Sleeve / Backpiece', price: 'ab 2.500 € gesamt', time: '15–40 Std. total' },
            ].map((row) => (
              <div key={row.size} style={{ padding: 'clamp(1rem, 1.5vw, 1.5rem)', borderBottom: '1px solid rgba(13,13,13,0.15)' }}>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{row.size}</p>
                <p style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', marginTop: '0.5rem' }}>{row.price}</p>
                <p style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.55)', marginTop: '0.25rem' }}>{row.time}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              Vollständige Preisübersicht ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="jp-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="jp-faq-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
            }}
          >
            Häufige Fragen
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {FAQ.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(2rem, 4vw, 5rem)',
                  padding: 'clamp(1rem, 1.8vw, 1.75rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.2)',
                }}
              >
                <h3 style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{item.question}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED STYLES ────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>Weitere Stile →</span>
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Grafik Tattoo München</Link>
          <Link href="/fineline-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Linework Tattoo München</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section data-nav-dark style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            {t('cta.heading')}
          </p>
          <Link
            href="/booking"
            style={{
              display: 'inline-block',
              padding: '0.875rem 2.5rem',
              background: '#F2F2F2',
              color: '#0D0D0D',
              fontSize: 'var(--g-bm)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {t('cta.button')}
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
