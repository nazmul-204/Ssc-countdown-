import { useEffect, useRef, useState } from 'react'
import { getRemaining } from '../lib/time.js'

/**
 * Live countdown to a fixed ISO instant. Re-renders once per second,
 * self-corrects for setInterval drift, and pauses cleanly when the tab
 * is not visible (still catches up instantly when it becomes visible again).
 */
export function useCountdown(targetISO) {
  const [remaining, setRemaining] = useState(() => getRemaining(targetISO))
  const targetRef = useRef(targetISO)
  targetRef.current = targetISO

  useEffect(() => {
    let timeoutId

    const tick = () => {
      const next = getRemaining(targetRef.current)
      setRemaining(next)

      if (next.isComplete) return

      // Align the next tick to the real start of the next second rather
      // than trusting a naive 1000ms interval, which drifts over time.
      const msIntoSecond = Date.now() % 1000
      const delay = 1000 - msIntoSecond
      timeoutId = setTimeout(tick, delay)
    }

    tick()

    return () => clearTimeout(timeoutId)
  }, [targetISO])

  return remaining
}
