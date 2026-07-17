import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import StepCard from './components/StepCard.jsx'
import PrizeCard from './components/PrizeCard.jsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from './components/Carousel.jsx'
import RedeemModal from './components/RedeemModal.jsx'
import WinToast from './components/WinToast.jsx'
import Footer from './components/Footer.jsx'

const STEPS = [
  {
    title: 'Enter your RTM 7-digit code',
    description:
      'Click "Redeem Voucher" at the top of the page and type your code exactly as shown.',
  },
  {
    title: 'Fill in your details',
    description: 'Add your name and mobile number, then hit submit.',
  },
  {
    title: 'Get notified instantly',
    description: 'We’ll tell you right away whether your code has won.',
  },
  {
    title: 'Get credited',
    description: 'Winning codes are credited as airtime or data within minutes.',
  },
]

const PRIZES = [
  { label: 'Grand prize', name: '₦500,000 cash', value: '3 available' },
  { label: 'Weekly prize', name: '10GB data bundle', value: '200 available' },
  { label: 'Instant win', name: '₦200 airtime', value: 'Most common' },
  { label: 'Monthly prize', name: '₦100,000 cash', value: '5 available' },
  { label: 'Bonus reward', name: '20GB data bundle', value: '150 available' },
  { label: 'Instant win', name: '₦100 airtime', value: 'Runner-up tier' },
]

export default function RedeemPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState(null)

  const handleSubmit = (code) => {
    setModalOpen(false)
    setToast(`Code ${code} — ₦200 airtime credited.`)
  }

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 4500)
    return () => clearTimeout(timer)
  }, [toast])

  return (
    <div className="min-h-screen bg-r-cloud font-r-body">
      <Header onRedeemClick={() => setModalOpen(true)} />
      <Hero onRedeemClick={() => setModalOpen(true)} />

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <span className="font-r-body text-xs font-semibold uppercase tracking-wider text-r-signal">
          How it works
        </span>
        <h2 className="mt-2 font-r-display text-2xl font-extrabold text-r-ink sm:text-3xl">
          Win in four simple steps
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <StepCard key={step.title} number={i + 1} {...step} />
          ))}
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <span className="font-r-body text-xs font-semibold uppercase tracking-wider text-r-signal">
            Prize showcase
          </span>
          <h2 className="mt-2 font-r-display text-2xl font-extrabold text-r-ink sm:text-3xl">
            What you could win today
          </h2>
          <Carousel opts={{ align: 'start', loop: true }} className="mt-8 px-1 sm:px-10">
            <CarouselContent>
              {PRIZES.map((prize) => (
                <CarouselItem key={prize.name} className="basis-full sm:basis-1/2 lg:basis-1/3">
                  <PrizeCard {...prize} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      <Footer />

      <RedeemModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
      <WinToast
        visible={!!toast}
        prizeName={toast}
        onClose={() => setToast(null)}
      />
    </div>
  )
}
