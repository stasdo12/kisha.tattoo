export interface ArticleImage {
  src: string
  alt: string
  width: number
  height: number
  caption?: string
}

// ![Alt](/images/work/x.jpg 1024x1536 "Caption") as a block of its own. The size
// is spelled out because next/image needs it to reserve the space before the
// photo loads, and portrait and landscape shots share the article column.
const IMAGE_BLOCK = /^!\[([^\]]+)\]\((\/images\/\S+) (\d+)x(\d+)(?: "([^"]+)")?\)$/

export function parseArticleImage(block: string): ArticleImage | null {
  const match = IMAGE_BLOCK.exec(block.trim())
  if (!match) return null
  const [, alt, src, width, height, caption] = match
  return { src, alt, width: Number(width), height: Number(height), caption }
}
