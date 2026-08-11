import Button from './Button.jsx'

export default function Header({ onRedeemClick }) {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-r-border bg-r-cloud/90 px-6 py-4 backdrop-blur sm:px-10">
      <div className="font-r-display text-xl text-r-ink">
        Redeem
      </div>

      <div className="flex items-center gap-3 sm:gap-5">
        <select
          aria-label="Language"
          className="cursor-pointer rounded-md border border-r-border bg-white px-2 py-1.5 font-r-body text-sm text-r-ink-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r-signal"
          defaultValue="en"
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="pt">PT</option>
        </select>
        <Button variant="primary" onClick={onRedeemClick} className="px-4 py-2.5 sm:px-6 sm:py-3">
          Redeem Voucher
        </Button>
      </div>
    </header>
  )
}
