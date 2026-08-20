export type ContactIconName = "map-pin" | "phone" | "printer";

export interface ContactRow {
  id: string;
  icon: ContactIconName;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  hoverUnderline?: boolean;
  animationDelayMs: number;
}

export type ReachActionIcon = "arrow-up-right" | "phone";

export interface ReachAction {
  id: string;
  icon: ReachActionIcon;
  title: string;
  subtitle: string;
  href: string;
  external?: boolean;
}
