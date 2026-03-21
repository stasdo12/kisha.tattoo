'use client'

import { useEffect, useRef } from 'react'

/**
 * Decorative assembly animation — letters fly in on scroll.
 * Pure visual brand moment, no semantic content.
 * aria-hidden on the animated version; screen-reader text provided separately.
 */
export function AssemblySection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!containerRef.current) return

      const letters = containerRef.current.querySelectorAll<HTMLSpanElement>('[data-letter]')

      gsap.set(letters, {
        opacity: 0,
        scale: 0.3,
        y: (i) => (i % 2 === 0 ? -80 : 80),
        x: (i) => (i < letters.length / 2 ? -60 : 60),
        rotation: (i) => (i % 2 === 0 ? -20 : 20),
      })

      gsap.to(letters, {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        rotation: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 65%',
        },
      })
    }

    init()
  }, [])

  return (
    <section
      aria-label="True Art — brand statement"
      style={{
        paddingBlock: 'var(--space-2xl)',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Screen reader text */}
      <p className="sr-only">TRUE-ART — 真実 — Truth in permanent art</p>

      <div ref={containerRef} aria-hidden="true">
        {/* Glow */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(204,51,51,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Letters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            gap: '0.25rem',
            marginBottom: '1rem',
          }}
        >
          {'TRUE-ART'.split('').map((char, i) => (
            <span
              key={i}
              data-letter={i}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                fontWeight: 900,
                letterSpacing: '0.05em',
                color: char === '-' ? 'var(--color-primary)' : 'var(--color-text)',
                display: 'inline-block',
                lineHeight: 1,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          {['真の', '芸術'].map((kanji, i) => (
            <span
              key={i}
              data-letter={`k${i}`}
              style={{
                fontFamily: 'var(--font-japanese)',
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                color: 'var(--color-primary)',
                opacity: 0.7,
              }}
            >
              {kanji}
            </span>
          ))}
        </div>

        <p
          style={{
            marginTop: '1.5rem',
            fontSize: '0.75rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--color-text-muted)',
          }}
        >
          真実 • Truth
        </p>
      </div>

      <style>{`.sr-only { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }`}</style>
    </section>
  )
}
