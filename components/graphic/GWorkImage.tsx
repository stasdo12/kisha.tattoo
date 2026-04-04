'use client'

import Image from 'next/image'

interface Props {
  src: string
  alt: string
  sizes: string
  style?: React.CSSProperties
  tags?: string[]
}

export function GWorkImage({ src, alt, sizes, style, tags }: Props) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes={sizes}
      />
      {tags && tags.length > 0 && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            zIndex: 1,
          }}
        >
          {tags.map((tag) => (
            <span
              key={tag}
              style={{
                background: '#F2F2F2',
                color: '#0D0D0D',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: 1,
                letterSpacing: '-0.24px',
                padding: '8px 12px',
                whiteSpace: 'nowrap',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}