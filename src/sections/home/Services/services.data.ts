import type { ServiceItem } from "./Services.types";

export const SERVICES: ServiceItem[] = [
  {
    id: "urgent-care",
    icon: "medical-kit",
    accentColor: "#12899F",
    href: "#",
    animationDelayMs: 80,
    translationKey: "urgentCare",
  },
  {
    id: "family-health",
    icon: "users",
    accentColor: "#12A673",
    href: "#",
    animationDelayMs: 130,
    translationKey: "familyHealth",
  },
  {
    id: "occupational-health",
    icon: "briefcase",
    accentColor: "#7546E8",
    href: "#",
    animationDelayMs: 230,
    titleNoWrap: true,
    translationKey: "occupationalHealth",
  },
  {
    id: "womens-health",
    icon: "heart",
    accentColor: "#F13C6C",
    href: "#",
    animationDelayMs: 280,
    translationKey: "womensHealth",
  },
  {
    id: "pediatric-care",
    icon: "teddy-bear",
    accentColor: "#F29400",
    href: "#",
    animationDelayMs: 330,
    translationKey: "pediatricCare",
  },
  {
    id: "diagnostic-services",
    icon: "flask",
    accentColor: "#6248E8",
    href: "#",
    animationDelayMs: 380,
    translationKey: "diagnosticServices",
  },
];
