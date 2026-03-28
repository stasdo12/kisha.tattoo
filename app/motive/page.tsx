/**
 * MOTIVE HUB — Japanische Tattoo Motive — pillar page
 * Primary: "japanische tattoo motive", "irezumi motive", "japanisches tattoo bedeutung"
 * All motifs on one page: Drachen · Koi · Kitsune · Sakura · Tiger
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { faqSchema, breadcrumbSchema, serviceSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

export const metadata: Metadata = buildMetadata({
  title: 'Japanische Tattoo Motive — Irezumi Symbolik | KishaTattoo München',
  description:
    'Drachen, Koi, Kitsune, Sakura, Tiger — die bedeutendsten Motive des japanischen Irezumi. Symbolik, Bedeutung und kultureller Kontext erklärt. KishaTattoo München.',
  path: '/motive',
  keywords: [
    'japanische tattoo motive',
    'irezumi motive bedeutung',
    'japanisches tattoo bedeutung',
    'drachen tattoo bedeutung',
    'koi tattoo bedeutung',
    'kitsune tattoo bedeutung',
    'sakura tattoo bedeutung',
    'tiger tattoo bedeutung',
    'irezumi symbolik',
    'japanische tattoo münchen',
  ],
})

/* ── Motif data ──────────────────────────────────────────────────────────── */

const MOTIFS = [
  {
    id:      'drachen',
    kanji:   '龍',
    label:   'Drachen',
    reading: 'Ryū',
    imgSrc:  '/images/home/motif-dragon.jpg',
    imgAlt:  'Drachen Tattoo München — japanischer Ryū Irezumi',
    tagline: 'Weisheit · Stärke · Schutz',
    intro1:  'Der Ryū (龍) ist das bedeutendste Symbol der japanischen Mythologie. Im Gegensatz zum westlichen Drachen gilt der japanische Ryū als wohlwollendes Wesen — Hüter des Wassers, Beschützer der Unschuldigen, Verkörperung göttlicher Weisheit und Stärke. In der Irezumi-Tradition ist er ein Motiv, das den gesamten Körper füllen kann.',
    intro2:  'KishaTattoo spezialisiert sich auf großformatige Drachen-Kompositionen nach klassischer Irezumi-Lehre. Der Ryū schlingt sich um Arme, überspannt Rücken- oder Bruststücke — seine Bewegung folgt dem natürlichen Fluss der Muskulatur.',
    cols: [
      { title: 'Weisheit & Stärke',  body: 'Der japanische Ryū steht für Weisheit, Stärke und übernatürliche Kräfte. Als Symbol des Wassers verkörpert er Großzügigkeit — ein Beschützer der Natur und der Menschen, der Kraft ohne Grausamkeit trägt.' },
      { title: 'Komposition',        body: 'Im klassischen Irezumi schlingt sich der Drache organisch um den Körper — Sleeve, Rückenstück, Brustplatten. Seine Komposition folgt der Muskulatur des Trägers und macht den Körper zur Leinwand.' },
      { title: 'Varianten',          body: 'Ryū (Wasserdrache), Tatsu (Himmlischer Drache), Kinryū (Goldener Drache) — jede Variante trägt andere Symbolik. Kombinationen mit Wellen, Kirschblüten und Wolken sind klassisch in der Irezumi-Tradition.' },
    ],
    faq: [
      { question: 'Was bedeutet ein japanisches Drachen-Tattoo?',  answer: 'Der Ryū steht für Weisheit, Stärke und Schutz. Im Gegensatz zum westlichen Drachen gilt er als wohlwollendes Wesen — Hüter des Wassers und Beschützer der Unschuldigen. Ein Drachen-Tattoo ist ein Bekenntnis zu Stärke mit Würde.' },
      { question: 'Wie groß muss ein Drachen-Tattoo sein?',        answer: 'Drachen entfalten ihre volle Wirkung in großformatigen Kompositionen — Sleeve, Rückenstück oder Brustplatten. Kleinere Drachen sind möglich, verlieren aber die dynamische Komposition der klassischen Irezumi-Tradition.' },
      { question: 'Was kombiniert man mit einem Drachen Tattoo?',  answer: 'Klassische Kombinationen: Wellen (Nami), Kirschblüten (Sakura), Wolken, Donnerblitze, Koi-Fische. KishaTattoo entwirft jede Komposition individuell nach Irezumi-Prinzipien und dem Wunsch des Kunden.' },
    ],
    slug: 'drachen-tattoo-muenchen',
  },
  {
    id:      'koi',
    kanji:   '鯉',
    label:   'Koi',
    reading: 'Koi',
    imgSrc:  '/images/home/motif-koi.jpg',
    imgAlt:  'Koi Tattoo München — japanischer Karpfen Irezumi',
    tagline: 'Ausdauer · Transformation · Mut',
    intro1:  'Der Koi (鯉) gehört zu den ältesten und bedeutungsreichsten Motiven der japanischen Irezumi-Tradition. Die Legende beschreibt den Koi, der gegen den Strom schwimmt und sich am Wasserfall in einen Drachen verwandelt — ein Bild für Ausdauer, Transformation und die Kraft, Hindernisse zu überwinden.',
    intro2:  'KishaTattoo setzt Koi-Tattoos in München nach klassischer Irezumi-Kompositionslehre um. Der Koi schwimmt gegen den Strom der Muskulatur, umgeben von Wellen, Kirschblüten oder Lotusblüten — jede Linie, jede Schuppe mit Präzision und Respekt für die Tradition gesetzt.',
    cols: [
      { title: 'Ausdauer & Mut',    body: 'Der Koi schwimmt gegen den Strom — er symbolisiert Beharrlichkeit, Mut und den Willen, Schwierigkeiten zu überwinden. Ein Tattoo für Menschen, die ihren eigenen Weg gehen, unabhängig vom Widerstand.' },
      { title: 'Transformation',    body: 'Die Legende des Drachentor-Karpfens: Koi, die den Wasserfall am Drachentor erklimmen, verwandeln sich in Drachen. Ein Motiv für Transformation, Aufstieg und die Überwindung des eigenen Limits.' },
      { title: 'Komposition',       body: 'Koi harmonieren perfekt mit Wellen (Nami), Kirschblüten, Lotusblüten und Pfingstrosenblüten. Als Sleeve-Motiv oder Teil eines Rückenstücks einsetzbar — immer in Bewegung, immer gegen den Strom.' },
    ],
    faq: [
      { question: 'Was bedeutet ein Koi Tattoo im japanischen Kontext?',  answer: 'Der Koi steht für Ausdauer, Mut und Transformation. Die Legende des Drachentor-Karpfens beschreibt, wie Koi den Wasserfall erklimmen und sich in Drachen verwandeln — ein Symbol für persönlichen Aufstieg durch Beharrlichkeit.' },
      { question: 'Schwimmt der Koi beim Tattoo nach oben oder unten?',   answer: 'Im traditionellen Irezumi hat die Richtung Bedeutung: stromaufwärts symbolisiert aktiven Kampf und Überwindung. Stromabwärts kann Akzeptanz oder Vollendung bedeuten. KishaTattoo bespricht die Komposition individuell mit jedem Kunden.' },
      { question: 'Wie groß sollte ein Koi-Tattoo sein?',                 answer: 'Koi-Tattoos wirken besonders stark in mittleren bis großen Kompositionen — halber Sleeve, Oberschenkel, oder als Teil eines größeren Irezumi-Projekts. Auch kleinere Motive auf Unterarm oder Wade sind möglich und effektiv.' },
    ],
    slug: 'koi-tattoo-muenchen',
  },
  {
    id:      'kitsune',
    kanji:   '狐',
    label:   'Kitsune',
    reading: 'Kitsune',
    imgSrc:  '/images/home/motif-fox.jpg',
    imgAlt:  'Kitsune Tattoo München — japanischer Fuchs Irezumi',
    tagline: 'Intelligenz · Magie · Schutz',
    intro1:  'Der Kitsune (狐) — der japanische Fuchs — ist eines der faszinierendsten Wesen der japanischen Folklore. Kitsune gelten als intelligente, langlebige Tiere mit magischen Fähigkeiten, die mit dem Alter wachsen. Je mehr Schwänze (bis zu neun), desto mächtiger und weiser das Wesen.',
    intro2:  'Im Irezumi ist der Kitsune ein Motiv mit zwei Seiten: als Schutzgeist (Inari-Bote) steht er für Glück, Schutz und Weisheit. Als listiger Trickster verkörpert er Cleverness und die Fähigkeit, die eigene Realität zu gestalten.',
    cols: [
      { title: 'Intelligenz & List',     body: 'Kitsune gelten als die klügsten Tiere der japanischen Folklore. Sie symbolisieren Cleverness, Anpassungsfähigkeit und die Fähigkeit, Dinge aus verschiedenen Perspektiven zu sehen — Eigenschaften, die Träger eines Kitsune-Tattoos in sich erkennen.' },
      { title: 'Langlebigkeit & Magie', body: 'Mit jedem Jahrhundert wächst die Zahl der Schwänze — von einem bis zu neun. Neun Schwänze bedeuten göttliche Weisheit und übernatürliche Kräfte. Ein Kitsune mit mehreren Schwänzen ist ein Zeichen von Alter und tiefer spiritueller Stärke.' },
      { title: 'Schutz & Wächter',      body: 'Als Boten des Shintō-Gottes Inari gelten Kitsune als Beschützer gegen böse Geister. Kitsune-Tattoos tragen sowohl Schutz-Symbolik als auch den Aspekt des Tricksters — KishaTattoo gestaltet die Geschichte individuell.' },
    ],
    faq: [
      { question: 'Was symbolisiert ein Kitsune Tattoo?',                               answer: 'Der Kitsune steht für Intelligenz, Listigkeit, Langlebigkeit und magische Fähigkeiten. Als Inari-Bote symbolisiert er Schutz und Glück. Als Trickster steht er für Cleverness und die Fähigkeit, die eigene Realität zu gestalten.' },
      { question: 'Was ist der Unterschied zwischen Kitsune und einem normalen Fuchs?', answer: 'Ein Kitsune ist ein mythisches Wesen mit übernatürlichen Kräften — erkennbar an mehreren Schwänzen, oft umgeben von Flammen oder Mondlicht. Ein normaler Fuchs ist naturalistisch. Im Irezumi ist fast immer der Kitsune gemeint.' },
      { question: 'Wie viele Schwänze sollte mein Kitsune haben?',                     answer: 'Das hat symbolische Bedeutung: ein Schwanz — jung, kraftvoll. Drei bis fünf Schwänze — erfahren, magisch. Neun Schwänze — höchste göttliche Weisheit. KishaTattoo hilft dir, die richtige Anzahl für deine persönliche Geschichte zu wählen.' },
    ],
    slug: 'kitsune-tattoo-muenchen',
  },
  {
    id:      'sakura',
    kanji:   '桜',
    label:   'Sakura',
    reading: 'Sakura',
    imgSrc:  '/images/home/motif-sakura.jpg',
    imgAlt:  'Sakura Tattoo München — Kirschblüten Irezumi',
    tagline: 'Vergänglichkeit · mono no aware · Schönheit',
    intro1:  'Die Sakura (桜) — Kirschblüte — ist das nationalste Symbol Japans. Ihre Blütezeit dauert nur wenige Tage, bevor die Blüten im Wind verwehen. Eben diese Vergänglichkeit macht sie so tiefgründig: sie erinnert uns daran, jeden Augenblick voll zu leben — die japanische Philosophie des „mono no aware".',
    intro2:  'Im Irezumi ist Sakura eines der vielseitigsten Motive: als eigenständiges Stück oder als Füllmotiv, das großformatige Kompositionen aus Drachen, Koi oder Tiger umschließt und in den Körper einbettet. KishaTattoo setzt Kirschblüten in München mit der Präzision und Sensibilität um, die dieses stille Motiv verdient.',
    cols: [
      { title: 'Vergänglichkeit',        body: 'Die Kirschblüte blüht nur wenige Tage — „mono no aware" (物の哀れ) ist das japanische Konzept der Vergänglichkeit, die durch Schönheit rührt. Ein Sakura-Tattoo erinnert seinen Träger daran, den gegenwärtigen Moment zu schätzen.' },
      { title: 'Memento Mori',           body: 'In der Irezumi-Tradition trägt Sakura auch eine tiefere philosophische Dimension: die Akzeptanz der eigenen Endlichkeit. Wie die Blüten im Wind fallen, fällt auch der Mensch — und genau das macht das Leben kostbar.' },
      { title: 'Kompositorische Rolle', body: 'Sakura ist in der Irezumi-Tradition oft das Verbindungselement — es füllt Räume zwischen Drachen, Koi und Tiger, schafft Tiefe und Bewegung. Gleichzeitig ist es stark genug, allein zu stehen: als Sleeve, Rückenstück oder Einzelmotiv.' },
    ],
    faq: [
      { question: 'Was bedeutet ein Sakura Tattoo im japanischen Sinne?', answer: 'Sakura steht für die Vergänglichkeit des Lebens und seine Schönheit — das japanische Konzept „mono no aware". Gleichzeitig ist es ein Memento Mori: die Akzeptanz, dass alles endet, macht jeden Augenblick wertvoller.' },
      { question: 'Kann Sakura als alleiniges Motiv bestehen?',           answer: 'Ja. Kirschblüten können ein eigenständiges Tattoo-Konzept tragen — als Sleeve, Brustplatte oder Einzelmotiv. KishaTattoo komponiert Sakura sowohl als Hauptmotiv als auch als Begleitelement in größeren Irezumi-Projekten.' },
      { question: 'Mit welchen Motiven kombiniert man Sakura?',           answer: 'Klassische Kombinationen: Drachen (Ryū), Koi, Tiger, Phönix, Oni-Masken. Sakura umhüllt diese Motive mit einer Atmosphäre von Vergänglichkeit und Schönheit. Auch mit Schriftzeichen oder Mondmotiven sehr wirkungsvoll.' },
    ],
    slug: 'sakura-tattoo-muenchen',
  },
  {
    id:      'tiger',
    kanji:   '虎',
    label:   'Tiger',
    reading: 'Tora',
    imgSrc:  '/images/home/motif-tiger.jpg',
    imgAlt:  'Tiger Tattoo München — japanischer Tora Irezumi',
    tagline: 'Kraft · Schutz · Langlebigkeit',
    intro1:  'Der Tora (虎) — Tiger — ist im japanischen Irezumi einer der vier Himmelsrichtungs-Könige: Er herrscht über den Norden und das Wind-Element. Als Gegenstück zum Drachen (Süden und Wasser) bildet er eine der kraftvollsten kompositorischen Spannungen in der Irezumi-Tradition.',
    intro2:  'Tiger-Tattoos strahlen unmittelbare Kraft aus. KishaTattoo setzt den Tora in München nach klassischer Irezumi-Komposition um — mit starken schwarzen Linien, kräftigen Schattierungen und der dynamischen Körperspannung, die ein Tiger-Motiv verlangt.',
    cols: [
      { title: 'Kraft & Mut',     body: 'Der Tiger steht für physische Kraft, Mut und die Fähigkeit, böse Geister und Krankheiten zu vertreiben. Er ist ein mächtiger Schutzgeist — ein Tattoo, das seinen Träger mit Stärke und Tapferkeit verbindet.' },
      { title: 'Wind & Norden',   body: 'Als Himmelsrichtungs-König herrscht der Tora über den Norden und das Wind-Element. In einer Tiger-Drachen-Komposition stehen die mächtigsten Gegenpole des Irezumi gegenüber — Wind und Wasser, Norden und Süden.' },
      { title: 'Langlebigkeit',   body: 'In der japanischen Mythologie wird dem Tiger eine Lebensspanne von tausend Jahren zugeschrieben. Als Tattoo-Motiv trägt er daher auch die Bedeutung von Langlebigkeit, Ausdauer und spiritueller Stärke über die Zeit.' },
    ],
    faq: [
      { question: 'Was bedeutet ein japanisches Tiger-Tattoo?',                answer: 'Der Tora steht für Kraft, Mut, Langlebigkeit und Schutz vor dem Bösen. Er ist der Herrscher des Nordens und des Wind-Elements — ein Symbol roher Stärke, aber auch spirituellen Schutzes. Eines der kraftvollsten Motive im Irezumi.' },
      { question: 'Tiger oder Drachen — welches Tattoo ist stärker?',          answer: 'Tiger (Norden, Wind) und Drache (Süden, Wasser) sind im Irezumi gleichwertige Gegensätze — das mächtigste Spannungspaar der japanischen Mythologie. Eine Tiger-Drachen-Komposition ist deshalb eines der bedeutungsstärksten Tattoos überhaupt.' },
      { question: 'Wie wird ein Tiger im Irezumi typischerweise dargestellt?', answer: 'Klassisch: der Tiger in Bewegung, mit geöffnetem Maul, umgeben von Bambus oder Kiefern im Wind. Starke schwarze Konturen, kräftige Schattierungen, dynamische Komposition. KishaTattoo entwirft jeden Tiger individuell nach Körperbau und Bildsprache des Kunden.' },
    ],
    slug: 'tiger-tattoo-muenchen',
  },
]

const ALL_FAQ = MOTIFS.flatMap((m) => m.faq)

/* ── Page ────────────────────────────────────────────────────────────────── */

export default function MotiveHub() {
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: 'Japanische Tattoo Motive', description: 'Irezumi Motive — Drachen, Koi, Kitsune, Sakura, Tiger. Bedeutung und Symbolik erklärt.', url: '/motive' })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Japanische Tattoo Motive', url: '/motive' }])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(ALL_FAQ.map((f) => ({ question: f.question, answer: f.answer })))
      )}} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Japanische Tattoo Motive — KishaTattoo München"
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
          Japanische<br />Tattoo Motive
        </h1>

        {/* Floating kanji cluster */}
        <div
          aria-hidden="true"
          className="g-motive-hero-kanji"
          style={{
            position: 'absolute',
            left: '50%',
            top: '48%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 4rem)',
            fontSize: 'clamp(3rem, 7vw, 9rem)',
            lineHeight: 0.9,
            color: '#0D0D0D',
            opacity: 0.06,
            userSelect: 'none',
            pointerEvents: 'none',
            letterSpacing: '0.1em',
          }}
        >
          龍鯉狐桜虎
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
          Drachen · Koi · Kitsune · Sakura · Tiger —
          die bedeutendsten Symbole des japanischen Irezumi erklärt.
        </p>

        <GNav activePath="/motive" theme="light" />
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}>
        <div className="g-container">
          <div style={{ paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
              Irezumi — die Sprache der Körperkunst
            </h2>
          </div>

          <div className="g-text-cols" style={{ display: 'flex', justifyContent: 'flex-end', gap: 'clamp(2rem, 4.2vw, 5rem)' }}>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              Im japanischen Irezumi ist jedes Motiv eine Geschichte — keine Dekoration.
              Drachen schützen, Koi kämpfen, Kitsune betrügen und beschützen zugleich,
              Sakura erinnert an die Vergänglichkeit, Tiger tragen Wind in sich.
              Jede Linie trägt Bedeutung.
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              KishaTattoo in München spezialisiert sich auf authentisches Irezumi —
              klassische Motivsprache, individuelle Komposition, keine Standardmotive.
              Auf dieser Seite findest du die Bedeutung der wichtigsten Irezumi-Motive.
            </p>
          </div>

          {/* Motif navigation grid */}
          <div
            className="g-motive-nav-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '1px',
              marginTop: 'clamp(2rem, 3.5vw, 4rem)',
              background: '#0D0D0D',
              border: '1px solid #0D0D0D',
            }}
          >
            {MOTIFS.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  padding: 'clamp(1.5rem, 2.5vw, 3rem) 1rem',
                  background: '#F2F2F2',
                  textDecoration: 'none',
                  textAlign: 'center',
                }}
              >
                <span style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', lineHeight: 1, color: '#0D0D0D' }}>{m.kanji}</span>
                <span style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', fontWeight: 500 }}>{m.label}</span>
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>{m.reading}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOTIF SECTIONS ───────────────────────────────────────────────── */}
      {MOTIFS.map((m, idx) => (
        <section
          key={m.id}
          id={m.id}
          style={{
            background: idx % 2 === 0 ? '#F2F2F2' : '#EBEBEB',
            padding: 'clamp(3rem, 5.5vw, 7rem) 0',
            borderTop: '2px solid #0D0D0D',
          }}
        >
          <div className="g-container">

            {/* Section header */}
            <div className="g-motive-section-header" style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: '2rem', paddingBottom: '1.25rem', borderBottom: '2px solid #0D0D0D', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)' }}>
              <div>
                <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)', display: 'block', marginBottom: '0.5rem' }}>{m.reading} — {m.tagline}</span>
                <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
                  {m.label} Tattoo — Bedeutung & Symbolik
                </h2>
              </div>
              <div
                aria-hidden="true"
                style={{
                  fontSize: 'clamp(4rem, 8vw, 10rem)',
                  lineHeight: 1,
                  color: '#0D0D0D',
                  opacity: 0.12,
                  userSelect: 'none',
                  flexShrink: 0,
                }}
              >
                {m.kanji}
              </div>
            </div>

            {/* Intro: photo left (homepage proportions) + text right */}
            <div className="g-motive-intro" style={{ display: 'grid', gridTemplateColumns: 'clamp(200px, 26vw, 400px) 1fr', gap: 'clamp(1.5rem, 3vw, 4rem)', marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)', alignItems: 'start' }}>
              <div style={{ position: 'relative', height: 'clamp(380px, calc(180px + 16.67vw), 480px)', overflow: 'hidden' }}>
                <Image
                  src={m.imgSrc}
                  alt={m.imgAlt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 430px) 100vw, 50vw"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.75rem)' }}>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
                  {m.intro1}
                </p>
                <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>
                  {m.intro2}
                </p>
              </div>
            </div>

            {/* Symbolism columns */}
            <div
              className="g-motive-sym-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px',
                background: '#0D0D0D',
                border: '1px solid #0D0D0D',
                marginBottom: 'clamp(1.5rem, 2.5vw, 3rem)',
              }}
            >
              {m.cols.map((col) => (
                <div
                  key={col.title}
                  style={{
                    background: idx % 2 === 0 ? '#F2F2F2' : '#EBEBEB',
                    padding: 'clamp(1.25rem, 2vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <h3 style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', lineHeight: 'var(--g-lh-bm)' }}>{col.title}</h3>
                  <p style={{ fontSize: 'var(--g-bs)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{col.body}</p>
                </div>
              ))}
            </div>

            {/* FAQ for this motif */}
            <div style={{ marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
              {m.faq.map((item, i) => (
                <div key={i} className="g-motive-faq-item" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 4vw, 5rem)', padding: 'clamp(1rem, 1.8vw, 1.75rem) 0', borderBottom: '1px solid rgba(13,13,13,0.2)' }}>
                  <h3 style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D' }}>{item.question}</h3>
                  <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.75)' }}>{item.answer}</p>
                </div>
              ))}
            </div>

            {/* CTA for this motif */}
            <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', flexWrap: 'wrap', alignItems: 'center', paddingTop: '0.5rem' }}>
              <Link
                href="/booking"
                style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  background: '#0D0D0D',
                  color: '#F2F2F2',
                  fontSize: 'var(--g-bm)',
                  textDecoration: 'none',
                }}
              >
                {m.label} Tattoo buchen →
              </Link>
              <Link
                href="/japanisches-tattoo-muenchen"
                style={{
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  border: '1px solid #0D0D0D',
                  color: '#0D0D0D',
                  fontSize: 'var(--g-bm)',
                  textDecoration: 'none',
                }}
              >
                Japanisches Tattoo München
              </Link>
            </div>

          </div>
        </section>
      ))}

      {/* ── WORKS TEASER ─────────────────────────────────────────────────── */}
      <section style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0', borderTop: '2px solid #0D0D0D' }}>
        <div className="g-container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', maxWidth: '30rem' }}>
              Alle Motive im Kontext — echte Arbeiten ansehen
            </h2>
            <div style={{ display: 'flex', gap: 'clamp(1rem, 2vw, 2rem)', flexWrap: 'wrap' }}>
              <Link href="/works" style={{ display: 'inline-block', padding: '0.6rem 1.5rem', background: '#0D0D0D', color: '#F2F2F2', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
                Portfolio ansehen →
              </Link>
              <Link href="/booking" style={{ display: 'inline-block', padding: '0.6rem 1.5rem', border: '1px solid #0D0D0D', color: '#0D0D0D', fontSize: 'var(--g-bm)', textDecoration: 'none' }}>
                Termin buchen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <GFooter />
    </main>
  )
}
