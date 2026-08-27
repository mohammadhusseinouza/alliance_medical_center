# Handoff: Urgent Care Service Page (AccessNow Care)

## Overview
A service detail page for AccessNow Care's Urgent Care offering. It sits one level below the homepage: shared top header + sticky navbar, a shallow page hero with breadcrumb, a two-column body (sticky service sidebar + main content), and the shared site footer. The page explains what urgent care covers, what is included in a visit, and answers common patient questions via an accordion.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase's existing environment** (React, Next.js, Vue, WordPress theme, etc.) using its established components, routing, and styling patterns. If no environment exists yet, pick the most appropriate framework for the project and implement the designs there.

`Urgent Care.dc.html` uses a small in-house template runtime (`support.js`) and inline styles. Do not port that runtime — read the markup and styles as a spec and rebuild with the codebase's own component model and CSS approach.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, and interaction states are final and specified below. Recreate pixel-accurately using the codebase's existing libraries where they match; substitute equivalents (e.g. an existing Accordion) only if the visual result is identical.

Images are **placeholders** (drag-and-drop slots). Real photography must be supplied by the client; see Assets.

---

## Screens / Views

### 1. Top header (shared, homepage-identical)
**Purpose:** Brand identity plus at-a-glance clinic info.

- Container: `background #FFFFFF`, inner `max-width 1660px`, `min-height 96px`, `padding 16px 60px`, flex row, `space-between`, `align-items:center`, `flex-wrap:wrap`, `gap 16px`.
- **Logo group** (links to homepage): 32×38 two-path leaf SVG (outer stroke `#8BC59A`, inner stroke `#1D6778`, `stroke-width 2.4`, round caps/joins) + text stack, `gap 10px`.
  - "AccessNow Care" — 20px / 700 / `#29364A`
  - "URGENT CARE & FAMILY HEALTH" — 10.5px / 600 / `#5B9A5E` / `letter-spacing 0.4px`
  - Stack `line-height 1.15`; both lines `white-space: nowrap`.
- **Info blocks** — flex row, `gap 40px`. Three blocks, each = 44×44 circle (`border 1.5px solid #1D6778`, `border-radius 50%`, centered 19–20px stroked icon `#1D6778`, `stroke-width 1.8`) + two-line text stack (`gap 12px`, `line-height 1.3`):
  1. Clock icon — "Open 7 Days" / "12:00 PM - 8:00 PM"
  2. Phone icon — "(269) 321-4774" / "info@accessnowcare.com"
  3. Map-pin icon — "8145 Valleywood Lane" / "Portage, MI 49024"
  - Line 1: 15px / 600 / `#29364A`. Line 2: 13px / 400 / `#8A97A3`.
- **Scroll behavior:** when `window.scrollY > 80` the whole header collapses — `max-height 160px → 0`, `opacity 1 → 0`, `overflow:hidden`, transition `max-height 280ms ease, opacity 220ms ease`.

### 2. Navbar (shared, sticky)
**Purpose:** Primary navigation; marks Urgent Care as the current page.

- Row: `position:sticky; top:0; z-index:1000`, `height 64px`, inner `max-width 1660px`, `padding 0 60px`, `border-top` and `border-bottom` `1px solid #EEEEEE`.
- Background `#FFFFFF`; when scrolled, `rgba(255,255,255,0.98)` (transition `background 220ms ease`).
- **Links** — flex, `gap 28px`, 15px / 500 / `#27354A`, `padding 10px 0`, no underline, `white-space: nowrap`.
  Order: Home · Urgent Care · Family Medicine/Wellness · Weight Loss · Educate Yourself · Contact · Careers · Book Appointment.
  - Active item (Urgent Care): color `#155D72` + persistent 2px underline `#176477` at `bottom:-13px`, inset 10px each side.
  - Hover: `background #EAF3F4`, color `#155D72`, `border-radius 6px`, hit padding `8px 10px` with `margin 0 -10px`; transition `background/color 0.2s ease`.
  - Underline animates via `transform: scaleX(0 → 1)`, origin left, `0.25s ease`.
- **CTA** "Book Appointment": `min-width 190px`, `height 44px`, `padding 0 22px`, `background #216979`, `#FFFFFF`, `border-radius 8px`, 14.5px / 600, `box-shadow 0 4px 8px rgba(0,0,0,0.16)`. Hover: `background #1A5560`, `translateY(-1px)`, `box-shadow 0 6px 14px rgba(18,63,72,0.22)`; transition `0.25s / 0.2s ease`.
- **Mobile (≤980px):** desktop links and CTA hidden; 44×44 hamburger button appears (24px icon, stroke `#27354A`, `stroke-width 2.2`), toggling to an X when open. Panel: full-width `#FFFFFF`, `border-top 1px solid #EDF1F2`, `box-shadow 0 16px 32px rgba(18,63,72,0.12)`, `padding 14px 24px 24px`; each link `padding 16px 4px`, 17px / 600, divider `1px solid #F0F3F4`. Entry animation `anc-mobile-fade` 0.25s ease (opacity 0→1, `translateY(-10px → 0)`).

### 3. Page hero
**Purpose:** Establishes page identity and location in the site.

- Section: `min-height 250px`, `overflow:hidden`, background `linear-gradient(90deg,#F1F9FB 0%,#EAF5F8 55%,#E6F3F6 100%)`.
- Decorative circle: 320×320, `border-radius 50%`, `rgba(11,137,149,0.06)`, positioned `left:-90px; bottom:-120px`.
- Inner: `width min(1320px, 100% - 64px)`, centered, `display:grid; grid-template-columns:1fr 1fr; gap 36px; align-items:center`.
- **Left column** (`padding 38px 0`):
  - H1 "Our Services" — `clamp(36px, 4.2vw, 52px)` / 700 / `line-height 1.08` / `letter-spacing -1.4px` / `#10264A`.
  - Breadcrumb (`margin-top 14px`, flex, `gap 10px`, wrap): 13px / 600 / `letter-spacing 0.5px` / uppercase / `#5B7085`. Items: home icon + "Home" (links to homepage) › "Services" › "Urgent Care" (`#0B8995`). Chevrons 13px, stroke `#9DB0BF`, `stroke-width 2.2`.
- **Right column:** full-bleed image slot, `min-height 250px`, no radius.

### 4. Body grid
- `width min(1320px, 100% - 64px)`, centered, `padding 46px 0 80px`.
- `display:grid; grid-template-columns: 280px minmax(0,1fr); gap 40px; align-items:start`.

#### 4a. Sidebar (sticky, `top: 84px`, column flex, `gap 24px`)
**Service list card:** `border-radius 16px`, `background #F7FAFB`, `border 1px solid #E3ECEF`, `padding 14px`.
- Label "OUR SERVICES" — `padding 6px 8px 12px`, 12px / 700 / `letter-spacing 0.8px` / uppercase / `#0B8995`.
- Items (flex column, `gap 8px`), each a link row: `padding 13px 15px`, `border-radius 10px`, `space-between`, label 15px / 600, trailing chevron 16px `stroke-width 2.2`.
  - Default: `background #FFFFFF`, `border 1px solid #E4EBEE`, text `#10264A`. Hover: `background #F1F8F9`, chevron `translateX(3px)` (`200ms ease`).
  - Active (Urgent Care): `background #0B8995`, `border 1px solid #0B8995`, text `#FFFFFF`; hover keeps the teal fill.
  - Items: Urgent Care · Family Health · Occupational Health · Women's Health · Pediatric Care · Diagnostic Services.

**CTA card:** `border-radius 16px`, `overflow:hidden`, `background linear-gradient(160deg,#0E5C69 0%,#0B8995 100%)`, text `#FFFFFF`.
- Content `padding 26px 24px 20px`.
- H3 "Ready To Get Expert Care?" — 22px / 700 / `line-height 1.2` / `letter-spacing -0.4px`.
- Paragraph — `margin-top 10px`, 14.5px / `line-height 1.6` / `rgba(255,255,255,0.82)`: "Same-day urgent care, walk-ins welcome. Our team is here when you need us."
- Button "Book Appointment" — `height 44px`, `padding 0 20px`, `border-radius 8px`, `background #FFFFFF`, text `#0B5F6B` 14.5px / 700, trailing arrow icon 15px; same hover treatment as the navbar CTA.
- Below: 280px-tall portrait image slot, full-bleed to the card edges.

#### 4b. Main column (`min-width: 0`)
1. **Feature image** — full width, `aspect-ratio 16/8`, `border-radius 16px`, `overflow:hidden`.
2. **H2** (`margin-top 30px`) "Professional Urgent Care When You Need It" — `clamp(28px, 2.4vw, 32px)` / 700 / `line-height 1.2` / `letter-spacing -0.8px` / `#10264A`.
3. **Intro paragraph** (`margin-top 14px`, `max-width 780px`) — 16.5px / `line-height 1.7` / `#5B7085` / `text-wrap: pretty`: "AccessNow Care provides same-day treatment for minor illnesses and injuries, with walk-in convenience and minimal wait times. Our clinicians deliver professional, family-friendly care and clear guidance on next steps, so you can get back to feeling like yourself."
4. **Pill badge** "WHAT'S INCLUDED" (`margin-top 26px`) — `width fit-content`, `padding 7px 15px`, `border-radius 999px`, `background #EAF6F7`, `#0B8995`, 12px / 700 / `letter-spacing 0.7px` / uppercase.
5. **Checklist** (`margin-top 18px`) — `grid-template-columns: repeat(2, minmax(0,1fr))`, `gap 14px 34px`. Each row: 18px teal check icon (`#0B8995`, `stroke-width 2.6`, `margin-top 3px`, `flex-shrink:0`) + 15.5px / `line-height 1.55` / `#41586D` text, `gap 11px`. Items:
   - Treatment for minor illnesses and injuries
   - Walk-ins welcome, no appointment necessary
   - Convenient access with minimal wait times
   - On-site diagnostic support, including labs and X-rays
   - Care for sprains, strains, and minor injuries
   - Cold, flu, fever, and common infections
   - Basic physicals and health screenings
   - Clear follow-up guidance when further care is needed
6. **H2** (`margin-top 42px`) "Comprehensive Care You Can Trust" — `clamp(24px, 2vw, 26px)` / 700 / `line-height 1.25` / `letter-spacing -0.6px` / `#10264A`.
7. **Paragraph** (`margin-top 12px`, `max-width 780px`) — 16px / 1.7 / `#5B7085`: "We combine clinical expertise with a patient-first approach, delivering care that is convenient, accessible, and centered on your well-being."
8. **Image pair** (`margin-top 20px`) — two columns, `gap 22px`, each `aspect-ratio 4/3`, `border-radius 14px`, `overflow:hidden`.
9. **FAQ label** (`margin-top 42px`) "FREQUENTLY ASKED QUESTIONS" — 12px / 700 / `letter-spacing 0.8px` / uppercase / `#0B8995`.
10. **FAQ accordion** (`margin-top 16px`, flex column, `gap 10px`) — see Interactions.

### 5. Footer (shared)
- `background linear-gradient(135deg,#103F48 0%,#124954 60%,#103F48 100%)`, text `#FFFFFF`, inner `max-width 1320px`, `padding 60px 24px 45px`.
- Top row (`space-between`, wrap, `gap 20px`): 30×36 logo mark (outer `#8BC59A`, inner `#5FB6C4`) + "AccessNow Care" 19px / 700; right side "© <current year> Access Now URGENT CARE" 13.5px / `rgba(255,255,255,0.55)`.
- Bottom row: `margin-top 30px`, `border-top 1px solid rgba(255,255,255,0.09)`, `padding-top 20px`, centered 13.5px / `rgba(255,255,255,0.6)`: "8145 Valleywood Lane, Portage, MI 49024 · (269) 321-4774 · info@accessnowcare.com".

---

## Interactions & Behavior

**Header collapse.** Passive `scroll` listener on `window`; threshold `scrollY > 80`; only re-renders on state change. Listener removed on unmount.

**Mobile menu.** Hamburger toggles a boolean; icon swaps between 3-line and X; panel renders below the sticky nav row.

**FAQ accordion.** Single-open (radio) behavior; clicking the open row closes it. **Item index 5 ("Need More Information?") is open by default.**
- Row: `border-radius 12px`, `background #FFFFFF`, `overflow:hidden`, `border 1px solid #E4EBEE` (open: `#BFDDE2`), `box-shadow: none` (open: `0 6px 18px rgba(20,70,85,0.07)`); hover border `#BFDDE2`, transition `border-color/box-shadow 180ms ease`.
- Question button: full width, `padding 18px 22px`, `space-between`, `gap 16px`, 16px / 600, left-aligned. Closed: `background #FFFFFF`, text `#10264A`, hover text `#0B8995` (`180ms ease`). Open: `background #0B8995`, text `#FFFFFF`.
- Chevron: 18px, `stroke-width 2.2`, rotates `0deg → 180deg` on open, `transform 220ms ease`.
- Answer panel: `padding 0 22px 20px`, 15.5px / `line-height 1.7` / `#5B7085`.

FAQ content:
| # | Question | Answer |
|---|---|---|
| 1 | Do I need an appointment for urgent care? | No appointment is required. Walk-ins are welcome during all open hours, and you can also book ahead online to shorten your wait. |
| 2 | What conditions do you treat at urgent care? | We treat minor illnesses and injuries, including colds and flu, fevers, infections, sprains and strains, minor cuts, rashes, and similar non-emergency concerns. |
| 3 | Do you accept insurance? | We accept most major insurance plans and also offer transparent self-pay pricing. Bring your insurance card and a photo ID to your visit. |
| 4 | What are your hours of operation? | We are open 7 days a week, 12:00 PM to 8:00 PM, including most holidays. |
| 5 | When should I go to the ER instead of urgent care? | Go to the emergency room or call 911 for chest pain, difficulty breathing, severe bleeding, stroke symptoms, major trauma, or any life-threatening condition. |
| 6 | Need More Information? | If you have additional questions or need help choosing the right service, please contact our friendly team at (269) 321-4774. We are happy to help. |

**Navigation.** Logo, breadcrumb "Home" → homepage. Nav "Urgent Care" and the sidebar's Urgent Care item → this page. Both "Book Appointment" CTAs → the booking page. Remaining nav items and sidebar services are placeholders (`#`) pending their own pages — wire them to real routes.

**No loading/error/form states** on this page; it is static content plus the accordion.

### Responsive behavior
| Breakpoint | Changes |
|---|---|
| ≤1300px | Nav link gap 22px, link font 14px, info-block gap 26px |
| ≤1100px | Header block 1 (hours) hidden; body grid `250px / 1fr`, gap 30px; hero `min-height 200px` |
| ≤980px | Desktop nav links + CTA hidden, hamburger shown; header block 2 (phone) hidden |
| ≤880px | Body grid becomes a single flex column (sidebar full width, above main); hero inner single column; hero image `min-height 180px`; checklist 1 column; image pair 1 column |
| ≤640px | All header info blocks hidden |
| ≤600px | Content shell width `100% - 32px`; hero H1 34px |

`prefers-reduced-motion: reduce` → header/nav transitions reduced to `0.01ms`.

---

## State Management
Local component state only:
- `scrolled: boolean` — header collapse; driven by the passive scroll listener at threshold 80px.
- `mobileOpen: boolean` — mobile nav panel.
- `openFaq: number` — index of the open FAQ (initial `5`; `-1` = all closed).

Static data arrays (nav items, sidebar services, checklist strings, FAQ Q/A pairs) are content — move them to a CMS or content file if the codebase has one. No data fetching.

---

## Design Tokens

**Colors**
| Token | Hex | Use |
|---|---|---|
| Teal primary | `#0B8995` | Accents, active states, badges, links |
| Teal deep | `#0E5C69` | CTA gradient start |
| Teal dark | `#0B5F6B` | Text on white CTA button |
| Navy heading | `#10264A` | H1/H2, primary text |
| Navy nav | `#27354A` | Nav links |
| Brand navy | `#29364A` | Logo text |
| Brand slate | `#1D6778` | Header icon circles |
| Nav active | `#155D72` | Active/hover nav link |
| Nav underline | `#176477` | Active underline |
| CTA button | `#216979` (hover `#1A5560`) | Book Appointment |
| Body text | `#5B7085` | Paragraphs, breadcrumb |
| List text | `#41586D` | Checklist items |
| Muted text | `#8A97A3` | Header secondary lines |
| Chevron grey | `#9DB0BF` | Breadcrumb separators |
| Green leaf | `#8BC59A` / `#5FB6C4` | Logo strokes (header / footer) |
| Green tagline | `#5B9A5E` | Logo sub-label |
| Surface | `#FFFFFF` | Cards, nav |
| Surface tint | `#F7FAFB` | Sidebar card |
| Wash teal | `#EAF6F7`, `#F1F8F9`, `#EAF3F4` | Badges, hovers |
| Border | `#E4EBEE`, `#E3ECEF`, `#EEEEEE`, `#EDF1F2`, `#F0F3F4` | Dividers, card borders |
| Border active | `#BFDDE2` | Open/hovered FAQ |
| Footer gradient | `#103F48` → `#124954` → `#103F48` | Footer |
| Hero gradient | `#F1F9FB` → `#EAF5F8` → `#E6F3F6` | Page hero |

**Typography** — Inter (400/500/600/700), fallback `Arial, sans-serif`, loaded from Google Fonts.
| Role | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|
| Page H1 | `clamp(36px,4.2vw,52px)` | 700 | 1.08 | -1.4px |
| Section H2 | `clamp(28px,2.4vw,32px)` | 700 | 1.2 | -0.8px |
| Sub H2 | `clamp(24px,2vw,26px)` | 700 | 1.25 | -0.6px |
| Card H3 | 22px | 700 | 1.2 | -0.4px |
| Lead paragraph | 16.5px | 400 | 1.7 | — |
| Paragraph | 16px | 400 | 1.7 | — |
| Checklist / FAQ answer | 15.5px | 400 | 1.55 / 1.7 | — |
| Nav link / list item | 15px | 500 / 600 | — | — |
| FAQ question | 16px | 600 | — | — |
| CTA / buttons | 14.5px | 600–700 | — | — |
| Eyebrow / badge / breadcrumb | 12–13px | 700 / 600 | — | 0.5–0.8px, uppercase |
| Logo sub-label | 10.5px | 600 | — | 0.4px |

**Spacing** — 8px-ish scale in use: 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 30, 36, 40, 42, 46, 60, 80. Page gutters: 60px (header/nav), 32px (content shell, 16px ≤600px). Content max-widths: 1660px (header/nav), 1320px (body/hero/footer), 780–820px (prose).

**Radius** — 6px (nav hover), 8px (buttons), 10px (sidebar items), 12px (FAQ rows), 14px (image pair), 16px (cards, feature image), 999px (pills), 50% (icon circles).

**Shadows** — `0 4px 8px rgba(0,0,0,0.16)` (CTA), `0 6px 14px rgba(18,63,72,0.22)` (CTA hover), `0 6px 18px rgba(20,70,85,0.07)` (open FAQ), `0 16px 32px rgba(18,63,72,0.12)` (mobile panel).

**Motion** — 180ms (color/border), 200–250ms (transform, background), 280ms (header collapse), all `ease`.

---

## Assets
- **Icons:** all inline SVG, hand-authored in the prototype (clock, phone, map-pin, hamburger/X, home, chevron, arrow-right, check, leaf logo mark). Stroke-based, 1.8–2.6 stroke-width, round caps and joins — visually consistent with Lucide. Substitute Lucide (or the codebase's icon set) where equivalents exist; the logo mark must be kept as-is.
- **Fonts:** Inter via Google Fonts (`400;500;600;700`). Swap to a self-hosted or existing app copy if the codebase already ships Inter.
- **Photography:** six drop-in placeholders, no real images supplied. Client must provide:
  1. `uc-hero-banner` — wide hero banner, clinician with a patient
  2. `uc-cta-portrait` — portrait, nurse with clipboard (280px tall in a 280px column)
  3. `uc-main-photo` — 16:8 landscape, doctor reviewing results with a patient
  4. `uc-pair-1` — 4:3, nurse treating a young patient
  5. `uc-pair-2` — 4:3, lab technician running diagnostics
  All use `object-fit: cover`.
- No proprietary/third-party brand assets are used.

## Files
| File | What it is |
|---|---|
| `Urgent Care.dc.html` | The Urgent Care page design (source of truth for this handoff) |
| `Urgent Care (standalone).html` | Same page bundled offline — open directly in a browser to inspect the live design |
| `AccessNow Nav.dc.html` | Homepage — canonical source for the shared header, navbar, and footer |
| `Book-Appointment.dc.html` | Booking page both CTAs link to (context only) |
| `support.js`, `image-slot.js` | Prototype runtime and image-placeholder element — **not for production** |

Open the standalone file first; it is the fastest way to see states, hovers, and responsive behavior.

`screenshots/` holds four desktop captures scrolled top → bottom (`01` hero + nav, `02` sidebar + main content, `03` checklist and image pair, `04` FAQ + footer). Image areas appear as empty placeholders — real photography is pending (see Assets).
