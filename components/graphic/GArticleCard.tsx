/**
 * GArticleCard — blog article card used in listing and related articles grid
 */
import Image from 'next/image'
import Link from 'next/link'

interface GArticleCardProps {
  id: number
  title: string
  category: string
  date: string
  href: string
  imageSrc?: string
}

export function GArticleCard({ id, title, category, date, href, imageSrc }: GArticleCardProps) {
  const src = imageSrc ?? `https://picsum.photos/seed/blog-card-${id}/448/448`

  return (
    <article>
      <Link href={href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        <div
          style={{
            position: 'relative',
            aspectRatio: '1/1',
            overflow: 'hidden',
            marginBottom: '20px',
            background: '#BFBFBF',
          }}
        >
          <Image
            src={src}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 430px) 100vw, 25vw"
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h3
            style={{
              fontSize: 'var(--g-s)',
              lineHeight: 'var(--g-lh-s)',
              color: '#0D0D0D',
              fontWeight: 500,
            }}
          >
            {title}
          </h3>
          <span style={{ fontSize: 'var(--g-tag)', color: '#BFBFBF' }}>
            {category} · {date}
          </span>
        </div>
      </Link>
    </article>
  )
}
