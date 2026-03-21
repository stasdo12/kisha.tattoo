import Link from 'next/link'
import { SITE } from '@/content/site'

const FOOTER_NAV = [
  {
    heading: 'Japanese Tattoos',
    links: [
      { href: '/#services', label: 'Services' },
      { href: '/#process', label: 'Process' },
      { href: '/gallery', label: 'Portfolio' },
      { href: '/booking', label: 'Book Now' },
    ],
  },
  {
    heading: 'Graphic Tattoos',
    links: [
      { href: '/graphic', label: 'Overview' },
      { href: '/graphic/works', label: 'Works' },
      { href: '/graphic/stories', label: 'Stories' },
      { href: '/graphic/contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Info',
    links: [
      { href: '/faq', label: 'FAQ' },
      { href: '/aftercare', label: 'Aftercare' },
      { href: '/booking', label: 'Consultation' },
    ],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        paddingBlock: 'var(--space-xl)',
      }}
    >
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              aria-label={`${SITE.name} — Home`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                color: 'var(--color-text)',
              }}
            >
              <span style={{ color: 'var(--color-primary)' }}>●</span>
              KISHA
              <span style={{ color: 'var(--color-primary)' }}>●</span>
            </Link>
            <p
              style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                maxWidth: '28ch',
                marginBottom: '1.5rem',
              }}
            >
              Japanese &amp; Graphic tattoo studio in Munich. Custom designs only.
            </p>
            <address
              style={{ fontStyle: 'normal', color: 'var(--color-text-muted)', fontSize: '0.8rem', lineHeight: 1.8 }}
            >
              {SITE.location.street}<br />
              {SITE.location.postalCode} {SITE.location.city}<br />
              <a href={`mailto:${SITE.contact.email}`} style={{ color: 'var(--color-primary)' }}>
                {SITE.contact.email}
              </a>
            </address>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <nav key={col.heading} aria-labelledby={`footer-${col.heading}`}>
              <h3
                id={`footer-${col.heading}`}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--color-primary)',
                  marginBottom: '1rem',
                }}
              >
                {col.heading}
              </h3>
              <ul role="list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.875rem',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: 'var(--space-md)',
            borderTop: '1px solid var(--color-border)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[
              { href: SITE.social.instagram, label: 'Instagram' },
              { href: SITE.social.facebook, label: 'Facebook' },
              { href: SITE.social.reddit, label: 'Reddit' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${SITE.name} on ${s.label}`}
                style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem', transition: 'color 0.2s ease' }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
