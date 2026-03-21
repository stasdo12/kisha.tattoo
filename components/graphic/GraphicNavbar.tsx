'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE } from '@/content/site'

const NAV_LINKS = [
  { href: '/graphic', label: 'Home' },
  { href: '/graphic/works', label: 'Works' },
  { href: '/graphic/about', label: 'About' },
  { href: '/graphic/stories', label: 'Stories' },
  { href: '/graphic/contact', label: 'Contact' },
]

export function GraphicNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      role="banner"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 200,
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        href="/graphic"
        aria-label={`${SITE.name} Graphic — Home`}
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--color-text)',
        }}
      >
        KISHA <span style={{ fontWeight: 300, letterSpacing: '0.05em' }}>graphic</span>
      </Link>

      <nav aria-label="Graphic section navigation">
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
                  fontSize: '0.85rem',
                  fontWeight: pathname === link.href ? 700 : 400,
                  color: pathname === link.href ? 'var(--color-text)' : 'var(--color-text-muted)',
                  letterSpacing: '0.05em',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href="/" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textDecoration: 'underline' }}>
        ← Japanese Studio
      </Link>
    </header>
  )
}
