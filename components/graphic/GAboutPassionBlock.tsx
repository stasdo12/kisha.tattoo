'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

const SLIDE_IMAGES = [
  { thumb: '/images/about/passion-thumb-1.jpg', large: '/images/about/passion-large-1.jpg' },
  { thumb: '/images/about/passion-thumb-2.jpg', large: '/images/about/passion-large-2.jpg' },
  { thumb: '/images/about/passion-thumb-3.jpg', large: '/images/about/passion-large-3.jpg' },
  { thumb: '/images/about/passion-thumb-4.jpg', large: '/images/about/passion-large-4.jpg' },
]

export function GAboutPassionBlock() {
  const t = useTranslations('about')
  const slides = (t.raw('passion.slides') as Array<{ alt: string; heading: string; body: string }>)
  const [active, setActive] = useState(0)
  const slide = { ...slides[active], ...SLIDE_IMAGES[active] }

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
          {SLIDE_IMAGES.map((item, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={slides[i]?.alt ?? ''}
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
                alt={slides[i]?.alt ?? ''}
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
          style={{ objectFit: 'cover', objectPosition: 'right center' }}
          sizes="55vw"
        />
      </div>
    </div>
  )
}