import { Star } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import { SectionHeader } from '../components/ui/SectionHeader'

export function TestimonialsSection() {
  const items = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="overflow-hidden bg-gradient-to-b from-white via-soft-white to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Clients Say"
          subtitle="Hear from the businesses we've helped transform."
          badge="Testimonials"
        />
      </div>

      <div className="group relative overflow-hidden">
        <div
          className="flex gap-6 group-hover:[animation-play-state:paused]"
          style={{ animation: 'marquee 40s linear infinite' }}
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
    </section>
  )
}
