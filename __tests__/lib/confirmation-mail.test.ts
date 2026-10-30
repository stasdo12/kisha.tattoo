import { existsSync } from 'node:fs'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

const sendMail = vi.fn()
vi.mock('nodemailer', () => ({ default: { createTransport: () => ({ sendMail }) } }))

// The daily counter lives in the module, so each test gets a fresh copy.
async function load() {
  vi.resetModules()
  return import('@/lib/confirmation-mail')
}

describe('buildConfirmation', () => {
  it('writes in the language of the page the form was sent from', async () => {
    const { buildConfirmation } = await load()
    expect(buildConfirmation('Anna', '/booking').subject).toBe('Deine Anfrage ist angekommen')
    expect(buildConfirmation('Anna', '/en/booking').subject).toBe('Your request has arrived')
    expect(buildConfirmation('Anna', '/uk/booking').subject).toBe('Твоя заявка надійшла')
  })

  it('falls back to German when the page is unknown', async () => {
    const { buildConfirmation } = await load()
    expect(buildConfirmation('Anna', null).text).toContain('Hallo Anna,')
    expect(buildConfirmation('Anna', '/english-page').text).toContain('Hallo Anna,')
  })

  it('greets by first name', async () => {
    const { buildConfirmation } = await load()
    expect(buildConfirmation('Анна-Марія Берг', '/uk').text).toContain('Привіт, Анна-Марія!')
  })

  it('never repeats anything but a plain name', async () => {
    const { buildConfirmation } = await load()
    for (const name of ['https://spam.example', 'Buy<b>now', 'x'.repeat(31), '   ']) {
      const { text } = buildConfirmation(name, '/booking')
      expect(text.startsWith('Hallo,\n')).toBe(true)
    }
  })

  it('promises the same 48 hours as the site in every language', async () => {
    const { buildConfirmation } = await load()
    for (const page of ['/booking', '/en/booking', '/uk/booking']) {
      expect(buildConfirmation('Anna', page).text).toContain('48')
    }
  })

  it('says the same thing in the html as in the plain text', async () => {
    const { buildConfirmation } = await load()
    for (const page of ['/booking', '/en/booking', '/uk/booking']) {
      const { text, html, subject } = buildConfirmation('Anna', page)
      expect(html).toContain(`>${subject}</h1>`)
      for (const paragraph of text.split('\n\n')) expect(html).toContain(paragraph)
    }
  })

  it('sets the html language to the language of the mail', async () => {
    const { buildConfirmation } = await load()
    expect(buildConfirmation('Anna', '/booking').html).toContain('<html lang="de">')
    expect(buildConfirmation('Anna', '/en/booking').html).toContain('<html lang="en">')
    expect(buildConfirmation('Anna', '/uk/booking').html).toContain('<html lang="uk">')
  })

  it('points to a logo that ships with the site', async () => {
    const { buildConfirmation } = await load()
    const [, path] = /src="https:\/\/kisha\.tattoo(\/[^"]+)"/.exec(buildConfirmation('Anna', '/booking').html) ?? []
    expect(path).toBe('/images/mail/kisha-logo.png')
    expect(existsSync(`public${path}`)).toBe(true)
  })

  it('never lets a typed name into the html', async () => {
    const { buildConfirmation } = await load()
    for (const name of ['https://spam.example', 'Buy<b>now']) {
      const { html } = buildConfirmation(name, '/booking')
      expect(html).not.toContain('spam.example')
      expect(html).not.toContain('Buy')
    }
  })
})

describe('sendConfirmation', () => {
  beforeEach(() => {
    sendMail.mockReset()
    vi.stubEnv('SMTP_USER', 'info@kisha.tattoo')
    vi.stubEnv('SMTP_PASSWORD', 'test')
  })
  afterEach(() => vi.unstubAllEnvs())

  it('sends from info@kisha.tattoo', async () => {
    const { sendConfirmation } = await load()
    await sendConfirmation('Anna@Test.com ', 'Anna', '/booking')
    expect(sendMail).toHaveBeenCalledOnce()
    expect(sendMail.mock.calls[0][0]).toMatchObject({ to: 'anna@test.com', from: 'Kisha Tattoo <info@kisha.tattoo>' })
  })

  it('sends both the html and the plain text', async () => {
    const { sendConfirmation } = await load()
    await sendConfirmation('anna@test.com', 'Anna', '/booking')
    const mail = sendMail.mock.calls[0][0]
    expect(mail.html).toContain('<html')
    expect(mail.text).toContain('Hallo Anna,')
  })

  it('does nothing until the mailbox password is set', async () => {
    vi.stubEnv('SMTP_PASSWORD', '')
    const { sendConfirmation } = await load()
    await sendConfirmation('anna@test.com', 'Anna', '/booking')
    expect(sendMail).not.toHaveBeenCalled()
  })

  it('skips an address that is not one', async () => {
    const { sendConfirmation } = await load()
    await sendConfirmation('not an address', 'Anna', '/booking')
    expect(sendMail).not.toHaveBeenCalled()
  })

  it('writes to one address once a day', async () => {
    const { sendConfirmation } = await load()
    await sendConfirmation('anna@test.com', 'Anna', '/booking')
    await sendConfirmation('ANNA@test.com', 'Anna', '/booking')
    expect(sendMail).toHaveBeenCalledOnce()
  })

  it('stops at the daily cap', async () => {
    const { sendConfirmation } = await load()
    for (let i = 0; i < 30; i++) await sendConfirmation(`a${i}@test.com`, 'Anna', '/booking')
    expect(sendMail).toHaveBeenCalledTimes(20)
  })

  it('swallows a mail failure', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    sendMail.mockRejectedValueOnce(new Error('SMTP down'))
    const { sendConfirmation } = await load()
    await expect(sendConfirmation('anna@test.com', 'Anna', '/booking')).resolves.toBeUndefined()
  })
})
