import type { IconProps } from "./types";

export interface MedicalBagIconProps extends IconProps {
  strokeWidth?: number;
}

export function MedicalBagIcon({ size = 24, strokeWidth = 1.6, className }: MedicalBagIconProps) {
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
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <path d="M12 12v4M10 14h4" />
    </svg>
  );
}
