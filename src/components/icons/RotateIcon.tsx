import type { IconProps } from "./types";

export interface RotateIconProps extends IconProps {
  strokeWidth?: number;
}

export function RotateIcon({ size = 24, strokeWidth = 1.8, className }: RotateIconProps) {
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
      <path d="M3 12a9 9 0 1 0 9-9" />
      <path d="M3 12l4-2M3 12l2 4" />
    </svg>
  );
}
