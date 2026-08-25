import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./locales/en";
import { es } from "./locales/es";
import { detectLanguageFromPath } from "./routing";
import { DEFAULT_LANGUAGE } from "./types";

const initialLanguage = typeof window === "undefined" ? DEFAULT_LANGUAGE : detectLanguageFromPath(window.location.pathname);

// Set synchronously, before React ever mounts, so a direct /es load never
// paints with the wrong lang attribute or a flash of English content.
if (typeof document !== "undefined") {
  document.documentElement.lang = initialLanguage;
}

void i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
});

// i18next's own init() (see node_modules/i18next/i18next.js) runs its load
// step synchronously whenever `resources` is passed directly — it only
// defers via setTimeout(load, 0) when there are no bundled `resources` and
// `initAsync` is left at its default. Since we always pass `resources`
// above, `.init()` has already fully resolved `i18next.language`/`t()`
// by the time this module finishes evaluating — no separate "immediate"
// flag exists (or is needed) in this i18next version.
if (!i18next.isInitialized) {
  throw new Error("i18next failed to initialize synchronously from bundled resources.");
}

export { i18next as i18n };
export default i18next;
