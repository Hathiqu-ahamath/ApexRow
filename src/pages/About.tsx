import { motion } from 'motion/react'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ScrollReveal } from '../components/ui/ScrollReveal'
import { AnimatedCounter } from '../components/ui/AnimatedCounter'
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection'
import { CTASection } from '../sections/CTASection'
import { useSEO } from '../hooks/useSEO'

const team = [
  { name: 'Alex Mercer', role: 'CEO & Founder', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop' },
  { name: 'Sophia Chen', role: 'Creative Director', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop' },
  { name: 'Marcus Johnson', role: 'Lead Developer', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop' },
  { name: 'Olivia Parker', role: 'UX Designer', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' },
]

export default function About() {
  useSEO({
    title: 'About',
    description: 'Learn about ApexRow — a team of passionate creators dedicated to building exceptional digital experiences. Founded in 2016.',
    keywords: 'about ApexRow, digital agency team, web design company Sri Lanka',
    path: '/about',
  })

  return (
    <>
      <Section className="pt-32">
        <SectionHeader
          title="About ApexRow"
          subtitle="We are a team of passionate creators dedicated to building exceptional digital experiences."
          badge="About Us"
        />

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-gray">
            Founded in 2016, ApexRow has grown from a small design studio into a full-service digital
            agency. Our mission is simple: help businesses thrive in the digital world through
            innovative design and cutting-edge technology.
          </p>
        </div>
      </Section>

      <Section className="py-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <AnimatedCounter target={150} suffix="+" label="Projects" className="glass-card rounded-xl p-6" />
          <AnimatedCounter target={50} suffix="+" label="Clients" className="glass-card rounded-xl p-6" />
          <AnimatedCounter target={8} suffix="+" label="Years" className="glass-card rounded-xl p-6" />
          <AnimatedCounter target={25} suffix="+" label="Team Members" className="glass-card rounded-xl p-6" />
        </div>
      </Section>

      <Section id="team">
        <SectionHeader
          title="Meet Our Team"
          subtitle="The talented people behind our success."
          badge="Team"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <motion.div
                className="glass-card card-hover rounded-xl p-6 text-center"
                whileHover={{ y: -4 }}
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover ring-2 ring-red/30"
                />
                <h3 className="mt-4 text-lg font-semibold text-black">{member.name}</h3>
                <p className="text-sm text-gray">{member.role}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <WhyChooseUsSection />
      <CTASection />
    </>
  )
}
