export type PhysicalExamIconName = "user" | "eye" | "rotate" | "lungs" | "shield-check" | "flask";

export type PhysicalExamTranslationKey =
  | "preEmployment"
  | "fitForDuty"
  | "returnToWork"
  | "respirator"
  | "surveillance"
  | "laboratory";

export interface PhysicalExamItem {
  id: string;
  translationKey: PhysicalExamTranslationKey;
  icon: PhysicalExamIconName;
  accent?: "success";
}
