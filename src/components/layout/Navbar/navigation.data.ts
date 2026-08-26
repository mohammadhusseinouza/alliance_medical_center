import { SERVICES } from "../../../sections/home/Services/services.data";
import { withLocale } from "../../../i18n/routing";
import type { Language, TranslateFn } from "../../../i18n/types";
import { SITE } from "../../../lib/constants";

const OCCUPATIONAL_HEALTH_SERVICE_ID = "occupational-health";

/**
 * Services with their own dedicated route instead of a Home-page anchor.
 * Occupational Health isn't listed here — it's filtered out of this dropdown
 * entirely and lives as its own top-level Navbar item.
 */
const DEDICATED_SERVICE_HREFS: Record<string, string> = {
  "urgent-care": SITE.urgentCareHref,
  "diagnostic-services": SITE.diagnosticServicesHref,
  "womens-health": SITE.womensHealthHref,
};

export interface NavDropdownItem {
  label: string;
  href: string;
}

/**
 * Which canonical (locale-stripped) route category makes this item's
 * underline active. Home-page hashes never factor in — only the pathname
 * itself decides, so exactly one top-level item can ever be active. Items
 * without a value (About Us, Contact Us) never show as active.
 */
export type NavActiveMatch = "home" | "services" | "occupational-health";

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
  activeMatch?: NavActiveMatch;
}

export function buildNavItems(t: TranslateFn, language: Language): NavItem[] {
  const servicesDropdown: NavDropdownItem[] = SERVICES.filter(
    (service) => service.id !== OCCUPATIONAL_HEALTH_SERVICE_ID,
  ).map((service) => ({
    label: t(`services.items.${service.translationKey}.title`),
    href: withLocale(DEDICATED_SERVICE_HREFS[service.id] ?? `/#${service.id}`, language),
  }));

  return [
    { label: t("navbar.home"), href: withLocale("/", language), activeMatch: "home" },
    {
      label: t("navbar.services"),
      href: withLocale("/#services", language),
      dropdown: servicesDropdown,
      activeMatch: "services",
    },
    {
      label: t("navbar.occupationalHealth"),
      href: withLocale(SITE.occupationalHealthHref, language),
      activeMatch: "occupational-health",
    },
    { label: t("navbar.aboutUs"), href: withLocale("/#about", language) },
    { label: t("navbar.contactUs"), href: withLocale("/#contact", language) },
  ];
}
