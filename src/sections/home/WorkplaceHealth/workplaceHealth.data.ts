import type { WorkplaceHealthItem } from "./WorkplaceHealth.types";

export const WORKPLACE_HEALTH_SERVICES: WorkplaceHealthItem[] = [
  {
    id: "physical-exams",
    translationKey: "physicalExams",
    icon: "user",
    animationDelayMs: 0,
  },
  {
    id: "injury-care",
    translationKey: "injuryCare",
    icon: "shield-check",
    animationDelayMs: 60,
  },
  {
    id: "drug-testing",
    translationKey: "drugTesting",
    icon: "flask",
    animationDelayMs: 120,
  },
  {
    id: "telemedicine",
    translationKey: "telemedicine",
    icon: "video",
    animationDelayMs: 180,
  },
  {
    id: "wellness-programs",
    translationKey: "wellnessPrograms",
    icon: "heart-pulse",
    animationDelayMs: 240,
  },
];
