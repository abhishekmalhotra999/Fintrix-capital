import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Phone, Shield, TrendingUp, Award, Clock } from 'lucide-react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1561488111-5d800fd56b8a?auto=format&fit=crop&w=1800&q=90',
    alt: 'Melbourne CBD skyline at dusk',
    label: 'Australian Finance Solutions',
  },
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90',
    alt: 'Commercial business district skyscrapers',
    label: 'Commercial & Property Finance',
  },
  {
    src: 'https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1800&q=90',
    alt: 'Commercial building under construction',
    label: 'Construction Finance',
  },
  {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=90',
    alt: 'Aerial view of industrial construction site',
    label: 'Equipment & Asset Finance',
  },
]

const SLIDE_MS = 5500

const stats = [
  { value: '$2.4B+', label: 'Finance Arranged', icon: TrendingUp },
  { value: '1,400+', label: 'Businesses Funded', icon: Award },
  { value: '24 hrs', label: 'Avg. Approval Time', icon: Clock },
]

const trustBadges = [
  'AFCA Member', 'Authorised Finance Broker', 'Est. 2015', 'Melbourne, Australia',
]

const services = [
  'Asset Finance', 'Equipment Leasing', 'Commercial Lending',
  'Excavator Finance', 'Warehouse Funding', 'Construction Finance',
]

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlideIndex((i) => (i + 1) % slides.length), SLIDE_MS)
    return () => clearInterval(t)
  }, [])

  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">

      {/* ── Sliding background images ── */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={slideIndex}
            src={slides[slideIndex].src}
            alt={slides[slideIndex].alt}
            initial={{ opacity: 0, scale: 1.0 }}
            animate={{ opacity: 1, scale: 1.07 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.2, ease: 'easeInOut' },
              scale: { duration: SLIDE_MS / 1000 + 1.2, ease: 'linear' },
            }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
          />
        </AnimatePresence>

        {/* Strong base overlay for readability */}
        <div className="absolute inset-0 bg-[#0c2419]/85" />
        {/* Directional gradient — heavier left & bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2419]/70 via-[#0c2419]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2419]/75 via-transparent to-[#0c2419]/20" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex items-center section-padding max-w-screen-2xl mx-auto w-full pt-52 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 w-full items-center">

          {/* ── LEFT: Editorial text ── */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Animated overline pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#DDE7E1]/25 rounded-full bg-white/6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#DDE7E1]/80 animate-pulse" />
                <span className="text-[#DDE7E1]/85 text-[10px] tracking-[0.28em] uppercase font-medium">
                  Australian Finance Solutions · Since 2015
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              className="font-display font-bold text-white leading-[0.90] tracking-tight mb-10"
              style={{ fontSize: 'clamp(52px, 7.2vw, 108px)' }}
            >
              Finance That<br />
              <em className="not-italic text-[#DDE7E1]">Moves</em>{' '}
              Industry<br />
              Forward
            </motion.h1>

            {/* Sub copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="text-white/70 text-[18px] leading-[1.75] max-w-[540px] mb-12"
            >
              Flexible, fast and tailored funding for Australian businesses across
              construction, warehousing, logistics and industrial sectors.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease }}
              className="flex flex-col sm:flex-row gap-4 mb-14"
            >
              <button
                onClick={() => handleNav('#contact')}
                className="group inline-flex items-center gap-3 bg-[#DDE7E1] hover:bg-white
                           text-[#123524] font-bold px-10 py-5 rounded-sm transition-all duration-300
                           text-sm tracking-widest uppercase shadow-[0_8px_40px_rgba(221,231,225,0.20)]"
              >
                Apply for Finance
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="tel:1300346874"
                className="group inline-flex items-center gap-3 border border-white/25 hover:border-[#DDE7E1]/60
                           text-white/85 hover:text-[#DDE7E1] font-medium px-10 py-5 rounded-sm
                           transition-all duration-300 text-sm tracking-wide backdrop-blur-sm"
              >
                <Phone size={15} />
                Speak With An Expert
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-12"
            >
              {trustBadges.map((badge, i) => (
                <div key={badge} className="flex items-center gap-2">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-[#DDE7E1]/30 hidden sm:inline-block" />}
                  <span className="text-[#DDE7E1]/65 text-[10px] tracking-[0.2em] uppercase font-medium">
                    {badge}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Services ticker + slide dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.68, duration: 0.6 }}
              className="flex flex-col gap-5"
            >
              <div className="flex items-start gap-3">
                <span className="text-white/30 text-[9px] tracking-widest uppercase shrink-0 mt-0.5">We Finance</span>
                <div className="w-px h-3 bg-white/15 shrink-0 mt-0.5" />
                <div className="flex flex-wrap gap-x-4 gap-y-1.5">
                  {services.map((s) => (
                    <span key={s} className="text-[#DDE7E1]/55 text-[10px] tracking-wide font-medium whitespace-nowrap">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Slide dots + current label */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIndex(i)}
                      className={`rounded-full transition-all duration-400 cursor-pointer
                                  ${i === slideIndex ? 'w-6 h-1.5 bg-[#DDE7E1]/80' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/45'}`}
                    />
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={slideIndex}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#DDE7E1]/40 text-[9px] tracking-[0.2em] uppercase"
                  >
                    {slides[slideIndex].label}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: Stats cards ── */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 flex-col gap-4 items-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 + i * 0.14, duration: 0.65, ease }}
                className="w-full max-w-[310px] group bg-white/5 backdrop-blur-md border border-white/10
                           rounded-sm p-8 hover:bg-white/9 hover:border-[#DDE7E1]/30
                           transition-all duration-300 cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 border border-[#DDE7E1]/25 rounded-sm flex items-center justify-center
                                  group-hover:border-[#DDE7E1]/45 transition-colors duration-300">
                    <stat.icon size={15} className="text-[#DDE7E1]/65 group-hover:text-[#DDE7E1]/85 transition-colors" />
                  </div>
                  <div className="w-8 h-px bg-[#DDE7E1]/20 group-hover:bg-[#DDE7E1]/40 transition-colors duration-300" />
                </div>
                <div className="font-display font-bold text-white text-5xl leading-none mb-3 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#DDE7E1]/65 text-[11px] tracking-[0.12em] uppercase font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex items-center gap-2 mt-1 pr-1"
            >
              <div className="w-10 h-px bg-[#DDE7E1]" />
              <span className="text-[#DDE7E1] text-[9px] tracking-[0.4em] uppercase">Proven Track Record</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom trust strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="relative z-10 border-t border-white/8 bg-[#0c2419]/55 backdrop-blur-sm"
      >
        <div className="section-padding max-w-screen-2xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center flex-wrap gap-4 justify-center sm:justify-start">
            <div className="flex items-center gap-1.5">
              <Shield size={11} className="text-[#DDE7E1]/70" />
              <span className="text-[#DDE7E1]/70 text-[10px] tracking-[0.18em] uppercase">AFCA Regulated</span>
            </div>
            <span className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="text-[#DDE7E1]/70 text-[10px] tracking-[0.18em] uppercase">Authorised Finance Broker</span>
            <span className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="text-[#DDE7E1]/70 text-[10px] tracking-[0.18em] uppercase">10+ Years Experience</span>
            <span className="w-px h-3 bg-white/20 hidden sm:block" />
            <span className="text-[#DDE7E1]/70 text-[10px] tracking-[0.18em] uppercase">Same-Day Pre-Approval</span>
          </div>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1 opacity-25 shrink-0"
          >
            <div className="w-px h-6 bg-gradient-to-b from-[#DDE7E1] to-transparent" />
            <span className="text-white text-[8px] tracking-[0.3em] uppercase">Scroll</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}


