/**
 * Content for the Graphic tattoo section (separate brand direction).
 */

export const GRAPHIC_WORKS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: [
    'Geometric Skull', 'Abstract Portrait', 'Blackwork Mandala', 'Fine Line Botanics',
    'Dotwork Compass', 'Surrealist Eye', 'Minimalist Arrow', 'Sacred Geometry',
    'Watercolour Splash', 'Tribal Fusion', 'Neo-Traditional Rose', 'Illustrative Fox',
  ][i],
  year: 2023 + Math.floor(i / 6),
  style: 'graphic',
  alt: `Graphic tattoo — ${['Geometric Skull', 'Abstract Portrait', 'Blackwork Mandala', 'Fine Line Botanics', 'Dotwork Compass', 'Surrealist Eye', 'Minimalist Arrow', 'Sacred Geometry', 'Watercolour Splash', 'Tribal Fusion', 'Neo-Traditional Rose', 'Illustrative Fox'][i]} by Kisha Tattoo Munich`,
  // TODO: replace with real graphic portfolio images
  src: `https://picsum.photos/seed/graphic${i + 1}/800/1000`,
  thumb: `https://picsum.photos/seed/gthumb${i + 1}/300/400`,
}))

export const GRAPHIC_ABOUT_SECTIONS = [
  {
    id: 'philosophy',
    title: 'The Graphic Direction',
    subtitle: '術 — The Art',
    body: 'Graphic tattooing is a second language at Kisha. Where Japanese work follows centuries of tradition, graphic tattoos embrace the full spectrum of contemporary illustration — blackwork, fine line, geometric, and beyond.',
  },
  {
    id: 'approach',
    title: 'Our Approach',
    subtitle: 'Clean lines. Bold vision.',
    body: 'Every graphic piece begins with a strong visual concept. We believe in tattoos that feel complete — perfectly placed, perfectly scaled, immediately striking.',
  },
  {
    id: 'collaboration',
    title: 'True Collaboration',
    subtitle: 'Your idea. Our execution.',
    body: 'We work closely with each client to transform abstract ideas into precise, lasting imagery. Reference images welcome, but originality is always the goal.',
  },
]
