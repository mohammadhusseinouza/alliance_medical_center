import type { IconProps } from "./types";

export interface TruckIconProps extends IconProps {
  strokeWidth?: number;
}

export function TruckIcon({ size = 24, strokeWidth = 1.8, className }: TruckIconProps) {
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
      <rect x="1" y="6" width="15" height="12" rx="2" />
      <path d="M16 10h3l3 3v5h-6" />
      <circle cx="6" cy="20" r="2" />
      <circle cx="17.5" cy="20" r="2" />
    </svg>
  );
}
