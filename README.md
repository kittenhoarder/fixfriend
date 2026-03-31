# FIXFriend — Strategic Fit Brief

A single-page interactive web application presenting the strategic-fit thesis
for FIXFriend: a venue-first change-response control layer for European
electronic trading firms.

## Purpose

Presents the startup as a discovery-led strategic-fit opportunity: thesis,
market, product, and acquirer landscape in an interactive deal-room format for
investors and potential acquirers.

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

The site supports separate passwords for the two portals:

- `VITE_GATE_PASSWORD` for the Raidical / main portal
- `VITE_GATE_PASSWORD_ACQUIRER` for the acquirer portal

Set either or both in a **`.env`** file in the project root. Restart the dev server after changing `.env`.

## Content Flow

All factual content (dates, figures, company details, regulatory language) is
sourced from `fixfriend_artifacts.md`.

The component import surface and content source of truth are now portal-scoped:

- `src/content/raidical/*`
- `src/content/acquirer/*`

Do not add new component imports directly from the legacy aggregate files:

- `src/data/content.js`
- `src/acq/content.js`

Those aggregate files are now compatibility barrels only. Keep new content edits
and section wiring in `src/content/*`.

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

Single-page app with tab-based navigation (no router). All content is static:
no API calls and no backend.

The app is now organized into three layers:

- `src/features/*` for portal-specific app shells and section registries
- `src/shared/*` for gate/theme/transition logic and reusable UI glue
- `src/content/*` for portal-scoped content imports

Section loading is lazy by registry, and the heaviest walkthrough / graph /
download flows are split out of the initial main bundle.

```
src/
  main.jsx
  App.jsx                       # Compatibility re-export to features/raidical
  features/
    raidical/
      RaidicalApp.jsx
      registry.js
    acquirer/
      AcquirerApp.jsx
      AcquirerHeader.jsx
      registry.js
  shared/
    gate/                       # Dual-portal password helpers
    navigation/                 # Section transition hook
    portal/                     # Portal config + lazy section renderer
    theme/                      # Shared persisted theme hook
    ui/                         # Shared lazy wrappers and loading states
  content/
    raidical/                   # Portal-scoped source-of-truth content
    acquirer/
  components/
    Sidebar.jsx
    sections/                   # Raidical section implementations
    market/
    acquirers/
  acq/
    sections/                   # Acquirer portal sections
```

## Testing

```bash
npm run lint
npm run test:run
npm run build
```

Current automated coverage focuses on:

- dual-portal gate behavior
- shared theme and transition utilities
- registry smoke renders for both portals

## Rollback

This is a static single-page app. Rollback via `git revert <commit>`.

## Versioning

Follow Semantic Versioning (vMAJOR.MINOR.PATCH) for releases.
Current: v0.1.0 (pre-release).
