import { useEffect, useId, useRef, useState } from 'react'
import { motion } from 'motion/react'
import { cn } from '../lib/utils'

interface AnimatedGridBackgroundProps {
  width?: number
  height?: number
  numSquares?: number
  className?: string
  maxOpacity?: number
  duration?: number
}

function getPos(dims: { width: number; height: number }, cellW: number, cellH: number) {
  return [
    Math.floor((Math.random() * dims.width) / cellW),
    Math.floor((Math.random() * dims.height) / cellH),
  ]
}

export function AnimatedGridBackground({
  width = 50,
  height = 50,
  numSquares = 30,
  className,
  maxOpacity = 0.15,
  duration = 3,
}: AnimatedGridBackgroundProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const dimsRef = useRef({ width: 0, height: 0 })

  const [squares, setSquares] = useState<
    { id: number; pos: number[] }[] | undefined
  >(undefined)

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect
        dimsRef.current = { width: w, height: h }
        setSquares(
          Array.from({ length: numSquares }, (_, i) => ({
            id: i,
            pos: getPos({ width: w, height: h }, width, height),
          }))
        )
      }
    })
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [numSquares, width, height])

  const updatePosition = (id: number) => {
    setSquares((prev) =>
      prev?.map((sq) => (sq.id === id ? { ...sq, pos: getPos(dimsRef.current, width, height) } : sq))
    )
  }

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed inset-0 z-0 h-full w-full fill-red/10 stroke-red/10',
        className
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            className="stroke-red/10"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg className="overflow-visible">
        {squares?.map(({ pos: [x, y], id: squareId }) => (
          <motion.rect
            key={`${x}-${y}-${squareId}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: squareId * 0.08,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            onAnimationComplete={() => updatePosition(squareId)}
            width={width - 1}
            height={height - 1}
            x={x * width + 1}
            y={y * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  )
}
