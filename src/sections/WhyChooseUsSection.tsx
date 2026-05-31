import { Lightbulb, Shield, Zap, HeartHandshake } from 'lucide-react'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technology to create solutions that push boundaries.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'We deliver on time, on budget, with unwavering quality and transparency.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    icon: Zap,
    title: 'Speed & Performance',
    description: 'Optimized for speed, our solutions deliver exceptional user experiences.',
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership',
    description: 'We work as an extension of your team, committed to your success.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-white via-soft-white to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us"
          subtitle="We combine creativity with technical excellence to deliver outstanding results."
          badge="Our Values"
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => {
            const Icon = value.icon
            return (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="glass-card card-hover group flex h-full flex-col items-center rounded-xl p-8 text-center">
                  <div
                    className={`mx-auto mb-5 inline-flex rounded-2xl p-4 transition-transform duration-300 group-hover:scale-110 ${value.bg} ${value.color}`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-black">{value.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-gray">{value.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
