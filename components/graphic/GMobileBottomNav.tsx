'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from './GNav'
import type React from 'react'

export function GMobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Mobile navigation"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#F2F2F2',
        borderTop: '1px solid #BFBFBF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        paddingTop: '0.75rem',
        paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))',
      }}
      className="g-mobile-bottom-nav"
    >
      {NAV_LINKS.map((link) => {
        const isActive = link.href === pathname
        const style: React.CSSProperties = {
          fontSize: 'var(--g-bs)',
          textDecoration: 'none',
          lineHeight: 1,
          minHeight: '36px',
          display: 'inline-flex',
          alignItems: 'center',
          color: isActive ? '#F2F2F2' : '#0D0D0D',
          background: isActive ? '#0D0D0D' : 'transparent',
          padding: isActive ? '0.25rem 0.5rem' : '0',
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
