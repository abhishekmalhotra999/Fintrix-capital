import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'
import About from '../components/sections/About'
import Testimonials from '../components/sections/Testimonials'
import CTABanner from '../components/sections/CTABanner'

const ease = [0.22, 1, 0.36, 1]

const values = [
  {
    icon: Award,
    title: 'Specialist Expertise',
    desc: 'We focus exclusively on commercial and industrial finance — sectors we know inside out after a decade of deals.',
  },
  {
    icon: Users,
    title: 'Independent Advice',
    desc: 'Not owned by any bank or lender. We work for you — with full access to 40+ lenders to secure the best outcome.',
  },
  {
    icon: Zap,
    title: 'Speed & Certainty',
    desc: 'Low-doc options and streamlined processes mean faster approvals without the paperwork burden.',
  },
  {
    icon: Shield,
    title: 'Long-Term Partnership',
    desc: 'We structure for today and plan for tomorrow — supporting your growth from first deal to portfolio funding.',
  },
]

const milestones = [
  { year: '2015', label: 'Founded in Melbourne' },
  { year: '2017', label: '$250M in facilities settled' },
  { year: '2020', label: 'Expanded to national clients' },
  { year: '2022', label: '$1B milestone reached' },
  { year: '2024', label: '$2.4B+ arranged, 1,400+ businesses funded' },
]

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative bg-[#0c2419] overflow-hidden pt-40 pb-28">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85"
          alt="About Fintrix Capital"
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
            Our Story
          </motion.span>
          <div className="w-10 h-px bg-[#DDE7E1]/35 mt-4 mb-8" />

          <motion.h1
            className="font-display font-bold text-white leading-tight text-balance max-w-3xl"
            style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Built on Trust,{' '}
            <em className="italic text-[#DDE7E1]">Driven by Results</em>
          </motion.h1>

          <motion.p
            className="text-white/60 text-lg leading-relaxed max-w-2xl mt-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
          >
            Fintrix Capital was founded with a single purpose — to give Australian businesses 
            access to finance solutions that are fast, fair and genuinely structured around their needs. 
            A decade later, that mission hasn't changed.
          </motion.p>
        </div>
      </section>

      {/* ── About section (reused) ── */}
      <About />

      {/* ── Our Values ── */}
      <section className="bg-[#F7F5F2] py-28">
        <div className="section-padding max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              What We Stand For
            </motion.span>
            <div className="w-10 h-px bg-[#123524]/40 mx-auto mt-4 mb-8" />
            <motion.h2
              className="font-display font-bold text-[#111111] text-4xl sm:text-5xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              Our Core <em className="italic text-[#123524]">Values</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon
              return (
                <motion.div
                  key={v.title}
                  className="bg-white border border-[#E7E3DD] rounded-sm p-8 group hover:border-[#123524]/25 transition-colors duration-300"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease }}
                >
                  <div className="w-10 h-10 border border-[#123524]/20 flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#123524]/5 transition-colors">
                    <Icon size={18} className="text-[#123524]" />
                  </div>
                  <h3 className="font-display font-bold text-[#111111] text-lg mb-3">{v.title}</h3>
                  <p className="text-[#5F6368] text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-[#0c2419] py-28 overflow-hidden">
        <div className="section-padding max-w-screen-2xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              className="section-label-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.span>
            <div className="w-10 h-px bg-[#DDE7E1]/35 mx-auto mt-4 mb-8" />
            <motion.h2
              className="font-display font-bold text-white text-4xl sm:text-5xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
            >
              A Decade of <em className="italic text-[#DDE7E1]">Growth</em>
            </motion.h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-white/10" />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="relative flex items-start gap-8 pb-10 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease }}
              >
                <div className="shrink-0 w-9 h-9 border border-[#DDE7E1]/25 rounded-full flex items-center justify-center bg-[#123524] z-10">
                  <CheckCircle2 size={15} className="text-[#DDE7E1]/80" />
                </div>
                <div className="pt-1.5">
                  <span className="text-[#DDE7E1]/50 text-[10px] tracking-[0.25em] uppercase font-medium">{m.year}</span>
                  <p className="text-white/80 text-base mt-1">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA ── */}
      <CTABanner />
    </>
  )
}
