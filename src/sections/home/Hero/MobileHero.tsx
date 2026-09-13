import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, PhoneIcon } from "../../../components/icons";
import { useCarousel } from "../../../hooks/useCarousel";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { HERO_SLIDES } from "./hero.data";

/**
 * Mobile hero (handoff design 1a): a 300px image carousel that fades to
 * white, dot pager, then the heading / description / stacked CTAs on white
 * below the image. Reuses the shared `useCarousel` hook (6500ms autoplay,
 * reduced-motion aware) and the existing hero images and copy.
 */
export function MobileHero() {
  const { t } = useTranslation();
  const language = useLanguage();
  const { index, goTo, reducedMotion } = useCarousel({ slideCount: HERO_SLIDES.length });
  const active = HERO_SLIDES[index];
  const headingKey = `hero.slides.${active.translationKey}`;

  return (
    <section className="bg-white">
      <div className="relative h-[300px] w-full overflow-hidden">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={i === index ? t(`hero.slides.${slide.translationKey}.ariaLabel`) : ""}
            aria-hidden={i === index ? undefined : true}
            className={
              "absolute inset-0 h-full w-full object-cover object-[50%_28%] transition-opacity duration-[700ms] ease motion-reduce:transition-none " +
              (i === index ? "opacity-100" : "opacity-0")
            }
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.72) 88%, #FFFFFF 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              aria-label={t("hero.goToSlide", { index: i + 1 })}
              aria-current={i === index || undefined}
              onClick={() => goTo(i)}
              className="flex h-11 min-w-[44px] items-center justify-center border-none bg-transparent p-0"
            >
              <span
                className="block h-2 rounded-full transition-all duration-200"
                style={{
                  width: i === index ? "22px" : "8px",
                  background: i === index ? "#1976D2" : "rgba(66,165,245,0.45)",
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="px-[22px] pb-[34px] pt-1">
        <h1
          key={reducedMotion ? "static" : active.id}
          className="m-0 animate-card-up font-heading text-[36px] font-bold leading-[1.08] tracking-[-0.9px] text-brand-navy [text-wrap:pretty] motion-reduce:animate-none"
        >
          {t(`${headingKey}.headingLine1`)} {t(`${headingKey}.headingLine2`)}
        </h1>
        <p className="mt-3.5 text-[16px] leading-[1.6] text-text-primary [text-wrap:pretty]">
          {t(`${headingKey}.description`)}
        </p>
        <Link
          to={withLocale(SITE.bookingHref, language)}
          className="mt-[22px] flex h-[54px] w-full items-center justify-center gap-[9px] rounded-[7px] text-[16px] font-semibold text-white no-underline shadow-bright-cta"
          style={{ background: "linear-gradient(90deg, var(--bright-cta-from), var(--bright-cta-to))" }}
        >
          {t("common.bookAppointment")}
          <ArrowRightIcon size={16} />
        </Link>
        <a
          href={SITE.phoneHref}
          className="mt-2.5 flex h-[54px] w-full items-center justify-center gap-[9px] rounded-[7px] border-[1.5px] border-brand-icon text-[16px] font-semibold text-brand-icon no-underline"
        >
          <PhoneIcon size={17} />
          {t("common.call")} {SITE.phone}
        </a>
      </div>
    </section>
  );
}
