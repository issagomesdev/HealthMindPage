import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import AppHighlights from '@/components/sections/AppHighlights'
import Breathing from '@/components/sections/Breathing'
import Community from '@/components/sections/Community'
import ForPatients from '@/components/sections/ForPatients'
import ForProfessionals from '@/components/sections/ForProfessionals'
import Impact from '@/components/sections/Impact'
import Technology from '@/components/sections/Technology'
import Team from '@/components/sections/Team'

function App() {
  useEffect(() => {
    // Disable smooth scroll temporarily so the reset is instant
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    // Clear any leftover hash from previous navigation
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search)
    }
    // Restore smooth scroll after the frame is painted
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = ''
    })
  }, [])

  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <AppHighlights />
        <Breathing />
        <Community />
        <ForPatients />
        <ForProfessionals />
        <Impact />
        <Technology />
        <Team />
      </main>
      <Footer />
    </>
  )
}

export default App
