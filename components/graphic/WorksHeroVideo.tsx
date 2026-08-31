'use client'

import { useEffect, useRef } from 'react'

export function WorksHeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.src = window.innerWidth <= 768
      ? '/video/hero_works_mobile.mp4'
      : '/video/hero_works_desktop.mp4'
    el.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      poster="/images/work/hero-works-poster.jpg"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        zIndex: 0,
      }}
    />
  )
}
