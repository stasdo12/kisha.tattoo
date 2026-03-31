'use client'
/**
 * GFooter — shared dark footer for all graphic pages
 * "Relax and book your seat right now" + social links + CtaStrip + bottom bar
 */
import Link from 'next/link'
import { SITE } from '@/content/site'
import { CtaStrip } from '@/components/graphic/CtaStrip'
import { useTranslations } from 'next-intl'

export function GFooter() {
  const t = useTranslations('footer')

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
            {t('heading')}
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.75rem' }}>
            <span className="g-tag g-tag--white">{t('social')}</span>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none' }}
            >
              {t('instagram')}
            </a>
            <a
              href={`https://wa.me/${SITE.contact.phone.replace(/\D/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 'var(--g-bm)', color: '#F2F2F2', textDecoration: 'none' }}
            >
              {t('whatsapp')}
            </a>
          </div>
        </div>
      </div>

      {/* CTA — exactly 20px from footer edges */}
      <div style={{ padding: '0 var(--g-pad)', marginBottom: 'clamp(1.5rem, 2.08vw, 2.5rem)' }}>
        <CtaStrip
          label={t('cta')}
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
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.6)', marginBottom: '0.25rem' }}>{t('sections.styles')}</span>
            {[
              { href: '/japanisches-tattoo-muenchen', label: t('links.japanese') },
              { href: '/grafik-tattoo-muenchen',      label: t('links.graphic')  },
              { href: '/fineline-tattoo-muenchen',    label: t('links.fineline') },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.65)', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.6)', marginBottom: '0.25rem' }}>{t('sections.motifs')}</span>
            {[
              { href: '/motive',            label: t('links.allMotifs') },
              { href: '/motive#drachen',    label: t('links.dragon')   },
              { href: '/motive#koi',        label: t('links.koi')      },
              { href: '/motive#kitsune',    label: t('links.kitsune')  },
              { href: '/motive#sakura',     label: t('links.sakura')   },
              { href: '/motive#tiger',      label: t('links.tiger')    },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.65)', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.6)', marginBottom: '0.25rem' }}>{t('sections.pages')}</span>
            {[
              { href: '/booking',                label: t('links.booking')   },
              { href: '/tattoo-preise-muenchen', label: t('links.prices')    },
              { href: '/walk-in-tattoo-muenchen',label: t('links.walkin')    },
              { href: '/faq',                    label: t('links.faq')       },
              { href: '/aftercare',              label: t('links.aftercare') },
              { href: '/awards',                 label: t('links.awards')    },
              { href: '/about',                  label: t('links.about')     },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.65)', textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'flex-end' }}>
            <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.6)', marginBottom: '0.25rem' }}>{t('sections.area')}</span>
            {[
              { href: '/tattoo-eching',    label: t('links.eching')    },
              { href: '/tattoo-freising',  label: t('links.freising')  },
              { href: '/tattoo-neufahrn',  label: t('links.neufahrn')  },
              { href: '/tattoo-dachau',    label: t('links.dachau')    },
              { href: '/tattoo-ottobrunn', label: t('links.ottobrunn') },
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
            {`[ ${t('rights')} ${new Date().getFullYear()} ]`}
          </span>
          <span style={{ fontSize: 'var(--g-tag)', color: 'rgba(242,242,242,0.55)' }}>
            [ Made by Artem Yakovrokul ]
          </span>
        </div>
      </div>

    </footer>
  )
}
