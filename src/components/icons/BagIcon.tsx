import type { IconProps } from "./types";

export interface BagIconProps extends IconProps {
  strokeWidth?: number;
}

export function BagIcon({ size = 24, strokeWidth = 2, className }: BagIconProps) {
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
      <rect x="4" y="8" width="16" height="13" rx="1" />
      <path d="M9 8V5a3 3 0 0 1 6 0v3" />
    </svg>
  );
}
