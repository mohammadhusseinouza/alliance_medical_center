import { SITE } from "../../../lib/constants";
import type { HeroInfoCardItem } from "./HeroInfoCards.types";

export const HERO_INFO_CARDS: HeroInfoCardItem[] = [
  {
    id: "urgent-care",
    kind: "phone",
    translationKey: "urgentCare",
    gradient: "linear-gradient(145deg, var(--hero-info-urgent-from), var(--hero-info-urgent-to))",
    icon: "medical-bag",
    decoration: "heart",
    animationDelayMs: 200,
    phoneLabel: SITE.phone,
    phoneHref: SITE.phoneHref,
  },
  {
    id: "family-health",
    kind: "cta",
    translationKey: "familyHealth",
    gradient: "linear-gradient(145deg, var(--brand-navy-light), var(--brand-navy))",
    icon: "users",
    decoration: "heart",
    animationDelayMs: 280,
    ctaHref: SITE.bookingHref,
  },
  {
    id: "opening-hours",
    kind: "hours",
    translationKey: "openingHours",
    gradient: "linear-gradient(145deg, var(--hero-info-hours-from), var(--hero-info-hours-to))",
    icon: "clock-alt",
    decoration: "calendar",
    animationDelayMs: 360,
    hoursValue: SITE.hours.time,
  },
];
