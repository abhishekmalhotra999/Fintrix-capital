import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight, Award, Users, Zap, Shield } from 'lucide-react'

function CountUp({ to, prefix = '', suffix = '', decimals = 0, comma = false }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = useState(decimals ? (0).toFixed(decimals) : 0)
  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => {
        if (decimals) setVal(v.toFixed(decimals))
        else setVal(comma ? Math.round(v).toLocaleString() : Math.round(v))
      },
    })
    return () => controls.stop()
  }, [isInView])
  return <span ref={ref}>{prefix}{val}{suffix}</span>
}

const features = [
  {
    icon: Award,
    title: 'Industry Expertise',
    desc: 'Construction, logistics, warehousing and trades — sectors we know inside out.',
  },
  {
    icon: Users,
    title: '40+ Lender Panel',
    desc: 'Independent access to competitive rates and tailored credit solutions.',
  },
  {
    icon: Zap,
    title: 'Fast-Track Approval',
    desc: 'Low-doc options and same-day pre-approval for qualifying businesses.',
  },
  {
    icon: Shield,
    title: 'End-to-End Support',
    desc: 'Dedicated broker from initial enquiry through to settlement.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function About() {
  return (
    <section id="about" className="bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* ── LEFT: Dark image panel ── */}
        <motion.div
          className="lg:col-span-4 relative min-h-[500px] lg:min-h-0"
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background image — engineer with blueprints, niche relevant */}
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85"
            alt="Construction finance expertise — Fintrix Capital"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
          {/* Forest green brand overlay */}
          <div className="absolute inset-0 bg-[#123524]/88" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c2419]/70 via-transparent to-[#0c2419]/50" />
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          {/* Panel content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-10 lg:p-12 py-16 lg:py-20">
            {/* Top tag */}
            <div className="flex items-center gap-2">
              <div className="w-5 h-px bg-[#DDE7E1]/40" />
              <span className="text-[#DDE7E1]/50 text-[9px] tracking-[0.35em] uppercase font-medium">
                Est. 2015 · Melbourne
              </span>
            </div>

            {/* Hero stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7, ease }}
              className="text-center"
            >
              <div
                className="font-display font-bold text-white leading-none tracking-tight mb-3"
                style={{ fontSize: 'clamp(60px, 6vw, 80px)' }}
              >
                <CountUp prefix="$" to={2.4} decimals={1} suffix="B+" />
              </div>
              <div className="text-[#DDE7E1]/55 text-[11px] tracking-[0.3em] uppercase font-medium mb-5">
                Finance Arranged
              </div>
              <div className="w-10 h-px bg-[#DDE7E1]/25 mx-auto mb-5" />
              <p className="text-white/40 text-sm leading-relaxed max-w-[200px] mx-auto">
                Funding Australian businesses since 2015 across every growth stage.
              </p>
            </motion.div>

            {/* Bottom mini stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: '1,400+', lbl: 'Businesses' },
                { val: '24 hrs', lbl: 'Avg. Approval' },
              ].map((s, i) => (
                <motion.div
                  key={s.lbl}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease }}
                  className="border border-[#DDE7E1]/12 rounded-sm p-3.5 text-center hover:border-[#DDE7E1]/25 transition-colors duration-300"
                >
                  <div className="font-display font-bold text-white text-2xl leading-none mb-1">
                    {s.lbl === 'Businesses' ? <CountUp to={1400} suffix="+" comma /> : <CountUp to={24} suffix=" hrs" />}
                  </div>
                  <div className="text-[#DDE7E1]/40 text-[9px] tracking-[0.2em] uppercase">{s.lbl}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-6 right-6 w-10 h-10 border-r border-t border-[#DDE7E1]/18 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border-l border-b border-[#DDE7E1]/18 pointer-events-none" />
        </motion.div>

        {/* ── RIGHT: Content area ── */}
        <motion.div
          className="lg:col-span-8 flex flex-col justify-center py-20 px-8 lg:px-16 xl:px-20"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
        >
          {/* Label */}
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            About Fintrix Capital
          </motion.span>
          <span className="gold-line" />

          {/* Headline */}
          <motion.h2
            className="heading-display text-[#111111] text-4xl sm:text-5xl mt-6 mb-6 text-balance max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
          >
            Helping Australian Businesses{' '}
            <em className="italic text-[#123524]">Fund Their Growth</em>
          </motion.h2>

          {/* Body copy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="space-y-4 text-graphite leading-relaxed mb-10 max-w-2xl"
          >
            <p>
              Fintrix Capital is a specialist commercial finance brokerage committed to helping
              businesses across Australia access smart, flexible and competitive funding solutions.
              From start-ups requiring their first equipment loan to large enterprises seeking
              complex multi-asset facilities, we structure finance that works.
            </p>
            <p>
              With deep expertise across construction, warehousing, logistics, manufacturing
              and trades, our team of experienced brokers works directly with you — providing
              transparent, personalised guidance at every step.
            </p>
          </motion.div>

          {/* Feature 2×2 grid — replaces bullet list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {features.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.28 + i * 0.07, duration: 0.5, ease }}
                  className="group flex items-start gap-4 p-5 bg-white border border-[#E7E3DD]
                             hover:border-[#123524]/20 hover:shadow-[0_2px_12px_rgba(18,53,36,0.08)]
                             rounded-sm transition-all duration-300 cursor-default"
                >
                  <div
                    className="shrink-0 w-9 h-9 bg-[#F7F5F2] border border-[#E7E3DD]
                               group-hover:bg-[#123524] group-hover:border-[#123524]
                               flex items-center justify-center rounded-sm transition-all duration-300"
                  >
                    <Icon size={15} className="text-[#123524] group-hover:text-[#DDE7E1] transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="text-[#111111] font-semibold text-sm mb-1 tracking-tight">{f.title}</div>
                    <div className="text-graphite text-xs leading-relaxed">{f.desc}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom bar — CTA + inline stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.5, ease }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-8 border-t border-[#E7E3DD]"
          >
            <button
              onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}
              className="group inline-flex items-center gap-2 bg-[#123524] hover:bg-[#1e5440]
                         text-white font-semibold px-7 py-3.5 rounded-sm text-sm tracking-wide
                         transition-all duration-300 shrink-0"
            >
              Work With Us
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-6">
              {[
                { val: '10+', lbl: 'Years in Finance' },
                { val: '100%', lbl: 'Flexible Terms' },
              ].map((s, i) => (
                <div key={s.lbl} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-8 bg-[#E7E3DD]" />}
                  <div>
                    <div className="font-display font-bold text-[#111111] text-2xl leading-tight">{s.val}</div>
                    <div className="text-graphite text-[10px] tracking-wide uppercase">{s.lbl}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

