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
      // The first frame of the video itself, so playback starts without a
      // visible swap. It sits in the markup on purpose: the src above is
      // assigned after hydration, which the preload scanner cannot see, so
      // until this poster existed the hero stayed blank until the 474KB mobile
      // video arrived — LCP 6.5s on a page whose siblings paint in 2.2s.
      poster="/images/blog/hero-blog-poster.jpg"
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