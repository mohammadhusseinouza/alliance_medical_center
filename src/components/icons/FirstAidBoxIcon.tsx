import type { IconProps } from "./types";

export interface FirstAidBoxIconProps extends IconProps {
  strokeWidth?: number;
}

/**
 * Distinct from MedicalKitIcon: this omits the top handle-arc path present
 * on MedicalKitIcon, so it's a separate, simpler shape.
 */
export function FirstAidBoxIcon({ size = 24, strokeWidth = 2, className }: FirstAidBoxIconProps) {
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
    </svg>
  );
}
