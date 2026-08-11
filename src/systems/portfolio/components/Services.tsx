const SERVICES = [
  {
    title: 'End-to-End Promotion & Reward Services',
    description:
      'Unlock seamless promotions, reward redemption, and customer engagement.',
  },
  {
    title: 'Flexible Campaign Models',
    description:
      'Run scalable digital, physical, or hybrid promotions tailored to your goals.',
  },
  {
    title: 'Intelligent Reward System',
    description:
      'Automated AI-driven reward logic to optimize engagement and ROI.',
  },
  {
    title: 'Personalised & Geo-Targeted Offers',
    description:
      'Deliver relevant offers based on consumer type, purchase behaviour, and location.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-p-paper px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <span className="font-p-body text-xs font-semibold uppercase tracking-wider text-p-slate">
          What we offer
        </span>
        <h2 className="mt-2 font-p-display text-2xl text-p-depth sm:text-3xl">
          Discover services we provide
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <div key={service.title} className="flex gap-4">
              <span className="font-p-display text-2xl text-p-mist">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-p-display text-base text-p-depth">
                  {service.title}
                </h3>
                <p className="mt-1 font-p-body text-sm text-p-slate">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
