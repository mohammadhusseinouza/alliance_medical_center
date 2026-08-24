import { SERVICES } from "../../../sections/home/Services/services.data";

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

const SERVICES_DROPDOWN: NavDropdownItem[] = SERVICES.map((service) => ({
  label: service.title,
  href: `/#${service.id}`,
}));

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services", dropdown: SERVICES_DROPDOWN },
  { label: "About Us", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
];
