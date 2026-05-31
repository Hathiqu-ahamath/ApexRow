import { ContactSection } from '../sections/ContactSection'
import { useSEO } from '../hooks/useSEO'

export default function Contact() {
  useSEO({
    title: 'Contact',
    description: 'Get in touch with ApexRow. Start your project today — contact us via email, phone, or WhatsApp. Based in Sri Lanka.',
    keywords: 'contact digital agency, web design inquiry, hire web developer Sri Lanka',
    path: '/contact',
  })

  return <ContactSection />
}
