import { Link } from 'react-router-dom'

// Review-only tooling chrome — not part of either system's brand.
export default function DevSwitcher({ current }) {
  const tabs = [
    { to: '/', label: 'System R · Redeem' },
    { to: '/portfolio', label: 'System P · Portfolio' },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-1 rounded-full bg-neutral-900/90 p-1 text-xs font-mono text-neutral-300 shadow-lg backdrop-blur">
      {tabs.map((tab) => (
        <Link
          key={tab.to}
          to={tab.to}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            current === tab.to
              ? 'bg-white text-neutral-900'
              : 'hover:bg-neutral-700'
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  )
}
