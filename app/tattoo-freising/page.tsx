/**
 * TATTOO FREISING — Local SEO landing page
 * Primary: "tattoo freising" (260/mo, KD 6)
 * Secondary: "tätowierer freising" · "tattoo studio freising" · "tattoo münchen freising"
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { GWorkImage } from '@/components/graphic/GWorkImage'
import { buildMetadata } from '@/lib/seo'
import { locationServiceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Tattoo Freising — Tätowierer & Tattoo Studio in der Nähe | KishaTattoo',
  description:
    'Tattoo Freising: KishaTattoo München — 25 Minuten von Freising. Japanisches Irezumi, Fineline, Grafik Tattoo. Preisgekrönte Tattoo-Künstlerin. Termin buchen.',
  path: '/tattoo-freising',
  keywords: [
    'tattoo freising',
    'tätowierer freising',
    'tattoo studio freising',
    'tattoo münchen freising',
    'tattoostudio freising',
    'tattoo künstler freising',
    'tattoo in der nähe freising',
    'fineline tattoo freising',
    'japanisches tattoo freising',
  ],
})

const FAQ = [
  {
    question: 'Gibt es ein gutes Tattoo Studio in Freising?',
    answer: 'In Freising selbst gibt es wenige spezialisierte Tattoo-Studios. KishaTattoo in München ist nur 25 Minuten entfernt — per S-Bahn (S1 Richtung München) in ca. 30 Minuten erreichbar. Für Kunden aus Freising, die höchste Qualität suchen, ist München die erste Wahl.',
  },
  {
    question: 'Wie weit ist es von Freising nach München zum Tätowierer?',
    answer: 'Von Freising nach München sind es ca. 35 km — mit der S1 ca. 30 Minuten, mit dem Auto (über die A92) ca. 25 Minuten. Das KishaTattoo-Atelier ist gut von Freising, Neufahrn, Hallbergmoos und Eching erreichbar.',
  },
  {
    question: 'Was kostet ein Tattoo für Kunden aus Freising?',
    answer: 'Die Preise bei KishaTattoo sind unabhängig vom Wohnort: kleine Motive ab 150 €, mittlere Designs ab 400 €, Sleeve und Backpiece nach Stunden (150–200 €/Std.). Viele Kunden aus Freising buchen größere Projekte und kommen für mehrere Sitzungen nach München.',
  },
  {
    question: 'Welche Tattoo-Stile gibt es in der Nähe von Freising?',
    answer: 'KishaTattoo in München bietet Japanisches Irezumi (traditionell und großformatig), Fineline & Fine Line Tattoo (botanisch, minimalistisch), und Grafik Tattoo (Blackwork, Illustration). Alle Stile werden als Custom-Design auf den individuellen Körper abgestimmt.',
  },
  {
    question: 'Kann man als Kunde aus Freising direkt einen Termin buchen?',
    answer: 'Ja — über die Booking-Seite oder per WhatsApp/Instagram DM. Kunden aus Freising und Umgebung (Neufahrn, Hallbergmoos, Eching, Garching) sind herzlich willkommen. Für große Projekte beginnt alles mit einem kostenlosen Beratungsgespräch.',
  },
]

export default function TattooFreising() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        locationServiceSchema({ cityName: 'Freising', citySlug: 'freising', travelMinutes: 25 })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Tattoo Freising', url: '/tattoo-freising' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(FAQ)
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Tattoo Freising — KishaTattoo München"
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
          Tattoo Freising —<br />KishaTattoo München
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
          彫
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
          Aus Freising in 25 Minuten zu KishaTattoo München —
          Irezumi, Fineline und Grafik Tattoo auf Weltklasse-Niveau.
        </p>

        <GNav activePath="/" theme="light" />
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="freising-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">

          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Tattoo Studio · Freising · München ]
            </span>
            <h2
              id="freising-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              Tätowierer in der Nähe von Freising
            </h2>
            <Link href="/booking" style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Termin buchen ]
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
              Wer in Freising nach einem erstklassigen Tätowierer sucht, findet direkt vor der
              Haustür wenig Auswahl — aber in München, nur 25 Minuten entfernt, die beste Adresse:
              KishaTattoo. Spezialisiert auf Japanisches Irezumi, Fineline und Grafik Tattoo —
              mehrfach ausgezeichnet auf dem Munich Tattoo Convention.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Kunden aus Freising, Neufahrn, Hallbergmoos, Eching und dem gesamten Münchner Norden
              buchen bei KishaTattoo für Tattoos, die ein Leben lang halten. Per S1 in 30 Minuten
              oder mit dem Auto über die A92 in 25 Minuten — ein kurzer Weg für ein Tattoo,
              das keine Kompromisse macht.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHY KISHATATTOO ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="freising-why-heading"
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
              id="freising-why-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}
            >
              Warum Kunden aus Freising zu KishaTattoo fahren
            </h2>
          </div>

          <div className="g-about-steps" style={{ display: 'flex' }}>
            {[
              {
                title: 'Spezialisierung statt Massenware',
                body: 'KishaTattoo ist auf drei Stile spezialisiert: Japanisches Irezumi, Fineline und Grafik Tattoo. Diese Tiefe in der Spezialisierung findest du in einem kleinen Tattoo-Studio in Freising nicht — dafür lohnt die kurze Fahrt nach München.',
              },
              {
                title: 'Auszeichnungen & Erfahrung',
                body: '1. Platz Munich Tattoo Convention 2023 & 2024 — japanisches Tattoo. Über fünf Jahre Erfahrung in Irezumi und Fineline. Kunden aus dem Münchner Norden vertrauen KishaTattoo für ihre wichtigsten Tattoo-Projekte.',
              },
              {
                title: 'Gut erreichbar',
                body: 'Von Freising: S-Bahn S1 Richtung München, ca. 30 Minuten. Mit dem Auto über die A92, ca. 25 Minuten. Das Atelier liegt in München mit guter Anbindung an öffentliche Verkehrsmittel. Kostenlose Beratung vorab per WhatsApp.',
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

      {/* ── STYLES ────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="freising-styles-heading"
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
              id="freising-styles-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}
            >
              Tattoo-Stile für Kunden aus Freising
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              {
                title: 'Japanisches Irezumi — Freising & München',
                body: 'Traditionelles japanisches Tattoo in München — Koi, Drachen, Oni-Masken, Kirschblüten. KishaTattoo ist auf Irezumi spezialisiert und bringt jahrelange Erfahrung in großformatige Kompositionen ein. Für Kunden aus Freising der direkteste Weg zu echtem Irezumi in Bayern.',
                href: '/japanisches-tattoo-muenchen',
                link: 'Mehr zu Japanischem Tattoo',
              },
              {
                title: 'Fineline Tattoo — Feine Linien aus München',
                body: 'Botanische Motive, Single-Needle-Technik, minimalistisches Design — Fineline Tattoos für Kunden aus Freising und Umgebung. Zarte, präzise Linien, die zeitlos bleiben. KishaTattoo setzt Fine Line Tattoos in München mit der Disziplin der Irezumi-Technik um.',
                href: '/linework-tattoo-muenchen',
                link: 'Mehr zu Fineline Tattoo',
              },
              {
                title: 'Grafik Tattoo — Blackwork & Illustration',
                body: 'Geometrisch, illustrativ, ausdrucksstark — Grafik Tattoos für alle, die klare Formen und starke Schwarzflächen mögen. Custom-Design für jedes Motiv. Für Kunden aus Freising und dem Münchner Norden: eine Fahrt nach München, ein Tattoo für das Leben.',
                href: '/grafik-tattoo-muenchen',
                link: 'Mehr zu Grafik Tattoo',
              },
            ].map((row, i) => (
              <div
                key={row.title}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'clamp(2rem, 4vw, 5rem)',
                  padding: 'clamp(1rem, 1.8vw, 1.75rem) 0',
                  borderBottom: '1px solid rgba(13,13,13,0.2)',
                  alignItems: 'start',
                }}
              >
                <h3 style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', fontWeight: 500 }}>{row.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{row.body}</p>
                  <Link href={row.href} style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px', alignSelf: 'flex-start' }}>
                    {row.link} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery preview ───────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: '0 0 clamp(2rem, 4.2vw, 5rem)' }}>
        <div className="g-container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Row 1: left large + right 2×2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <GWorkImage
                src="/images/work/middle-graphic-body-flower-tattoo.jpg"
                alt="Grafik Blumen Körper Tattoo München — Kisha"
                sizes="50vw"
                style={{ height: 'clamp(720px, 50vw, 820px)' }}
              />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '12px', height: 'clamp(720px, 50vw, 820px)' }}>
                <GWorkImage src="/images/work/4x4-japan-fox-tattoo-graphic.jpg" alt="Japanisches Fuchs Tattoo München — Kisha"  sizes="25vw" />
                <GWorkImage src="/images/work/4x4-rabbit-tattoo-graphic.jpg"    alt="Grafik Hase Tattoo München — Kisha"         sizes="25vw" />
                <GWorkImage src="/images/work/4x4-sakura-tattoo.jpg"            alt="Sakura Tattoo München — Kisha"              sizes="25vw" />
                <GWorkImage src="/images/work/4x4-birds-tattoo-graphic.jpg"     alt="Grafik Vögel Tattoo München — Kisha"        sizes="25vw" />
              </div>
            </div>
            <Link href="/works" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
              Alle Arbeiten ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="freising-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="freising-faq-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#0D0D0D',
              marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              paddingBottom: '1.25rem',
              borderBottom: '2px solid #0D0D0D',
            }}
          >
            Häufige Fragen — Tattoo Freising
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

      {/* ── NEARBY CITIES ─────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(1.5rem, 2.5vw, 3rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>Auch erreichbar aus →</span>
          <Link href="/tattoo-neufahrn" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Neufahrn</Link>
          <Link href="/tattoo-eching" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Eching</Link>
          <Link href="/tattoo-preise-muenchen" style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>Tattoo Preise München</Link>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section data-nav-dark style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            Tattoo Freising — 25 Minuten zu KishaTattoo München
          </p>
          <Link href="/booking" style={{ display: 'inline-block', padding: '0.875rem 2.5rem', background: '#F2F2F2', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Termin buchen
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
