import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, CheckCircle2, Banknote, ArrowRight, ChevronRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Apply Online',
    subtitle: 'Under 5 minutes',
    description:
      'Complete our simple application form in minutes. Provide basic business details and your finance requirements — no lengthy paperwork or branch visits required.',
    details: ['Business details & ABN', 'Asset or funding requirements', 'Basic financial position'],
    stat: { val: '< 5 min', label: 'Application time' },
  },
  {
    num: '02',
    icon: CheckCircle2,
    title: 'Get Approved Fast',
    subtitle: 'Decision within 24 hours',
    description:
      'Our brokers assess your application immediately. We match you with the ideal lender and structure, then return a formal approval — often within 24 hours.',
    details: ['Application assessed immediately', 'Matched to 40+ lenders', 'Formal approval letter issued'],
    stat: { val: '24 hrs', label: 'Avg. approval time' },
  },
  {
    num: '03',
    icon: Banknote,
    title: 'Receive Funding',
    subtitle: 'Funds released to you',
    description:
      'Contracts are prepared and funds are released directly to you. Your assets are on the road, your equipment is operational, and your business is growing.',
    details: ['Finance contracts prepared', 'Funds released on settlement', 'Assets delivered & operational'],
    stat: { val: '48 hrs', label: 'Application to funded' },
  },
]

const AUTOPLAY_DELAY = 4500
const ease = [0.22, 1, 0.36, 1]

export default function Process() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + 100 / (AUTOPLAY_DELAY / 50)
        if (next >= 100) {
          setActive((a) => (a + 1) % steps.length)
          return 0
        }
        return next
      })
    }, 50)
    return () => clearInterval(interval)
  }, [active])

  const handleSelect = (i) => {
    setActive(i)
    setProgress(0)
  }

  const step = steps[active]
  const Icon = step.icon

  return (
    <section id="process" className="py-28 bg-[#F7F5F2] overflow-hidden">
      <div className="section-padding max-w-screen-2xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.span>
          <span className="gold-line mx-auto" />
          <motion.h2
            className="heading-display text-[#111111] text-4xl sm:text-5xl mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            From Application To{' '}
            <em className="italic text-[#123524]">Funding In 3 Steps</em>
          </motion.h2>
          <motion.p
            className="text-graphite mt-5 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            We have stripped out the complexity. Our streamlined process gets you from
            application to funded in as little as 24–48 hours.
          </motion.p>
        </div>

        {/* ── Interactive step panel ── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 rounded-sm overflow-hidden border border-[#E7E3DD] shadow-card"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
        >

          {/* LEFT — clickable step tabs */}
          <div className="lg:col-span-4 bg-white border-b lg:border-b-0 lg:border-r border-[#E7E3DD] divide-y divide-[#E7E3DD] flex flex-col">
            {steps.map((s, i) => {
              const isActive = i === active
              return (
                <button
                  key={s.num}
                  onClick={() => handleSelect(i)}
                  className={`relative w-full text-left p-6 lg:p-7 flex items-start gap-5 transition-all duration-300 group
                              ${isActive ? 'bg-[#F7F5F2]' : 'bg-white hover:bg-[#F7F5F2]/70'}`}
                >
                  {/* Active left accent */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-0.5 bg-[#123524] transition-transform duration-400 origin-top
                                ${isActive ? 'scale-y-100' : 'scale-y-0'}`}
                  />

                  {/* Number badge */}
                  <div
                    className={`shrink-0 w-11 h-11 rounded-sm flex items-center justify-center transition-all duration-300
                                ${isActive
                                  ? 'bg-[#123524] text-[#DDE7E1]'
                                  : 'bg-[#F7F5F2] border border-[#E7E3DD] text-graphite group-hover:border-[#DDE7E1]/60'}`}
                  >
                    <span className="font-display font-bold text-sm">{s.num}</span>
                  </div>

                  {/* Title + subtitle + progress */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-semibold text-sm tracking-tight mb-0.5 transition-colors duration-300
                                  ${isActive ? 'text-[#111111]' : 'text-graphite group-hover:text-[#111111]'}`}
                    >
                      {s.title}
                    </div>
                    <div
                      className={`text-[10px] tracking-[0.15em] uppercase font-medium transition-colors duration-300
                                  ${isActive ? 'text-[#123524]' : 'text-graphite/40'}`}
                    >
                      {s.subtitle}
                    </div>
                    {isActive && (
                      <div className="mt-3 h-0.5 bg-[#E7E3DD] rounded-full overflow-hidden w-24">
                        <div
                          className="h-full bg-[#123524] rounded-full transition-none"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </div>

                  <ChevronRight
                    size={14}
                    className={`shrink-0 mt-0.5 ml-auto transition-all duration-300
                                ${isActive ? 'text-[#123524]' : 'text-[#E7E3DD] group-hover:text-graphite'}`}
                  />
                </button>
              )
            })}

            {/* CTA button */}
            <div className="p-6 lg:p-7 mt-auto bg-white">
              <button
                onClick={() => { const el = document.querySelector('#contact'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }}
                className="group w-full inline-flex items-center justify-center gap-2 bg-[#123524] hover:bg-[#1e5440]
                           text-white font-semibold text-sm px-6 py-3.5 rounded-sm transition-all duration-300 tracking-wide"
              >
                Start Your Application
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* RIGHT — animated content panel */}
          <div className="lg:col-span-8 bg-[#123524] relative overflow-hidden min-h-[420px] lg:min-h-0 flex flex-col justify-center">

            {/* Background ghost number */}
            <div className="absolute -top-4 -right-6 select-none pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`ghost-${active}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease }}
                  className="font-display font-bold text-white/[0.04] leading-none"
                  style={{ fontSize: 'clamp(130px, 18vw, 220px)' }}
                >
                  {step.num}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Grid texture */}
            <div
              className="absolute inset-0 opacity-[0.022] pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            {/* Step content */}
            <div className="relative z-10 p-8 lg:p-14">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.38, ease }}
                >
                  {/* Icon row */}
                  <div className="flex items-center gap-4 mb-7">
                    <div className="w-12 h-12 border border-[#DDE7E1]/18 bg-[#DDE7E1]/7 flex items-center justify-center rounded-sm">
                      <Icon size={22} className="text-[#DDE7E1]" />
                    </div>
                    <span className="text-[#DDE7E1]/35 text-[10px] tracking-[0.3em] uppercase font-medium">
                      Step {step.num} of {steps.length}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-white leading-tight mb-4 tracking-tight"
                      style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
                    {step.description}
                  </p>

                  {/* Detail points */}
                  <ul className="space-y-3 mb-10">
                    {step.details.map((d, di) => (
                      <motion.li
                        key={d}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + di * 0.07, duration: 0.35, ease }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#DDE7E1]/45 shrink-0" />
                        <span className="text-white/55 text-sm">{d}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Stat + next step */}
                  <div className="flex items-center gap-5 flex-wrap">
                    <div className="inline-flex items-center gap-5 border border-[#DDE7E1]/14 rounded-sm px-5 py-3.5 bg-[#DDE7E1]/5">
                      <div>
                        <div className="font-display font-bold text-white text-2xl leading-none">{step.stat.val}</div>
                        <div className="text-[#DDE7E1]/40 text-[10px] tracking-[0.15em] uppercase mt-0.5">{step.stat.label}</div>
                      </div>
                    </div>
                    {active < steps.length - 1 && (
                      <button
                        onClick={() => handleSelect(active + 1)}
                        className="group/n flex items-center gap-1.5 text-[#DDE7E1]/40 hover:text-[#DDE7E1]/80 text-xs tracking-wide transition-colors duration-200"
                      >
                        Next: {steps[active + 1].title}
                        <ChevronRight size={13} className="group-hover/n:translate-x-0.5 transition-transform" />
                      </button>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot nav */}
            <div className="absolute bottom-5 right-7 flex items-center gap-2">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`rounded-full transition-all duration-300
                              ${i === active ? 'w-5 h-1.5 bg-[#DDE7E1]' : 'w-1.5 h-1.5 bg-[#DDE7E1]/22 hover:bg-[#DDE7E1]/50'}`}
                />
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

