import type { IconProps } from "./types";

export interface TeddyBearIconProps extends IconProps {
  strokeWidth?: number;
}

export function TeddyBearIcon({ size = 24, strokeWidth = 1.7, className }: TeddyBearIconProps) {
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
      <path d="M9 12h.01M15 12h.01M9.5 16c.6.6 1.5 1 2.5 1s1.9-.4 2.5-1" />
      <path d="M8 3.5a2 2 0 0 1 3.6-1.2 2 2 0 0 1 3.6 1.2c1.7.3 3 1.8 3 3.6 0 1-.4 1.9-1 2.6.6.6 1 1.6 1 2.6a3.7 3.7 0 0 1-3.7 3.7H8.7A3.7 3.7 0 0 1 5 12.3c0-1 .4-2 1-2.6-.6-.7-1-1.6-1-2.6 0-1.8 1.3-3.3 3-3.6z" />
    </svg>
  );
}
