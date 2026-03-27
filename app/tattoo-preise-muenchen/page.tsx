/**
 * TATTOO PREISE MÜNCHEN — Pricing landing page
 * Primary: "tattoo preise münchen" / "was kostet ein tattoo münchen"
 * Cluster: tattoo kosten (2400) · tattoo preise (1600) · was kostet tattoo (590×3) · tattoo preis (410) · kosten oberarm (320) · rücken kosten (260) · sleeve kosten (170)
 * Total cluster: ~7000+/mo, KD 4–34
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Tattoo Preise München 2026 — Was kostet ein Tattoo? | KishaTattoo',
  description:
    'Tattoo Preise in München: kleine Tattoos ab 150 €, Oberarm ab 400 €, Sleeve ab 800 € pro Sitzung. Transparente Kosten, individuelle Angebote. KishaTattoo München.',
  path: '/tattoo-preise-muenchen',
  keywords: [
    'tattoo preise münchen',
    'tattoo kosten münchen',
    'was kostet ein tattoo münchen',
    'tattoo preis münchen',
    'wie teuer ist tattoo münchen',
    'fineline tattoo münchen preise',
    'japanisches tattoo münchen kosten',
    'tattoo kosten oberarm münchen',
    'sleeve tattoo kosten münchen',
    'rücken tattoo kosten münchen',
    'kleine tattoos preise münchen',
  ],
})

const PRICE_TABLE = [
  {
    size: 'Mini (bis 5 cm)',
    style: 'Fineline / Schrift / Symbol',
    price: 'ab 150 €',
    time: '1–2 Std.',
    desc: 'Kleine, präzise Motive — ideal für Handgelenk, Finger, Knöchel',
  },
  {
    size: 'Klein (5–10 cm)',
    style: 'Fineline · Grafik · Japanisch',
    price: 'ab 250 €',
    time: '2–3 Std.',
    desc: 'Einzelne Motive mit Details — Unterarm, Schlüsselbein, Rippen',
  },
  {
    size: 'Mittel (10–20 cm)',
    style: 'Alle Stile',
    price: 'ab 400 €',
    time: '3–5 Std.',
    desc: 'Komplexe Einzelmotive oder kleinere Kompositionen',
  },
  {
    size: 'Oberarm / Halbärmel',
    style: 'Irezumi · Grafik · Linework',
    price: 'ab 800 € / Sitzung',
    time: '5–7 Std.',
    desc: 'Typischerweise 2–4 Sitzungen für ein vollständiges Halfset',
  },
  {
    size: 'Full Sleeve',
    style: 'Irezumi · Grafik',
    price: 'ab 2.500 € gesamt',
    time: '15–30 Std. total',
    desc: 'Mehrere Sitzungen über 6–18 Monate — individuell kalkuliert',
  },
  {
    size: 'Rückenstück / Backpiece',
    style: 'Japanisches Irezumi',
    price: 'ab 3.500 € gesamt',
    time: '20–40 Std. total',
    desc: 'Großformatige Projekte nach traditioneller Irezumi-Kompositionslehre',
  },
]

const FAQ = [
  {
    question: 'Was kostet ein kleines Tattoo in München?',
    answer: 'Kleine Tattoos (bis 5 cm) kosten bei KishaTattoo München ab 150 €. Der genaue Preis hängt vom Motiv, der Detailgenauigkeit und der Körperstelle ab. Fineline- und Schriftzug-Tattoos in dieser Größe starten meist zwischen 150–250 €.',
  },
  {
    question: 'Was kostet ein Oberarm Tattoo in München?',
    answer: 'Ein Oberarm-Tattoo (Halbärmel) kostet bei KishaTattoo ab 800 € pro Sitzung. Für ein vollständiges Halfset sind typischerweise 2–4 Sitzungen nötig, also ca. 1.600–3.200 € gesamt. Große japanische Kompositionen können mehr kosten — individuell kalkuliert.',
  },
  {
    question: 'Was kostet ein Full Sleeve Tattoo?',
    answer: 'Ein vollständiger Sleeve (ganzer Arm) kostet bei KishaTattoo München ab 2.500 € gesamt, verteilt auf mehrere Sitzungen über 6–18 Monate. Japanische Irezumi-Sleeves mit komplexer Komposition können bis zu 5.000–8.000 € kosten.',
  },
  {
    question: 'Was kostet ein Rückentattoo (Backpiece)?',
    answer: 'Großformatige Rückentattoos im Irezumi-Stil starten ab 3.500 € und können je nach Komplexität und Stundenzahl bis zu 10.000 € und mehr kosten. Diese Projekte sind mehrjährige Vorhaben — pro Sitzung werden 5–7 Stunden gearbeitet.',
  },
  {
    question: 'Wie werden Tattoos in München abgerechnet?',
    answer: 'Bei KishaTattoo wird nach Motiv und Aufwand kalkuliert: kleine Motive haben Festpreise, größere Projekte werden nach Stunden abgerechnet. Der Stundensatz liegt zwischen 150–200 €. Jedes Projekt bekommt ein individuelles Angebot nach persönlicher Konsultation.',
  },
  {
    question: 'Was kostet ein Fineline Tattoo in München?',
    answer: 'Fineline Tattoos bei KishaTattoo München starten ab 150 € für mini Motive. Mittelgroße Fineline-Designs (10–15 cm) kosten ca. 300–500 €. Botanische Linework-Sleeves werden nach Stunden berechnet. Fineline erfordert hohe Präzision — günstiger Preis bedeutet oft schlechte Qualität.',
  },
  {
    question: 'Wieviel kostet ein japanisches Tattoo in München?',
    answer: 'Japanische Irezumi-Tattoos starten bei KishaTattoo bei ca. 200–300 € für kleine Motive. Klassische Irezumi-Projekte (Sleeve, Backpiece) werden nach Stunden abgerechnet — typisch 150–200 €/Stunde. Große japanische Kompositionen sind mehrjährige Projekte mit einem Gesamtbudget ab 2.500 €.',
  },
]

export default function TattooPreiseMuenchen() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Tattoo Preise München', description: 'Tattoo Kosten und Preise in München — KishaTattoo. Kleine Tattoos ab 150 €, Sleeve ab 2.500 €. Transparente Preisübersicht.', url: '/tattoo-preise-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Preise München', url: '/tattoo-preise-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ)
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Tattoo Preise München — KishaTattoo"
        style={{
          position: 'relative',
          height: 'clamp(680px, 90vh, 900px)',
          background: '#0D0D0D',
          overflow: 'hidden',
        }}
      >
        <GLogoBar theme="dark" />

        <h1
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            width: 'clamp(18rem, 52vw, 900px)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#F2F2F2',
          }}
        >
          Tattoo Preise<br />München
        </h1>

        <p
          style={{
            position: 'absolute',
            bottom: '24px',
            right: 'var(--g-pad)',
            width: 'clamp(16rem, 28vw, 420px)',
            fontSize: 'var(--g-bm)',
            lineHeight: 1.5,
            color: 'rgba(242,242,242,0.8)',
            textAlign: 'right',
          }}
        >
          Transparente Tattoo Kosten in München — von kleinen Fineline-Motiven
          bis zum großformatigen Irezumi-Backpiece.
        </p>

        <GNav activePath="/" theme="dark" />

        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 'clamp(30px, 4.6vw, 60px)',
            left: 'var(--g-pad)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '170px',
          }}
        >
          <span style={{ fontSize: 'clamp(48px, 4.44vw, 64px)', lineHeight: 1, color: '#F2F2F2' }}>円</span>
          <span style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: 'rgba(242,242,242,0.55)' }}>
            Faire Preise für außergewöhnliche Qualität
          </span>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="preise-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Tattoo Kosten · München · 2026 ]
            </span>
            <h2
              id="preise-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              Was kostet ein Tattoo in München?
            </h2>
            <Link href="/booking" style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Angebot anfragen ]
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
              Tattoo Preise in München variieren stark — je nach Studio, Künstler, Stil und Größe.
              Bei KishaTattoo werden kleine Motive mit Festpreisen angeboten, größere Projekte nach
              Stunden kalkuliert. Der Stundensatz beträgt 150–200 €. Qualität hat ihren Preis —
              ein gutes Tattoo bleibt ein Leben lang.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Jedes Tattoo-Projekt beginnt mit einer persönlichen Konsultation. Danach erhältst du
              ein individuelles Angebot, das Motiv, Größe, Stil und Zeitaufwand berücksichtigt.
              Keine versteckten Kosten — nur transparente Tattoo Preise für München und Umgebung.
            </p>
          </div>
        </div>
      </section>

      {/* ── PRICE TABLE ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="preise-table-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <h2
              id="preise-table-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}
            >
              Tattoo Preisübersicht München 2026
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PRICE_TABLE.map((row, i) => (
              <div
                key={row.size}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: 'clamp(1rem, 2vw, 2.5rem)',
                  padding: 'clamp(1rem, 1.8vw, 1.75rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.15)',
                  background: i % 2 === 0 ? 'transparent' : 'rgba(13,13,13,0.02)',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D', fontWeight: 500 }}>{row.size}</span>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.55)' }}>{row.style}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{row.desc}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
                  <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{row.price}</span>
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.55)' }}>{row.time}</span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.55)', marginTop: '1.5rem' }}>
            * Alle Preise sind Richtwerte. Das endgültige Angebot wird nach persönlicher Konsultation erstellt.
            Anzahlung bei Buchung erforderlich. Preise inkl. MwSt.
          </p>
        </div>
      </section>

      {/* ── WHAT AFFECTS PRICE ────────────────────────────────────────────── */}
      <section
        aria-labelledby="preise-factors-heading"
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
              id="preise-factors-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}
            >
              Was beeinflusst die Tattoo Kosten?
            </h2>
          </div>

          <div className="g-about-steps" style={{ display: 'flex' }}>
            {[
              {
                title: 'Größe & Komplexität',
                body: 'Größe ist der wichtigste Kostenfaktor — ein 5 cm Motiv braucht 1 Stunde, ein Full Sleeve 20–30 Stunden. Komplexe Designs mit feinen Details, vielen Flächen oder schwierigen Körperstellen kosten mehr als einfache Motive.',
              },
              {
                title: 'Stil des Tattoos',
                body: 'Japanisches Irezumi und Fineline erfordern besondere Expertise und mehr Sorgfalt als einfachere Stile. Traditionelles Irezumi mit Farbflächen benötigt mehr Sitzungen. Fineline braucht extreme Präzision — das schlägt sich im Preis nieder.',
              },
              {
                title: 'Erfahrung des Künstlers',
                body: 'Ein erfahrener Tätowierer kostet mehr — und das zu Recht. KishaTattoo hat jahrelange Spezialisierung in Irezumi und Fineline. Ein günstiges Tattoo sitzt ein Leben lang — Qualität spart langfristig Kosten für Korrekturen.',
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

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="preise-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="preise-faq-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
            }}
          >
            Häufige Fragen zu Tattoo Preisen in München
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

      {/* ── STYLE CARDS ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="preise-styles-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div
            style={{
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
            }}
          >
            <h2
              id="preise-styles-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}
            >
              Was entsteht für dein Budget?
            </h2>
          </div>

          <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', flexWrap: 'wrap' }}>
            {[
              {
                href: '/linework-tattoo-muenchen',
                style: 'Fineline Tattoo',
                price: 'ab 150 €',
                desc: 'Botanische Linework, geometrische Formen, feine Schriften — höchste Präzision auf kleinstem Raum.',
              },
              {
                href: '/japanisches-tattoo-muenchen',
                style: 'Japanisches Irezumi',
                price: 'ab 200 €',
                desc: 'Koi, Drachen, Tiger — traditionelle Kompositionen nach klassischer Irezumi-Bildsprache.',
              },
              {
                href: '/grafik-tattoo-muenchen',
                style: 'Grafik & Blackwork',
                price: 'ab 150 €',
                desc: 'Custom Grafik, Blackwork, geometrische Tattoos — starke, zeitlose Bildsprache.',
              },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  flex: '1 1 clamp(14rem, 28vw, 380px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: 'clamp(1.25rem, 2vw, 2rem)',
                  border: '1px solid rgba(13,13,13,0.2)',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
                  <span style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{card.style}</span>
                  <span style={{ fontSize: 'var(--g-bm)', color: 'rgba(13,13,13,0.55)', whiteSpace: 'nowrap' }}>{card.price}</span>
                </div>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{card.desc}</p>
                <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', marginTop: 'auto' }}>Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section data-nav-dark style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            Individuelles Angebot für dein Tattoo in München
          </p>
          <Link href="/booking" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#F2F2F2', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Termin & Angebot anfragen
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
