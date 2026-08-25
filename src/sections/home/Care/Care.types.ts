export type CareIconName = "user-group" | "bag" | "activity" | "thermometer" | "first-aid-box" | "flask";

export type CareTranslationKey =
  | "familiesIndividuals"
  | "workSchool"
  | "activePeople"
  | "everydayIllnesses"
  | "minorInjuries"
  | "onSiteServices";

export interface CareItem {
  id: string;
  /** Key suffix under the `care.items.*` translation resource domain. */
  translationKey: CareTranslationKey;
  icon: CareIconName;
  position: "left" | "right";
  animationDelayMs: number;
}
