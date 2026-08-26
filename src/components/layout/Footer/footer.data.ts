import { withLocale } from "../../../i18n/routing";
import type { Language, TranslateFn } from "../../../i18n/types";
import { SERVICES } from "../../../sections/home/Services/services.data";
import { SITE } from "../../../lib/constants";
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
};

export const FOOTER_CONTACT_ROWS: FooterContactRow[] = [
  {
    id: "address",
    icon: "map-pin",
    iconColor: "#48B9D1",
    lines: [SITE.address.line1, SITE.address.line2],
    href: SITE.address.mapsHref,
    external: true,
  },
  {
    id: "phone",
    icon: "phone",
    iconColor: "#55C7CE",
    lines: [SITE.phone],
    href: SITE.phoneHref,
  },
  {
    id: "fax",
    icon: "printer",
    iconColor: "#A46DF4",
    lines: [SITE.fax],
  },
  {
    id: "email",
    icon: "mail",
    iconColor: "#4D9CFF",
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
