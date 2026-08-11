import Button from './Button.jsx'

export default function Hero({ onRedeemClick }) {
  return (
    <section className="relative overflow-hidden bg-r-ink px-6 py-20 sm:px-10 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-r-reward/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-r-signal/40 blur-3xl"
      />

      {/* decorative geometric accents, hidden on small screens to avoid crowding the headline */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-20 hidden h-16 w-16 text-r-reward/40 lg:block"
        viewBox="0 0 64 64"
        fill="none"
      >
        <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute bottom-24 right-40 hidden h-10 w-10 rotate-12 text-r-signal-tint/50 lg:block"
        viewBox="0 0 40 40"
        fill="none"
      >
        <rect x="2" y="2" width="36" height="36" rx="6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-72 top-40 hidden h-8 w-8 text-white/20 lg:block"
        viewBox="0 0 32 28"
        fill="none"
      >
        <path d="M16 2 30 26H2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>

      <div className="relative mx-auto flex max-w-3xl flex-col items-start gap-6 text-left">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 font-r-body text-xs font-semibold uppercase tracking-wider text-r-reward">
          <span className="h-1.5 w-1.5 rounded-full bg-r-reward" aria-hidden="true" />
          Win instantly
        </span>
        <h1 className="font-r-display text-4xl leading-tight text-white sm:text-6xl">
          Enter your code,
          <br />
          win instantly.
        </h1>
        <p className="max-w-lg font-r-body text-base text-white/70 sm:text-lg">
          Every RTM voucher code is a chance to win airtime, data, or a prize —
          redeemed in under a minute, no app required.
        </p>
        <Button variant="primary" onClick={onRedeemClick} className="bg-r-reward text-r-ink hover:bg-r-reward/90">
          Redeem Voucher
        </Button>
      </div>
    </section>
  )
}
