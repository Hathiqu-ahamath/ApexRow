import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from 'lucide-react'

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function LinkedinIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}
import { SectionHeader } from '../components/ui/SectionHeader'
import { Button } from '../components/ui/Button'
import { cn } from '../lib/utils'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email address'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      alert('Thank you! Your message has been sent.')
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="overflow-hidden bg-gradient-to-b from-white via-soft-white to-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Ready to start your project? Reach out and let's make it happen."
          badge="Contact"
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-black">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={cn(
                    'w-full rounded-lg border bg-black/5 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray/50 focus:border-red',
                    errors.name ? 'border-red-500' : 'border-gray-border',
                  )}
                  placeholder="Your name"
                />
                {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-black">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={cn(
                    'w-full rounded-lg border bg-black/5 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray/50 focus:border-red',
                    errors.email ? 'border-red-500' : 'border-gray-border',
                  )}
                  placeholder="your@email.com"
                />
                {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium text-black">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-border bg-black/5 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray/50 focus:border-red"
                  placeholder="072 079 9153"
                />
              </div>
              <div>
                <label htmlFor="projectType" className="mb-1 block text-sm font-medium text-black">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-border bg-black/5 px-4 py-3 text-sm text-black outline-none transition-colors focus:border-red"
                >
                  <option value="" className="bg-white text-gray">Select a service</option>
                  <option value="web" className="bg-white text-black">Web Development</option>
                  <option value="mobile" className="bg-white text-black">Mobile App</option>
                  <option value="design" className="bg-white text-black">UI/UX Design</option>
                  <option value="branding" className="bg-white text-black">Branding</option>
                  <option value="other" className="bg-white text-black">Other</option>
                </select>
              </div>
            </div>

            <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-black">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={cn(
                    'w-full rounded-lg border bg-black/5 px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-gray/50 focus:border-red resize-none',
                    errors.message ? 'border-red-500' : 'border-gray-border',
                  )}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button type="submit" size="lg">
                <Send size={16} />
                Send Message
              </Button>
              <a
                href="https://wa.me/94720799153"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-8 py-3 text-base font-medium text-white transition-all duration-300 cursor-pointer hover:opacity-90"
                style={{ backgroundColor: '#25D366' }}
              >
                <MessageCircle size={18} />
                Contact via WhatsApp
              </a>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="mb-4 text-lg font-semibold text-black">Contact Information</h3>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'apexrow.lk@gmail.com' },
                  { icon: Phone, label: 'Phone', value: '072 079 9153' },
                  { icon: MapPin, label: 'Location', value: 'Sri Lanka' },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                      <div>
                        <div className="text-xs text-gray">{item.label}</div>
                        <div className="text-sm text-black">{item.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-red" />
                <div>
                  <div className="text-sm font-semibold text-black">WhatsApp</div>
                  <div className="text-xs text-gray">Quick replies within 1 hour</div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="mb-4 text-sm font-semibold text-black">Follow Us</h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/apexrow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-border text-gray transition-all duration-300 hover:border-red hover:text-red"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href="https://facebook.com/apexrow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-border text-gray transition-all duration-300 hover:border-red hover:text-red"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={18} />
                </a>
                <a
                  href="https://linkedin.com/company/apexrow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-border text-gray transition-all duration-300 hover:border-red hover:text-red"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={18} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
