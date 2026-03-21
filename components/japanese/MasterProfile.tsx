'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export function MasterProfile() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current) return

      const text = sectionRef.current.querySelectorAll<HTMLElement>('[data-animate]')
      gsap.from(text, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
    }
    init()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-labelledby="master-heading"
      style={{ paddingBlock: 'var(--space-2xl)', background: 'var(--color-surface)' }}
    >
      <div
        className="container grid-2col"
      >
        {/* Left: portrait */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
            }}
          >
            {/* TODO: replace with real master photo */}
            <Image
              src="https://picsum.photos/seed/master-kisha/600/800"
              alt="Master Kisha — Japanese tattoo artist based in Munich"
              fill
              style={{ objectFit: 'cover', filter: 'grayscale(30%)' }}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Seal overlay — decorative */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                right: '1.5rem',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-japanese)',
                fontSize: '1.8rem',
                color: '#fff',
                fontWeight: 700,
              }}
            >
              匠
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div>
          <span className="section-label" data-animate="">
            The Artist
          </span>
          <h2
            id="master-heading"
            data-animate=""
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              marginBottom: '1.5rem',
            }}
          >
            Master Kisha
          </h2>

          <p data-animate="" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            Born in Japan, trained in Tokyo. Kisha spent years as an apprentice under one
            of the city&apos;s last traditional horishi — learning patience before craft,
            and craft before art.
          </p>
          <p data-animate="" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
            The first needle did not touch skin until year five of the apprenticeship.
            By then, the foundational principles of Irezumi — composition, flow, symbolic
            weight, and respect for the body — were already internalised.
          </p>
          <p data-animate="" style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
            Now based in Munich, Kisha brings authentic Irezumi tradition to Europe.
            Each appointment is a ritual. Each design a collaboration between artist,
            client, and centuries of Japanese mythology.
          </p>

          {/* Stats */}
          <div
            data-animate=""
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--color-border)',
            }}
          >
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Custom Pieces' },
              { value: '2', label: 'Techniques' },
            ].map((stat) => (
              <div key={stat.label}>
                <strong
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2rem',
                    color: 'var(--color-primary)',
                    lineHeight: 1,
                    marginBottom: '0.25rem',
                  }}
                >
                  {stat.value}
                </strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
