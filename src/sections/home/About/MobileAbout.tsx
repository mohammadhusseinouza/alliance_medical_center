import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import aboutImage from "../../../assets/home/about-us.webp";
import { ArrowRightIcon, ClockDialIcon, FlaskBasicIcon, HeartPulseIcon, MapPinIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { ABOUT_STATS } from "./about.data";
import type { AboutStatIcon } from "./About.types";

function StatIcon({ icon }: { icon: AboutStatIcon }) {
  if (icon === "clock-dial") return <ClockDialIcon size={26} strokeWidth={1.8} />;
  if (icon === "flask-basic") return <FlaskBasicIcon size={26} strokeWidth={1.8} />;
  return <MapPinIcon size={26} strokeWidth={1.8} />;
}

/**
 * Mobile About (handoff design 1a): the existing About content recomposed
 * for the phone — intro, full-bleed image, "Comprehensive Care" feature +
 * CTA, then the navy benefits block. Reuses `about.*` copy, the shared
 * `ABOUT_STATS` data and the production About image.
 */
export function MobileAbout() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section className="bg-white">
      <div
        className="px-[22px] pb-[30px] pt-10"
        style={{ background: "linear-gradient(160deg, #FFFFFF 0%, var(--about-bg-to) 100%)" }}
      >
        <div className="w-fit rounded bg-about-eyebrow-bg px-[11px] py-[7px] text-[12px] font-bold uppercase tracking-[0.5px] text-about-eyebrow-text">
          {t("about.eyebrow")}
        </div>
        <h2 className="mt-4 font-heading text-[34px] font-bold leading-[1.06] tracking-[-0.8px] text-text-primary">
          {t("about.headingLine1")}
          <br />
          {t("about.headingLine2")}
        </h2>
        <p className="mt-4 text-[15.5px] leading-[1.7] text-about-body [text-wrap:pretty]">
          {t("about.description")}
        </p>
      </div>

      <div className="h-[230px] w-full overflow-hidden">
        <img
          src={aboutImage}
          alt={t("about.imageAlt")}
          className="block h-full w-full object-cover object-[50%_32%]"
          loading="lazy"
        />
      </div>

      <div className="bg-white px-[22px] pb-8 pt-[26px]">
        <div className="flex items-start gap-4">
          <div
            className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-full text-white shadow-about-feature-icon"
            style={{
              background: "linear-gradient(145deg, var(--about-feature-gradient-from), var(--about-feature-gradient-to))",
            }}
          >
            <HeartPulseIcon size={25} strokeWidth={1.8} />
          </div>
          <div>
            <h3 className="font-heading text-[19px] font-bold text-about-feature-title">{t("about.feature.title")}</h3>
            <p className="mt-1.5 text-[14px] leading-[1.6] text-about-feature-desc">{t("about.feature.description")}</p>
          </div>
        </div>
        <Link
          to={withLocale("/#services", language)}
          className="mt-6 flex h-[54px] w-full items-center justify-center gap-3.5 rounded-md text-[13.5px] font-bold uppercase tracking-[0.3px] text-white no-underline"
          style={{ background: "linear-gradient(90deg, var(--about-cta-gradient-from), var(--about-cta-gradient-to))" }}
        >
          {t("about.cta")}
          <ArrowRightIcon size={16} />
        </Link>
      </div>

      <div className="flex flex-col bg-brand-navy px-[22px] py-2 text-white">
        {ABOUT_STATS.map((stat, index) => (
          <div
            key={stat.id}
            className={`flex items-center gap-4 py-5 ${index > 0 ? "border-t border-white/[0.13]" : ""}`}
          >
            <div
              className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full text-white"
              style={{ background: "linear-gradient(145deg, var(--about-stat-icon-from), var(--about-stat-icon-to))" }}
            >
              <StatIcon icon={stat.icon} />
            </div>
            <div>
              <p className="text-[18px] font-bold tracking-[0.2px] text-white">
                {t(stat.titleKey ?? `about.stats.${stat.translationKey}.title`)}
              </p>
              <p className="mt-1.5 text-[13px] leading-[1.5] text-white/[0.72]">
                {t(`about.stats.${stat.translationKey}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
