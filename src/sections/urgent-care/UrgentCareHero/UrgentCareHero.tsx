import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import ucClinic from "../../../assets/urgent-care/uc-clinic.png";
import ucHeroFrame from "../../../assets/urgent-care/uc-hero-frame.png";
import ucIconWalkins from "../../../assets/urgent-care/uc-icon-walkins.png";
import ucIconHours from "../../../assets/urgent-care/uc-icon-hours.png";
import ucIconAllAges from "../../../assets/urgent-care/uc-icon-allages.png";

const ctaClassName =
  "mt-8 inline-flex h-14 items-center justify-center gap-3 rounded-[10px] bg-cta px-[34px] text-[16.5px] font-semibold text-white no-underline shadow-bright-cta [transition:background-color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-cta-hover hover:shadow-bright-cta-hover";

/**
 * Hero layering (bottom to top): white section base, `uc-clinic.png` (the
 * clinic photo), `uc-hero-frame.png` (a decorative frame whose organic
 * opening crops the photo via its own transparency — no clip-path/mask),
 * then the real HTML content grid. Below `mw-1000` the wide layered
 * composition can't hold its proportions, so the frame is hidden and the
 * clinic photo drops into normal flow below the text (handoff §Hero, §Responsive).
 */
export function UrgentCareHero() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white [aspect-ratio:1672/941] mw-1000:flex mw-1000:aspect-auto mw-1000:flex-col">
      <img
        src={ucClinic}
        alt={t("urgentCare.hero.clinicImageAlt")}
        loading="eager"
        className="absolute left-[49.5%] top-[8%] z-10 h-auto w-[52%] animate-hero-clinic-in motion-reduce:animate-none mw-1000:static mw-1000:z-auto mw-1000:order-2 mw-1000:mx-auto mw-1000:mt-2 mw-1000:w-[min(86%,460px)] mw-1000:rounded-[14px]"
      />
      <img
        src={ucHeroFrame}
        alt=""
        aria-hidden="true"
        loading="eager"
        className="pointer-events-none absolute inset-0 z-20 block h-full w-full animate-hero-frame-in motion-reduce:animate-none mw-1000:hidden"
      />

      <div className="absolute inset-0 z-30 mx-auto grid w-[min(1320px,calc(100%-64px))] grid-cols-[minmax(0,44%)_minmax(0,1fr)] items-center gap-14 mw-1000:static mw-1000:grid-cols-1 mw-1000:gap-0 mw-1000:py-[30px] mw-700:w-[calc(100%-32px)]">
        <div className="relative z-[1] min-w-0 animate-about-fade-l motion-reduce:animate-none">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="block h-0.5 w-[26px] bg-brand-icon" />
            <span className="text-[12.5px] font-bold uppercase tracking-[1.6px] text-brand-icon">
              {t("urgentCare.hero.eyebrow")}
            </span>
          </div>

          <h1 className="mt-3.5 font-heading text-[clamp(40px,4.4vw,58px)] font-bold leading-[1.06] tracking-[-1.6px] text-brand-navy [text-wrap:pretty]">
            {t("urgentCare.hero.headingLine1")}
            <br />
            {t("urgentCare.hero.headingLine2Before")} <span className="text-brand-icon">{t("urgentCare.hero.headingHighlight")}</span>
          </h1>

          <p className="mt-5 max-w-[460px] text-[17.5px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
            {t("urgentCare.hero.description")}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-7">
            <div className="flex items-center gap-[11px]">
              <img src={ucIconWalkins} alt="" aria-hidden="true" className="block h-[42px] w-[42px] flex-shrink-0" />
              <span className="text-[15px] font-semibold leading-[1.3] text-text-secondary">
                {t("urgentCare.hero.quickInfo.walkIns.line1")}
                <br />
                {t("urgentCare.hero.quickInfo.walkIns.line2")}
              </span>
            </div>
            <div className="flex items-center gap-[11px]">
              <img src={ucIconHours} alt="" aria-hidden="true" className="block h-[42px] w-[42px] flex-shrink-0" />
              <span className="text-[15px] font-semibold leading-[1.3] text-text-secondary">
                {t("urgentCare.hero.quickInfo.hours.line1")}
                <br />
                {t("urgentCare.hero.quickInfo.hours.line2")}
              </span>
            </div>
            <div className="flex items-center gap-[11px]">
              <img src={ucIconAllAges} alt="" aria-hidden="true" className="block h-[42px] w-[42px] flex-shrink-0" />
              <span className="text-[15px] font-semibold leading-[1.3] text-text-secondary">
                {t("urgentCare.hero.quickInfo.allAges.line1")}
                <br />
                {t("urgentCare.hero.quickInfo.allAges.line2")}
              </span>
            </div>
          </div>

          <Link to={withLocale(SITE.bookingHref, language)} className={ctaClassName}>
            {t("urgentCare.ctaButton")}
            <ArrowRightIcon size={17} />
          </Link>
        </div>

        <div aria-hidden="true" />
      </div>
    </section>
  );
}
