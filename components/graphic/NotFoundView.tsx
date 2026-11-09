import Image from 'next/image'
import Link from 'next/link'
import { DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import '@/styles/graphic.css'
import seigaiha from './Seigaiha.module.css'
import s from './NotFoundView.module.css'
import { NotFoundWhatsApp } from './NotFoundWhatsApp'

// Unknown URLs render this page outside [locale]/layout, so the site font is loaded here as well,
// with the layout's arguments. A <style> @import from Google Fonts breaks under React 19.
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-neue',
  display: 'swap',
  weight: ['500'],
})

// Plain next/link and German paths: outside the locale layout there is no locale to keep,
// and the whole 404 is German.
const LINKS = [
  { href: '/works', title: 'Arbeiten', text: 'Alle meine Tattoos' },
  { href: '/tattoo-preise-muenchen', title: 'Preise', text: 'Was dein Tattoo kostet' },
  { href: '/booking', title: 'Termin anfragen', text: 'Schick mir deine Idee' },
  { href: '/tattoo-gutschein-muenchen', title: 'Gutschein', text: 'Ein Tattoo verschenken' },
]

/** The 404 page itself, shared by the root and the [locale] not-found boundaries. */
export function NotFoundView() {
  return (
    <main data-theme="graphic" className={`${dmSans.variable} ${s.page}`}>
      <div className={s.bar}>
        <Link href="/" aria-label="Kisha Tattoo — home" className={s.barLogo}>● Kisha</Link>
        <span className={s.barTag}>Tattoo</span>
      </div>

      <section className={s.hero}>
        <div>
          <p className="g-tag">Fehler 404</p>
          <h1 className={s.title}>Diese Seite ist abgetaucht.</h1>
          <p className={s.lead}>
            Den Link gibt es nicht mehr. Schreib mir trotzdem, ich helfe dir gern weiter.
          </p>
          <div className={s.actions}>
            <NotFoundWhatsApp className={s.primary} />
            <Link href="/" className={s.secondary}>Zur Startseite</Link>
          </div>
        </div>

        <div className={`${seigaiha.waves} ${s.frame}`}>
          <div className={s.photo}>
            <Image
              src="/images/work/koi-lotus-tattoo-unterarm.jpg"
              alt="Koi mit Lotus und Wellen am Unterarm, Tattoo von Kisha"
              fill
              sizes="(max-width: 899px) 100vw, 460px"
              style={{ objectFit: 'cover' }}
            />
            <span className={s.photoLabel}>Koi & Lotus</span>
          </div>
        </div>
      </section>

      <section className={s.more} aria-labelledby="not-found-more">
        <h2 id="not-found-more" className={s.moreTitle}>Vielleicht suchst du das</h2>
        <nav className={s.links}>
          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={s.link}>
              <span className={s.linkTitle}>{link.title}<span aria-hidden="true">→</span></span>
              <span className={s.linkText}>{link.text}</span>
            </Link>
          ))}
        </nav>
      </section>

      {/* Sea the page dived into */}
      <div aria-hidden="true" className={`${seigaiha.waves} ${seigaiha.band}`} style={{ marginTop: 'auto' }} />
    </main>
  )
}
