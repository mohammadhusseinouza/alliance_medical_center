import type { IconProps } from "./types";

export interface PersonIconProps extends IconProps {
  strokeWidth?: number;
}

export function PersonIcon({ size = 24, strokeWidth = 1.3, className }: PersonIconProps) {
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
      <circle cx="12" cy="8" r="4.2" />
      <path d="M4 21c0-4.6 3.6-7.5 8-7.5s8 2.9 8 7.5" />
    </svg>
  );
}
