import { Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react'

const services = [
  'Asset Finance',
  'Commercial Lending',
  'Equipment Leasing',
  'Warehouse Funding',
  'Excavator Finance',
  'Business Expansion Loans',
]

const company = [
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#0c2419] text-white overflow-hidden">

      {/* ── Top CTA strip ── */}
      <div className="border-b border-white/[0.07]">
        <div className="section-padding max-w-screen-2xl mx-auto py-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          <div>
            <p className="text-white/28 text-[9px] tracking-[0.35em] uppercase mb-3 font-medium">
              Ready To Get Started?
            </p>
            <h2
              className="font-display font-bold text-white leading-tight text-balance"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
            >
              Fund your{' '}
              <em className="italic text-[#DDE7E1]">next business move</em>{' '}
              today.
            </h2>
          </div>

          <div className="flex flex-col gap-5 lg:items-end shrink-0">
            <a
              href="tel:0450122670"
              className="group flex items-center gap-4"
            >
              <div className="lg:text-right">
                <div className="text-white/25 text-[9px] tracking-[0.2em] uppercase mb-0.5">Call Us Now</div>
                <div
                  className="font-display font-bold text-white group-hover:text-[#DDE7E1] transition-colors duration-200"
                  style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
                >
                  0450 122 670
                </div>
              </div>
              <div className="w-11 h-11 border border-white/15 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[#DDE7E1]/50 transition-all duration-200">
                <ArrowRight size={16} className="text-white/35 group-hover:text-[#DDE7E1] group-hover:translate-x-0.5 transition-all duration-200" />
              </div>
            </a>
            <a
              href="mailto:anu@fintrixcapital.com.au"
              className="text-white/30 hover:text-[#DDE7E1] text-sm transition-colors duration-200"
            >
              anu@fintrixcapital.com.au
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav grid ── */}
      <div className="section-padding max-w-screen-2xl mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0 border-b border-white/[0.07]">

        {/* Logo col */}
        <div className="lg:col-span-4 lg:pr-16">
          <img
            src="/fintrix-final-logo.png"
            alt="Fintrix Capital"
            className="h-9 w-auto object-contain mb-6"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="text-white/32 text-sm leading-relaxed mb-8 max-w-[240px]">
            Smart, flexible finance solutions helping Australian businesses grow, invest and scale with confidence.
          </p>
          <div className="flex items-center gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-sm border border-white/10 hover:border-[#DDE7E1]/40 hover:text-[#DDE7E1] flex items-center justify-center text-white/30 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Company links */}
        <div className="lg:col-span-2">
          <h4 className="text-white/28 text-[9px] tracking-[0.28em] uppercase font-medium mb-5">Company</h4>
          <ul className="space-y-3.5">
            {company.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNav(item.href)}
                  className="text-white/50 hover:text-[#DDE7E1] text-sm transition-colors duration-200 cursor-pointer text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          <h4 className="text-white/28 text-[9px] tracking-[0.28em] uppercase font-medium mb-5">Services</h4>
          <ul className="space-y-3.5">
            {services.map((s) => (
              <li key={s}>
                <span className="text-white/50 text-sm">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="lg:col-span-3">
          <h4 className="text-white/28 text-[9px] tracking-[0.28em] uppercase font-medium mb-5">Contact</h4>
          <ul className="space-y-5">
            {[
              { label: 'Email', val: 'anu@fintrixcapital.com.au', href: 'mailto:anu@fintrixcapital.com.au' },
              { label: 'Mobile', val: '0450 122 670', href: 'tel:0450122670' },
              { label: 'Office Hours', val: 'Mon – Fri: 8:30am – 5:30pm AEST', href: null },
              { label: 'Location', val: 'Clyde North VIC 3978', href: null },
            ].map(({ label, val, href }) => (
              <li key={label}>
                <span className="block text-white/22 text-[9px] uppercase tracking-[0.22em] mb-1">{label}</span>
                {href ? (
                  <a href={href} className="text-white/50 hover:text-[#DDE7E1] text-sm transition-colors duration-200">{val}</a>
                ) : (
                  <span className="text-white/50 text-sm">{val}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Ghost watermark ── */}
      <div className="relative overflow-hidden">
        <div className="section-padding max-w-screen-2xl mx-auto select-none pointer-events-none -mb-4">
          <span
            className="font-display font-bold text-white/[0.028] leading-none whitespace-nowrap block"
            style={{ fontSize: 'clamp(72px, 11vw, 156px)' }}
          >
            FINTRIX CAPITAL
          </span>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/[0.07]">
        <div className="section-padding max-w-screen-2xl mx-auto py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-[11px] leading-relaxed">
            © {new Date().getFullYear()} Fintrix Capital Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {['Privacy Policy', 'Terms of Use', 'Disclaimer'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/20 hover:text-white/50 text-[11px] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}


