export interface ArticleImage {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

// ![Alt](/images/work/x.jpg 1024x1536 "Caption") on a line of its own. The size
// is spelled out because next/image needs it to reserve the space before the
// photo loads, and portrait and landscape shots share the article column.
const IMAGE_LINE = /^!\[([^\]]+)\]\((\/images\/\S+) (\d+)x(\d+)(?: "([^"]+)")?\)$/

export function parseArticleImage(line: string): ArticleImage | null {
  const match = IMAGE_LINE.exec(line.trim())
  if (!match) return null
  const [, alt, src, width, height, caption] = match
  return { src, alt, width: Number(width), height: Number(height), caption }
}

/** One image line is a full-width photo, several in a block share a row. */
export function parseArticleImages(block: string): ArticleImage[] | null {
  const images = block.split('\n').map(parseArticleImage)
  return images.every((image) => image !== null) ? (images as ArticleImage[]) : null
}
