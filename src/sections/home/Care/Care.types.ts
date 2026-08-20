export type CareIconName = "user-group" | "bag" | "activity" | "thermometer" | "first-aid-box" | "flask";

export interface CareItem {
  id: string;
  title: string;
  description: string;
  icon: CareIconName;
  position: "left" | "right";
  animationDelayMs: number;
}
