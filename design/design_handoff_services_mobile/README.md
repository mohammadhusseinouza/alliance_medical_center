# Handoff: Alliance Medical Clinic — Service Detail (Mobile, 390px)

## Overview
Mobile **service detail** page for Alliance Medical Clinic. One shell serves all five service pages
(Urgent Care, Family Health, Women's Health, Pediatric Care, Diagnostic Services); the prototype shows
**Urgent Care** populated. Order: utility strip → sticky header → hero band with breadcrumb →
sticky service picker → main copy + "What's Included" checklist → image rail → FAQ accordion →
CTA card → footer accordion.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and
behavior, not production code to copy. The task is to **recreate these designs in the target codebase's
existing environment** (React, Vue, SwiftUI, native, etc.) using its established components, tokens and
patterns. If no environment exists yet, pick the framework most appropriate for the project and implement
there. The prototype uses a small in-house template runtime (`support.js`, `<x-dc>`, `{{ holes }}`,
`<sc-for>`, `<sc-if>`) — read those as "loop", "conditional" and "bound value"; do not port the runtime.

The design sits inside a **presentation frame**: a 390px browser-chrome card with a fixed 780px scroll
viewport, plus annotation blocks (badges "2a" / "2b"). Only the phone content inside the scroll container
is the design. Section **2b** holds alternates — service nav B, benefits A (single column), CTA B, FAQ B —
reference only. Note the two picked in the build (**service nav B**, the collapsed picker, and **CTA B**,
the inline portrait card) are already wired into 2a; the 2b annotations still describe them as variations.

## Fidelity
**High-fidelity.** Final colors, typography, spacing and interactions; recreate pixel-accurately at 390px
and let it reflow up to 430px. Shares its design system with the mobile Home page — build header, footer
and shared tokens once.

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Brand navy | `#0D47A1` | utility strip, page h1, CTA card, footer |
| Brand blue | `#1976D2` | buttons, icons, links, open FAQ row, active breadcrumb |
| Blue 400 | `#42A5F5` | footer accents/icons |
| Blue 200 | `#90CAF9` | footer icons, utility-strip link |
| Blue 50 | `#E3F2FD` | pills, menu button, hero wash |
| Grey 100 | `#F5F5F5` | FAQ + CTA section bg, picker button bg |
| Ink | `#424242` | body copy, closed FAQ label |
| Ink slate | `#37474F` | checklist items |
| Slate muted | `#78909C` | picker eyebrow, breadcrumb separator |
| Border | `#E0E0E0` | hairlines, cards, inputs |
| Frame chrome | `#EDEFF2` page, `#D6DAE0` bezel, `#5B6470` annotation text | presentation only |
| White alphas | `rgba(255,255,255,0.72 / 0.82 / 0.97)` | footer text, sticky bar |

Gradients:
- Hero wash: `linear-gradient(180deg, rgba(227,242,253,0.95) 0%, rgba(227,242,253,0.86) 46%, rgba(13,71,161,0.30) 100%)`

### Typography
- Headings: **Playfair Display** 700 (fallback Georgia, serif). Body/UI: **Lato** 400/700 (fallback Arial).
- Page h1 32px/1.08, letter-spacing −1px, `#0D47A1`; section h2 27px/1.2 (−0.7px) and 23px/1.25 (−0.5px), `#424242`;
  body 15.5px/1.65; checklist 13.5px/1.45; FAQ question 15.5px/600, answer 15px/1.65;
  eyebrows/pills 12px 700 uppercase, letter-spacing 0.7–0.8px; breadcrumb 12px 700 uppercase 0.4px.
- `text-wrap: pretty` on headings, paragraphs and FAQ answers.

### Spacing / radius / shadow
- Page gutter 16px (22px inside the hero band and footer). Main content block `22px 16px 34px`.
- FAQ section `30px 16px 34px`; CTA section `24px 16px 30px`; footer `30px 22px 26px`.
- Radii: 10px picker + header icon buttons, 12px FAQ cards + CTA thumbnail, 14px images and CTA card,
  8px buttons, 9999px pills.
- Shadow: only the presentation bezel and the drawer/CTA in 2b; the page itself is hairline-based.
- Tap targets ≥44px; picker button and picker rows 52px; FAQ headers 60px; buttons 50px.

## Screens / Views

### 1. Utility strip
34px, bg `#0D47A1`, padding `0 16px`, space-between. Left: clock icon + "Open 7 Days · 12–8 PM",
11.5px/700 white. Right: phone icon + "(269) 321-4774" in `#90CAF9`, `tel:+12693214774`.
(On Home this right slot is a location link — here it's tap-to-call.)

### 2. Sticky header (`sticky; top:0; z-index:40`)
64px, white, bottom hairline `#E0E0E0`, `0 16px`. Logo `assets/logo.png` 123×41 (contain).
Right: 46×46 call button (radius 10, 1.5px `#1976D2` border, 19px phone icon) + 46×46 menu button
(radius 10, bg `#E3F2FD`, `#0D47A1` hamburger, `aria-label="Open menu"`). The drawer itself is not
wired on this page — reuse the Home page drawer.

### 3. Hero band
186px tall, image `assets/uc-hero.png` (cover, `60% 40%`) under the hero wash gradient.
Content vertically centered, padding `0 22px`:
- h1 32px Playfair "Our Services", `#0D47A1`.
- Breadcrumb `<nav aria-label="Breadcrumb"><ol>`: home icon + "Home" (`#424242`) → chevron separator
  (`#78909C`, `aria-hidden`) → "Urgent Care" (`#1976D2`, `aria-current="page"`).
Per-service pages swap the hero image and the last crumb.

### 4. Sticky service picker (`sticky; top:64px; z-index:30`)
Container: bg `rgba(255,255,255,0.97)`, `backdrop-filter: blur(8px)`, bottom hairline, padding `12px 16px`.
- Trigger `<button aria-expanded>`: full width, min-height 52px, radius 10, 1px `#E0E0E0`, bg `#F5F5F5`,
  padding `0 16px`, space-between. Label column is `flex:1 1 auto; min-width:0; white-space:nowrap;
  overflow:hidden; text-overflow:ellipsis` — eyebrow "Services" 10.5px/700 uppercase `#78909C` above the
  current service name 15px/700 `#0D47A1`. Right: 18px chevron `#1976D2` that rotates 180° over 200ms when open.
- Expanded panel (`margin-top:8px`, radius 10, 1px `#E0E0E0`, white, clipped): the four **other** services
  as 52px rows, 15px/600 `#424242`, hairline between, 15px blue chevron on the right —
  Family Health, Women's Health, Pediatric Care, Diagnostic Services.
- **Closed by default.** Replaces the horizontally scrolling chip row (nav A) that the earlier draft used.

### 5. Main content (`22px 16px 34px`)
- Lead image `assets/uc-main.png`, full width, `aspect-ratio:16/10`, radius 14, cover.
- h2 27px "Professional Urgent Care When You Need It".
- Intro paragraph: "Alliance Medical Clinic provides same-day treatment for minor illnesses and injuries,
  with walk-in convenience and minimal wait times. Our clinicians deliver professional, family-friendly
  care and clear guidance on next steps, so you can get back to feeling like yourself."
- Pill "What's Included" (radius 9999, bg `#E3F2FD`, `#1976D2`).
- **Checklist (benefits B — 2-up):** `<ul>` grid 2 columns, `column-gap:14px; row-gap:14px`; each `<li>`
  grid `18px 1fr`, gap 8px, 16px blue check (stroke 2.6) + 13.5px/1.45 `#37474F` text. Eight items:
  Treatment for minor illnesses and injuries · Walk-ins welcome, no appointment necessary ·
  Convenient access with minimal wait times · On-site diagnostic support, including labs and X-rays ·
  Care for sprains, strains, and minor injuries · Cold, flu, fever, and common infections ·
  Basic physicals and health screenings · Clear follow-up guidance when further care is needed.
  (2b shows the single-column alternative at 15.5px if a service needs longer strings.)
- h2 23px "Comprehensive Care You Can Trust" + paragraph "We combine clinical expertise with a
  patient-first approach, delivering care that is convenient, accessible, and centered on your well-being."

### 6. Image rail
Horizontal snap scroll, gap 12px, padding `0 16px 30px`, scrollbar hidden. Two 290px images,
`aspect-ratio:4/3`, radius 14, cover: `assets/uc-pediatric.png` ("Nurse treating a young patient") and
`assets/uc-lab.png` ("Lab technician running diagnostic tests", `object-position:55% center`).

### 7. FAQ accordion
Section `aria-labelledby`, bg `#F5F5F5`, padding `30px 16px 34px`.
Eyebrow "Frequently Asked Questions" 12px/700 uppercase `#1976D2`. Items stacked with 10px gap;
each card radius 12, 1px `#E0E0E0`, clipped.
- Header `<button aria-expanded>`: min-height 60px, padding `16px 18px`, 15.5px/600, space-between,
  chevron 18px. **Closed:** bg white, text `#424242`. **Open:** bg `#1976D2`, text white, chevron rotated 180°.
- Body: padding `14px 18px 18px`, 15px/1.65 `#424242`.
- Single-open behavior; the **last** item is open on load.
Items (Q / A):
1. "Do I need an appointment for urgent care?" / "No appointment is required. Walk-ins are welcome during all open hours, and you can also book ahead online to shorten your wait."
2. "What conditions do you treat at urgent care?" / "We treat minor illnesses and injuries, including colds and flu, fevers, infections, sprains and strains, minor cuts, rashes, and similar non-emergency concerns."
3. "Do you accept insurance?" / "We accept most major insurance plans and also offer transparent self-pay pricing. Bring your insurance card and a photo ID to your visit."
4. "What are your hours of operation?" / "We are open 7 days a week, 12:00 PM to 8:00 PM, including most holidays."
5. "When should I go to the ER instead of urgent care?" / "Go to the emergency room or call 911 for chest pain, difficulty breathing, severe bleeding, stroke symptoms, major trauma, or any life-threatening condition."
6. "Need More Information?" / "If you have additional questions or need help choosing the right service, please contact our friendly team at (269) 321-4774. We are happy to help."

### 8. CTA (CTA B, in the CTA's original slot above the footer)
Section bg `#F5F5F5`, padding `24px 16px 30px`.
- Card: grid `84px 1fr`, gap 14px, items centered, radius 14, bg `#0D47A1`, padding 16px.
  Left: `assets/uc-cta-portrait.png` 84×84, radius 12, cover `50% 25%`.
  Right: h3 18px Playfair 700 white "Ready To Get Expert Care?" + 13px/1.5 `rgba(255,255,255,0.82)`
  "Walk-ins welcome, 7 days a week."
- Below the card: 50px full-width button, radius 8, bg `#1976D2`, 15px/600 white,
  "Book Appointment" + arrow icon.
(The earlier draft used a 330px full-bleed portrait with overlaid copy — replaced.)

### 9. Footer
Identical to the Home footer, trimmed contact list. Bg `#0D47A1`, padding `30px 22px 26px`.
Logo 135×45; tagline "Compassionate Care. Healthier You." 11px/600 uppercase `#42A5F5`.
Accordion sections divided by `rgba(255,255,255,0.12)` hairlines, 16px/700 headers, 56px min-height:
- **Contact Info** — always open: phone "(269) 321-4774" (`tel:`) and the address (maps link),
  14.5px `rgba(255,255,255,0.82)`, 17px icons `#42A5F5` / `#90CAF9`.
- **Services** — collapsed; 2-column list of the six services, 44px rows, 14.5px.
- **About Alliance** — collapsed; paragraph + translucent "Need care today? Book Appointment" button.
Bottom: social buttons, legal links, copyright — same as Home.

## Interactions & Behavior
- **Service picker**: toggles open/closed; `aria-expanded` on the trigger; chevron rotates 180° (200ms ease);
  closed on load. Selecting a row navigates to that service page. Keep the trigger label on one line
  (ellipsis) — long names like "Diagnostic Services" otherwise wrap and break the 52px height.
- **FAQ**: single-open accordion; clicking the open item closes it (state → null); last item open on load;
  header inverts to blue/white when open.
- **Footer accordion**: Services and About toggle independently, both closed on load.
- **Image rail**: native horizontal scroll with `scroll-snap-align:center`, hidden scrollbar (`.om-scroll`).
- **Header menu**: visual only here — wire it to the shared drawer from the Home page.
- Sticky stack: header at `top:0` (z 40), picker at `top:64px` (z 30) — the picker must never overlap the header.
- Links: `#1976D2` → `#0D47A1` on hover; touch-first, no other hover states specified.

## State Management
| State | Type | Initial | Trigger |
|---|---|---|---|
| `faqOpen` | int \| null | `FAQ.length - 1` (last item) | FAQ header click (same index → null) |
| `pickerOpen` | bool | false | picker trigger |
| `ftServices` | bool | false | footer "Services" header |
| `ftAbout` | bool | false | footer "About Alliance" header |

No data fetching. Content is static: `BENEFITS` (8 strings) and `FAQ` (6 q/a pairs) per service.
For the real implementation, model a service as: `{ slug, name, heroImage, mainImage, h2, intro,
benefits[], galleryImages[], faq[], secondaryHeading, secondaryBody }` and render this one shell.

## Assets
In `assets/` (copied into this bundle):
- `logo.png` — clinic logo (header 123×41, footer 135×45)
- `uc-hero.png` — hero band image
- `uc-main.png` — lead 16:10 image
- `uc-pediatric.png`, `uc-lab.png` — image rail (4:3)
- `uc-cta-portrait.png` — CTA thumbnail (84×84 crop)
All five service pages need their own hero/main/gallery images; only Urgent Care's exist so far.
Icons are inline SVG 24×24, `stroke="currentColor"`, round caps/joins, stroke-width 2–2.6
(clock, phone, hamburger, home, chevron, check) — Feather/Lucide-style; swap for the codebase's icon set.
Fonts: Google `Lato:wght@400;700` + `Playfair+Display:wght@400;700`.

## Files
- `Services - Mobile.dc.html` — the design (2a is the build; 2b holds the unused alternates).
- `assets/` — images referenced above.
- Sibling designs in the project, sharing header/footer/tokens: `Home - Mobile.dc.html`
  (also handed off separately), `Occupational Health - Mobile.dc.html`, `Contact - Mobile.dc.html` —
  not included here; ask if you want them bundled.

## Notes for implementation
- This is a **template**, not five pages: build one route (`/services/:slug`) and drive it from service data.
- The picker deliberately lists only the *other* services; the current one is the trigger label.
- The utility strip, header, footer and shared tokens are common to every mobile page — extract them.
- Phone: (269) 321-4774 · Address: 8145 Valleywood Lane, Portage, MI 49024 · Hours: every day 12:00 PM – 8:00 PM.
