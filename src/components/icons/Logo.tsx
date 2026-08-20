export interface LogoProps {
  size?: number;
  secondaryColor?: string;
  className?: string;
}

const BASE_WIDTH = 32;
const BASE_HEIGHT = 38;

export function Logo({ size = BASE_WIDTH, secondaryColor = "#1D6778", className }: LogoProps) {
  const height = Math.round((size * BASE_HEIGHT) / BASE_WIDTH);

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 34 40"
      fill="none"
      className={className}
      style={{ flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M17 2C10 2 5 9 8 16c2.5 5.5 9 7 9 14 0-7 6.5-8.5 9-14 3-7-2-14-9-14z"
        stroke="#8BC59A"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8C13 8 10 12 12 16.5c1.5 3.5 5 4.5 5 9.5 0-5 3.5-6 5-9.5C24 12 21 8 17 8z"
        stroke={secondaryColor}
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
