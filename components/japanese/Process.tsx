'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { PROCESS_STEPS } from '@/content/japanese'

export function Process() {
  const gridRef = useRef<HTMLOListElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!gridRef.current) return

      gsap.from(gridRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 75%' },
      })
    }
    init()
  }, [])

  return (
    <div className="container" style={{ paddingBlock: 'var(--space-2xl)' }}>
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <span className="section-label">How It Works</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            maxWidth: '20ch',
          }}
        >
          The Ritual — Your Journey to a Kisha Tattoo
        </h2>
      </div>

      <ol
        ref={gridRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          listStyle: 'none',
        }}
      >
        {PROCESS_STEPS.map((step) => (
          <li
            key={step.id}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderTop: `3px solid ${step.color}`,
              borderRadius: '4px',
              padding: 'var(--space-md)',
              position: 'relative',
            }}
          >
            {/* Step number */}
            <span
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '2.5rem',
                fontWeight: 900,
                opacity: 0.06,
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {String(step.step).padStart(2, '0')}
            </span>

            <div style={{ marginBottom: '1rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-japanese)',
                  fontSize: '2rem',
                  color: step.color,
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
                aria-hidden="true"
              >
                {step.kanji}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>
                {step.romaji}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                marginBottom: '0.25rem',
              }}
            >
              {step.title}
            </h3>
            <span
              style={{
                display: 'block',
                fontSize: '0.75rem',
                color: 'var(--color-text-muted)',
                fontStyle: 'italic',
                marginBottom: '0.75rem',
              }}
            >
              {step.subtitle}
            </span>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
              {step.description}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: 1.5, opacity: 0.8 }}>
              {step.details}
            </p>
          </li>
        ))}
      </ol>

      <div style={{ marginTop: 'var(--space-lg)', textAlign: 'center' }}>
        <Link href="/booking" className="btn btn-primary">
          Begin Your Journey
        </Link>
      </div>
    </div>
  )
}
