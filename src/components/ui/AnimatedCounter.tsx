import { useEffect, useRef, useState } from 'react'
import { useInView } from 'motion/react'
import { cn } from '../../lib/utils'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  label: string
  className?: string
}

export function AnimatedCounter({ target, suffix = '', label, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const step = Math.ceil(target / (duration / 16))

    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isInView, target])

  return (
    <div ref={ref} className={cn('text-center', className)}>
      <div className="text-3xl md:text-4xl font-bold gradient-text">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-gray">{label}</div>
    </div>
  )
}
