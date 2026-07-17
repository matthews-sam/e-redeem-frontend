const FEATURES = [
  'Flexible Campaign Creation — launch tailored campaigns with adaptable, intuitive tools.',
  'Smart Targeting — deliver personalized promotions with location-based campaigns.',
  'Web-Based Access — manage promotions anytime, anywhere.',
  'Real-Time Monitoring — track campaign performance with a live dashboard.',
  'Flexible & Instant Rewards — deliver digital and physical rewards effortlessly.',
  'Fraud Prevention — protect your brand with advanced security measures.',
  'Reporting & Analytics — make informed decisions with a powerful reporting engine.',
  'Integration Capabilities — connect seamlessly with your existing systems.',
]

export default function About() {
  return (
    <section id="about" className="bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <span className="font-p-body text-xs font-semibold uppercase tracking-wider text-p-current">
          About us
        </span>
        <h2 className="mt-2 max-w-2xl font-p-display text-2xl font-semibold text-p-depth sm:text-3xl">
          Transform your brand-consumer engagement strategy with a platform
          built for today&rsquo;s digital consumer.
        </h2>
        <p className="mt-4 max-w-2xl font-p-body text-base leading-relaxed text-p-slate">
          Our AI-driven promotions management application enables the
          creation and deployment of campaigns that are digitised, efficient,
          and authentic — including a built-in rewards catalogue for
          cashback, digital credits, e-vouchers, airtime, data, and physical
          gifts, each with its own redemption rules.
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {FEATURES.map((feature) => (
            <li key={feature} className="flex gap-2.5 font-p-body text-sm text-p-slate">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="mt-0.5 shrink-0 text-p-verified"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
