import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react'

const businessTypes = [
  'Construction & Civil',
  'Transport & Logistics',
  'Warehousing & Distribution',
  'Manufacturing',
  'Trades & Services',
  'Retail & Hospitality',
  'Healthcare',
  'Other',
]

const financeOptions = [
  'Asset Finance',
  'Commercial Lending',
  'Equipment Leasing',
  'Warehouse Funding',
  'Excavator / Machinery Finance',
  'Business Expansion Loan',
  'Tools & Equipment Finance',
  'Other / Not Sure',
]

const contactItems = [
  { icon: Phone, label: 'Phone', value: '1300 FIN CASH', href: 'tel:1300346227' },
  { icon: Mail, label: 'Email', value: 'info@fintrixcapital.com.au', href: 'mailto:info@fintrixcapital.com.au' },
  { icon: MapPin, label: 'Office', value: 'Melbourne, VIC, Australia', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon – Fri  ·  8:30am – 5:30pm AEST', href: null },
]

const nextSteps = [
  { num: '01', title: 'Submit your enquiry', desc: 'Takes under 2 minutes' },
  { num: '02', title: 'Broker calls within 24 hrs', desc: 'We review your needs immediately' },
  { num: '03', title: 'Receive your proposal', desc: 'Tailored finance solution, fast' },
]

const ease = [0.22, 1, 0.36, 1]

const inputCls =
  'w-full bg-white border border-[#E7E3DD] rounded-sm px-4 py-3.5 text-sm text-[#111111] ' +
  'placeholder:text-[#5F6368]/40 focus:outline-none focus:border-[#123524] ' +
  'focus:ring-1 focus:ring-[#123524]/12 transition-colors'

const labelCls = 'block text-[#111111] text-[10px] font-semibold tracking-[0.15em] uppercase mb-2'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', businessType: '', financeRequired: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12">

        {/* ── LEFT: dark editorial panel ── */}
        <motion.div
          className="lg:col-span-5 bg-[#0c2419] relative overflow-hidden flex flex-col justify-between
                     px-10 py-16 lg:px-14 lg:py-24"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />

          {/* Ghost watermark */}
          <div className="absolute bottom-0 right-0 select-none pointer-events-none overflow-hidden">
            <span
              className="font-display font-bold text-white/[0.03] leading-none"
              style={{ fontSize: 'clamp(100px, 14vw, 180px)' }}
            >
              FX
            </span>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <span className="section-label-light">Get In Touch</span>
            <div className="w-10 h-px bg-[#DDE7E1]/30 mt-4 mb-7" />
            <h2
              className="heading-display text-white leading-tight text-balance mb-4"
              style={{ fontSize: 'clamp(28px, 3.2vw, 42px)' }}
            >
              Let's Discuss{' '}
              <em className="italic text-[#DDE7E1]">Your Finance Needs</em>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xs">
              Speak to one of our experienced brokers — no obligation, no pressure,
              just straightforward advice.
            </p>

            {/* Contact rows */}
            <div className="divide-y divide-white/[0.07] border-t border-white/[0.07]">
              {contactItems.map(({ icon: Icon, label, value, href }, idx) => (
                <motion.div
                  key={label}
                  className="flex items-center gap-4 py-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.08, ease }}
                >
                  <div className="w-8 h-8 border border-white/10 rounded-sm flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#DDE7E1]/50" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[#DDE7E1]/30 text-[9px] tracking-[0.2em] uppercase mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-white/75 text-sm font-medium hover:text-white transition-colors truncate block">
                        {value}
                      </a>
                    ) : (
                      <span className="text-white/75 text-sm font-medium">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative z-10 mt-12 pt-10 border-t border-white/[0.07]">
            <p className="text-[#DDE7E1]/35 text-[9px] tracking-[0.3em] uppercase font-medium mb-5">
              What Happens Next
            </p>
            <div className="space-y-4">
              {nextSteps.map((s) => (
                <div key={s.num} className="flex items-start gap-4">
                  <span className="font-display font-bold text-[#DDE7E1]/20 text-sm shrink-0 mt-0.5 w-5">
                    {s.num}
                  </span>
                  <div>
                    <div className="text-white/65 text-sm font-medium">{s.title}</div>
                    <div className="text-white/25 text-[11px] mt-0.5">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: form panel ── */}
        <motion.div
          className="lg:col-span-7 bg-[#F7F5F2] px-10 py-16 lg:px-14 lg:py-24"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
        >
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16 px-8">
              <div className="w-16 h-16 bg-[#123524]/10 rounded-sm flex items-center justify-center mb-6">
                <CheckCircle2 size={30} className="text-[#123524]" />
              </div>
              <h3 className="font-display font-bold text-[#111111] text-2xl mb-3">
                Enquiry Received
              </h3>
              <p className="text-graphite max-w-sm leading-relaxed text-sm">
                Thank you for reaching out. One of our brokers will be in touch within one business day.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <p className="text-[#111111] font-semibold text-lg mb-1">Submit an Enquiry</p>
                <p className="text-graphite text-sm">Fill in your details and we'll be in touch shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Full Name <span className="text-[#123524]">*</span></label>
                    <input
                      type="text" name="name" required
                      value={formData.name} onChange={handleChange}
                      placeholder="John Smith" className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address <span className="text-[#123524]">*</span></label>
                    <input
                      type="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      placeholder="john@company.com.au" className={inputCls}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className={labelCls}>Phone Number</label>
                  <input
                    type="tel" name="phone"
                    value={formData.phone} onChange={handleChange}
                    placeholder="0400 000 000" className={inputCls}
                  />
                </div>

                {/* Business Type + Finance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>Business Type <span className="text-[#123524]">*</span></label>
                    <select
                      name="businessType" required
                      value={formData.businessType} onChange={handleChange}
                      className={inputCls + ' appearance-none cursor-pointer'}
                    >
                      <option value="">Select industry</option>
                      {businessTypes.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Finance Required <span className="text-[#123524]">*</span></label>
                    <select
                      name="financeRequired" required
                      value={formData.financeRequired} onChange={handleChange}
                      className={inputCls + ' appearance-none cursor-pointer'}
                    >
                      <option value="">Select finance type</option>
                      {financeOptions.map((f) => <option key={f}>{f}</option>)}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelCls}>Message</label>
                  <textarea
                    name="message" rows={5}
                    value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your finance requirements, timeline and any specific details..."
                    className={inputCls + ' resize-none'}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2.5 bg-[#123524] hover:bg-[#1e5440]
                             text-white font-semibold text-sm px-7 py-4 rounded-sm transition-all duration-300 tracking-wide mt-2"
                >
                  Submit Enquiry
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>

                <p className="text-[#5F6368]/60 text-[11px] text-center leading-relaxed pt-1">
                  By submitting you agree to our Privacy Policy. We will never share your information.
                </p>
              </form>
            </>
          )}
        </motion.div>

      </div>
    </section>
  )
}


