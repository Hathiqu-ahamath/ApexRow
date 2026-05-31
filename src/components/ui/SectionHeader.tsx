import { motion } from 'motion/react'
import { cn } from '../../lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  badge?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeader({ title, subtitle, badge, className, align = 'center' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={cn(
        'max-w-2xl mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {badge && (
        <span className="gradient-bg inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-gray leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
