/**
 * MOTIVE PAGES — Japanese tattoo motif landing pages
 * Routes: /motive/drachen | koi | kitsune | sakura | tiger -tattoo-muenchen
 * Design: Graphic design system — matches existing style landing pages exactly
 */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GLogoBar } from '@/components/graphic/GLogoBar'
import { GNav } from '@/components/graphic/GNav'
import { GFooter } from '@/components/graphic/GFooter'

/* ── Types ──────────────────────────────────────────────────────────────────── */

interface FaqItem  { question: string; answer: string }
interface MeaningCol { title: string; body: string }
interface MotifPage {
  slug:         string
  title:        string
  description:  string
  keywords:     string[]
  kanji:        string
  kanjiCaption: string
  heroSrc:      string
  heroAlt:      string
  h1Line1:      string
  h1Line2:      string
  heroSubtitle: string
  intro1:       string
  intro2:       string
  gallery:      { src: string; alt: string }[]
  meaningH2:    string
  meaningCols:  MeaningCol[]
  faq:          FaqItem[]
  related:      { href: string; label: string }[]
  ctaText:      string
}

/* ── Data ───────────────────────────────────────────────────────────────────── */

const MOTIFS: Record<string, MotifPage> = {

  'drachen-tattoo-muenchen': {
    slug:         'drachen-tattoo-muenchen',
    title:        'Drachen Tattoo München — Ryū & Japanisches Irezumi | KishaTattoo',
    description:  'Japanisches Drachen Tattoo (Ryū) in München — Weisheit, Stärke, übernatürlicher Schutz. KishaTattoo: authentisches Irezumi nach klassischer Kompositionslehre. Termin buchen.',
    keywords:     ['drachen tattoo münchen', 'ryū tattoo münchen', 'japanisches drachen tattoo münchen', 'dragon tattoo munich', 'irezumi drachen münchen', 'drachen sleeve münchen'],
    kanji:        '龍',
    kanjiCaption: 'Ryū — der Drache der japanischen Mythologie',
    heroSrc:      'https://picsum.photos/seed/dragon-hero/1920/1080',
    heroAlt:      'Drachen Tattoo München — japanisches Ryū Irezumi',
    h1Line1:      'Drachen Tattoo',
    h1Line2:      'München',
    heroSubtitle: 'Ryū — Weisheit, Stärke und übernatürlicher Schutz. Eines der mächtigsten Motive des japanischen Irezumi.',
    intro1:       'Der Ryū (龍) ist das bedeutendste Symbol der japanischen Mythologie. Im Gegensatz zum westlichen Drachen gilt der japanische Ryū als wohlwollendes Wesen — Hüter des Wassers, Beschützer der Unschuldigen, Verkörperung göttlicher Weisheit und Stärke. In der Irezumi-Tradition ist er ein Motiv, das den gesamten Körper füllen kann.',
    intro2:       'KishaTattoo spezialisiert sich auf großformatige Drachen-Kompositionen nach klassischer Irezumi-Lehre. Der Ryū schlingt sich um Arme, überspannt Rücken- oder Bruststücke — seine Bewegung folgt dem natürlichen Fluss der Muskulatur. Jedes Drachen-Tattoo ist ein Einzelstück, individuell entworfen für Körper und Geschichte des Trägers.',
    gallery: [
      { src: 'https://picsum.photos/seed/dragon-g1/600/700', alt: 'Drachen Tattoo München — Ryū Sleeve Irezumi' },
      { src: 'https://picsum.photos/seed/dragon-g2/600/700', alt: 'Japanischer Drache Tattoo München — Rückenstück' },
      { src: 'https://picsum.photos/seed/dragon-g3/600/700', alt: 'Ryū Tattoo München — schwarzgrau Blackwork' },
      { src: 'https://picsum.photos/seed/dragon-g4/600/700', alt: 'Drachen Irezumi München — mit Wellen und Kirschblüten' },
      { src: 'https://picsum.photos/seed/dragon-g5/600/700', alt: 'Drachen Tattoo München — großformatige Komposition' },
      { src: 'https://picsum.photos/seed/dragon-g6/600/700', alt: 'Japanischer Ryū und Wolken — Irezumi München' },
    ],
    meaningH2:   'Die Symbolik des Ryū',
    meaningCols: [
      { title: 'Weisheit & Stärke',  body: 'Der japanische Ryū steht für Weisheit, Stärke und übernatürliche Kräfte. Als Symbol des Wassers verkörpert er Großzügigkeit — ein Beschützer der Natur und der Menschen, der Kraft ohne Grausamkeit trägt.' },
      { title: 'Komposition',        body: 'Im klassischen Irezumi schlingt sich der Drache organisch um den Körper — Sleeve, Rückenstück, Brustplatten. Seine Komposition folgt der Muskulatur des Trägers und macht den Körper zur Leinwand.' },
      { title: 'Varianten',          body: 'Ryū (Wasserdrache), Tatsu (Himmlischer Drache), Kinryū (Goldener Drache) — jede Variante trägt andere Symbolik. Kombinationen mit Wellen, Kirschblüten und Wolken sind klassisch in der Irezumi-Tradition.' },
    ],
    faq: [
      { question: 'Was bedeutet ein japanisches Drachen-Tattoo?',      answer: 'Der Ryū steht für Weisheit, Stärke und Schutz. Im Gegensatz zum westlichen Drachen gilt er als wohlwollendes Wesen — Hüter des Wassers und Beschützer der Unschuldigen. Ein Drachen-Tattoo ist ein Bekenntnis zu Stärke mit Würde.' },
      { question: 'Wie groß muss ein Drachen-Tattoo sein?',            answer: 'Drachen entfalten ihre volle Wirkung in großformatigen Kompositionen — Sleeve, Rückenstück oder Brustplatten. Kleinere Drachen sind möglich, verlieren aber die dynamische Komposition der klassischen Irezumi-Tradition.' },
      { question: 'Was kombiniert man mit einem Drachen Tattoo?',      answer: 'Klassische Kombinationen: Wellen (Nami), Kirschblüten (Sakura), Wolken, Donnerblitze, Koi-Fische. KishaTattoo entwirft jede Komposition individuell nach Irezumi-Prinzipien und dem Wunsch des Kunden.' },
    ],
    related: [
      { href: '/motive/koi-tattoo-muenchen',    label: 'Koi Tattoo München' },
      { href: '/motive/tiger-tattoo-muenchen',  label: 'Tiger Tattoo München' },
      { href: '/japanisches-tattoo-muenchen',   label: 'Japanisches Tattoo München' },
    ],
    ctaText: 'Dein Drachen-Tattoo in München',
  },

  'koi-tattoo-muenchen': {
    slug:         'koi-tattoo-muenchen',
    title:        'Koi Tattoo München — Japanischer Karpfen & Irezumi | KishaTattoo',
    description:  'Japanisches Koi Tattoo in München — Ausdauer, Erfolg im Kampf, Mut. KishaTattoo: traditionelle Irezumi-Kompositionen mit Koi-Motiven. Termin jetzt buchen.',
    keywords:     ['koi tattoo münchen', 'karpfen tattoo münchen', 'japanisches koi tattoo münchen', 'koi irezumi münchen', 'koi fish tattoo munich', 'koi sleeve münchen'],
    kanji:        '鯉',
    kanjiCaption: 'Koi — der Karpfen, Symbol des beharrlichen Aufstiegs',
    heroSrc:      'https://picsum.photos/seed/koi-hero/1920/1080',
    heroAlt:      'Koi Tattoo München — japanisches Irezumi Karpfen-Motiv',
    h1Line1:      'Koi Tattoo',
    h1Line2:      'München',
    heroSubtitle: 'Der Koi — Symbol für Ausdauer, Erfolg im Kampf und den Mut, Schwierigkeiten zu überwinden.',
    intro1:       'Der Koi (鯉) gehört zu den ältesten und bedeutungsreichsten Motiven der japanischen Irezumi-Tradition. Die Legende beschreibt den Koi, der gegen den Strom schwimmt und sich am Wasserfall in einen Drachen verwandelt — ein Bild für Ausdauer, Transformation und die Kraft, Hindernisse zu überwinden.',
    intro2:       'KishaTattoo setzt Koi-Tattoos in München nach klassischer Irezumi-Kompositionslehre um. Der Koi schwimmt gegen den Strom der Muskulatur, umgeben von Wellen, Kirschblüten oder Lotusblüten — jede Linie, jede Schuppe mit Präzision und Respekt für die Tradition gesetzt.',
    gallery: [
      { src: 'https://picsum.photos/seed/koi-g1/600/700', alt: 'Koi Tattoo München — klassischer Irezumi Stil' },
      { src: 'https://picsum.photos/seed/koi-g2/600/700', alt: 'Karpfen Tattoo München — mit Wellen und Lotusblüten' },
      { src: 'https://picsum.photos/seed/koi-g3/600/700', alt: 'Japanisches Koi Tattoo München — Sleeve' },
      { src: 'https://picsum.photos/seed/koi-g4/600/700', alt: 'Koi Irezumi München — Rückenstück Komposition' },
      { src: 'https://picsum.photos/seed/koi-g5/600/700', alt: 'Koi Tattoo München — schwarzgrau mit Wellen' },
      { src: 'https://picsum.photos/seed/koi-g6/600/700', alt: 'Koi und Kirschblüten Tattoo München' },
    ],
    meaningH2:   'Die Symbolik des Koi',
    meaningCols: [
      { title: 'Ausdauer & Mut',    body: 'Der Koi schwimmt gegen den Strom — er symbolisiert Beharrlichkeit, Mut und den Willen, Schwierigkeiten zu überwinden. Ein Tattoo für Menschen, die ihren eigenen Weg gehen, unabhängig vom Widerstand.' },
      { title: 'Transformation',    body: 'Die Legende des Drachentor-Karpfens: Koi, die den Wasserfall am Drachentor erklimmen, verwandeln sich in Drachen. Ein Motiv für Transformation, Aufstieg und die Überwindung des eigenen Limits.' },
      { title: 'Komposition',       body: 'Koi harmonieren perfekt mit Wellen (Nami), Kirschblüten, Lotusblüten und Pfingstrosenblüten. Als Sleeve-Motiv oder Teil eines Rückenstücks einsetzbar — immer in Bewegung, immer gegen den Strom.' },
    ],
    faq: [
      { question: 'Was bedeutet ein Koi Tattoo im japanischen Kontext?',         answer: 'Der Koi steht für Ausdauer, Mut und Transformation. Die Legende des Drachentor-Karpfens beschreibt, wie Koi den Wasserfall erklimmen und sich in Drachen verwandeln — ein Symbol für persönlichen Aufstieg durch Beharrlichkeit.' },
      { question: 'Schwimmt der Koi beim Tattoo nach oben oder unten?',          answer: 'Im traditionellen Irezumi hat die Richtung Bedeutung: stromaufwärts symbolisiert aktiven Kampf und Überwindung. Stromabwärts kann Akzeptanz oder Vollendung bedeuten. KishaTattoo bespricht die Komposition individuell mit jedem Kunden.' },
      { question: 'Wie groß sollte ein Koi-Tattoo sein?',                        answer: 'Koi-Tattoos wirken besonders stark in mittleren bis großen Kompositionen — halber Sleeve, Oberschenkel, oder als Teil eines größeren Irezumi-Projekts. Auch kleinere Motive auf Unterarm oder Wade sind möglich und effektiv.' },
    ],
    related: [
      { href: '/motive/drachen-tattoo-muenchen',  label: 'Drachen Tattoo München' },
      { href: '/motive/tiger-tattoo-muenchen',    label: 'Tiger Tattoo München' },
      { href: '/japanisches-tattoo-muenchen',     label: 'Japanisches Tattoo München' },
    ],
    ctaText: 'Dein Koi-Tattoo in München',
  },

  'kitsune-tattoo-muenchen': {
    slug:         'kitsune-tattoo-muenchen',
    title:        'Kitsune Tattoo München — Japanischer Fuchs & Irezumi | KishaTattoo',
    description:  'Kitsune Tattoo (japanischer Fuchs) in München — List, Intelligenz, Langlebigkeit und magische Fähigkeiten. KishaTattoo: authentisches Irezumi. Termin buchen.',
    keywords:     ['kitsune tattoo münchen', 'fuchs tattoo münchen', 'japanisches fuchs tattoo münchen', 'kitsune irezumi münchen', 'fox tattoo munich'],
    kanji:        '狐',
    kanjiCaption: 'Kitsune — der mystische Fuchs der japanischen Folklore',
    heroSrc:      'https://picsum.photos/seed/fox-hero/1920/1080',
    heroAlt:      'Kitsune Tattoo München — japanischer Fuchs Irezumi',
    h1Line1:      'Kitsune Tattoo',
    h1Line2:      'München',
    heroSubtitle: 'Der Kitsune — List, Intelligenz, Langlebigkeit und magische Kräfte. Ein Wächter gegen das Böse.',
    intro1:       'Der Kitsune (狐) — der japanische Fuchs — ist eines der faszinierendsten Wesen der japanischen Folklore. Kitsune gelten als intelligente, langlebige Tiere mit magischen Fähigkeiten, die mit dem Alter wachsen. Je mehr Schwänze (bis zu neun), desto mächtiger und weiser das Wesen.',
    intro2:       'Im Irezumi ist der Kitsune ein Motiv mit zwei Seiten: als Schutzgeist (Inari-Bote) steht er für Glück, Schutz und Weisheit. Als listiger Trickster verkörpert er Cleverness und die Fähigkeit, die eigene Realität zu gestalten. KishaTattoo entwirft Kitsune-Tattoos in München nach klassischer japanischer Bildsprache.',
    gallery: [
      { src: 'https://picsum.photos/seed/fox-g1/600/700', alt: 'Kitsune Tattoo München — neun Schwänze Irezumi' },
      { src: 'https://picsum.photos/seed/fox-g2/600/700', alt: 'Japanischer Fuchs Tattoo München — mit Flammen' },
      { src: 'https://picsum.photos/seed/fox-g3/600/700', alt: 'Kitsune Irezumi München — Kirschblüten und Mondlicht' },
      { src: 'https://picsum.photos/seed/fox-g4/600/700', alt: 'Fuchs Tattoo München — blackwork japanischer Stil' },
      { src: 'https://picsum.photos/seed/fox-g5/600/700', alt: 'Kitsune Tattoo München — Inari Schutzgeist' },
      { src: 'https://picsum.photos/seed/fox-g6/600/700', alt: 'Japanischer Fuchs und Mond Tattoo München' },
    ],
    meaningH2:   'Die Symbolik des Kitsune',
    meaningCols: [
      { title: 'Intelligenz & List',      body: 'Kitsune gelten als die klügsten Tiere der japanischen Folklore. Sie symbolisieren Cleverness, Anpassungsfähigkeit und die Fähigkeit, Dinge aus verschiedenen Perspektiven zu sehen — Eigenschaften, die Träger eines Kitsune-Tattoos in sich erkennen.' },
      { title: 'Langlebigkeit & Magie',  body: 'Mit jedem Jahrhundert wächst die Zahl der Schwänze — von einem bis zu neun. Neun Schwänze bedeuten göttliche Weisheit und übernatürliche Kräfte. Ein Kitsune mit mehreren Schwänzen ist ein Zeichen von Alter und tiefer spiritueller Stärke.' },
      { title: 'Schutz & Wächter',       body: 'Als Boten des Shintō-Gottes Inari gelten Kitsune als Beschützer gegen böse Geister. Kitsune-Tattoos tragen sowohl Schutz-Symbolik als auch den Aspekt des Tricksters — KishaTattoo gestaltet die Geschichte individuell.' },
    ],
    faq: [
      { question: 'Was symbolisiert ein Kitsune Tattoo?',                                  answer: 'Der Kitsune steht für Intelligenz, Listigkeit, Langlebigkeit und magische Fähigkeiten. Als Inari-Bote symbolisiert er Schutz und Glück. Als Trickster steht er für Cleverness und die Fähigkeit, die eigene Realität zu gestalten.' },
      { question: 'Was ist der Unterschied zwischen Kitsune und einem normalen Fuchs?',    answer: 'Ein Kitsune ist ein mythisches Wesen mit übernatürlichen Kräften — erkennbar an mehreren Schwänzen, oft umgeben von Flammen oder Mondlicht. Ein normaler Fuchs ist naturalistisch. Im Irezumi ist fast immer der Kitsune gemeint.' },
      { question: 'Wie viele Schwänze sollte mein Kitsune haben?',                        answer: 'Das hat symbolische Bedeutung: ein Schwanz — jung, kraftvoll. Drei bis fünf Schwänze — erfahren, magisch. Neun Schwänze — höchste göttliche Weisheit. KishaTattoo hilft dir, die richtige Anzahl für deine persönliche Geschichte zu wählen.' },
    ],
    related: [
      { href: '/motive/sakura-tattoo-muenchen',   label: 'Sakura Tattoo München' },
      { href: '/motive/drachen-tattoo-muenchen',  label: 'Drachen Tattoo München' },
      { href: '/japanisches-tattoo-muenchen',     label: 'Japanisches Tattoo München' },
    ],
    ctaText: 'Dein Kitsune-Tattoo in München',
  },

  'sakura-tattoo-muenchen': {
    slug:         'sakura-tattoo-muenchen',
    title:        'Sakura Tattoo München — Kirschblüten & Japanisches Irezumi | KishaTattoo',
    description:  'Kirschblüten Tattoo (Sakura) in München — Vergänglichkeit, die Schönheit des Lebens und Memento Mori. KishaTattoo: authentisches japanisches Irezumi. Termin buchen.',
    keywords:     ['sakura tattoo münchen', 'kirschblüten tattoo münchen', 'japanisches kirschblüten tattoo münchen', 'sakura irezumi münchen', 'cherry blossom tattoo munich'],
    kanji:        '桜',
    kanjiCaption: 'Sakura — die Kirschblüte, Symbol der Vergänglichkeit',
    heroSrc:      'https://picsum.photos/seed/cherry-hero/1920/1080',
    heroAlt:      'Sakura Tattoo München — japanische Kirschblüten Irezumi',
    h1Line1:      'Sakura Tattoo',
    h1Line2:      'München',
    heroSubtitle: 'Die Kirschblüte — Vergänglichkeit, die Schönheit des Augenblicks und die Philosophie des Memento Mori.',
    intro1:       'Die Sakura (桜) — Kirschblüte — ist das nationalste Symbol Japans. Ihre Blütezeit dauert nur wenige Tage, bevor die Blüten im Wind verwehen. Eben diese Vergänglichkeit macht sie so tiefgründig: sie erinnert uns daran, jeden Augenblick voll zu leben — die japanische Philosophie des „mono no aware".',
    intro2:       'Im Irezumi ist Sakura eines der vielseitigsten Motive: als eigenständiges Stück oder als Füllmotiv, das großformatige Kompositionen aus Drachen, Koi oder Tiger umschließt und in den Körper einbettet. KishaTattoo setzt Kirschblüten in München mit der Präzision und Sensibilität um, die dieses stille Motiv verdient.',
    gallery: [
      { src: 'https://picsum.photos/seed/cherry-g1/600/700', alt: 'Sakura Tattoo München — klassische Kirschblüten Irezumi' },
      { src: 'https://picsum.photos/seed/cherry-g2/600/700', alt: 'Kirschblüten Tattoo München — Sleeve Komposition' },
      { src: 'https://picsum.photos/seed/cherry-g3/600/700', alt: 'Japanische Sakura Tattoo München — Schulter und Rücken' },
      { src: 'https://picsum.photos/seed/cherry-g4/600/700', alt: 'Sakura Irezumi München — mit Drachen und Wellen' },
      { src: 'https://picsum.photos/seed/cherry-g5/600/700', alt: 'Kirschblüten Tattoo München — feine Linienführung' },
      { src: 'https://picsum.photos/seed/cherry-g6/600/700', alt: 'Sakura und Koi Tattoo München — Gesamtkomposition' },
    ],
    meaningH2:   'Die Symbolik der Sakura',
    meaningCols: [
      { title: 'Vergänglichkeit',           body: 'Die Kirschblüte blüht nur wenige Tage — „mono no aware" (物の哀れ) ist das japanische Konzept der Vergänglichkeit, die durch Schönheit rührt. Ein Sakura-Tattoo erinnert seinen Träger daran, den gegenwärtigen Moment zu schätzen.' },
      { title: 'Memento Mori',              body: 'In der Irezumi-Tradition trägt Sakura auch eine tiefere philosophische Dimension: die Akzeptanz der eigenen Endlichkeit. Wie die Blüten im Wind fallen, fällt auch der Mensch — und genau das macht das Leben kostbar.' },
      { title: 'Kompositorische Rolle',    body: 'Sakura ist in der Irezumi-Tradition oft das Verbindungselement — es füllt Räume zwischen Drachen, Koi und Tiger, schafft Tiefe und Bewegung. Gleichzeitig ist es stark genug, allein zu stehen: als Sleeve, Rückenstück oder Einzelmotiv.' },
    ],
    faq: [
      { question: 'Was bedeutet ein Sakura Tattoo im japanischen Sinne?',    answer: 'Sakura steht für die Vergänglichkeit des Lebens und seine Schönheit — das japanische Konzept „mono no aware". Gleichzeitig ist es ein Memento Mori: die Akzeptanz, dass alles endet, macht jeden Augenblick wertvoller.' },
      { question: 'Kann Sakura als alleiniges Motiv bestehen?',              answer: 'Ja. Kirschblüten können ein eigenständiges Tattoo-Konzept tragen — als Sleeve, Brustplatte oder Einzelmotiv. KishaTattoo komponiert Sakura sowohl als Hauptmotiv als auch als Begleitelement in größeren Irezumi-Projekten.' },
      { question: 'Mit welchen Motiven kombiniert man Sakura?',              answer: 'Klassische Kombinationen: Drachen (Ryū), Koi, Tiger, Phönix, Oni-Masken. Sakura umhüllt diese Motive mit einer Atmosphäre von Vergänglichkeit und Schönheit. Auch mit Schriftzeichen oder Mondmotiven sehr wirkungsvoll.' },
    ],
    related: [
      { href: '/motive/kitsune-tattoo-muenchen',  label: 'Kitsune Tattoo München' },
      { href: '/motive/koi-tattoo-muenchen',      label: 'Koi Tattoo München' },
      { href: '/japanisches-tattoo-muenchen',     label: 'Japanisches Tattoo München' },
    ],
    ctaText: 'Dein Sakura-Tattoo in München',
  },

  'tiger-tattoo-muenchen': {
    slug:         'tiger-tattoo-muenchen',
    title:        'Tiger Tattoo München — Japanisches Tora-Motiv & Irezumi | KishaTattoo',
    description:  'Japanisches Tiger Tattoo (Tora) in München — Kraft, Mut, Langlebigkeit und Schutz. Symbol des Windes und des Nordens im Irezumi. KishaTattoo. Termin buchen.',
    keywords:     ['tiger tattoo münchen', 'tora tattoo münchen', 'japanisches tiger tattoo münchen', 'tiger irezumi münchen', 'tiger tattoo munich', 'tiger sleeve münchen'],
    kanji:        '虎',
    kanjiCaption: 'Tora — der Tiger, Herrscher des Nordens und des Windes',
    heroSrc:      'https://picsum.photos/seed/tiger-hero/1920/1080',
    heroAlt:      'Tiger Tattoo München — japanisches Tora Irezumi',
    h1Line1:      'Tiger Tattoo',
    h1Line2:      'München',
    heroSubtitle: 'Tora — Kraft, Mut, Langlebigkeit und Schutz. Das Symbol des Windes und des Nordens im japanischen Irezumi.',
    intro1:       'Der Tora (虎) — Tiger — ist im japanischen Irezumi einer der vier Himmelsrichtungs-Könige: Er herrscht über den Norden und das Wind-Element. Als Gegenstück zum Drachen (Süden und Wasser) bildet er eine der kraftvollsten kompositorischen Spannungen in der Irezumi-Tradition.',
    intro2:       'Tiger-Tattoos strahlen unmittelbare Kraft aus. KishaTattoo setzt den Tora in München nach klassischer Irezumi-Komposition um — mit starken schwarzen Linien, kräftigen Schattierungen und der dynamischen Körperspannung, die ein Tiger-Motiv verlangt. Jeder Strich wird mit Respekt vor der Tradition und dem Körper des Trägers gesetzt.',
    gallery: [
      { src: 'https://picsum.photos/seed/tiger-g1/600/700', alt: 'Tiger Tattoo München — klassischer Irezumi Tora' },
      { src: 'https://picsum.photos/seed/tiger-g2/600/700', alt: 'Japanischer Tiger Tattoo München — Rückenstück' },
      { src: 'https://picsum.photos/seed/tiger-g3/600/700', alt: 'Tora Irezumi München — mit Bambus und Wind' },
      { src: 'https://picsum.photos/seed/tiger-g4/600/700', alt: 'Tiger Sleeve Tattoo München — schwarzgrau' },
      { src: 'https://picsum.photos/seed/tiger-g5/600/700', alt: 'Tiger Tattoo München — Gesichtsdetail Irezumi' },
      { src: 'https://picsum.photos/seed/tiger-g6/600/700', alt: 'Tiger und Drachen Tattoo München — Dualität' },
    ],
    meaningH2:   'Die Symbolik des Tora',
    meaningCols: [
      { title: 'Kraft & Mut',          body: 'Der Tiger steht für physische Kraft, Mut und die Fähigkeit, böse Geister und Krankheiten zu vertreiben. Er ist ein mächtiger Schutzgeist — ein Tattoo, das seinen Träger mit Stärke und Tapferkeit verbindet.' },
      { title: 'Wind & Norden',        body: 'Als Himmelsrichtungs-König herrscht der Tora über den Norden und das Wind-Element. In einer Tiger-Drachen-Komposition stehen die mächtigsten Gegenpole des Irezumi gegenüber — Wind und Wasser, Norden und Süden.' },
      { title: 'Langlebigkeit',        body: 'In der japanischen Mythologie wird dem Tiger eine Lebensspanne von tausend Jahren zugeschrieben. Als Tattoo-Motiv trägt er daher auch die Bedeutung von Langlebigkeit, Ausdauer und spiritueller Stärke über die Zeit.' },
    ],
    faq: [
      { question: 'Was bedeutet ein japanisches Tiger-Tattoo?',                 answer: 'Der Tora steht für Kraft, Mut, Langlebigkeit und Schutz vor dem Bösen. Er ist der Herrscher des Nordens und des Wind-Elements — ein Symbol roher Stärke, aber auch spirituellen Schutzes. Eines der kraftvollsten Motive im Irezumi.' },
      { question: 'Tiger oder Drachen — welches Tattoo ist stärker?',           answer: 'Tiger (Norden, Wind) und Drache (Süden, Wasser) sind im Irezumi gleichwertige Gegensätze — das mächtigste Spannungspaar der japanischen Mythologie. Eine Tiger-Drachen-Komposition ist deshalb eines der bedeutungsstärksten Tattoos überhaupt.' },
      { question: 'Wie wird ein Tiger im Irezumi typischerweise dargestellt?',  answer: 'Klassisch: der Tiger in Bewegung, mit geöffnetem Maul, umgeben von Bambus oder Kiefern im Wind. Starke schwarze Konturen, kräftige Schattierungen, dynamische Komposition. KishaTattoo entwirft jeden Tiger individuell nach Körperbau und Bildsprache des Kunden.' },
    ],
    related: [
      { href: '/motive/drachen-tattoo-muenchen',  label: 'Drachen Tattoo München' },
      { href: '/motive/koi-tattoo-muenchen',      label: 'Koi Tattoo München' },
      { href: '/japanisches-tattoo-muenchen',     label: 'Japanisches Tattoo München' },
    ],
    ctaText: 'Dein Tiger-Tattoo in München',
  },
}

/* ── Static params ──────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return Object.keys(MOTIFS).map((slug) => ({ slug }))
}

/* ── Metadata ───────────────────────────────────────────────────────────────── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const motif = MOTIFS[slug]
  if (!motif) return {}
  return buildMetadata({
    title:       motif.title,
    description: motif.description,
    path:        `/motive/${slug}`,
    keywords:    motif.keywords,
  })
}

/* ── Page ───────────────────────────────────────────────────────────────────── */

export default async function MotivePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const motif = MOTIFS[slug]
  if (!motif) notFound()

  const fullTitle = `${motif.h1Line1} ${motif.h1Line2}`

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        serviceSchema({ name: fullTitle, description: motif.description, url: `/motive/${motif.slug}` })
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: fullTitle, url: `/motive/${motif.slug}` },
        ])
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(motif.faq)
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        aria-label={`${fullTitle} — KishaTattoo`}
        data-nav-dark
        style={{
          position: 'relative',
          height: '100dvh',
          minHeight: '780px',
          overflow: 'hidden',
          background: '#0D0D0D',
        }}
      >
        <Image
          src={motif.heroSrc}
          alt={motif.heroAlt}
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          sizes="100vw"
        />
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'rgba(13,13,13,0.5)', zIndex: 1 }} />

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
            zIndex: 2,
          }}
        >
          {motif.h1Line1}<br />{motif.h1Line2}
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
            zIndex: 2,
            textAlign: 'right',
          }}
        >
          {motif.heroSubtitle}
        </p>

        <GNav activePath="/" theme="dark" />

        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: 'clamp(30px, 4.6vw, 60px)',
            left: 'var(--g-pad)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '170px',
          }}
        >
          <span style={{ fontSize: 'clamp(48px, 4.44vw, 64px)', lineHeight: 1, color: '#F2F2F2' }}>{motif.kanji}</span>
          <span style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: 'rgba(242,242,242,0.55)' }}>
            {motif.kanjiCaption}
          </span>
        </div>
      </section>

      {/* ── INTRO TEXT ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="motif-intro-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <div className="g-section-header" style={{ alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D', whiteSpace: 'nowrap', flexShrink: 0 }}>
              [ Japanisches Irezumi · München ]
            </span>
            <h2
              id="motif-intro-heading"
              style={{
                fontSize: 'var(--g-l)',
                lineHeight: 'var(--g-lh-l)',
                color: '#0D0D0D',
                textAlign: 'center',
                width: 'clamp(18rem, 32.6vw, 470px)',
                flexShrink: 0,
              }}
            >
              {fullTitle} — Bedeutung & Symbolik
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
              {motif.intro1}
            </p>
            <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: '#0D0D0D', width: 'clamp(16rem, 23.3vw, 448px)', flexShrink: 0 }}>
              {motif.intro2}
            </p>
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section
        aria-label={`${fullTitle} Portfolio München`}
        style={{
          background: '#F2F2F2',
          paddingLeft: 'var(--g-pad)',
          paddingRight: 'var(--g-pad)',
          paddingBottom: 'clamp(2rem, 4.2vw, 5rem)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {motif.gallery.map((img) => (
            <div key={img.src} style={{ position: 'relative', aspectRatio: '6/7', overflow: 'hidden' }}>
              <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} sizes="33vw" />
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 'clamp(1.5rem, 2.5vw, 2.5rem)' }}>
          <Link
            href="/works"
            style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            Alle Arbeiten ansehen →
          </Link>
        </div>
      </section>

      {/* ── MEANING ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="motif-meaning-heading"
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
              id="motif-meaning-heading"
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', textAlign: 'center' }}
            >
              {motif.meaningH2}
            </h2>
          </div>

          <div className="g-about-steps" style={{ display: 'flex' }}>
            {motif.meaningCols.map((col, i) => (
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
        aria-labelledby="motif-faq-heading"
        style={{ background: '#F2F2F2', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container">
          <h2
            id="motif-faq-heading"
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
            {motif.faq.map((item, i) => (
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
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(13,13,13,0.5)' }}>Weitere Motive →</span>
          {motif.related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: 'var(--g-bm)', color: '#0D0D0D', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section
        data-nav-dark
        style={{ background: '#0D0D0D', padding: 'clamp(2rem, 4.2vw, 5rem) 0' }}
      >
        <div className="g-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <p style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '28rem' }}>
            {motif.ctaText}
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
            Termin buchen
          </Link>
        </div>
      </section>

      <GFooter />
    </main>
  )
}