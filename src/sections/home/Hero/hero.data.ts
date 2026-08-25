import heroImage1 from "../../../assets/home/hero-1.webp";
import heroImage2 from "../../../assets/home/hero-2.webp";
import heroImage3 from "../../../assets/home/hero-3.webp";
import type { HeroSlide } from "./Hero.types";

export const HERO_SLIDES: HeroSlide[] = [
  { id: "quality-care", image: heroImage1, translationKey: "qualityCare" },
  { id: "whole-family", image: heroImage2, translationKey: "wholeFamily" },
  { id: "your-schedule", image: heroImage3, translationKey: "yourSchedule" },
];
