import { useEffect } from 'react'
import useDelayedUnmount from '../hooks/useDelayedUnmount.js'

const TRANSITION_MS = 200

// Generic backdrop + dialog shell with a fade/scale transition on open and close.
// Used by RedeemModal, CampaignDashboardModal, and the quiz/raffle campaign sites.
export default function Modal({ isOpen, onClose, labelledBy, className = '', children }) {
  const shouldRender = useDelayedUnmount(isOpen, TRANSITION_MS)

  useEffect(() => {
    if (!isOpen) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  if (!shouldRender) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-r-ink/50 p-4 transition-opacity ease-out motion-reduce:transition-none ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDuration: `${TRANSITION_MS}ms` }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose?.()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={`transition-all ease-out motion-reduce:transition-none ${
          isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-3 scale-95 opacity-0'
        } ${className}`}
        style={{ transitionDuration: `${TRANSITION_MS}ms` }}
      >
        {children}
      </div>
    </div>
  )
}
