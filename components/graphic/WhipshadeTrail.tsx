'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  r: number       // radius
  alpha: number   // current opacity
  decay: number   // fade speed per frame
}

export function WhipshadeTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    // Desktop only — skip touch devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    const particles: Particle[] = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const MAX_PARTICLES = 300

    const onMove = (e: MouseEvent) => {
      // 2 particles, tight scatter — clean ink trace
      for (let i = 0; i < 2; i++) {
        if (particles.length >= MAX_PARTICLES) particles.shift() // drop oldest
        const scatter = 1.2
        particles.push({
          x:     e.clientX + (Math.random() - 0.5) * scatter * 2,
          y:     e.clientY + (Math.random() - 0.5) * scatter * 2,
          r:     Math.random() * 1.2 + 0.8,
          alpha: Math.random() * 0.35 + 0.20,
          decay: Math.random() * 0.008 + 0.005,
        })
      }
    }
    window.addEventListener('mousemove', onMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.alpha -= p.decay

        if (p.alpha <= 0) {
          particles.splice(i, 1)
          continue
        }

        // Soft radial gradient — whipshade bloom
        const bloom = p.r * 4
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, bloom)
        grad.addColorStop(0,    `rgba(13,13,13,${p.alpha})`)
        grad.addColorStop(0.35, `rgba(13,13,13,${p.alpha * 0.3})`)
        grad.addColorStop(1,    `rgba(13,13,13,0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, bloom, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      aria-hidden="true"
    />
  )
}
