import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const industries = [
  {
    name: 'Construction',
    tag: 'Excavators · Cranes · Site Equipment',
    description: 'Finance for excavators, cranes, concrete equipment and site infrastructure across all project scales.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Warehousing',
    tag: 'Forklifts · Racking · Fit-outs',
    description: 'Funding solutions for forklifts, racking systems and full distribution centre fit-outs.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Logistics',
    tag: 'Trucks · Trailers · Fleet',
    description: 'Truck, trailer and fleet finance with flexible repayment options for transport operators.',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Manufacturing',
    tag: 'CNC · Production Lines · Factories',
    description: 'Finance for CNC machinery, production lines and factory fit-outs across all manufacturing sectors.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Trades & Tools',
    tag: 'Equipment · Trade Tools · Vehicles',
    description: 'Equipment and tool finance for plumbers, electricians, builders and all trade professionals.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Commercial',
    tag: 'Hospitality · Healthcare · Retail',
    description: 'Commercial asset finance for hospitality, healthcare, retail and professional services businesses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Industries() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="industries" className="bg-[#111111] overflow-hidden">

      {/* ── Editorial header ── */}
      <div className="section-padding max-w-screen-2xl mx-auto pt-20 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-xl">
            <motion.span
              className="section-label-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Industries We Serve
            </motion.span>
            <div className="w-10 h-px bg-[#DDE7E1]/35 mt-4 mb-6" />
            <motion.h2
              className="heading-display text-white text-4xl sm:text-5xl text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              Specialist Finance Across{' '}
              <em className="italic text-[#DDE7E1]">Key Industries</em>
            </motion.h2>
          </div>
          <motion.p
            className="text-white/65 text-base leading-relaxed max-w-xs lg:text-right lg:pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Our lender panel and expertise spans the full spectrum of Australian commercial sectors.
          </motion.p>
        </div>
      </div>

      {/* ── Desktop: horizontal expanding accordion ── */}
      <div
        className="hidden lg:flex h-[520px] gap-px"
        onMouseLeave={() => setHovered(null)}
      >
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            className="relative overflow-hidden cursor-default"
            style={{
              flex: hovered === null ? '1' : hovered === i ? '3.2' : '0.55',
              transition: 'flex 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
            onMouseEnter={() => setHovered(i)}
          >
            {/* Image */}
            <img
              src={ind.image}
              alt={ind.name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transform: hovered === i ? 'scale(1.05)' : 'scale(1.12)',
                transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              loading="lazy"
            />

            {/* Gradient overlay — deeper when not hovered */}
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{
                background: hovered === i
                  ? 'linear-gradient(to top, rgba(12,36,25,0.95) 0%, rgba(18,53,36,0.55) 50%, rgba(18,53,36,0.1) 100%)'
                  : 'linear-gradient(to top, rgba(12,36,25,0.92) 0%, rgba(12,36,25,0.65) 60%, rgba(12,36,25,0.3) 100%)',
              }}
            />
            {/* Brand tint — kills non-green colour cast from any image */}
            <div className="absolute inset-0 bg-[#0c2419]/50 mix-blend-multiply pointer-events-none" />

            {/* Vertical label — collapsed state */}
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                opacity: hovered === i ? 0 : 1,
                transition: 'opacity 0.3s ease',
              }}
            >
              <span
                className="text-white/75 font-semibold text-sm tracking-[0.2em] uppercase whitespace-nowrap select-none"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                {ind.name}
              </span>
            </div>

            {/* Expanded content — hovered state */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
              <div
                style={{
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.35s ease, transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                {/* Tag */}
                <span className="text-[#DDE7E1]/75 text-[9px] tracking-[0.3em] uppercase font-medium block mb-3">
                  {ind.tag}
                </span>

                {/* Name */}
                <h3 className="font-display font-bold text-white text-2xl lg:text-3xl leading-tight mb-3 tracking-tight">
                  {ind.name}
                </h3>

                {/* Description */}
                <p className="text-white/85 text-sm leading-relaxed mb-5 max-w-[240px]">
                  {ind.description}
                </p>

                {/* CTA */}
                <div
                  className="inline-flex items-center gap-1.5 text-[#DDE7E1]/85 hover:text-[#DDE7E1] text-xs tracking-wide transition-colors duration-200 pointer-events-auto group/cta"
                  style={{ cursor: 'pointer' }}
                >
                  <span className="group-hover/cta:underline underline-offset-3">Explore Finance</span>
                  <ArrowUpRight size={12} />
                </div>

                {/* Sage line */}
                <div className="w-10 h-0.5 bg-[#DDE7E1]/50 mt-5" />
              </div>
            </div>

            {/* Top number — always faint */}
            <div className="absolute top-5 left-5 select-none pointer-events-none">
              <span className="font-display font-bold text-white/20 text-3xl leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile: 2-col stacked grid ── */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-px">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            className="relative overflow-hidden aspect-[4/3]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.5, ease }}
          >
            <img
              src={ind.image}
              alt={ind.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2419]/92 via-[#0c2419]/45 to-transparent" />
            <div className="absolute inset-0 bg-[#0c2419]/50 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <span className="text-[#DDE7E1]/75 text-[9px] tracking-[0.2em] uppercase mb-1">{ind.tag}</span>
              <h3 className="font-semibold text-white text-lg leading-tight">{ind.name}</h3>
              <p className="text-white/80 text-xs mt-1.5 leading-relaxed line-clamp-2">{ind.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom caption ── */}
      <div className="section-padding max-w-screen-2xl mx-auto py-5 border-t border-white/6">
        <div className="flex items-center justify-between">
          <span className="text-white/45 text-[9px] tracking-[0.3em] uppercase">
            6 Industry Verticals
          </span>
          <span className="text-white/45 text-[9px] tracking-[0.3em] uppercase hidden sm:block">
            Hover to explore each sector
          </span>
          <span className="text-white/45 text-[9px] tracking-[0.3em] uppercase">
            Australia-Wide
          </span>
        </div>
      </div>

    </section>
  )
}


