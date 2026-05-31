const clients = [
  'TechVentures',
  'InnovateLab',
  'CloudBase',
  'DataFlow',
  'GrowthPlus',
  'BrightIdeas',
  'NexGen',
  'PixelCraft',
]

export function TrustedClientsSection() {
  return (
    <section className="border-y border-gray-border bg-gradient-to-r from-white via-soft-white to-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30">
          {clients.map((client) => (
            <span
              key={client}
              className="text-sm font-semibold uppercase tracking-widest text-gray"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
