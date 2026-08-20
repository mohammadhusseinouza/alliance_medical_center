import type { Config } from "tailwindcss";

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
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
      },
      colors: {
        brand: {
          teal: {
            700: "#0B5664",
            600: "#087B87",
            500: "#0C8F98",
          },
          dark: {
            DEFAULT: "#103F48",
            end: "#124954",
          },
          navy: {
            DEFAULT: "#082B50",
            light: "#123E69",
          },
          icon: "#1D6778",
        },
        cta: {
          DEFAULT: "#216979",
        },
        text: {
          primary: "#10264A",
          secondary: "#5B7085",
          muted: "#8A97A3",
        },
        nav: {
          active: "#155D72",
          hover: "#EAF3F4",
        },
        border: {
          subtle: "#E2EAED",
        },
        badge: {
          bg: "#EAF6F7",
          text: "#0B8995",
        },
        success: {
          DEFAULT: "#7CA62E",
          text: "#65832A",
          bg: "#F1F8D9",
        },
        accent: {
          lime: "#A9D85C",
          service1: "#12899F",
          service2: "#12A673",
          service3: "#0BA168",
          service4: "#7546E8",
          service5: "#F13C6C",
          service6: "#F29400",
          service7: "#6248E8",
          service8: "#0BA47A",
        },
        contact: {
          map: "#48B9D1",
          phone: "#55C7CE",
          fax: "#A46DF4",
          email: "#4D9CFF",
        },
      },
      boxShadow: {
        card: "0 10px 28px rgba(20,65,85,0.07)",
        "card-hover": "0 18px 36px rgba(25,70,90,0.12)",
        dropdown: "0 12px 32px rgba(18,63,72,0.16)",
        elevated: "0 18px 38px rgba(20,65,85,0.09)",
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
