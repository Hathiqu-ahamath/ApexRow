import { motion } from 'motion/react'
import { usePortfolio } from '../hooks/usePortfolio'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { CTASection } from '../sections/CTASection'
import { useSEO } from '../hooks/useSEO'

export default function Portfolio() {
  useSEO({
    title: 'Portfolio',
    description: 'Browse ApexRow\'s portfolio of web development, mobile app, branding, and design projects. See our finest work across various industries.',
    keywords: 'digital agency portfolio, web design projects, app development portfolio, branding projects',
    path: '/portfolio',
  })
  const { items, loading } = usePortfolio()
  return (
    <>
      <Section className="pt-32">
        <SectionHeader
          title="Our Portfolio"
          subtitle="A showcase of our finest work across various industries and disciplines."
          badge="Our Work"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-red border-t-transparent" />
            </div>
          ) : items.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.05}>
              <motion.div
                className="glass-card card-hover group overflow-hidden rounded-xl"
                whileHover={{ y: -4 }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="gradient-bg inline-block rounded-full px-3 py-0.5 text-xs font-medium text-white">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-black">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray line-clamp-2">{item.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                          className="rounded-md bg-black/5 px-2 py-0.5 text-xs text-gray"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
