export interface PulseLineIconProps {
  className?: string;
}

export function PulseLineIcon({ className }: PulseLineIconProps) {
  return (
    <svg
      width={76}
      height={20}
      viewBox="0 0 76 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 10h14l5-7 6 14 5-7h12l5-7 6 14 5-7h14" />
    </svg>
  );
}
