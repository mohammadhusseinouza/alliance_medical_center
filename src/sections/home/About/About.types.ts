export type AboutStatIcon = "clock-dial" | "flask-basic" | "map-pin";

export interface AboutFeature {
  title: string;
  description: string;
}

export interface AboutStat {
  id: string;
  icon: AboutStatIcon;
  title: string;
  description: string;
  animationDelayMs: number;
}
