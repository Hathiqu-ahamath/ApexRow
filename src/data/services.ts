import {
  Globe,
  Smartphone,
  Palette,
  PenTool,
  Search,
  BarChart3,
  Code,
  Megaphone,
  type LucideIcon,
} from 'lucide-react'

export interface Service {
  icon: LucideIcon
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with cutting-edge technology for optimal performance.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications that deliver seamless user experiences.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'User-centered design that combines aesthetics with functionality to create memorable interfaces.',
  },
  {
    icon: PenTool,
    title: 'Branding',
    description: 'Comprehensive branding solutions including identity design, guidelines, and strategy.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies to improve visibility and drive organic traffic to your site.',
  },
  {
    icon: BarChart3,
    title: 'Digital Marketing',
    description: 'Targeted marketing campaigns across digital channels to grow your online presence.',
  },
  {
    icon: Code,
    title: 'Custom Software',
    description: 'Tailored software solutions designed to solve your unique business challenges.',
  },
  {
    icon: Megaphone,
    title: 'Content Strategy',
    description: 'Strategic content planning and creation to engage your audience and build authority.',
  },
]
