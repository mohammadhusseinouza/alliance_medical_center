export type ContactIconName = "map-pin" | "phone" | "printer";
export type ContactRowTranslationKey = "address" | "phone" | "fax";

export interface ContactRow {
  id: string;
  icon: ContactIconName;
  /** Key suffix under the `reachUs.labels.*` translation resource domain. */
  translationKey: ContactRowTranslationKey;
  value: string;
  href?: string;
  external?: boolean;
  hoverUnderline?: boolean;
  animationDelayMs: number;
}

export type ReachActionIcon = "arrow-up-right" | "phone";
export type ReachActionTranslationKey = "getDirections" | "callNow";

export interface ReachAction {
  id: string;
  icon: ReachActionIcon;
  /** Key suffix under the `reachUs.actions.*` translation resource domain. */
  translationKey: ReachActionTranslationKey;
  /**
   * Raw (non-translated) subtitle override — used when the subtitle is
   * literal business data (e.g. the phone number) rather than translatable
   * copy.
   */
  subtitleValue?: string;
  href: string;
  external?: boolean;
}
