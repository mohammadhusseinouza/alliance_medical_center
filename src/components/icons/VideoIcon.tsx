import type { IconProps } from "./types";

export interface VideoIconProps extends IconProps {
  strokeWidth?: number;
}

export function VideoIcon({ size = 24, strokeWidth = 1.8, className }: VideoIconProps) {
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
      <rect x="2" y="5" width="14" height="14" rx="2" />
      <path d="m22 8-6 4 6 4V8z" />
    </svg>
  );
}
