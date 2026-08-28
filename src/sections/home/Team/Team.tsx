import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronIcon } from "../../../components/icons";
import { TEAM_MEMBERS } from "./team.data";
import { TeamCard } from "./TeamCard";

const TOTAL = TEAM_MEMBERS.length;
/** One clone copy on each side of the real roster (previous / real / next).
 * The click guard in requestMove() never lets the track move more than one
 * bounded step (±1, or a dot's ±(TOTAL-1) at most) from an already-settled,
 * already-recentered position, so the track can never reach past these
 * immediate neighbour copies — no larger buffer is needed. */
const SLOT_COUNT = TOTAL * 3;
const BAND_START = TOTAL;
const BAND_END = TOTAL * 2 - 1;
const REAL_COPY_INDEX = 1;
const START_LOGICAL = 4;
const START_TRACK_POSITION = BAND_START + START_LOGICAL;
const RECENTER_FALLBACK_MS = 650;

const arrowButtonClass =
  "absolute top-[150px] z-[5] flex h-[52px] w-[52px] items-center justify-center rounded-full border-none bg-white text-team-arrow shadow-team-arrow transition-[transform,background-color,color] duration-[220ms] ease hover:scale-[1.06] hover:bg-team-arrow hover:text-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-team-arrow-focus mw-700:h-11 mw-700:w-11";

// Mirrors the CSS mw-1100 / mw-700 breakpoints (the same ones driving
// --per-page) purely so accessibility state knows how many cards are
// actually visible. CSS stays authoritative for layout/dimensions — this
// value is never used to size or position anything.
const TABLET_QUERY = "(max-width: 1100px)";
const MOBILE_QUERY = "(max-width: 700px)";

function computeVisibleCount(): number {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia(MOBILE_QUERY).matches) return 1;
  if (window.matchMedia(TABLET_QUERY).matches) return 2;
  return 3;
}

function wrap(index: number, length: number): number {
  return ((index % length) + length) % length;
}

export function Team() {
  const { t } = useTranslation();
  const [trackPosition, setTrackPosition] = useState(START_TRACK_POSITION);
  const [isTransitioning, setIsTransitioning] = useState(false);
  // The logical index accessibility is anchored to. Unlike trackPosition
  // (which moves the instant a click is accepted, driving the visual
  // slide), this only updates once a transition has fully settled — so a
  // card doesn't lose/gain focusability while it's still mid-slide.
  const [settledIndex, setSettledIndex] = useState(() => wrap(START_TRACK_POSITION, TOTAL));
  const [visibleCount, setVisibleCount] = useState(computeVisibleCount);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeIndex = wrap(trackPosition, TOTAL);

  useEffect(() => {
    const tabletQuery = window.matchMedia(TABLET_QUERY);
    const mobileQuery = window.matchMedia(MOBILE_QUERY);
    const update = () => setVisibleCount(computeVisibleCount());
    tabletQuery.addEventListener("change", update);
    mobileQuery.addEventListener("change", update);
    return () => {
      tabletQuery.removeEventListener("change", update);
      mobileQuery.removeEventListener("change", update);
    };
  }, []);

  const recenterIfNeeded = useCallback(() => {
    setTrackPosition((position) => {
      if (position >= BAND_START && position <= BAND_END) return position;
      const track = trackRef.current;
      if (track) {
        // Snap to the visually identical in-band slot with the transition
        // disabled, so the correction is invisible, then restore it.
        track.style.transition = "none";
        requestAnimationFrame(() => {
          const node = trackRef.current;
          if (!node) return;
          void node.offsetHeight;
          node.style.transition = "";
        });
      }
      return BAND_START + wrap(position, TOTAL);
    });
  }, []);

  const finishTransition = useCallback(() => {
    setIsTransitioning(false);
    setSettledIndex(wrap(trackPosition, TOTAL));
    recenterIfNeeded();
  }, [trackPosition, recenterIfNeeded]);

  function handleTrackTransitionEnd(event: React.TransitionEvent<HTMLDivElement>) {
    if (event.target !== trackRef.current || event.propertyName !== "transform") return;
    finishTransition();
  }

  // transitionend can be skipped by the browser (interrupted transitions, a
  // backgrounded tab, etc.), so this is a fallback that settles shortly
  // after the slide should have finished. It reschedules on every position
  // change and is a no-op once isTransitioning is already false.
  useEffect(() => {
    if (!isTransitioning) return;
    const timeoutId = window.setTimeout(finishTransition, RECENTER_FALLBACK_MS);
    return () => window.clearTimeout(timeoutId);
  }, [isTransitioning, finishTransition]);

  /** Guarded, single-step-at-a-time navigation: a click while the previous
   * 550ms slide is still in flight is simply ignored (not queued), which is
   * enough to keep trackPosition bounded without ever needing a large
   * clone buffer. */
  function requestMove(delta: number) {
    if (delta === 0 || isTransitioning) return;
    setTrackPosition((position) => position + delta);
    setIsTransitioning(true);
  }

  function goNext() {
    requestMove(1);
  }

  function goPrevious() {
    requestMove(-1);
  }

  function goToIndex(target: number) {
    requestMove(target - activeIndex);
  }

  return (
    <section
      className="relative px-6 pb-[105px] pt-[95px]"
      style={{ background: "linear-gradient(180deg, var(--surface-pale-2) 0%, var(--team-bg-to) 100%)" }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto w-fit animate-team-badge rounded-[5px] bg-team-eyebrow-bg px-[14px] py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-team-eyebrow-text motion-reduce:[animation-duration:0.01ms]">
          {t("team.eyebrow")}
        </div>

        <h2 className="mt-[18px] animate-team-title font-heading text-center text-[clamp(42px,4vw,58px)] font-bold leading-[1.08] tracking-[-1.2px] text-team-heading motion-reduce:[animation-duration:0.01ms]">
          {t("team.heading")}
        </h2>

        <p className="mx-auto mt-[18px] max-w-[760px] animate-team-desc text-center text-[16px] leading-[1.65] text-team-body motion-reduce:[animation-duration:0.01ms]">
          {t("team.description")}
        </p>

        <div className="relative mt-[55px]">
          <button
            type="button"
            aria-label={t("team.previousMembers")}
            onClick={goPrevious}
            className={`${arrowButtonClass} left-[-26px]`}
          >
            <ChevronIcon direction="left" size={19} />
          </button>
          <button
            type="button"
            aria-label={t("team.nextMembers")}
            onClick={goNext}
            className={`${arrowButtonClass} right-[-26px]`}
          >
            <ChevronIcon direction="right" size={19} />
          </button>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              onTransitionEnd={handleTrackTransitionEnd}
              className="flex [--per-page:3] mw-1100:[--per-page:2] mw-700:[--per-page:1] transition-transform duration-[550ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:duration-0"
              style={{
                width: `calc(100% * ${SLOT_COUNT} / var(--per-page))`,
                transform: `translateX(calc(-100% * ${trackPosition} / ${SLOT_COUNT}))`,
              }}
            >
              {Array.from({ length: SLOT_COUNT }, (_, slot) => {
                const copyIndex = Math.floor(slot / TOTAL);
                const logicalIndex = slot % TOTAL;
                const member = TEAM_MEMBERS[logicalIndex];
                // The accessible representation always comes from the real
                // (middle) copy, and only for the logical members currently
                // within the settled visible window — clones and off-screen
                // real-copy cards are never keyboard/AT reachable.
                const isRealCopy = copyIndex === REAL_COPY_INDEX;
                const distanceFromSettled = wrap(logicalIndex - settledIndex, TOTAL);
                const isVisible = isRealCopy && distanceFromSettled < visibleCount;
                const isInitialSlot = slot >= START_TRACK_POSITION && slot < START_TRACK_POSITION + 3;

                return (
                  <div
                    key={`${copyIndex}-${member.id}`}
                    ref={(node) => {
                      // React's JSX attribute forwarding doesn't reliably
                      // apply `inert` at runtime, so it's set as a real DOM
                      // property here — this is what actually removes
                      // clones, and off-screen real-copy cards, from focus
                      // and hit-testing.
                      if (node) node.inert = !isVisible;
                    }}
                    className="shrink-0 px-3.5"
                    style={{ flex: `0 0 calc(100% / ${SLOT_COUNT})` }}
                    aria-hidden={isVisible ? undefined : true}
                  >
                    <div
                      className={isInitialSlot ? "animate-team-card motion-reduce:[animation-duration:0.01ms]" : undefined}
                      style={isInitialSlot ? { animationDelay: `${(slot - START_TRACK_POSITION) * 70}ms` } : undefined}
                    >
                      <TeamCard member={member} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-center gap-[9px]">
            {TEAM_MEMBERS.map((member, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={member.id}
                  type="button"
                  aria-label={t("team.goToMember", { index: i + 1 })}
                  aria-current={active || undefined}
                  onClick={() => goToIndex(i)}
                  className={`h-2 rounded-full border-none p-0 ${active ? "w-5 bg-team-dot-active" : "w-2 bg-team-dot-inactive"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
