'use client'
/**
 * GRAPHIC CONTACT — Kisha Irezumi
 * Design: Figma spec 1920 / 1440 / 390px
 *
 * Hero: light grey bg (#F2F2F2), form left (912px), vertical nav right
 * Form: inline label + underline input rows, toggle buttons, file upload
 * Footer: reused dark footer
 */
import type React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { SITE } from '@/content/site'
import { CtaStrip } from '@/components/graphic/CtaStrip'

const NAV_LINKS = [
  { href: '/graphic',          label: 'Home'    },
  { href: '/graphic/works',    label: 'Works'   },
  { href: '/graphic/about',    label: 'About'   },
  { href: '/graphic/blog',     label: 'Blog'    },
  { href: '/graphic/contact',  label: 'Contact' },
]

/* ── Shared style tokens ──────────────────────────────────────────────────── */
const LABEL: React.CSSProperties = {
  fontSize: 'var(--g-s)',
  lineHeight: 'var(--g-lh-s)',
  color: '#0D0D0D',
  whiteSpace: 'nowrap',
  flexShrink: 0,
}

const UNDERLINE_ROW: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  borderBottom: '1px solid #0D0D0D',
  paddingBottom: '4px',
}

const INPUT: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontFamily: 'var(--g-font)',
  fontSize: 'var(--g-tag)',
  fontWeight: 500,
  color: '#BFBFBF',
  width: '100%',
  letterSpacing: 'var(--g-ls)',
}

export default function GraphicContactPage() {
  const [experience, setExperience] = useState<'yes' | 'no' | null>(null)

  return (
    <main id="main-content">

      {/* ── HERO / FORM SECTION ───────────────────────────────────────────── */}
      <section
        aria-label="Book an experience"
        className="g-contact-hero"
        style={{
          position: 'relative',
          background: '#F2F2F2',
          minHeight: 'clamp(754px, 53.75vw, 774px)',
          paddingBottom: '3rem',
          overflow: 'hidden',
        }}
      >

        {/* ── Logo bar ── */}
        <div
          className="g-hero-logobar"
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            display: 'flex',
            alignItems: 'flex-end',
            padding: '6px var(--g-pad) 12px',
            background: '#F2F2F2',
            borderBottom: '2px solid #0D0D0D',
            zIndex: 10,
          }}
        >
          <div className="g-hero-logo-text">
            <span style={{ fontSize: 'var(--g-bs)', color: '#0D0D0D' }}>● Kisha</span>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>[ タトゥ ]</span>
            <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>Tattoo</span>
          </div>
          <div className="g-hero-logo-strips" aria-hidden="true" />
        </div>

        {/* ── H1 ── */}
        <h1
          className="g-contact-h1"
          style={{
            position: 'absolute',
            top: '72px',
            left: 'var(--g-pad)',
            fontSize: 'var(--g-xl)',
            lineHeight: 'var(--g-lh-xl)',
            color: '#0D0D0D',
          }}
        >
          Book experience
        </h1>

        {/* ── Form ── */}
        <form
          className="g-contact-form"
          style={{
            position: 'absolute',
            top: 'clamp(224px, calc(144px + 5.56vw), 244px)',
            left: 'var(--g-pad)',
            width: 'clamp(520px, 47.5vw, 912px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
          onSubmit={(e) => e.preventDefault()}
        >

          {/* Name */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-name" style={LABEL}>My name is</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-name" name="name" type="text" placeholder="[ Name ]" required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Email */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-email" style={LABEL}>My email is</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-email" name="email" type="email" placeholder="[ Email ]" required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Phone */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-phone" style={LABEL}>My phone number is</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-phone" name="phone" type="tel" placeholder="[ Number ]" required style={INPUT} />
              <span style={{ fontSize: 'var(--g-tag)', color: '#0D0D0D' }}>*</span>
            </div>
          </div>

          {/* Idea */}
          <div className="g-contact-row" style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
            <label htmlFor="c-idea" style={LABEL}>My tattoo idea is</label>
            <div style={UNDERLINE_ROW}>
              <input id="c-idea" name="idea" type="text" placeholder="[ Tattoo idea ]" style={INPUT} />
            </div>
          </div>

          {/* Experience toggle */}
          <div className="g-contact-stacked" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={LABEL}>Did we work together before?</span>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {(['yes', 'no'] as const).map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setExperience(val)}
                  className="g-contact-toggle"
                  style={{
                    padding: '8px 24px',
                    border: '1px solid #0D0D0D',
                    background: experience === val ? '#0D0D0D' : 'transparent',
                    color: experience === val ? '#F2F2F2' : '#0D0D0D',
                    fontFamily: 'var(--g-font)',
                    fontSize: 'var(--g-tag)',
                    fontWeight: 500,
                    letterSpacing: 'var(--g-ls)',
                    cursor: 'pointer',
                    minWidth: '175px',
                  }}
                >
                  {val === 'yes' ? 'Yes, I liked it' : "No, I'm new"}
                </button>
              ))}
            </div>
          </div>

          {/* Reference / file upload */}
          <div className="g-contact-stacked" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <span style={LABEL}>Tattoo reference</span>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <p style={{ fontSize: 'var(--g-tag)', lineHeight: 1.4, color: '#0D0D0D', maxWidth: '26rem' }}>
                *Please send the tattoo references and inspiration images you&apos;d like to share with the artist
              </p>
              <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF', whiteSpace: 'nowrap' }}>
                [ max file size 100 mb ]
              </span>
            </div>
            <label
              htmlFor="c-files"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '32px',
                border: '1px solid #0D0D0D',
                fontSize: 'var(--g-tag)',
                fontWeight: 500,
                color: '#0D0D0D',
                cursor: 'pointer',
                letterSpacing: 'var(--g-ls)',
              }}
            >
              Choose files
            </label>
            <input id="c-files" name="files" type="file" multiple style={{ display: 'none' }} />
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              background: '#0D0D0D',
              color: '#F2F2F2',
              border: 'none',
              fontFamily: 'var(--g-font)',
              fontSize: 'var(--g-s)',
              lineHeight: 'var(--g-lh-s)',
              fontWeight: 500,
              letterSpacing: 'var(--g-ls)',
              cursor: 'pointer',
              marginTop: '8px',
            }}
          >
            Submit
          </button>

        </form>

        {/* ── Vertical nav ── */}
        <nav
          className="g-hero-nav"
          aria-label="Main navigation"
          style={{
            position: 'absolute',
            right: 'var(--g-pad)',
            top: '45.5%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '0.5rem',
            zIndex: 10,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/graphic/contact'
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                style={{
                  fontSize: 'var(--g-bs)',
                  color: isActive ? '#F2F2F2' : '#0D0D0D',
                  textDecoration: 'none',
                  textAlign: 'right',
                  lineHeight: 1,
                  padding: isActive ? '0.25rem 0.5rem' : '0',
                  background: isActive ? '#0D0D0D' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        role="contentinfo"
        className="g-footer-section"
        style={{ background: '#0D0D0D', padding: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}
      >
        <div className="g-container">

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
              style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#F2F2F2', maxWidth: '40rem' }}
            >
              Relax and book your seat right now
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
              <span className="g-tag g-tag--white">Social media</span>
              <a
                href={SITE.social.instagram}
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none' }}
              >
                Instagram
              </a>
              <a
                href={`https://wa.me/${SITE.contact.phone.replace(/\D/g, '')}`}
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none' }}
              >
                What&apos;s App
              </a>
            </div>
          </div>

          <CtaStrip
            label="Discuss your vision"
            style={{ background: '#F2F2F2', color: '#0D0D0D', marginBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}
          />

          <div
            className="g-footer-bottom"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
          >
            <Link href="/graphic" style={{ fontSize: 'var(--g-bs)', color: '#F2F2F2', textDecoration: 'none' }}>
              ● Kisha
            </Link>
            <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}>[ All Rights Reserved. 2025 ]</span>
            <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}>Design by Artist Nowhere</span>
          </div>

        </div>
      </footer>

    </main>
  )
}
