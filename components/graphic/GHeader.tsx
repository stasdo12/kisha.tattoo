'use client'

/**
 * GHeader — unified header bar + full-screen menu overlay
 *
 * Replaces GLogoBar + GNav + GMobileBottomNav.
 * Figma spec: kisha-tattoo / menu & menu-open frames (1920×1080, 390×840).
 *
 * theme="light" — dark text on #F2F2F2 bg (most pages)
 * theme="dark"  — white text on transparent bg (works, blog/slug, preise)
 */

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { SITE } from '@/content/site'

const NAV_HREFS = [
  { href: '/' as const,        key: 'home'    },
  { href: '/works' as const,   key: 'works'   },
  { href: '/about' as const,   key: 'about'   },
  { href: '/blog' as const,    key: 'stories' },
  { href: '/contact' as const, key: 'contact' },
] as const

const LOCALES = [
  { code: 'de' as const, label: 'De' },
  { code: 'en' as const, label: 'En' },
  { code: 'uk' as const, label: 'Ua' },
]

interface GHeaderProps {
  theme?: 'light' | 'dark'
}

export function GHeader({ theme = 'light' }: GHeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const locale   = useLocale()
  const pathname = usePathname()
  const t        = useTranslations('menu')

  /* ── Header bar colors ───────────────────────────────────────── */
  const color  = theme === 'light' ? '#0D0D0D' : '#F2F2F2'
  const bg     = theme === 'light' ? '#F2F2F2' : 'transparent'
  const border = theme === 'light'
    ? '2px solid #0D0D0D'
    : '1px solid rgba(242,242,242,0.2)'

  /* ── Locale switcher helpers ─────────────────────────────────── */
  // Build href manually: DE has no prefix (localePrefix: 'as-needed')
  const localeSwitcherHref = useCallback((targetLocale: string): string => {
    const base = pathname === '/' ? '' : pathname
    if (targetLocale === 'de') return base || '/'
    return `/${targetLocale}${base}`
  }, [pathname])

  const handleLocaleClick = useCallback((targetLocale: string) => {
    document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; SameSite=Lax`
    setIsOpen(false)
  }, [])

  /* ── Handlers ────────────────────────────────────────────────── */
  const open  = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  // ESC closes
  useEffect(() => {
    if (!isOpen) return
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [isOpen, close])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on route change (browser back/forward)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setIsOpen(false) }, [pathname])

  /* ── Render ──────────────────────────────────────────────────── */
  return (
    <>
      {/* ── Page header bar ──────────────────────────────────────── */}
      <div
        className="g-header-bar"
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '20px var(--g-pad) 12px',
          background: bg,
          borderBottom: border,
          zIndex: 100,
        }}
      >
        <Link
          href="/"
          aria-label="Kisha Tattoo — home"
          style={{ fontSize: 'var(--g-bs)', color, textDecoration: 'none', lineHeight: 1 }}
        >
          ● Kisha
        </Link>

        <button
          onClick={open}
          aria-expanded={isOpen}
          aria-controls="menu-overlay"
          className="g-header-toggle"
          style={{ color }}
        >
          [ Menu ]
        </button>

        <span style={{ fontSize: 'var(--g-bxs)', color, lineHeight: 1 }}>Tattoo</span>
      </div>

      {/* ── Full-screen overlay ───────────────────────────────────── */}
      {/* inert blocks focus/interaction when closed; no aria-hidden needed */}
      <div
        id="menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        {...(!isOpen ? { inert: true } : {})}
        className={`g-menu-overlay${isOpen ? ' is-open' : ''}`}
      >
        {/* Overlay header bar — always dark text */}
        <div className="g-menu-bar">
          <span className="g-menu-bar-logo">● Kisha</span>
          <button
            onClick={close}
            aria-label="Close menu"
            className="g-header-toggle g-header-toggle--dark"
          >
            [ Close ]
          </button>
          <span className="g-menu-bar-tattoo">Tattoo</span>
        </div>

        {/* Body: nav + lang top, footer bottom */}
        <div className="g-menu-body">
          <div className="g-menu-body-top">
            {/* Nav links — real <a> tags via next-intl Link (crawlable by Google) */}
            <nav className="g-menu-nav" aria-label="Main navigation">
              {NAV_HREFS.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="g-menu-nav-link"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>

            {/* Language switcher — plain <a> tags with manually computed href.
                next-intl <Link locale> generates /de/booking → 307 for DE default.
                Cookie is set onClick so middleware remembers the choice. */}
            <div className="g-menu-lang" role="navigation" aria-label="Language">
              {LOCALES.map(l => (
                <a
                  key={l.code}
                  href={localeSwitcherHref(l.code)}
                  onClick={() => handleLocaleClick(l.code)}
                  className={`g-menu-lang-btn${locale === l.code ? ' is-active' : ''}`}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="g-menu-footer" aria-label="Social links">
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="g-menu-footer-link"
            >
              [ Instagram ]
            </a>
            <a
              href={`https://wa.me/${SITE.contact.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="g-menu-footer-link"
            >
              [ WhatsApp ]
            </a>
            <a
              href={`mailto:${SITE.contact.email}`}
              className="g-menu-footer-link"
            >
              [ {t('footer.cooperation')} ]
            </a>
            <span className="g-menu-footer-link">[ {t('footer.location')} ]</span>
          </div>
        </div>

        {/* Background image — decorative, so aria-hidden on wrapper is sufficient */}
        <div className="g-menu-img" aria-hidden="true">
          <Image
            src="/images/home/works-01-blackwork-fullbody.jpg"
            alt="Full-body blackwork tattoo by Kisha"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            sizes="100vw"
          />
        </div>
      </div>
    </>
  )
}