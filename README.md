# Alliance Medical Center

A React + TypeScript recreation of the supplied design reference — a marketing site for an urgent care and family health clinic in Pontiac, Michigan. This project rebuilds the static design as a production-quality, componentized frontend while preserving its content, layout, and behavior exactly.

## Stack

- Vite
- React 18
- TypeScript (strict)
- Tailwind CSS
- React Router (client-side routing across the site's two pages)

No additional runtime libraries (icons, carousels, animation, or forms) are installed — interactions and icons are hand-built to match the source exactly.

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
    ui/        Cross-section UI primitives (currently FormField, proven reusable
               by the Book Appointment form's repeated label/error pattern)
  sections/
    home/               Page-specific sections for the Home page (see below)
    book-appointment/   Page-specific sections for the Book Appointment page
  pages/       Route-level components that compose sections (HomePage,
               BookAppointmentPage)
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

The Book Appointment page (`/book-appointment`) reuses the same **TopBar**,
**Navbar**, and **Footer**, and composes:

1. **BookingIntro** — eyebrow badge, heading, intro copy
2. **BookingForm** — two-step appointment request form (personal info, date/
   time, visit details, then optional insurance/medical info), with a
   step indicator, client-side validation, and a success/reset flow
3. **DoctorPanel** — sticky decorative photo panel (placeholder graphic; the
   supplied design reference ships no bundled photo asset for this slot)

## Routing

```text
/                  Home
/book-appointment  Book Appointment
```

React Router (`react-router-dom` v6) is used because the application now
contains two implemented pages sharing common chrome (`TopBar`, `Navbar`,
`Footer`). Every "Book Appointment" link across the site (Navbar CTA, Hero
CTA, HeroInfoCards CTA, Footer CTA) navigates to the real route via `Link`.
The shared Navbar's active-link styling is route-aware (`useLocation`) rather
than hardcoded, so "Home" is highlighted on `/` and no nav item is
force-highlighted on `/book-appointment` (its own CTA button, not a nav
link, represents that page in the shared nav data).

Because the app uses `BrowserRouter`, a production host must serve
`index.html` for any path (SPA fallback) so a direct request to
`/book-appointment` resolves correctly; Vite's dev server already does this
automatically.

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

The Book Appointment form is likewise a frontend-only demo, reproducing the
supplied booking design's behavior exactly:

- A custom calendar (no date-picker library) generated from scratch each
  render, disabling past dates and a mock "booked" pattern
  (`(day + month) % 7 === 0`).
- Time slots generated in 15-minute increments from 09:00–19:45, with every
  5th generated slot marked mock-unavailable.
- Field validation with the exact source messages, run on submit.
- A success state and a "Book Another Appointment" reset flow.

No appointment is persisted anywhere — there is no API call, database, or
email integration behind this form.

## Visual QA status

Source/CSS fidelity has been verified against the design reference section by
section, and automated build, type-check, and lint checks all pass cleanly
for both pages. Browser automation was unavailable throughout development of
both the Home page and the Book Appointment page, so no rendered visual
comparison has been performed for either. A final live browser comparison
across all target breakpoints — including the booking form's multi-step
flow, calendar, and time-slot interactions — is recommended before treating
either page as pixel-verified.
