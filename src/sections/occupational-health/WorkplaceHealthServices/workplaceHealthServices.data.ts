import type { WorkplaceHealthServiceItem } from "./workplaceHealthServices.types";

export const WORKPLACE_HEALTH_SERVICES: WorkplaceHealthServiceItem[] = [
  {
    id: "pre-employment-physicals",
    translationKey: "preEmployment",
    icon: "user",
    features: ["healthAssessment", "visionHearing", "jobSpecific"],
  },
  {
    id: "drug-testing-services",
    translationKey: "drugTesting",
    icon: "flask",
    features: ["fivePanel", "tenPanel", "breathAlcohol"],
  },
  {
    id: "dot-physical-examinations",
    translationKey: "dotPhysical",
    icon: "truck",
    features: ["certified", "visionHearing", "medicalHistory"],
  },
  {
    id: "telemedicine-services",
    translationKey: "telemedicine",
    icon: "video",
    features: ["remoteSupport", "followUp", "access"],
  },
];
