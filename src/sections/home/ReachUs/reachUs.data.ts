import { SITE } from "../../../lib/constants";
import type { ContactRow, ReachAction } from "./ReachUs.types";

export const CONTACT_ROWS: ContactRow[] = [
  {
    id: "address",
    icon: "map-pin",
    label: "Address",
    value: SITE.address.full,
    href: SITE.address.mapsHref,
    external: true,
    hoverUnderline: true,
    animationDelayMs: 0,
  },
  {
    id: "phone",
    icon: "phone",
    label: "Phone",
    value: SITE.phone,
    href: SITE.phoneHref,
    animationDelayMs: 60,
  },
  {
    id: "fax",
    icon: "printer",
    label: "Fax",
    value: SITE.fax,
    animationDelayMs: 120,
  },
];

export const REACH_ACTIONS: ReachAction[] = [
  {
    id: "get-directions",
    icon: "arrow-up-right",
    title: "Get Directions",
    subtitle: "Find the fastest route",
    href: SITE.address.directionsHref,
    external: true,
  },
  {
    id: "call-now",
    icon: "phone",
    title: "Call Now",
    subtitle: SITE.phone,
    href: SITE.phoneHref,
  },
];
