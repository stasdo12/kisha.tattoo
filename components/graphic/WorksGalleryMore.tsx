'use client'

import { useState } from 'react'
import { GWorkImage } from './GWorkImage'

const H_LARGE = 'clamp(720px, 50vw, 820px)'

const ROW5 = {
  src: '/images/work/anime-augen-tattoo.jpg',
  alt: 'Anime Augen Tattoo München — KishaTattoo Grafik',
  tags: ['München'],
  name: 'Anime Augen — Grafik',
}
const ROW6 = [
  { src: '/images/work/tattoo-lego-fineline-work.jpg', alt: 'Fineline Lego Tattoo München — Kisha',     tags: ['München'], name: 'Lego — Fineline'    },
  { src: '/images/work/spiegel-tattoo-graphic.jpg',    alt: 'Fineline Spiegel Tattoo München — Kisha',  tags: ['München'], name: 'Spiegel — Fineline' },
]
const ROW7 = {
  src: '/images/work/blumen-rucken-tattoo-graphic.jpg',
  alt: 'Grafik Blumen Rücken Tattoo München — Kisha',
  tags: ['München'],
  name: 'Blumen Rücken — Grafik',
}
const ROW9 = [
  { src: '/images/home/works-02-fox-japanese.jpg',    alt: 'Japanisches Kitsune Sleeve Tattoo München — Kisha',  tags: ['München'], name: 'Kitsune Sleeve — Irezumi' },
  { src: '/images/home/works-03-flower-japanese.jpg', alt: 'Japanisches Blumen Sleeve Tattoo München — Kisha',   tags: ['München'], name: 'Blumen Sleeve — Irezumi'  },
  { src: '/images/home/works-04-god-japanese.jpg',    alt: 'Japanisches Foo Dog Sleeve Tattoo München — Kisha',  tags: ['München'], name: 'Foo Dog Sleeve — Irezumi'  },
]
const ROW10 = [
  { src: '/images/home/works-05-flowers-graphic.jpg',       alt: 'Fineline Blumen Arm Tattoo München — Kisha',           tags: ['München'], name: 'Blumen Arm — Fineline'        },
  { src: '/images/home/works-01-blackwork-fullbody.jpg',    alt: 'Japanisches Irezumi Fullbody Tattoo München — Kisha',   tags: ['München'], name: 'Irezumi Fullbody — Japanisch' },
]
// Hochformat (portrait, 1500×2000 / 1333×2000) — in 2-col slots, cover crops top/bottom moderately (~40%), not left/right
const ROW11 = [
  { src: '/images/work/koi-fisch-tattoo-unterarm.jpg',             alt: 'Koi Fisch Tattoo München — Kisha',           tags: ['München'], name: 'Koi Fisch — Japanisch'    },
  { src: '/images/work/kanji-schriftzeichen-tattoo-nacken.jpg',     alt: 'Kanji Schriftzeichen Nacken Tattoo München — Kisha', tags: ['München'], name: 'Kanji Nacken — Japanisch' },
]
const ROW12 = [
  { src: '/images/work/feines-linien-tattoo-daten-portraet-unterarm.jpg', alt: 'Fineline Portrait Tattoo München — Kisha',       tags: ['München'], name: 'Portrait Lineart — Fineline'   },
  { src: '/images/work/schlangen-pfingstrose-tattoo-oberschenkel.jpg',    alt: 'Grafik Schlange Pfingstrose Tattoo München — Kisha', tags: ['München'], name: 'Schlange & Pfingstrose — Grafik' },
]
// Querformat (landscape, 2000×1333) — safe for wide slots (2-col + full-width banner)
const ROW13 = [
  { src: '/images/work/maigloeckchen-tattoo-unterarm.jpg',          alt: 'Maiglöckchen Fineline Tattoo München — Kisha', tags: ['München'], name: 'Maiglöckchen — Fineline'      },
  { src: '/images/work/japanisches-blackwork-tattoo-unterarm.jpg',  alt: 'Japanisches Blackwork Tattoo München — Kisha', tags: ['München'], name: 'Blackwork Welle — Japanisch' },
]
const ROW14 = {
  src: '/images/work/hannya-maske-tattoo-unterarm.jpg',
  alt: 'Hannya Maske Tattoo München — Kisha',
  tags: ['München'],
  name: 'Hannya Maske — Japanisch',
}

export function WorksGalleryMore({ label }: { label: string }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          style={{
            width: '100%',
            padding: '16px 12px',
            background: '#0D0D0D',
            color: '#F2F2F2',
            fontSize: 'var(--g-bm)',
            fontWeight: 500,
            fontFamily: 'var(--g-font)',
            letterSpacing: 'var(--g-ls)',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {label}
        </button>
      )}

      {expanded && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <GWorkImage
            src={ROW5.src}
            alt={ROW5.alt}
            tags={ROW5.tags}
            name={ROW5.name}
            sizes="100vw"
            className="g-works-row2"
            style={{ height: 'clamp(432px, 39.6vw, 672px)', objectPosition: 'center 40%' }}
          />

          <div className="g-works-row3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ROW6.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} name={img.name} sizes="(max-width: 767px) 100vw, 50vw" style={{ height: H_LARGE }} />
            ))}
          </div>

          <GWorkImage
            src={ROW7.src}
            alt={ROW7.alt}
            tags={ROW7.tags}
            name={ROW7.name}
            sizes="100vw"
            className="g-works-row2"
            style={{ height: 'clamp(432px, 39.6vw, 672px)', objectPosition: 'center 30%' }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="g-works-row9">
            {ROW9.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} name={img.name} sizes="(max-width: 767px) 100vw, 33vw" style={{ height: H_LARGE, objectPosition: 'center 20%' }} />
            ))}
          </div>

          <div className="g-works-row3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ROW10.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} name={img.name} sizes="(max-width: 767px) 100vw, 50vw" style={{ height: H_LARGE, objectPosition: 'center center' }} />
            ))}
          </div>

          <div className="g-works-row3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ROW11.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} name={img.name} sizes="(max-width: 767px) 100vw, 50vw" style={{ height: H_LARGE }} />
            ))}
          </div>

          <div className="g-works-row3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ROW12.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} name={img.name} sizes="(max-width: 767px) 100vw, 50vw" style={{ height: H_LARGE }} />
            ))}
          </div>

          <div className="g-works-row3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {ROW13.map((img) => (
              <GWorkImage key={img.src} src={img.src} alt={img.alt} tags={img.tags} name={img.name} sizes="(max-width: 767px) 100vw, 50vw" style={{ height: H_LARGE }} />
            ))}
          </div>

          <GWorkImage
            src={ROW14.src}
            alt={ROW14.alt}
            tags={ROW14.tags}
            name={ROW14.name}
            sizes="100vw"
            className="g-works-row2"
            style={{ height: 'clamp(432px, 39.6vw, 672px)', objectPosition: 'center 40%' }}
          />
        </div>
      )}
    </>
  )
}
