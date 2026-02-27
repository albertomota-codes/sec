# Personal Website — CLAUDE.md

This file is the living specification for this project. Every Claude session should read it first.

---

## Project Vision

A personal website with two zones:

- **10% — Personal Strip**: A compact header with basic identity info (name, role, links).
- **90% — Introspection Space**: A full-screen, single-page experience for meditation, self-reflection, and journaling. The goal is to create a calm digital space that encourages slowing down and looking inward.

The site is primarily for personal use and self-expression, not a portfolio or resume.

---

## Personal Data

> Fill in your real data here before building the PersonalStrip component.

```
Name:     [YOUR NAME]
Role:     [YOUR ROLE / TAGLINE]
GitHub:   https://github.com/albertomota-codes
LinkedIn: [YOUR LINKEDIN URL]
Email:    [YOUR EMAIL]
```

---

## Tech Stack

| Layer     | Choice         | Reason                                      |
|-----------|----------------|---------------------------------------------|
| Framework | React + Vite   | Component-based, fast dev server, good DX   |
| Styling   | Plain CSS       | Keep it simple; no framework overhead       |
| Storage   | localStorage   | Journal and mood data stays local/private   |
| Hosting   | TBD            | GitHub Pages or Vercel are both fine        |

No UI library. No CSS framework. Keep dependencies minimal.

---

## Design System

**Aesthetic:** Light & airy — clean, soft, unhurried.

```
Background:  #f9f8f6  (warm off-white)
Surface:     #ffffff  (white cards)
Text:        #2c2c2c  (near-black)
Accent:      #a8c5b5  (muted sage green)
Muted:       #9a9a8e  (warm gray for secondary text)

Font:        System serif (Georgia, serif) for prompts and headings
             System sans (Inter, sans-serif) for UI elements

Transitions: slow, ease-in-out — nothing abrupt
Shadows:     soft, very low opacity
Border radius: generous (12–16px)
```

**Principles:**
- No noise. No clutter. Generous whitespace.
- Interactions should feel gentle, never jarring.
- The UI should recede — the content and reflection are center stage.

---

## Layout

```
┌──────────────────────────────────────────────────────┐
│  Alberto Mota  ·  Developer        [GH] [LI] [Email] │  ← ~8–10vh
├──────────────────────────────────────────────────────┤
│                                                      │
│         [ Breathe ]  [ Journal ]  [ Mood ]           │  ← tab nav
│                                                      │
│                  < active feature >                  │
│                                                      │
│                                                      │  ← ~90–92vh
└──────────────────────────────────────────────────────┘
```

Navigation between the three features should be subtle — minimal tabs or soft icon buttons. No sidebar.

---

## Features (MVP)

### 1. Guided Breathing
- Animated circle that expands/contracts with a breath cycle
- Default cycle: 4s inhale → 4s hold → 6s exhale
- Text cue ("breathe in", "hold", "breathe out") overlaid on the circle
- Optional: user can adjust timing

### 2. Daily Journal Prompt
- One thoughtful, rotating question per day (seeded by date)
- Large, quiet text area for writing
- Auto-saved to `localStorage` keyed by date
- Past entries accessible (simple date picker or list)
- Prompt examples:
  - "What am I avoiding right now?"
  - "What am I grateful for that I usually overlook?"
  - "What would I do today if I weren't afraid?"
  - "What do I need to let go of?"

### 3. Mood Tracker
- Simple daily check-in: pick a mood from a small set (5–7 options)
- Stored in `localStorage` with date
- Optional: a short note field alongside the mood
- Over time: a gentle visual history (e.g., subtle color dots on a calendar)

---

## File Structure (planned)

```
sec/
├── CLAUDE.md              ← this file
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx            ← root layout (PersonalStrip + main area)
    ├── App.css
    ├── components/
    │   ├── PersonalStrip.jsx   ← top 10% identity header
    │   ├── Breathing.jsx       ← guided breathing feature
    │   ├── JournalPrompt.jsx   ← daily journal feature
    │   └── MoodTracker.jsx     ← mood check-in feature
    └── data/
        └── prompts.js          ← array of journal prompts
```

---

## Dev Commands

```bash
npm install          # install dependencies
npm run dev          # start dev server (localhost:5173)
npm run build        # production build → dist/
npm run preview      # preview production build
```

---

## Git

- Main development branch: `claude/personal-website-meditation-lRnA5`
- Commit messages should be descriptive and in English
- Do not push to `master` directly

---

## Future Ideas (not MVP)

> Parking lot for ideas that come up but aren't ready yet.

- Ambient sound toggle (rain, white noise, silence)
- A "letter to future self" feature
- Weekly reflection summary
- Custom journal prompt input
- Subtle background animations (slow gradient shift, particles)
- Export journal entries as plain text or markdown
- Dark mode toggle (warm dark, not harsh)
