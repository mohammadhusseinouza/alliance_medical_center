import type { IconProps } from "./types";

export interface ClockAltIconProps extends IconProps {
  strokeWidth?: number;
}

/**
 * Distinct from ClockIcon: the source's Opening Hours card icon uses a
 * slightly different hand path ("M12 7v5l3 2") than every other clock
 * icon in the design ("M12 7v5l3 3"). Preserved as-authored, not merged.
 */
export function ClockAltIcon({ size = 24, strokeWidth = 1.6, className }: ClockAltIconProps) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
