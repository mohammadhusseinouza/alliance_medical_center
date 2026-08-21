export interface FooterProps {
  showNewsletter?: boolean;
}

export interface FooterLink {
  label: string;
  href: string;
}

export type FooterContactIconName = "map-pin" | "phone" | "printer" | "mail";

export interface FooterContactRow {
  id: string;
  icon: FooterContactIconName;
  iconColor: string;
  lines: string[];
  href?: string;
  external?: boolean;
}
