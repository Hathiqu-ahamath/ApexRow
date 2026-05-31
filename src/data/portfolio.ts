export interface PortfolioItem {
  id: number
  title: string
  category: 'web' | 'mobile' | 'branding' | 'design'
  image: string
  description: string
  tags: string[]
}

export const portfolioCategories = ['All', 'Web', 'Mobile', 'Branding', 'Design'] as const

export function parseSheetRow(row: Record<string, unknown>): PortfolioItem | null {
  const id = Number(row.id)
  const title = String(row.title || '')
  const category = String(row.category || '').toLowerCase() as PortfolioItem['category']
  const image = String(row.image || '')
  const description = String(row.description || '')
  const tagsRaw = String(row.tags || '')

  if (!title || !['web', 'mobile', 'branding', 'design'].includes(category)) return null

  return {
    id: id || Date.now(),
    title,
    category,
    image: image || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    description,
    tags: tagsRaw ? tagsRaw.split(',').map((t) => t.trim()).filter(Boolean) : [],
  }
}

export const fallbackItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    description: 'A full-featured e-commerce platform with real-time inventory management.',
    tags: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 2,
    title: 'Fitness Tracker App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    description: 'Cross-platform fitness tracking application with social features.',
    tags: ['React Native', 'Firebase', 'HealthKit'],
  },
  {
    id: 3,
    title: 'FinTech Brand Identity',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    description: 'Complete brand identity for a financial technology startup.',
    tags: ['Logo Design', 'Brand Guidelines', 'Stationery'],
  },
  {
    id: 4,
    title: 'Travel Dashboard',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    description: 'Analytics dashboard for a travel booking platform.',
    tags: ['UI Design', 'Data Viz', 'Dashboard'],
  },
  {
    id: 5,
    title: 'Healthcare Portal',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    description: 'Patient portal with appointment scheduling and telemedicine.',
    tags: ['Next.js', 'PostgreSQL', 'WebRTC'],
  },
  {
    id: 6,
    title: 'Social Media App',
    category: 'mobile',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    description: 'Location-based social networking application.',
    tags: ['Flutter', 'GraphQL', 'AWS'],
  },
  {
    id: 7,
    title: 'Restaurant Branding',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    description: 'Brand identity and menu design for a premium dining chain.',
    tags: ['Visual Identity', 'Packaging', 'Menu Design'],
  },
  {
    id: 8,
    title: 'SaaS Product Design',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    description: 'End-to-end product design for a B2B SaaS platform.',
    tags: ['UX Research', 'Wireframes', 'Prototyping'],
  },
]
