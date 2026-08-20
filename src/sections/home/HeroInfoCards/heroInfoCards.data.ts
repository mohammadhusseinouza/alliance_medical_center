import { SITE } from "../../../lib/constants";
import type { HeroInfoCardItem } from "./HeroInfoCards.types";

export const HERO_INFO_CARDS: HeroInfoCardItem[] = [
  {
    id: "urgent-care",
    kind: "phone",
    title: "Urgent Care",
    gradient: "linear-gradient(145deg, #078D99, #087985)",
    icon: "medical-bag",
    decoration: "heart",
    animationDelayMs: 200,
    description: "Walk-in care for illnesses, minor injuries, and non-life-threatening conditions.",
    phoneLabel: SITE.phone,
    phoneHref: SITE.phoneHref,
  },
  {
    id: "family-health",
    kind: "cta",
    title: "Family Health",
    gradient: "linear-gradient(145deg, #123E69, #082B50)",
    icon: "users",
    decoration: "heart",
    animationDelayMs: 280,
    description: "Preventive and personalized healthcare services for children, adults, and the whole family.",
    ctaLabel: "Book Appointment",
    ctaHref: SITE.bookingHref,
  },
  {
    id: "opening-hours",
    kind: "hours",
    title: "Opening Hours",
    gradient: "linear-gradient(145deg, #088C9C, #087B89)",
    icon: "clock-alt",
    decoration: "calendar",
    animationDelayMs: 360,
    rows: [{ label: SITE.hours.days, value: SITE.hours.time }],
    statusLabel: "Open 7 Days",
  },
];
