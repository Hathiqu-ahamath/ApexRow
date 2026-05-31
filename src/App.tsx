import { useEffect } from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { AppRoutes } from './routes'
import { StructuredData } from './components/StructuredData'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ApexRow',
  url: 'https://apexrow.lk/',
  logo: 'https://apexrow.lk/favicon.svg',
  description: 'Premium digital agency crafting exceptional web experiences through innovative design and cutting-edge technology.',
  email: 'apexrow.lk@gmail.com',
  telephone: '+94 72 079 9153',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LK',
    addressLocality: 'Sri Lanka',
  },
  sameAs: [
    'https://instagram.com/apexrow',
    'https://facebook.com/apexrow',
    'https://linkedin.com/company/apexrow',
  ],
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ApexRow',
  image: 'https://apexrow.lk/og-image.jpg',
  url: 'https://apexrow.lk/',
  telephone: '+94 72 079 9153',
  email: 'apexrow.lk@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'LK',
    addressLocality: 'Sri Lanka',
  },
  areaServed: 'Worldwide',
  priceRange: '$$',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://apexrow.lk/' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://apexrow.lk/about' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://apexrow.lk/services' },
    { '@type': 'ListItem', position: 4, name: 'Portfolio', item: 'https://apexrow.lk/portfolio' },
    { '@type': 'ListItem', position: 5, name: 'Testimonials', item: 'https://apexrow.lk/testimonials' },
    { '@type': 'ListItem', position: 6, name: 'FAQ', item: 'https://apexrow.lk/faq' },
    { '@type': 'ListItem', position: 7, name: 'Contact', item: 'https://apexrow.lk/contact' },
  ],
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <StructuredData data={organizationSchema} />
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={breadcrumbSchema} />
      <AppRoutes />
    </BrowserRouter>
  )
}
