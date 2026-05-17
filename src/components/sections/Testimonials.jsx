import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Director',
    company: 'Apex Civil Construction',
    asset: 'Excavator & Fleet Finance',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    quote: "Fintrix arranged finance for three excavators and a fleet of trucks within 48 hours. The rate was sharper than our bank and the process was seamless. I wouldn't use anyone else.",
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    role: 'Owner',
    company: 'Williams Logistics Group',
    asset: 'Equipment Lease',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    quote: "As a growing logistics company, cash flow is critical. Fintrix structured a flexible equipment lease that protected our working capital while keeping our fleet modern and compliant.",
    rating: 5,
  },
  {
    name: 'David Papadopoulos',
    role: 'Managing Director',
    company: 'DP Manufacturing Solutions',
    asset: '$1.8M CNC Machine Finance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote: "We needed a $1.8M CNC machine financed fast. Fintrix had a formal approval within 36 hours — something our bank told us would take six weeks. Absolutely outstanding service.",
    rating: 5,
  },
  {
    name: 'Amanda Torres',
    role: 'CEO',
    company: 'Harbour Warehouse Solutions',
    asset: 'Warehouse Fit-out Finance',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    quote: "The team genuinely understood our warehousing business. They structured a deal around our seasonal cash flow and secured funding that our accountant said was better than anything he'd seen.",
    rating: 5,
  },
]

const ease = [0.22, 1, 0.36, 1]

const ratingPlatforms = [
  { label: 'Google Reviews', rating: '4.9', count: '200+' },
  { label: 'Trustpilot', rating: '4.8', count: '180+' },
  { label: 'Word of Mouth', rating: '5.0', count: '150+' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const count = testimonials.length
  const prev = () => setCurrent((c) => (c - 1 + count) % count)
  const next = () => setCurrent((c) => (c + 1) % count)
  const t = testimonials[current]

  return (
    <section className="bg-[#0c2419] overflow-hidden">

      {/* ── Top strip: heading + rating badges ── */}
      <div className="section-padding max-w-screen-2xl mx-auto pt-20 pb-12 border-b border-white/[0.07]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-xl">
            <motion.span
              className="section-label-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Client Stories
            </motion.span>
            <div className="w-10 h-px bg-[#DDE7E1]/30 mt-4 mb-6" />
            <motion.h2
              className="heading-display text-white text-4xl sm:text-5xl text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              Trusted By{' '}
              <em className="italic text-[#DDE7E1]">Australia's Best Businesses</em>
            </motion.h2>
          </div>

          {/* Rating platform badges */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {ratingPlatforms.map((p) => (
              <div
                key={p.label}
                className="border border-white/10 rounded-sm px-4 py-3 flex flex-col gap-1.5 min-w-[130px]"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={10} className="fill-[#DDE7E1]/80 text-[#DDE7E1]/80" />
                  ))}
                </div>
                <div className="text-white text-sm font-semibold leading-none">
                  {p.rating}{' '}
                  <span className="text-white/25 text-xs font-normal">/ 5.0</span>
                </div>
                <div className="text-white/30 text-[9px] tracking-[0.18em] uppercase leading-none">
                  {p.label} · {p.count}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Main panel: author left + quote right ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[420px]">

        {/* LEFT — author meta + nav */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/[0.07] flex flex-col justify-between p-10 lg:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={`author-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.38, ease }}
              className="flex flex-col gap-5"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-sm object-cover border border-white/12"
              />

              <div>
                <div className="font-display font-bold text-white text-xl leading-snug">{t.name}</div>
                <div className="text-[#DDE7E1]/40 text-sm mt-0.5">{t.role} · {t.company}</div>
              </div>

              {/* Asset financed */}
              <div className="inline-flex items-center gap-2 border border-[#DDE7E1]/12 rounded-sm px-3.5 py-2 self-start">
                <div className="w-1.5 h-1.5 rounded-full bg-[#DDE7E1]/40 shrink-0" />
                <span className="text-[#DDE7E1]/45 text-[10px] tracking-[0.18em] uppercase font-medium whitespace-nowrap">
                  {t.asset}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={12} className="fill-[#DDE7E1]/70 text-[#DDE7E1]/70" />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Counter + arrows */}
          <div className="flex items-center justify-between mt-10 lg:mt-0 pt-8 border-t border-white/[0.07]">
            <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-medium">
              {String(current + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 border border-white/12 rounded-sm flex items-center justify-center text-white/35 hover:border-white/35 hover:text-white transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-white/12 rounded-sm flex items-center justify-center text-white/35 hover:border-white/35 hover:text-white transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — large quote */}
        <div className="lg:col-span-8 bg-[#123524]/40 relative overflow-hidden flex items-center p-10 lg:p-16 xl:p-20">

          {/* Decorative large quote mark */}
          <div
            className="absolute -top-4 right-8 select-none pointer-events-none font-display font-bold text-white/[0.035] leading-none"
            style={{ fontSize: 'clamp(140px, 18vw, 240px)' }}
          >
            "
          </div>

          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.018] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={`quote-${current}`}
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.42, ease }}
              className="relative z-10 font-display font-bold text-white leading-snug text-balance"
              style={{ fontSize: 'clamp(20px, 2.6vw, 34px)' }}
            >
              <span className="text-[#DDE7E1]/25 mr-1" style={{ fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.15em' }}>"</span>
              {t.quote}
              <span className="text-[#DDE7E1]/25 ml-1" style={{ fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.15em' }}>"</span>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom dot nav ── */}
      <div className="section-padding max-w-screen-2xl mx-auto py-5 border-t border-white/[0.07] flex items-center gap-2.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300
                        ${i === current ? 'w-8 bg-[#DDE7E1]' : 'w-4 bg-white/14 hover:bg-white/28'}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}


