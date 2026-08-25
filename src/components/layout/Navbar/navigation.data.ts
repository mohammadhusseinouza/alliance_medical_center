import { SERVICES } from "../../../sections/home/Services/services.data";
import { withLocale } from "../../../i18n/routing";
import type { Language, TranslateFn } from "../../../i18n/types";

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
    href: withLocale(`/#${service.id}`, language),
  }));

  return [
    { label: t("navbar.home"), href: withLocale("/", language) },
    { label: t("navbar.services"), href: withLocale("/#services", language), dropdown: servicesDropdown },
    { label: t("navbar.aboutUs"), href: withLocale("/#about", language) },
    { label: t("navbar.contactUs"), href: withLocale("/#contact", language) },
  ];
}
