import { useEffect, useRef, useState } from 'react'
import Button from './Button.jsx'

const CODE_LENGTH = 7

export default function RedeemModal({ isOpen, onClose, onSubmit }) {
  const [digits, setDigits] = useState(Array(CODE_LENGTH).fill(''))
  const inputs = useRef([])

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleChange = (index, value) => {
    const char = value.replace(/[^0-9]/g, '').slice(-1)
    const next = [...digits]
    next[index] = char
    setDigits(next)
    if (char && index < CODE_LENGTH - 1) {
      inputs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const code = digits.join('')
  const isComplete = code.length === CODE_LENGTH

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-r-ink/50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="redeem-modal-title"
        className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl"
      >
        <div className="mb-6 flex items-start justify-between">
          <div>
            <h2 id="redeem-modal-title" className="font-r-display text-xl font-extrabold text-r-ink">
              Redeem your code
            </h2>
            <p className="mt-1 font-r-body text-sm text-r-ink-muted">
              Enter the 7-digit code exactly as shown on your voucher.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-r-ink-muted transition-colors hover:bg-r-signal-tint hover:text-r-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-r-signal"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6 flex justify-between gap-1.5">
          {digits.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              inputMode="numeric"
              maxLength={1}
              aria-label={`Digit ${i + 1} of ${CODE_LENGTH}`}
              className="h-12 w-full rounded-lg border border-r-border text-center font-r-body text-lg font-semibold tabular-nums text-r-ink focus:border-r-signal focus:outline-none focus:ring-2 focus:ring-r-signal-tint"
            />
          ))}
        </div>

        <Button
          variant="primary"
          className="w-full"
          disabled={!isComplete}
          onClick={() => onSubmit?.(code)}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}
