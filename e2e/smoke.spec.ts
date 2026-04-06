/**
 * Smoke tests — verify every page returns 200 and has an <h1>.
 * Runs against production (BASE_URL=https://kisha.tattoo) by default.
 * For local: BASE_URL=http://localhost:3000 npx playwright test
 */
import { test, expect } from '@playwright/test'

// All pages that must be reachable
const DE_PAGES = [
  { path: '/', label: 'Home DE' },
  { path: '/about', label: 'About DE' },
  { path: '/works', label: 'Works DE' },
  { path: '/booking', label: 'Booking DE' },
  { path: '/contact', label: 'Contact DE' },
  { path: '/faq', label: 'FAQ DE' },
  { path: '/blog', label: 'Blog DE' },
  { path: '/aftercare', label: 'Aftercare DE' },
  { path: '/awards', label: 'Awards DE' },
  { path: '/motive', label: 'Motive DE' },
  { path: '/tattoo-preise-muenchen', label: 'Preise DE' },
  { path: '/linework-tattoo-muenchen', label: 'Fineline DE' },
  { path: '/japanisches-tattoo-muenchen', label: 'Japanisch DE' },
  { path: '/grafik-tattoo-muenchen', label: 'Grafik DE' },
  { path: '/walk-in-tattoo-muenchen', label: 'Walk-in DE' },
  { path: '/tattoo-freising', label: 'Freising DE' },
  { path: '/tattoo-eching', label: 'Eching DE' },
  { path: '/tattoo-neufahrn', label: 'Neufahrn DE' },
  { path: '/tattoo-ottobrunn', label: 'Ottobrunn DE' },
  { path: '/tattoo-dachau', label: 'Dachau DE' },
]

const EN_PAGES = [
  { path: '/en/', label: 'Home EN' },
  { path: '/en/faq', label: 'FAQ EN' },
  { path: '/en/tattoo-preise-muenchen', label: 'Preise EN' },
  { path: '/en/blog', label: 'Blog EN' },
]

const UK_PAGES = [
  { path: '/uk/', label: 'Home UK' },
  { path: '/uk/faq', label: 'FAQ UK' },
  { path: '/uk/tattoo-preise-muenchen', label: 'Preise UK' },
  { path: '/uk/blog', label: 'Blog UK' },
]

// ── DE pages ────────────────────────────────────────────────────────────────

for (const { path, label } of DE_PAGES) {
  test(`[smoke] ${label} — loads with H1`, async ({ page }) => {
    const response = await page.goto(path)
    expect(response?.status(), `${label}: unexpected HTTP status`).toBe(200)
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })
}

// ── EN pages ─────────────────────────────────────────────────────────────────

for (const { path, label } of EN_PAGES) {
  test(`[smoke] ${label} — loads with H1`, async ({ page }) => {
    const response = await page.goto(path)
    expect(response?.status(), `${label}: unexpected HTTP status`).toBe(200)
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })
}

// ── UK pages ─────────────────────────────────────────────────────────────────

for (const { path, label } of UK_PAGES) {
  test(`[smoke] ${label} — loads with H1`, async ({ page }) => {
    const response = await page.goto(path)
    expect(response?.status(), `${label}: unexpected HTTP status`).toBe(200)
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    await expect(h1).not.toBeEmpty()
  })
}

// ── Blog article ──────────────────────────────────────────────────────────────

test('[smoke] Blog article — loads with H1', async ({ page }) => {
  const response = await page.goto('/blog/fineline-tattoo-ideen-muenchen')
  expect(response?.status()).toBe(200)
  const h1 = page.locator('h1').first()
  await expect(h1).toBeVisible()
})

// ── 404 ──────────────────────────────────────────────────────────────────────

test('[smoke] Non-existent page returns 404', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist-xyz')
  expect(response?.status()).toBe(404)
})

// ── hreflang ─────────────────────────────────────────────────────────────────

test('[smoke] Home DE has hreflang tags for de, en, uk, x-default', async ({ page }) => {
  await page.goto('/')
  const de = page.locator('link[rel="alternate"][hreflang="de"]')
  const en = page.locator('link[rel="alternate"][hreflang="en"]')
  const uk = page.locator('link[rel="alternate"][hreflang="uk"]')
  const xd = page.locator('link[rel="alternate"][hreflang="x-default"]')
  await expect(de).toHaveCount(1)
  await expect(en).toHaveCount(1)
  await expect(uk).toHaveCount(1)
  await expect(xd).toHaveCount(1)
})

// ── Structured data ───────────────────────────────────────────────────────────

test('[smoke] Home has LocalBusiness JSON-LD', async ({ page }) => {
  await page.goto('/')
  const scripts = await page.locator('script[type="application/ld+json"]').all()
  expect(scripts.length).toBeGreaterThanOrEqual(1)
  let found = false
  for (const s of scripts) {
    const text = await s.textContent()
    if (text?.includes('LocalBusiness')) { found = true; break }
  }
  expect(found, 'LocalBusiness schema not found on home page').toBe(true)
})

test('[smoke] FAQ page has FAQPage JSON-LD', async ({ page }) => {
  await page.goto('/faq')
  const scripts = await page.locator('script[type="application/ld+json"]').all()
  let found = false
  for (const s of scripts) {
    const text = await s.textContent()
    if (text?.includes('FAQPage')) { found = true; break }
  }
  expect(found, 'FAQPage schema not found on /faq').toBe(true)
})

test('[smoke] Preise page has FAQPage JSON-LD', async ({ page }) => {
  await page.goto('/tattoo-preise-muenchen')
  const scripts = await page.locator('script[type="application/ld+json"]').all()
  let found = false
  for (const s of scripts) {
    const text = await s.textContent()
    if (text?.includes('FAQPage')) { found = true; break }
  }
  expect(found, 'FAQPage schema not found on /tattoo-preise-muenchen').toBe(true)
})

// ── GA4 tag ───────────────────────────────────────────────────────────────────

test('[smoke] Home has GA4 script tag', async ({ page }) => {
  await page.goto('/')
  const ga = page.locator('script[src*="googletagmanager.com/gtag"]')
  await expect(ga).toHaveCount(1)
})

// ── Canonical ─────────────────────────────────────────────────────────────────

test('[smoke] Home canonical matches the served locale', async ({ page }) => {
  // Middleware geo-detects locale: from DE IPs → root, from others → /en/ or /uk/
  // Test invariant: canonical must be a valid kisha.tattoo URL for some locale
  await page.goto('/')
  const canonical = page.locator('link[rel="canonical"]')
  const href = await canonical.getAttribute('href')
  expect(href).toMatch(/^https:\/\/kisha\.tattoo(\/en\/|\/uk\/|\/?)/)
})

test('[smoke] Home EN canonical has /en/ prefix', async ({ page }) => {
  await page.goto('/en/')
  const canonical = page.locator('link[rel="canonical"]')
  const href = await canonical.getAttribute('href')
  expect(href).toContain('/en/')
})

// ── No console errors on key pages ───────────────────────────────────────────

test('[smoke] Home — no console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  await page.goto('/')
  await page.waitForLoadState('networkidle')
  expect(errors).toHaveLength(0)
})

test('[smoke] Booking — no console errors', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  await page.goto('/booking')
  await page.waitForLoadState('networkidle')
  expect(errors).toHaveLength(0)
})

// ── Redirects ─────────────────────────────────────────────────────────────────

test('[smoke] Old /linework-tattoo-muenchen redirect chain resolves to 200', async ({ page }) => {
  const response = await page.goto('/linework-tattoo-muenchen')
  expect(response?.status()).toBe(200)
})