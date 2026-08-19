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
import QuizModal from './QuizModal.tsx'
import { QUIZ_QUESTIONS } from './quizQuestions.ts'
import type { CampaignSiteProps } from '../types.ts'

const STEPS = [
  {
    title: 'Click "Start Quiz"',
    description: 'Begin the challenge from the header or the button below.',
  },
  {
    title: 'Answer 6 quick questions',
    description: 'One at a time, with Next and Previous to move around freely.',
  },
  {
    title: 'Score 80% or higher',
    description: 'Submit unlocks once every question has an answer.',
  },
  {
    title: 'Get notified instantly',
    description: 'Find out right away whether you’ve won.',
  },
]

const PRIZES = [
  { label: 'Grand prize', name: '₦300,000 cash', value: '2 available' },
  { label: 'Weekly prize', name: '5GB data bundle', value: '100 available' },
  { label: 'Instant win', name: '₦150 airtime', value: 'Most common' },
]

export default function QuizCampaignSite({ campaign }: CampaignSiteProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-r-cloud font-r-body">
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-r-border bg-r-cloud/90 px-6 py-4 backdrop-blur sm:px-10">
        <div className="font-r-display text-xl text-r-ink">Quiz</div>
        <Button variant="primary" onClick={() => setModalOpen(true)} className="px-4 py-2.5 sm:px-6 sm:py-3">
          Start Quiz
        </Button>
      </header>

      <section className="relative overflow-hidden bg-r-ink px-6 py-20 sm:px-10 sm:py-28">
        <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6 text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-r-body text-xs font-semibold uppercase tracking-wider text-r-reward">
            <span className="h-1.5 w-1.5 rounded-full bg-r-reward" aria-hidden="true" />
            Score 80% to win
          </span>
          <h1 className="font-r-display text-4xl leading-tight text-white sm:text-6xl">
            {campaign?.name ?? 'Brand Trivia Challenge'}
          </h1>
          <p className="max-w-lg font-r-body text-base text-white/70 sm:text-lg">
            Answer {QUIZ_QUESTIONS.length} quick questions. Score 80% or higher and you win.
          </p>
          <Button variant="primary" onClick={() => setModalOpen(true)} className="bg-r-reward text-r-ink hover:bg-r-reward/90">
            Start Quiz
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

      <QuizModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
