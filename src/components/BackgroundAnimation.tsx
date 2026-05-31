import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'

function useMousePosition() {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth)
      y.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [x, y])

  return { x, y }
}

function MouseGlow() {
  const { x, y } = useMousePosition()
  const springX = useSpring(x, { stiffness: 25, damping: 20 })
  const springY = useSpring(y, { stiffness: 25, damping: 20 })

  const bg = useTransform(
    [springX, springY],
    ([cx, cy]: number[]) =>
      `radial-gradient(700px circle at ${cx * 100}% ${cy * 100}%, rgba(206, 38, 38, 0.15), rgba(206, 38, 38, 0.05) 30%, transparent 60%)`
  )

  return <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: bg }} />
}

function GradientOrbs() {
  const orbs = [
    { size: 500, x: '10%', y: '-10%', color: 'rgba(206, 38, 38, 0.12)', blur: '200px', duration: 14, xRange: 60, yRange: 40, delay: 0 },
    { size: 600, x: '70%', y: '60%', color: 'rgba(206, 38, 38, 0.08)', blur: '220px', duration: 18, xRange: 80, yRange: 50, delay: 2 },
    { size: 400, x: '50%', y: '20%', color: 'rgba(0, 0, 0, 0.05)', blur: '180px', duration: 12, xRange: 50, yRange: 60, delay: 4 },
    { size: 350, x: '85%', y: '-5%', color: 'rgba(206, 38, 38, 0.07)', blur: '160px', duration: 16, xRange: 40, yRange: 30, delay: 1 },
    { size: 450, x: '5%', y: '75%', color: 'rgba(206, 38, 38, 0.06)', blur: '200px', duration: 20, xRange: 70, yRange: 45, delay: 3 },
  ]

  return (
    <>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            filter: `blur(${orb.blur})`,
          }}
          animate={{
            x: [0, orb.xRange * 0.6, orb.xRange, orb.xRange * 0.3, 0, -orb.xRange * 0.5, -orb.xRange * 0.8, -orb.xRange * 0.3, 0],
            y: [0, -orb.yRange * 0.4, -orb.yRange * 0.7, -orb.yRange * 0.2, 0, orb.yRange * 0.5, orb.yRange * 0.9, orb.yRange * 0.3, 0],
            scale: [1, 1.03, 1.06, 1.02, 1, 0.97, 0.94, 0.98, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
            delay: orb.delay,
          }}
        />
      ))}
    </>
  )
}

function GeometricShapes() {
  const shapes = [
    { type: 'circle', size: 60, x: '15%', y: '25%', duration: 16, range: 25, delay: 0, rotateRange: 15 },
    { type: 'ring', size: 80, x: '75%', y: '35%', duration: 20, range: 30, delay: 3, rotateRange: 20 },
    { type: 'ring', size: 50, x: '45%', y: '70%', duration: 14, range: 20, delay: 5, rotateRange: 10 },
    { type: 'circle', size: 40, x: '85%', y: '80%', duration: 18, range: 22, delay: 1, rotateRange: 12 },
    { type: 'ring', size: 100, x: '25%', y: '55%', duration: 22, range: 35, delay: 4, rotateRange: 25 },
    { type: 'circle', size: 35, x: '60%', y: '15%', duration: 15, range: 18, delay: 2, rotateRange: 8 },
  ]

  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="shapeGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(206, 38, 38, 0.08)" />
          <stop offset="100%" stopColor="rgba(206, 38, 38, 0.02)" />
        </linearGradient>
        <linearGradient id="shapeGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(206, 38, 38, 0.06)" />
          <stop offset="100%" stopColor="rgba(206, 38, 38, 0.10)" />
        </linearGradient>
      </defs>
      {shapes.map((shape, i) => {
        const cx = parseFloat(shape.x)
        const cy = parseFloat(shape.y)
        const r = shape.size / 2
        const grad = i % 2 === 0 ? 'url(#shapeGrad1)' : 'url(#shapeGrad2)'

        if (shape.type === 'ring') {
          return (
            <motion.g
              key={i}
              style={{ transformOrigin: `${shape.x} ${shape.y}` }}
              animate={{
                rotate: [0, shape.rotateRange, 0, -shape.rotateRange, 0],
                x: [0, shape.range * 0.5, shape.range, shape.range * 0.5, 0, -shape.range * 0.3, -shape.range * 0.6, -shape.range * 0.3, 0],
                y: [0, -shape.range * 0.3, -shape.range * 0.6, -shape.range * 0.2, 0, shape.range * 0.4, shape.range * 0.7, shape.range * 0.3, 0],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
                delay: shape.delay,
              }}
            >
              <circle
                cx={`${cx}%`}
                cy={`${cy}%`}
                r={r}
                fill="none"
                stroke={grad}
                strokeWidth="1"
                strokeDasharray={`${r * 0.8} ${r * 0.4}`}
                opacity={0.6}
              />
              <circle
                cx={`${cx}%`}
                cy={`${cy}%`}
                r={r * 0.7}
                fill="none"
                stroke="rgba(206, 38, 38, 0.03)"
                strokeWidth="0.5"
              />
            </motion.g>
          )
        }

        return (
          <motion.g
            key={i}
            style={{ transformOrigin: `${shape.x} ${shape.y}` }}
            animate={{
              x: [0, shape.range * 0.4, shape.range * 0.7, shape.range * 0.2, 0, -shape.range * 0.4, -shape.range * 0.7, -shape.range * 0.2, 0],
              y: [0, -shape.range * 0.5, -shape.range * 0.3, -shape.range * 0.7, 0, shape.range * 0.3, shape.range * 0.6, shape.range * 0.2, 0],
              scale: [1, 1.05, 1.02, 1.07, 1, 0.95, 0.98, 0.93, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1],
              delay: shape.delay,
            }}
          >
            <circle cx={`${cx}%`} cy={`${cy}%`} r={r} fill={grad} opacity={0.4} />
            <circle
              cx={`${cx}%`}
              cy={`${cy}%`}
              r={r * 0.3}
              fill="rgba(206, 38, 38, 0.04)"
            />
          </motion.g>
        )
      })}
    </svg>
  )
}

function AnimatedPatterns() {
  return (
    <>
      <div
        className="absolute inset-0 animate-grid-x"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '60px 100%',
        }}
      />
      <div
        className="absolute inset-0 animate-grid-y"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)',
          backgroundSize: '100% 60px',
        }}
      />
    </>
  )
}

function RadialGrid() {
  return (
    <div         className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.02]">
      <div
        className="h-[1200px] w-[1200px] rounded-full"
        style={{
          background: `
            radial-gradient(circle at center, transparent 30%, rgba(206, 38, 38, 0.15) 30.5%, transparent 31%),
            radial-gradient(circle at center, transparent 45%, rgba(206, 38, 38, 0.10) 45.5%, transparent 46%),
            radial-gradient(circle at center, transparent 60%, rgba(206, 38, 38, 0.07) 60.5%, transparent 61%),
            radial-gradient(circle at center, transparent 75%, rgba(0, 0, 0, 0.05) 75.5%, transparent 76%)
          `,
        }}
      />
    </div>
  )
}

function ScanLine() {
  return (
    <div
      className="pointer-events-none absolute left-0 right-0 h-[200px] animate-scan opacity-[0.015]"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(206, 38, 38, 0.3), transparent)',
        top: '-100px',
      }}
    />
  )
}

export function BackgroundAnimation() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-soft-white to-white" />

      <AnimatedPatterns />
      <RadialGrid />
      <ScanLine />
      <GradientOrbs />
      <GeometricShapes />
      <MouseGlow />
    </div>
  )
}
