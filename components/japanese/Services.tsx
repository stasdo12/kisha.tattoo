'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { JAPANESE_SERVICES } from '@/content/japanese'

export function Services() {
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!listRef.current) return

      gsap.from(listRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 80%',
        },
      })
    }
    init()
  }, [])

  return (
    <div className="container" style={{ paddingBlock: 'var(--space-2xl)' }}>
      <div style={{ marginBottom: 'var(--space-xl)' }}>
        <span className="section-label">What We Offer</span>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            maxWidth: '20ch',
          }}
        >
          Three Paths to Your Tattoo
        </h2>
      </div>

      <ul ref={listRef} role="list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', listStyle: 'none' }}>
        {JAPANESE_SERVICES.map((service) => (
          <li
            key={service.id}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.14)',
              borderTop: '2px solid var(--color-primary)',
              borderRadius: '4px',
              padding: 'var(--space-lg)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(204,51,51,0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div
              aria-hidden="true"
              style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
            >
              {service.icon}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                marginBottom: '0.25rem',
              }}
            >
              {service.title}
            </h3>
            <span
              style={{
                fontFamily: 'var(--font-japanese)',
                fontSize: '0.9rem',
                color: 'var(--color-primary)',
                display: 'block',
                marginBottom: '0.75rem',
              }}
            >
              {service.kanji}
            </span>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
              {service.description}
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              {service.details}
            </p>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 'var(--space-lg)', textAlign: 'center' }}>
        <Link href="/booking" className="btn btn-primary">
          Discuss Your Project
        </Link>
      </div>
    </div>
  )
}
