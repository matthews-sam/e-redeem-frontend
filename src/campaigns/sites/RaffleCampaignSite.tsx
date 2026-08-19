import { useState } from 'react'
import Button from '../../systems/redeem/components/Button.tsx'
import StepCard from '../../systems/redeem/components/StepCard.tsx'
import PrizeCard from '../../systems/redeem/components/PrizeCard.tsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../systems/redeem/components/Carousel.tsx'
import Footer from '../../systems/redeem/components/Footer.tsx'
import RaffleModal from './RaffleModal.tsx'
import type { CampaignSiteProps } from '../types.ts'

const STEPS = [
  {
    title: 'Click "Try your luck"',
    description: 'Opens the wheel from the header or the button below.',
  },
  {
    title: 'Spin the wheel',
    description: 'Set it going — a Stop button appears once it’s spinning.',
  },
  {
    title: 'Click Stop',
    description: 'Locks in a random result and slows the wheel to a stop.',
  },
  {
    title: 'Win if you land on a prize',
    description: '4 of the 6 slots are winners.',
  },
]

const PRIZES = [
  { label: 'Wheel prize', name: '₦500 Airtime', value: 'Slot 1 of 6' },
  { label: 'Wheel prize', name: '1GB Data', value: 'Slot 3 of 6' },
  { label: 'Wheel prize', name: '₦1,000 Cash', value: 'Slot 4 of 6' },
  { label: 'Wheel prize', name: 'Free Ticket', value: 'Slot 5 of 6' },
]

export default function RaffleCampaignSite({ campaign }: CampaignSiteProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-r-cloud font-r-body">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-r-border bg-r-cloud/90 px-6 py-4 backdrop-blur sm:px-10">
        <div className="font-r-display text-xl text-r-ink">Raffle</div>
        <Button variant="primary" onClick={() => setModalOpen(true)} className="px-4 py-2.5 sm:px-6 sm:py-3">
          Try your luck
        </Button>
      </header>

      <section className="relative overflow-hidden bg-r-ink px-6 py-20 sm:px-10 sm:py-28">
        <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6 text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-r-body text-xs font-semibold uppercase tracking-wider text-r-reward">
            <span className="h-1.5 w-1.5 rounded-full bg-r-reward" aria-hidden="true" />
            Spin to win
          </span>
          <h1 className="font-r-display text-4xl leading-tight text-white sm:text-6xl">
            {campaign?.name ?? 'Summer Raffle Draw'}
          </h1>
          <p className="max-w-lg font-r-body text-base text-white/70 sm:text-lg">
            Spin the wheel for a chance at one of four prizes.
          </p>
          <Button
            variant="primary"
            onClick={() => setModalOpen(true)}
            className="bg-r-reward text-r-ink hover:bg-r-reward/90"
          >
            Try your luck
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 sm:px-10">
        <span className="font-r-body text-xs font-semibold uppercase tracking-wider text-r-signal">
          How it works
        </span>
        <h2 className="mt-2 font-r-display text-2xl text-r-ink sm:text-3xl">
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
          <h2 className="mt-2 font-r-display text-2xl text-r-ink sm:text-3xl">
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

      <RaffleModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
