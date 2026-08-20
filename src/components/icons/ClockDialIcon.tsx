import type { IconProps } from "./types";

export interface ClockDialIconProps extends IconProps {
  strokeWidth?: number;
}

/**
 * Distinct from ClockIcon/ClockAltIcon: About's stat icon uses r=10 (not 9)
 * and hand path "M12 6v6l4 2" — different geometry, preserved as-authored.
 */
export function ClockDialIcon({ size = 24, strokeWidth = 1.8, className }: ClockDialIconProps) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
