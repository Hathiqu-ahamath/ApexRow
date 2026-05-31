import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { navigationLinks } from '../data/navigation'
import { Button } from './ui/Button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <header
      className={cn(
        'fixed top-0 right-0 left-0 z-50 transition-all duration-500',
        scrolled
          ? 'top-4 left-4 right-4 bg-white/80 backdrop-blur-xl border border-gray-border rounded-2xl shadow-lg shadow-black/10'
          : 'top-0 left-0 right-0 bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="relative z-10">
          <span className="text-2xl font-bold tracking-tight text-black">
            Apex<span className="gradient-text">Row</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative text-sm font-medium transition-colors duration-300 focus-visible:outline-none focus-visible:text-red',
                  isActive ? 'text-black' : 'text-gray hover:text-black',
                )}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-bg rounded-full"
                  />
                )}
              </Link>
            )
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link to="/contact">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 cursor-pointer text-black lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-0 flex flex-col items-center justify-center gap-8 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            {navigationLinks.map((link, i) => {
              const isActive = location.pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    className={cn(
                      'text-2xl font-semibold transition-colors duration-300',
                      isActive ? 'text-black' : 'text-gray hover:text-black',
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            })}
            <Link to="/contact">
              <Button size="lg">Get Started</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
