import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ValueProps from './components/ValueProps.jsx'
import About from './components/About.jsx'
import StatsBar from './components/StatsBar.jsx'
import Services from './components/Services.jsx'
import ClientLogos from './components/ClientLogos.jsx'
import Testimonial from './components/Testimonial.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white font-p-body">
      <Header />
      <Hero />
      <ValueProps />
      <About />
      <StatsBar />
      <Services />
      <ClientLogos />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  )
}
