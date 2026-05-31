import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { CTASection } from '../sections/CTASection'
import { useSEO } from '../hooks/useSEO'

export default function TestimonialsPage() {
  useSEO({
    title: 'Testimonials',
    description: 'Hear from our clients! Read testimonials from businesses that have partnered with ApexRow for their digital needs.',
    keywords: 'client testimonials, digital agency reviews, ApexRow clients',
    path: '/testimonials',
  })
  return (
    <>
      <Section className="pt-32">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Don't take our word for it — hear from the people we've worked with."
          badge="Testimonials"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.05}>
              <div className="glass-card card-hover flex h-full flex-col rounded-xl p-6">
                <svg className="mb-4 h-8 w-8 text-red/40" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>

                <p className="flex-1 text-sm leading-relaxed text-gray">{item.content}</p>

                <div className="mb-3 mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < item.rating ? 'fill-red text-red' : 'text-black/20'}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-border">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-red/30"
                  />
                  <div>
                    <div className="text-sm font-semibold text-black">{item.name}</div>
                    <div className="text-xs text-gray">{item.role}, {item.company}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
