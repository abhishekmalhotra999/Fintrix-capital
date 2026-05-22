import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import Contact from '../components/sections/Contact'

const ease = [0.22, 1, 0.36, 1]

const contactItems = [
  { icon: Phone, label: 'Mobile', value: '0450 122 670', href: 'tel:0450122670' },
  { icon: Mail, label: 'Email', value: 'anu@fintrixcapital.com.au', href: 'mailto:anu@fintrixcapital.com.au' },
  { icon: MapPin, label: 'Office', value: 'Clyde North VIC 3978', href: null },
  { icon: Clock, label: 'Hours', value: 'Mon – Fri  ·  8:30am – 5:30pm AEST', href: null },
]

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="relative bg-[#0c2419] overflow-hidden pt-40 pb-28">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85"
          alt="Contact Fintrix Capital"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-15"
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
            Get In Touch
          </motion.span>
          <div className="w-10 h-px bg-[#DDE7E1]/35 mt-4 mb-8" />

          <motion.h1
            className="font-display font-bold text-white leading-tight text-balance max-w-3xl"
            style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            Let's Talk{' '}
            <em className="italic text-[#DDE7E1]">Finance</em>
          </motion.h1>

          <motion.p
            className="text-white/60 text-lg leading-relaxed max-w-2xl mt-7 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
          >
            Our brokers are ready to discuss your needs — no obligation, no pressure, 
            just straightforward expert advice tailored to your business.
          </motion.p>

          {/* Quick contact row */}
          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease }}
          >
            {contactItems.slice(0, 2).map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-9 h-9 border border-white/15 rounded-sm flex items-center justify-center">
                  <Icon size={15} className="text-[#DDE7E1]/70" />
                </div>
                {href ? (
                  <a href={href} className="text-[#DDE7E1]/80 hover:text-[#DDE7E1] text-sm transition-colors">
                    {value}
                  </a>
                ) : (
                  <span className="text-[#DDE7E1]/80 text-sm">{value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Full Contact section (reused) ── */}
      <Contact />
    </>
  )
}
