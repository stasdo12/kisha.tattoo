// Shared by the DataForSEO rank scripts.
// Since October 2026 the live SERP wraps part of the organic results in google.com/goto links:
// `domain` and `url` then say google.com and only `breadcrumb` and `website_name` name the real
// site. Matching on `domain` alone reports us as "not found" while we sit at #3.
export function resultDomain(item) {
  if (!/(^|\.)google\.com$/.test(item.domain ?? '')) return item.domain
  const host = /^https?:\/\/([^\s/›]+)/.exec(item.breadcrumb ?? '')?.[1]
  // Forum results carry "9 Kommentare · vor 2 Jahren" as a breadcrumb, so fall back to the site name.
  return host ?? item.website_name ?? item.domain
}
