# Handoff: Alliance Medical Clinic — Contact Us (Mobile, 390px)

## Overview
Mobile **Contact Us** page. Order: utility strip → sticky header → hero band with title →
tappable contact-information card → "Send Us a Message" form → Hours of Operation card →
"Need immediate care?" gradient card → full-bleed photo CTA → footer accordion.
Contact details come **before** the form so calling, emailing or getting directions is the first thing
available; the form is for non-urgent enquiries.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and
behavior, not production code to copy. Recreate these designs in the target codebase's existing
environment (React, Vue, SwiftUI, native, etc.) using its established components, tokens and patterns; if
no environment exists yet, pick the framework most appropriate for the project. The prototype uses a small
in-house template runtime (`support.js`, `<x-dc>`, `{{ holes }}`, `<sc-for>`, `<sc-if>`) — read those as
"loop", "conditional" and "bound value"; do not port the runtime.

The design sits inside a **presentation frame**: a 390px browser-chrome card with a fixed 800px scroll
viewport, plus annotation blocks (badges "4a" / "4b"). Only the phone content inside the scroll container
is the design. Section **4b** holds alternates (single-column form, stacked hours label/value) and the
data-conflict notes — reference only.

## Fidelity
**High-fidelity.** Final colors, typography, spacing; recreate accurately at 390px and let it reflow to 430px.
Shares its design system with the other mobile pages — build header, footer and tokens once.

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Brand navy | `#0D47A1` | utility strip, h1, footer, gradient start, button text on white |
| Brand blue | `#1976D2` | icons, chevrons, submit button, eyebrow, notice text |
| Blue 400 | `#42A5F5` | gradient end, footer accent |
| Blue 200 | `#90CAF9` | footer icons, utility-strip link |
| Blue 50 | `#E3F2FD` | icon chips, notice background |
| Grey 100 | `#F5F5F5` | section backgrounds, contact card fill |
| Ink | `#424242` | body, labels, field text |
| Placeholder | `#9E9E9E` | input/textarea placeholders |
| Border | `#E0E0E0` | card borders, field borders, hairlines |
| Required red | `#DC5962` | the `*` on required labels |
| Slate muted | `#78909C` | 4b stacked-hours labels, annotations |
| Frame chrome | `#EDEFF2`, `#D6DAE0`, `#5B6470` | presentation only |

Gradients: immediate-care card `linear-gradient(120deg,#0D47A1 0%,#1976D2 55%,#42A5F5 100%)`;
hero scrim `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.12) 48%, rgba(255,255,255,0.60) 84%, rgba(255,255,255,0.95) 100%)`;
photo CTA scrim `linear-gradient(180deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.34) 30%, rgba(0,0,0,0.10) 54%, rgba(0,0,0,0) 74%)`.

### Typography
- Headings **Playfair Display** 700 (fallback Georgia); body/UI **Lato** 400/700 (fallback Arial).
- h1 34px/1.08, letter-spacing −1.2px, `#0D47A1`; form h2 24px/1.25 (−0.5px); hours h2 20px;
  CTA h3 18–22px; body 15.5px/1.65; field text 15px; labels 13.5px/700; row titles 15px/700;
  row support text 13px; hours rows 14.5px; eyebrow 12px/700 uppercase 0.8px; notice 13.5px/1.55.

### Spacing / radius / shadow
- Gutter 16px (22px in the footer). Sections: `0 16px 26/30px` and `30px 16px`; cards padded `16px` or `20px 16px`.
- Radii: 7px inputs, 8px buttons and notice, 16px cards, 9999px icon chips.
- Shadows: `0 8px 24px rgba(13,71,161,0.06)` white cards, `0 12px 30px rgba(13,71,161,0.18)` gradient card,
  `0 4px 8px rgba(0,0,0,0.16)` submit button.
- Fields 52px tall; buttons 50–52px; contact rows 64px min-height; all tap targets ≥44px.

## Screens / Views

### 1. Utility strip
34px, `#0D47A1`, `0 16px`. Left: clock icon + "Open 7 Days · 12–8 PM" 11.5px/700 white.
Right: phone icon + "(269) 321-4774" `#90CAF9`, `tel:+12693214774`.

### 2. Sticky header (`sticky; top:0; z-index:40`)
64px, white, bottom hairline, `0 16px`. Logo 123×41 contain. Right: 46×46 call button
(radius 10, 1.5px `#1976D2`) + 46×46 menu button (radius 10, bg `#E3F2FD`, `aria-label="Open menu"`).
Drawer not wired here — reuse the Home drawer.

### 3. Hero
180px image band: `assets/contact-hero.png` (cover, `58% 30%`) under the white-fade scrim.
Copy pulled up 14px over the image (`margin-top:-14px`), padding `0 16px 26px`:
h1 34px "Contact Us"; paragraph "We're here to answer your questions and help you get the care you need."

### 4. Contact information card
White section, `0 16px 30px`. Card: radius 16, 1px `#E0E0E0`, bg `#F5F5F5`, padding 16px.
Eyebrow h2 "Contact Information" 12px/700 uppercase `#1976D2`.
Four tappable rows, grid `40px 1fr 16px`, gap 12px, min-height 64px, hairline between (none after the last):
40px `#E3F2FD` circle with 18px `#1976D2` icon · 15px/700 value + 13px support line · 16px blue chevron.
1. phone — "(269) 321-4774" / "Call us anytime" → `tel:+12693214774`
2. mail — "info@accessnowcare.com" / "We respond quickly" → `mailto:` (value truncates with ellipsis)
3. pin — "2911 Capital Ave SW" / "Battle Creek, MI 49015" → Google Maps search
4. clock — "Open 7 Days a Week" / "See hours below" → in-page anchor `#hours`

### 5. Send Us a Message
Section bg `#F5F5F5`, `30px 16px`. Card radius 16, 1px `#E0E0E0`, white, padding `20px 16px`, shadow.
h2 24px "Send Us a Message".
- **First name / Last name** side by side: 2-column grid, gap 12px (this is form A; 4b shows the
  single-column variant, which costs 68px of height).
- Remaining fields stacked, gap 16px.
- Each field: label 13.5px/700 `#424242` with a red `*` when required, 7px gap, then control.
  Inputs 52px, radius 7, 1px `#E0E0E0`, white, padding `0 12/14px`, 15px text, `outline:none`.
  Textarea `rows="5"`, padding `12px 14px`, `resize:vertical`.
- Fields, in order (id · label · placeholder · type · required):
  1. `contact-first-name` · First name · "First name" · text · **required**
  2. `contact-last-name` · Last name · "Last name" · text · **required**
  3. `contact-email` · Email address · "your-email@example.com" · email · **required**
  4. `contact-phone` · Phone number · "Enter phone number" · tel · optional
  5. `contact-subject` · Subject · "What is this regarding?" · text · **required**
  6. `contact-message` · Message · "Tell us how we can help..." · textarea (5 rows) · **required**
- Submit: 52px full width, radius 8, bg `#1976D2`, 15.5px/600 white, "Send Message" + arrow icon,
  shadow `0 4px 8px rgba(0,0,0,0.16)`.
- No validation, focus ring or success/error state is modelled — add the codebase's standard
  required/email validation, focus styling and submitted/error states.

### 6. Hours of Operation (`#hours`)
Section bg `#F5F5F5`, `0 16px 30px`, children gap 14px.
Card radius 16, 1px `#E0E0E0`, white, padding `20px 16px`, shadow: 44px `#E3F2FD` clock chip +
h2 20px "Hours of Operation"; then a `<dl>` of rows (gap 12px, hairline above each, 12px top padding)
with `<dt>` 14.5px/700 left and `<dd>` 14.5px right-aligned:
- Monday – Friday · 9:00 AM – 8:00 PM
- Saturday – Sunday · 12:00 PM – 6:00 PM
- Days Open · 7 Days a Week
- Holidays · Open Daily – call ahead
Then a notice block: radius 8, bg `#E3F2FD`, padding `12px 14px`, 13.5px/1.55 `#1976D2` —
"Starting September 1, weekend hours expand to 10:00 AM – 6:00 PM."
(4b offers a stacked label-above-value variant of the same rows.)

### 7. Need immediate care?
Card radius 16, padding `20px 16px`, gradient `120deg #0D47A1 → #1976D2 55% → #42A5F5`, white text, shadow.
44px circle (1px `rgba(255,255,255,0.45)`, fill `rgba(255,255,255,0.06)`) with 19px phone icon +
h3 18px "Need immediate care?"; then a 52px white button, radius 8, 14.5px/700 `#0D47A1`,
"Call Emergency Line: (269) 321-4774" → `tel:`.

### 8. Photo CTA
Full-bleed `assets/contact-cta.png`, 320px tall, cover `50% 22%`, under the dark top-down scrim.
Copy overlaid at the top, padding `24px 20px 0`: h3 22px "We're Here to Help You";
paragraph "Your health and well-being are our priority. Contact us today to get the care you need.";
50px white button, radius 8, 15px/700 `#0D47A1`, "Book Appointment" + arrow.

### 9. Footer
Same as the other mobile pages. Bg `#0D47A1`, padding `30px 22px 26px`. Logo 135×45; tagline
"Compassionate Care. Healthier You." 11px/600 uppercase `#42A5F5`. Accordion divided by
`rgba(255,255,255,0.12)` hairlines, 16px/700 headers, 56px min-height:
**Contact Info** always open (phone `tel:` + address maps link, 14.5px `rgba(255,255,255,0.82)`);
**Services** collapsed (2-column list of the six services, 44px rows); **About Alliance** collapsed
(paragraph only on this page). Bottom: legal links Privacy Policy / Terms of Service / HIPAA Notice
and "© 2026 Alliance Medical Clinic".

## Interactions & Behavior
- **Contact rows**: whole row is the tap target (`tel:`, `mailto:`, maps, in-page anchor); chevron is decorative.
- **In-page anchor** `#hours`: must be a plain `<a href="#hours">`. The production code currently uses a
  router `<Link to="#hours">`, which re-routes instead of scrolling — fix in implementation. Account for
  the 64px sticky header offset when scrolling.
- **Footer accordion**: Services and About toggle independently (`aria-expanded`), both closed on load.
- **Header menu**: visual only — wire to the shared drawer.
- **Form**: no client behavior modelled; add validation, focus states, submit/loading/success/error.
- Links `#1976D2` → `#0D47A1` on hover; touch-first, no other hover states specified.

## State Management
| State | Type | Initial | Trigger |
|---|---|---|---|
| `ftServices` | bool | false | footer "Services" header |
| `ftAbout` | bool | false | footer "About Alliance" header |

Form fields are uncontrolled in the prototype — implement with the codebase's form library.
No data fetching. Static content: `FIELDS` (6), `HOURS` (4 rows), `TILES` (4 contact rows).

## Assets
In `assets/` (copied into this bundle):
- `logo.png` — header 123×41, footer 135×45
- `contact-hero.png` — 180px hero band
- `contact-cta.png` — 320px photo CTA
Icons are inline SVG 24×24, `stroke="currentColor"`, round caps/joins, stroke-width 1.8–2.2
(phone, mail, pin, clock, chevron, arrow, hamburger) — Feather/Lucide-style; swap for the codebase's set.
Fonts: Google `Lato:wght@400;700` + `Playfair+Display:wght@400;700`.

## Files
- `Contact - Mobile.dc.html` — the design (4a is the build; 4b holds alternates + the data-conflict notes).
- `assets/` — images referenced above.
- Sibling designs sharing header/footer/tokens: `Home - Mobile.dc.html`, `Services - Mobile.dc.html`,
  `Occupational Health - Mobile.dc.html` (all handed off separately) — not included here.

## ⚠ Content conflicts to resolve before shipping
These are inherited from the existing site, not design decisions:
1. **Address mismatch** — this page's contact row says **2911 Capital Ave SW, Battle Creek, MI 49015**,
   while the utility strip, footer and the Home page's contact section all say
   **8145 Valleywood Lane, Portage, MI 49024**. Pick the correct one and use it everywhere.
2. **Hours mismatch** — the hours card says Mon–Fri 9:00 AM–8:00 PM and weekends 12:00 PM–6:00 PM,
   while the utility strip (every page) says 12–8 PM daily. Both appear in one scroll here.
3. The "Starting September 1" notice is dated copy — confirm it's still accurate or make it CMS-driven.
4. The `#hours` link uses a router Link in production code; it should be a plain anchor.

## Notes for implementation
- Utility strip, header and footer are shared across all mobile pages — extract them as components.
- Phone: (269) 321-4774 · Email: info@accessnowcare.com · Fax (per Home page): (269) 222-2582.
