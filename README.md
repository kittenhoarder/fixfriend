# FIXFriend — Lean Exit Thesis

A single-page interactive web application presenting the lean-exit thesis for
FIXFriend: automated protocol change-control and compliance evidence for
European electronic trading firms.

## Purpose

Presents the startup as a lean-exit opportunity: thesis, market, product, and
acquirer landscape in an interactive deal-room format for investors and
potential acquirers.

## Stack

| Tool | Version |
|------|---------|
| React | 18.3.1 |
| Vite | 5.4.14 |
| Tailwind CSS | 3.4.17 |
| Lucide React | 0.468.0 |
| PostCSS | 8.4.49 |
| Autoprefixer | 10.4.20 |

Fonts loaded from Google Fonts CDN: JetBrains Mono, DM Sans.

## Development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # preview production build
```

### Optional password gate

To require a password before entering the app, set `VITE_GATE_PASSWORD` in a **`.env`** file in the project root (Vite does not load `.env.example`). Copy the variable from `.env.example` into `.env` and set your password. Restart the dev server after changing `.env`.

## Content Integrity

All factual content (dates, figures, company details, regulatory language) is
sourced from `fixfriend_artifacts.md` and encoded in `src/data/content.js`.
Do not modify content in components directly — update `content.js` and verify
against `fixfriend_artifacts.md`.

### Critical rules

- DORA is "in application since January 2025" (not "entering force")
- EU AI Act high-risk obligations apply from "August 2026"
- FCA is a UK regulator, listed separately from EU regulators
- Limina (Arcesium deal) handles portfolio-level mandate compliance only
- ION revenue is "$2.3B+" (not "€1B+")
- SmartStream is DIFC/ICD-owned (sovereign wealth), not simply "private"
- SmartStream revenue is "~£43M" (FY2023)
- Murex revenue is "undisclosed" — do not state a specific figure
- Trading Technologies is 7RIDGE/Thoma Bravo-backed, NOT BGC Group-owned

## Sections

| Section | Description |
|---------|-------------|
| THESIS | Landing — headline, stat cards, founder CTA |
| MARKET | Interactive SVG market map with click-to-reveal node details |
| GAP | Split-screen before/after comparison of the compliance cycle |
| ACQUIRERS | Three-tier card grid with expand/collapse — 10 potential acquirers |
| DEAL FLOW | Horizontal timeline of 5 verified deals with pattern evidence |
| ABOUT | Modal overlay with founder bio (via sidebar ABOUT link) |

## Architecture

Single-page app with tab-based navigation (no router). State managed with
`useState` hooks in each section. All content is static — no API calls,
no backend. SessionStorage is used only for the optional password gate (see above).

```
src/
  App.jsx               # Root layout: sidebar + content area + modal
  data/
    content.js          # Single source of truth for all displayed content
  components/
    PasswordGate.jsx    # Optional env-gated password screen (when VITE_GATE_PASSWORD set)
    Sidebar.jsx
    AboutModal.jsx
    sections/           # One file per tab
    market/             # MarketMap + MarketDetailPanel
    acquirers/          # TierGroup + AcquirerCard
    dealflow/           # Timeline + DealDetail
```

## Rollback

This is a static single-page app. Rollback via `git revert <commit>`.

## Versioning

Follow Semantic Versioning (vMAJOR.MINOR.PATCH) for releases.
Current: v0.1.0 (pre-release).
