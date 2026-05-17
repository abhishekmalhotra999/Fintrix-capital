import { motion } from 'framer-motion'
import { Truck, Building2, Construction, Warehouse, Wrench, TrendingUp, ArrowRight } from 'lucide-react'

const services = [
  {
    num: '01',
    icon: TrendingUp,
    title: 'Asset Finance',
    description:
      'Leverage your business assets to secure fast, flexible funding. We finance everything from vehicles to industrial plant and equipment.',
    tag: 'Most Popular',
  },
  {
    num: '02',
    icon: Building2,
    title: 'Commercial Lending',
    description:
      'Tailored commercial loans for business acquisition, property investment, working capital and growth capital requirements.',
  },
  {
    num: '03',
    icon: Construction,
    title: 'Excavator Finance',
    description:
      'Purpose-built finance for heavy earth-moving equipment. Flexible terms, competitive rates and fast approval for excavators and earthmovers.',
  },
  {
    num: '04',
    icon: Warehouse,
    title: 'Warehouse Funding',
    description:
      'Unlock capital tied up in your warehouse assets or fund new logistics infrastructure with our bespoke warehouse finance solutions.',
  },
  {
    num: '05',
    icon: Truck,
    title: 'Equipment Leasing',
    description:
      'Preserve cash flow with operating and finance leases. We source and structure equipment leasing across all major asset classes.',
  },
  {
    num: '06',
    icon: Wrench,
    title: 'Tools & Machinery Finance',
    description:
      'Finance your tools, trade equipment and machinery with low-doc options designed for tradies, manufacturers and small business owners.',
  },
]

const ease = [0.22, 1, 0.36, 1]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#F7F5F2]">
      <div className="section-padding max-w-screen-2xl mx-auto">

        {/* Two-col editorial split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* LEFT — sticky section header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                What We Offer
              </motion.span>
              <span className="gold-line" />

              <motion.h2
                className="heading-display text-[#111111] text-4xl sm:text-5xl mt-6 text-balance"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.1, ease }}
              >
                Finance Built{' '}
                <em className="italic text-[#123524]">For Your Industry</em>
              </motion.h2>

              <motion.p
                className="text-graphite mt-5 text-base leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
              >
                From single asset acquisitions to complex multi-tranche facilities,
                we structure solutions that match your exact requirements.
              </motion.p>

              <motion.button
                className="mt-8 inline-flex items-center gap-2 text-[#123524] text-sm font-semibold tracking-wide group"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <span className="group-hover:underline underline-offset-4">Explore All Solutions</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>

              {/* Mini stat strip */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-[#E7E3DD] grid grid-cols-2 gap-6"
              >
                {[
                  { val: '6', label: 'Finance Products' },
                  { val: '40+', label: 'Lender Partners' },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="font-display font-bold text-[#111111] text-3xl leading-none mb-1">{s.val}</div>
                    <div className="text-graphite text-xs tracking-wide uppercase">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT — numbered service rows */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-[#E7E3DD]">
              {services.map((service, i) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.65, delay: i * 0.08, ease }}
                    className="group relative py-8 flex items-start gap-5 cursor-default
                               hover:bg-white transition-colors duration-300 -mx-6 px-6 rounded-sm"
                  >
                    {/* Left accent line — slides down on hover */}
                    <div
                      className="absolute left-0 top-2 bottom-2 w-0.5 bg-[#123524]
                                 scale-y-0 group-hover:scale-y-100 origin-top
                                 transition-transform duration-500 rounded-full"
                    />

                    {/* Ghost number */}
                    <div className="shrink-0 w-10 pt-0.5 select-none">
                      <span
                        className="font-display font-bold leading-none tracking-tighter text-3xl
                                   text-[#E7E3DD] group-hover:text-[#123524]/15
                                   transition-colors duration-300"
                      >
                        {service.num}
                      </span>
                    </div>

                    {/* Icon box */}
                    <div
                      className="shrink-0 w-11 h-11 border border-[#E7E3DD] bg-white
                                 group-hover:bg-[#123524] group-hover:border-[#123524]
                                 flex items-center justify-center rounded-sm transition-all duration-300 mt-0.5"
                    >
                      <Icon
                        size={18}
                        className="text-[#5F6368] group-hover:text-[#DDE7E1] transition-colors duration-300"
                      />
                    </div>

                    {/* Text block */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h3 className="font-semibold text-[#111111] text-lg tracking-tight leading-snug">
                          {service.title}
                        </h3>
                        {service.tag && (
                          <span
                            className="text-[9px] tracking-widest uppercase font-bold
                                       text-[#123524] bg-[#DDE7E1]/50 px-2 py-0.5 rounded-sm border border-[#DDE7E1]"
                          >
                            {service.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-graphite text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow button — appears on hover */}
                    <div
                      className="shrink-0 w-9 h-9 border border-[#E7E3DD] rounded-sm
                                 flex items-center justify-center mt-0.5
                                 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0
                                 group-hover:border-[#123524] group-hover:bg-[#123524]
                                 transition-all duration-300"
                    >
                      <ArrowRight size={14} className="text-[#5F6368] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

