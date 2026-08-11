export default function PrizeCard({ label, name, value }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-r-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-r-signal/30 hover:shadow-md motion-reduce:hover:translate-y-0">
      <div className="flex h-32 items-center justify-center bg-gradient-to-br from-r-signal-tint to-r-signal/20">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="text-r-signal"
          aria-hidden="true"
        >
          <rect x="3" y="8" width="18" height="13" rx="1.5" />
          <path d="M3 12h18" />
          <path d="M12 8v13" />
          <path d="M12 8c-1.2-3-3.4-4.5-5-3.5S5.4 8 8 8" />
          <path d="M12 8c1.2-3 3.4-4.5 5-3.5s1.6 3.5-1 3.5" />
        </svg>
      </div>
      <div className="flex flex-col gap-1 p-4">
        <span className="font-r-body text-xs font-semibold uppercase tracking-wide text-r-ink-muted">
          {label}
        </span>
        <span className="font-r-display text-base text-r-ink">
          {name}
        </span>
        <span className="font-r-body text-sm text-r-signal">{value}</span>
      </div>
    </div>
  )
}
