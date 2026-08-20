import type { IconProps } from "./types";

export interface FlaskIconProps extends IconProps {
  strokeWidth?: number;
}

export function FlaskIcon({ size = 24, strokeWidth = 1.7, className }: FlaskIconProps) {
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
      <line x1="8" y1="13" x2="16" y2="13" />
    </svg>
  );
}
