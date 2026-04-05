'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main id="main-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', padding: '2rem', background: '#F2F2F2', textAlign: 'center' }}>
      <h1 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D', marginBottom: '1rem' }}>
        Etwas ist schiefgelaufen.
      </h1>
      <p style={{ fontSize: 'var(--g-bm)', lineHeight: 'var(--g-lh-bm)', color: 'rgba(13,13,13,0.6)', marginBottom: '2rem', maxWidth: '480px' }}>
        Ein unerwarteter Fehler ist aufgetreten. Bitte versuche es erneut.
      </p>
      <button
        onClick={reset}
        style={{ padding: '0.6rem 1.5rem', border: '1px solid #0D0D0D', background: 'transparent', color: '#0D0D0D', fontSize: 'var(--g-bm)', cursor: 'pointer' }}
      >
        Erneut versuchen
      </button>
    </main>
  )
}