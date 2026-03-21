'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GALLERY_ITEMS } from '@/content/japanese'

const PREVIEW_COUNT = 6

export function VirtualGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const preview = GALLERY_ITEMS.slice(0, PREVIEW_COUNT)

  return (
    <div className="container" style={{ paddingBlock: 'var(--space-2xl)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: 'var(--space-xl)',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <span className="section-label">Selected Works</span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            }}
          >
            Japanese Tattoo Portfolio
          </h2>
        </div>
        <Link
          href="/gallery"
          style={{
            color: 'var(--color-text-muted)',
            fontSize: '0.875rem',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
        >
          View all {GALLERY_ITEMS.length} works →
        </Link>
      </div>

      {/*
        Masonry grid — rows have varying heights for visual interest.
        Each item is an article with semantic alt text on the image.
      */}
      <ul
        role="list"
        className="gallery-grid"
        style={{ gap: '1rem' }}
      >
        {preview.map((item, i) => {
          // Alternate tall/wide cells for visual masonry effect
          const rowSpan = [2, 1, 2, 1, 1, 2][i] ?? 1

          return (
            <li
              key={item.id}
              style={{ gridRow: `span ${rowSpan}` }}
            >
              <article
                style={{ height: '100%', position: 'relative', overflow: 'hidden', borderRadius: '4px' }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Content image — meaningful alt text for SEO */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  style={{
                    objectFit: 'cover',
                    transform: hoveredId === item.id ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.5s ease',
                  }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Info overlay on hover */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    transform: hoveredId === item.id ? 'translateY(0)' : 'translateY(100%)',
                    transition: 'transform 0.3s ease',
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                    {item.year}
                  </p>
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
        <Link href="/gallery" className="btn btn-secondary">
          View Full Gallery — +{GALLERY_ITEMS.length - PREVIEW_COUNT} more works
        </Link>
      </div>
    </div>
  )
}
