import type { IconProps } from "./types";

export interface ChevronIconProps extends IconProps {
  direction: "left" | "right";
  strokeWidth?: number;
}

const POINTS = {
  left: "15 18 9 12 15 6",
  right: "9 18 15 12 9 6",
};

export function ChevronIcon({ direction, size = 18, strokeWidth = 2.2, className }: ChevronIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points={POINTS[direction]} />
    </svg>
  );
}
