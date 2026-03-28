'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

interface Props {
  src: string
  alt: string
  sizes: string
  style?: React.CSSProperties
}

export function GWorkImage({ src, alt, sizes, style }: Props) {
  const [visible, setVisible] = useState(false)
  const isTouch = useRef(false)

  return (
    <div
      style={{ position: 'relative', overflow: 'hidden', ...style }}
      onTouchStart={() => { isTouch.current = true }}
      onMouseEnter={() => { if (!isTouch.current) setVisible(true) }}
      onMouseLeave={() => { if (!isTouch.current) setVisible(false) }}
      onClick={() => {
        if (isTouch.current) {
          setVisible(v => !v)
          isTouch.current = false
        }
      }}
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
          fontSize: 'var(--g-bm)',
          lineHeight: 'var(--g-lh-bm)',
          textAlign: 'right',
        }}>
          {alt}
        </span>
      </div>
    </div>
  )
}
