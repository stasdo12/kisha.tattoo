import Link from 'next/link'
import { SITE } from '@/content/site'

export function GraphicFooter() {
  const year = new Date().getFullYear()

  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--color-border)',
        paddingBlock: 'var(--space-xl)',
        background: 'var(--color-bg)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <Link
            href="/graphic"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-text)',
              display: 'block',
              marginBottom: '0.25rem',
            }}
          >
            KISHA <span style={{ fontWeight: 300 }}>graphic</span>
          </Link>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            &copy; {year} {SITE.name}. {SITE.location.city}.
          </p>
        </div>

        <nav aria-label="Graphic footer links">
          <ul role="list" style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', flexWrap: 'wrap' }}>
            {[
              { href: '/graphic/works', label: 'Works' },
              { href: '/graphic/stories', label: 'Stories' },
              { href: '/graphic/contact', label: 'Contact' },
              { href: '/', label: 'Japanese Studio' },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { href: SITE.social.instagram, label: 'Instagram' },
            { href: SITE.social.facebook, label: 'Facebook' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${SITE.name} on ${s.label}`}
              style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
