/**
 * Content for the Japanese tattoo section.
 * Centralised here so pages, metadata, and structured data stay in sync.
 */

export const JAPANESE_SERVICES = [
  {
    id: 'tebori',
    title: 'Tebori',
    kanji: '手彫り',
    icon: '🥢',
    description:
      'Traditional hand-poke tattooing technique. Each line is drawn by hand with a wooden or metal tool — slower, meditative, and uniquely textured.',
    details:
      'Tebori produces a softer, more organic look compared to machine work. Ideal for delicate shading and traditional Japanese motifs.',
  },
  {
    id: 'machine',
    title: 'Machine',
    kanji: '機械',
    icon: '⚙️',
    description:
      'Precision rotary machine tattooing for crisp lines and saturated colour. Modern equipment combined with classical Japanese compositions.',
    details:
      'Best suited for larger pieces with complex shading, bold outlines, and vivid colour fills. Faster session times for bigger designs.',
  },
  {
    id: 'custom-design',
    title: 'Custom Design',
    kanji: '特注',
    icon: '🐉',
    description:
      'Every Kisha tattoo begins as a conversation. Your story, mythology, and aesthetic preferences shape a one-of-a-kind design.',
    details:
      'We never repeat a design. Each piece is drawn specifically for you and your body — placement, flow, and meaning considered from the start.',
  },
] as const

export const MASTER_CHAPTERS = [
  {
    id: 'beginning',
    title: 'The Beginning',
    kanji: '始まり',
    romaji: 'Hajimari',
    description:
      'Born in Japan and raised among traditional craftsmen, Kisha discovered tattooing as a teenager through the work of Horiyoshi III. The discipline of Irezumi — its mythology, its permanence — became an obsession.',
    image: 'https://picsum.photos/seed/chapter1/600/800',
  },
  {
    id: 'journey',
    title: 'The Journey',
    kanji: '旅',
    romaji: 'Tabi',
    description:
      'Years of apprenticeship under a Tokyo master taught patience. Five years of silence — watching, cleaning, studying — before the first needle touched skin. The journey shaped the artist before the art.',
    image: 'https://picsum.photos/seed/chapter2/600/800',
  },
  {
    id: 'mastery',
    title: 'The Mastery',
    kanji: '極意',
    romaji: 'Gokui',
    description:
      'Now based in Munich, Kisha brings authentic Japanese tattoo tradition to Europe. Every appointment is a ritual. Every design a collaboration between artist, client, and centuries of mythology.',
    image: 'https://picsum.photos/seed/chapter3/600/800',
  },
] as const

export const YOKAI_CREATURES = [
  {
    id: 'kitsune',
    name: 'Kitsune',
    kanji: '狐',
    subtitle: 'The Fox Spirit',
    description:
      'Messenger of Inari, master of illusion. Nine-tailed Kitsune represent wisdom, longevity, and transformative power. A popular motif for those seeking cunning grace.',
    gradient: 'linear-gradient(135deg, #cc3333, #ff8c00)',
    emoji: '🦊',
  },
  {
    id: 'oni',
    name: 'Oni',
    kanji: '鬼',
    subtitle: 'The Demon Guardian',
    description:
      'Fearsome protectors of the underworld. Oni tattoos ward off evil and represent raw strength. Their fearsome face masks are among the most recognisable Japanese designs.',
    gradient: 'linear-gradient(135deg, #1a237e, #c62828)',
    emoji: '👹',
  },
  {
    id: 'tengu',
    name: 'Tengu',
    kanji: '天狗',
    subtitle: 'The Mountain Warrior',
    description:
      'Long-nosed guardians of the mountain forests. Tengu are master swordsmen who taught legendary warriors their craft. A symbol of martial skill and spiritual discipline.',
    gradient: 'linear-gradient(135deg, #1b5e20, #33691e)',
    emoji: '🏔️',
  },
  {
    id: 'hannya',
    name: 'Hannya',
    kanji: '般若',
    subtitle: 'The Jealous Spirit',
    description:
      'Once a beautiful woman, transformed by jealousy and obsession. The Hannya mask portrays the duality of love and hatred — a profound symbol of human emotion.',
    gradient: 'linear-gradient(135deg, #880e4f, #4a148c)',
    emoji: '😈',
  },
  {
    id: 'ryu',
    name: 'Ryū',
    kanji: '龍',
    subtitle: 'The Dragon',
    description:
      'Unlike Western dragons, Japanese Ryū are benevolent water deities controlling rain, rivers, and the seas. A full-back dragon is the pinnacle of Japanese tattooing.',
    gradient: 'linear-gradient(135deg, #006064, #01579b)',
    emoji: '🐉',
  },
  {
    id: 'koi',
    name: 'Koi',
    kanji: '鯉',
    subtitle: 'The Perseverance Fish',
    description:
      'The Koi swims upstream against the current, transforming into a dragon upon reaching the waterfall\'s peak. A tattoo of transformation, persistence, and ambition.',
    gradient: 'linear-gradient(135deg, #e65100, #f9a825)',
    emoji: '🐟',
  },
] as const

export const PROCESS_STEPS = [
  {
    id: 'awakening',
    step: 1,
    title: 'Awakening',
    kanji: '目覚め',
    romaji: 'Mezame',
    subtitle: 'The First Contact',
    description: 'Your journey begins with a simple message. Tell us about your vision, your story, your desired placement.',
    details: 'Fill in the booking form or reach out directly. We respond within 48 hours.',
    color: '#cc3333',
  },
  {
    id: 'connection',
    step: 2,
    title: 'Connection',
    kanji: '繋がり',
    romaji: 'Tsunagari',
    subtitle: 'The Consultation',
    description: 'A conversation to understand you. We explore mythology, symbolism, placement, and meaning.',
    details: 'Video or in-person. Free of charge. No obligation. This is about alignment.',
    color: '#d4a853',
  },
  {
    id: 'courage',
    step: 3,
    title: 'Courage',
    kanji: '勇気',
    romaji: 'Yūki',
    subtitle: 'The Design',
    description: 'Your story becomes a drawing. We present the custom design for your review and refinement.',
    details: 'Two rounds of revisions included. Design is exclusively yours — never repeated.',
    color: '#7b4f8a',
  },
  {
    id: 'transformation',
    step: 4,
    title: 'Transformation',
    kanji: '変容',
    romaji: 'Henyō',
    subtitle: 'The Session',
    description: 'Needle meets skin. The ritual of tattooing begins. This is the moment of permanent commitment.',
    details: 'Session length varies by piece. Multiple sessions may be required for large work.',
    color: '#1a6b3c',
  },
  {
    id: 'empowerment',
    step: 5,
    title: 'Empowerment',
    kanji: '力',
    romaji: 'Chikara',
    subtitle: 'The Healing',
    description: 'The skin heals and the tattoo settles. We provide comprehensive aftercare guidance.',
    details: 'Detailed aftercare kit and written instructions provided. Check-in support available.',
    color: '#2563a8',
  },
  {
    id: 'legacy',
    step: 6,
    title: 'Legacy',
    kanji: '遺産',
    romaji: 'Isan',
    subtitle: 'The Permanence',
    description: 'Your tattoo is now part of you — a permanent story on skin. Welcome to the Kisha lineage.',
    details: 'Touch-up included within 3 months. You join a community of lifelong Kisha collectors.',
    color: '#8b0000',
  },
] as const

export const GALLERY_ITEMS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  title: [
    'Koi & Cherry Blossom', 'Dragon Full Back', 'Hannya Mask', 'Oni Guardian',
    'Kitsune Spirit', 'Tengu Warrior', 'Samurai Sleeve', 'Lotus & Waves',
    'Chrysanthemum', 'Phoenix Rising', 'Tiger & Bamboo', 'Geisha Portrait',
    'Mount Fuji', 'Crane Flight', 'Carp & Waves', 'Snake & Peony',
    'Wind God', 'Thunder God', 'Spider Lily', 'Daruma',
  ][i],
  year: 2022 + Math.floor(i / 7),
  style: i % 3 === 0 ? 'tebori' : 'machine',
  // SEO-relevant: content images need descriptive alt text
  alt: `Japanese tattoo — ${['Koi & Cherry Blossom', 'Dragon Full Back', 'Hannya Mask', 'Oni Guardian', 'Kitsune Spirit', 'Tengu Warrior', 'Samurai Sleeve', 'Lotus & Waves', 'Chrysanthemum', 'Phoenix Rising', 'Tiger & Bamboo', 'Geisha Portrait', 'Mount Fuji', 'Crane Flight', 'Carp & Waves', 'Snake & Peony', 'Wind God', 'Thunder God', 'Spider Lily', 'Daruma'][i]} by Kisha Tattoo Munich`,
  // TODO: replace with real portfolio images
  src: `https://picsum.photos/seed/tattoo${i + 1}/800/1000`,
  thumb: `https://picsum.photos/seed/thumb${i + 1}/200/250`,
}))
