import { useCallback, useEffect, useRef, useState } from "react";

export interface UseCarouselOptions {
  slideCount: number;
  autoplayInterval?: number;
  resumeDelay?: number;
}

export interface UseCarouselResult {
  index: number;
  goTo: (index: number) => void;
  next: () => void;
  previous: () => void;
  reducedMotion: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function wrap(index: number, length: number): number {
  return ((index % length) + length) % length;
}

export function useCarousel({
  slideCount,
  autoplayInterval = 6500,
  resumeDelay = 8000,
}: UseCarouselOptions): UseCarouselResult {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [reducedMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const goTo = useCallback(
    (nextIndex: number) => {
      setIndex(wrap(nextIndex, slideCount));
      setManuallyPaused(true);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => setManuallyPaused(false), resumeDelay);
    },
    [slideCount, resumeDelay],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (reducedMotion || hovered || manuallyPaused) return;

    const id = setInterval(() => {
      if (document.visibilityState === "visible") {
        setIndex((current) => wrap(current + 1, slideCount));
      }
    }, autoplayInterval);

    return () => clearInterval(id);
  }, [reducedMotion, hovered, manuallyPaused, slideCount, autoplayInterval]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return {
    index,
    goTo,
    next,
    previous,
    reducedMotion,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };
}
