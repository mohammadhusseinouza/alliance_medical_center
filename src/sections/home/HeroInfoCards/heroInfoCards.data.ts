import { SITE } from "../../../lib/constants";
import type { HeroInfoCardItem } from "./HeroInfoCards.types";

export const HERO_INFO_CARDS: HeroInfoCardItem[] = [
  {
    id: "urgent-care",
    kind: "phone",
    translationKey: "urgentCare",
    gradient: "linear-gradient(145deg, #078D99, #087985)",
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
    gradient: "linear-gradient(145deg, #123E69, #082B50)",
    icon: "users",
    decoration: "heart",
    animationDelayMs: 280,
    ctaHref: SITE.bookingHref,
  },
  {
    id: "opening-hours",
    kind: "hours",
    translationKey: "openingHours",
    gradient: "linear-gradient(145deg, #088C9C, #087B89)",
    icon: "clock-alt",
    decoration: "calendar",
    animationDelayMs: 360,
    hoursValue: SITE.hours.time,
  },
];
