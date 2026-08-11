import { useState } from 'react'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import ValueProps from './components/ValueProps.tsx'
import About from './components/About.tsx'
import StatsBar from './components/StatsBar.tsx'
import Services from './components/Services.tsx'
import ClientLogos from './components/ClientLogos.tsx'
import Testimonial from './components/Testimonial.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import CampaignDashboardModal from '../../campaigns/CampaignDashboardModal.tsx'

export default function PortfolioPage() {
  const [campaignsOpen, setCampaignsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-p-body">
      <Header onCampaignsClick={() => setCampaignsOpen(true)} />
      <Hero />
      <ValueProps />
      <About />
      <StatsBar />
      <Services />
      <ClientLogos />
      <Testimonial />
      <Contact />
      <Footer />

      <CampaignDashboardModal isOpen={campaignsOpen} onClose={() => setCampaignsOpen(false)} />
    </div>
  )
}
