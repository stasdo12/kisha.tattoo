/**
 * TATTOO UNIKATE — hub for Kisha's one-off designs.
 * Target keywords: "unikat tattoo", "individuelles tattoo".
 *
 * Deliberately NOT targeting "japanische tattoo motive" — /motive holds that
 * one at #9 and nine more in the German top 10. The word `Motive` stays out of
 * the title and the H1 for that reason; see content/unikate.ts for the full
 * list of keyword rules this section obeys.
 *
 * Design: same tokens as the rest of the site (--g-*), but the grid runs on a
 * light background — the drawings sit on white paper and must never be cropped,
 * so every sketch is shown whole, framed like a piece in a gallery.
 */
import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { buildMetadata } from '@/lib/seo'
import { getTranslations } from 'next-intl/server'
import { breadcrumbSchema, faqSchema } from '@/lib/structured-data'
import { GHeader } from '@/components/graphic/GHeader'
import { GFooter } from '@/components/graphic/GFooter'
import { UNIKATE, type Unikat } from '@/content/unikate'
import { isNoIndexLocale } from '@/content/routes'

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'unikate' })
  return buildMetadata({
    title: t('meta.title'),
    description: t('meta.description'),
    path: '/tattoo-unikate',
    locale,
    noIndex: isNoIndexLocale('/tattoo-unikate', locale),
  })
}

/**
 * Hero: three drawings lying like loose sheets on a dark surface. Picked for
 * contrasting silhouettes — a tall figure, a wide mask, a diagonal carp — so
 * the stack reads as three separate pieces rather than one blur. Positions are
 * hand-set; there is no clever layout to be had from three rotated rectangles.
 */
const HERO_SHEETS = [
  { slug: 'oni-maske-brust',        top: '12%', left: '0%',  width: '34%', rotate: -10 },
  { slug: 'geisha-kranich-ruecken', top: '2%',  left: '17%', width: '34%', rotate: -5 },
  { slug: 'koi-samurai-ruecken',    top: '19%', left: '35%', width: '34%', rotate: 4 },
  { slug: 'geisha-faecher-arm',     top: '4%',  left: '52%', width: '34%', rotate: -2 },
  { slug: 'hannya-maske-ruecken',   top: '17%', left: '70%', width: '34%', rotate: 8 },
] as const

/** Sentinel row: a text cell, not a design. Keeps the grid from ending on a hole. */
const NOTE_CELL: Unikat = { slug: '__note__', image: '', width: 0, height: 0, status: 'verfuegbar' }

export default async function TattooUnikate({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'unikate' })
  const faqItems = t.raw('faq.items') as Array<{ q: string; a: string }>
  const available = UNIKATE.filter((u) => u.status === 'verfuegbar').length

  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Unikate', url: '/tattoo-unikate' }], locale)
      )}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
        faqSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))
      )}} />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      {/* Three drawings lying on a dark surface like loose sheets of paper.
          Decorative: the same sketches appear properly in the grid below, so
          these carry empty alt text instead of repeating it for a screenreader. */}
      <section
        data-nav-dark
        aria-label={t('hero.h1')}
        style={{
          position: 'relative',
          minHeight: 'clamp(560px, 82svh, 760px)',
          background: 'var(--g-black)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        <GHeader theme="dark" />

        <div className="g-unikate-hero" style={{
          flexGrow: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'end',
          gap: 'clamp(24px, 4vw, 48px)',
          padding: '0 var(--g-pad) clamp(32px, 6vh, 64px)',
        }}>
          <div className="g-unikate-heroText" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(16px, 2.5vh, 28px)',
            zIndex: 10,
          }}>
            <h1 style={{
              fontSize: 'var(--g-xl)',
              lineHeight: 'var(--g-lh-xl)',
              color: 'var(--g-white)',
              margin: 0,
            }}>
              {t('hero.h1')}
            </h1>
            <p style={{
              maxWidth: '46ch',
              fontSize: 'var(--g-bm)',
              lineHeight: 'var(--g-lh-bm)',
              color: 'var(--g-grey)',
              margin: 0,
            }}>
              {t('hero.sub')}
            </p>
          </div>

          <div className="g-unikate-sheets" aria-hidden="true" style={{
            position: 'relative',
            height: 'clamp(300px, 52svh, 560px)',
            alignSelf: 'center',
            // Reaches past its column on both sides: five sheets keep their
            // size and the outer two run off the edge, instead of five small
            // ones crowding into half the screen.
            width: 'calc(100% + 12vw)',
            marginLeft: '-2vw',
            marginRight: '-10vw',
          }}>
            {HERO_SHEETS.map((sheet, i) => {
              const u = UNIKATE.find((x) => x.slug === sheet.slug)
              if (!u) return null
              return (
                <div
                  key={sheet.slug}
                  style={{
                    position: 'absolute',
                    top: sheet.top,
                    left: sheet.left,
                    width: sheet.width,
                    aspectRatio: `${u.width} / ${u.height}`,
                    transform: `rotate(${sheet.rotate}deg)`,
                    background: 'var(--g-white)',
                    boxShadow: '0 18px 44px rgba(0,0,0,0.45)',
                    zIndex: i + 1,
                  }}
                >
                  <Image
                    src={u.image}
                    alt=""
                    fill
                    priority={i === HERO_SHEETS.length - 1}
                    sizes="(max-width: 767px) 60vw, 26vw"
                    style={{ objectFit: 'contain', padding: '6%' }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-white)',
        padding: 'clamp(48px, 9vh, 104px) var(--g-pad)',
      }}>
        <div className="g-unikate-intro" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(24px, 4vw, 64px)',
        }}>
          <p style={{
            fontSize: 'var(--g-s)',
            lineHeight: 1.15,
            color: 'var(--g-black)',
            margin: 0,
          }}>
            {t('intro.lead')}
          </p>
          <p style={{
            fontSize: 'var(--g-bm)',
            lineHeight: 1.45,
            color: '#4A4A4A',
            margin: 0,
            alignSelf: 'end',
          }}>
            {t('intro.body')}
          </p>
        </div>
      </section>

      {/* ── TERMS ─────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-white)',
        padding: '0 var(--g-pad) clamp(48px, 9vh, 104px)',
      }}>
        <div style={{  }}>
          <h2 style={{
            fontSize: 'var(--g-xs)',
            lineHeight: 1.1,
            color: 'var(--g-black)',
            margin: '0 0 clamp(20px, 3vh, 36px)',
            fontWeight: 500,
          }}>
            {t('terms.heading')}
          </h2>
          <ul className="g-unikate-terms" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(16px, 2vw, 32px)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {(['once', 'free', 'deposit', 'adapt'] as const).map((key, i) => (
              <li key={key} style={{
                borderTop: '1px solid var(--g-black)',
                paddingTop: '14px',
                fontSize: 'var(--g-bs)',
                lineHeight: 1.4,
                color: 'var(--g-black)',
              }}>
                <span aria-hidden="true" style={{
                  display: 'block',
                  fontSize: 'var(--g-tag)',
                  color: '#8A8A8A',
                  marginBottom: '8px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {t(`terms.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── GRID ──────────────────────────────────────────────────────────── */}
      <section
        aria-label={t('grid.heading')}
        style={{
          background: '#E8E6E1',
          padding: 'clamp(48px, 9vh, 104px) var(--g-pad)',
        }}
      >
        <div style={{  }}>
          <h2 style={{
            fontSize: 'var(--g-m)',
            lineHeight: 1.05,
            color: 'var(--g-black)',
            margin: '0 0 clamp(24px, 4vh, 48px)',
          }}>
            {t('grid.heading')}
          </h2>

          <ul className="g-unikate-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(16px, 2vw, 32px)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}>
            {/* Portrait drawings first, then the note that fills the gap five
                of them leave in a three-column row, then the wide one. */}
            {[...UNIKATE.filter((u) => u.height >= u.width), NOTE_CELL, ...UNIKATE.filter((u) => u.width > u.height)].map((u) => {
              if (u === NOTE_CELL) {
                return (
                  <li key="note" style={{
                    background: 'transparent',
                    border: '1px solid #C9C5BD',
                    padding: 'clamp(20px, 2.5vw, 32px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: 'clamp(16px, 2vw, 28px)',
                  }}>
                    {/* Counts the live data, so it can never disagree with the
                        grid it sits in. */}
                    <span style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '10px',
                      borderBottom: '1px solid #C9C5BD',
                      paddingBottom: '14px',
                    }}>
                      <span style={{ fontSize: 'var(--g-m)', lineHeight: 1, color: 'var(--g-black)' }}>
                        {available}
                      </span>
                      <span style={{ fontSize: 'var(--g-bxs)', color: '#6A6A6A' }}>
                        {t('grid.noteCount')}
                      </span>
                    </span>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <span style={{ fontSize: 'var(--g-xs)', lineHeight: 1.1, color: 'var(--g-black)' }}>
                        {t('grid.noteTitle')}
                      </span>
                      <p style={{ fontSize: 'var(--g-bs)', lineHeight: 1.45, color: '#4A4A4A', margin: 0 }}>
                        {t('grid.noteBody')}
                      </p>
                    </div>

                    <ol style={{
                      listStyle: 'none',
                      margin: 0,
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}>
                      {(t.raw('grid.noteSteps') as string[]).map((step, n) => (
                        <li key={step} style={{
                          display: 'flex',
                          gap: '10px',
                          fontSize: 'var(--g-bxs)',
                          lineHeight: 1.35,
                          color: '#4A4A4A',
                        }}>
                          <span aria-hidden="true" style={{ color: '#8A8A8A', flexShrink: 0 }}>
                            {String(n + 1).padStart(2, '0')}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>

                    <Link href="/booking" style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '14px 16px',
                      border: '1px solid var(--g-black)',
                      color: 'var(--g-black)',
                      fontSize: 'var(--g-bs)',
                      fontWeight: 500,
                      textDecoration: 'none',
                    }}>
                      {t('grid.noteLink')}
                    </Link>
                  </li>
                )
              }
              const statusLabel = t(`status.${u.status}`)
              const isGone = u.status === 'vergeben'
              // A landscape drawing in a portrait tile reads as the smallest
              // thing on the page. Give it the width it was drawn at instead.
              const isWide = u.width > u.height
              return (
                <li key={u.slug} className={isWide ? 'g-unikate-wide' : undefined}>
                  <Link
                    href={`/tattoo-unikate/${u.slug}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      textDecoration: 'none',
                      color: 'inherit',
                      background: 'var(--g-white)',
                    }}
                  >
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      // The wide tile takes the drawing's own ratio, so the
                      // sketch fills it instead of floating in white space.
                      aspectRatio: isWide ? `${u.width} / ${u.height}` : '3 / 4',
                      background: 'var(--g-white)',
                      overflow: 'hidden',
                    }}>
                      <Image
                        src={u.image}
                        alt={t(`items.${u.slug}.alt`)}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                        style={{
                          objectFit: 'contain',
                          padding: isWide ? '2%' : '6%',
                          opacity: isGone ? 0.45 : 1,
                        }}
                      />
                      <span style={{
                        position: 'absolute',
                        top: '12px',
                        left: '12px',
                        background: isGone ? '#8A8A8A' : 'var(--g-black)',
                        color: 'var(--g-white)',
                        fontSize: 'var(--g-tag)',
                        fontWeight: 500,
                        lineHeight: 1,
                        padding: '8px 10px',
                      }}>
                        {u.status === 'reserviert' && u.reservedUntil
                          ? `${statusLabel} ${u.reservedUntil}`
                          : statusLabel}
                      </span>
                    </div>

                    <div style={{
                      borderTop: '1px solid #DAD7D1',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                      flexGrow: 1,
                    }}>
                      <span style={{
                        fontSize: 'var(--g-xs)',
                        lineHeight: 1.1,
                        color: 'var(--g-black)',
                      }}>
                        {t(`items.${u.slug}.name`)}
                      </span>
                      <span style={{
                        fontSize: 'var(--g-bxs)',
                        color: '#6A6A6A',
                      }}>
                        {t('grid.zone')}: {t(`items.${u.slug}.zone`)}
                      </span>
                      {/* Looks like a button, is a <span> — the tile is already
                          an <a>, and an <a> inside an <a> is invalid. */}
                      <span className="g-unikate-view" style={{
                        marginTop: 'auto',
                        paddingTop: '16px',
                      }}>
                        <span style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          padding: '14px 16px',
                          background: 'var(--g-black)',
                          color: 'var(--g-white)',
                          fontSize: 'var(--g-bs)',
                          fontWeight: 500,
                        }}>
                          {t('grid.view')}
                        </span>
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-white)',
        padding: 'clamp(48px, 9vh, 104px) var(--g-pad)',
      }}>
        <div style={{  }}>
          <h2 style={{
            fontSize: 'var(--g-m)',
            lineHeight: 1.05,
            color: 'var(--g-black)',
            margin: '0 0 clamp(24px, 4vh, 48px)',
          }}>
            {t('faq.heading')}
          </h2>
          <div className="g-unikate-faq" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(20px, 3vw, 48px)',
          }}>
            {faqItems.map((f) => (
              <div key={f.q} style={{ borderTop: '1px solid var(--g-black)', paddingTop: '16px' }}>
                <h3 style={{
                  fontSize: 'var(--g-bm)',
                  lineHeight: 1.2,
                  color: 'var(--g-black)',
                  margin: '0 0 8px',
                  fontWeight: 500,
                }}>
                  {f.q}
                </h3>
                <p style={{
                  fontSize: 'var(--g-bs)',
                  lineHeight: 1.45,
                  color: '#4A4A4A',
                  margin: 0,
                }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section style={{
        background: 'var(--g-black)',
        padding: 'clamp(48px, 9vh, 96px) var(--g-pad)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 'clamp(16px, 2.5vh, 28px)',
        }}>
          <p style={{
            fontSize: 'var(--g-s)',
            lineHeight: 1.15,
            color: 'var(--g-white)',
            margin: 0,
            maxWidth: '24ch',
          }}>
            {t('cta.hint')}
          </p>
          <Link href="/booking" style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '16px 28px',
            background: 'var(--g-white)',
            color: 'var(--g-black)',
            fontSize: 'var(--g-bm)',
            fontWeight: 500,
            textDecoration: 'none',
          }}>
            {t('cta.button')}
          </Link>
        </div>
      </section>

      <GFooter />

      <style>{`
        @media (max-width: 1199px) {
          /* Sheets sit at the top, the words drop to the bottom of the screen
             instead of hanging right under them with a gap below. */
          /* The header is fixed and transparent here: white paper sliding under
             white lettering wipes the navigation out. Keep the sheets clear of it. */
          .g-unikate-hero     { grid-template-columns: 1fr !important; grid-template-rows: auto 1fr !important; align-items: stretch !important; padding-top: clamp(72px, 11vh, 104px) !important; }
          .g-unikate-sheets   { order: -1; height: clamp(260px, 38svh, 380px) !important; }
          .g-unikate-heroText { justify-content: flex-end; padding-bottom: clamp(8px, 2vh, 24px); }
        }
        @media (max-width: 767px) {
          .g-unikate-sheets { height: clamp(220px, 32svh, 300px) !important; }
        }

        /* The one landscape sketch spans the row it sits in. */
        .g-unikate-wide { grid-column: span 3; }

        /* The button inverts on hover. Touch devices never see it, and it is
           skipped for anyone who asked for less motion. */
        .g-unikate-view > span { transition: background .18s ease, color .18s ease; }
        @media (hover: hover) {
          .g-unikate-grid a:hover .g-unikate-view > span {
            background: #3A3A3A;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .g-unikate-view > span { transition: none; }
        }
        @media (max-width: 1199px) {
          .g-unikate-grid  { grid-template-columns: repeat(2, 1fr) !important; }
          .g-unikate-terms { grid-template-columns: repeat(2, 1fr) !important; }
          .g-unikate-wide  { grid-column: span 2; }
        }
        @media (max-width: 767px) {
          .g-unikate-grid,
          .g-unikate-terms,
          .g-unikate-intro,
          .g-unikate-faq { grid-template-columns: 1fr !important; }
          .g-unikate-wide { grid-column: span 1; }
        }
      `}</style>
    </main>
  )
}
