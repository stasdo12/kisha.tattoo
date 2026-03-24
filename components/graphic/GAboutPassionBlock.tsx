'use client'

import Image from 'next/image'
import { useState } from 'react'

const SLIDES = [
  {
    thumb: 'https://picsum.photos/seed/about-mini-1/200/200',
    large: 'https://picsum.photos/seed/about-back-piece/800/1000',
    alt: 'Irezumi detail 1',
    heading: 'The art we create is far more than just an image',
    body: 'It is a profound transformation. Every single element, from the flow of the Nami (Waves) to the intricate scales of the Ryu (Dragon), is drawn with intention and fuelled by this passion. I work directly with you, the client, to distill your unique idea, personal metaphor, or life philosophy into a timeless design.',
  },
  {
    thumb: 'https://picsum.photos/seed/about-mini-2/200/200',
    large: 'https://picsum.photos/seed/about-large-2/800/1000',
    alt: 'Irezumi detail 2',
    heading: 'Every line is drawn with intention',
    body: 'The language of traditional Japanese tattooing is rich with symbols, each carrying centuries of meaning. From the strength of the Dragon to the perseverance of the Koi, every motif is chosen with purpose and placed with precision.',
  },
  {
    thumb: 'https://picsum.photos/seed/about-mini-3/200/200',
    large: 'https://picsum.photos/seed/about-large-3/800/1000',
    alt: 'Irezumi detail 3',
    heading: 'A commitment that lasts a lifetime',
    body: 'Large-scale Irezumi projects are a long journey — spanning months and sometimes years. This process demands trust, patience, and a shared vision between artist and client. The result is not just a tattoo, but a living story etched permanently into skin.',
  },
  {
    thumb: 'https://picsum.photos/seed/about-mini-4/200/200',
    large: 'https://picsum.photos/seed/about-large-4/800/1000',
    alt: 'Irezumi detail 4',
    heading: 'Rooted in tradition, shaped by your story',
    body: 'Irezumi follows sacred compositional rules passed down through generations. Within those canons, your personal narrative finds its form. The result honours the ancient tradition while speaking directly and uniquely to your life and philosophy.',
  },
]

export function GAboutPassionBlock() {
  const [active, setActive] = useState(0)
  const slide = SLIDES[active]

  return (
    <div
      className="g-about-passion-block"
      data-nav-dark
      style={{
        background: '#0D0D0D',
        display: 'flex',
        gap: '1rem',
        overflow: 'hidden',
        borderRadius: '2px',
      }}
    >
      {/* Left: heading + body + mini gallery */}
      <div
        className="g-about-passion-left"
        style={{
          flex: '0 0 clamp(18rem, 40%, 700px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          padding: 'clamp(1.5rem, 2.08vw, 2.5rem)',
          paddingRight: 0,
        }}
      >
        <h3
          key={`h-${active}`}
          className="g-about-passion-heading"
          style={{
            fontSize: 'var(--g-l)',
            lineHeight: 'var(--g-lh-l)',
            color: '#F2F2F2',
          }}
        >
          {slide.heading}
        </h3>
        <p
          key={`p-${active}`}
          className="g-about-passion-body"
          style={{
            fontSize: 'var(--g-bm)',
            lineHeight: 'var(--g-lh-bm)',
            color: '#F2F2F2',
          }}
        >
          {slide.body}
        </p>

        {/* Mini gallery row */}
        <div
          className="g-about-mini-gallery"
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: 'auto',
            paddingTop: '1rem',
          }}
        >
          {SLIDES.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={item.alt}
              style={{
                flex: '1 1 0',
                position: 'relative',
                aspectRatio: '1 / 1',
                overflow: 'hidden',
                borderRadius: '2px',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                outline: i === active ? '2px solid #F2F2F2' : 'none',
                outlineOffset: '2px',
                transition: 'opacity 0.3s ease',
                opacity: i === active ? 1 : 0.5,
              }}
            >
              <Image
                src={item.thumb}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover' }}
                sizes="8vw"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right: large photo */}
      <div
        className="g-about-passion-right"
        style={{
          flex: '1 1 0',
          position: 'relative',
          minHeight: 'clamp(400px, 50vw, 800px)',
        }}
      >
        <Image
          key={slide.large}
          src={slide.large}
          alt={slide.alt}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
          sizes="55vw"
        />
      </div>
    </div>
  )
}