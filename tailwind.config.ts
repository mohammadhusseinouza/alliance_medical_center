import type { Config } from "tailwindcss";
import { CONTACT_ICON_COLORS, SERVICE_ACCENT } from "./src/lib/theme.js";

/**
 * Breakpoints are ported 1:1 from design/index.html's max-width media
 * queries. Each is named after its exact pixel value and kept separately
 * addressable (e.g. 900 and 980 are NOT merged) so section components can
 * reproduce the source's responsive behavior exactly.
 */
const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mw-1300": { max: "1300px" },
        "mw-1100": { max: "1100px" },
        "mw-1050": { max: "1050px" },
        "mw-1000": { max: "1000px" },
        "mw-980": { max: "980px" },
        "mw-900": { max: "900px" },
        "mw-850": { max: "850px" },
        "mw-700": { max: "700px" },
        "mw-650": { max: "650px" },
        "mw-640": { max: "640px" },
        "mw-600": { max: "600px" },
        "mw-420": { max: "420px" },
      },
      fontFamily: {
        sans: ["Lato", "Arial", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
      },
      /**
       * ============================================================
       * ALLIANCE MEDICAL CENTER — Phase 7.1 color migration
       * ============================================================
       * Every leaf value below has been remapped from the old
       * AccessNow Care teal/navy identity to the approved Alliance
       * palette:
       *   Deep Blue    #0D47A1   Dark neutral     #424242
       *   Primary Blue #1976D2   Medium neutral   #9E9E9E
       *   Bright Blue  #42A5F5   Light neutral    #E0E0E0
       *   Light Blue   #90CAF9   Neutral surface  #F5F5F5
       *   Pale Blue    #E3F2FD   White            #FFFFFF
       *
       * Token GROUPS and KEYS are unchanged (naming-debt cleanup is a
       * separate, later task) — only the resolved hex/rgba VALUES moved.
       * `success.*` and `error.*` are deliberately preserved unchanged —
       * the Alliance identity card defines no semantic-status colors, and
       * status distinction should not be sacrificed to brand color.
       * `brand.icon-leaf` — the current temporary Logo's second stroke
       * color — now follows Bright Blue. The Alliance card has no green
       * in it, so this stray legacy color no longer belongs even on the
       * placeholder geometry; the geometry itself is still untouched and
       * is replaced separately in Phase 7.3.
       * ============================================================
       */
      colors: {
        brand: {
          teal: {
            700: "#0D47A1",
            600: "#1976D2",
            500: "#42A5F5",
          },
          /** No second official Alliance dark shade exists — both stops intentionally collapse to the one approved Deep Blue rather than inventing an undocumented darker blue (see tailwind config header note). */
          dark: {
            DEFAULT: "#0D47A1",
            end: "#0D47A1",
          },
          navy: {
            DEFAULT: "#0D47A1",
            light: "#1976D2",
          },
          icon: "#1976D2",
          /** Alliance Bright Blue — see file header note. Geometry (Logo.tsx) is unchanged, still the temporary placeholder mark; only its color follows the migration now. */
          "icon-leaf": "#42A5F5",
        },
        cta: {
          DEFAULT: "#1976D2",
          hover: "#0D47A1",
        },
        text: {
          primary: "#424242",
          secondary: "#424242",
          /** Alliance's medium neutral (#9E9E9E) fails WCAG AA at the small sizes every current consumer of this token uses; falls back to the dark neutral per the approved mapping's own accessibility carve-out. */
          muted: "#424242",
          nav: "#424242",
          "nav-alt": "#424242",
          tagline: "#1976D2",
        },
        nav: {
          active: "#1976D2",
          hover: "#E3F2FD",
          underline: "#1976D2",
          "entry-text": "#424242",
        },
        border: {
          subtle: "#E0E0E0",
          nav: "#E0E0E0",
          "nav-mobile": "#E0E0E0",
          "nav-item": "#E0E0E0",
        },
        badge: {
          bg: "#E3F2FD",
          text: "#1976D2",
        },
        /** Preserved unchanged — see colors-block header note. */
        success: {
          DEFAULT: "#7CA62E",
          text: "#65832A",
          bg: "#F1F8D9",
        },
        /** Preserved unchanged — see colors-block header note. */
        error: {
          DEFAULT: "#DC5962",
        },
        form: {
          label: "#424242",
        },
        accent: {
          lime: "#42A5F5",
          /** Values sourced from `src/lib/theme.ts` (single canonical source, also consumed at runtime by `services.data.ts`). */
          ...SERVICE_ACCENT,
        },
        /** Values sourced from `src/lib/theme.ts` (single canonical source, also consumed at runtime by `footer.data.ts`). */
        contact: {
          ...CONTACT_ICON_COLORS,
        },
        surface: {
          "pale-1": "#F5F5F5",
          "pale-2": "#F5F5F5",
        },
        teal: {
          icon: "#1976D2",
          "icon-bg": "#E3F2FD",
          marker: "#1976D2",
        },
        "bright-cta": {
          from: "#1976D2",
          to: "#42A5F5",
        },
        hero: {
          arrow: "#1976D2",
          "arrow-hover": "#0D47A1",
          /** The site's single most prominent heading — isolated to its own token (not shared with `text.primary`), so it can safely carry Deep Blue without recoloring every other heading/body element that also uses `text.primary`. */
          heading: "#0D47A1",
          body: "#424242",
        },
        "hero-info": {
          "urgent-from": "#42A5F5",
          "urgent-to": "#1976D2",
          "hours-from": "#90CAF9",
          "hours-to": "#42A5F5",
          "cta-text": "#424242",
        },
        services: {
          "bg-end": "#F5F5F5",
          divider: "#90CAF9",
          border: "#E0E0E0",
          link: "#1976D2",
          title: "#424242",
          desc: "#424242",
          "hover-bg": "#E3F2FD",
        },
        about: {
          "bg-to": "#F5F5F5",
          "panel-bg": "#F5F5F5",
          "eyebrow-bg": "#E3F2FD",
          "eyebrow-text": "#1976D2",
          body: "#424242",
          "feature-gradient-from": "#42A5F5",
          "feature-gradient-to": "#1976D2",
          "feature-title": "#424242",
          "feature-desc": "#424242",
          "cta-gradient-from": "#1976D2",
          "cta-gradient-to": "#42A5F5",
          /** No second official Alliance dark shade exists — reuses Deep Blue rather than inventing an undocumented darker anchor (see colors-block header note). */
          "stats-deep": "#0D47A1",
          "stat-icon-from": "#42A5F5",
          "stat-icon-to": "#1976D2",
        },
        care: {
          "bg-glow": "rgba(25,118,210,0.04)",
          bg: "#F5F5F5",
          "eyebrow-bg": "#E3F2FD",
          "eyebrow-text": "#1976D2",
          highlight: "#1976D2",
          body: "#424242",
          "connector-dash": "#90CAF9",
          "connector-dot": "#1976D2",
          "card-hover-border": "rgba(144,202,249,0.28)",
          /** Focus-ring role — Bright Blue per the approved mapping's accessibility finding (Light Blue falls short of the 3:1 UI-component contrast minimum). */
          "card-focus-ring": "rgba(66,165,245,0.25)",
          "icon-text": "#1976D2",
          desc: "#424242",
        },
        team: {
          "bg-to": "#F5F5F5",
          arrow: "#1976D2",
          "arrow-focus": "rgba(66,165,245,0.25)",
          "eyebrow-bg": "#E3F2FD",
          "eyebrow-text": "#1976D2",
          heading: "#424242",
          body: "#424242",
          "card-border": "rgba(224,224,224,0.08)",
          "card-hover-border": "rgba(144,202,249,0.20)",
          "overlay-from": "rgba(13,71,161,0)",
          "overlay-to": "rgba(13,71,161,0.75)",
          "role-text": "#90CAF9",
          "dot-active": "#1976D2",
          "dot-inactive": "#E0E0E0",
        },
        "appointment-referral": {
          "section-bg": "#F5F5F5",
          "submit-hover": "#F5F5F5",
        },
        "reach-us": {
          "bg-glow": "rgba(25,118,210,0.05)",
          "value-text": "#424242",
          "hover-alt": "#1976D2",
          "row-border": "#E0E0E0",
          "info-card-border": "#E0E0E0",
          "map-border": "#E0E0E0",
          "map-bg": "#E3F2FD",
          "clinic-card-border": "rgba(224,224,224,0.9)",
        },
        divider: {
          DEFAULT: "#E0E0E0",
        },
        focus: {
          /** Bright Blue, not Light Blue — the approved mapping found Light Blue insufficient for a 3:1 focus-visible ring on white. */
          ring: "#42A5F5",
          "ring-teal": "rgba(66,165,245,0.25)",
        },
        footer: {
          "hover-text": "#42A5F5",
          "logo-accent": "#42A5F5",
          "glow-strong": "rgba(25,118,210,0.08)",
          "glow-soft": "rgba(25,118,210,0.05)",
        },
        booking: {
          "badge-bg": "#E3F2FD",
          text: {
            body: "#424242",
            "muted-alt": "#424242",
            /** Placeholder text is exempt from the persistent-content contrast bar the approved mapping applied elsewhere — Medium Neutral is acceptable for hint text that disappears on input. */
            placeholder: "#9E9E9E",
          },
          border: {
            card: "#E0E0E0",
            panel: "#E0E0E0",
          },
          button: {
            /** Secondary/outline CTA now follows the Alliance secondary-CTA pattern (blue border/text, not neutral gray) per the approved mapping. */
            "secondary-border": "#1976D2",
            "secondary-text": "#1976D2",
            "secondary-hover-bg": "#E3F2FD",
          },
          cta: {
            from: "#0D47A1",
          },
          /** The booking-specific blue is now the same Alliance Primary Blue used for every other primary interactive element — no longer a disconnected non-brand blue. */
          blue: {
            DEFAULT: "#1976D2",
          },
          step: {
            "inactive-bg": "#E0E0E0",
          },
          calendar: {
            "nav-icon": "#424242",
            /** Disabled state — de-emphasized by definition, Medium Neutral is appropriate here (non-interactive, not a contrast-critical read). */
            "disabled-text": "#9E9E9E",
            "available-bg": "#E3F2FD",
            "available-text": "#1976D2",
            "available-hover-bg": "#90CAF9",
          },
          time: {
            border: "#E0E0E0",
            text: "#424242",
            "hover-bg": "#E3F2FD",
          },
          doctor: {
            glow: "rgba(25,118,210,0.08)",
          },
        },
        "contact-page": {
          "hero-glow": "rgba(25,118,210,0.06)",
          "sidebar-border": "#E0E0E0",
          "sidebar-bg": "#E3F2FD",
          "sidebar-row-border": "#E0E0E0",
          "cta-text": "#0D47A1",
        },
        "service-detail": {
          hero: {
            "scrim-1": "rgba(227,242,253,0.96)",
            "scrim-2": "rgba(227,242,253,0.82)",
            "scrim-3": "rgba(227,242,253,0.38)",
            "scrim-4": "rgba(227,242,253,0.08)",
          },
          /** Decorative separator glyph, not readable content — Medium Neutral is appropriate. */
          "breadcrumb-chevron": "#9E9E9E",
          "benefit-text": "#424242",
          faq: {
            border: "#90CAF9",
          },
        },
      },
      boxShadow: {
        card: "0 10px 28px rgba(13,71,161,0.07)",
        "card-hover": "0 18px 36px rgba(13,71,161,0.12)",
        dropdown: "0 12px 32px rgba(13,71,161,0.16)",
        elevated: "0 18px 38px rgba(13,71,161,0.09)",
        "nav-cta-hover": "0 6px 14px rgba(13,71,161,0.22)",
        "nav-scrolled": "0 4px 18px rgba(13,71,161,0.08)",
        "nav-mobile-panel": "0 16px 32px rgba(13,71,161,0.12)",
        "hero-arrow": "0 5px 16px rgba(25,118,210,0.08)",
        "bright-cta": "0 8px 20px rgba(25,118,210,0.16)",
        "bright-cta-hover": "0 12px 25px rgba(13,71,161,0.22)",
        "hero-info-card-hover": "0 16px 30px rgba(13,71,161,0.16)",
        "about-feature-icon": "0 7px 18px rgba(25,118,210,0.15)",
        "about-cta": "0 9px 20px rgba(25,118,210,0.18)",
        "care-card": "0 12px 30px rgba(13,71,161,0.07)",
        "care-card-hover": "0 18px 36px rgba(13,71,161,0.11)",
        "care-dot-ring": "0 0 0 5px rgba(25,118,210,0.08)",
        "team-arrow": "0 7px 20px rgba(25,118,210,0.10)",
        "team-card-hover": "0 18px 38px rgba(13,71,161,0.13)",
        "reach-cta": "0 14px 32px rgba(13,71,161,0.16)",
        "reach-info-card-1": "0 12px 30px rgba(13,71,161,0.07)",
        "reach-info-card-2": "0 12px 28px rgba(13,71,161,0.06)",
        "reach-map-clinic-card": "0 12px 28px rgba(13,71,161,0.12)",
        "reach-map-parking": "0 10px 24px rgba(13,71,161,0.10)",
        "booking-card": "0 4px 24px rgba(13,71,161,0.08)",
        "booking-cta-hover": "0 10px 22px rgba(25,118,210,0.28)",
        /** Focus-ring shadow — Bright Blue per the approved mapping's accessibility finding. */
        "booking-focus-ring": "0 0 0 3px rgba(66,165,245,0.10)",
        "service-detail-faq": "0 6px 18px rgba(13,71,161,0.07)",
      },
      keyframes: {
        "fade-slide": {
          from: { opacity: "0", transform: "translateY(-8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "mobile-fade": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-img-in": {
          from: { opacity: "0", transform: "scale(1.04)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "hero-up": {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "svc-item": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "about-fade-l": {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "about-fade-r": {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "about-fade-img": {
          from: { opacity: "0", transform: "scale(1.025)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "hero-clinic-in": {
          from: { opacity: "0", transform: "scale(0.98)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "hero-frame-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "about-fade-up": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "care-move": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "care-doctor-in": {
          from: { opacity: "0", transform: "scale(0.97)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "care-left-in": {
          from: { opacity: "0", transform: "translateX(-18px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "care-right-in": {
          from: { opacity: "0", transform: "translateX(18px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "team-fade": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "ru-fade": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "ru-fade-left": {
          from: { opacity: "0", transform: "translateX(-22px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "ru-fade-right": {
          from: { opacity: "0", transform: "translateX(22px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "ru-row": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "ft-fade": {
          from: { opacity: "0", transform: "translateY(15px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-slide": "fade-slide 0.2s ease",
        "mobile-fade": "mobile-fade 0.25s ease forwards",
        "hero-img-in": "hero-img-in 0.8s ease both",
        "card-up": "hero-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        "svc-item": "svc-item 500ms cubic-bezier(0.22,1,0.36,1) both",
        "about-fade-l": "about-fade-l 600ms cubic-bezier(0.22,1,0.36,1) both",
        "about-fade-r": "about-fade-r 650ms cubic-bezier(0.22,1,0.36,1) 180ms both",
        "about-fade-img": "about-fade-img 650ms cubic-bezier(0.22,1,0.36,1) 100ms both",
        "hero-clinic-in": "hero-clinic-in 700ms cubic-bezier(0.22,1,0.36,1) 120ms both",
        "hero-frame-in": "hero-frame-in 700ms ease both",
        "about-fade-up": "about-fade-up 500ms ease both",
        "care-fade": "about-fade-up 500ms ease both",
        "care-title": "care-move 550ms ease 80ms both",
        "care-desc": "care-move 550ms ease 140ms both",
        "care-doctor-in": "care-doctor-in 600ms cubic-bezier(0.22,1,0.36,1) 120ms both",
        "care-left-in": "care-left-in 550ms cubic-bezier(0.22,1,0.36,1) both",
        "care-right-in": "care-right-in 550ms cubic-bezier(0.22,1,0.36,1) both",
        "team-badge": "team-fade 500ms cubic-bezier(0.22,1,0.36,1) both",
        "team-title": "team-fade 550ms cubic-bezier(0.22,1,0.36,1) 60ms both",
        "team-desc": "team-fade 550ms cubic-bezier(0.22,1,0.36,1) 120ms both",
        "team-card": "team-fade 450ms cubic-bezier(0.22,1,0.36,1) both",
        "ru-badge": "ru-fade 500ms ease both",
        "ru-heading": "ru-fade 600ms cubic-bezier(0.22,1,0.36,1) 60ms both",
        "ru-desc": "ru-fade 600ms cubic-bezier(0.22,1,0.36,1) 120ms both",
        "ru-map": "ru-fade-left 600ms cubic-bezier(0.22,1,0.36,1) 150ms both",
        "ru-side": "ru-fade-right 600ms cubic-bezier(0.22,1,0.36,1) 200ms both",
        "ru-clinic-card": "about-fade-up 500ms ease 300ms both",
        "ru-parking-note": "about-fade-up 500ms ease 380ms both",
        "ru-row": "ru-row 450ms ease both",
        "ft-col1": "ft-fade 450ms ease both",
        "ft-col2": "ft-fade 450ms ease 70ms both",
        "ft-col3": "ft-fade 450ms ease 140ms both",
        "ft-col4": "ft-fade 450ms ease 210ms both",
      },
    },
  },
  plugins: [],
};

export default config;
