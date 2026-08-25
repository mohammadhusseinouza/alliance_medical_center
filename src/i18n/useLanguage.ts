import { useLayoutEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { i18n } from "./index";
import { detectLanguageFromPath } from "./routing";
import type { Language } from "./types";

/**
 * Pure derivation of the current language from the route. Safe to call from
 * any component under the router — no side effects, no context needed.
 */
export function useLanguage(): Language {
  const { pathname } = useLocation();
  return useMemo(() => detectLanguageFromPath(pathname), [pathname]);
}

/**
 * The single place that keeps i18next and `<html lang>` in sync with the
 * route. Call once, near the app root (inside the router). Uses a layout
 * effect so the DOM `lang` attribute updates before paint on navigation.
 */
export function useLanguageSync(): Language {
  const language = useLanguage();

  useLayoutEffect(() => {
    if (i18n.language !== language) {
      void i18n.changeLanguage(language);
    }
    document.documentElement.lang = language;
  }, [language]);

  return language;
}
