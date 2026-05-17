import { useState, useEffect } from 'react'
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { num: '01', label: 'Home', href: '/', page: '/' },
  { num: '02', label: 'Services', href: '#services', page: '/services' },
  { num: '03', label: 'About', href: '#about', page: '/about' },
  { num: '04', label: 'Contact', href: '#contact', page: '/contact' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [hoveredLink, setHoveredLink] = useState(null)
  const [mounted, setMounted] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .filter(l => l.href.startsWith('#'))
      .map(l => document.querySelector(l.href))
      .filter(Boolean)
    const visible = new Set()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            visible.add(`#${entry.target.id}`)
          } else {
            visible.delete(`#${entry.target.id}`)
          }
        })
        // Always pick the topmost visible section in nav order
        const active = navLinks.find(l => visible.has(l.href))
        setActiveSection(active ? active.href : '')
      },
      { threshold: 0.25, rootMargin: '-10% 0px -65% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (href, page) => {
    setMenuOpen(false)
    if (page) {
      navigate(page)
      return
    }
    // hash anchor — if on home page scroll directly, otherwise go home first
    if (location.pathname === '/') {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/' + href)
    }
  }

  // Derive active from current route or hash section
  const activeFromRoute = navLinks.find(l => l.page && location.pathname === l.page)?.href || ''

  return (
    <>
      {/* ── Top Utility Bar ── */}
      <motion.div
        initial={{ y: -36 }}
        animate={{ y: scrolled ? -36 : 0 }}
        transition={{ duration: 0.4, ease }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#0c2419] border-b border-white/[0.06]"
        style={{ height: '36px' }}
      >
        <div className="section-padding max-w-screen-2xl mx-auto flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <a
              href="tel:1300346874"
              className="flex items-center gap-1.5 text-[#DDE7E1]/50 hover:text-[#DDE7E1] text-[10px] tracking-wide transition-colors duration-200"
            >
              <Phone size={10} />
              1300 FIN CASH
            </a>
            <span className="w-px h-3 bg-white/8" />
            <a
              href="mailto:info@fintrixcapital.com.au"
              className="hidden sm:block text-[#DDE7E1]/50 hover:text-[#DDE7E1] text-[10px] tracking-wide transition-colors duration-200"
            >
              info@fintrixcapital.com.au
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DDE7E1]/25" />
            <span className="text-[#DDE7E1]/35 text-[10px] tracking-[0.15em] uppercase">AFCA Member</span>
            <span className="w-px h-3 bg-white/8" />
            <span className="text-[#DDE7E1]/35 text-[10px] tracking-[0.15em] uppercase">Authorised Finance Broker</span>
          </div>
        </div>
      </motion.div>

      {/* ── Main Header ── */}
      <motion.header
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? 'top-0' : 'top-9'
        }`}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease }}
      >
        {/* Glassmorphic background */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? 'bg-[#0d2b1e]/95 backdrop-blur-xl border-b border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.35)]'
              : 'bg-[#0c2419]/50 backdrop-blur-md border-b border-white/5'
          }`}
        />

        {/* Animated accent line that draws in on mount */}
        {mounted && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#DDE7E1]/18 to-transparent pointer-events-none"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.8, ease }}
            style={{ transformOrigin: 'center' }}
          />
        )}

        <div className="relative section-padding max-w-screen-2xl mx-auto flex items-center justify-between" style={{ height: '72px' }}>

          {/* ── Logo ── */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="group shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
          >
            <img
              src="/logo-fin.png"
              alt="Fintrix Capital"
              className="h-9 w-auto object-contain transition-all duration-300 group-hover:opacity-70"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </motion.a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center">
            {navLinks.map((link, i) => {
              const isActive = activeFromRoute ? activeFromRoute === link.href : activeSection === link.href
              const isHovered = hoveredLink === link.label
              return (
                <motion.button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.page)}
                  onMouseEnter={() => setHoveredLink(link.label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  initial={{ opacity: 0, y: -14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.07, ease }}
                  className="relative group flex flex-col items-center px-5 py-2 cursor-pointer bg-transparent border-none outline-none"
                >
                  {/* Ghost number — slides down into view on hover/active */}
                  <div className="overflow-hidden h-3.5 mb-0.5">
                    <motion.span
                      animate={{ y: isActive || isHovered ? 0 : -14, opacity: isActive || isHovered ? 1 : 0 }}
                      transition={{ duration: 0.22, ease }}
                      className={`block text-[9px] tracking-[0.22em] font-medium select-none ${
                        isActive ? 'text-[#DDE7E1]/80' : 'text-[#DDE7E1]/50'
                      }`}
                    >
                      {link.num}
                    </motion.span>
                  </div>

                  {/* Label */}
                  <span
                    className={`text-[13px] font-medium tracking-wide transition-colors duration-200 select-none ${
                      isActive ? 'text-white' : 'text-white/55 group-hover:text-white/90'
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Active sliding dot (layoutId moves it between nav items) */}
                  {isActive && (
                    <motion.div
                      layoutId="nav-dot"
                      className="absolute -bottom-px left-1/2 -translate-x-1/2 w-5 h-px bg-[#DDE7E1]/55 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </nav>

          {/* ── CTA group ── */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
          >
            {/* Phone with live pulsing indicator */}
            <a
              href="tel:1300346874"
              className="flex items-center gap-2 text-white/45 hover:text-[#DDE7E1] text-[12px] font-medium
                         transition-colors duration-200 tracking-wide"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DDE7E1]/35" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DDE7E1]/55" />
              </span>
              1300 FIN CASH
            </a>

            <div className="w-px h-5 bg-white/12" />

            {/* CTA button with sweep-shine on hover */}
            <button
              onClick={() => handleNav('#contact', '/contact')}
              className="relative group overflow-hidden inline-flex items-center gap-1.5
                         bg-[#DDE7E1] hover:bg-white text-[#123524]
                         font-bold px-5 py-2.5 rounded-sm
                         transition-colors duration-300 text-[11px] tracking-[0.1em] uppercase"
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent
                           -translate-x-full group-hover:translate-x-full transition-transform duration-500 pointer-events-none"
              />
              Apply Now
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </motion.div>

          {/* ── Mobile hamburger ── */}
          <button
            className="md:hidden text-white p-1 relative z-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Menu — clip-path wipe reveal ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.4, ease }}
            className={`fixed left-0 right-0 z-30 bg-[#0c2419] border-b border-white/8 py-6 ${
              scrolled ? 'top-[72px]' : 'top-[108px]'
            }`}
          >
            <nav className="section-padding flex flex-col">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNav(link.href, link.page)}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.35, ease }}
                  className="flex items-center gap-4 py-4 border-b border-white/[0.06] text-left cursor-pointer bg-transparent w-full outline-none group"
                  style={{ border: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <span className="text-[#DDE7E1]/30 text-[10px] tracking-widest font-medium w-5 shrink-0">{link.num}</span>
                  <span className={`text-base font-medium tracking-wide transition-colors ${
                    activeSection === link.href ? 'text-[#DDE7E1]' : 'text-white/70 group-hover:text-white'
                  }`}>
                    {link.label}
                  </span>
                  <ArrowUpRight size={14} className="ml-auto text-white/15 group-hover:text-white/45 transition-colors" />
                </motion.button>
              ))}

              <div className="pt-6 flex flex-col gap-3">
                <button
                  onClick={() => handleNav('#contact')}
                  className="inline-flex items-center justify-center gap-2 bg-[#DDE7E1] hover:bg-white
                             text-[#123524] font-bold px-6 py-3.5 rounded-sm transition-all duration-300
                             text-sm tracking-wider uppercase"
                >
                  Apply Now
                </button>
                <a
                  href="tel:1300346874"
                  className="inline-flex items-center justify-center gap-2 border border-white/15
                             hover:border-[#DDE7E1]/40 hover:text-[#DDE7E1] text-white/60
                             py-3.5 rounded-sm text-sm transition-all duration-300"
                >
                  <Phone size={14} />
                  1300 FIN CASH
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}


