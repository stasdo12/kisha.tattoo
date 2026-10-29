/**
 * Shrinks reference photos in the browser before the booking form sends them.
 *
 * nginx on the VPS accepts at most 1 MB per request (no client_max_body_size
 * is set, so its default applies), and a phone photo is 2–5 MB. Until
 * 29.10.2026 every booking with a real photo bounced with a 413: the nginx
 * error log shows one visitor trying 8 times on 30.08 and another 7 times on
 * 12.09, neither enquiry ever reaching Telegram. Shrinking here keeps the
 * request under that limit without touching the server, and a reference
 * picture needs no more than ~1600 px to show an idea.
 *
 * Anything the browser cannot draw (a PDF, or HEIC outside Safari) is passed
 * through unchanged; the caller checks the total against the budget.
 */

/** Total bytes all files may take, leaving room for the text fields. */
export const UPLOAD_BUDGET_B = 900 * 1024

export const MAX_FILES = 5

const START_EDGE = 1600
const MIN_EDGE   = 640

async function toJpeg(bitmap: ImageBitmap, edge: number, quality: number): Promise<Blob | null> {
  const scale  = Math.min(1, edge / Math.max(bitmap.width, bitmap.height))
  const canvas = document.createElement('canvas')
  canvas.width  = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d')?.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  return new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality))
}

/** Returns a JPEG no larger than maxBytes if it can, else the smallest it got. */
export async function shrinkImage(file: File, maxBytes: number): Promise<File> {
  if (!file.type.startsWith('image/') || file.size <= maxBytes) return file

  let bitmap: ImageBitmap
  try {
    bitmap = await createImageBitmap(file)
  } catch {
    return file // a format this browser cannot decode
  }

  const name = file.name.replace(/\.[^.]+$/, '') + '.jpg'
  let best: Blob | null = null
  for (let edge = START_EDGE; edge >= MIN_EDGE; edge = Math.round(edge * 0.8)) {
    const blob = await toJpeg(bitmap, edge, 0.82)
    if (blob && (!best || blob.size < best.size)) best = blob
    if (blob && blob.size <= maxBytes) break
  }
  bitmap.close()
  return best ? new File([best], name, { type: 'image/jpeg' }) : file
}

/** Shrinks every image so that, together with the other files, all fit the budget. */
export async function prepareUploads(files: File[]): Promise<File[]> {
  const images = files.filter((f) => f.type.startsWith('image/'))
  const others = files.filter((f) => !f.type.startsWith('image/'))
  const othersSize = others.reduce((sum, f) => sum + f.size, 0)
  const perImage = images.length ? Math.max(0, UPLOAD_BUDGET_B - othersSize) / images.length : 0
  const shrunk = await Promise.all(images.map((f) => shrinkImage(f, perImage)))
  return [...shrunk, ...others]
}
