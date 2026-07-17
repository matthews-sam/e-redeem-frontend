export default function Footer() {
  return (
    <footer className="bg-p-depth px-6 py-12 text-white/60 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:justify-between">
        <div>
          <div className="font-p-display text-lg font-semibold text-white">
            E-Redeem
          </div>
          <p className="mt-3 max-w-xs font-p-body text-sm">
            Get started with E-Redeem — start working together easily.
          </p>
          <form
            className="mt-3 flex max-w-xs gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Your email
            </label>
            <input
              id="footer-email"
              type="email"
              autoComplete="email"
              placeholder="Your email"
              className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2 font-p-body text-sm text-white placeholder:text-white/40 focus:border-p-current focus:outline-none focus:ring-2 focus:ring-p-current/30"
            />
            <button
              type="submit"
              className="shrink-0 cursor-pointer rounded-md bg-p-current px-4 py-2 font-p-body text-sm font-semibold text-white transition-colors hover:bg-p-current/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-2 font-p-body text-sm">
          <span className="font-semibold text-white">Links</span>
          <a href="#home" className="transition-colors hover:text-white">Home</a>
          <a href="#services" className="transition-colors hover:text-white">Interactive Campaigns</a>
          <a href="#contact" className="transition-colors hover:text-white">Contact</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-5xl border-t border-white/10 pt-6 font-p-body text-xs">
        © {new Date().getFullYear()} E-Redeem. All rights reserved.
      </p>
    </footer>
  )
}
