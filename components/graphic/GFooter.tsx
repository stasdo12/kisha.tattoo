/**
 * GFooter — shared dark footer for all graphic pages
 * "Relax and book your seat right now" + social links + CtaStrip + bottom bar
 */
import Link from 'next/link'
import { SITE } from '@/content/site'
import { CtaStrip } from '@/components/graphic/CtaStrip'

export function GFooter() {
  return (
    <footer
      role="contentinfo"
      className="g-footer-section"
      data-nav-dark
      style={{ background: '#0D0D0D' }}
    >
      {/* Top row */}
      <div
        className="g-container"
        style={{ paddingTop: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}
      >
        <div
          className="g-footer-top"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 'clamp(3rem, 17.7vw, 21.25rem)',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <h2
            className="g-footer-heading"
            style={{
              fontSize: 'var(--g-l)',
              lineHeight: 'var(--g-lh-l)',
              color: '#F2F2F2',
              maxWidth: '40rem',
            }}
          >
            Relax and book your seat right now
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
            <span className="g-tag g-tag--white">Social media</span>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none' }}
            >
              Instagram
            </a>
            <a
              href={`https://wa.me/${SITE.contact.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none' }}
            >
              What&apos;s App
            </a>
          </div>
        </div>
      </div>

      {/* CTA — exactly 20px from footer edges */}
      <div style={{ padding: '0 var(--g-pad)', marginBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}>
        <CtaStrip
          label="Discuss your vision"
          style={{
            background: '#F2F2F2',
            color: '#0D0D0D',
          }}
        />
      </div>

      {/* SEO links — 3 columns, same pattern as bottom bar */}
      <div
        className="g-container"
        style={{
          borderTop: '1px solid rgba(242,242,242,0.1)',
          paddingTop: 'clamp(1.5rem, 2.08vw, 2.5rem)',
          paddingBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)',
        }}
      >
        <div
          className="g-footer-links"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.4)', marginBottom: '0.25rem' }}>Stile</span>
            {[
              { href: '/japanisches-tattoo-muenchen', label: 'Japanisches Tattoo München' },
              { href: '/grafik-tattoo-muenchen',      label: 'Grafik Tattoo München' },
              { href: '/linework-tattoo-muenchen',    label: 'Linework Tattoo München' },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.65)', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.4)', marginBottom: '0.25rem' }}>Pages</span>
            {[
              { href: '/booking',   label: 'Termin buchen' },
              { href: '/faq',       label: 'FAQ' },
              { href: '/aftercare', label: 'Aftercare' },
              { href: '/awards',    label: 'Awards' },
              { href: '/about',     label: 'Über Kisha' },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.65)', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.4)', marginBottom: '0.25rem' }}>Einzugsgebiet</span>
            {[
              { href: '/tattoo-eching',   label: 'Tattoo Eching' },
              { href: '/tattoo-freising', label: 'Tattoo Freising' },
              { href: '/tattoo-neufahrn', label: 'Tattoo Neufahrn' },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.65)', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — exact original structure */}
      <div
        className="g-container"
        style={{ paddingBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}
      >
        <div
          className="g-footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(242,242,242,0.1)',
            paddingTop: 'clamp(1rem, 1.5vw, 1.5rem)',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Link href="/" style={{ fontSize: 'var(--g-bs)', color: '#F2F2F2', textDecoration: 'none' }}>
            ● Kisha
          </Link>
          <span suppressHydrationWarning style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.55)' }}>
            {`[ All Rights Reserved. ${new Date().getFullYear()} ]`}
          </span>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.55)' }}>
            [ Made by Artem Yakovrokul ]
          </span>
        </div>
      </div>

    </footer>
  )
}
