# AccessNow Care

A React + TypeScript recreation of the supplied AccessNow Care design reference — a marketing site for an urgent care and family health clinic in Portage, Michigan. This project rebuilds the static design as a production-quality, componentized frontend while preserving its content, layout, and behavior exactly.

## Stack

- Vite
- React 18
- TypeScript (strict)
- Tailwind CSS

No additional runtime libraries (routing, icons, carousels, animation, or forms) are installed — interactions and icons are hand-built to match the source exactly.

## Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm 10+

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Type checking

```bash
npx tsc --noEmit
```

## Linting

```bash
npm run lint
```

## Project structure

```text
src/
  components/
    icons/     Individual SVG icon components (typed, no icon library)
    layout/    Shared chrome used across the whole site: TopBar, Navbar, Footer
    ui/        Reserved for cross-section UI primitives (none proven reusable yet —
               each section currently keeps its own local styling for fidelity)
  sections/
    home/      Page-specific sections for the Home page (see below)
  pages/       Route-level components that compose sections (currently HomePage)
  hooks/       Shared React hooks (carousel state, scroll state)
  lib/         Shared constants (clinic contact info, hours, addresses, links)
  styles/      Global Tailwind entry point
```

Each section/component folder follows the same pattern: a component file, a
`.types.ts` file for its props/data shapes, a `.data.ts` file for typed content
where the section has repeated content, and an `index.ts` barrel export.

## Page structure

The Home page (`/`) composes the following sections in order:

1. **TopBar** — contact/hours info bar, collapses on scroll
2. **Navbar** — sticky primary navigation with dropdowns and mobile menu
3. **Hero** — autoplaying 3-slide carousel with heading, copy, and CTA
4. **HeroInfoCards** — three cards overlapping the Hero/Services boundary
5. **Services** — 8-item service grid
6. **About** — clinic overview with stats panel
7. **Care** — audience/condition cards flanking a center illustration
8. **Team** — 6-member team carousel
9. **AppointmentReferral** — inline referral form panel
10. **ReachUs** — map, contact details, hours, and directions/call actions
11. **Footer** — newsletter signup, site links, contact info, legal bar

## Routing status

- `/` — implemented (the only page in the supplied design)
- `/book-appointment` — reserved for a future page; every "Book Appointment"
  link in the UI points here, but the route is **not currently mounted**

React Router is intentionally not installed. The supplied design contains only
one implemented page, so adding a router now would be unused infrastructure —
it will be introduced when a second real page (such as the booking page) is
actually built.

## Design reference

The `design/` directory contains the original static HTML design supplied as
the source of truth for this rebuild. It is **read-only reference material**,
not part of the application — nothing in `src/` imports from it, and it is
not modified by this project. `design/images/bonus-assets/` contains an
unused supplementary photo of the clinic building; it is not referenced
anywhere in the design and is not used anywhere in the rendered website.

## Forms

The Appointment Referral and Newsletter forms reproduce the supplied design's
client-side-only demo behavior exactly (inline success/error messaging, basic
empty-value handling, form reset on success). Neither form is connected to a
backend, email provider, or API — submitting either form only updates local
component state.

## Visual QA status

Source/CSS fidelity has been verified against the design reference section by
section, and automated build, type-check, and lint checks all pass cleanly.
Browser automation was unavailable throughout development, so no rendered
visual comparison has been performed. A final live browser comparison across
all target breakpoints is recommended before treating this as pixel-verified.
