import { Link } from 'react-router-dom'

// Review-only tooling chrome — not part of any system's brand.
export default function DevSwitcher({ current }) {
  const tabs = [
    { to: '/', label: 'Home' },
    { to: '/campaigns/rtm-live', label: 'Code' },
    { to: '/campaigns/brand-trivia', label: 'Quiz' },
    { to: '/campaigns/summer-raffle', label: 'Raffle' },
    { to: '/campaigns/customer-poll', label: 'Poll' },
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
