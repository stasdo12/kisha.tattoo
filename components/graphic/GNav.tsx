/**
 * GNav — vertical side navigation for graphic hero sections
 *
 * variant="filled" + theme="light" → active: black block + white text   (light bg: home / about / contact / blog)
 * variant="filled" + theme="dark"  → active: white block + dark text    (dark bg: works / article)
 */
import Link from 'next/link'
import type React from 'react'

export const NAV_LINKS = [
  { href: '/',         label: 'Home'    },
  { href: '/works',    label: 'Works'   },
  { href: '/about',    label: 'About'   },
  { href: '/blog',     label: 'Blog'    },
  { href: '/contact',  label: 'Contact' },
]

interface GNavProps {
  activePath: string
  theme?: 'light' | 'dark'
  top?: string
}

export function GNav({ activePath, theme = 'light', top = '45.5%' }: GNavProps) {
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
          // active: always black block + white text
          // inactive: dark text on light bg, white text on dark bg
          color: isActive ? '#F2F2F2' : (isLight ? '#0D0D0D' : '#F2F2F2'),
          background: isActive ? '#0D0D0D' : 'transparent',
          padding: isActive ? '0.25rem 0.5rem' : '0',
          opacity: isActive ? 1 : (isLight ? 1 : 0.7),
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
