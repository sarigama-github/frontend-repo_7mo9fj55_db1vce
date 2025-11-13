import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Blog from './components/Blog'
import Contact from './components/Contact'
import AuthDialog from './components/AuthDialog'

const primary = '#B82124'

function Footer(){
  return (
    <footer className="py-10 bg-white border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md" style={{ background: primary }}></div>
            <span className="text-sm text-gray-600">© {new Date().getFullYear()} RedPulse</span>
          </div>
          <div className="text-sm text-gray-500">Built with love and speed.</div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <main className="pt-16">
        <Hero />
        <Features />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <AuthDialog open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  )
}

export default App
