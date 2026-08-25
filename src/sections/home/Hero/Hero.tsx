import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, ChevronIcon } from "../../../components/icons";
import { useCarousel } from "../../../hooks/useCarousel";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { HERO_SLIDES } from "./hero.data";

const arrowButtonClass =
  "absolute top-[44%] z-[5] flex h-[58px] w-[48px] -translate-y-1/2 items-center justify-center bg-white/90 text-[#168094] shadow-[0_5px_16px_rgba(20,70,90,0.08)] transition-colors duration-200 hover:bg-[#15798A] hover:text-white mw-900:h-[50px] mw-900:w-[40px]";

export function Hero() {
  const { t } = useTranslation();
  const language = useLanguage();
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
                className={
                  "absolute inset-0 h-full w-full [transition:opacity_700ms_ease] motion-reduce:duration-[0.01ms] " +
                  (active ? "animate-hero-img-in opacity-100 motion-reduce:animate-none" : "opacity-0")
                }
              >
                <img
                  src={slide.image}
                  alt={t(`hero.slides.${slide.translationKey}.ariaLabel`)}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
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
              {t(`hero.slides.${activeSlide.translationKey}.headingLine1`)}
              <br />
              {t(`hero.slides.${activeSlide.translationKey}.headingLine2`)}
            </h1>

            <p
              key={`copy-${activeSlide.id}`}
              className="mt-5 max-w-[480px] animate-[hero-up_0.6s_ease_0.19s_both] text-[16px] leading-[1.65] text-[#53687D] motion-reduce:animate-none"
            >
              {t(`hero.slides.${activeSlide.translationKey}.description`)}
            </p>

            <div
              key={`cta-${activeSlide.id}`}
              className="mt-7 animate-[hero-up_0.6s_ease_0.26s_both] motion-reduce:animate-none"
            >
              <Link
                to={withLocale(SITE.bookingHref, language)}
                className="inline-flex min-h-[50px] items-center gap-[9px] rounded-[7px] px-[22px] text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(10,120,140,0.16)] [transition:background_220ms_ease,transform_220ms_ease,box-shadow_220ms_ease] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(10,120,140,0.22)]"
                style={{ background: "linear-gradient(90deg, #087E8D, #0594A1)" }}
              >
                {t("common.bookAppointment")}
                <ArrowRightIcon size={15} />
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label={t("hero.previousSlide")}
          onClick={previous}
          className={`${arrowButtonClass} left-[25px]`}
        >
          <ChevronIcon direction="left" size={18} />
        </button>
        <button
          type="button"
          aria-label={t("hero.nextSlide")}
          onClick={next}
          className={`${arrowButtonClass} right-[25px]`}
        >
          <ChevronIcon direction="right" size={18} />
        </button>
      </div>
    </section>
  );
}
