export type HeroInfoCardIcon = "medical-bag" | "users" | "clock-alt";
export type HeroInfoCardDecoration = "heart" | "calendar";
export type HeroInfoCardTranslationKey = "urgentCare" | "familyHealth" | "openingHours";

interface HeroInfoCardCommon {
  id: string;
  /** Key suffix under the `heroInfoCards.*` translation resource domain. */
  translationKey: HeroInfoCardTranslationKey;
  gradient: string;
  icon: HeroInfoCardIcon;
  decoration: HeroInfoCardDecoration;
  animationDelayMs: number;
}

export interface HeroInfoCardPhone extends HeroInfoCardCommon {
  kind: "phone";
  phoneLabel: string;
  phoneHref: string;
}

export interface HeroInfoCardCta extends HeroInfoCardCommon {
  kind: "cta";
  ctaHref: string;
}

export interface HeroInfoCardHours extends HeroInfoCardCommon {
  kind: "hours";
  hoursValue: string;
}

export type HeroInfoCardItem = HeroInfoCardPhone | HeroInfoCardCta | HeroInfoCardHours;
