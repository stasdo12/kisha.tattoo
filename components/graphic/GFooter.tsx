'use client'
/**
 * GFooter — Figma-spec footer (desktop 1920 + mobile 390)
 * Structure: top CTA → nav columns → bottom bar
 */
import Link from 'next/link'
import { SITE } from '@/content/site'
import { useTranslations } from 'next-intl'

export function GFooter() {
  const t = useTranslations('footer')

  /* ── Link columns ─────────────────────────────────────────────────────── */
  const NAV = [
    { href: '/works',                   label: t('links.works')     },
    { href: '/about',                   label: t('links.about')     },
    { href: '/blog',                    label: t('links.stories')   },
    { href: '/faq',                     label: t('links.faq')       },
    { href: '/aftercare',               label: t('links.aftercare') },
    { href: '/awards',                  label: t('links.awards')    },
    { href: '/tattoo-preise-muenchen',  label: t('links.prices')    },
    { href: '/walk-in-tattoo-muenchen', label: t('links.walkin')    },
    { href: '/contact',                 label: t('links.contact')   },
  ]

  const STYLES = [
    { href: '/japanisches-tattoo-muenchen', label: 'Japanese Tattoo'  },
    { href: '/grafik-tattoo-muenchen',      label: 'Graphic Tattoo'   },
    { href: '/fineline-tattoo-muenchen',    label: t('links.linework')},
  ]

  const AREA = [
    { href: '/tattoo-eching',    label: t('links.eching')    },
    { href: '/tattoo-freising',  label: t('links.freising')  },
    { href: '/tattoo-neufahrn',  label: t('links.neufahrn')  },
    { href: '/tattoo-dachau',    label: t('links.dachau')    },
    { href: '/tattoo-ottobrunn', label: t('links.ottobrunn') },
  ]

  const MOTIFS = [
    { href: '/motive#drachen',  label: t('links.dragon')  },
    { href: '/motive#koi',      label: t('links.koi')     },
    { href: '/motive#kitsune',  label: t('links.kitsune') },
    { href: '/motive#sakura',   label: t('links.sakura')  },
    { href: '/motive#tiger',    label: t('links.tiger')   },
  ]

  const SOCIAL = [
    { href: SITE.social.instagram,                                     label: t('instagram'), external: true },
    { href: `https://wa.me/${SITE.contact.phone.replace(/\D/g, '')}`, label: t('whatsapp'),  external: true },
  ]

  return (
    <footer
      role="contentinfo"
      className="g-footer-section"
      data-nav-dark
      style={{ background: '#0D0D0D', width: '100%' }}
    >
      {/* ── Main padding wrapper ──────────────────────────────────────────── */}
      <div
        className="g-footer-inner"
        style={{
          padding: 'clamp(20px, 2.08vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(80px, 6.25vw, 120px)',
        }}
      >

        {/* ── TOP: CTA block ──────────────────────────────────────────────── */}
        <div
          className="g-footer-top"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 'clamp(32px, 2.08vw, 40px)',
          }}
        >
          <h2
            className="g-footer-heading"
            style={{
              width: '100%',
              maxWidth: 'clamp(263px, 22.29vw, 428px)',
              fontSize: 'clamp(32px, 2.71vw, 52px)',
              lineHeight: 0.9,
              color: '#F2F2F2',
              fontWeight: 500,
            }}
          >
            {t('heading')}
          </h2>

          <Link
            href="/booking"
            style={{
              alignSelf: 'stretch',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '16px 12px',
              background: '#F2F2F2',
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: '20px', fontWeight: 500, lineHeight: 1, color: '#0D0D0D' }}>
              {t('cta')}
            </span>
          </Link>
        </div>

        {/* ── BOTTOM: nav columns ─────────────────────────────────────────── */}
        <div
          className="g-footer-bottom-nav"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          {/* Left group: Navigation + Styles + Area + Motifs */}
          <div
            className="g-footer-links-group"
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: 'clamp(32px, 4.17vw, 80px)',
              flexWrap: 'wrap',
            }}
          >
            <FooterColumn label={t('sections.navigation')} links={NAV} />
            <FooterColumn label={t('sections.styles')}     links={STYLES} />
            <FooterColumn label={t('sections.area')}       links={AREA} />
            <FooterColumn label={t('sections.motifs')}     links={MOTIFS} />
          </div>

          {/* Right: Social media */}
          <FooterColumn label={t('sections.social')} links={SOCIAL} align="end" />
        </div>

        {/* ── BOTTOM BAR ────────────────────────────────────────────────────── */}
        <div className="g-footer-bar">
        {/* Kisha · Tattoo */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            paddingBottom: '0.75rem',
          }}
        >
          <Link href="/" style={{ fontSize: 'clamp(32px, 2.08vw, 40px)', lineHeight: 1, color: '#F2F2F2', textDecoration: 'none', fontWeight: 500 }}>
            • Kisha
          </Link>
          <span style={{ fontSize: 'clamp(32px, 2.08vw, 40px)', lineHeight: 1, color: '#F2F2F2', fontWeight: 500 }}>
            Tattoo
          </span>
        </div>

        {/* Separator */}
        <div style={{ height: '1px', background: 'rgba(242,242,242,0.15)', marginBottom: '0.75rem' }} />

        {/* Copyright row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span suppressHydrationWarning style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(242,242,242,0.45)' }}>
            {`[ ©${new Date().getFullYear()} Kisha Tattoo. All rights reserved ]`}
          </span>
          <span style={{ fontSize: '12px', fontWeight: 500, color: 'rgba(242,242,242,0.45)' }}>
            [ Made by Artem Yavorovskyi ]
          </span>
        </div>
        </div>{/* end g-footer-bar */}

      </div>{/* end g-footer-inner */}

    </footer>
  )
}

/* ── Footer column helper ───────────────────────────────────────────────── */
type FooterLink = { href: string; label: string; external?: boolean }

function FooterColumn({
  label,
  links,
  align = 'start',
}: {
  label: string
  links: FooterLink[]
  align?: 'start' | 'end'
}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: align === 'end' ? 'flex-end' : 'flex-start',
        gap: '12px',
      }}
    >
      <span style={{ fontSize: '12px', fontWeight: 500, color: '#BFBFBF' }}>
        [ {label} ]
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: align === 'end' ? 'flex-end' : 'flex-start' }}>
        {links.map((l) =>
          l.external ? (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1, color: '#F2F2F2', textDecoration: 'none' }}
            >
              {l.label}
            </a>
          ) : (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontSize: '16px', fontWeight: 500, lineHeight: 1, color: '#F2F2F2', textDecoration: 'none' }}
            >
              {l.label}
            </Link>
          )
        )}
      </div>
    </div>
  )
}
