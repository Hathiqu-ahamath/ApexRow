import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import { faqItems } from '../data/faq'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'
import { Button } from '../components/ui/Button'
import { StructuredData } from '../components/StructuredData'
import { cn } from '../lib/utils'
import { useSEO } from '../hooks/useSEO'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export default function FAQPage() {
  useSEO({
    title: 'FAQ',
    description: 'Find answers to frequently asked questions about ApexRow\'s services, pricing, process, and more.',
    keywords: 'FAQ, digital agency questions, web development FAQ, ApexRow help',
    path: '/faq',
  })
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <>
      <StructuredData data={faqSchema} />
      <Section className="pt-32">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with ApexRow."
          badge="FAQ"
        />

        <div className="mx-auto max-w-3xl">
          <div className="space-y-3">
            {faqItems.map((item, i) => {
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

          <div className="mt-12 text-center">
            <p className="mb-4 text-gray">Still have questions?</p>
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
