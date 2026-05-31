import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Container } from '../components/ui/Container'


export function CTASection() {
  return (
    <section className="relative overflow-hidden gradient-bg py-16 md:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'drift 8s linear infinite',
        }}
      />
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-black/20 blur-[100px]" />

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <Sparkles size={14} />
            Let's Work Together
          </span>

          <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-white/80">
            Let's create something extraordinary together. Get in touch for a free consultation.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-medium text-black transition-all duration-300 hover:bg-white/90 cursor-pointer"
            >
              Start Your Project
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
