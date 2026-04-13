/**
 * AGB — Allgemeine Geschäftsbedingungen
 * German only — no translations
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = {
  title: 'AGB — Allgemeine Geschäftsbedingungen | KishaTattoo München',
  description: 'Allgemeine Geschäftsbedingungen von KishaTattoo München — Terminbuchung, Anzahlung, Stornierung, Haftung und weitere Regelungen.',
  robots: { index: false, follow: true },
}

const SECTIONS = [
  {
    id: 'geltungsbereich',
    title: 'Geltungsbereich',
    items: [
      {
        heading: '§ 1 Geltungsbereich',
        body: 'Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Leistungen von Kisha (nachfolgend „Tätowiererin"), die im Rahmen der Tätowiertätigkeit unter dem Namen KishaTattoo in München erbracht werden. Mit der Buchung eines Termins erkennt der Kunde diese AGB an.',
      },
    ],
  },
  {
    id: 'terminbuchung',
    title: 'Terminbuchung',
    items: [
      {
        heading: '§ 2 Terminvereinbarung & Buchung',
        body: 'Ein Termin gilt erst nach schriftlicher Bestätigung durch die Tätowiererin und Eingang der Anzahlung als verbindlich gebucht. Die Buchung erfolgt ausschließlich über das Online-Buchungsformular oder nach direkter Absprache per E-Mail bzw. Direktnachricht.',
      },
      {
        heading: 'Mindestalter',
        body: 'Das Mindestalter für ein Tattoo beträgt 18 Jahre. Eine Tätowierung Minderjähriger — auch mit Einwilligung der Erziehungsberechtigten — wird nicht durchgeführt. Die Tätowiererin behält sich vor, einen gültigen Lichtbildausweis zu verlangen.',
      },
    ],
  },
  {
    id: 'anzahlung',
    title: 'Anzahlung',
    items: [
      {
        heading: '§ 3 Anzahlung',
        body: 'Für jeden gebuchten Termin ist eine Anzahlung von 50–150 € fällig (je nach Projektgröße). Die Anzahlung wird auf den Gesamtpreis angerechnet. Sie dient der Absicherung des Termins und der Designarbeit.',
      },
      {
        heading: 'Nicht erstattungsfähig',
        body: 'Die Anzahlung ist grundsätzlich nicht erstattungsfähig, es sei denn, der Termin wird seitens der Tätowiererin abgesagt. Bei Absage durch die Tätowiererin wird die Anzahlung vollständig zurückerstattet oder auf einen Ersatztermin übertragen.',
      },
    ],
  },
  {
    id: 'stornierung',
    title: 'Stornierung & Absage',
    items: [
      {
        heading: '§ 4 Stornierung durch den Kunden',
        body: 'Bei Stornierung oder Verschiebung des Termins mit weniger als 72 Stunden Vorankündigung verfällt die Anzahlung. Bei rechtzeitiger Absage (mehr als 72 Stunden vor dem Termin) kann die Anzahlung einmalig auf einen neuen Termin übertragen werden.',
      },
      {
        heading: 'Keine Erschöpfung (No-Show)',
        body: 'Erscheint der Kunde ohne vorherige Absage nicht zum Termin, verfällt die Anzahlung vollständig. Für eine erneute Buchung ist eine neue Anzahlung erforderlich.',
      },
      {
        heading: 'Absage durch die Tätowiererin',
        body: 'Im Falle einer Absage durch die Tätowiererin (z. B. Krankheit) wird der Termin kostenfrei auf einen nächstmöglichen Termin verschoben. Die Anzahlung bleibt erhalten oder wird nach Kundenwunsch zurückerstattet.',
      },
    ],
  },
  {
    id: 'gesundheit',
    title: 'Gesundheit & Eignung',
    items: [
      {
        heading: '§ 5 Gesundheitliche Voraussetzungen',
        body: 'Der Kunde versichert, dass er zum Zeitpunkt des Termins gesund und nüchtern (kein Alkohol, keine blutdünnenden Mittel ohne ärztliche Absprache) erscheint. Personen unter Alkohol- oder Drogeneinfluss werden nicht tätowiert.',
      },
      {
        heading: 'Ausschlussgründe',
        body: 'Die Tätowiererin behält sich vor, den Termin abzulehnen bei: Hauterkrankungen im zu tätowierenden Bereich, fieberhaften Infekten, Schwangerschaft oder Stillzeit sowie bestimmten Vorerkrankungen (z. B. Gerinnungsstörungen, Diabetes, immunsuppressive Therapie). In solchen Fällen ist eine ärztliche Freigabe erforderlich.',
      },
    ],
  },
  {
    id: 'leistung',
    title: 'Leistung & Design',
    items: [
      {
        heading: '§ 6 Designerstellung & Urheberrecht',
        body: 'Das Tattoo-Design wird individuell für den Kunden erstellt und verbleibt im Urheberrecht der Tätowiererin. Der Kunde erhält das Recht zur Nutzung des Motivs als Körperschmuck. Eine Weitergabe oder Vervielfältigung des Designs ohne Zustimmung ist nicht gestattet.',
      },
      {
        heading: 'Designänderungen',
        body: 'Das finale Design wird am Tattoo-Tag gezeigt. Kleine Korrekturen sind möglich. Wesentliche Änderungen, die über die ursprüngliche Absprache hinausgehen, können eine Verschiebung des Termins oder eine Anpassung des Preises nach sich ziehen.',
      },
    ],
  },
  {
    id: 'preis',
    title: 'Preise & Zahlung',
    items: [
      {
        heading: '§ 7 Preisgestaltung',
        body: 'Die Preise richten sich nach Größe, Komplexität und Dauer des Tattoos. Der endgültige Preis wird vor dem Termin besprochen und bestätigt. Stundensätze und Mindestpreise sind auf Anfrage erhältlich.',
      },
      {
        heading: 'Zahlungsmodalitäten',
        body: 'Der Restbetrag ist am Tag des Termins in bar oder per Überweisung zu begleichen. Die Anzahlung wird vom Gesamtbetrag abgezogen. Ratenzahlung ist nach individueller Absprache möglich.',
      },
    ],
  },
  {
    id: 'haftung',
    title: 'Haftung & Nachsorge',
    items: [
      {
        heading: '§ 8 Haftungsbeschränkung',
        body: 'Die Tätowiererin haftet nicht für Komplikationen, die auf mangelnde Nachsorge durch den Kunden, individuelle Körperreaktionen oder eine falsche Angabe gesundheitlicher Vorerkrankungen zurückzuführen sind. Die Hygienestandards entsprechen den gesetzlichen Vorgaben und werden gewissenhaft eingehalten.',
      },
      {
        heading: 'Nachbesserung (Touch-up)',
        body: 'Ein kostenloser Touch-up-Termin kann nach vollständiger Abheilung (frühestens 6–8 Wochen nach dem Tattoo-Tag) vereinbart werden, sofern die Nachsorgehinweise eingehalten wurden. Touch-ups aufgrund von Nichtbeachtung der Pflegeanleitung oder durch Sonneneinstrahlung entstehender Verblassung sind kostenpflichtig.',
      },
    ],
  },
  {
    id: 'datenschutz',
    title: 'Datenschutz & Foto',
    items: [
      {
        heading: '§ 9 Datenschutz',
        body: 'Personenbezogene Daten werden ausschließlich zur Terminverwaltung und Kommunikation verwendet und nicht an Dritte weitergegeben. Es gelten die Bestimmungen der DSGVO.',
      },
      {
        heading: 'Fotorechte',
        body: 'Die Tätowiererin behält sich vor, Fotos des fertigen Tattoos für Portfolio- und Marketingzwecke (Instagram, Website) zu veröffentlichen. Der Kunde kann einer Veröffentlichung jederzeit schriftlich widersprechen. Fotos, die Gesicht oder persönliche Merkmale zeigen, werden nur mit ausdrücklicher Einwilligung veröffentlicht.',
      },
    ],
  },
  {
    id: 'schluss',
    title: 'Schlussbestimmungen',
    items: [
      {
        heading: '§ 10 Anwendbares Recht & Gerichtsstand',
        body: 'Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist München. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.',
      },
      {
        heading: 'Änderungen der AGB',
        body: 'Die Tätowiererin behält sich vor, diese AGB jederzeit zu ändern. Die jeweils aktuelle Fassung ist auf der Website einsehbar. Stand: April 2025.',
      },
    ],
  },
]

export default function AgbPage() {
  return (
    <main id="main-content" style={{ background: '#F2F2F2' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="AGB — KishaTattoo München"
        style={{ background: '#F2F2F2', position: 'relative' }}
      >
        <GHeader theme="light" />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '72px var(--g-pad) clamp(3rem, 8vw, 9rem)',
          }}
        >
          {/* Left: tags */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              fontSize: 'var(--g-bs)',
              lineHeight: 1,
              color: '#0D0D0D',
              flexShrink: 0,
            }}
          >
            <span>[ Buchung ]</span>
            <span>[ Anzahlung ]</span>
            <span>[ Stornierung ]</span>
            <span>[ Haftung ]</span>
          </div>

          {/* Right: H1 */}
          <h1
            style={{
              fontSize: 'var(--g-xl)',
              lineHeight: 'var(--g-lh-xl)',
              color: '#0D0D0D',
              width: 'clamp(18rem, 32vw, 36rem)',
              letterSpacing: 'var(--g-ls)',
            }}
          >
            Allgemeine{'\n'}Geschäfts&shy;bedingungen
          </h1>
        </div>
      </section>

      {/* ── SECTIONS ──────────────────────────────────────────────────────── */}
      <section
        aria-label="AGB Inhalt"
        style={{
          background: '#F2F2F2',
          padding: '0 var(--g-pad) clamp(3rem, 6vw, 7.5rem)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(1.5rem, 2.78vw, 2.5rem)',
          }}
        >
          {SECTIONS.map((section) => (
            <div
              key={section.id}
              className="g-faq-row"
              style={{
                borderTop: '2px solid #0D0D0D',
                paddingTop: 'clamp(1rem, 1.39vw, 1.25rem)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '2rem',
              }}
            >
              {/* Section title */}
              <h2
                style={{
                  fontSize: 'var(--g-l)',
                  lineHeight: 'var(--g-lh-l)',
                  color: '#0D0D0D',
                  letterSpacing: 'var(--g-ls)',
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {section.title}
              </h2>

              {/* Items */}
              <div
                className="g-faq-items"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(1rem, 1.11vw, 1rem)',
                  width: 'clamp(20rem, 47.5vw, 57rem)',
                  flexShrink: 0,
                }}
              >
                {section.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'clamp(0.75rem, 1.39vw, 1.25rem)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 'var(--g-s)',
                        lineHeight: 'var(--g-lh-s)',
                        color: '#0D0D0D',
                        letterSpacing: 'var(--g-ls)',
                        maxWidth: 'clamp(20rem, 22.5vw, 27rem)',
                      }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      style={{
                        fontSize: 'var(--g-bm)',
                        lineHeight: 'var(--g-lh-bm)',
                        color: '#0D0D0D',
                        letterSpacing: 'var(--g-ls)',
                        maxWidth: 'clamp(20rem, 21.875vw, 26.25rem)',
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{ background: '#E8E8E8' }}>
        <div
          style={{
            padding: 'clamp(2rem, 4.167vw, 5rem) var(--g-pad)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span
              style={{
                fontSize: 'var(--g-tag)',
                color: '#0D0D0D',
                letterSpacing: 'var(--g-ls)',
              }}
            >
              [ Fragen? ]
            </span>
            <p
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                letterSpacing: 'var(--g-ls)',
                maxWidth: 'clamp(18rem, 30vw, 36rem)',
              }}
            >
              Bei Fragen zu den AGB stehe ich gerne zur Verfügung.
            </p>
          </div>

          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem 2rem',
              background: '#0D0D0D',
              color: '#F2F2F2',
              fontSize: 'var(--g-bm)',
              lineHeight: 1,
              letterSpacing: 'var(--g-ls)',
              textDecoration: 'none',
              flexShrink: 0,
              transition: 'opacity 0.15s',
            }}
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
