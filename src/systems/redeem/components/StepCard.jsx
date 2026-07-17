export default function StepCard({ number, title, description }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-r-border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-r-signal/30 hover:shadow-md motion-reduce:hover:translate-y-0">
      <span className="font-r-display text-2xl text-r-signal">
        {String(number).padStart(2, '0')}
      </span>
      <h3 className="font-r-display text-lg text-r-ink">
        {title}
      </h3>
      <p className="font-r-body text-sm leading-relaxed text-r-ink-muted">
        {description}
      </p>
    </div>
  )
}
