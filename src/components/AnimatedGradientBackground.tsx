'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import { cn } from '../lib/utils'

interface AnimatedGradientBackgroundProps {
  colors?: string[]
  stops?: number[]
  animationSpeed?: number
  breathingRange?: number
  startingGap?: number
  className?: string
  topOffset?: number
}

const defaultColors = [
  '#ffffff',
  '#f5f5f5',
  '#CE2626',
  '#ef4444',
  '#fca5a5',
  '#CE2626',
  '#ffffff',
]

const defaultStops = [20, 35, 50, 65, 75, 90, 100]

export function AnimatedGradientBackground({
  colors = defaultColors,
  stops = defaultStops,
  animationSpeed = 0.015,
  breathingRange = 8,
  startingGap = 120,
  className,
  topOffset = 0,
}: AnimatedGradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let frame: number
    let width = startingGap
    let direction = 1

    const animate = () => {
      if (width >= startingGap + breathingRange) direction = -1
      if (width <= startingGap - breathingRange) direction = 1
      width += direction * animationSpeed

      const gradientStops = stops
        .map((stop, i) => `${colors[i]} ${stop}%`)
        .join(', ')

      const gradient = `radial-gradient(${width}% ${width + topOffset}% at 50% 20%, ${gradientStops})`

      if (containerRef.current) {
        containerRef.current.style.background = gradient
      }

      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [startingGap, breathingRange, animationSpeed, colors, stops, topOffset])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] },
      }}
      className={cn('pointer-events-none fixed inset-0 z-0', className)}
    >
      <div ref={containerRef} className="absolute inset-0" />
    </motion.div>
  )
}
