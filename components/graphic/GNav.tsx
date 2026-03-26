/**
 * GNav — vertical side navigation for graphic hero sections
 *
 * Desktop: theme switches automatically based on scroll position.
 *   Mark dark-background sections with data-nav-dark.
 *   Positions are read once on mount — zero DOM querying on scroll.
 * Mobile: hidden via CSS (GMobileBottomNav takes over).
 */
import Link from 'next/link'
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


export function GNav({ activePath, theme: themeProp = 'light', top = '45.5%' }: GNavProps) {
  const isLight = themeProp === 'light'

  return (
    <nav
      className="g-hero-nav"
      aria-label="Main navigation"
      style={{
        position: 'absolute',
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
