export type ServiceIconName =
  | "medical-kit"
  | "users"
  | "heart-pulse"
  | "briefcase"
  | "heart"
  | "teddy-bear"
  | "flask"
  | "book-open";

export type ServiceTranslationKey =
  | "urgentCare"
  | "familyHealth"
  | "occupationalHealth"
  | "womensHealth"
  | "pediatricCare"
  | "diagnosticServices";

export interface ServiceItem {
  id: string;
  /** Key suffix under the `services.items.*` translation resource domain. */
  translationKey: ServiceTranslationKey;
  icon: ServiceIconName;
  accentColor: string;
  href: string;
  animationDelayMs: number;
  titleNoWrap?: boolean;
}
