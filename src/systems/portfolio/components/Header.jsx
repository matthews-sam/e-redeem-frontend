import Button from './Button.jsx'

const NAV = ['Home', 'About', 'Contact']

export default function Header({ onCampaignsClick }) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-p-depth px-6 py-5 sm:px-10">
      <div className="font-p-display text-xl text-white">
        E-Redeem
      </div>
      <nav className="hidden items-center gap-8 font-p-body text-sm text-white/70 md:flex">
        {NAV.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="transition-colors hover:text-white"
          >
            {item}
          </a>
        ))}
        <button
          onClick={onCampaignsClick}
          className="cursor-pointer transition-colors hover:text-white"
        >
          Campaigns
        </button>
      </nav>
      <div className="flex items-center gap-3">
        <button
          onClick={onCampaignsClick}
          className="cursor-pointer font-p-body text-sm text-white/70 transition-colors hover:text-white md:hidden"
        >
          Campaigns
        </button>
        <Button variant="primary" href="#contact" className="px-5 py-2.5">
          Contact us
        </Button>
      </div>
    </header>
  )
}
