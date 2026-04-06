// @vitest-environment happy-dom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { GScrollTop } from '@/components/graphic/GScrollTop'

describe('GScrollTop', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    window.scrollTo = vi.fn()
  })

  it('renders a button with aria-label "Back to top"', () => {
    render(<GScrollTop />)
    expect(screen.getByRole('button', { name: 'Back to top' })).toBeInTheDocument()
  })

  it('button is invisible (opacity 0) when scroll < 400', () => {
    render(<GScrollTop />)
    const btn = screen.getByRole('button', { name: 'Back to top' })
    expect(btn).toHaveStyle({ opacity: '0' })
    expect(btn).toHaveStyle({ pointerEvents: 'none' })
  })

  it('button becomes visible when scroll > 400', () => {
    render(<GScrollTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 500, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const btn = screen.getByRole('button', { name: 'Back to top' })
    expect(btn).toHaveStyle({ opacity: '1' })
    expect(btn).toHaveStyle({ pointerEvents: 'auto' })
  })

  it('clicking the button calls window.scrollTo with top:0', () => {
    render(<GScrollTop />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 600, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    fireEvent.click(screen.getByRole('button', { name: 'Back to top' }))
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })

  it('cleans up scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<GScrollTop />)
    unmount()
    // removeEventListener is called with 'scroll' + handler (no options arg)
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
