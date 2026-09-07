import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroBackgroundImage from "../../../assets/occupational-health/hero/occupational-hero.png";
import { ArrowRightIcon, BriefcaseIcon, CheckIcon, HeartPulseIcon, ShieldCheckIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

const BENEFIT_KEYS = ["preEmployment", "returnToWork", "injuryCare", "surveillance"] as const;

const SERVICES_ANCHOR = "occupational-health-services";

/**
 * Desktop readability wash: strong white → very pale Alliance blue
 * (#E3F2FD) → transparent, so the left content panel stays readable while
 * the doctor and worker on the right of the photo remain visible.
 */
const OVERLAY_HORIZONTAL =
  "linear-gradient(97deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 34%, rgba(227,242,253,0.55) 54%, rgba(227,242,253,0.12) 74%, rgba(227,242,253,0) 100%)";

/** Tablet/mobile: vertical wash — image reads at the top, text sits on near-opaque white lower down. */
const OVERLAY_VERTICAL =
  "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.16) 20%, rgba(255,255,255,0.82) 42%, rgba(255,255,255,0.97) 60%, rgba(255,255,255,0.99) 100%)";

export function OccupationalMedicine() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section className="relative flex min-h-[640px] w-full items-center overflow-hidden bg-white py-[104px] mw-1100:min-h-0 mw-1100:items-stretch mw-1100:pb-[64px] mw-1100:pt-[210px] mw-650:pt-[168px] mw-650:pb-[52px]">
      <img
        src={heroBackgroundImage}
        alt={t("occupationalHealth.imageAlt")}
        className="absolute inset-0 z-0 h-full w-full object-cover object-[15%_center] mw-1100:object-[50%_22%] mw-650:object-[44%_20%]"
        loading="eager"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] mw-1100:hidden"
        style={{ background: OVERLAY_HORIZONTAL }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden mw-1100:block"
        style={{ background: OVERLAY_VERTICAL }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 z-[1] h-[380px] w-[380px] rounded-full mw-1100:hidden"
        style={{ background: "var(--care-bg-glow)" }}
      />

      {/* Optional, purely complementary accents — large desktop only, kept off the faces */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[8%] z-[3] hidden items-center gap-2.5 rounded-2xl border border-white/70 bg-white/80 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(13,71,161,0.12)] backdrop-blur-[6px] xl:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-badge-bg text-badge-text">
          <ShieldCheckIcon size={16} />
        </span>
        <span className="text-[12.5px] font-semibold leading-tight text-text-primary">
          {t("occupationalHealth.hero.accents.saferWorkplaces")}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[12%] right-[7%] z-[3] hidden items-center gap-2.5 rounded-2xl border border-white/70 bg-white/80 px-3.5 py-2.5 shadow-[0_12px_30px_rgba(13,71,161,0.12)] backdrop-blur-[6px] xl:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-badge-bg text-badge-text">
          <HeartPulseIcon size={16} />
        </span>
        <span className="text-[12.5px] font-semibold leading-tight text-text-primary">
          {t("occupationalHealth.hero.accents.employeeWellness")}
        </span>
      </div>

      <div className="relative z-[2] mx-auto flex w-[min(1600px,100%)] px-6 mw-650:px-[18px]">
        <div className="w-[min(600px,40%)] animate-card-up rounded-[28px] border border-white/60 bg-white/72 p-9 shadow-[0_22px_60px_rgba(13,71,161,0.12)] backdrop-blur-[10px] motion-reduce:animate-none mw-1100:w-full mw-1100:bg-white/90 mw-650:rounded-[20px] mw-650:p-6">
          <div className="flex w-fit items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.7px] text-badge-text animate-[hero-up_0.6s_ease_0.05s_both] motion-reduce:animate-none">
            <BriefcaseIcon size={14} />
            {t("occupationalHealth.eyebrow")}
          </div>

          <h1 className="mt-[18px] font-heading text-[clamp(36px,4.4vw,56px)] font-bold leading-[1.08] tracking-[-1.2px] text-hero-heading animate-[hero-up_0.6s_ease_0.12s_both] motion-reduce:animate-none">
            {t("occupationalHealth.heading")}
          </h1>

          <p className="mt-[18px] max-w-[540px] text-[16.5px] leading-[1.7] text-text-secondary [text-wrap:pretty] animate-[hero-up_0.6s_ease_0.19s_both] motion-reduce:animate-none">
            {t("occupationalHealth.description")}
          </p>

          <ul className="mt-[30px] flex flex-col gap-[18px]">
            {BENEFIT_KEYS.map((key, index) => (
              <li
                key={key}
                className="flex items-start gap-[13px] animate-svc-item motion-reduce:animate-none"
                style={{ animationDelay: `${0.26 + index * 0.07}s` }}
              >
                <span className="mt-px flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-badge-text">
                  <CheckIcon size={14} strokeWidth={3} />
                </span>
                <div>
                  <p className="text-[15.5px] font-semibold leading-[1.3] text-text-primary">
                    {t(`occupationalHealth.benefits.${key}.title`)}
                  </p>
                  <p className="mt-[3px] text-[14px] leading-[1.55] text-text-secondary">
                    {t(`occupationalHealth.benefits.${key}.description`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3 animate-[hero-up_0.6s_ease_0.54s_both] motion-reduce:animate-none mw-650:gap-2.5">
            <Link
              to={withLocale(SITE.contactHref, language)}
              className="inline-flex min-h-[50px] items-center gap-2 rounded-[7px] px-[22px] text-[14px] font-semibold text-white no-underline shadow-bright-cta [transition:background_220ms_ease,transform_220ms_ease,box-shadow_220ms_ease] hover:-translate-y-0.5 hover:shadow-bright-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring motion-reduce:transition-none mw-650:w-full mw-650:justify-center"
              style={{ background: "linear-gradient(90deg, var(--bright-cta-from), var(--bright-cta-to))" }}
            >
              {t("occupationalHealth.hero.partnerCta")}
              <ArrowRightIcon size={15} />
            </Link>

            <a
              href={`#${SERVICES_ANCHOR}`}
              className="inline-flex min-h-[50px] items-center rounded-[7px] border-[1.5px] border-cta px-[22px] text-[14px] font-semibold text-cta no-underline [transition:background-color_220ms_ease,color_220ms_ease] hover:bg-badge-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring mw-650:w-full mw-650:justify-center"
            >
              {t("occupationalHealth.hero.learnMoreCta")}
            </a>
          </div>
        </div>
      </div>

      <span
        id={SERVICES_ANCHOR}
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-px scroll-mt-[90px]"
      />
    </section>
  );
}
