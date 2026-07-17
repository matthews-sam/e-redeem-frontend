export default function ClientLogos() {
  return (
    <section className="bg-white px-6 py-14 sm:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <span className="font-p-body text-xs font-semibold uppercase tracking-wider text-p-slate">
          Key brands we&rsquo;ve worked with
        </span>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex h-16 items-center justify-center rounded-md border border-dashed border-p-mist font-p-body text-xs text-p-slate/50"
            >
              Logo pending
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
