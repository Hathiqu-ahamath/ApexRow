import { lazy, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

const BackgroundAnimation = lazy(() =>
  import('../components/BackgroundAnimation').then((m) => ({ default: m.BackgroundAnimation }))
)

export function RootLayout() {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">
      <Suspense fallback={null}>
        <BackgroundAnimation />
      </Suspense>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="relative z-10 flex-1" aria-label="Main content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
