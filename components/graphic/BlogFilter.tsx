'use client'

import { useState } from 'react'
import { GArticleCard } from '@/components/graphic/GArticleCard'

const FILTER_TABS = ['All', 'Culture', 'Guide', 'Style Guide', 'Studio']
const INITIAL_VISIBLE = 8

export type StoryCard = {
  slug: string
  title: string
  category: string
  publishedAt: string
  coverImage: string
}

interface Props {
  articles: StoryCard[]
  allArticlesLabel: string
  loadMoreLabel: string
}

export function BlogFilter({ articles, allArticlesLabel, loadMoreLabel }: Props) {
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE)

  const filtered = activeFilter === 'All'
    ? articles
    : articles.filter((a) => a.category === activeFilter)

  const visibleArticles = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length

  function handleFilterChange(tab: string) {
    setActiveFilter(tab)
    setVisibleCount(INITIAL_VISIBLE)
  }

  return (
    <>
      {/* Heading wrapper with filter tabs */}
      <div
        className="g-blog-heading-wrapper"
        style={{
          borderTop: '2px solid #0D0D0D',
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '52px',
        }}
      >
        <h2 style={{ fontSize: 'var(--g-l)', lineHeight: 'var(--g-lh-l)', color: '#0D0D0D' }}>
          {allArticlesLabel}
        </h2>

        <div className="g-blog-filter-tabs" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              aria-pressed={activeFilter === tab}
              onClick={() => handleFilterChange(tab)}
              style={{
                padding: '8px 12px',
                border: 'none',
                background: activeFilter === tab ? '#0D0D0D' : 'transparent',
                color: activeFilter === tab ? '#F2F2F2' : '#0D0D0D',
                fontSize: 'var(--g-bs)',
                fontFamily: 'var(--g-font)',
                fontWeight: 500,
                letterSpacing: 'var(--g-ls)',
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Articles grid — 4 columns desktop */}
      <div
        className="g-blog-articles-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          rowGap: '32px',
          columnGap: '16px',
        }}
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

      {/* Load more button — visible only when more articles exist */}
      {hasMore && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '52px' }}>
          <button
            type="button"
            className="g-blog-load-more"
            onClick={() => setVisibleCount((c) => c + INITIAL_VISIBLE)}
            style={{
              width: '100%',
              maxWidth: '912px',
              height: '52px',
              background: '#0D0D0D',
              color: '#F2F2F2',
              fontSize: '20px',
              lineHeight: 1,
              fontFamily: 'var(--g-font)',
              fontWeight: 500,
              letterSpacing: 'var(--g-ls)',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {loadMoreLabel}
          </button>
        </div>
      )}
    </>
  )
}
