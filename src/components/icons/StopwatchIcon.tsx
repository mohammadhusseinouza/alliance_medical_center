import type { IconProps } from "./types";

/**
 * Distinct from ClockIcon/ClockAltIcon/ClockDialIcon: radius 8 (not 9/10),
 * center offset, and an added top stem line, giving a stopwatch silhouette.
 */
export function StopwatchIcon({ size = 24, className }: IconProps) {
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
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 2" />
      <path d="M9 2h6" />
    </svg>
  );
}
