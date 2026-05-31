export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechVentures',
    content: 'ApexRow transformed our digital presence completely. Their attention to detail and innovative approach exceeded all our expectations.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Founder',
    company: 'InnovateLab',
    content: 'Working with ApexRow was a game-changer for our startup. They delivered a stunning platform that our users love.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthPlus',
    content: 'The team at ApexRow brings incredible creativity and technical expertise. Our conversion rates have doubled since launch.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'David Park',
    role: 'CTO',
    company: 'DataFlow Systems',
    content: 'ApexRow delivered a complex platform on time and within budget. Their technical prowess is truly impressive.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Product Manager',
    company: 'CloudBase',
    content: 'From concept to execution, ApexRow demonstrated exceptional professionalism and design thinking.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
  },
  {
    id: 6,
    name: 'Marcus Williams',
    role: 'Entrepreneur',
    company: 'BrightIdeas',
    content: 'I have worked with many agencies, but ApexRow stands out for their dedication and quality of work.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
  },
]
