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
    },
  },
  plugins: [],
};

export default config;
