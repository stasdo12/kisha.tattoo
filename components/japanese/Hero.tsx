'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/**
 * Hero section — 'use client' because of GSAP scroll animation.
 * The H1 lives here — critical for SEO. The text content is visible
 * in the pre-rendered HTML because Next.js Server Components render
 * this component's initial HTML server-side; the GSAP animation
 * is an enhancement that fires only after hydration.
 */
export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let cleanup = () => {}

    async function initAnimation() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      if (!sectionRef.current || !titleRef.current) return

      // Parallax background on scroll
      const bg = sectionRef.current.querySelector<HTMLElement>('.hero-bg')
      if (bg) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          onUpdate: (self) => {
            bg.style.transform = `translateY(${self.progress * 80}px)`
          },
        })
      }

      // Entrance animation for title
      gsap.from(titleRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      })

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill())
    }

    initAnimation()
    return () => cleanup()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="Kisha Tattoo — Japanese tattoo studio Munich"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '80px', // navbar clearance
      }}
    >
      {/* Background — decorative, aria-hidden */}
      <div
        className="hero-bg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          willChange: 'transform',
        }}
      >
        {/* TODO: replace with real hero image */}
        <Image
          src="https://picsum.photos/seed/hero-kisha/1920/1080"
          alt="" // decorative
          fill
          priority
          style={{ objectFit: 'cover', opacity: 0.55 }}
          sizes="100vw"
        />
        {/* Dark overlay + ink gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 100%), radial-gradient(ellipse at 20% 50%, rgba(204,51,51,0.12) 0%, transparent 55%)',
          }}
        />
      </div>

      {/* Content */}
      <div
        className="container"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Kanji badge — decorative label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
            padding: '0.5rem 1rem',
            background: 'rgba(204, 51, 51, 0.1)',
            border: '1px solid rgba(204, 51, 51, 0.3)',
            borderRadius: '2px',
          }}
          aria-hidden="true"
        >
          <span style={{ fontFamily: 'var(--font-japanese)', fontSize: '1.1rem', color: 'var(--color-primary)' }}>
            喜捨刺青
          </span>
          <span style={{ width: '1px', height: '1em', background: 'var(--color-border)' }} />
          <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-muted)' }}>
            Kisha Irezumi
          </span>
        </div>

        {/*
          H1 — Primary keyword target.
          Must be crawlable in initial HTML (confirmed by SSR + 'use client' pattern).
        */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 7vw, 6rem)',
            lineHeight: 1.05,
            maxWidth: '15ch',
            marginBottom: 'var(--space-lg)',
          }}
        >
          <span style={{ display: 'block' }}>Japanese</span>
          <span style={{ display: 'block' }}>Tattoo Studio</span>
          <span
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Munich
          </span>
        </h1>

        <p
          style={{
            color: 'var(--color-text-muted)',
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            maxWidth: '48ch',
            lineHeight: 1.7,
            marginBottom: 'var(--space-lg)',
          }}
        >
          Traditional Irezumi artistry — Tebori and machine. Custom mythological
          compositions. Every piece designed once, tattooed for life.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/booking" className="btn btn-primary">
            Book Consultation
          </Link>
          <Link href="/gallery" className="btn btn-secondary">
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll indicator — decorative */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <span style={{ fontSize: '1.2rem' }}>⇣</span>
      </div>
    </section>
  )
}
