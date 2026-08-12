// All exam instants are defined with an explicit +06:00 offset (Bangladesh
// Standard Time). Because a Date built from an ISO string with an explicit
// offset resolves to one absolute point in time (epoch milliseconds), the
// countdown is accurate no matter which timezone the visitor's device is
// set to — there is no need to re-derive BST on every tick.

export const EXAMS = [
  {
    id: 'test-exam',
    label: 'TEST EXAM',
    dateLabel: '28 October 2026',
    targetISO: '2026-10-28T00:00:00+06:00',
    completedMessage: 'The Test Exam has begun. Best of luck.',
  },
  {
    id: 'ssc-exam',
    label: 'SSC EXAM 2027',
    dateLabel: '7 January 2027',
    targetISO: '2027-01-07T00:00:00+06:00',
    completedMessage: 'The SSC Exam has begun. All the preparation leads here.',
  },
]

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR

/**
 * Returns the remaining time between now and targetISO, floored to whole
 * seconds and clamped so it never goes negative.
 */
export function getRemaining(targetISO, now = Date.now()) {
  const target = new Date(targetISO).getTime()
  const diff = Math.max(0, target - now)

  const days = Math.floor(diff / DAY)
  const hours = Math.floor((diff % DAY) / HOUR)
  const minutes = Math.floor((diff % HOUR) / MINUTE)
  const seconds = Math.floor((diff % MINUTE) / SECOND)

  return {
    totalMs: diff,
    isComplete: diff <= 0,
    days,
    hours,
    minutes,
    seconds,
  }
}
