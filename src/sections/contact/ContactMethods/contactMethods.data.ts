import { SITE } from "../../../lib/constants";

export type ContactMethodIcon = "phone" | "mail" | "map-pin" | "calendar";

export interface ContactMethodItem {
  id: "call" | "email" | "visit" | "bookOnline";
  icon: ContactMethodIcon;
  translationKey: "call" | "email" | "visit" | "bookOnline";
  /** Omitted for the one card (Visit Us) that isn't a genuine link destination. */
  href?: string;
  external?: boolean;
}

export const CONTACT_METHODS: ContactMethodItem[] = [
  { id: "call", icon: "phone", translationKey: "call", href: SITE.phoneHref },
  { id: "email", icon: "mail", translationKey: "email", href: SITE.mailtoHref },
  { id: "visit", icon: "map-pin", translationKey: "visit" },
  { id: "bookOnline", icon: "calendar", translationKey: "bookOnline", href: SITE.bookingHref },
];
