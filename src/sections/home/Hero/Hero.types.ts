export type HeroSlideIcon = "heart" | "users" | "clock";

export interface HeroSlide {
  id: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  backgroundGradient: string;
  ariaLabel: string;
  icon: HeroSlideIcon;
}
