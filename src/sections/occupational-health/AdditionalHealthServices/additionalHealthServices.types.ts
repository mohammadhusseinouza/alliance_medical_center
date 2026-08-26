export type AdditionalHealthServiceIconName = "running" | "home" | "shield-check";

export type AdditionalHealthServiceTranslationKey = "sports" | "school" | "vaccinations";

export interface AdditionalHealthServiceItem {
  id: string;
  translationKey: AdditionalHealthServiceTranslationKey;
  icon: AdditionalHealthServiceIconName;
  accent?: "success";
}
