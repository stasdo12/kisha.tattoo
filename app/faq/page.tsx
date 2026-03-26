/**
 * FAQ — Full FAQ page
 * Design: Exact same style as home page FAQ section (g-faq-grid, g-faq-item)
 * + additional question categories
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'FAQ — Häufige Fragen | KishaTattoo München',
  description:
    'Antworten auf alle Fragen rund um Tattoo-Buchung, Vorbereitung, Heilung, Preise und japanisches Irezumi bei KishaTattoo in München.',
  path: '/faq',
  keywords: [
    'tattoo faq münchen',
    'tattoo fragen münchen',
    'tattoo preise münchen',
    'tattoo vorbereitung münchen',
    'irezumi fragen münchen',
    'tattoo heilung münchen',
  ],
})

const FAQ_BOOKING = [
  {
    question: 'Wie läuft die Buchung bei KishaTattoo ab?',
    answer: 'Sende eine Anfrage über das Buchungsformular oder per Instagram DM mit deiner Idee, dem gewünschten Stil und der Körperstelle. Kisha meldet sich innerhalb von 48 Stunden für eine erste Konsultation.',
  },
  {
    question: 'Wie weit im Voraus muss ich buchen?',
    answer: 'Für kleinere Projekte ist oft ein Termin innerhalb von 2–4 Wochen möglich. Große Projekte wie Backpieces oder Sleeves werden meist 1–3 Monate im Voraus geplant. Schreib uns einfach an — wir finden eine Lösung.',
  },
  {
    question: 'Gibt es eine Anzahlung?',
    answer: 'Ja, für alle Projekte wird eine Anzahlung fällig, die beim finalen Termin vom Gesamtpreis abgezogen wird. Die Höhe wird individuell beim Beratungsgespräch festgelegt.',
  },
  {
    question: 'Kann ich meinen Termin verschieben?',
    answer: 'Terminverschiebungen sind mit mindestens 72 Stunden Vorlaufzeit möglich. Kurzfristige Absagen unter 48 Stunden können zum Verlust der Anzahlung führen. Wir bitten um frühzeitige Kommunikation.',
  },
]

const FAQ_PRICING = [
  {
    question: 'Was kostet ein Tattoo bei KishaTattoo?',
    answer: 'Alle Projekte werden nach Stunden abgerechnet. Kleinere Motive starten ab ca. 150–200 € (Stundensatz + Mindestgebühr), große Projekte wie Sleeves oder Backpieces ab 800–1200 € pro Sitzung. Ein genaues Angebot erhältst du nach der Konsultation.',
  },
  {
    question: 'Warum kostet ein gutes Tattoo so viel?',
    answer: 'Ein Tattoo ist für das Leben. Custom-Design, präzise Technik und hochwertige Materialien erfordern Zeit und Expertise. Billige Tattoos kosten am Ende mehr — in Abdeckungen, Korrekturen und Nacharbeit.',
  },
  {
    question: 'Welche Zahlungsmethoden werden akzeptiert?',
    answer: 'Bar, Überweisung und Kartenzahlung. Die Anzahlung wird nach der Konsultation per Überweisung geleistet. Bargeldzahlung am Sitzungstag ist möglich.',
  },
]

const FAQ_PREPARATION = [
  {
    question: 'Wie bereite ich mich auf eine Tattoo-Sitzung vor?',
    answer: 'Sei ausgeschlafen, hydratisiert und gegessen. Vermeide Alkohol und blutverdünnende Medikamente (Aspirin, Ibuprofen) 24 Stunden vorher. Trage lockere, bequeme Kleidung, die die Tätowierstelle gut zugänglich macht.',
  },
  {
    question: 'Kann ich bei der Sitzung essen oder trinken?',
    answer: 'Unbedingt! Bring Snacks und Getränke mit — besonders bei langen Sitzungen ist das wichtig, um den Blutzucker stabil zu halten und Kreislaufprobleme zu vermeiden.',
  },
  {
    question: 'Darf ich jemanden mitbringen?',
    answer: 'Eine Begleitperson zur Unterstützung ist willkommen. Aus Platzgründen bitten wir jedoch, die Begleitung auf eine Person zu begrenzen.',
  },
  {
    question: 'Ich bin krank — soll ich trotzdem kommen?',
    answer: 'Nein. Bei Erkältung, Fieber oder anderen Infektionen verschieben wir den Termin. Dein Immunsystem braucht alle Ressourcen für die Heilung — tattowieren wir nicht.',
  },
]

const FAQ_AFTERCARE = [
  {
    question: 'Wie pflege ich ein frisches Tattoo?',
    answer: 'Die ersten 3–5 Tage: Abdeckung nach Anweisung, sanft reinigen mit mildem Seifenwasser, dünn eincremen mit empfohlener Salbe. Keine Sonne, kein Schwimmen, kein Kratzen. Detaillierte Pflegeanleitung: /aftercare',
  },
  {
    question: 'Wann ist ein Tattoo vollständig geheilt?',
    answer: 'Die Oberflächenheilung dauert 2–3 Wochen. Die vollständige Tiefenheilung (Dermalschicht) 3–6 Monate. Erst dann kann beurteilt werden, ob Nacharbeit nötig ist.',
  },
  {
    question: 'Kann ich nach dem Tattoo Sport treiben?',
    answer: 'Leichte Aktivitäten nach 2–3 Tagen möglich. Intensiver Sport, Schwimmbad, Sauna und direktes Sonnenbaden erst nach vollständiger Abheilung (2–3 Wochen minimum).',
  },
]

const FAQ_STYLE = [
  {
    question: 'Was ist der Unterschied zwischen Irezumi und Japanese Style?',
    answer: 'Traditionelles Irezumi folgt jahrhundertealten Kompositionsregeln: Motive wie Koi, Drachen, Oni werden nach der Körpermuskulatur ausgerichtet, Übergänge zwischen Motiven sind klar definiert. "Japanese Style" ist oft eine freiere, modernere Interpretation.',
  },
  {
    question: 'Wie lange dauert ein großes Irezumi-Projekt?',
    answer: 'Ein vollständiger Rücken: 40–80 Stunden, aufgeteilt auf 10–20 Sitzungen über 1–3 Jahre. Ein Full Sleeve: 20–40 Stunden über 6–18 Monate. Die Heilungspausen zwischen den Sitzungen sind fester Teil des Prozesses.',
  },
  {
    question: 'Arbeitet KishaTattoo auch mit eigenen Design-Ideen?',
    answer: 'Absolut — Custom-Design ist der Standard, kein Sonderservice. Kisha entwickelt jedes Motiv individuell für deine Körperform, Hautton und persönliche Geschichte. Referenzbilder helfen dabei, deine Vision zu präzisieren.',
  },
  {
    question: 'Kann man ein Cover-up Tattoo machen?',
    answer: 'Ja, Cover-ups sind möglich. Die Machbarkeit hängt von Größe, Dunkelheit und Alter des bestehenden Tattoos ab. Schicke ein Foto deines alten Tattoos bei der Anfrage mit — Kisha bewertet die Optionen.',
  },
]

const ALL_FAQ = [...FAQ_BOOKING, ...FAQ_PRICING, ...FAQ_PREPARATION, ...FAQ_AFTERCARE, ...FAQ_STYLE]

export default function FaqPage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(ALL_FAQ)) }}
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
          }}
        >
          Frequently<br />Asked Questions
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
          Buchung · Preise · Vorbereitung · Aftercare · Stile
        </p>

        <GNav activePath="/" theme="light" />
      </section>

      {/* ── FAQ SECTIONS ──────────────────────────────────────────────────── */}
      {[
        { id: 'booking',     label: 'Buchung & Termin',    items: FAQ_BOOKING },
        { id: 'pricing',     label: 'Preise & Zahlung',    items: FAQ_PRICING },
        { id: 'preparation', label: 'Vorbereitung',        items: FAQ_PREPARATION },
        { id: 'aftercare',   label: 'Aftercare & Heilung', items: FAQ_AFTERCARE },
        { id: 'style',       label: 'Stile & Design',      items: FAQ_STYLE },
      ].map((section, si) => (
        <section
          key={section.id}
          aria-labelledby={`faq-${section.id}`}
          style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
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
              {/* Left: portrait (only first section) or label block */}
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
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    height: '100%',
                    paddingBottom: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.35)', writingMode: 'vertical-rl', transform: 'rotate(180deg)', letterSpacing: '0.1em' }}>
                    {String(si + 1).padStart(2, '0')}
                  </span>
                </div>
              )}

              {/* Spacer */}
              <div aria-hidden="true" />

              {/* Right: heading + questions */}
              <div className="g-faq-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2
                  id={`faq-${section.id}`}
                  style={{
                    fontSize: 'var(--g-l)',
                    lineHeight: 'var(--g-lh-l)',
                    color: '#0D0D0D',
                    maxWidth: '30rem',
                  }}
                >
                  {section.label}
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {section.items.map((item, i) => (
                    <div key={i} className="g-faq-item">
                      <span className="g-faq-item__num g-tag">Question №{i + 1}</span>
                      <h3 className="g-faq-item__q">{item.question}</h3>
                      <p className="g-faq-item__a">{item.answer}</p>
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
            Noch Fragen? Schreib uns einfach.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/booking" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#0D0D0D', color: '#F2F2F2', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              Termin buchen
            </Link>
            <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
              Kontakt
            </Link>
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
