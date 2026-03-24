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
  top?: string
}

export function GNav({ activePath, top = '45.5%' }: GNavProps) {
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
        mixBlendMode: 'difference',
      }}
    >
      {NAV_LINKS.map((link) => {
        const isActive = link.href === activePath
        const style: React.CSSProperties = {
          fontSize: 'var(--g-bs)',
          textDecoration: 'none',
          textAlign: 'right',
          lineHeight: 1,
          color: '#ffffff',
          borderBottom: isActive ? '1.5px solid #ffffff' : 'none',
          paddingBottom: isActive ? '1px' : '0',
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
