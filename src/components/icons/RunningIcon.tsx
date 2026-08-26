import type { IconProps } from "./types";

export interface RunningIconProps extends IconProps {
  strokeWidth?: number;
}

export function RunningIcon({ size = 24, strokeWidth = 1.8, className }: RunningIconProps) {
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
      <circle cx="13" cy="4" r="2" />
      <path d="M4 20l4-8 3 2 2-4 5 3" />
    </svg>
  );
}
