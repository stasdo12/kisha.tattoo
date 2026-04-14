'use client'

import Image from 'next/image'

interface Props {
  src: string
  alt: string
  sizes: string
  style?: React.CSSProperties
  tags?: string[]
  name?: string
  className?: string
}

export function GWorkImage({ src, alt, sizes, style, tags, name, className }: Props) {
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: 'cover' }}
        sizes={sizes}
      />
      {/* Badges — top left: name first, then remaining tags */}
      {(name || (tags && tags.length > 0)) && (
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
          {name && (
            <span
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
              {name}
            </span>
          )}
          {tags && tags.map((tag) => (
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