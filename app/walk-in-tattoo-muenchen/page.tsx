/**
 * WALK IN TATTOO MÜNCHEN — Service landing page
 * Primary keyword: "walk in tattoo münchen" (170/mo, KD 18)
 * Cluster: walk in tattoo, spontan tattoo münchen, tattoo ohne termin münchen
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Walk In Tattoo München — Spontan & ohne Termin',
  description:
    'Walk In Tattoo München — spontan stechen ohne langen Vorlauf. KishaTattoo: Walk-In für ausgewählte Motive. Jetzt anfragen.',
  path: '/walk-in-tattoo-muenchen',
  keywords: [
    'walk in tattoo münchen',
    'walk in tattoo',
    'spontan tattoo münchen',
    'tattoo ohne termin münchen',
    'kurzfristiger tattoo termin münchen',
    'tattoo münchen spontan',
    'tattoo münchen walk in',
    'tattoo termin münchen',
  ],
})

const FAQ = [
  {
    question: 'Was ist ein Walk-In Tattoo?',
    answer: 'Ein Walk-In Tattoo bedeutet: du kommst ohne lange Vorlauf-Planung, ohne monatelange Wartezeit — und lässt dich spontan stechen. Bei KishaTattoo München ist Walk-In für ausgewählte Motive und freie Slots möglich. Schreib uns einfach kurz an.',
  },
  {
    question: 'Kann ich bei KishaTattoo München ohne Termin vorbeikommen?',
    answer: 'Direkt ohne Anmeldung ist es nicht möglich — aber kurzfristige Walk-In Termine sind regelmäßig verfügbar. Schreib uns per WhatsApp oder Instagram, nenn dein Motiv und Wunschdatum, und wir melden uns meist noch am selben Tag.',
  },
  {
    question: 'Welche Motive eignen sich für ein Walk-In Tattoo?',
    answer: 'Für Walk-In Slots eignen sich kleinere bis mittelgroße Motive: Fineline-Designs, einfache Japanische Symbole, kleine Schriften oder geometrische Formen. Für großformatige Irezumi-Projekte planen wir gemeinsam mehrere Sitzungen.',
  },
  {
    question: 'Was kostet ein Walk-In Tattoo in München?',
    answer: 'Die Preise sind identisch mit regulären Terminen: kleine Motive ab ca. 80–150 €, je nach Größe und Komplexität. Eine genaue Einschätzung bekommst du nach kurzem Austausch über dein Motiv. Alle Preise auf unserer Preisseite.',
  },
  {
    question: 'Wie bereite ich mich auf ein spontanes Tattoo vor?',
    answer: 'Auch für Walk-In Tattoos gilt: gut schlafen, gegessen haben, keinen Alkohol. Trag bequeme Kleidung, die die Körperstelle gut zugänglich macht. Mehr Details findest du auf unserer Aftercare-Seite.',
  },
]

export default function WalkInTattooMuenchen() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Walk In Tattoo München — KishaTattoo', description: 'Walk-In Tattoo München: spontan und kurzfristig stechen lassen. Fineline, Japanisch, Grafik.', url: '/walk-in-tattoo-muenchen' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Walk In Tattoo München', url: '/walk-in-tattoo-muenchen' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ.map((f) => ({ question: f.question, answer: f.answer })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Walk In Tattoo München — KishaTattoo"
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
          Walk In Tattoo<br />München
        </h1>

        {/* Decorative kanji 今 — now / the present moment */}
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
          今
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
          Spontan stechen lassen in München —
          kurzfristige Walk-In Termine bei KishaTattoo verfügbar.
        </p>

        <GNav activePath="/" theme="light" />
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Spontan · Kurzfristig · Individuell ]
            </span>
            <h2
              id="walkin-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              Walk In Tattoo München — wie es funktioniert
            </h2>
            <Link
              href="/booking"
              style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              [ Termin anfragen ]
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
              Walk In Tattoo in München bedeutet bei KishaTattoo: kein monatelanger Vorlauf,
              kein komplizierter Prozess. Du schreibst uns mit deiner Idee — Motiv, Größe,
              Körperstelle — und wir prüfen, ob ein kurzfristiger Slot für dich möglich ist.
              Spontane Entscheidungen sind willkommen.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Walk-In Slots eignen sich für kleinere und mittlere Motive: Fineline-Designs,
              einfache japanische Symbole, Schriften, geometrische Formen. Auch für
              Ergänzungen bestehender Tattoos. Großformatige Irezumi-Projekte planen wir
              gemeinsam in einem regulären Beratungsgespräch.
            </p>
          </div>

        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-steps-heading"
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
              id="walkin-steps-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}
            >
              In drei Schritten zum spontanen Tattoo
            </h2>
          </div>

          <div className="g-about-steps" style={{ display: 'flex' }}>
            {[
              {
                num: '一',
                title: 'Kurz anfragen',
                body: 'Schreib uns per WhatsApp oder Instagram: Motiv, Größe, Körperstelle und Wunschdatum. Keine langen Formulare, kein Wartezimmer.',
              },
              {
                num: '二',
                title: 'Slot bestätigen',
                body: 'Wir melden uns meist noch am selben Tag. Wenn ein passender Walk-In Slot frei ist, bestätigen wir Termin und besprechen kurz das Design.',
              },
              {
                num: '三',
                title: 'Stechen lassen',
                body: 'Gut ausgeschlafen, gegessen, bequeme Kleidung — und du bist bereit. Das Tattoo wird frisch und präzise umgesetzt. Kein Kompromiss bei der Qualität.',
              },
            ].map((step, i) => (
              <div
                key={step.title}
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
                <span style={{ fontSize: 'var(--g-l)', lineHeight: 1, color: 'rgba(13,13,13,0.15)' }} aria-hidden="true">{step.num}</span>
                <h3 style={{ fontSize: 'var(--g-s)', lineHeight: 'var(--g-lh-s)', color: '#0D0D0D' }}>{step.title}</h3>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="walkin-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="walkin-faq-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
            }}
          >
            FAQ — Walk In Tattoo München
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

      {/* ── RELATED ───────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>Weitere Seiten →</span>
          <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Preise München</Link>
          <Link href="/linework-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Fineline Tattoo München</Link>
          <Link href="/grafik-tattoo-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Munich</Link>
          <Link href="/booking" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Termin buchen</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        data-nav-dark
        style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            Walk In Tattoo München — jetzt kurzfristig anfragen
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
            Termin anfragen
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
