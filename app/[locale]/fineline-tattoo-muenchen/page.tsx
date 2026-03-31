/**
 * FINELINE TATTOO MÜNCHEN — Style landing page
 * Primary keyword: "fineline tattoo münchen" (590/mo, KD 10)
 * Cluster: fine line tattoo münchen · fineline tattoos münchen · tattoo münchen fine line
 * Design: Graphic design system — unchanged
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
  const t = await getTranslations({ locale, namespace: 'fineline' })
  return buildMetadata({ title: t('meta.title'), description: t('meta.description'), path: '/fineline-tattoo-muenchen', locale })
}

const FAQ = [
  {
    question: 'Was ist ein Fineline Tattoo?',
    answer: 'Ein Fineline Tattoo (auch Fine Line oder Single Needle Tattoo) wird mit einer einzelnen, sehr dünnen Nadel gestochen. Das Ergebnis sind präzise, zarte Linien ohne breite Konturen — ideal für botanische Motive, Minimalismus, Portraits und Schriften.',
  },
  {
    question: 'Was kostet ein Fineline Tattoo in München?',
    answer: 'Fineline Tattoos bei KishaTattoo München starten ab ca. 150–200 € für kleine Motive (5–8 cm). Mittlere Designs (10–15 cm) liegen bei 300–500 €, größere Linework-Projekte werden nach Stunden abgerechnet. Schreib uns für ein individuelles Angebot.',
  },
  {
    question: 'Wie lange hält ein Fineline Tattoo?',
    answer: 'Fineline Tattoos halten bei guter Pflege viele Jahre. Dünnere Linien können mit der Zeit etwas weicher werden — deshalb ist es wichtig, einen erfahrenen Künstler zu wählen, der die richtige Tiefe und Technik beherrscht. KishaTattoo hat jahrelange Erfahrung in präziser Linienführung.',
  },
  {
    question: 'Tut ein Fineline Tattoo mehr weh?',
    answer: 'Fineline Tattoos werden mit weniger Nadeln gestochen, was oft als weniger intensiv empfunden wird als breitere Styles. Allerdings arbeitet die Nadel präzise und konzentriert — die Schmerzintensität hängt stark von der Körperstelle ab.',
  },
  {
    question: 'Wo bekomme ich das beste Fineline Tattoo in München?',
    answer: 'KishaTattoo ist eine auf Fineline, Fine Line und Linework spezialisierte Tattoo-Künstlerin in München. Mit jahrelanger Erfahrung in präziser Linienführung — trainiert durch Irezumi-Technik — entstehen klare, dauerhafte Fineline-Tattoos, die auch nach Jahren scharf bleiben.',
  },
]

export default async function FinelineTattooMuenchen({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'fineline' })
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Fineline Tattoo München', description: 'Fineline und Fine Line Tattoo in München — botanische Motive, Single Needle, Linework. KishaTattoo München.', url: '/fineline-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Fineline Tattoo München', url: '/fineline-tattoo-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ)
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Fineline Tattoo München — KishaTattoo"
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

        {/* Decorative kanji 線 — line */}
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
          線
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

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="lw-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Fineline · Fine Line · Linework · München ]
            </span>
            <h2
              id="lw-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              Fineline Tattoo München — präzise bis zur letzten Linie
            </h2>
            <Link href="/works" style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
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
              Fineline Tattoos stehen für Präzision und Zurückhaltung. Eine einzige, perfekt gesetzte
              feine Linie sagt mehr als ein ganzer Komplex aus Flächen und Füllung. KishaTattoo
              ist spezialisiert auf Fine Line und Fineline Tattoos in München — vom minimalistischen
              Einzelmotiv bis zum botanischen Linework-Sleeve.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Die Grundlage für außergewöhnliche Fineline-Qualität liegt in der Irezumi-Technik: Wo
              jede Linie zählt und nichts korrigiert werden kann. Diese Disziplin fließt in jedes
              Fine Line Tattoo ein. Das Ergebnis: klare, dauerhafte Linien, die auch nach Jahren
              scharf bleiben — das Markenzeichen eines guten Fineline-Tattoos in München.
            </p>
          </div>

        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section
        aria-label="Fineline Tattoo Portfolio München — KishaTattoo"
        style={{
          background: '#F2F2F2',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
          paddingBottom: 'clamp(2rem, 4.2vw, 5rem)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Row 1: 2 small equal columns — exact same as works ROW4 (2 items) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <GWorkImage
              src="/images/work/4x4-dog-tattoo-fineline.jpg"
              alt="Fineline Hund Tattoo München — KishaTattoo Fine Line"
              sizes="50vw"
              style={{ height: 'clamp(356px, calc(8px + 24.17vw), 472px)' }}
            />
            <GWorkImage
              src="/images/work/4x4-owl-tattoo-fineline.jpg"
              alt="Fineline Eule Tattoo München — KishaTattoo Linework"
              sizes="50vw"
              style={{ height: 'clamp(356px, calc(8px + 24.17vw), 472px)' }}
            />
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
          <Link href="/works" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            Alle Fineline-Arbeiten ansehen →
          </Link>
        </div>
      </section>

      {/* ── SUBSTYLES ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="lw-substyle-heading"
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
            <h2 id="lw-substyle-heading" style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}>
              Fine Line Tattoo München — drei Varianten
            </h2>
          </div>
          <div className="g-about-steps" style={{ display: 'flex' }}>
            {[
              {
                title: 'Botanisches Fineline',
                body: 'Blumen, Farne, Zweige, Blätter — ausgeführt in einzelnen, präzisen Linien ohne Füllung. Botanische Fineline-Tattoos sind in München besonders gefragt: zeitlos elegant, körperschonend und langlebig.',
              },
              {
                title: 'Single Needle / Fine Line',
                body: 'Die dünnstmögliche Linie, gesetzt mit Single-Needle-Technik. Ideal für Schriften, Portraits, feine Details und minimalistische Motive. Fine Line Tattoos in München — das Spezialgebiet von KishaTattoo.',
              },
              {
                title: 'Minimalistisches Linework',
                body: 'Ein Kreis, ein Strich, eine Form. KishaTattoo findet die Essenz deiner Idee und setzt sie mit maximalem Effekt bei minimalem Mitteleinsatz um — Linework-Tattoos aus München, die durch Reduktion überzeugen.',
              },
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
              Was kostet ein Fineline Tattoo?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(1rem, 2vw, 2rem)' }}>
            {[
              { size: 'Mini (bis 5 cm)', price: 'ab 150 €', time: '1–2 Std.' },
              { size: 'Klein (5–15 cm)', price: 'ab 250 €', time: '2–4 Std.' },
              { size: 'Sleeve / Komposition', price: 'ab 800 € / Sitzung', time: '5–7 Std.' },
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
        aria-labelledby="lw-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="lw-faq-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
            }}
          >
            Häufige Fragen zum Fineline Tattoo
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
          <Link href="/japanisches-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Japanisches Tattoo München</Link>
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Grafik Tattoo München</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section data-nav-dark style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
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
