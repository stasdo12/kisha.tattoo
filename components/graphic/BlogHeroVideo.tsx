'use client'

import { useEffect, useRef } from 'react'

export function BlogHeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.src = window.innerWidth <= 768
      ? '/video/hero_blog_mobile.mp4'
      : '/video/hero_blog_desktop.mp4'
    ref.current.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  )
}