import { describe, expect, it } from 'vitest'
import de from '@/messages/de.json'
import en from '@/messages/en.json'
import uk from '@/messages/uk.json'
import { whatsAppHref, whatsAppTopic } from '@/lib/whatsapp'

describe('whatsAppTopic', () => {
  it('matches a style page', () => {
    expect(whatsAppTopic('/japanisches-tattoo-muenchen')).toBe('japanese')
  })

  it('matches the pages below a topic', () => {
    expect(whatsAppTopic('/tattoo-unikate/some-design')).toBe('unikate')
  })

  it('does not match a blog article that merely shares a word', () => {
    expect(whatsAppTopic('/blog/fineline-tattoo-ideen-muenchen')).toBe('default')
  })

  it('falls back to the general greeting', () => {
    expect(whatsAppTopic('/')).toBe('default')
  })
})

describe('whatsAppHref', () => {
  it('keeps digits only in the number and encodes the text', () => {
    expect(whatsAppHref('Hallo Kisha, für dich')).toBe(
      'https://wa.me/491701893395?text=Hallo%20Kisha%2C%20f%C3%BCr%20dich'
    )
  })
})

describe('whatsapp messages', () => {
  const topics = ['default', 'japanese', 'graphic', 'fineline', 'walkin', 'prices', 'gutschein', 'unikate']

  it.each([['de', de], ['en', en], ['uk', uk]])('%s has every topic', (_, messages) => {
    expect(Object.keys(messages.whatsapp).sort()).toEqual([...topics].sort())
  })
})
