import Button from './Button.jsx'

export default function Hero() {
  return (
    <section id="home" className="bg-p-depth px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-p-body text-xs font-medium text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-p-verified" aria-hidden="true" />
          Built for brand-led growth teams
        </span>

        <h1 className="mt-6 font-p-display text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Unlock the power of{' '}
          <span className="font-serif italic text-p-current" style={{ fontFamily: 'Fraunces, serif' }}>
            intelligent
          </span>{' '}
          brand engagement.
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-p-body text-base text-white/70 sm:text-lg">
          Drive deeper connections with your distributors, retailers, and
          consumers through interactive, gamified campaigns and promotions.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button variant="primary" href="#contact">
            Talk to us
          </Button>
          <Button variant="outline" href="#services">
            See what we offer
          </Button>
        </div>
      </div>
    </section>
  )
}
