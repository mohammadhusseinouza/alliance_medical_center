import type { IconProps } from "./types";

export interface EyeIconProps extends IconProps {
  strokeWidth?: number;
}

export function EyeIcon({ size = 24, strokeWidth = 1.8, className }: EyeIconProps) {
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
      <path d="M22 12s-3.5 7-10 7-10-7-10-7 3.5-7 10-7 10 7 10 7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
