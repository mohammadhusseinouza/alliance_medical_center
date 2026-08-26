export type DrugTestingTranslationKey = "fivePanel" | "tenPanel" | "breathAlcohol";

export interface DrugTestingItem {
  id: string;
  translationKey: DrugTestingTranslationKey;
}
