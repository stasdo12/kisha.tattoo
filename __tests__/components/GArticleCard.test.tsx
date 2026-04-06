// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GArticleCard } from '@/components/graphic/GArticleCard'

describe('GArticleCard', () => {
  const defaultProps = {
    id: 1,
    title: 'Fineline Tattoo Guide',
    category: 'Guide',
    date: '2025-01-15',
    href: '/blog/fineline-tattoo-guide',
  }

  it('renders the article title', () => {
    render(<GArticleCard {...defaultProps} />)
    expect(screen.getByText('Fineline Tattoo Guide')).toBeInTheDocument()
  })

  it('renders category and date combined in meta span', () => {
    render(<GArticleCard {...defaultProps} />)
    // The span renders "{category} · {date}" — match the combined string
    expect(screen.getByText(/Guide · 2025-01-15/)).toBeInTheDocument()
  })

  it('link points to correct href', () => {
    render(<GArticleCard {...defaultProps} />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/blog/fineline-tattoo-guide')
  })

  it('image uses provided imageSrc', () => {
    render(<GArticleCard {...defaultProps} imageSrc="https://example.com/img.jpg" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://example.com/img.jpg')
  })

  it('image uses picsum fallback when imageSrc is not provided', () => {
    render(<GArticleCard {...defaultProps} />)
    const img = screen.getByRole('img')
    expect(img.getAttribute('src')).toContain('picsum.photos')
    expect(img.getAttribute('src')).toContain('blog-card-1')
  })

  it('image alt text equals article title', () => {
    render(<GArticleCard {...defaultProps} />)
    expect(screen.getByAltText('Fineline Tattoo Guide')).toBeInTheDocument()
  })

  it('renders as an article element', () => {
    const { container } = render(<GArticleCard {...defaultProps} />)
    expect(container.querySelector('article')).toBeInTheDocument()
  })
})
