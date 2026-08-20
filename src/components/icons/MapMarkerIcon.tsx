import type { IconProps } from "./types";

export function MapMarkerIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2v20M2 12h20" />
      <rect x="4" y="4" width="16" height="16" rx="3" />
    </svg>
  );
}
