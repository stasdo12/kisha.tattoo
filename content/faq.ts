/**
 * FAQ content — drives the FAQ page AND FAQPage JSON-LD structured data.
 * Questions are keyword-researched for common tattoo-related searches.
 */

export type FaqItem = {
  question: string
  answer: string
}

export const FAQ_JAPANESE: FaqItem[] = [
  {
    question: 'How much does a Japanese tattoo cost in Munich?',
    answer:
      'Japanese tattoo pricing at Kisha starts from €200 for small pieces and scales with size and complexity. Full sleeves and back pieces are priced per session. Contact us for a personalised quote after your consultation.',
  },
  {
    question: 'How long does a Japanese tattoo session take?',
    answer:
      'Sessions typically run 3–6 hours. Large-scale work like sleeves or back pieces requires multiple sessions spread across weeks or months to allow proper healing between appointments.',
  },
  {
    question: 'What is Tebori tattooing?',
    answer:
      'Tebori (手彫り) is the traditional Japanese hand-poke technique where ink is inserted using a long wooden or metal tool rather than a machine. It produces a softer, more organic texture that many collectors prefer for traditional Japanese motifs.',
  },
  {
    question: 'Does Tebori hurt more than machine tattooing?',
    answer:
      'Most clients report Tebori as less painful than machine work. The rhythm is slower and the sensation described as more of a scratching feeling than the buzzing vibration of a rotary machine.',
  },
  {
    question: 'Can I design my own Japanese tattoo?',
    answer:
      'Absolutely. We encourage you to bring references, ideas, and the story you want to tell. Our custom design process creates a piece built entirely around you — no repeated designs, ever.',
  },
  {
    question: 'What Japanese tattoo styles do you specialise in?',
    answer:
      'We specialise in traditional Irezumi, Neotraditional Japanese, and Blackwork Japanese. Our motifs include Koi, Dragons, Oni, Kitsune, Hannya masks, Peonies, Cherry Blossom, and full mythological compositions.',
  },
  {
    question: 'How do I prepare for my tattoo session?',
    answer:
      'Eat a good meal 2 hours before your appointment. Stay hydrated. Wear comfortable clothing that provides easy access to the area being tattooed. Avoid alcohol for 24 hours beforehand.',
  },
  {
    question: 'Do you do touch-ups?',
    answer:
      'Yes. All Kisha tattoos include one complimentary touch-up session within 3 months of the original appointment, once the tattoo has fully healed.',
  },
  {
    question: 'How do I book a tattoo appointment in Munich?',
    answer:
      'Use our online booking form or send us a message with your concept, desired size, placement, and preferred dates. We respond within 48 hours and will schedule a free consultation.',
  },
  {
    question: 'Are Japanese tattoos good for first-timers?',
    answer:
      'Japanese tattoos range from small, manageable pieces to large-scale full-body work. We welcome first-timers and will guide you through choosing an appropriate starting piece and placement.',
  },
]

export const FAQ_GRAPHIC: FaqItem[] = [
  {
    question: 'What is graphic tattooing?',
    answer:
      'Graphic tattooing is a broad contemporary style encompassing blackwork, fine-line, geometric, dotwork, and illustrative approaches. Unlike traditional styles, graphic work draws on modern art, illustration, and design aesthetics.',
  },
  {
    question: 'How is graphic tattooing different from Japanese tattooing?',
    answer:
      'Japanese tattooing follows centuries of established iconography and compositional rules. Graphic tattooing is more experimental — it borrows from illustration, architecture, and graphic design to create bold, unconventional imagery.',
  },
  {
    question: 'Do you offer fine-line tattoos?',
    answer:
      'Yes. Fine-line is one of our graphic specialities. Delicate single-needle work for minimalist botanical, portrait, and abstract designs.',
  },
]
