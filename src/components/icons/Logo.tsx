import logoSrc from "../../assets/logo.png";
import { SITE } from "../../lib/constants";

export interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Native asset is 2172x724 (exact 3:1). `size` is the rendered height in
 * px; width is derived from the natural ratio so the lockup is never
 * distorted. Default of 50 renders at 150x50.
 */
const NATURAL_WIDTH = 2172;
const NATURAL_HEIGHT = 724;
const DEFAULT_SIZE = 50;

export function Logo({ size = DEFAULT_SIZE, className }: LogoProps) {
  const width = Math.round((size * NATURAL_WIDTH) / NATURAL_HEIGHT);

  return (
    <img
      src={logoSrc}
      alt={SITE.name}
      width={width}
      height={size}
      loading="eager"
      decoding="async"
      className={["object-contain", className].filter(Boolean).join(" ")}
      style={{ flexShrink: 0 }}
    />
  );
}
