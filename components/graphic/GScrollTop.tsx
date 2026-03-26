'use client'
import { useEffect, useState } from 'react'

export function GScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="g-scroll-top"
      style={{
        position: 'fixed',
        bottom: 'clamp(1.5rem, 2.5vw, 2.5rem)',
        right: 'clamp(1.5rem, 2.5vw, 2.5rem)',
        width: '3rem',
        height: '3rem',
        background: '#0D0D0D',
        color: '#F2F2F2',
        border: '1px solid rgba(242,242,242,0.2)',
        fontFamily: 'var(--g-font)',
        fontSize: '1.1rem',
        fontWeight: 500,
        letterSpacing: 'var(--g-ls)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.25s ease',
        zIndex: 90,
      }}
    >
      ↑
    </button>
  )
}
