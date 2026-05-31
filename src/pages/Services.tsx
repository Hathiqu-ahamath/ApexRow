import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { services } from '../data/services'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { CTASection } from '../sections/CTASection'
import { useSEO } from '../hooks/useSEO'

const features: Record<string, string[]> = {
  'Web Development': ['Custom web applications', 'Responsive design', 'Performance optimization', 'API integration', 'CMS solutions'],
  'Mobile Apps': ['Cross-platform development', 'Native performance', 'Push notifications', 'Offline support', 'App store deployment'],
  'UI/UX Design': ['User research', 'Wireframing', 'Interactive prototypes', 'Usability testing', 'Design systems'],
  'Branding': ['Logo design', 'Brand strategy', 'Visual identity', 'Brand guidelines', 'Marketing materials'],
  'SEO Optimization': ['Keyword research', 'On-page SEO', 'Technical SEO', 'Link building', 'Performance tracking'],
  'Digital Marketing': ['Social media strategy', 'Email marketing', 'PPC advertising', 'Content marketing', 'Analytics & reporting'],
  'Custom Software': ['Requirement analysis', 'Architecture design', 'Agile development', 'Quality assurance', 'Ongoing support'],
  'Content Strategy': ['Content audits', 'Editorial planning', 'Copywriting', 'Visual content', 'Performance analysis'],
}

export default function Services() {
  useSEO({
    title: 'Services',
    description: 'Explore ApexRow\'s end-to-end digital services: web development, mobile apps, UI/UX design, branding, SEO, digital marketing, custom software, and content strategy.',
    keywords: 'web development services, mobile app development, UI/UX design, branding agency, SEO services, digital marketing Sri Lanka',
    path: '/services',
  })

  return (
    <>
      <Section className="pt-32">
        <SectionHeader
          title="Our Services"
          subtitle="End-to-end digital solutions tailored to your business needs."
          badge="What We Do"
        />

        <div className="mt-12 grid gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            const serviceFeatures = features[service.title] || []
            return (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <motion.div
                  className="glass-card card-hover rounded-xl p-6 md:p-8"
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col gap-6 md:flex-row md:items-start">
                    <div className="gradient-bg inline-flex shrink-0 rounded-xl p-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                      <p className="mt-2 text-gray">{service.description}</p>
                    </div>
                    <div className="shrink-0">
                      <ul className="space-y-2">
                        {serviceFeatures.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-gray">
                              <Check size={14} className="text-red" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
