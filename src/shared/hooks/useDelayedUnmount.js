import { useEffect, useState } from 'react'

// Keeps a node mounted for `duration` ms after `isVisible` goes false,
// so a CSS exit transition has time to play before removal.
export default function useDelayedUnmount(isVisible, duration) {
  const [shouldRender, setShouldRender] = useState(isVisible)

  useEffect(() => {
    let timer
    if (isVisible) {
      setShouldRender(true)
    } else {
      timer = setTimeout(() => setShouldRender(false), duration)
    }
    return () => clearTimeout(timer)
  }, [isVisible, duration])

  return shouldRender
}
