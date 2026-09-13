# Handoff: Urgent Care Page (`/urgent-care`)

## Overview

A new top-level marketing page for **Alliance Medical Clinic** (Portage, MI) covering urgent care. It has three content sections between the site's existing chrome:

```
TopBar  (existing shared component)
Navbar  (existing shared component)

1. Urgent Care Hero
2. Common Conditions We Treat
3. Quick. Convenient. Trusted Care. (CTA panel)

Footer  (existing shared component)
```

The page is also introduced into the primary navigation as a new top-level item (see **Routing & Navigation**).

## About the Design Files

The files in this bundle are **design references created in HTML** — a prototype showing the intended look and behavior, not production code to copy.

The task is to **recreate this design inside the existing `alliance_medical_center` codebase** (React 18 + TypeScript + Vite + Tailwind + react-router-dom + react-i18next), using its established patterns: shared layout components, `tailwind.config.ts` tokens, the `src/components/icons` set, the `src/i18n` locale files, and the existing section-folder convention under `src/sections/`.

**Do not** port the inline styles from the prototype. Every value in this README maps to an existing Tailwind token or a token you should add to `tailwind.config.ts`.

Specifically, reuse and do not recreate:

- `src/components/layout/TopBar`
- `src/components/layout/Navbar`
- `src/components/layout/Footer`
- `src/components/layout/MobileChrome/*` (MobileUtilityStrip, MobileHeader, MobileActionBar)
- `src/components/layout/Container`

The prototype hand-reproduces these components because it is a single static HTML file; in the codebase they already exist and must be imported, exactly as `ContactPage.tsx` and `UrgentCarePage.tsx` do today.

## Fidelity

**High-fidelity.** Colors, typography, spacing, imagery, animation timings and responsive breakpoints are final. Recreate pixel-for-pixel using the codebase's tokens and components.

Two caveats:

1. The hero is composed from **two supplied PNG assets** (a decorative frame and the clinic photo) layered in a precise stacking order. This composition is load-bearing — see **Hero layering** below.
2. The eight condition icons are **supplied PNG assets**, not icons from `src/components/icons`. Use the PNGs as shipped.

---

## Screens / Views

### Screen: Urgent Care page

**Name:** Urgent Care
**Route:** `/urgent-care` (and `/es/urgent-care`)
**Purpose:** Explain same-day urgent care, list the conditions treated, and drive the visitor to book an appointment.

**Page-level layout**

- Content column: `width: min(1320px, calc(100% - 64px))`, centered (`margin: 0 auto`).
  This matches the existing `Container` component — use `Container` rather than re-implementing it.
- Page background: `#FFFFFF` throughout. No section uses an alternate background color; the pale blue (`#E3F2FD`) appears only on cards and the CTA panel.
- Body font: **Lato** (400/500/600/700). Headings: **Playfair Display** 700. Both already loaded by the project.

---

### Section 1 — Urgent Care Hero

**Purpose:** Establish the page, carry the primary CTA.

#### Hero layering

The hero is a single `position: relative` section at a **fixed aspect ratio of `1672 / 941`** (the frame asset's native ratio). Three layers, bottom to top:

| z-index | Layer | Notes |
|---|---|---|
| 0 | Section base | `background: #FFFFFF` |
| 10 | `uc-clinic.png` — clinic photo | Absolutely positioned; see numbers below |
| 20 | `uc-hero-frame.png` — decorative frame | `position: absolute; inset: 0; width: 100%; height: 100%;` `pointer-events: none`, `aria-hidden="true"`, empty `alt` |
| 30 | HTML content grid | Real text/CTA, left column |

**Critical:** the two images must stay **separate assets in the code** — do not flatten them into one composite. The frame is opaque everywhere except an organic opening on the right; the clinic photo sits *behind* it and shows through that opening. The frame's opacity does the cropping, so **do not** add `border-radius`, `clip-path`, a CSS mask, or any new decorative shape around the photo.

**Clinic photo placement** (percentages of the hero section box, verified to fill ~91% of the frame's opening with zero leak outside the frame silhouette):

```
position: absolute;
z-index: 10;
left: 49.5%;
top: 8%;
width: 52%;
height: auto;   /* the asset is square, 1242×1242 */
```

These three numbers (`left`, `top`, `width`) are the only knobs controlling the fit. If the photo is ever replaced, re-tune them — the opening's measured bounding box is `left 49.8%, top 9.8%, width 49.0%, height 83.8%` of the section.

Do not introduce a background color behind the photo inside the opening, and preserve both PNGs' transparency (`uc-hero-frame.png` is 28.9% fully transparent).

#### Hero content grid (z-30)

```
position: absolute; inset: 0;
margin: 0 auto;
width: min(1320px, calc(100% - 64px));
display: grid;
grid-template-columns: minmax(0, 44%) minmax(0, 1fr);
align-items: center;
gap: 56px;
```

The right grid cell is intentionally empty (`aria-hidden`) — it reserves space so the left text column does not run over the clinic photo. Content is **left aligned**; never centered.

Left column children, in order:

**1. Eyebrow** — flex row, `align-items: center`, `gap: 12px`
- Rule: `<span>`, `height: 2px`, `width: 26px`, `background: #1976D2`, `aria-hidden`
- Label: text `Urgent Care` — `font-size: 12.5px`, `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 1.6px`, `color: #1976D2`

**2. Heading (`<h1>`)** — `margin-top: 14px`
- `font-family: 'Playfair Display', Georgia, serif`
- `font-size: clamp(40px, 4.4vw, 58px)`
- `font-weight: 700`, `line-height: 1.06`, `letter-spacing: -1.6px`
- `color: #0D47A1`, `text-wrap: pretty`
- Copy, with this exact line break:
  ```
  When You
  Need Care Now
  ```
  `Now` is wrapped in a `<span style="color: #1976D2">` (Alliance primary blue).

**3. Description (`<p>`)** — `margin-top: 20px`, `max-width: 460px`
- `font-size: 17.5px`, `line-height: 1.7`, `color: #424242`, `text-wrap: pretty`
- Copy: `Fast, compassionate care for non-emergency medical needs — with shorter wait times.` (em dash, verbatim)

**4. Quick-info row** — `margin-top: 28px`, `display: flex`, `flex-wrap: wrap`, `align-items: center`, `gap: 28px`

Three items, each a flex row with `gap: 11px`:

| Icon asset | Label (with line break) |
|---|---|
| `uc-icon-walkins.png` | `Walk-ins` / `Welcome` |
| `uc-icon-hours.png` | `Extended` / `Hours` |
| `uc-icon-allages.png` | `All Ages` / `(6 months+)` |

- Icon: `height: 42px; width: 42px; flex-shrink: 0;` `alt=""`, `aria-hidden="true"`
- Label: `font-size: 15px`, `font-weight: 600`, `line-height: 1.3`, `color: #424242`

**5. Primary CTA (`<a href="/book-appointment">`)** — `margin-top: 32px`

```
display: inline-flex; height: 56px; align-items: center; justify-content: center;
gap: 12px; border-radius: 10px; padding: 0 34px;
background: #1976D2; color: #FFFFFF;
font-size: 16.5px; font-weight: 600; text-decoration: none;
box-shadow: 0 8px 20px rgba(25,118,210,0.16);
transition: background-color 250ms ease, transform 200ms ease, box-shadow 250ms ease;
```
Hover: `background: #0D47A1; transform: translateY(-1px); box-shadow: 0 12px 25px rgba(13,71,161,0.22);`

- Label: `Get Urgent Care`
- Trailing arrow: 17×17 `ArrowRightIcon` (already in `src/components/icons`), `currentColor`, `stroke-width: 2`

This is the same button treatment as the existing "Book Appointment" CTA at a larger size — reuse the existing button component/pattern if one exists.

---

### Section 2 — Common Conditions We Treat

`padding: 20px 0 70px`, background `#FFFFFF`.

**Heading (`<h2>`)** — centered
- Playfair Display 700, `font-size: clamp(30px, 3vw, 40px)`, `line-height: 1.2`, `letter-spacing: -1px`, `color: #0D47A1`
- Copy: `Common Conditions We Treat`

**Grid** — `margin-top: 34px`, `display: grid`, `grid-template-columns: repeat(4, minmax(0, 1fr))`, `gap: 22px`

**Card** (×8, identical):
```
display: flex; flex-direction: column; align-items: center;
gap: 20px;
border-radius: 10px;
background: #E3F2FD;
padding: 28px 20px;
transition: transform 220ms ease, box-shadow 220ms ease;
```
Hover: `transform: translateY(-3px); box-shadow: 0 12px 30px rgba(13,71,161,0.07);`

No border. No white circle behind the icon — the icon sits directly on the pale blue card.

- Icon: `height: 104px; width: 104px; flex-shrink: 0;` `alt=""`, `aria-hidden="true"`
- Label: `font-size: 16px`, `font-weight: 600`, `color: #424242`

Cards in order:

| # | Icon asset | Label |
|---|---|---|
| 1 | `cond-cold-flu.png` | Cold & Flu |
| 2 | `cond-strep-throat.png` | Strep Throat |
| 3 | `cond-ear-infections.png` | Ear Infections |
| 4 | `cond-minor-injuries.png` | Minor Injuries |
| 5 | `cond-allergies.png` | Allergies |
| 6 | `cond-skin-conditions.png` | Skin Conditions |
| 7 | `cond-utis.png` | UTIs |
| 8 | `cond-and-more.png` | And More |

The labels are decorative-icon + text pairs; the icons carry no information the label doesn't, hence `aria-hidden`.

---

### Section 3 — Quick. Convenient. Trusted Care. (CTA panel)

Section `padding: 0 0 80px`, background `#FFFFFF`. One panel inside the content column:

```
position: relative; overflow: hidden;
display: grid;
grid-template-columns: auto minmax(0, 1fr) auto;
align-items: center;
gap: 40px;
border-radius: 20px;
background: #E3F2FD;
padding: 48px 52px;
```

**Decorative glow** (first child, `aria-hidden`, `pointer-events: none`):
```
position: absolute; right: -80px; bottom: -140px;
height: 320px; width: 320px; border-radius: 9999px;
background: radial-gradient(circle, rgba(25,118,210,0.08), transparent 70%);
```

**Column 1 — clock mark:** 104×104 box, `color: #1976D2`, containing a 96×96 `ClockIcon` (`src/components/icons/ClockIcon.tsx`), `stroke-width: 1.4`.

**Column 2 — copy:**
- `<h2>` Playfair Display 700, `font-size: clamp(26px, 2.6vw, 34px)`, `line-height: 1.2`, `letter-spacing: -0.8px`, `color: #0D47A1`. Copy with this line break:
  ```
  Quick. Convenient.
  Trusted Care.
  ```
- `<p>` `margin-top: 14px`, `max-width: 420px`, `font-size: 16.5px`, `line-height: 1.7`, `color: #424242`. Copy: `Get the care you need, so you can get back to what matters.`

**Column 3 — CTA:** identical to the hero CTA (same size, colors, shadow, hover, `Get Urgent Care` + arrow, `href="/book-appointment"`), plus `flex-shrink: 0`.

---

## Interactions & Behavior

The page is presentational — no local state, no data fetching, no forms.

**Navigation**
- Both `Get Urgent Care` buttons → `/book-appointment` (locale-aware; use the project's `withLocale` helper via `Link`, as other pages do).
- Chrome navigation (TopBar phone/email/map links, Navbar links and dropdown, Footer links, mobile action bar) is owned by the shared components — unchanged.

**Hover states**
- CTA buttons: background `#1976D2` → `#0D47A1`, `translateY(-1px)`, deeper shadow; `250ms`/`200ms` ease.
- Condition cards: `translateY(-3px)` + `0 12px 30px rgba(13,71,161,0.07)`; `220ms` ease.
- No hover state on the hero imagery.

**Entrance animation** (subtle, on mount, no scroll triggers)

| Target | Keyframes | Timing |
|---|---|---|
| Hero text column | `opacity 0→1`, `translateX(-20px)→0` | `600ms cubic-bezier(0.22,1,0.36,1)`, no delay |
| Clinic photo | `opacity 0→1`, `scale(0.98)→1` | `700ms cubic-bezier(0.22,1,0.36,1)`, `120ms` delay |
| Frame asset | `opacity 0→1` | `700ms ease`, no delay |

Do not animate the clinic photo in any way that moves it outside the frame's opening (no translation, no scale above 1).

**Reduced motion:** `@media (prefers-reduced-motion: reduce) { * { animation-duration: 0.01ms !important; } }` — the project convention; keep it.

**Loading:** both hero images use `loading="eager"` (above the fold). Condition icons can lazy-load.

## Responsive Behavior

Breakpoints follow `tailwind.config.ts` (`md: 768`, plus the project's `mw-*` max-width screens). Desktop fidelity is the priority.

**Hero**
- `> 1000px`: as specified — fixed `1672/941` ratio, absolutely-positioned layers, 44% text column.
- `≤ 1000px`: the wide composition can't hold its proportions, so it decomposes:
  - Hero becomes `display: flex; flex-direction: column`, `aspect-ratio: auto`.
  - Frame asset: `display: none` (it only makes sense at the wide ratio).
  - Clinic photo: `position: static`, `order: 2` (below the text), `width: min(86%, 460px)`, `margin: 8px auto 0`, `border-radius: 14px` (the frame is no longer there to crop it).
  - Content grid: `position: static`, single column, `padding: 30px 0 8px`.

**Conditions grid**
- `> 1100px`: 4 columns
- `≤ 1100px`: 3 columns
- `≤ 900px`: 2 columns
- `≤ 600px`: `gap: 14px`

**CTA panel**
- `≤ 1000px`: `grid-template-columns: auto minmax(0,1fr)`, `row-gap: 28px`; the CTA moves to its own full-width row (`grid-column: 1 / -1`, `justify-self: start`).
- `≤ 600px`: single column, `padding: 32px 24px`, `gap: 20px`.

**Content gutter**
- `≤ 700px`: section content width becomes `calc(100% - 32px)` (32px gutters instead of 64px).

## State Management

None. No state variables, no effects, no data fetching. The only stateful behavior on the page belongs to the shared chrome (mobile drawer, footer accordions, services dropdown), which already exists.

## Routing & Navigation

Follow the existing conventions in `src/App.tsx` and `src/i18n/routing.ts`.

1. **Route:** add `/urgent-care` and the Spanish `/es/urgent-care` alongside the existing top-level routes (`/occupational-health`, `/contact`, …), pointing at a new `src/pages/UrgentCareLandingPage.tsx`.

   Note: a different page already exists at `/services/urgent-care` (`src/pages/UrgentCarePage.tsx`, the service-detail page). The user has stated they will reconcile the two themselves — build this as the new top-level page and leave the existing one alone.

2. **Navbar:** add `Urgent Care` as a new **top-level** nav item, positioned **immediately after `Home`** and before `Services`. Add it in `src/components/layout/Navbar/navigation.data.ts` so it appears in the desktop nav, the `≤980px` nav panel and the mobile drawer at once. Active state uses the existing `DesktopNavLink` treatment (`color: #1976D2` + 2px underline).

3. **Page component:** mirror `ContactPage.tsx` — `TopBar` + `Navbar` + `MobileUtilityStrip`/`MobileHeader`/`MobileActionBar` + sections + `Footer`, with `useDocumentMeta` for title/description.

## Localization

All copy must go through `react-i18next`, not be hardcoded. Add a new `urgentCare` namespace to `src/i18n/locales/en.ts` and its Spanish counterpart in `es.ts`, following the shape of the existing page namespaces. Strings needed:

- eyebrow: `Urgent Care`
- heading line 1: `When You`, line 2: `Need Care ` + highlighted `Now`
- description
- three quick-info labels (each with its two lines)
- CTA label: `Get Urgent Care`
- conditions heading + the eight condition labels
- CTA panel heading (two lines) + description
- `meta.title` / `meta.description` for `useDocumentMeta`

Note the heading and quick-info labels carry deliberate line breaks; handle them the way the codebase already handles multi-line headings (separate keys or a `<br />`-tolerant Trans), not with `\n`.

## Design Tokens

All values below already exist in `tailwind.config.ts` / `src/lib/theme.ts` unless noted.

**Colors**

| Value | Role |
|---|---|
| `#0D47A1` | Headings, footer background (Alliance dark blue) |
| `#1976D2` | Primary blue — CTAs, eyebrow, accents, `Now` highlight |
| `#42A5F5` | Footer tagline accent |
| `#90CAF9` | Footer chevrons, light accent |
| `#E3F2FD` | Pale blue — card + CTA panel fill |
| `#424242` | Body text |
| `#E0E0E0` | Hairline borders (chrome) |
| `#FFFFFF` | Page background, button text |
| `rgba(25,118,210,0.08)` | Decorative radial glow |
| `rgba(25,118,210,0.16)` | CTA resting shadow |
| `rgba(13,71,161,0.22)` | CTA hover shadow |
| `rgba(13,71,161,0.07)` | Card hover shadow |

**Typography**

| Role | Family | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| H1 | Playfair Display | `clamp(40px, 4.4vw, 58px)` | 700 | 1.06 | `-1.6px` |
| H2 (section) | Playfair Display | `clamp(30px, 3vw, 40px)` | 700 | 1.2 | `-1px` |
| H2 (CTA panel) | Playfair Display | `clamp(26px, 2.6vw, 34px)` | 700 | 1.2 | `-0.8px` |
| Eyebrow | Lato | 12.5px | 700 | — | `1.6px`, uppercase |
| Hero body | Lato | 17.5px | 400 | 1.7 | — |
| CTA body | Lato | 16.5px | 400 | 1.7 | — |
| Button label | Lato | 16.5px | 600 | — | — |
| Quick-info label | Lato | 15px | 600 | 1.3 | — |
| Card label | Lato | 16px | 600 | — | — |

**Spacing** — 8px-ish scale as used: `11, 12, 14, 20, 22, 28, 32, 34, 40, 48, 52, 56, 70, 80`

**Radius** — `10px` (buttons, condition cards), `14px` (mobile clinic photo), `20px` (CTA panel), `9999px` (decorative circle)

**Shadows**
- CTA rest: `0 8px 20px rgba(25,118,210,0.16)`
- CTA hover: `0 12px 25px rgba(13,71,161,0.22)`
- Card hover: `0 12px 30px rgba(13,71,161,0.07)`

**Motion** — `200ms`/`220ms`/`250ms` ease for interaction; `600ms`/`700ms` `cubic-bezier(0.22,1,0.36,1)` for entrance

## Assets

All in `assets/` in this bundle. The hero and condition icons were **supplied by the client** (AI-generated) and should be committed to `src/assets/urgent-care/` in the codebase.

| File | Size | Purpose | Notes |
|---|---|---|---|
| `uc-hero-frame.png` | 1672×941 | Hero decorative frame / mask | Transparent organic opening on the right. Use as-is; never redraw in CSS. |
| `uc-clinic.png` | 1242×1242 | Clinic entrance photo | Sits behind the frame. Square; full-bleed photo (not pre-masked) — the frame crops it. |
| `uc-icon-walkins.png` | — | Quick-info: Walk-ins Welcome | Rendered at 42px |
| `uc-icon-hours.png` | — | Quick-info: Extended Hours | Rendered at 42px |
| `uc-icon-allages.png` | — | Quick-info: All Ages | Rendered at 42px |
| `cond-*.png` (×8) | — | Condition card icons | Rendered at 104px |
| `logo.png` | — | Alliance Medical Clinic logo | Already in the codebase at `src/assets/logo.png` — do not re-add |

Icons used from the existing codebase (`src/components/icons`): `ArrowRightIcon` (CTA arrows), `ClockIcon` (CTA panel mark). The chrome's icons are owned by the shared components.

## Files

| File | What it is |
|---|---|
| `Urgent Care.dc.html` | The design prototype — the full page including a static reproduction of TopBar/Navbar/Footer. **Reference only.** |
| `assets/` | All images the prototype loads. |

Reading the prototype: the page's own content is the `<main>` element. Everything before and after `<main>` is the static reproduction of the shared chrome — ignore it and import the real components instead.

The prototype is a single self-contained HTML file with inline styles (it has no build step). Media queries live in the one `<style>` block in its `<helmet>`; they are tagged with `data-om="..."` selectors that correspond to the sections described above:

- `[data-om="hero"]`, `[data-om="hero-clinic"]`, `[data-om="hero-frame"]`, `[data-om="hero-grid"]`, `[data-om="hero-features"]`
- `[data-om="conditions-grid"]`
- `[data-om="cta-panel"]`
