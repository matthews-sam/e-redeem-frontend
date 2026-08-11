const PROPS = [
  {
    title: 'Seamless Digital Reward',
    description: 'End-to-end digitised reward management and redemption.',
  },
  {
    title: 'Frictionless Redemption',
    description: 'Instant reward redemption for all customer types.',
  },
  {
    title: 'Gamify Loyalty',
    description:
      'Enhance brand satisfaction with an interactive, gamified experience.',
  },
  {
    title: 'Know Your Customer',
    description:
      'Capture rich data and actionable insights that help you know your consumers.',
  },
  {
    title: 'Rewarding Engagement',
    description:
      'Build brand affinity through campaigns that reward consumer engagement.',
  },
]

export default function ValueProps() {
  return (
    <section className="bg-p-paper px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROPS.map((prop) => (
          <div
            key={prop.title}
            className="rounded-lg border border-p-mist bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-p-current/30 hover:shadow-md motion-reduce:hover:translate-y-0"
          >
            <h3 className="font-p-display text-lg text-p-depth">
              {prop.title}
            </h3>
            <p className="mt-2 font-p-body text-sm leading-relaxed text-p-slate">
              {prop.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
