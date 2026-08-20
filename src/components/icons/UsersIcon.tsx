import type { IconProps } from "./types";

export interface UsersIconProps extends IconProps {
  strokeWidth?: number;
}

export function UsersIcon({ size = 24, strokeWidth = 1.7, className }: UsersIconProps) {
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
      <path d="M18 21a6 6 0 0 0-12 0" />
      <circle cx="12" cy="10" r="4" />
      <path d="M21 21a4 4 0 0 0-3-3.87" />
      <path d="M3 21a4 4 0 0 1 3-3.87" />
    </svg>
  );
}
