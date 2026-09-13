import { SITE } from "../../lib/constants";

/**
 * Derived from the canonical `SITE.address` (single source of truth for the
 * clinic's real-world location, also used by TopBar, Footer, and the Home
 * page's ReachUs section) — only the Contact page's extra country line is
 * unique to this shape.
 */
export const CONTACT_ADDRESS = {
  line1: SITE.address.line1,
  line2: SITE.address.line2,
  line3: "United States",
  full: SITE.address.full,
  mapsHref: SITE.address.mapsHref,
} as const;

/**
 * Only genuinely locale-neutral values (clock times) live here. Day names,
 * day-range labels, and day-count phrases are user-facing language and
 * render through i18n (contact.hours.*) instead.
 */
export const CONTACT_HOURS = {
  weekdayTime: "9:00 AM – 8:00 PM",
  weekendTime: "12:00 PM – 6:00 PM",
  emergencyPhone: SITE.phone,
  emergencyPhoneHref: SITE.phoneHref,
} as const;
