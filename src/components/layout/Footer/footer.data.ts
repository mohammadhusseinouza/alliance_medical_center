import { SITE } from "../../../lib/constants";
import type { FooterContactRow, FooterLink } from "./Footer.types";

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

export const FOOTER_SERVICE_LINKS: FooterLink[] = [
  { label: "Urgent Care", href: "#" },
  { label: "Occupational Health", href: "#" },
  { label: "Family Medicine", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Women's Health", href: "#" },
  { label: "Diagnostic Services", href: "#" },
  { label: "Pediatric Care", href: "#" },
  { label: "Health Education", href: "#" },
  { label: "Weight Loss", href: "#" },
];

export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "HIPAA Notice", href: "#" },
];
