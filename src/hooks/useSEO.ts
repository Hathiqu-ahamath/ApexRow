import { useEffect } from 'react'

const BASE_URL = 'https://apexrow.lk'
const DEFAULT_IMAGE = 'https://apexrow.lk/og-image.jpg'
const SITE_NAME = 'ApexRow — Premium Digital Agency'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
}

export function useSEO({
  title,
  description,
  keywords,
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
}: SEOProps) {
  const fullTitle = `${title} | ApexRow Digital Agency`
  const url = `${BASE_URL}${path}`

  useEffect(() => {
    document.title = fullTitle

    const setMeta = (name: string, content: string, property?: string) => {
      const attr = property ? 'property' : 'name'
      const selector = property
        ? `meta[property="${property}"]`
        : `meta[name="${name}"]`
      let el = document.querySelector(selector) as HTMLMetaElement
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, property || name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)
    setMeta('robots', 'index,follow')
    setLink('canonical', url)

    setMeta('og:title', fullTitle, 'og:title')
    setMeta('og:description', description, 'og:description')
    setMeta('og:image', image, 'og:image')
    setMeta('og:url', url, 'og:url')
    setMeta('og:type', type, 'og:type')
    setMeta('og:site_name', SITE_NAME, 'og:site_name')

    setMeta('twitter:card', 'summary_large_image', 'twitter:card')
    setMeta('twitter:title', fullTitle, 'twitter:title')
    setMeta('twitter:description', description, 'twitter:description')
    setMeta('twitter:image', image, 'twitter:image')

    return () => {
      document.title = SITE_NAME
    }
  }, [fullTitle, description, keywords, url, image, type])
}
