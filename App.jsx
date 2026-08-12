import { EXAMS } from './lib/time.js'
import { useCountdown } from './hooks/useCountdown.js'
import TicketCard from './components/TicketCard.jsx'
import BackgroundFX from './components/BackgroundFX.jsx'
import Footer from './components/Footer.jsx'

const [testExam, sscExam] = EXAMS

export default function App() {
  const testRemaining = useCountdown(testExam.targetISO)
  const sscRemaining = useCountdown(sscExam.targetISO)

  return (
    <div className="page">
      <BackgroundFX />

      <main className="page__content">
        <header className="hero">
          <span className="hero__eyebrow">BANGLADESH · UTC+6</span>
          <h1 className="hero__title">SSC Countdown</h1>
          <p className="hero__subtitle">
            Every second, counted down — from today to the Test Exam, and on to SSC 2027.
          </p>
        </header>

        <div className="tickets">
          <TicketCard
            eyebrow={testExam.label}
            title="Test Exam"
            dateLabel={testExam.dateLabel}
            remaining={testRemaining}
            completedMessage={testExam.completedMessage}
            accent="amber"
            size="normal"
          />

          <TicketCard
            eyebrow={sscExam.label}
            title="SSC Exam 2027"
            dateLabel={sscExam.dateLabel}
            remaining={sscRemaining}
            completedMessage={sscExam.completedMessage}
            accent="gold"
            size="hero"
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
