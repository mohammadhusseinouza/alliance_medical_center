import type { IconProps } from "./types";

export interface ChevronDownIconProps extends IconProps {
  strokeWidth?: number;
}

export function ChevronDownIcon({ size = 12, strokeWidth = 2.2, className }: ChevronDownIconProps) {
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
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
