import type { AdditionalHealthServiceItem } from "./additionalHealthServices.types";

export const ADDITIONAL_HEALTH_SERVICES: AdditionalHealthServiceItem[] = [
  {
    id: "sports-physicals",
    translationKey: "sports",
    icon: "running",
  },
  {
    id: "school-physicals",
    translationKey: "school",
    icon: "home",
  },
  {
    id: "vaccinations-immunizations",
    translationKey: "vaccinations",
    icon: "shield-check",
    accent: "success",
  },
];
