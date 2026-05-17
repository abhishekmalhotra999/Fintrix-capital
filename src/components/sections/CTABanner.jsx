import { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

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

const stats = [
  { val: '$2.4B+', label: 'Total Finance Arranged' },
  { val: '1,400+', label: 'Businesses Funded' },
  { val: '24 hrs', label: 'Avg. Approval Time' },
  { val: '40+', label: 'Lender Partners' },
]

const ease = [0.22, 1, 0.36, 1]

export default function CTABanner() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#F7F5F2] overflow-hidden relative">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial glow center-left */}
      <div
        className="absolute top-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(18,53,36,0.05) 0%, transparent 65%)' }}
      />

      <div className="relative z-10 section-padding max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 py-20 lg:py-28 items-center">

          {/* ── LEFT: CTA content ── */}
          <div className="lg:col-span-7 lg:pr-20">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready To Get Started?
            </motion.span>
            <div className="w-10 h-px bg-[#123524]/25 mt-4 mb-8" />

            <motion.h2
              className="heading-display text-[#111111] leading-tight text-balance"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease }}
            >
              Finance That{' '}
              <em className="italic text-[#123524]">Moves Your Business</em>{' '}
              Forward.
            </motion.h2>

            <motion.p
              className="text-graphite text-lg mt-6 mb-10 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              Take the first step toward smarter business finance. Our brokers are ready
              to structure a solution that works for your industry and growth goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
            >
              <button
                onClick={() => handleNav('#contact')}
                className="group inline-flex items-center gap-2 bg-[#123524] hover:bg-[#1e5440] text-white
                           font-semibold px-7 py-4 rounded-sm transition-all duration-300 text-sm tracking-wide"
              >
                Apply Now
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNav('#contact')}
                className="group inline-flex items-center gap-2 border border-[#E7E3DD] hover:border-[#123524]
                           text-graphite hover:text-[#123524] font-medium px-7 py-4 rounded-sm
                           transition-all duration-300 text-sm tracking-wide"
              >
                <Phone size={14} />
                Call 1300 FIN CASH
              </button>
            </motion.div>

            {/* Trust pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {['No obligation', 'Free assessment', 'Fast approvals', '40+ lender panel'].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 border border-[#E7E3DD] rounded-full px-4 py-1.5 text-graphite/55 text-[11px] tracking-wide"
                >
                  <span className="w-1 h-1 rounded-full bg-[#123524]/40" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: 2×2 stat grid ── */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-px bg-[#E7E3DD] border border-[#E7E3DD] rounded-sm overflow-hidden">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease }}
                  className="bg-white p-8 flex flex-col gap-2 group hover:bg-[#F7F5F2] transition-colors duration-300"
                >
                  <div
                    className="font-display font-bold text-[#111111] leading-none"
                    style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                  >
                    {s.val === '$2.4B+' ? <CountUp prefix="$" to={2.4} decimals={1} suffix="B+" />
                      : s.val === '1,400+' ? <CountUp to={1400} suffix="+" comma />
                      : s.val === '24 hrs' ? <CountUp to={24} suffix=" hrs" />
                      : s.val === '40+' ? <CountUp to={40} suffix="+" />
                      : s.val}
                  </div>
                  <div className="text-graphite text-[10px] tracking-[0.2em] uppercase font-medium leading-snug">
                    {s.label}
                  </div>
                  <div className="w-0 group-hover:w-8 h-0.5 bg-[#123524]/50 transition-all duration-400 mt-1" />
                </motion.div>
              ))}
            </div>

            {/* Bottom label */}
            <p className="text-graphite/40 text-[9px] tracking-[0.25em] uppercase text-right mt-4">
              Figures represent funded volume since 2015
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

