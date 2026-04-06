// @vitest-environment happy-dom
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BlogFilter } from '@/components/graphic/BlogFilter'

const ARTICLES = [
  { slug: 'article-1', title: 'Fineline Guide', category: 'Guide', publishedAt: '2025-01-01', coverImage: '' },
  { slug: 'article-2', title: 'Culture of Ink', category: 'Culture', publishedAt: '2025-02-01', coverImage: '' },
  { slug: 'article-3', title: 'Style Deep Dive', category: 'Style Guide', publishedAt: '2025-03-01', coverImage: '' },
  { slug: 'article-4', title: 'Another Guide', category: 'Guide', publishedAt: '2025-04-01', coverImage: '' },
]

describe('BlogFilter', () => {
  it('renders all filter tabs', () => {
    render(<BlogFilter articles={ARTICLES} />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Culture' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Guide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Style Guide' })).toBeInTheDocument()
  })

  it('"All" tab is active by default (aria-pressed=true)', () => {
    render(<BlogFilter articles={ARTICLES} />)
    const allBtn = screen.getByRole('button', { name: 'All' })
    expect(allBtn).toHaveAttribute('aria-pressed', 'true')
  })

  it('all other tabs are not active by default', () => {
    render(<BlogFilter articles={ARTICLES} />)
    const cultureBtn = screen.getByRole('button', { name: 'Culture' })
    expect(cultureBtn).toHaveAttribute('aria-pressed', 'false')
  })

  it('shows all articles on initial render', () => {
    render(<BlogFilter articles={ARTICLES} />)
    expect(screen.getByText('Fineline Guide')).toBeInTheDocument()
    expect(screen.getByText('Culture of Ink')).toBeInTheDocument()
    expect(screen.getByText('Style Deep Dive')).toBeInTheDocument()
    expect(screen.getByText('Another Guide')).toBeInTheDocument()
  })

  it('filters to Guide articles when Guide tab is clicked', () => {
    render(<BlogFilter articles={ARTICLES} />)
    fireEvent.click(screen.getByRole('button', { name: 'Guide' }))
    expect(screen.getByText('Fineline Guide')).toBeInTheDocument()
    expect(screen.getByText('Another Guide')).toBeInTheDocument()
    expect(screen.queryByText('Culture of Ink')).not.toBeInTheDocument()
    expect(screen.queryByText('Style Deep Dive')).not.toBeInTheDocument()
  })

  it('filters to Culture articles when Culture tab is clicked', () => {
    render(<BlogFilter articles={ARTICLES} />)
    fireEvent.click(screen.getByRole('button', { name: 'Culture' }))
    expect(screen.getByText('Culture of Ink')).toBeInTheDocument()
    expect(screen.queryByText('Fineline Guide')).not.toBeInTheDocument()
  })

  it('active tab gets aria-pressed=true after click', () => {
    render(<BlogFilter articles={ARTICLES} />)
    const guideBtn = screen.getByRole('button', { name: 'Guide' })
    fireEvent.click(guideBtn)
    expect(guideBtn).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('clicking All after filter shows all articles again', () => {
    render(<BlogFilter articles={ARTICLES} />)
    fireEvent.click(screen.getByRole('button', { name: 'Guide' }))
    fireEvent.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Culture of Ink')).toBeInTheDocument()
    expect(screen.getByText('Style Deep Dive')).toBeInTheDocument()
  })

  it('shows empty grid when no articles match filter', () => {
    render(<BlogFilter articles={ARTICLES} />)
    fireEvent.click(screen.getByRole('button', { name: 'Style Guide' }))
    expect(screen.getByText('Style Deep Dive')).toBeInTheDocument()
    expect(screen.queryByText('Fineline Guide')).not.toBeInTheDocument()
    expect(screen.queryByText('Culture of Ink')).not.toBeInTheDocument()
  })

  it('renders with empty articles array without crashing', () => {
    render(<BlogFilter articles={[]} />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
  })
})
