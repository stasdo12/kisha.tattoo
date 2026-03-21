import Link from 'next/link'

type BreadcrumbItem = {
  name: string
  url: string
}

type BreadcrumbProps = {
  items: BreadcrumbItem[]
}

/**
 * Semantic breadcrumb — renders both visible navigation and
 * BreadcrumbList structured data must be rendered separately at the page level.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ marginBottom: '1.5rem' }}
    >
      <ol
        role="list"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.25rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
        }}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              key={item.url}
              style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
            >
              {index > 0 && (
                <span aria-hidden="true" style={{ marginRight: '0.25rem' }}>
                  /
                </span>
              )}
              {isLast ? (
                <span aria-current="page" style={{ color: 'var(--color-text)' }}>
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.url}
                  style={{
                    color: 'var(--color-text-muted)',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
