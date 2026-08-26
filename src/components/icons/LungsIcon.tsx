import type { IconProps } from "./types";

export interface LungsIconProps extends IconProps {
  strokeWidth?: number;
}

export function LungsIcon({ size = 24, strokeWidth = 1.8, className }: LungsIconProps) {
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
      <path d="M8 2v4M16 2v4" />
      <path d="M4 12c2-4 6-4 8-4s6 0 8 4" />
      <path d="M4 12c0 6 4 10 8 10s8-4 8-10" />
    </svg>
  );
}
