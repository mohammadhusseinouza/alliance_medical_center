import type { IconProps } from "./types";

export interface FlaskBasicIconProps extends IconProps {
  strokeWidth?: number;
}

/**
 * Distinct from FlaskIcon: About's stat icon omits the lower "liquid level"
 * line present on FlaskIcon, so it's a separate, simpler shape.
 */
export function FlaskBasicIcon({ size = 24, strokeWidth = 1.8, className }: FlaskBasicIconProps) {
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
      <path d="M9 2v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V2" />
      <line x1="9" y1="2" x2="15" y2="2" />
    </svg>
  );
}
