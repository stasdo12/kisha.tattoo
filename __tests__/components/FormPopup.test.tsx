// @vitest-environment happy-dom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { FormPopup } from '@/components/graphic/FormPopup'

function openPopup() {
  act(() => {
    window.dispatchEvent(new CustomEvent('openFormPopup'))
  })
}

describe('FormPopup', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn())
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('is not visible on initial render', () => {
    render(<FormPopup />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens when openFormPopup event is dispatched', () => {
    render(<FormPopup />)
    openPopup()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('renders name and phone inputs when open', () => {
    render(<FormPopup />)
    openPopup()
    expect(document.querySelector('input[name="name"]')).toBeInTheDocument()
    expect(document.querySelector('input[name="phone"]')).toBeInTheDocument()
  })

  it('closes when close button is clicked', () => {
    render(<FormPopup />)
    openPopup()
    const closeBtn = screen.getByRole('button', { name: /close/i })
    fireEvent.click(closeBtn)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes on Escape key', () => {
    render(<FormPopup />)
    openPopup()
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    act(() => {
      fireEvent.keyDown(window, { key: 'Escape' })
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('sets body overflow hidden when open', () => {
    render(<FormPopup />)
    openPopup()
    expect(document.body.style.overflow).toBe('hidden')
  })

  it('restores body overflow when closed', () => {
    render(<FormPopup />)
    openPopup()
    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(document.body.style.overflow).toBe('')
  })

  it('shows success state after successful submit', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({ ok: true } as Response)
    render(<FormPopup />)
    openPopup()

    fireEvent.change(document.querySelector('input[name="name"]')!, { target: { value: 'Anna' } })
    fireEvent.change(document.querySelector('input[name="phone"]')!, { target: { value: '+49123456789' } })
    fireEvent.submit(document.querySelector('form')!)

    await waitFor(() => {
      expect(screen.getByText('success')).toBeInTheDocument()
    })
  })

  it('shows error state after failed fetch', async () => {
    vi.mocked(fetch).mockResolvedValueOnce({ ok: false } as Response)
    render(<FormPopup />)
    openPopup()

    fireEvent.change(document.querySelector('input[name="name"]')!, { target: { value: 'Anna' } })
    fireEvent.change(document.querySelector('input[name="phone"]')!, { target: { value: '+49123456789' } })
    fireEvent.submit(document.querySelector('form')!)

    await waitFor(() => {
      expect(screen.getByText('error')).toBeInTheDocument()
    })
  })

  it('shows error state when fetch throws', async () => {
    vi.mocked(fetch).mockRejectedValueOnce(new Error('Network error'))
    render(<FormPopup />)
    openPopup()

    fireEvent.change(document.querySelector('input[name="name"]')!, { target: { value: 'Anna' } })
    fireEvent.change(document.querySelector('input[name="phone"]')!, { target: { value: '+49123456789' } })
    fireEvent.submit(document.querySelector('form')!)

    await waitFor(() => {
      expect(screen.getByText('error')).toBeInTheDocument()
    })
  })

  it('submit button is disabled while submitting', async () => {
    let resolvePromise!: (value: Response) => void
    vi.mocked(fetch).mockReturnValueOnce(new Promise((r) => { resolvePromise = r }))

    render(<FormPopup />)
    openPopup()

    fireEvent.change(document.querySelector('input[name="name"]')!, { target: { value: 'Anna' } })
    fireEvent.change(document.querySelector('input[name="phone"]')!, { target: { value: '+49123456789' } })
    fireEvent.submit(document.querySelector('form')!)

    await waitFor(() => {
      const submitBtn = screen.getByRole('button', { name: 'submitting' })
      expect(submitBtn).toBeDisabled()
    })

    act(() => { resolvePromise({ ok: true } as Response) })
  })

  it('cleans up event listeners on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<FormPopup />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('openFormPopup', expect.any(Function))
  })
})
