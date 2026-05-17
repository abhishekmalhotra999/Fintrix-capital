import { motion } from 'framer-motion'
import { Zap, SlidersHorizontal, BadgeDollarSign, HardHat, Eye, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    num: '01',
    icon: Zap,
    title: 'Fast Approvals',
    tag: '24-Hour Turnaround',
    description: 'Pre-qualification within hours. Full approval often within 24 hours for qualifying transactions.',
  },
  {
    num: '02',
    icon: SlidersHorizontal,
    title: 'Tailored Solutions',
    tag: 'Bespoke Structuring',
    description: 'Every deal is structured to fit your cash flow, tax position and business objectives.',
  },
  {
    num: '03',
    icon: BadgeDollarSign,
    title: 'Competitive Rates',
    tag: '40+ Lender Panel',
    description: 'Access to 40+ lenders ensures you receive the most competitive rates available in the market.',
  },
  {
    num: '04',
    icon: HardHat,
    title: 'Industry Expertise',
    tag: 'Niche Specialists',
    description: 'Deep knowledge across construction, logistics, manufacturing and commercial industries.',
  },
  {
    num: '05',
    icon: Eye,
    title: 'Transparent Process',
    tag: 'No Hidden Fees',
    description: 'No hidden fees or surprises. You understand every detail of your facility before you sign.',
  },
  {
    num: '06',
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    tag: 'One Broker, Full Journey',
    description: 'A single dedicated broker manages your application from lodgement through to settlement.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function WhyChoose() {
  return (
    <section className="bg-[#0c2419] relative overflow-hidden">

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* ── Centered header ── */}
      <div className="relative z-10 section-padding max-w-screen-2xl mx-auto pt-24 pb-16 text-center">
        <motion.span
          className="section-label-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Why Fintrix Capital
        </motion.span>
        <div className="w-10 h-px bg-[#DDE7E1]/40 mx-auto mt-4 mb-8" />

        <motion.h2
          className="heading-display text-white text-4xl sm:text-5xl lg:text-6xl text-balance"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          The Smarter Way{' '}
          <em className="italic text-[#DDE7E1]">To Finance Growth</em>
        </motion.h2>

        <motion.p
          className="text-white/75 mt-5 text-lg leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          We go beyond simply finding a loan — we engineer finance strategies that create
          long-term value for your business.
        </motion.p>
      </div>

      {/* ── 3-column card grid ── */}
      <div className="relative z-10 section-padding max-w-screen-2xl mx-auto pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.55, delay: i * 0.09, ease }}
                className="relative bg-[#0c2419] p-9 lg:p-10 group hover:bg-[#123524]/55 transition-colors duration-400 overflow-hidden"
              >
                {/* Top row: icon + number */}
                <div className="flex items-start justify-between mb-7">
                  <div
                    className="w-11 h-11 border border-[#DDE7E1]/14 bg-[#DDE7E1]/5
                               group-hover:bg-[#DDE7E1]/12 group-hover:border-[#DDE7E1]/30
                               flex items-center justify-center rounded-sm transition-all duration-300"
                  >
                    <Icon
                      size={19}
                      className="text-[#DDE7E1]/75 group-hover:text-[#DDE7E1]/100 transition-colors duration-300"
                    />
                  </div>
                  <span
                    className="font-display font-bold text-white/20 group-hover:text-[#DDE7E1]/40 text-2xl leading-none transition-colors duration-300 select-none"
                  >
                    {feature.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-white text-[17px] tracking-tight leading-snug mb-1.5">
                  {feature.title}
                </h3>

                {/* Sub-tag */}
                <span className="block text-[#DDE7E1]/65 text-[9px] tracking-[0.22em] uppercase font-medium mb-4">
                  {feature.tag}
                </span>

                {/* Description — full-width below title, readable opacity */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#DDE7E1]/0 group-hover:bg-[#DDE7E1]/20 transition-colors duration-400" />
              </motion.div>
            )
          })}
        </div>
      </div>

    </section>
  )
}


