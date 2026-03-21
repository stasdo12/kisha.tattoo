'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'
import { SITE } from '@/content/site'

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/graphic', label: 'Graphic' },
  { href: '/faq', label: 'FAQ' },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: isScrolled ? '0.75rem 1.5rem' : '1.25rem 1.5rem',
          background: isScrolled ? 'var(--color-glass-bg)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
          transition: 'padding 0.3s ease, background 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label={`${SITE.name} — Home`}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--color-text)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <span style={{ color: 'var(--color-primary)' }}>●</span>
          KISHA
          <span style={{ color: 'var(--color-primary)' }}>●</span>
        </Link>

        {/* Desktop navigation — hidden on mobile via CSS class */}
        <nav aria-label="Main navigation" className="nav-desktop" style={{ alignItems: 'center', gap: '2rem' }}>
          <ul
            role="list"
            style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text-muted)',
                    transition: 'color 0.2s ease',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              cursor: 'pointer',
              color: 'var(--color-text)',
              flexShrink: 0,
            }}
          >
            {theme === 'dark' ? '☀' : '◐'}
          </button>

          <Link
            href="/booking"
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.78rem' }}
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile right side: theme toggle + hamburger */}
        <div className="nav-mobile-btn" style={{ alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'var(--color-card)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              cursor: 'pointer',
              color: 'var(--color-text)',
            }}
          >
            {theme === 'dark' ? '☀' : '◐'}
          </button>

          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
              width: '40px',
              height: '40px',
              padding: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--color-text)',
                borderRadius: '2px',
                transition: 'transform 0.25s ease, opacity 0.25s ease',
                transform: isMenuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--color-text)',
                borderRadius: '2px',
                transition: 'opacity 0.25s ease',
                opacity: isMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--color-text)',
                borderRadius: '2px',
                transition: 'transform 0.25s ease, opacity 0.25s ease',
                transform: isMenuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 190,
          background: 'var(--color-bg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.33, 1, 0.68, 1)',
          pointerEvents: isMenuOpen ? 'all' : 'none',
        }}
      >
        <nav aria-label="Mobile navigation links">
          <ul
            role="list"
            style={{
              listStyle: 'none',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              padding: 0,
              margin: 0,
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.3s ease ${i * 0.06}s, transform 0.3s ease ${i * 0.06}s`,
                }}
              >
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.4rem, 6vw, 2rem)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/booking"
          className="btn btn-primary"
          style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
          onClick={() => setIsMenuOpen(false)}
        >
          Book Now
        </Link>
      </div>
    </>
  )
}
