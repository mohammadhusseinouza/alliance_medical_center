import { SITE } from "../../../lib/constants";
import type { ContactRow, ReachAction } from "./ReachUs.types";

export const CONTACT_ROWS: ContactRow[] = [
  {
    id: "address",
    icon: "map-pin",
    translationKey: "address",
    value: SITE.address.full,
    href: SITE.address.mapsHref,
    external: true,
    hoverUnderline: true,
    animationDelayMs: 0,
  },
  {
    id: "phone",
    icon: "phone",
    translationKey: "phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    animationDelayMs: 60,
  },
  {
    id: "fax",
    icon: "printer",
    translationKey: "fax",
    value: SITE.fax,
    animationDelayMs: 120,
  },
];

export const REACH_ACTIONS: ReachAction[] = [
  {
    id: "get-directions",
    icon: "arrow-up-right",
    translationKey: "getDirections",
    href: SITE.address.directionsHref,
    external: true,
  },
  {
    id: "call-now",
    icon: "phone",
    translationKey: "callNow",
    subtitleValue: SITE.phone,
    href: SITE.phoneHref,
  },
];
