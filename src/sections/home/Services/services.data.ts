import { SERVICE_ACCENT } from "../../../lib/theme";
import type { ServiceItem } from "./Services.types";

export const SERVICES: ServiceItem[] = [
  {
    id: "family-health",
    icon: "users",
    accentColor: SERVICE_ACCENT.service2,
    href: "#",
    animationDelayMs: 130,
    translationKey: "familyHealth",
  },
  {
    id: "occupational-health",
    icon: "briefcase",
    accentColor: SERVICE_ACCENT.service4,
    href: "#",
    animationDelayMs: 230,
    titleNoWrap: true,
    translationKey: "occupationalHealth",
  },
  {
    id: "womens-health",
    icon: "heart",
    accentColor: SERVICE_ACCENT.service5,
    href: "#",
    animationDelayMs: 280,
    translationKey: "womensHealth",
  },
  {
    id: "pediatric-care",
    icon: "teddy-bear",
    accentColor: SERVICE_ACCENT.service6,
    href: "#",
    animationDelayMs: 330,
    translationKey: "pediatricCare",
  },
  {
    id: "diagnostic-services",
    icon: "flask",
    accentColor: SERVICE_ACCENT.service7,
    href: "#",
    animationDelayMs: 380,
    translationKey: "diagnosticServices",
  },
];
