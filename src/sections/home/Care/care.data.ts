import type { CareItem } from "./Care.types";

export const CARE_ITEMS: CareItem[] = [
  {
    id: "families-individuals",
    title: "Families & Individuals",
    description: "Kids, Adults, and Families of every size.",
    icon: "user-group",
    position: "left",
    animationDelayMs: 0,
  },
  {
    id: "work-school",
    title: "Work & School",
    description: "Employers, Workers, School employees, and Small businesses.",
    icon: "bag",
    position: "left",
    animationDelayMs: 70,
  },
  {
    id: "active-people",
    title: "Active People",
    description: "Athletes and active lifestyles deserve expert care.",
    icon: "activity",
    position: "left",
    animationDelayMs: 140,
  },
  {
    id: "everyday-illnesses",
    title: "Everyday Illnesses",
    description: "Cough, fever, sore throat, ear pain, rash, and UTI care.",
    icon: "thermometer",
    position: "right",
    animationDelayMs: 0,
  },
  {
    id: "minor-injuries",
    title: "Minor Injuries",
    description: "Minor injuries, sprains, cuts, and work injuries.",
    icon: "first-aid-box",
    position: "right",
    animationDelayMs: 70,
  },
  {
    id: "on-site-services",
    title: "On-Site Services",
    description: "Labs, X-rays, physicals, and vaccines.",
    icon: "flask",
    position: "right",
    animationDelayMs: 140,
  },
];
