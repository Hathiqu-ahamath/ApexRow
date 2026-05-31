import { ScrollReveal } from '../components/ui/ScrollReveal'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-gradient-to-b from-white via-soft-white to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <span className="gradient-bg inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
              Crafting Digital Excellence Since{' '}
              <span className="gradient-text">2026</span>
            </h2>
            <p className="mt-6 leading-relaxed text-gray">
              ApexRow is a premium digital agency specializing in web development, mobile
              applications, and UI/UX design. We combine technical expertise with creative vision to
              deliver solutions that drive real business results.
            </p>
            <p className="mt-4 leading-relaxed text-gray">
              Our team of passionate designers, developers, and strategists work collaboratively to
              bring your ideas to life. We believe in building lasting partnerships with our clients,
              understanding their unique challenges, and delivering exceptional value.
            </p>
            <p className="mt-4 leading-relaxed text-gray">
              With over 20+ successful projects and counting, we have helped businesses of all sizes
              establish a powerful digital presence that stands out in today's competitive landscape.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <AnimatedCounter target={20} suffix="+" label="Clients" className="glass-card rounded-xl p-6" />
              <AnimatedCounter target={1} suffix="+" label="Years Experience" className="glass-card rounded-xl p-6" />
              <AnimatedCounter target={15} suffix="+" label="Happy Clients" className="glass-card rounded-xl p-6" />
              <AnimatedCounter target={99} suffix="%" label="Satisfaction" className="glass-card rounded-xl p-6" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
