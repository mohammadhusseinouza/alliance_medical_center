export type HeroSlideTranslationKey = "qualityCare" | "wholeFamily" | "yourSchedule";

export interface HeroSlide {
  id: string;
  image: string;
  /** Key suffix under the `hero.slides.*` translation resource domain. */
  translationKey: HeroSlideTranslationKey;
}
