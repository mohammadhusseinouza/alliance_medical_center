import { en } from "./locales/en";

export type Language = "en" | "es";

export const LANGUAGES: readonly Language[] = ["en", "es"];

export const DEFAULT_LANGUAGE: Language = "en";

export const LANGUAGE_STORAGE_KEY = "accessnow-language";

export const INTL_LOCALE_TAGS: Record<Language, string> = {
  en: "en-US",
  es: "es-ES",
};

/**
 * Minimal, dependency-free shape for react-i18next's `t()` — avoids pulling
 * i18next's own generic `TFunction` type into plain data/helper modules.
 */
export type TranslateFn = (key: string, options?: Record<string, unknown>) => string;

/**
 * Widens every string leaf (and string-array leaf) of a resource type to
 * `string`, while still requiring every key/nesting level to be present.
 * This lets `es.ts` be checked against the exact shape of `en.ts` (missing
 * or extra keys are compile errors) without forcing Spanish values to equal
 * the English string literals.
 */
type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type TranslationResource = Widen<typeof en>;
