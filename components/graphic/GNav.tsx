/**
 * GNav — vertical side navigation for graphic hero sections
 *
 * Desktop: theme switches automatically based on scroll position.
 *   Mark dark-background sections with data-nav-dark.
 *   Positions are read once on mount — zero DOM querying on scroll.
 * Mobile: hidden via CSS (GMobileBottomNav takes over).
 */
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import type React from 'react'

export const NAV_LINKS = [
  { href: '/',        label: 'Home'    },
  { href: '/works',   label: 'Works'   },
  { href: '/about',   label: 'About'   },
  { href: '/blog',    label: 'Blog'    },
  { href: '/contact', label: 'Contact' },
]

interface GNavProps {
  activePath: string
  theme?: 'light' | 'dark'
  top?: string
}

// Nav sits at 45.5% from viewport top
const NAV_Y_RATIO = 0.455

export function GNav({ activePath, theme: themeProp = 'light', top = '45.5%' }: GNavProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>(themeProp)

  useEffect(() => {
    if (window.innerWidth <= 767) return

    const darkEls = Array.from(document.querySelectorAll<HTMLElement>('[data-nav-dark]'))
    if (!darkEls.length) return

    // Read positions relative to document — done once, not on every scroll
    const readZones = () =>
      darkEls.map((el) => {
        const rect = el.getBoundingClientRect()
        return {
          top:    rect.top    + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        }
      })

    let zones = readZones()

    const check = () => {
      const navDocY = window.scrollY + window.innerHeight * NAV_Y_RATIO
      const isDark  = zones.some((z) => navDocY >= z.top && navDocY <= z.bottom)
      setTheme(isDark ? 'dark' : 'light')
    }

    // Recalculate positions on resize (viewport/layout may change)
    const onResize = () => {
      zones = readZones()
      check()
    }

    let rafId: number
    const onScroll = () => {
      cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(check)
    }

    check()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const isLight = theme === 'light'

  return (
    <nav
      className="g-hero-nav"
      aria-label="Main navigation"
      style={{
        position: 'fixed',
        right: 'var(--g-pad)',
        top,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.5rem',
        zIndex: 50,
      }}
    >
      {NAV_LINKS.map((link) => {
        const isActive = link.href === activePath
        const style: React.CSSProperties = {
          fontSize: 'var(--g-bs)',
          textDecoration: 'none',
          textAlign: 'right',
          lineHeight: 1,
          color: isActive
            ? (isLight ? '#F2F2F2' : '#0D0D0D')
            : (isLight ? '#0D0D0D' : '#F2F2F2'),
          background: isActive
            ? (isLight ? '#0D0D0D' : '#F2F2F2')
            : 'transparent',
          padding: isActive ? '0.25rem 0.5rem' : '0',
          opacity: isActive ? 1 : (isLight ? 1 : 0.7),
          transition: 'color 0.2s, background 0.2s',
        }
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            style={style}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
