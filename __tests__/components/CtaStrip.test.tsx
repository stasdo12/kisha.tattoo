// @vitest-environment happy-dom
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CtaStrip } from '@/components/graphic/CtaStrip'

describe('CtaStrip', () => {
  it('renders with default label', () => {
    render(<CtaStrip />)
    expect(screen.getByText('Start your consultation')).toBeInTheDocument()
  })

  it('renders with custom label', () => {
    render(<CtaStrip label="Book now" />)
    expect(screen.getByText('Book now')).toBeInTheDocument()
  })

  it('is a button with type="button"', () => {
    render(<CtaStrip />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('type', 'button')
  })

  it('has aria-haspopup="dialog"', () => {
    render(<CtaStrip />)
    expect(screen.getByRole('button')).toHaveAttribute('aria-haspopup', 'dialog')
  })

  it('dispatches openFormPopup event on click', () => {
    const listener = vi.fn()
    window.addEventListener('openFormPopup', listener)
    render(<CtaStrip />)
    fireEvent.click(screen.getByRole('button'))
    expect(listener).toHaveBeenCalledTimes(1)
    window.removeEventListener('openFormPopup', listener)
  })

  it('applies custom style prop', () => {
    render(<CtaStrip style={{ color: 'red' }} />)
    const btn = screen.getByRole('button')
    expect(btn).toHaveStyle({ color: 'red' })
  })
})
