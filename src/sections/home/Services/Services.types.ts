export type ServiceIconName =
  | "medical-kit"
  | "users"
  | "heart-pulse"
  | "briefcase"
  | "heart"
  | "teddy-bear"
  | "flask"
  | "book-open";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconName;
  accentColor: string;
  href: string;
  animationDelayMs: number;
  titleNoWrap?: boolean;
}
