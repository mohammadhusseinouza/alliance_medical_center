import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, ClockIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

const ctaClassName =
  "relative inline-flex h-14 flex-shrink-0 items-center justify-center gap-3 rounded-[10px] bg-cta px-[34px] text-[16.5px] font-semibold text-white no-underline shadow-bright-cta [transition:background-color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-cta-hover hover:shadow-bright-cta-hover mw-1000:col-span-full mw-1000:justify-self-start";

export function UrgentCareCta() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section className="bg-white pb-20">
      <div className="mx-auto w-[min(1320px,calc(100%-64px))] mw-700:w-[calc(100%-32px)]">
        <div className="relative grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-10 gap-y-10 overflow-hidden rounded-[20px] bg-badge-bg p-[48px_52px] mw-1000:grid-cols-[auto_minmax(0,1fr)] mw-1000:gap-y-7 mw-600:grid-cols-1 mw-600:gap-5 mw-600:p-[32px_24px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[140px] -right-20 h-[320px] w-[320px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(25,118,210,0.08), transparent 70%)" }}
          />

          <span className="flex h-[104px] w-[104px] flex-shrink-0 items-center justify-center text-brand-icon">
            <ClockIcon size={96} strokeWidth={1.4} />
          </span>

          <div className="relative min-w-0">
            <h2 className="m-0 font-heading text-[clamp(26px,2.6vw,34px)] font-bold leading-[1.2] tracking-[-0.8px] text-brand-navy">
              {t("urgentCare.cta.headingLine1")}
              <br />
              {t("urgentCare.cta.headingLine2")}
            </h2>
            <p className="mt-3.5 max-w-[420px] text-[16.5px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
              {t("urgentCare.cta.description")}
            </p>
          </div>

          <Link to={withLocale(SITE.bookingHref, language)} className={ctaClassName}>
            {t("urgentCare.ctaButton")}
            <ArrowRightIcon size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
