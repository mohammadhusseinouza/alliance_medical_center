import type { HeroSlide } from "./Hero.types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "quality-care",
    headingLine1: "Quality Care",
    headingLine2: "When You Need It Most",
    description:
      "Compassionate urgent care and family health services for every stage of life in Portage, Michigan.",
    backgroundGradient: "linear-gradient(135deg, #0B5664 0%, #087B87 55%, #0C8F98 100%)",
    ariaLabel: "Doctor with patient in a bright exam room",
    icon: "heart",
  },
  {
    id: "whole-family",
    headingLine1: "Care for Your",
    headingLine2: "Whole Family",
    description: "Convenient primary, preventive, and same-day healthcare for children, adults, and families.",
    backgroundGradient: "linear-gradient(135deg, #103F48 0%, #124954 55%, #0D3941 100%)",
    ariaLabel: "Family health provider with a patient",
    icon: "users",
  },
  {
    id: "your-schedule",
    headingLine1: "Healthcare That",
    headingLine2: "Fits Your Schedule",
    description:
      "Walk in, call ahead, or schedule an appointment with convenient care available seven days a week.",
    backgroundGradient: "linear-gradient(135deg, #123E69 0%, #082B50 100%)",
    ariaLabel: "Physician reviewing a schedule with a patient",
    icon: "clock",
  },
];
