const STATS = [
  { label: 'Projects', value: null },
  { label: 'Clients', value: null },
  { label: 'Awarded', value: null },
  { label: 'Campaigns', value: null },
]

export default function StatsBar() {
  return (
    <section className="bg-p-depth px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:bg-white/[0.06]"
          >
            <div className="font-p-body text-[11px] font-medium uppercase tracking-wider text-white/50">
              {stat.label}
            </div>
            <div className="mt-2 font-p-display text-3xl tabular-nums text-white">
              {stat.value ?? (
                <span className="text-white/25" title="Awaiting figure from client">
                  —
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mx-auto mt-6 max-w-5xl text-center font-p-body text-xs text-white/40">
        Figures pending — to be supplied before launch.
      </p>
    </section>
  )
}
