import Countdown from './Countdown.jsx'

export default function TicketCard({
  eyebrow,
  title,
  dateLabel,
  remaining,
  accent = 'gold',
  size = 'normal',
  completedMessage,
}) {
  const sizeClass = size === 'hero' ? 'ticket--hero' : 'ticket--normal'

  return (
    <section className={`ticket ticket--${accent} ${sizeClass}`} aria-label={title}>
      <header className="ticket__header">
        <span className="ticket__eyebrow">{eyebrow}</span>
        <h2 className="ticket__title">{title}</h2>
        <span className="ticket__date">{dateLabel}</span>
      </header>

      <div className="ticket__divider" role="presentation">
        <span className="ticket__divider-line" />
        <span className="ticket__divider-dot" />
        <span className="ticket__divider-line" />
      </div>

      <div className="ticket__body">
        {remaining.isComplete ? (
          <p className="ticket__complete">{completedMessage}</p>
        ) : (
          <Countdown remaining={remaining} accent={accent} />
        )}
      </div>

      <div className="ticket__stub" aria-hidden="true">
        <span className="ticket__stub-text">
          {eyebrow} · {size === 'hero' ? 'MAIN GOAL' : 'NEXT UP'}
        </span>
        <span className="ticket__barcode" />
      </div>
    </section>
  )
}
