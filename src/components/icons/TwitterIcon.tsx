import type { IconProps } from "./types";

export function TwitterIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 5.9c-.7.35-1.5.6-2.3.7a4 4 0 0 0 1.75-2.2c-.8.45-1.65.8-2.55 1a4 4 0 0 0-6.8 3.6A11.4 11.4 0 0 1 3.5 4.6a4 4 0 0 0 1.24 5.3 4 4 0 0 1-1.8-.5 4 4 0 0 0 3.2 3.9 4 4 0 0 1-1.8.07 4 4 0 0 0 3.7 2.8A11.4 11.4 0 0 1 2 18.5a11.4 11.4 0 0 0 6.2 1.8c7.4 0 11.5-6.2 11.5-11.5v-.5c.8-.55 1.5-1.25 2.3-2.4z" />
    </svg>
  );
}
