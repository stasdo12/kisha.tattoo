import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100dvh',
        textAlign: 'center',
        padding: '2rem',
        background: 'var(--color-bg)',
        color: 'var(--color-text)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-japanese)',
          fontSize: '6rem',
          opacity: 0.12,
          lineHeight: 1,
          marginBottom: '1rem',
        }}
        aria-hidden="true"
      >
        迷
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          marginBottom: '0.5rem',
        }}
      >
        404
      </h1>
      <p
        style={{
          color: 'var(--color-text-muted)',
          marginBottom: '2rem',
          maxWidth: '30ch',
        }}
      >
        This page does not exist. Perhaps it was never meant to be found.
      </p>
      <Link href="/" className="btn btn-primary">
        Return Home
      </Link>
    </main>
  )
}
