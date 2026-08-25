export type WorkplaceHealthIconName = "user" | "shield-check" | "flask" | "video" | "heart-pulse";

export type WorkplaceHealthTranslationKey =
  | "physicalExams"
  | "injuryCare"
  | "drugTesting"
  | "telemedicine"
  | "wellnessPrograms";

export interface WorkplaceHealthItem {
  id: string;
  /** Key suffix under the `workplaceHealth.items.*` translation resource domain. */
  translationKey: WorkplaceHealthTranslationKey;
  icon: WorkplaceHealthIconName;
  animationDelayMs: number;
}
