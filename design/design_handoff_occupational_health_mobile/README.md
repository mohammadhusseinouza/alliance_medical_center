# Handoff: Alliance Medical Clinic — Occupational Health (Mobile, 390px)

## Overview
Mobile **Occupational Health / Occupational Medicine** page, aimed at employers rather than patients.
Nine content sections: utility strip → sticky header → hero (image + eyebrow + benefit list + two CTAs) →
Workplace Health Services carousel → Workplace Injury Care → Physical Exams, Tests & Screenings (2-up grid) →
Drug Testing Services → DOT Physical Examinations → Telemedicine Services → Additional Health Services →
"Partner With Us" gradient CTA → footer accordion.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and
behavior, not production code to copy. Recreate these designs in the target codebase's existing
environment (React, Vue, SwiftUI, native, etc.) using its established components, tokens and patterns; if
no environment exists yet, pick the framework most appropriate for the project. The prototype uses a small
in-house template runtime (`support.js`, `<x-dc>`, `{{ holes }}`, `<sc-for>`, `<sc-if>`) — read those as
"loop", "conditional" and "bound value"; do not port the runtime.

The design sits inside a **presentation frame**: a 390px browser-chrome card with a fixed 800px scroll
viewport, plus annotation blocks (badges "3a" / "3b"). Only the phone content inside the scroll container
is the design. Section **3b** holds alternates (including a single-column exam list) plus notes — reference only.

## Fidelity
**High-fidelity.** Final colors, typography, spacing; recreate accurately at 390px and let it reflow to 430px.
Shares its design system with the mobile Home and Service pages — build header, footer and tokens once.

## Design Tokens

### Colors
| Token | Hex | Use |
|---|---|---|
| Brand navy | `#0D47A1` | utility strip, h1, footer, CTA gradient start |
| Brand blue | `#1976D2` | icons, checks, buttons, eyebrow text |
| Blue 400 | `#42A5F5` | gradient ends, footer accent |
| Blue 200 | `#90CAF9` | footer icons, utility-strip link |
| Blue 50 | `#E3F2FD` | eyebrow pills, icon chips |
| Grey 100 | `#F5F5F5` | alternating section bg, drug-test cards |
| Ink | `#424242` | body + section headings |
| Border | `#E0E0E0` | card borders, hairlines |
| Success bg | `#F1F8D9` | "success"-accented icon chips |
| Success fg | `#65832A` | success icon color |
| Success border | `rgba(124,166,46,0.30)` | success card border |
| Frame chrome | `#EDEFF2`, `#D6DAE0`, `#5B6470` | presentation only |

Gradients: primary CTA `linear-gradient(90deg,#1976D2,#42A5F5)`;
"Partner With Us" panel `linear-gradient(150deg,#0D47A1 0%,#1976D2 55%,#42A5F5 100%)`;
hero scrim `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.10) 46%, rgba(255,255,255,0.55) 82%, rgba(255,255,255,0.94) 100%)`.

**Accent rule:** each exam/additional item may carry `accent: "success"`; that flips its card border to
`rgba(124,166,46,0.30)`, its icon chip to `#F1F8D9`, and its icon to `#65832A`. Everything else uses
`#E0E0E0` / `#E3F2FD` / `#1976D2`.

### Typography
- Headings **Playfair Display** 700 (fallback Georgia); body/UI **Lato** 400/700 (fallback Arial).
- h1 36px/1.06, letter-spacing −1.1px, `#0D47A1`; section h2 25–28px/1.14–1.16 (−0.7 to −0.9px), `#424242`;
  CTA h2 26px/1.2 white; card h3 15.5–19px/1.25–1.3; body 15.5px/1.6–1.65; card body 13–14.5px/1.5–1.6;
  bold list items 15px/700; eyebrows 12px 700 uppercase 0.7px; "DOT Physical Includes" label 12.5px/700 uppercase 0.5px.
- `text-wrap: pretty` on headings and paragraphs.

### Spacing / radius / shadow
- **Gutter is 18px on this page** (16px for the header and utility strip). *Note: every other mobile page
  uses 16px — pick one and standardize; flagged in the 3b notes.*
- Section rhythm: `34px 18px` blocks, alternating white and `#F5F5F5`; some sections continue at `0 18px 34px`.
- Radii: 7–8px buttons, 11–12px icon chips, 14px small cards, 16px cards and images, 20px CTA panel, 9999px pills.
- Shadows: `0 8px 24px rgba(13,71,161,0.06)` service cards, `0 8px 24px rgba(13,71,161,0.08)` images,
  `0 8px 20px rgba(25,118,210,0.16)` primary CTA.
- Buttons 52px tall; footer rows 44–56px; all tap targets ≥44px.

## Screens / Views

### 1. Utility strip
34px, `#0D47A1`, `0 16px`. Left: clock icon + "Open 7 Days · 12–8 PM" 11.5px/700 white.
Right: phone icon + "(269) 321-4774" `#90CAF9`, `tel:+12693214774`.

### 2. Sticky header (`sticky; top:0; z-index:40`)
64px, white, bottom hairline, `0 16px`. Logo 123×41 contain. Right: 46×46 call button (radius 10,
1.5px `#1976D2`) + 46×46 menu button (radius 10, bg `#E3F2FD`, `#0D47A1` hamburger, `aria-label="Open menu"`).
Drawer not wired on this page — reuse the Home drawer.

### 3. Hero
- 196px image band: `assets/oh-hero-sm.png` (cover, `44% 22%`) under the white-fade scrim.
- Copy block pulled up 18px over the image (`margin-top:-18px`), padding `0 18px 34px`:
  - Pill "For Employers" (briefcase icon, `#E3F2FD` / `#1976D2`).
  - h1 36px "Occupational Medicine".
  - Paragraph: "Our occupational medicine program provides comprehensive healthcare services designed
    around the needs of employers and their workforce. We help support a safer, healthier workplace through
    convenient examinations, testing, work-related injury care, and ongoing employee health services."
  - Benefit list (4 items, gap 16px): grid `26px 1fr`, 26px `#E3F2FD` circle with 14px blue check
    (stroke 3), then 15.5px/700 title + 14px/1.55 description:
    Pre-Employment Physicals / "Health evaluations that help determine job readiness." ·
    Return-to-Work Evaluations / "Medical assessments supporting a safe return to duty." ·
    Workplace Injury Care / "Prompt evaluation and treatment for work-related injuries." ·
    Medical Surveillance / "Ongoing workplace health monitoring and preventive care."
  - Primary CTA 52px, radius 7, gradient, "Partner With Us" + arrow. Secondary CTA 52px outline
    1.5px `#1976D2`, "Learn More", anchors to `#services`.

### 4. Workplace Health Services (`#services`)
White, padding `6px 0 34px`; header block at `0 18px`: pill "Occupational Care", h2 28px
"Workplace Health Services", paragraph "Essential medical services designed to support employee health,
workplace safety, and employer requirements."
Carousel: horizontal snap scroll, gap 12px, padding `4px 18px 8px`, hidden scrollbar.
Cards 296px wide, radius 16, 1px `#E0E0E0`, padding 22px, shadow `0 8px 24px rgba(13,71,161,0.06)`:
52px `#E3F2FD` icon chip (radius 12, 24px blue icon), h3 19px Playfair, 14.5px/1.6 description,
then a feature list (gap 8px) of 13.5px rows with 14px blue checks.
1. **Pre-Employment Physicals** (user) — "Comprehensive examinations to help determine whether candidates are physically ready for job responsibilities." — Health assessment · Vision & hearing tests · Job-specific evaluation
2. **Drug Testing Services** (flask) — "Convenient workplace drug and alcohol testing with professional testing procedures and timely results." — 5-panel screening · 10-panel screening · Breath alcohol testing
3. **DOT Physical Examinations** (truck) — "Commercial driver physical examinations supporting DOT medical certification requirements." — Certified examinations · Vision & hearing checks · Medical history review
4. **Telemedicine Services** (video) — "Virtual occupational-health consultations that provide convenient access to medical care for employees." — Remote workforce support · Follow-up consultations · Convenient access to care

### 5. Workplace Injury Care
Bg `#F5F5F5`, padding `34px 18px`. Image `assets/oh-injury-sm.png` (16:10, radius 16, shadow),
h2 27px "Workplace Injury Care", paragraph "Prompt, professional care for work-related injuries with a focus
on helping employees recover safely and return to work confidently."
List (gap 13px) of 16px blue check + 15px/700 label: Immediate Injury Evaluation · Case Management ·
Rehabilitation Support · Follow-Up Care.

### 6. Physical Exams, Tests & Screenings
White, `34px 18px`. h2 27px, paragraph "Convenient workplace medical examinations and screening services
for employee health and occupational requirements."
**2-up grid**, gap 12px. Each card: radius 14, 1px accent border, white, padding 16px;
42px icon chip (radius 11, accent bg/fg, 20px icon); h3 15.5px Playfair; p 13px/1.5.
1. Pre-Employment Physicals (user) — "Confirm candidates are fit and ready for the role."
2. **Fit-for-Duty Exams** (eye, *success accent*) — "Confirm an employee can safely perform job duties."
3. Return-to-Work Evaluations (rotate) — "Clear, objective assessments before a safe return to duty."
4. **Respirator Medical Exams** (lungs, *success accent*) — "Clearance evaluations for respirator use on the job."
5. Surveillance Screenings (shield-check) — "Ongoing monitoring for roles with occupational exposure risks."
6. Laboratory Testing (flask) — "On-site lab work to support exams and screenings."
(3b offers a single-column variant with 38px chips and hairline rows if descriptions need full width.)

### 7. Drug Testing Services
White, `0 18px 34px`. h2 27px, paragraph "Workplace drug and alcohol testing services designed to support
hiring, safety, and employer testing programs."
Three stacked cards (gap 10px), radius 14, 1px `#E0E0E0`, bg `#F5F5F5`, padding 16px:
14.5px/700 title + 13px/1.5 description —
5-Panel Drug Screen / "Standard screening for common substances." ·
10-Panel Drug Screen / "Expanded screening for a broader substance panel." ·
Breath Alcohol Testing / "On-site alcohol testing with fast results."
Then `assets/oh-drug-sm.png` (16:10, radius 16, shadow).

### 8. DOT Physical Examinations
Bg `#F5F5F5`, `34px 18px`. Image `assets/oh-dot-sm.png` (16:10, radius 16, shadow), h2 27px,
paragraph "Occupational medical examinations for commercial drivers designed to support DOT medical
certification requirements."
White card (radius 16, 1px `#E0E0E0`, padding 20): label "DOT Physical Includes" 12.5px/700 uppercase
`#1976D2`, then a check list (gap 11px, 14px checks, 14.5px text): Medical history review · Vision testing ·
Hearing evaluation · Blood pressure check · Physical examination · Medical certification.

### 9. Telemedicine Services
White, `34px 18px`. h2 27px, paragraph "Virtual healthcare consultations that bring occupational medicine
support to employees wherever they are." Check list (16px checks, 15px/700): Immediate Access to Care ·
Remote Workforce Support · Convenient Follow-Up. Then `assets/oh-telemedicine-sm.png` (16:10, radius 16, shadow).

### 10. Additional Health Services
White, `0 18px 34px`. h2 25px, paragraph "Additional care options supporting employees and their families."
Three rows (gap 10px): grid `44px 1fr`, radius 16, 1px accent border, padding 16px; 44px icon chip
(radius 12, accent bg/fg); h3 17px Playfair; p 13.5px/1.5.
Sports Physicals (running) — "Keep athletes healthy and ready for the season." ·
School Physicals (home) — "Meet school requirements and support student success." ·
**Vaccinations & Immunizations** (shield-check, *success accent*) — "Protect your team and keep sickness out of the workplace."

### 11. "Partner With Us" CTA
White section, `0 18px 34px`; panel radius 20, padding `28px 22px 26px`, gradient
`150deg #0D47A1 → #1976D2 55% → #42A5F5`, white text.
60px `rgba(255,255,255,0.15)` circle with 26px shield-check icon; h2 26px "Partner With Us for Workplace Health";
paragraph "Let us help you create a safer, healthier, and more productive workplace with trusted occupational
health services."; 52px white button "Request Consultation" (`#0D47A1` text); 52px outline button
(1.5px `rgba(255,255,255,0.6)`) "Call (269) 321-4774" with phone icon (`tel:`);
then three 13.5px reassurance lines: Experienced Medical Team · Trusted. Compliant. Reliable. ·
Fast Appointments & Results.

### 12. Footer
Same as the other mobile pages, trimmed contact list. Bg `#0D47A1`, padding `30px 22px 26px`.
Logo 135×45; tagline "Compassionate Care. Healthier You." 11px/600 uppercase `#42A5F5`.
Accordion divided by `rgba(255,255,255,0.12)` hairlines, 16px/700 headers, 56px min-height:
**Contact Info** always open (phone `tel:` + address maps link, 14.5px `rgba(255,255,255,0.82)`);
**Services** collapsed (2-column list of the six services, 44px rows); **About Alliance** collapsed
(paragraph + translucent "Need care today? Book Appointment" button). Bottom: social buttons, legal links,
copyright.

## Interactions & Behavior
- **Services carousel**: native horizontal scroll, `scroll-snap-align:center`, scrollbar hidden (`.om-scroll`).
- **Footer accordion**: Services and About toggle independently (`aria-expanded`), both closed on load.
- **Header menu**: visual only — wire to the shared drawer.
- **In-page anchor**: hero "Learn More" → `#services`; account for the 64px sticky header offset when scrolling.
- Links `#1976D2` → `#0D47A1` on hover; touch-first, no other hover states specified.
- No animations beyond the footer chevron rotation (200ms ease).

## State Management
| State | Type | Initial | Trigger |
|---|---|---|---|
| `ftServices` | bool | false | footer "Services" header |
| `ftAbout` | bool | false | footer "About Alliance" header |

No data fetching. Static content arrays: `HERO_BENEFITS` (4), `SERVICES` (4, each with 3 features),
`INJURY_BENEFITS` (4), `EXAMS` (6, optional `accent:"success"`), `DRUG_TESTS` (3), `DOT_INCLUDES` (6),
`TELEMED_BENEFITS` (3), `ADDITIONAL` (3, optional accent). Move to CMS/content files as appropriate.

## Assets
In `assets/` (copied into this bundle):
- `logo.png` — header 123×41, footer 135×45
- `oh-hero-sm.png` — hero band
- `oh-injury-sm.png` — Workplace Injury Care (16:10)
- `oh-drug-sm.png` — Drug Testing (16:10)
- `oh-dot-sm.png` — DOT Physicals (16:10)
- `oh-telemedicine-sm.png` — Telemedicine (16:10)
Icons are inline SVG 24×24, `stroke="currentColor"`, round caps/joins, stroke-width 1.8–3, drawn by an
`icon(name, size, strokeWidth)` helper. Names used: user, flask, truck, video, eye, rotate, lungs,
shield-check, running, home, clock, phone, check, chevron. Feather/Lucide-style — swap for the codebase's
icon set (lungs and running may need substitutes).
Fonts: Google `Lato:wght@400;700` + `Playfair+Display:wght@400;700`.

## Files
- `Occupational Health - Mobile.dc.html` — the design (3a is the build; 3b holds alternates + notes).
- `assets/` — images referenced above.
- Sibling designs sharing header/footer/tokens: `Home - Mobile.dc.html`, `Services - Mobile.dc.html`
  (both handed off separately), `Contact - Mobile.dc.html` — not included here; ask if you want them bundled.

## Notes for implementation
- **Gutter inconsistency**: this page is 18px, the others 16px. Standardize on one in code.
- The desktop version has two xl-only floating accent chips ("Safer Workplaces", "Employee Wellness") that
  never render below 1280px — mobile intentionally drops them.
- The `accent: "success"` green treatment is a per-item data flag, not a section style; keep it data-driven.
- Utility strip, header and footer are shared across all mobile pages — extract them as components.
- Phone: (269) 321-4774 · Address: 8145 Valleywood Lane, Portage, MI 49024 · Hours: every day 12:00 PM – 8:00 PM.
