import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const primary = '#B82124'

export default function Navbar({ onOpenAuth }) {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg" style={{ background: primary }}></div>
            <span className="font-semibold tracking-tight">RedPulse</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
            <button
              onClick={onOpenAuth}
              className="rounded-md px-4 py-2 text-white shadow" 
              style={{ background: primary }}
            >
              Sign in
            </button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-2 text-gray-700" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); onOpenAuth() }}
              className="w-full rounded-md px-4 py-2 text-white" 
              style={{ background: primary }}
            >
              Sign in
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
