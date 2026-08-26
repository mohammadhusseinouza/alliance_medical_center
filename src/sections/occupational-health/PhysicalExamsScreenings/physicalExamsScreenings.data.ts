import type { PhysicalExamItem } from "./physicalExamsScreenings.types";

export const PHYSICAL_EXAM_ITEMS: PhysicalExamItem[] = [
  {
    id: "pre-employment-physicals",
    translationKey: "preEmployment",
    icon: "user",
  },
  {
    id: "fit-for-duty-exams",
    translationKey: "fitForDuty",
    icon: "eye",
  },
  {
    id: "return-to-work-evaluations",
    translationKey: "returnToWork",
    icon: "rotate",
  },
  {
    id: "respirator-medical-exams",
    translationKey: "respirator",
    icon: "lungs",
  },
  {
    id: "surveillance-screenings",
    translationKey: "surveillance",
    icon: "shield-check",
  },
  {
    id: "laboratory-testing",
    translationKey: "laboratory",
    icon: "flask",
    accent: "success",
  },
];
