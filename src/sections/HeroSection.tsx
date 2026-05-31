import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { AuroraBackground } from '../components/ui/aurora-background'

export function HeroSection() {
  return (
    <AuroraBackground className="min-h-screen h-auto pt-28 bg-white">
      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="gradient-bg inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-6">
            Premium Digital Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black"
        >
          We Build{' '}
          <span className="gradient-text">Exceptional</span>{' '}
          Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-gray leading-relaxed"
        >
          From stunning websites to powerful applications, we transform your vision into reality
          with cutting-edge technology and award-winning design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link to="/contact">
            <Button size="lg">
              Get Started
              <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              View Our Work
            </Button>
          </Link>
        </motion.div>
      </Container>
    </AuroraBackground>
  )
}
