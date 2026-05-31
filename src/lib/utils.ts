import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function imgSrcSet(url: string, sizes: number[] = [400, 800, 1200]): string {
  try {
    const hasParams = url.includes('?')
    return sizes
      .map((w) => {
        const separator = hasParams ? '&' : '?'
        const src = `${url}${separator}w=${w}`
        return `${src} ${w}w`
      })
      .join(', ')
  } catch {
    return ''
  }
}
