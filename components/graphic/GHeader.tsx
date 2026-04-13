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

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { SITE } from '@/content/site'
import { trackWhatsAppClick } from '@/lib/gtag'

const NAV_HREFS = [
  { href: '/works' as const,                  key: 'works'   },
  { href: '/about' as const,                  key: 'about'   },
  { href: '/blog' as const,                   key: 'stories' },
  { href: '/tattoo-preise-muenchen' as const, key: 'preise'  },
  { href: '/faq' as const,                    key: 'faq'     },
  { href: '/contact' as const,                key: 'contact' },
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
  const [isOpen, setIsOpen]   = useState(false)
  const [hidden, setHidden]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY             = useRef(0)
  const locale   = useLocale()
  const pathname = usePathname()
  const t        = useTranslations('menu')

  /* ── Hide on scroll-down, show on scroll-up ─────────────────── */
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY
      setScrolled(current > 20)
      if (current > lastScrollY.current && current > 80) {
        setHidden(true)   // scrolling down
      } else {
        setHidden(false)  // scrolling up
      }
      lastScrollY.current = current
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── Header bar colors ───────────────────────────────────────── */
  const color  = theme === 'light' ? '#0D0D0D' : '#F2F2F2'
  const bg     = theme === 'light' ? '#F2F2F2' : (scrolled ? '#0D0D0D' : 'transparent')
  const border = theme === 'light'
    ? '2px solid #0D0D0D'
    : scrolled ? '1px solid rgba(242,242,242,0.15)' : 'none'

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

  // Body scroll lock — position:fixed needed for iOS Safari
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = parseFloat(document.body.style.top || '0') * -1
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollY)
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
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
          position: 'fixed',
          top: 0, left: 0, right: 0,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '20px var(--g-pad) 12px',
          background: bg,
          borderBottom: border,
          zIndex: 100,
          transform: hidden && !isOpen ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.3s ease, background 0.2s ease',
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
          <Link
            href="/"
            onClick={close}
            aria-label="Kisha Tattoo — home"
            className="g-menu-bar-logo"
          >
            ● Kisha
          </Link>
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

          {/* CTA button — full-width, above footer */}
          <Link
            href="/booking"
            onClick={close}
            className="g-menu-cta"
          >
            {t('footer.booking')}
          </Link>

        </div>

        {/* Background image + footer links overlaid at bottom */}
        <div className="g-menu-img">
          <Image
            src="/images/menu/menu-img.jpg"
            alt="Full-body blackwork tattoo by Kisha"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="100vw"
          />
          {/* Social links — pinned to bottom of photo */}
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
              onClick={() => trackWhatsAppClick('header-menu')}
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
      </div>
    </>
  )
}