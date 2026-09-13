# Handoff: Alliance Medical Clinic — Home (Mobile, 390px)

## Overview
Mobile home page for Alliance Medical Clinic (urgent care + family health clinic, Portage, Michigan).
One scrolling page: utility strip → sticky header with drawer nav → hero carousel → highlight carousel →
services grid → about → "Our care" interactive picker → workplace (employers) → team rail →
appointment form → contact/hours/map → footer accordion → persistent Call / Book bar.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and
behavior, not production code to copy. The task is to **recreate these designs in the target codebase's
existing environment** (React, Vue, SwiftUI, native, etc.) using its established components, tokens and
patterns. If no environment exists yet, pick the framework most appropriate for the project and implement
there. The prototype uses a small in-house template runtime (`support.js`, `<x-dc>`, `{{ holes }}`,
`<sc-for>`, `<sc-if>`); treat those as "loop", "conditional" and "bound value" — do not port the runtime.

The prototype is wrapped in a **presentation frame**: a 390px browser-chrome card with a fixed 760px
scroll viewport, plus annotation sections (badges "1a" / "1b"). Only the phone content inside the scroll
container is the design. Section 1b holds **unused variations** (header B, hero B, services B, team B,
footer B) — reference only; 1a is the chosen direction.

## Fidelity
**High-fidelity.** Final colors, typography, spacing and interactions. Recreate pixel-accurately at 390px
width, then let it fluidly scale up to typical phone widths (320–430px). All values below are exact.

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Brand navy | `#0D47A1` | utility strip, footer, dark panels, headings |
| Brand blue | `#1976D2` | primary buttons, icons, links, active states |
| Blue 400 | `#42A5F5` | gradient ends, footer accents |
| Blue 200 | `#90CAF9` | hairline accents, footer icon tint |
| Blue 50 | `#E3F2FD` | pills, icon chips |
| Tint blue | `#F5F9FF` | service card icon square |
| Ink | `#424242` | body + most headings |
| Ink muted | `#616161` | card descriptions |
| Grey 100 | `#F5F5F5` | section backgrounds |
| Border | `#E0E0E0` | hairlines, inputs |
| Border light | `#ECEFF1` / `#EEEEEE` | card borders, list dividers |
| Ghost numeral | `#F1F5F9` | service card 01–06 |
| Open badge | bg `#F1F8D9`, text `#65832A`, dot `#7CA62E` | "Open 7 Days a Week" |
| Frame chrome | `#EDEFF2` page, `#D6DAE0` bezel, `#5B6470` annotations | presentation only |
| White text alphas | `rgba(255,255,255,0.72 / 0.82 / 0.9)` | on navy |

Gradients used:
- Primary CTA: `linear-gradient(90deg,#1976D2,#42A5F5)`
- Highlight cards: `linear-gradient(145deg,#42A5F5,#1976D2)`, `(145deg,#1976D2,#0D47A1)`, `(145deg,#90CAF9,#42A5F5)`
- Appointment panel: `linear-gradient(150deg,#0D47A1 0%,#1976D2 55%,#42A5F5 100%)`
- Hero fade to white: `linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.72) 88%, #FFFFFF 100%)`

### Typography
- Display / headings: **Playfair Display** 700 (Google Fonts), fallback Georgia, serif.
- UI / body: **Lato** 400 & 700, fallback Arial, sans-serif.
- Scale in use: h1 36/1.08, letter-spacing −0.9px; section h2 32–34/1.06–1.1, −0.7 to −0.8px;
  card h3 15.5–19px/1.2–1.25; body 15.5–16px/1.6–1.7; small body 12.5–14.5px/1.4–1.6;
  eyebrow pills 12px 700 uppercase, letter-spacing 0.5–0.8px.
- `text-wrap: pretty` on long headings and paragraphs.

### Spacing / radius / shadow
- Section padding: `40–44px 22px` (some `42px 22px 40px`); inner card padding 16–22px.
- Horizontal page gutter: 22px (16px for header, sticky bars and carousels).
- Radii: 6–8px buttons, 10px header icon buttons, 14px highlight cards, 16–20px content cards,
  9999px pills/chips.
- Shadows: `0 12px 30px rgba(13,71,161,0.07)` (cards), `0 14px 32px rgba(13,71,161,0.08)` (service cards),
  `0 8px 20px rgba(25,118,210,0.16)` (primary CTA), `0 6px 16px rgba(13,71,161,0.10)` (care chips),
  `0 -6px 20px rgba(13,71,161,0.10)` (bottom bar), `0 16px 32px rgba(13,71,161,0.12)` (open drawer).
- Minimum tap target 44px everywhere; primary buttons 50–54px tall.

## Screens / Views
Single screen, sections in DOM order.

### 1. Utility strip
34px tall, bg `#0D47A1`, 0 16px. Left: clock icon + "Open 7 Days · 12–8 PM", 11.5px/700 white.
Right: pin icon + "Portage, MI", `#90CAF9`, links to Google Maps search for the address.

### 2. Sticky header (`position:sticky; top:0; z-index:40`)
64px, white, 1px bottom border `#E0E0E0`, 0 16px, space-between.
Left: `assets/logo.png` at 123×41, object-fit contain.
Right: 46×46 tap-to-call button (radius 10, 1.5px border `#1976D2`, blue phone icon, `tel:+12693214774`)
and 46×46 menu toggle (radius 10, bg `#E3F2FD`, icon `#0D47A1`, hamburger ⇄ close).

### 3. Nav drawer (conditional on `menuOpen`)
Sticky under the header (`top:64px`, z-index 39), white, padding `14px 16px 20px`, shadow.
EN | ES language toggle (13px/700 uppercase; EN active `#1976D2`). Then hairline-separated rows, 17px/700,
16px vertical padding: Home (active blue), Services (button, chevron, expands), Occupational Health,
Contact Us. Services submenu is indented 14px with 15px rows: "View All Services" (blue 700), Urgent Care,
Family Health, Women's Health, Pediatric Care, Diagnostic Services. Footer of drawer: 52px blue
`#1976D2` "Book Appointment" button, radius 8.

### 4. Hero
300px image area; three slides cross-fade via opacity (`transition: opacity 700ms ease`),
`background-size:cover; background-position:50% 28%`, auto-advancing every **6500ms**.
Overlay gradient fades to white at the bottom. Dot pager centered at the bottom: 44×44 hit areas
containing an 8px-tall pill — active 22px wide `#1976D2`, inactive 8px `rgba(13,71,161,0.25)`.
Copy block below on white, padding `4px 22px 34px`:
- h1 36px Playfair 700, `#0D47A1` — text from the active slide.
- p 16px/1.6 `#424242` — text from the active slide.
- Primary CTA 54px, radius 7, gradient `90deg #1976D2→#42A5F5`, white 16px/600, arrow icon.
- Secondary CTA 54px, radius 7, 1.5px `#1976D2` border, "Call (269) 321-4774", `tel:` link.

Slide content:
1. "Quality Care When You Need It Most" / "Compassionate urgent care and family health services for every stage of life in Portage, Michigan." / `assets/hero-1.webp`
2. "Care for Your Whole Family" / "Convenient primary, preventive, and same-day healthcare for children, adults, and families." / `assets/hero-2.webp`
3. "Healthcare That Fits Your Schedule" / "Walk in, call ahead, or schedule an appointment with convenient care available seven days a week." / `assets/hero-3.webp`

### 5. Highlight carousel
Horizontal scroll, `scroll-snap-type: x mandatory`, gap 14px, padding `0 22px 26px`, scrollbar hidden.
Three 300px-wide cards, radius 14, padding `26px 22px`, white text, large watermark icon top-right at
opacity 0.14, 42px foreground icon:
1. **Urgent Care** — gradient `145deg #42A5F5→#1976D2`; body "Walk-in care for illnesses, minor injuries, and non-life-threatening conditions."; phone link "(269) 321-4774" with 40px translucent circle icon.
2. **Family Health** — gradient `145deg #1976D2→#0D47A1`; body "Preventive and personalized healthcare services for children, adults, and the whole family."; white 48px "Book Appointment" button.
3. **Opening Hours** — gradient `145deg #90CAF9→#42A5F5`; row "Monday – Sunday" / "12:00 PM – 8:00 PM"; hairline; "Open 7 Days".

### 6. Services (`#services`)
Padding `44px 22px 48px`, bg `linear-gradient(180deg,#FFFFFF 0%,#F5F5F5 70%)`.
Centered pill "Our Services" (plus icon, `#E3F2FD`/`#1976D2`), h2 34px "Your **Health** Journey Starts Here"
(the word Health in `#1976D2`), a 200px-wide divider (hairlines `#90CAF9` + heartbeat glyph `#1976D2`),
then a 15.5px centered intro paragraph.

**Card grid (the current, redesigned treatment):** 2 columns, `column-gap:12px; row-gap:14px`,
`align-items:start`. Each card: fixed **height 236px**, radius 20, white, 1px `#ECEFF1`,
shadow `0 14px 32px rgba(13,71,161,0.08)`, padding `18px 16px 16px`, `overflow:hidden`, column flex.
- 3px accent bar pinned across the top; accent is per-service (see list) — decorative only.
- Ghost serif numeral (01–06) at `right:-6px; top:-14px`, 66px Playfair 700, `#F1F5F9`.
- 46×46 icon square, radius 14, bg `#F5F9FF`, icon 24px stroke 1.8 in `#1976D2` (fixed, for contrast).
- h3 16.5px Playfair 700 `#424242`; p 12.5px/1.5 `#616161`.
- Bottom-left 30px circular arrow badge, bg `#1976D2`, white arrow, `flex-shrink:0`, pushed down with `margin-top:auto`.
- **Stagger:** cards in the left column get `margin-top:20px`; right column `0` (right column sits 20px higher).

Services: Urgent Care (`#0D47A1`) "Same-day care for illnesses, minor injuries, and immediate medical needs." ·
Family Health (`#1976D2`) "Ongoing primary and preventive care for children, adults, and families." ·
Occupational Health (`#90CAF9`) "Workplace health services, physicals, testing, and employer care." ·
Women's Health (`#0D47A1`) "Supportive preventive and everyday healthcare for women." ·
Pediatric Care (`#1976D2`) "Convenient care for children and common childhood health concerns." ·
Diagnostic Services (`#42A5F5`) "On-site labs, X-rays, testing, and diagnostic support."

Below the grid: full-width 50px outline button, 1.5px `#1976D2`, radius 7, 12.5px/700 uppercase,
"View All Services" + arrow.

### 7. About
Intro block padding `40px 22px 30px`, bg `linear-gradient(160deg,#FFFFFF,#F5F5F5)`:
pill "About Us" (radius 4), h2 34px "Complete Care,<br/>All in One Place", 15.5px/1.7 paragraph
"From urgent care and family medicine to diagnostics and preventive services, Alliance Medical Clinic offers coordinated care designed around your everyday health needs."
Then a 230px full-bleed image (`assets/about-us.webp`, cover, `50% 32%`).
Then on white, padding `26px 22px 32px`: 58px gradient circle icon + h3 "Comprehensive Care" /
"A broad range of services delivered under one roof for greater convenience."; 54px gradient CTA
"Explore Services" (13.5px/700 uppercase).
Then a navy `#0D47A1` block, three rows separated by `rgba(255,255,255,0.13)` hairlines, each a 60px
gradient circle icon + 18px/700 title + 13px description:
Open 7 Days / "12:00 PM – 8:00 PM, every day of the week." ·
On-Site Diagnostics / "Labs, X-rays, and testing available without extra stops." ·
Portage, Michigan / "Convenient, local access for families and employers."

### 8. "Our care" — interactive picker (current, redesigned treatment)
Padding `42px 22px 40px`, bg `radial-gradient(circle at 50% 22%, rgba(25,118,210,0.05), transparent 46%), #F5F5F5`.
Centered pill "Our care" (shield-check icon), h2 32px "Care for **everyone.**<br/>Treatment for everyday needs."
(everyone in `#1976D2`), centered 15.5px intro
"Whether you are bringing in your child, reporting a work injury, or need same-day help for a common illness—we are built for Portage families, workers, and employers alike."

**Layout:** CSS grid `grid-template-columns: 56px 1fr 56px`, `grid-template-rows: repeat(3,1fr)`,
gap 8px, min-height 212px, items centered.
- Center: `assets/care-doctor.webp`, 200px tall, contain, bottom-aligned, spanning all 3 rows (column 2).
- Six 52px circular icon buttons flank it — items 1–3 in column 1 rows 1–3, items 4–6 in column 3 rows 1–3
  (each chip must set its explicit `grid-row`; auto-flow places them wrong).
- Chip resting state: bg `#FFFFFF`, 1px `#E0E0E0`, icon `#1976D2` 24px stroke 1.9, shadow `0 6px 16px rgba(13,71,161,0.10)`.
- Chip selected state: bg `#1976D2`, border `#1976D2`, icon white, `transform: scale(1.08)`.
- Transition: `background 160ms, color 160ms, transform 160ms`. `aria-label` = item title.

**Detail card underneath** (`margin-top:6px`, radius 16, white, 1px `#E0E0E0`, padding `18px 18px 16px`,
shadow `0 12px 30px rgba(13,71,161,0.07)`, centered text): h3 19px Playfair 700, p 14px/1.55 `#616161`,
then a "Learn more" link 14.5px/700 `#1976D2` with chevron (min-height 44px). It shows the **selected**
item; default selection is index 0 (Urgent-care audience "Families & Individuals").

Items (icon · title · description), in chip order:
1. user-group · Families & Individuals · "Kids, Adults, and Families of every size."
2. bag · Work & School · "Employers, Workers, School employees, and Small businesses."
3. activity · Active People · "Athletes and active lifestyles deserve expert care."
4. thermometer · Everyday Illnesses · "Cough, fever, sore throat, ear pain, rash, and UTI care."
5. first-aid-box · Minor Injuries · "Minor injuries, sprains, cuts, and work injuries."
6. flask · On-Site Services · "Labs, X-rays, physicals, and vaccines."

### 9. Workplace health (employers)
White, padding `44px 22px 46px`. Pill "For Employers" (briefcase icon), h2 32px "Workplace Health Solutions",
16px lead + two 15px paragraphs, then a 5-item list. Each item: radius 14, 1px `#E0E0E0`, white,
padding 18px, grid `44px 1fr`, 44px `#E3F2FD` circle with 22px `#1976D2` icon, h3 16px Playfair,
p 13.5px description.
Physical Exams · "Pre-employment, DOT physicals, and return-to-work evaluations." ·
Injury Care · "Immediate treatment and case management for work-related injuries." ·
Drug Testing · "5-panel, 10-panel, and breath alcohol testing with fast results." ·
Telemedicine · "Virtual consultations for convenient access to occupational care." ·
Wellness Programs · "Preventive workplace wellness support for a healthier team."

### 10. Team rail
Pill "Our Team", h2 32px, centered intro. Horizontal snap rail, gap 14px, 22px gutters:
288px-wide cards, min-height 380px, radius 18, full-bleed photo (cover, `50% 22%`) under
`linear-gradient(180deg, rgba(13,71,161,0) 42%, rgba(13,71,161,0.78) 100%)`; name 19px Playfair 700 white,
role 13.5px/600 `#90CAF9`, "View Full Profile" link 13px/600 white + arrow.
Caption below the rail: "Swipe to meet the team", 12.5px `#9E9E9E`, centered.
Members: Dr. Mahmoud Kassir (Family Physician & Co-Founder), Dr. Dalal Kassir (Medical Director & Family
Medicine Physician), Amy Meints (Family Nurse Practitioner), Robin Kuiper (Family Nurse Practitioner),
Amanda Kerwin (Practice Manager), BreiAnn Church (Registered Medical Assistant) —
photos `assets/team-1..6.webp`.
Note: photos are implemented as CSS background images with `role="img"` + `aria-label` (an `<img src>` bound
to a template hole 404'd during streaming). In a real app use `<img>` with proper alt text.

### 11. Appointment form (current, redesigned treatment)
Section bg `#F5F5F5`, panel gradient `150deg #0D47A1 → #1976D2 55% → #42A5F5`, padding `34px 22px 36px`.
Eyebrow chip "Appointment" (`rgba(255,255,255,0.15)`, radius 3, 12.5px uppercase),
h2 34px Playfair **400** white "Apply For Free Treatments".
Then a grid `minmax(0,1fr) 132px`, `align-items:stretch`, gap 14px:
- Left: four stacked inputs, gap 10px, each 54px, radius 3, no border, bg `rgba(255,255,255,0.13)`,
  padding `0 16px`, 16px white text, `outline:none`.
  Placeholders: "Your Name", "Your Email" (type=email), "Your Doctor Name", "Your Disease Name".
- Right: `assets/apply-for-treatment.webp`, 132px wide, `height:100%`, `object-fit:cover`,
  `object-position:50% 15%` — fills the full height of the field stack.
Below: 54px white submit button, radius 3, 13px/500 uppercase `#0D47A1`, label "Send Message".
No validation is modelled in the prototype — add the codebase's standard required/email validation.

### 12. Contact (`#contact`)
Padding `40px 22px 46px`, bg `linear-gradient(180deg,#F5F5F5,#FFFFFF)`. Centered pill "Location",
h2 34px "Reach Us in Portage", 15.5px intro. Then:
- 260px map card, radius 18, 1px `#E0E0E0`, Google Maps embed for "8145 Valleywood Lane, Portage, MI 49024" (`loading="lazy"`).
- "Convenient parking / available on-site" row card.
- **Contact Details** card (radius 18, white, padding 20): 44px avatar chip + 20px/700 title; then
  hairline rows (grid `42px 1fr`, 42px `#E3F2FD` circle icons): Address "8145 Valleywood Lane, Portage, MI 49024"
  (maps link), Phone "(269) 321-4774" (`tel:`), Fax "(269) 222-2582". Labels 12.5px/700 `#1976D2`, values 14px `#424242`.
- **Hours & Availability** card: 44px clock chip, 16px/700 title, "Monday – Sunday: 12:00 PM – 8:00 PM",
  plus green pill "Open 7 Days a Week" (bg `#F1F8D9`, text `#65832A`, 7px dot `#7CA62E`).
- **Gradient action card** (`140deg #0D47A1 → #1976D2 55% → #42A5F5`, radius 18, padding 22): two 58px rows
  with 56px outlined circles — "Get Directions / Find the fastest route" (maps directions link) and
  "Call Now / (269) 321-4774" (`tel:`), separated by `rgba(255,255,255,0.20)` hairline.

### 13. Footer
Bg `#0D47A1`, padding `30px 22px 26px`, white. Logo 135×45, tagline "Compassionate Care. Healthier You."
(11px/600 uppercase `#42A5F5`), 14px/1.65 line "Compassionate medical care for the Portage community."
Accordion, sections divided by `rgba(255,255,255,0.12)` hairlines, 16px/700 headers, 56px min-height:
- **Contact Info** — always open: phone, fax, email `info@accessnowcare.com`, address (maps link),
  "Open 7 Days · 12:00 PM – 8:00 PM". 14.5px `rgba(255,255,255,0.82)`, 17px icons in `#42A5F5`/`#90CAF9`.
- **Services** — collapsed by default; expands to a 2-column list of the six services, 14.5px, 44px rows.
- **About Alliance** — collapsed by default; paragraph "Providing quality urgent care and family health
  services to the Portage, Michigan community with compassion, expertise, and convenience." plus a 52px
  translucent button "Need care today? Book Appointment".
Bottom block: three 46px circular social buttons (Facebook, Twitter, Instagram — `rgba(255,255,255,0.08)`
fill, `aria-label`s present, `href="#"` placeholders), legal links Privacy Policy / Terms of Service /
HIPAA Notice (13px, `rgba(255,255,255,0.6)`), and "© 2026 Alliance Medical Clinic" 12.5px.

### 14. Persistent action bar
`position:sticky; bottom:0; z-index:50`; grid `96px 1fr`, gap 10px, padding `11px 16px`,
bg `rgba(255,255,255,0.97)`, `backdrop-filter: blur(8px)`, 1px top border, shadow `0 -6px 20px rgba(13,71,161,0.10)`.
Left: 50px outline "Call" (`tel:`). Right: 50px `#1976D2` "Book Appointment" + arrow.
The prototype reserves space with a 78px spacer and `margin-top:-78px`; in a real app use safe-area
padding (`env(safe-area-inset-bottom)`) and page bottom padding instead.

## Interactions & Behavior
- **Hero carousel**: auto-advance every 6500ms (`setInterval`, cleared on unmount); dots jump to a slide.
  Cross-fade 700ms ease; heading and body swap with the slide. Consider pausing on interaction / `prefers-reduced-motion`.
- **Menu toggle**: header button flips hamburger↔close and opens the sticky drawer; the drawer's Services
  row expands its submenu (open by default in the prototype).
- **Care picker**: tapping a chip selects it (blue fill + scale 1.08) and swaps the title/description in the
  card below. Single-select, always one selected. Chips are `<button>` with `aria-label`.
- **Footer accordion**: Services and About toggle independently (`aria-expanded` on each header button),
  both closed initially; chevron rotates/swaps.
- **Carousels**: native horizontal scroll with `scroll-snap-align`, scrollbars hidden (`.om-scroll`).
- **Form**: no submit behavior wired; wire to the codebase's form handling + validation.
- Hover states are not specified (touch-first design); links use `#1976D2` → `#0D47A1` on hover.
- Every tappable element is ≥44px in its smallest dimension.

## State Management
| State | Type | Initial | Trigger |
|---|---|---|---|
| `hero` | int 0–2 | 0 | 6500ms interval; dot click |
| `care` | int 0–5 | 0 | care chip click |
| `menuOpen` | bool | false | header menu button |
| `servicesOpen` | bool | true | drawer "Services" row |
| `ftServices` | bool | false | footer "Services" header |
| `ftAbout` | bool | false | footer "About Alliance" header |

No data fetching. All content is static in-file arrays: `HERO` (3), `SERVICES` (6), `CARE` (6),
`WORKPLACE` (5), `TEAM` (6) — move these to CMS/content files as appropriate.

## Assets
In `assets/` (copied into this bundle):
- `logo.png` — clinic logo (header 123×41, footer 135×45)
- `hero-1.webp`, `hero-2.webp`, `hero-3.webp` — hero slides
- `about-us.webp` — about section photo
- `care-doctor.webp` — cut-out doctor for the care picker
- `apply-for-treatment.webp` — portrait beside the appointment form
- `team-1.webp` … `team-6.webp` — team portraits
Icons are inline SVG (24×24, `stroke="currentColor"`, round caps/joins, stroke-width 1.6–2.4) drawn by an
`icon(name, size, strokeWidth)` helper. Names used: medical-kit, users, briefcase, heart, heart-pulse,
teddy-bear, flask, user-group, bag, activity, thermometer, first-aid-box, user, shield-check, video, menu,
close, chevron-down, chevron-up. They are Feather/Lucide-style — swap for the codebase's icon set
(Lucide names map almost 1:1; teddy-bear and first-aid-box may need substitutes).
Google Fonts: `Lato:wght@400;700` and `Playfair+Display:wght@400;700`.

## Files
- `Home - Mobile.dc.html` — the design being handed off (section 1a is the build; 1b is unused variations).
- `assets/` — all images referenced above.
- Related mobile designs in the same project, for consistency of shared chrome (header, footer, action bar):
  `Services - Mobile.dc.html`, `Occupational Health - Mobile.dc.html`, `Contact - Mobile.dc.html`.
  Not included here — ask if you want them in the bundle.

## Notes for implementation
- The header, footer accordion and bottom action bar repeat across all mobile pages — build them as shared components.
- Keep per-service accent colors **decorative only**: pale accents (`#90CAF9`, `#42A5F5`) fail contrast for
  icons and filled buttons, which is why icons and arrow badges are fixed at `#1976D2`.
- Service cards use a fixed 236px height to keep the 2-up grid even; if your copy runs longer, either raise
  the height or clamp descriptions to 3 lines — the arrow badge must not shrink.
- Phone: (269) 321-4774 · Fax: (269) 222-2582 · Email: info@accessnowcare.com ·
  Address: 8145 Valleywood Lane, Portage, MI 49024 · Hours: every day 12:00 PM – 8:00 PM.
