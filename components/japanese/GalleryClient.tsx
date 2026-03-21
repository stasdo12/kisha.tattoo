'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { GALLERY_ITEMS } from '@/content/japanese'

type GalleryItem = (typeof GALLERY_ITEMS)[number]

type Props = {
  items: GalleryItem[]
}

type ViewMode = 'grid' | 'lightbox'

export function GalleryClient({ items }: Props) {
  const [selected, setSelected] = useState<GalleryItem | null>(null)
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  function openLightbox(item: GalleryItem) {
    setSelected(item)
    setViewMode('lightbox')
  }

  function closeLightbox() {
    setSelected(null)
    setViewMode('grid')
  }

  function navigate(direction: 1 | -1) {
    if (!selected) return
    const idx = items.findIndex((i) => i.id === selected.id)
    const next = items[(idx + direction + items.length) % items.length]
    setSelected(next)
  }

  return (
    <>
      <ul
        role="list"
        aria-label="Tattoo portfolio grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '1rem',
          listStyle: 'none',
        }}
      >
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => openLightbox(item)}
              aria-label={`View ${item.title} — ${item.year}`}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                width: '100%',
                display: 'block',
                position: 'relative',
                aspectRatio: '4/5',
                overflow: 'hidden',
                borderRadius: '4px',
              }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'
                }}
              />
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '0.75rem',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.75))',
                }}
              >
                <p style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>{item.title}</p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem' }}>{item.year}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {viewMode === 'lightbox' && selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing: ${selected.title}`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
          }}
        >
          <button
            onClick={closeLightbox}
            aria-label="Close gallery"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '1.2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ×
          </button>

          <div style={{ position: 'relative', maxWidth: '600px', width: '100%', aspectRatio: '4/5' }}>
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 100vw, 600px"
              priority
            />
          </div>

          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <p style={{ color: '#fff', fontFamily: 'var(--font-heading)', fontSize: '1rem' }}>{selected.title}</p>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{selected.year}</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              onClick={() => navigate(-1)}
              aria-label="Previous image"
              className="btn btn-secondary"
              style={{ padding: '0.6rem 1.25rem' }}
            >
              ← Prev
            </button>
            <button
              onClick={() => navigate(1)}
              aria-label="Next image"
              className="btn btn-secondary"
              style={{ padding: '0.6rem 1.25rem' }}
            >
              Next →
            </button>
          </div>
        </div>
      )}
    </>
  )
}
