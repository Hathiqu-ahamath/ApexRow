import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '../data/services'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { Button } from '../components/ui/Button'

export function ServicesSection() {
  return (
    <section id="services" className="overflow-hidden bg-gradient-to-b from-white via-soft-white to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive digital solutions to help your business thrive in the modern landscape."
          badge="What We Do"
        />

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} delay={i * 0.05}>
                <motion.div
                  className="glass-card card-hover group rounded-xl p-6"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="gradient-bg mb-4 inline-flex rounded-lg p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-black">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray">{service.description}</p>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button variant="outline">
              View All Services
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
