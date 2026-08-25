export type AboutStatIcon = "clock-dial" | "flask-basic" | "map-pin";
export type AboutStatTranslationKey = "openDays" | "diagnostics" | "location";

export interface AboutStat {
  id: string;
  icon: AboutStatIcon;
  /** Key suffix under the `about.stats.*` translation resource domain. */
  translationKey: AboutStatTranslationKey;
  /**
   * Overrides the default `about.stats.<translationKey>.title` lookup.
   * Used when this stat's title is a shared, global concept (e.g. the
   * "Open 7 Days" badge reused across TopBar/Hero cards) rather than copy
   * unique to the About section.
   */
  titleKey?: string;
  animationDelayMs: number;
}
