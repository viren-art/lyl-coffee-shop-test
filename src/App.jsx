import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Page0 from './pages/F1'

export default function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-900/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-bold text-white">Coffee shop menu website called Bean & Brew. Dark backgro...</span>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {navOpen ? '✕' : '☰'}
          </button>
          <div className="hidden md:flex items-center gap-1">
          <Link to="/" className="px-3 py-1.5 text-xs font-medium rounded-lg hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">React Component Architect…</Link>
          </div>
        </div>
        {navOpen && (
          <div className="md:hidden px-4 pb-3 flex flex-col gap-1">
          <Link to="/" className="px-3 py-1.5 text-xs font-medium rounded-lg hover:bg-white/10 transition-colors text-zinc-300 hover:text-white">React Component Architect…</Link>
          </div>
        )}
      </nav>

      {/* Pages */}
      <main>
        <Routes>
        <Route path="/" element={<Page0 />} />
        </Routes>
      </main>
    </div>
  )
}
