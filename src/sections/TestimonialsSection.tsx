import { useRef, useEffect, useCallback } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { SectionHeader } from '../components/ui/SectionHeader'

const SPEED = 0.5

export function TestimonialsSection() {
  const items = [...testimonials, ...testimonials]
  const trackRef = useRef<HTMLDivElement>(null)
  const offset = useRef(0)
  const dragging = useRef(false)
  const paused = useRef(false)
  const raf = useRef<number | null>(null)
  const lastX = useRef(0)

  const getCardWidth = useCallback(() => {
    if (!trackRef.current) return 350
    const first = trackRef.current.firstElementChild
    if (!first) return 350
    const gap = 24
    return first.clientWidth + gap
  }, [])

  const scrollByCard = useCallback((dir: -1 | 1) => {
    paused.current = true
    const step = getCardWidth() * dir
    offset.current += step
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offset.current}px)`
    }
    setTimeout(() => { paused.current = false }, 300)
  }, [getCardWidth])

  const loop = useCallback(() => {
    if (!paused.current && trackRef.current) {
      offset.current -= SPEED
      const half = trackRef.current.scrollWidth / 2
      if (Math.abs(offset.current) >= half) {
        offset.current += half
      }
      trackRef.current.style.transform = `translateX(${offset.current}px)`
    }
    raf.current = requestAnimationFrame(loop)
  }, [])

  useEffect(() => {
    raf.current = requestAnimationFrame(loop)
    return () => { if (raf.current !== null) cancelAnimationFrame(raf.current) }
  }, [loop])

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true
    paused.current = true
    lastX.current = e.clientX
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
  }

  const onMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    const dx = e.clientX - lastX.current
    lastX.current = e.clientX
    offset.current += dx
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${offset.current}px)`
    }
  }

  const onUp = () => {
    dragging.current = false
    paused.current = false
  }

  return (
    <section id="testimonials" className="overflow-hidden bg-gradient-to-b from-white via-soft-white to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Hear from the businesses we've helped transform."
          badge="Testimonials"
        />
      </div>

      <div className="group relative">
        <button
          onClick={() => scrollByCard(-1)}
          className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl group-hover:flex md:flex"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="text-black" />
        </button>

        <button
          onClick={() => scrollByCard(1)}
          className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full bg-white/90 p-2 shadow-lg ring-1 ring-black/5 backdrop-blur-sm transition-all hover:bg-white hover:shadow-xl group-hover:flex md:flex"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="text-black" />
        </button>

        <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none">
          <div
            ref={trackRef}
            className="flex gap-6"
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
          >
            {items.map((item, i) => (
              <div
                key={`${item.id}-${i}`}
                className="glass-card flex w-[80vw] min-w-[280px] max-w-[350px] shrink-0 flex-col rounded-xl p-6"
              >
                <svg
                  className="mb-4 h-8 w-8 text-red/40"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>

                <p className="flex-1 text-sm leading-relaxed text-gray">{item.content}</p>

                <div className="mb-3 mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      className={s < item.rating ? 'fill-red text-red' : 'text-black/20'}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-border">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-red/30"
                  />
                  <div>
                    <div className="text-sm font-semibold text-black">{item.name}</div>
                    <div className="text-xs text-gray">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
