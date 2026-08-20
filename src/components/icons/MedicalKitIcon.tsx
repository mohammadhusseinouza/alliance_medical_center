import type { IconProps } from "./types";

export interface MedicalKitIconProps extends IconProps {
  strokeWidth?: number;
}

export function MedicalKitIcon({ size = 24, strokeWidth = 1.7, className }: MedicalKitIconProps) {
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
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M12 10v4M10 12h4" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}
