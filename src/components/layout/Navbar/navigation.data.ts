import { SERVICES } from "../../../sections/home/Services/services.data";
import { withLocale } from "../../../i18n/routing";
import type { Language, TranslateFn } from "../../../i18n/types";
import { SITE } from "../../../lib/constants";

const URGENT_CARE_SERVICE_ID = "urgent-care";
const OCCUPATIONAL_HEALTH_SERVICE_ID = "occupational-health";

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export function buildNavItems(t: TranslateFn, language: Language): NavItem[] {
  const servicesDropdown: NavDropdownItem[] = SERVICES.map((service) => ({
    label: t(`services.items.${service.translationKey}.title`),
    href:
      service.id === URGENT_CARE_SERVICE_ID
        ? withLocale(SITE.urgentCareHref, language)
        : service.id === OCCUPATIONAL_HEALTH_SERVICE_ID
          ? withLocale(SITE.occupationalHealthHref, language)
          : withLocale(`/#${service.id}`, language),
  }));

  return [
    { label: t("navbar.home"), href: withLocale("/", language) },
    { label: t("navbar.services"), href: withLocale("/#services", language), dropdown: servicesDropdown },
    { label: t("navbar.aboutUs"), href: withLocale("/#about", language) },
    { label: t("navbar.contactUs"), href: withLocale("/#contact", language) },
  ];
}
