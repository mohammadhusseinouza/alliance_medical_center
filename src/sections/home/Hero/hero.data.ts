import heroImage1 from "../../../assets/home/hero-1.webp";
import heroImage2 from "../../../assets/home/hero-2.webp";
import heroImage3 from "../../../assets/home/hero-3.webp";
import type { HeroSlide } from "./Hero.types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "quality-care",
    headingLine1: "Quality Care",
    headingLine2: "When You Need It Most",
    description:
      "Compassionate urgent care and family health services for every stage of life in Portage, Michigan.",
    image: heroImage1,
    ariaLabel: "Doctor with patient in a bright exam room",
  },
  {
    id: "whole-family",
    headingLine1: "Care for Your",
    headingLine2: "Whole Family",
    description: "Convenient primary, preventive, and same-day healthcare for children, adults, and families.",
    image: heroImage2,
    ariaLabel: "Family health provider with a patient",
  },
  {
    id: "your-schedule",
    headingLine1: "Healthcare That",
    headingLine2: "Fits Your Schedule",
    description:
      "Walk in, call ahead, or schedule an appointment with convenient care available seven days a week.",
    image: heroImage3,
    ariaLabel: "Physician reviewing a schedule with a patient",
  },
];
