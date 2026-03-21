'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { MASTER_CHAPTERS } from '@/content/japanese'

export function StorySection() {
  const [activeChapter, setActiveChapter] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let cleanup = () => {}

    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return

      // Auto-advance chapters on scroll
      const chapters = sectionRef.current.querySelectorAll<HTMLElement>('[data-chapter]')
      chapters.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          onEnter: () => setActiveChapter(i),
          onEnterBack: () => setActiveChapter(i),
        })
      })

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }

    init()
    return () => cleanup()
  }, [])

  const chapter = MASTER_CHAPTERS[activeChapter]

  return (
    <section
      ref={sectionRef}
      aria-labelledby="story-heading"
      style={{ paddingBlock: 'var(--space-2xl)', background: 'var(--color-surface)' }}
    >
      <div
        className="container grid-2col-equal"
      >
        {/* Left: scrollable chapters */}
        <div>
          <span className="section-label">The Master&apos;s Path</span>
          <h2
            id="story-heading"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            A Life in Ink
          </h2>

          {/* Mobile image — shown only on mobile, hidden on desktop via CSS */}
          <div
            className="story-mobile-image"
            style={{ aspectRatio: '16/9', borderRadius: '4px', overflow: 'hidden', marginBottom: 'var(--space-md)', position: 'relative' }}
            aria-hidden="true"
          >
            <Image
              src={chapter.image}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>

          {MASTER_CHAPTERS.map((ch, i) => (
            <article
              key={ch.id}
              data-chapter={i}
              onClick={() => setActiveChapter(i)}
              aria-current={activeChapter === i ? 'true' : undefined}
              style={{
                padding: 'var(--space-md)',
                borderLeft: `3px solid ${activeChapter === i ? 'var(--color-primary)' : 'var(--color-border)'}`,
                marginBottom: '1.5rem',
                cursor: 'pointer',
                transition: 'border-color 0.3s ease, background 0.3s ease',
                background: activeChapter === i ? 'var(--color-card)' : 'transparent',
                borderRadius: '0 4px 4px 0',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '0.5rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-japanese)',
                    fontSize: '1.5rem',
                    color: activeChapter === i ? 'var(--color-primary)' : 'var(--color-text-muted)',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {ch.kanji}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1rem',
                      marginBottom: '0.1rem',
                    }}
                  >
                    {ch.title}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                    {ch.romaji}
                  </span>
                </div>
              </div>
              {activeChapter === i && (
                <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {ch.description}
                </p>
              )}
            </article>
          ))}
        </div>

        {/* Right: sticky image panel — hidden on mobile via CSS */}
        <div
          className="story-image-panel"
          style={{
            position: 'sticky',
            top: '100px',
            aspectRatio: '3/4',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          <Image
            src={chapter.image}
            alt="" // decorative when used as sticky visual companion
            fill
            style={{ objectFit: 'cover', transition: 'opacity 0.4s ease' }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Kanji overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.3)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-japanese)',
                fontSize: '8rem',
                color: 'rgba(255,255,255,0.15)',
                lineHeight: 1,
              }}
            >
              {chapter.kanji}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
