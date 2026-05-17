import { useScroll, useSpring, motion } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/sections/Hero'
import TrustedBy from './components/sections/TrustedBy'
import Services from './components/sections/Services'
import About from './components/sections/About'
import WhyChoose from './components/sections/WhyChoose'
import Process from './components/sections/Process'
import Industries from './components/sections/Industries'
import Testimonials from './components/sections/Testimonials'
import CTABanner from './components/sections/CTABanner'
import Contact from './components/sections/Contact'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-[#DDE7E1]/70 z-[200] origin-left pointer-events-none"
    />
  )
}

function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <WhyChoose />
      <Process />
      <Industries />
      <Testimonials />
      <CTABanner />
      <Contact />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
