import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Services from '../components/sections/Services'
import WhyChoose from '../components/sections/WhyChoose'
import CTABanner from '../components/sections/CTABanner'

const ease = [0.22, 1, 0.36, 1]

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const navigate = useNavigate()

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative bg-[#0c2419] overflow-hidden pt-40 pb-28">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85"
          alt="Fintrix Capital Services"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2419]/90 via-[#0c2419]/70 to-transparent" />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 section-padding max-w-screen-2xl mx-auto">
          <motion.span
            className="section-label-light"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            What We Offer
          </motion.span>
          <div className="w-10 h-px bg-[#DDE7E1]/35 mt-4 mb-8" />

          <motion.h1
            className="font-display font-bold text-white leading-tight text-balance max-w-3xl"
            style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Finance Built{' '}
            <em className="italic text-[#DDE7E1]">For Every Industry</em>
          </motion.h1>

          <motion.p
            className="text-white/60 text-lg leading-relaxed max-w-2xl mt-7 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
          >
            From single asset acquisitions to complex multi-tranche facilities — we structure 
            solutions that match your exact requirements and unlock growth capital fast.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
          >
            <button
              onClick={() => navigate('/contact')}
              className="group inline-flex items-center gap-2.5 bg-[#DDE7E1] hover:bg-white
                         text-[#123524] font-bold px-8 py-4 rounded-sm transition-all duration-300
                         text-sm tracking-widest uppercase"
            >
              Apply for Finance
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:1300346874"
              className="inline-flex items-center gap-2.5 border border-white/25 hover:border-[#DDE7E1]/60
                         text-white/85 hover:text-[#DDE7E1] font-medium px-8 py-4 rounded-sm
                         transition-all duration-300 text-sm tracking-wide"
            >
              1300 FIN CASH
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Services list (reused) ── */}
      <Services />

      {/* ── Why Choose section ── */}
      <WhyChoose />

      {/* ── CTA ── */}
      <CTABanner />
    </>
  )
}
