import type { Language } from "./types";

const SPANISH_PREFIX = "/es";

/**
 * Determines the active language from a route pathname alone (no hash).
 * The URL is the single source of truth for language — `/es` and any path
 * beginning with `/es/` are Spanish, everything else is English.
 */
export function detectLanguageFromPath(pathname: string): Language {
  if (pathname === SPANISH_PREFIX || pathname.startsWith(`${SPANISH_PREFIX}/`)) return "es";
  return "en";
}

/**
 * Removes a `/es` locale prefix from a pathname, returning the canonical
 * (English-form) pathname. Idempotent — safe to call on an already-bare path.
 */
export function stripLocale(pathname: string): string {
  if (pathname === SPANISH_PREFIX) return "/";
  if (pathname.startsWith(`${SPANISH_PREFIX}/`)) return pathname.slice(SPANISH_PREFIX.length);
  return pathname;
}

/**
 * Builds a language-aware href from a canonical path (which may itself
 * already carry a hash, e.g. "/#services"). Locale-prefixes the pathname
 * portion only — the hash is preserved untouched.
 *
 * withLocale("/", "es")                 -> "/es"
 * withLocale("/book-appointment", "es")  -> "/es/book-appointment"
 * withLocale("/#services", "es")         -> "/es#services"
 * withLocale("/es/book-appointment", "en") -> "/book-appointment"
 */
export function withLocale(path: string, language: Language): string {
  const hashIndex = path.indexOf("#");
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);

  const basePathname = stripLocale(pathname) || "/";

  if (language === "en") {
    return basePathname + hash;
  }

  const localizedPathname = basePathname === "/" ? SPANISH_PREFIX : `${SPANISH_PREFIX}${basePathname}`;
  return localizedPathname + hash;
}

/**
 * Builds the URL to switch the CURRENT location to a different language,
 * preserving whatever page/hash the user is currently on.
 *
 * switchLanguagePath("/es/book-appointment", "#something", "en")
 *   -> "/book-appointment#something"
 */
export function switchLanguagePath(pathname: string, hash: string, targetLanguage: Language): string {
  const basePathname = stripLocale(pathname) || "/";
  return withLocale(basePathname + hash, targetLanguage);
}
