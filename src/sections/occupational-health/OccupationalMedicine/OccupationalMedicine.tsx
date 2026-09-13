import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImage from "../../../assets/occupational-health/hero/occupational-hero.png";
import { ArrowRightIcon, BriefcaseIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

const SERVICES_ANCHOR = "occupational-health-services";

/** Left content panel: white easing into a very pale Alliance blue at the seam. */
const CONTENT_BG =
  "linear-gradient(150deg, #FFFFFF 0%, #FFFFFF 52%, rgba(227,242,253,0.55) 100%)";

/**
 * Desktop / tablet Occupational Health hero (>= md — the page renders the
 * dedicated `MobileOccupationalHealth` hero below `md`).
 *
 * One centered, rounded hero card: a clean content column on the left
 * (employer pill → h1 → concise intro → two CTAs, vertically centered) and
 * the production occupational-health photo filling the right. No glass
 * overlay, no floating badges, no service checklist — the hero introduces
 * the page; the detailed content lives in the sections below.
 */
export function OccupationalMedicine() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section className="bg-white pb-[70px] pt-9 mw-1100:pb-[56px] mw-980:pb-[44px]">
      <div className="mx-auto grid min-h-[660px] w-[min(1560px,calc(100%-96px))] grid-cols-[42%_1fr] overflow-hidden rounded-[28px] border border-border-subtle bg-white shadow-elevated mw-1100:min-h-[560px] mw-1100:w-[calc(100%-56px)] mw-980:min-h-0 mw-980:w-[calc(100%-32px)] mw-980:grid-cols-1">
        <div
          className="relative flex flex-col justify-center px-[64px] py-[72px] mw-1100:px-[44px] mw-1100:py-[54px] mw-980:px-7 mw-980:py-10"
          style={{ background: CONTENT_BG }}
        >
          <div className="flex w-fit items-center gap-2 rounded-full bg-badge-bg px-[14px] py-[7px] text-[12.5px] font-bold uppercase tracking-[0.7px] text-badge-text">
            <BriefcaseIcon size={14} />
            {t("occupationalHealth.eyebrow")}
          </div>

          <h1 className="mt-6 max-w-[560px] font-heading text-[clamp(40px,4.4vw,64px)] font-bold leading-[1.05] tracking-[-1.4px] text-brand-navy [text-wrap:pretty] mw-980:text-[38px]">
            {t("occupationalHealth.heading")}
          </h1>

          <p className="mt-6 max-w-[540px] text-[17.5px] leading-[1.65] text-text-secondary [text-wrap:pretty] mw-980:text-[16px]">
            {t("occupationalHealth.description")}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to={withLocale(SITE.contactHref, language)}
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-[9px] bg-cta px-6 text-[15px] font-semibold text-white no-underline shadow-bright-cta [transition:background-color_200ms_ease,transform_200ms_ease] hover:-translate-y-px hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
            >
              {t("occupationalHealth.hero.partnerCta")}
              <ArrowRightIcon size={15} />
            </Link>
            <a
              href={`#${SERVICES_ANCHOR}`}
              className="inline-flex min-h-[52px] items-center justify-center rounded-[9px] border-[1.5px] border-cta bg-white px-6 text-[15px] font-semibold text-cta no-underline [transition:background-color_200ms_ease] hover:bg-badge-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
            >
              {t("occupationalHealth.hero.learnMoreCta")}
            </a>
          </div>
        </div>

        <div className="relative min-h-[660px] mw-1100:min-h-[560px] mw-980:min-h-[380px]">
          <img
            src={heroImage}
            alt={t("occupationalHealth.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover object-[35%_center]"
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 w-[110px] mw-980:hidden"
            style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0) 100%)" }}
          />
        </div>
      </div>

      <span id={SERVICES_ANCHOR} aria-hidden="true" className="block h-0 scroll-mt-[110px]" />
    </section>
  );
}
