import type { AboutStat } from "./About.types";

export const ABOUT_STATS: AboutStat[] = [
  {
    id: "open-7-days",
    icon: "clock-dial",
    translationKey: "openDays",
    titleKey: "common.openDays",
    animationDelayMs: 180,
  },
  {
    id: "on-site-diagnostics",
    icon: "flask-basic",
    translationKey: "diagnostics",
    animationDelayMs: 260,
  },
  {
    id: "portage-michigan",
    icon: "map-pin",
    translationKey: "location",
    animationDelayMs: 340,
  },
];
