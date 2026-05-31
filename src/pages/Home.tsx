import { useSEO } from '../hooks/useSEO'
import { HeroSection } from '../sections/HeroSection'
import { TrustedClientsSection } from '../sections/TrustedClientsSection'
import { AboutSection } from '../sections/AboutSection'
import { ServicesSection } from '../sections/ServicesSection'
import { PortfolioSection } from '../sections/PortfolioSection'
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection'
import { TestimonialsSection } from '../sections/TestimonialsSection'
import { CTASection } from '../sections/CTASection'
import { FAQSection } from '../sections/FAQSection'
import { ContactSection } from '../sections/ContactSection'

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'ApexRow is a premium digital agency crafting exceptional web experiences. We build stunning websites, mobile apps, and digital solutions.',
    keywords: 'digital agency, web development, UI/UX design, branding, Sri Lanka',
    path: '/',
  })

  return (
    <>
      <HeroSection />
      <TrustedClientsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
