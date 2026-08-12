import { useEffect, useRef, useState } from 'react'

/**
 * Renders one character as a departure-board style tile. When the
 * character changes, it replays a short flip animation via a remount key.
 */
export default function FlipDigit({ char, accent = 'gold' }) {
  const [displayChar, setDisplayChar] = useState(char)
  const [flipKey, setFlipKey] = useState(0)
  const prevChar = useRef(char)

  useEffect(() => {
    if (prevChar.current !== char) {
      prevChar.current = char
      setDisplayChar(char)
      setFlipKey((k) => k + 1)
    }
  }, [char])

  return (
    <span className={`flip-tile flip-tile--${accent}`} aria-hidden="true">
      <span key={flipKey} className="flip-tile__face">
        {displayChar}
      </span>
    </span>
  )
}
