import { cn } from '../../lib/utils'
import { Container } from './Container'

interface SectionProps {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
  noOrbs?: boolean
  id?: string
}

export function Section({ children, className, noPadding, noOrbs, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'relative overflow-hidden bg-white',
        !noPadding && 'py-16 md:py-20 lg:py-24',
        className,
      )}
    >
      {!noOrbs && (
        <>
          <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-red/5 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-red/5 blur-[100px]" />
        </>
      )}
      <Container>{children}</Container>
    </section>
  )
}
