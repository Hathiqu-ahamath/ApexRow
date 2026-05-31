import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { faqItems } from '../data/faq'
import { SectionHeader } from '../components/ui/SectionHeader'
import { cn } from '../lib/utils'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="faq" className="overflow-hidden bg-gradient-to-b from-white via-soft-white to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and process."
          badge="FAQ"
        />

        <div className="space-y-3">
          {faqItems.slice(0, 5).map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="glass-card overflow-hidden rounded-xl transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red"
                >
                  <span className="pr-4 text-sm font-medium text-black">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={cn(
                      'shrink-0 text-gray transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-border px-6 py-4">
                        <p className="text-sm leading-relaxed text-gray">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
