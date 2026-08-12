import FlipDigit from './FlipDigit.jsx'

function toDigits(value, minLength = 2) {
  return String(value).padStart(minLength, '0').split('')
}

function DigitGroup({ value, minLength, accent }) {
  const digits = toDigits(value, minLength)
  return (
    <span className="digit-group">
      {digits.map((d, i) => (
        <FlipDigit key={i} char={d} accent={accent} />
      ))}
    </span>
  )
}

const UNITS = [
  { key: 'days', shortLabel: 'DAYS', minLength: 2 },
  { key: 'hours', shortLabel: 'HRS', minLength: 2 },
  { key: 'minutes', shortLabel: 'MIN', minLength: 2 },
  { key: 'seconds', shortLabel: 'SEC', minLength: 2 },
]

export default function Countdown({ remaining, accent = 'gold' }) {
  const srSummary = `${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds remaining`

  return (
    <div className="countdown">
      <div className="countdown__units">
        {UNITS.map(({ key, shortLabel, minLength }) => (
          <div className="countdown__unit" key={key}>
            <DigitGroup value={remaining[key]} minLength={minLength} accent={accent} />
            <span className="countdown__unit-label">{shortLabel}</span>
          </div>
        ))}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {srSummary}
      </p>
    </div>
  )
}
