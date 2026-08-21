import { Link } from "react-router-dom";
import { ArrowRightIcon, ChevronIcon, ClockIcon, HeartIcon, UsersIcon } from "../../../components/icons";
import { useCarousel } from "../../../hooks/useCarousel";
import { SITE } from "../../../lib/constants";
import { HERO_SLIDES } from "./hero.data";
import type { HeroSlideIcon } from "./Hero.types";

const arrowButtonClass =
  "absolute top-[44%] z-[5] flex h-[58px] w-[48px] -translate-y-1/2 items-center justify-center bg-white/90 text-[#168094] shadow-[0_5px_16px_rgba(20,70,90,0.08)] transition-colors duration-200 hover:bg-[#15798A] hover:text-white mw-900:h-[50px] mw-900:w-[40px]";

function SlideIcon({ icon }: { icon: HeroSlideIcon }) {
  const props = { className: "h-full w-full", strokeWidth: 1.2 };
  if (icon === "heart") return <HeartIcon {...props} />;
  if (icon === "users") return <UsersIcon {...props} />;
  return <ClockIcon {...props} />;
}

export function Hero() {
  const { index, next, previous, onMouseEnter, onMouseLeave } = useCarousel({
    slideCount: HERO_SLIDES.length,
  });
  const activeSlide = HERO_SLIDES[index];

  return (
    <section className="relative bg-white pb-[175px] mw-900:pb-[30px]">
      <div
        className="relative min-h-[clamp(560px,66vh,680px)] w-full overflow-visible mw-900:min-h-[560px] mw-900:overflow-hidden"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="absolute inset-0 overflow-hidden">
          {HERO_SLIDES.map((slide, slideIndex) => {
            const active = slideIndex === index;
            return (
              <div
                key={slide.id}
                role="img"
                aria-label={slide.ariaLabel}
                className={
                  "absolute inset-0 flex h-full w-full items-center justify-center [transition:opacity_700ms_ease] motion-reduce:duration-[0.01ms] " +
                  (active ? "animate-hero-img-in opacity-100 motion-reduce:animate-none" : "opacity-0")
                }
                style={{ background: slide.backgroundGradient }}
              >
                <div className="h-[30%] max-h-[220px] w-[30%] max-w-[220px] text-white opacity-[0.16]">
                  <SlideIcon icon={slide.icon} />
                </div>
              </div>
            );
          })}

          <div
            className="pointer-events-none absolute inset-0 mw-900:hidden"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.80) 27%, rgba(255,255,255,0.46) 48%, rgba(255,255,255,0.05) 72%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 hidden mw-900:block"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.9) 55%, #FFFFFF 90%)",
            }}
          />
        </div>

        <div className="pointer-events-none relative z-[2] mx-auto flex h-full max-w-[1400px] items-center px-[70px] mw-1300:px-[45px] mw-900:items-end mw-900:px-[22px] mw-900:pb-[40px]">
          <div className="pointer-events-auto flex w-[min(620px,48%)] flex-col pb-[90px] pt-[30px] mw-900:w-full mw-900:pb-0 mw-900:pt-0">
            <h1
              key={`heading-${activeSlide.id}`}
              className="mt-0 max-w-[620px] animate-[hero-up_0.6s_ease_0.12s_both] text-[clamp(40px,4.2vw,60px)] font-bold leading-[1.04] tracking-[-1.3px] text-[#10213C] motion-reduce:animate-none mw-1300:text-[48px] mw-900:text-[38px]"
            >
              {activeSlide.headingLine1}
              <br />
              {activeSlide.headingLine2}
            </h1>

            <p
              key={`copy-${activeSlide.id}`}
              className="mt-5 max-w-[480px] animate-[hero-up_0.6s_ease_0.19s_both] text-[16px] leading-[1.65] text-[#53687D] motion-reduce:animate-none"
            >
              {activeSlide.description}
            </p>

            <div
              key={`cta-${activeSlide.id}`}
              className="mt-7 animate-[hero-up_0.6s_ease_0.26s_both] motion-reduce:animate-none"
            >
              <Link
                to={SITE.bookingHref}
                className="inline-flex min-h-[50px] items-center gap-[9px] rounded-[7px] px-[22px] text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(10,120,140,0.16)] [transition:background_220ms_ease,transform_220ms_ease,box-shadow_220ms_ease] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(10,120,140,0.22)]"
                style={{ background: "linear-gradient(90deg, #087E8D, #0594A1)" }}
              >
                Book Appointment
                <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Previous hero slide"
          onClick={previous}
          className={`${arrowButtonClass} left-[25px]`}
        >
          <ChevronIcon direction="left" size={18} />
        </button>
        <button
          type="button"
          aria-label="Next hero slide"
          onClick={next}
          className={`${arrowButtonClass} right-[25px]`}
        >
          <ChevronIcon direction="right" size={18} />
        </button>
      </div>
    </section>
  );
}
