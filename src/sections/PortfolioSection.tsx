import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { portfolioCategories } from '../data/portfolio'
import { usePortfolio } from '../hooks/usePortfolio'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Button } from '../components/ui/Button'
import { cn } from '../lib/utils'

export function PortfolioSection() {
  const { items, loading } = usePortfolio()
  const [activeTab, setActiveTab] = useState<string>('All')

  const filtered = activeTab === 'All'
    ? items
    : items.filter((item) => item.category === activeTab.toLowerCase())

  return (
    <section id="portfolio" className="overflow-hidden bg-gradient-to-b from-white via-soft-white to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Portfolio"
          subtitle="Showcasing our best work across web, mobile, branding, and design."
          badge="Our Work"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {portfolioCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red focus-visible:ring-offset-2 focus-visible:ring-offset-white',
                activeTab === cat
                  ? 'gradient-bg text-white'
                  : 'bg-black/5 text-gray hover:bg-black/10 hover:text-black',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-red border-t-transparent" />
            </div>
          ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                className="glass-card card-hover group overflow-hidden rounded-xl"
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
            ))}
          </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-12 text-center">
          <Link to="/portfolio">
            <Button variant="outline">
              View Full Portfolio
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
