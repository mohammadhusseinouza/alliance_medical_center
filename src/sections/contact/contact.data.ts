import { SITE } from "../../lib/constants";

/**
 * Address and hours are content the Contact page was specifically briefed
 * with; they differ from SITE.address / SITE.hours (used by TopBar, Footer,
 * and the Home page's ReachUs section) so they live here instead of
 * overwriting shared, site-wide constants used elsewhere.
 */
export const CONTACT_ADDRESS = {
  line1: "2911 Capital Ave SW",
  line2: "Battle Creek, MI 49015",
  line3: "United States",
  full: "2911 Capital Ave SW, Battle Creek, MI 49015",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=2911+Capital+Ave+SW+Battle+Creek+MI+49015",
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
