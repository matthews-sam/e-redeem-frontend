import { useState } from 'react'
import Button from '../../systems/redeem/components/Button.jsx'
import StepCard from '../../systems/redeem/components/StepCard.jsx'
import PrizeCard from '../../systems/redeem/components/PrizeCard.jsx'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '../../systems/redeem/components/Carousel.jsx'
import Footer from '../../systems/redeem/components/Footer.jsx'
import Modal from '../../shared/components/Modal.jsx'
import { QUIZ_QUESTIONS, PASS_THRESHOLD } from './quizQuestions.js'

const FADE_MS = 150

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

function QuizModal({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState(Array(QUIZ_QUESTIONS.length).fill(null))
  const [visible, setVisible] = useState(true)
  const [result, setResult] = useState(null)

  const question = QUIZ_QUESTIONS[currentIndex]
  const allAnswered = answers.every((a) => a !== null)
  const isLast = currentIndex === QUIZ_QUESTIONS.length - 1

  const goTo = (nextIndex) => {
    if (nextIndex < 0 || nextIndex >= QUIZ_QUESTIONS.length) return
    setVisible(false)
    setTimeout(() => {
      setCurrentIndex(nextIndex)
      setVisible(true)
    }, FADE_MS)
  }

  const selectAnswer = (optionIndex) => {
    setAnswers((prev) => {
      const next = [...prev]
      next[currentIndex] = optionIndex
      return next
    })
    if (!isLast) goTo(currentIndex + 1)
  }

  const handleSubmit = () => {
    const correct = answers.reduce(
      (sum, answer, i) => sum + (answer === QUIZ_QUESTIONS[i].correctIndex ? 1 : 0),
      0,
    )
    const passed = correct / QUIZ_QUESTIONS.length >= PASS_THRESHOLD
    setResult({ correct, total: QUIZ_QUESTIONS.length, passed })
  }

  const handleClose = () => {
    setCurrentIndex(0)
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(null))
    setResult(null)
    setVisible(true)
    onClose?.()
  }

  const handleRetry = () => {
    setCurrentIndex(0)
    setAnswers(Array(QUIZ_QUESTIONS.length).fill(null))
    setResult(null)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      labelledBy="quiz-modal-title"
      className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl"
    >
      <div className="mb-6 flex items-start justify-between">
        <h2 id="quiz-modal-title" className="font-r-display text-xl text-r-ink">
          {result ? 'Quiz results' : 'Brand Trivia Challenge'}
        </h2>
        <button
          onClick={handleClose}
          aria-label="Close"
          className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-r-ink-muted transition-colors hover:bg-r-signal-tint hover:text-r-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r-signal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {result ? (
        <div className="flex flex-col items-center gap-4 py-4 text-center">
          <p className="font-r-display text-3xl text-r-ink">
            {result.correct}/{result.total}
          </p>
          <p className={`font-r-body text-base ${result.passed ? 'text-r-win' : 'text-r-ink-muted'}`}>
            {result.passed
              ? 'You scored 80% or higher — you win!'
              : 'Not quite 80% this time — try again.'}
          </p>
          <div className="mt-2 flex gap-3">
            <Button variant="secondary" onClick={handleRetry}>
              Try again
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-4 font-r-body text-xs font-medium uppercase tracking-wider text-r-ink-muted">
            Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}
          </div>

          <div
            className={`transition-opacity duration-150 ease-out motion-reduce:transition-none ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="mb-4 font-r-display text-lg text-r-ink">{question.question}</p>
            <div className="flex flex-col gap-2">
              {question.options.map((option, i) => (
                <button
                  key={option}
                  onClick={() => selectAnswer(i)}
                  aria-pressed={answers[currentIndex] === i}
                  className={`cursor-pointer rounded-lg border px-4 py-3 text-left font-r-body text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r-signal ${
                    answers[currentIndex] === i
                      ? 'border-r-signal bg-r-signal-tint text-r-signal'
                      : 'border-r-border text-r-ink hover:bg-r-signal-tint/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              onClick={() => goTo(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="cursor-pointer font-r-body text-sm font-semibold text-r-ink-muted transition-colors hover:text-r-ink disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            <button
              onClick={() => goTo(currentIndex + 1)}
              disabled={isLast}
              className="cursor-pointer font-r-body text-sm font-semibold text-r-ink-muted transition-colors hover:text-r-ink disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>

          <Button
            variant="primary"
            className="mt-4 w-full"
            disabled={!allAnswered}
            onClick={handleSubmit}
          >
            Submit Quiz
          </Button>
          {!allAnswered && (
            <p className="mt-2 text-center font-r-body text-xs text-r-ink-muted">
              Answer every question to submit.
            </p>
          )}
        </>
      )}
    </Modal>
  )
}

export default function QuizCampaignSite({ campaign }) {
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
