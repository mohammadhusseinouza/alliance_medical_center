export type HeroInfoCardIcon = "medical-bag" | "users" | "clock-alt";
export type HeroInfoCardDecoration = "heart" | "calendar";

interface HeroInfoCardCommon {
  id: string;
  title: string;
  gradient: string;
  icon: HeroInfoCardIcon;
  decoration: HeroInfoCardDecoration;
  animationDelayMs: number;
}

export interface HeroInfoCardPhone extends HeroInfoCardCommon {
  kind: "phone";
  description: string;
  phoneLabel: string;
  phoneHref: string;
}

export interface HeroInfoCardCta extends HeroInfoCardCommon {
  kind: "cta";
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface HeroInfoCardHoursRow {
  label: string;
  value: string;
}

export interface HeroInfoCardHours extends HeroInfoCardCommon {
  kind: "hours";
  rows: HeroInfoCardHoursRow[];
  statusLabel: string;
}

export type HeroInfoCardItem = HeroInfoCardPhone | HeroInfoCardCta | HeroInfoCardHours;
