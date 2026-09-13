# Handoff: Alliance Medical Clinic — Book an Appointment (Mobile, 390px)

## Overview
Mobile view of the existing **/book-appointment** page. Order: utility strip → sticky header →
intro (eyebrow, title, description) → masked doctor image band → booking card (step indicator,
step 1 appointment details incl. calendar + time slots, step 2 optional insurance, confirmation state) →
"Prefer to walk in?" call card → footer accordion.

This is the mobile adaptation of an already-built desktop page, not a new feature. It reuses the same
copy, field set, options, validation messages and availability rules as the React source.

## About the Design Files
The file in this bundle is a **design reference created in HTML** — a prototype showing intended look and
behavior, not production code to copy. Implement it in the existing app (React + Tailwind, see mapping
below) using its established components and tokens. The prototype uses a small in-house template runtime
(`support.js`, `<x-dc>`, `{{ holes }}`, `<sc-for>`, `<sc-if>`) — read those as "loop", "conditional" and
"bound value"; do not port the runtime.

The design sits inside a **presentation frame**: a 390px browser-chrome card with a fixed 800px scroll
viewport, plus an annotation block (badge "5a"). Only the phone content inside the scroll container is the
design.

## Fidelity
**High-fidelity and interactive.** Month navigation, date selection, time-slot selection, step switching,
submit-validation and the confirmation state are all live in the prototype — click through it to see states.

## Source mapping (existing code)
| Prototype section | Existing source |
|---|---|
| Route | `src/App.tsx` → `/book-appointment`, `/es/book-appointment`; `src/pages/BookAppointmentPage.tsx` |
| Intro | `src/sections/book-appointment/BookingIntro/BookingIntro.tsx` |
| Doctor image | `src/sections/book-appointment/DoctorPanel/DoctorPanel.tsx`, asset `src/assets/book-appointment/doctor.webp` |
| Card + steps + buttons | `src/sections/book-appointment/BookingForm/BookingForm.tsx`, `StepIndicator.tsx` |
| Personal fields | `BookingForm/PersonalInfoFields.tsx` |
| Date & time | `BookingForm/DateTimeFields.tsx`, `BookingCalendar/BookingCalendar.tsx`, `TimeSlots/TimeSlots.tsx` |
| Visit details | `BookingForm/VisitDetailsFields.tsx` |
| Insurance step | `BookingForm/InsuranceFields.tsx` |
| Confirmation | `BookingForm/BookingConfirmation.tsx` |
| Validation | `BookingForm/validate.ts`, messages under `validation.*` in `src/i18n/locales/en.ts` |
| Copy | `booking.*` and `calendar.*` in `src/i18n/locales/en.ts` / `es.ts` (all strings below come from there) |
| Colors | `tailwind.config.ts` → `colors.booking.*`, `shadows.booking-card` |

All copy in this prototype is the English `booking.*` / `calendar.*` resource text — keep it i18n-driven,
including the Spanish route.

## Design Tokens
Uses the app's existing tokens; no new colors introduced.

| Token | Hex | Use |
|---|---|---|
`booking.cta.from` | `#0D47A1` | primary button gradient start |
| `booking.blue.DEFAULT` | `#1976D2` | primary gradient end, active step, selected date/slot, links |
| `booking.badge-bg` / `calendar.available-bg` | `#E3F2FD` | eyebrow pill, available dates, confirmation circle |
| `calendar.available-hover-bg` | `#90CAF9` | available-date hover (desktop only) |
| `booking.border.card` / `.panel` / `time.border` / `step.inactive-bg` | `#E0E0E0` | borders, inactive step |
| `booking.text.body` / `muted-alt` / `calendar.nav-icon` / `time.text` | `#424242` | body, labels, month nav |
| `booking.text.placeholder` / `calendar.disabled-text` | `#9E9E9E` | placeholders, disabled dates |
| `booking.button.secondary-*` | `#1976D2` border + text, `#E3F2FD` hover | outline buttons |
| `booking.doctor.glow` | `rgba(25,118,210,0.08)` | radial glow behind the doctor |
| `error.DEFAULT` | `#DC5962` | required-field asterisks |
| — | `#A8323A` | **validation message text only** (see accessibility note) |
| Section bg | `#F5F5F5` | booking card section |
| Slate muted | `#78909C` | weekday labels, "select a date" prompt, neutral summary |

Shadows: `booking-card` = `0 4px 24px rgba(13,71,161,0.08)`; primary button `0 4px 8px rgba(0,0,0,0.16)`;
walk-in card `0 12px 30px rgba(13,71,161,0.18)`. Gradients: primary button
`linear-gradient(90deg,#0D47A1,#1976D2)`; walk-in card `linear-gradient(120deg,#0D47A1 0%,#1976D2 55%,#42A5F5 100%)`.

### Typography
Playfair Display 700 for headings, Lato 400/700 for UI (same as the rest of the site).
h1 34px/1.12 (−1px) `#424242`; card h2 24px/1.25; intro body 15.5px/1.65; field labels 13.5px/700;
field text 15px; step labels 13px/600; month label 14.5px/700; weekday 11px/600; date cells 13px/600;
slot labels 12.5px/600; summary + validation 13.5px; eyebrow 12.5px/700, letter-spacing 0.6px.

### Spacing / radius
Gutter 16px (22px footer). Intro `26px 16px 0`; booking section `22px 16px 30px`; card padding `20px 16px`.
Radii: 7px inputs/buttons/date cells/slots, 9px calendar + slots panels, 16px cards, 20px eyebrow pill,
9999px step circles and icon chips. Fields 52px; buttons 50–52px; date cells 38px; slots min 40px.

## Screens / Views

### 1–2. Utility strip + sticky header
Identical to the other mobile pages: 34px `#0D47A1` strip (clock + "Open 7 Days · 12–8 PM"; phone link
"(269) 321-4774"), then a 64px sticky white header (`top:0`, z-index 40) with the 123×41 logo, a 46×46
outlined call button and a 46×46 `#E3F2FD` menu button. Drawer not wired here — reuse the shared one.

### 3. Intro
White, padding `26px 16px 0`, centered. Eyebrow pill "APPOINTMENT" (radius 20, `#E3F2FD`, 12.5px/700
`#1976D2`); h1 34px "Book Your Visit"; paragraph "Schedule a convenient visit with Alliance Medical Clinic.
Choose your preferred date and available time, then provide your details to request your appointment."
(Desktop uses `clamp(32px,4vw,44px)` for the h1; mobile pins 34px.)

### 4. Doctor image band
Replaces the desktop's sticky right-hand `DoctorPanel`. White, padding `14px 16px 0`; 232px tall,
`assets/booking-doctor.webp` (= `src/assets/book-appointment/doctor.webp`), cover `50% 12%`,
`filter: brightness(1.07) contrast(1.02)`, and the panel's two-axis mask kept:
`mask-image: linear-gradient(to right, transparent 0, #000 9%, #000 91%, transparent 100%),
linear-gradient(to bottom, transparent 0, #000 6%, #000 92%, transparent 100%)` with
`mask-composite: intersect` (+ `-webkit-` prefixes). Radial glow `rgba(25,118,210,0.10)` behind it.
Toggleable via the `showDoctor` prop.

### 5. Booking card (`#bk-form`)
Section bg `#F5F5F5`. Card radius 16, 1px `#E0E0E0`, white, padding `20px 16px`, `booking-card` shadow.
h2 24px "Book your visit".

**Step indicator** — the desktop's single row (circle, label, 60px connector, circle, label) does not fit
390px, so it becomes a 2-row grid `32px 1fr`, column-gap 12px, row-gap 10px: each 32px circle sits beside
its label. Active circle `#1976D2`/white + `#1976D2` label; inactive `#E0E0E0`/`#424242`. The connector
line is dropped. Circles are clickable to switch steps.

**Step 1 — Appointment Details.** All fields required (red asterisk).
- `firstName` / `lastName` side by side (2-col grid, gap 12px) — "First name" / "Last name".
- `email` (type email, "your-email@example.com") and `phone` (type tel, "Enter phone number"), full width.
- `dob` (type date) / `gender` (select) side by side. Gender options: Select gender · Female · Male ·
  Other · Prefer not to say.
- `address` ("123 Main Street") and `zip` ("Enter ZIP code"), full width.
  (Desktop lays all eight out 2-up; mobile keeps only the naturally-paired ones side by side.)
- Inputs: 52px, radius 7, 1px `#E0E0E0`, white, padding `0 12–14px`, 15px text, `outline:none`.
  Error state in the app adds `border-error` + a 12px message under the field, plus
  `booking-focus-ring` = `0 0 0 3px rgba(66,165,245,0.10)` on focus — carry both over.

**Date & time** (label + asterisk, then two stacked panels — desktop shows them side by side):
- *Calendar panel* (radius 9, 1px `#E0E0E0`, padding 14px): header row with 34px prev/next month buttons
  (`aria-label` "Previous month"/"Next month", 16px chevrons `#424242`) around the 14.5px/700 month label;
  7-column weekday row (Sun–Sat, 11px/600 `#78909C`); 7-column date grid, gap 3px, cells 38px, radius 8.
  States: **selected** `#1976D2`/white · **available** `#E3F2FD`/`#1976D2` · **disabled** transparent/`#9E9E9E`
  (past dates and "booked" dates, where booked = `(getDate() + getMonth()) % 7 === 0` — the source's
  placeholder rule; replace with real availability). Leading/trailing blanks are hidden buttons.
  Legend below: 9px filled dot "Selected", 9px ringed dot "Available".
  Cell `aria-label` is the long date + " (unavailable)" when disabled.
- *Times panel* (radius 9, 1px `#E0E0E0`, padding 14px): title "Available times" 14.5px/700.
  Before a date is picked: centered prompt "Select a date to see available times." (13.5px `#78909C`).
  After: **3-column** grid (desktop 4), gap 8px, `max-height:214px`, vertical scroll with a styled 8px
  scrollbar (thumb `#1976D2`, track `#E3F2FD`). Slots 09:00–19:45 every 15 minutes (44 total).
  States: selected `#1976D2` bg + border, white text · disabled 1px `#E0E0E0`, white, `#424242`,
  `opacity:0.45`, `cursor:not-allowed` (source marks every 5th slot unavailable — placeholder rule) ·
  default 1px `#E0E0E0`, white, `#424242`. `aria-label` = label + " (unavailable)".
- *Summary line* (13.5px, added for mobile since the two panels are no longer visible together):
  neutral "Choose a date, then an available time." `#78909C` → after a date "Thu, Sep 10 — pick a time
  below." `#424242` → after both "Selected: Thu, Sep 10 at 14:30" `#1976D2` → on failed submit the
  validation message in `#A8323A`.

**Visit details** (full width, both required): `visitType` select — Select visit type · Urgent Care ·
Family Medicine / Wellness · Weight Loss · Physical Exam · Follow-up Visit; `reason` input
"What brings you in?".

**Buttons** (stacked full width on mobile; desktop puts them in a row):
primary 52px, radius 7, gradient `90deg #0D47A1→#1976D2`, 15.5px/700 white, "Request Appointment" + arrow;
secondary 52px, radius 7, 1px `#1976D2`, white bg, 14px/700 `#1976D2`,
"Add Insurance & Medical Info (Optional)" + arrow → step 2.

**Step 2 — Insurance & Medical Info.** All optional, full width:
`insuranceProvider` ("e.g. Blue Cross Blue Shield"), `policyNumber` ("Policy / member ID"),
`medicalNotes` textarea 4 rows ("Allergies, current medications, relevant history...", `resize:vertical`).
Buttons: primary "Request Appointment" + secondary outline "Back" → step 1.

**Confirmation** (replaces the form inside the same card, padding `34px 4px`, centered):
64px `#E3F2FD` circle with a 30px `#1976D2` check; h2 24px "Appointment Request Received";
paragraph "Thank you. Our team will contact you if any additional information is needed."; then the
confirmed slot echoed in 14px/700 `#1976D2` (mobile addition); 50px outline button
"Book Another Appointment" resetting the form.

### 6. "Prefer to walk in?" card
Mobile addition, below the booking card: radius 16, padding `18px 16px`, gradient
`120deg #0D47A1 → #1976D2 55% → #42A5F5`, white text. 44px outlined circle with 19px phone icon,
17px Playfair "Prefer to walk in?" + 13px "No appointment needed for urgent care."; 50px white button
"Call (269) 321-4774" → `tel:`. Drop it if the team would rather not offer an alternative here.

### 7. Footer
Same as the other mobile pages: `#0D47A1`, `30px 22px 26px`, logo 135×45, tagline, then the accordion —
**Contact Info** always open (phone + address), **Services** collapsed (2-column list of six services),
**About Alliance** collapsed (paragraph) — plus legal links and copyright.

## Interactions & Behavior
- **Month nav** steps `month` by ±1 (first of month); no min/max bound in the prototype — clamp to a
  booking window in production.
- **Date select** sets the date and **clears the selected time** (matches `handleSelectDate` in the source).
- **Time select** sets the time; disabled slots are inert.
- **Submit**: the prototype validates only date/time (shows "Please choose an available date." /
  "Please select an appointment time." and returns to step 1). Production must run the full
  `validateBookingForm` — per-field messages from `validation.*` render under each field.
- **Step switching** preserves entered values; the confirmation replaces the form, and "Book Another"
  resets values, step and errors.
- **Reduced motion**: transitions are 140–200ms color/background only; nothing needs suppressing.
- Sticky header at `top:0` z-index 40; nothing else sticks on this page.

## State Management
| State | Type | Initial | Trigger |
|---|---|---|---|
| `step` | 1 \| 2 | 1 | step circles, "Add Insurance…", "Back" |
| `month` | Date (1st of month) | current month | prev/next month |
| `date` | ISO `YYYY-MM-DD` \| null | null | date cell (also resets `time`) |
| `time` | "HH:MM" \| null | null | slot button |
| `submitted` | bool | false | submit (valid) / reset |
| `error` | bool → messages | false | submit with missing date/time |
| `ftServices`, `ftAbout` | bool | false | footer headers |

Production form values follow `BookingFormValues` in `BookingForm.types.ts`
(firstName, lastName, email, phone, dob, gender, address, zip, date, time, visitType, reason,
insuranceProvider, policyNumber, medicalNotes) with `EMPTY_BOOKING_VALUES` as the reset. No data fetching
in the prototype — real availability should come from an API and replace both placeholder rules.

## Prototype props (tweaks)
- `showDoctor` (boolean, default true) — show/hide the masked doctor band.

## Assets
- `assets/logo.png` — header 123×41, footer 135×45.
- `assets/booking-doctor.webp` — copied from `src/assets/book-appointment/doctor.webp` (672px wide).
  Alt text from `booking.doctorAlt`.
Icons are inline SVG 24×24, `stroke="currentColor"`, round caps/joins (clock, phone, hamburger, chevrons,
arrow, check) — use the app's `src/components/icons` set (`ChevronIcon`, `ArrowRightIcon`, `CheckIcon`).
Fonts: Google `Lato:wght@400;700` + `Playfair+Display:wght@400;700`.

## Files
- `Book Appointment - Mobile.dc.html` — the design.
- `assets/` — logo + doctor image.
- Sibling mobile designs handed off separately: Home, Services (service detail), Occupational Health, Contact.

## Accessibility notes
- The validation message uses **#A8323A** rather than the `error.DEFAULT` token `#DC5962`: at 13.5px on
  white, `#DC5962` measures 3.69:1, below the 4.5:1 minimum. The required-field asterisks keep `#DC5962`
  (a large-ish glyph beside a dark label). Consider adding a darker `error.text` token for message text.
- All date cells, slots, step circles and buttons are real `<button>`s with `aria-label`/`aria-selected`
  where the visible text isn't self-describing.
- Tap targets: date cells are 38px and slots 40px — under the 44px guideline, but they match the desktop
  component and sit in a dense grid where 44px would not fit 7 columns at 390px. Keep the 3px gaps so
  neighbouring cells aren't mis-tapped.
- Add a visible focus ring (`booking-focus-ring`) on all controls; the prototype sets `outline:none` on
  fields and does not model focus.

## Notes for implementation
- The two availability rules (`(day + month) % 7 === 0` for dates, every 5th slot for times) are
  placeholders in the current source — wire both to real scheduling data.
- Utility strip, header and footer are shared across all mobile pages — extract them as components.
- Phone: (269) 321-4774 · Address: 8145 Valleywood Lane, Portage, MI 49024 · Hours: every day 12:00 PM – 8:00 PM.
