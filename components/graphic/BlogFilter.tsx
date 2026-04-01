'use client'

import { useState } from 'react'
import { GArticleCard } from '@/components/graphic/GArticleCard'
import type { Story } from '@/content/stories'

const FILTER_TABS = ['All', 'Culture', 'Guide', 'Style Guide']

interface Props {
  articles: Story[]
}

export function BlogFilter({ articles }: Props) {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleArticles = activeFilter === 'All'
    ? articles
    : articles.filter((a) => a.category === activeFilter)

  return (
    <>
      {/* Filter tabs */}
      <div className="g-blog-filter-tabs" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {FILTER_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            aria-pressed={activeFilter === tab}
            onClick={() => setActiveFilter(tab)}
            style={{
              padding: '4px 14px',
              border: 'none',
              background: activeFilter === tab ? '#0D0D0D' : 'transparent',
              color: activeFilter === tab ? '#F2F2F2' : '#0D0D0D',
              fontSize: 'var(--g-tag)',
              fontFamily: 'var(--g-font)',
              fontWeight: 500,
              letterSpacing: 'var(--g-ls)',
              cursor: 'pointer',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Articles grid — 4 columns */}
      <div
        className="g-blog-articles-grid"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '52px' }}
      >
        {visibleArticles.map((article, i) => (
          <GArticleCard
            key={article.slug}
            id={i + 1}
            title={article.title}
            category={article.category}
            date={article.publishedAt}
            href={`/blog/${article.slug}`}
            imageSrc={article.coverImage}
          />
        ))}
      </div>
    </>
  )
}
