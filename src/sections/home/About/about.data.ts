import type { AboutFeature, AboutStat } from "./About.types";

export const ABOUT_FEATURE: AboutFeature = {
  title: "Comprehensive Care",
  description: "A broad range of services delivered under one roof for greater convenience.",
};

export const ABOUT_STATS: AboutStat[] = [
  {
    id: "open-7-days",
    icon: "clock-dial",
    title: "Open 7 Days",
    description: "12:00 PM – 8:00 PM, every day of the week.",
    animationDelayMs: 180,
  },
  {
    id: "on-site-diagnostics",
    icon: "flask-basic",
    title: "On-Site Diagnostics",
    description: "Labs, X-rays, and testing available without extra stops.",
    animationDelayMs: 260,
  },
  {
    id: "portage-michigan",
    icon: "map-pin",
    title: "Portage, Michigan",
    description: "Convenient, local access for families and employers.",
    animationDelayMs: 340,
  },
];
