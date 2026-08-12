# SSC Countdown

A premium, mobile-first countdown dashboard for two exam milestones, tracked in Bangladesh Standard Time (UTC+6):

- **Test Exam** — 28 October 2026
- **SSC Exam 2027** — 7 January 2027

Built with React + Vite, plain CSS (no framework/backend needed), fully client-side.

## Run it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

To build the production bundle and preview it:

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: SSC Countdown"
git branch -M main
git remote add origin https://github.com/<your-username>/ssc-countdown.git
git push -u origin main
```

(Create the empty `ssc-countdown` repository on GitHub first, or use `gh repo create` if you have the GitHub CLI.)

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the `ssc-countdown` GitHub repo.
2. Vercel auto-detects the **Vite** framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Click **Deploy**. No environment variables are needed.
4. You'll get a live URL like `https://ssc-countdown.vercel.app` (or `https://ssc-countdown-<hash>.vercel.app` depending on name availability).

Every future `git push` to `main` redeploys automatically.

## Changing the exam dates

Edit `src/lib/time.js` — each exam has a `targetISO` string with an explicit `+06:00` offset, so the countdown stays accurate in BST regardless of the visitor's own timezone.

## Project structure

```
src/
  lib/time.js            exam config + remaining-time math
  hooks/useCountdown.js  live per-second countdown hook
  components/
    TicketCard.jsx        admit-card styled container (signature visual motif)
    Countdown.jsx          days/hours/minutes/seconds unit groups
    FlipDigit.jsx           single split-flap style digit tile
    BackgroundFX.jsx        ambient CSS-only background glow
    Footer.jsx
  App.jsx
  index.css                design tokens + all styling
```
