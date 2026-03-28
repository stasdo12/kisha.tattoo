'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  src: string
  alt: string
  sizes: string
  style?: React.CSSProperties
}

export function GWorkImage({ src, alt, sizes, style }: Props) {
  const [visible, setVisible] = useState(false)

  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(v => !v)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes={sizes}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(13,13,13,0.6)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
          padding: 'clamp(0.75rem, 1.25vw, 1.25rem)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      >
        <span style={{
          color: '#F2F2F2',
          fontSize: 'var(--g-tag)',
          lineHeight: 'var(--g-lh-bm)',
          textAlign: 'right',
        }}>
          {alt}
        </span>
      </div>
    </div>
  )
}
