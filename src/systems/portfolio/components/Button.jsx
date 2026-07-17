const variants = {
  // Amethyst (p-current) is too light for white text to meet contrast — pair it with dark ink text instead.
  primary: 'bg-p-current text-p-current-ink hover:bg-p-current/90',
  outline: 'border border-white/30 text-white hover:bg-white/10',
  dark: 'bg-p-depth text-white hover:bg-p-depth/90',
}

const shared =
  'inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-3.5 font-p-body text-sm font-semibold transition-colors duration-200 motion-safe:active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-p-current focus-visible:ring-offset-2 focus-visible:ring-offset-p-depth'

export default function Button({
  variant = 'primary',
  className = '',
  href,
  children,
  ...props
}) {
  const classes = `${shared} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
