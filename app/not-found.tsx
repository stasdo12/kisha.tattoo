import type { Metadata } from 'next'
import { NotFoundView } from '@/components/graphic/NotFoundView'

export const metadata: Metadata = {
  title: '404 — Seite nicht gefunden | Kisha Tattoo München',
  robots: { index: false, follow: false },
}

// The root layout is empty (html and body live in [locale]/layout), and unknown URLs that never
// reach a locale end up here, so this page brings its own html and body.
export default function NotFound() {
  return (
    <html lang="de">
      <body>
        <NotFoundView />
      </body>
    </html>
  )
}
