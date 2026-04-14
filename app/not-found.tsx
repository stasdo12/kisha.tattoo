import type { Metadata } from 'next'
import Link from 'next/link'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: '404 — Seite nicht gefunden | Kisha Tattoo München',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      {/* Cinzel font — not loaded by [locale]/layout in this route */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');`}</style>

      <main
        data-theme="graphic"
        style={{
          minHeight: '100dvh',
          background: '#F2F2F2',
          color: '#1a1a1a',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background kanji */}
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            fontSize: 'clamp(16rem, 40vw, 28rem)',
            lineHeight: 1,
            color: '#1a1a1a',
            opacity: 0.04,
            userSelect: 'none',
            pointerEvents: 'none',
            fontFamily: 'serif',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          迷
        </span>

        {/* Top logo */}
        <Link
          href="/"
          style={{
            position: 'absolute',
            top: '2rem',
            left: '2rem',
            fontFamily: "'Cinzel', Georgia, serif",
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: '#1a1a1a',
            textDecoration: 'none',
          }}
        >
          KISHA TATTOO
        </Link>

        {/* Main content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
              letterSpacing: '0.3em',
              color: '#888',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            Fehler
          </p>

          <h1
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: 'clamp(5rem, 18vw, 10rem)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.02em',
              color: '#1a1a1a',
              marginBottom: '1.5rem',
            }}
          >
            404
          </h1>

          <p
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#555',
              maxWidth: '34ch',
              lineHeight: 1.7,
              margin: '0 auto 2.5rem',
            }}
          >
            Diese Seite existiert nicht — oder sie hat den Weg verloren.
          </p>

          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'Cinzel', Georgia, serif",
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#F2F2F2',
              background: '#1a1a1a',
              padding: '0.85rem 2.2rem',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
          >
            Zurück zur Startseite
          </Link>
        </div>

        {/* Bottom line */}
        <p
          style={{
            position: 'absolute',
            bottom: '2rem',
            fontFamily: 'system-ui, sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.15em',
            color: '#aaa',
          }}
        >
          MÜNCHEN · TATTOO STUDIO
        </p>
      </main>
    </>
  )
}