import { withLocale } from "../../../i18n/routing";
import type { Language, TranslateFn } from "../../../i18n/types";
import { SERVICES } from "../../../sections/home/Services/services.data";
import { SITE } from "../../../lib/constants";
import { CONTACT_ICON_COLORS } from "../../../lib/theme";
import type { FooterContactRow, FooterLink } from "./Footer.types";

/**
 * Services with their own dedicated route instead of the Home-page anchor
 * fallback.
 */
const DEDICATED_SERVICE_HREFS: Record<string, string> = {
  "urgent-care": SITE.urgentCareHref,
  "occupational-health": SITE.occupationalHealthHref,
  "diagnostic-services": SITE.diagnosticServicesHref,
  "womens-health": SITE.womensHealthHref,
  "pediatric-care": SITE.pediatricCareHref,
  "family-health": SITE.familyHealthHref,
};

export const FOOTER_CONTACT_ROWS: FooterContactRow[] = [
  {
    id: "address",
    icon: "map-pin",
    iconColor: CONTACT_ICON_COLORS.map,
    lines: [SITE.address.line1, SITE.address.line2],
    href: SITE.address.mapsHref,
    external: true,
  },
  {
    id: "phone",
    icon: "phone",
    iconColor: CONTACT_ICON_COLORS.phone,
    lines: [SITE.phone],
    href: SITE.phoneHref,
  },
  {
    id: "fax",
    icon: "printer",
    iconColor: CONTACT_ICON_COLORS.fax,
    lines: [SITE.fax],
  },
  {
    id: "email",
    icon: "mail",
    iconColor: CONTACT_ICON_COLORS.email,
    lines: [SITE.email],
    href: SITE.mailtoHref,
  },
];

/**
 * Derives the Footer's service links from the same structural `SERVICES`
 * enumeration used by the Services section and the Navbar dropdown, so
 * there is exactly one list of the six logical services. `services.data.ts`
 * has no imports back into `components/layout/*`, so this does not create
 * a circular dependency (identical to how `navigation.data.ts` already
 * reuses `SERVICES`).
 */
export function buildFooterServiceLinks(t: TranslateFn, language: Language): FooterLink[] {
  return SERVICES.map((service) => ({
    label: t(`services.items.${service.translationKey}.title`),
    href: withLocale(DEDICATED_SERVICE_HREFS[service.id] ?? `/#${service.id}`, language),
  }));
}

export function buildFooterLegalLinks(t: TranslateFn): FooterLink[] {
  return [
    { label: t("footer.legalLinks.privacyPolicy"), href: "#" },
    { label: t("footer.legalLinks.termsOfService"), href: "#" },
    { label: t("footer.legalLinks.hipaaNotice"), href: "#" },
  ];
}
