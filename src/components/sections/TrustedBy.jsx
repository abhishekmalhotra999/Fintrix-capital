import { motion } from 'framer-motion'

const brands = [
  'CommBank', 'Westpac', 'NAB', 'Macquarie',
  'Liberty', 'Pepper Money', 'Latitude', 'Angle Finance',
  'Firstmac', 'Resimac', 'La Trobe', 'Bluestone',
]

const meta = [
  { value: '40+', label: 'Lenders' },
  { value: '100%', label: 'Independent' },
  { value: 'Best', label: 'Rate Guarantee' },
]

export default function TrustedBy() {
  const doubled = [...brands, ...brands]

  return (
    <section className="bg-[#111111] overflow-hidden">

      {/* Header row */}
      <div className="section-padding max-w-screen-2xl mx-auto pt-8 pb-6 border-b border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-medium">
              Our Lending Panel
            </span>
            <div className="h-px w-8 bg-white/15" />
            <span className="text-white/30 text-[10px] tracking-wide">
              Access to Australia's leading lenders
            </span>
          </div>
          <div className="flex items-center gap-6">
            {meta.map((m, i) => (
              <div key={m.label} className="flex items-center gap-4">
                {i > 0 && <div className="w-px h-4 bg-white/10" />}
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display font-bold text-white/70 text-sm">{m.value}</span>
                  <span className="text-white/35 text-[9px] tracking-[0.18em] uppercase">{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Infinite marquee */}
      <div className="relative overflow-hidden py-7">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />

        <motion.div
          animate={{ x: [0, '-50%'] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="flex items-center"
          style={{ width: 'max-content' }}
        >
          {doubled.map((brand, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span
                className="font-display font-semibold text-white/45 hover:text-white/80
                           text-xl px-10 tracking-tight transition-colors duration-300 cursor-default whitespace-nowrap"
              >
                {brand}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#DDE7E1]/20 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

