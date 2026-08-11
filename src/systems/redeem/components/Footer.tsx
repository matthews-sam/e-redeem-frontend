export default function Footer() {
  return (
    <footer className="bg-r-ink px-6 py-12 text-white/70 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:justify-between">
        <div>
          <div className="font-r-display text-lg text-white">
            Redeem
          </div>
          <p className="mt-2 max-w-xs font-r-body text-sm">
            excitepa@gmail.com
            <br />
            +234 816 624 5118
          </p>
        </div>

        <div className="flex gap-12">
          <div className="flex flex-col gap-2 font-r-body text-sm">
            <span className="font-semibold text-white">Legal</span>
            <a href="#privacy" className="hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:text-white">Terms &amp; Conditions</a>
          </div>
          <div className="flex flex-col gap-2 font-r-body text-sm">
            <span className="font-semibold text-white">Support</span>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#contact" className="hover:text-white">Contact Us</a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-5xl border-t border-white/10 pt-6 font-r-body text-xs">
        © {new Date().getFullYear()} RTM | Redeem. All rights reserved.
      </p>
    </footer>
  )
}
