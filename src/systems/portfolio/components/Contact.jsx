import Button from './Button.jsx'

const fieldClasses =
  'rounded-md border border-p-mist px-4 py-3 font-p-body text-sm text-p-depth focus:border-p-current focus:outline-none focus:ring-2 focus:ring-p-current/20'
const labelClasses = 'font-p-body text-xs font-medium text-p-slate'

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2">
        <div>
          <span className="font-p-body text-xs font-semibold uppercase tracking-wider text-p-current">
            Contact us
          </span>
          <h2 className="mt-2 font-p-display text-2xl font-semibold text-p-depth sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-sm font-p-body text-sm text-p-slate">
            Real office address, email, and phone number pending — the
            previous live site listed template placeholders (&ldquo;NewYork,
            USA&rdquo;, an @infos.com address); replace before this goes live.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className={labelClasses}>
              Your name
            </label>
            <input id="contact-name" type="text" autoComplete="name" className={fieldClasses} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className={labelClasses}>
              Your email
            </label>
            <input id="contact-email" type="email" autoComplete="email" className={fieldClasses} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className={labelClasses}>
              Tell us about your campaign
            </label>
            <textarea id="contact-message" rows={4} className={fieldClasses} />
          </div>
          <Button type="submit" variant="primary" className="self-start">
            Send message
          </Button>
        </form>
      </div>
    </section>
  )
}
