export type WorkplaceHealthServiceIconName = "user" | "flask" | "truck" | "video";

export type WorkplaceHealthServiceTranslationKey = "preEmployment" | "drugTesting" | "dotPhysical" | "telemedicine";

export interface WorkplaceHealthServiceItem {
  id: string;
  translationKey: WorkplaceHealthServiceTranslationKey;
  icon: WorkplaceHealthServiceIconName;
  features: readonly string[];
}
