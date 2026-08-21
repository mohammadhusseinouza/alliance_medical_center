export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Urgent Care",
    href: "#",
    dropdown: [
      { label: "Urgent Care Services", href: "#" },
      { label: "Illness & Injury", href: "#" },
      { label: "Physical Exams", href: "#" },
      { label: "Walk-In Care", href: "#" },
      { label: "Pediatric Urgent Care", href: "#" },
    ],
  },
  {
    label: "Family Medicine/Wellness",
    href: "#",
    dropdown: [
      { label: "Family Medicine", href: "#" },
      { label: "Preventive Care", href: "#" },
      { label: "Annual Physicals", href: "#" },
      { label: "Women's Health", href: "#" },
      { label: "Men's Health", href: "#" },
      { label: "Chronic Disease Management", href: "#" },
    ],
  },
  { label: "Weight Loss", href: "#" },
  { label: "Educate Yourself", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Careers", href: "#" },
];
