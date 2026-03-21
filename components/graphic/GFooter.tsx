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
      style={{ background: '#0D0D0D', padding: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}
    >
      <div className="g-container">

        {/* Top row */}
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

        {/* CTA */}
        <CtaStrip
          label="Discuss your vision"
          style={{
            background: '#F2F2F2',
            color: '#0D0D0D',
            marginBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)',
          }}
        />

        {/* Bottom bar */}
        <div
          className="g-footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <Link
            href="/graphic"
            style={{ fontSize: 'var(--g-bs)', color: '#F2F2F2', textDecoration: 'none' }}
          >
            ● Kisha
          </Link>
          <span style={{ fontSize: 'var(--g-tag)', color: '#F2F2F2' }}>[ All Rights Reserved. 2025 ]</span>
          <span style={{ fontSize: 'var(--g-tag)', color: '#F2F2F2' }}>[ Made by Artem Yakovrokul ]</span>
        </div>

      </div>
    </footer>
  )
}
