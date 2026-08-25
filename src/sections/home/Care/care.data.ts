import type { CareItem } from "./Care.types";

export const CARE_ITEMS: CareItem[] = [
  {
    id: "families-individuals",
    translationKey: "familiesIndividuals",
    icon: "user-group",
    position: "left",
    animationDelayMs: 0,
  },
  {
    id: "work-school",
    translationKey: "workSchool",
    icon: "bag",
    position: "left",
    animationDelayMs: 70,
  },
  {
    id: "active-people",
    translationKey: "activePeople",
    icon: "activity",
    position: "left",
    animationDelayMs: 140,
  },
  {
    id: "everyday-illnesses",
    translationKey: "everydayIllnesses",
    icon: "thermometer",
    position: "right",
    animationDelayMs: 0,
  },
  {
    id: "minor-injuries",
    translationKey: "minorInjuries",
    icon: "first-aid-box",
    position: "right",
    animationDelayMs: 70,
  },
  {
    id: "on-site-services",
    translationKey: "onSiteServices",
    icon: "flask",
    position: "right",
    animationDelayMs: 140,
  },
];
