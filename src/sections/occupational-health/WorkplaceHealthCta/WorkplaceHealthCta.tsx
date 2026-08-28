import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PhoneIcon, ShieldCheckIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

const SUPPORT_KEYS = ["experiencedTeam", "trustedReliable", "fastAppointments"] as const;

export function WorkplaceHealthCta() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section className="mb-[90px] px-6 mw-650:mb-[55px] mw-650:px-[18px]">
      <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,theme(colors.brand.teal.700)_0%,theme(colors.brand.teal.600)_55%,theme(colors.brand.teal.500)_100%)]">
        <div className="grid grid-cols-[auto_1fr] items-center gap-7 px-14 py-[52px] mw-880:grid-cols-1 mw-880:justify-items-center mw-880:px-8 mw-880:py-10 mw-880:text-center mw-650:px-6 mw-650:py-9">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
            <ShieldCheckIcon size={28} strokeWidth={1.8} className="text-white" />
          </div>

          <div>
            <h2 className="font-heading text-[clamp(26px,2.6vw,34px)] font-bold leading-[1.2] tracking-[-0.6px] text-white">
              {t("occupationalHealth.cta.heading")}
            </h2>

            <p className="mt-3 max-w-[640px] text-[16px] leading-[1.65] text-white/85 mw-880:mx-auto">
              {t("occupationalHealth.cta.description")}
            </p>

            <div className="mt-6 flex flex-wrap gap-[14px] mw-880:justify-center">
              <Link
                to={withLocale(SITE.bookingHref, language)}
                className="inline-flex h-12 items-center rounded-lg bg-white px-6 text-[15px] font-bold text-contact-page-cta-text no-underline [transition:background-color_250ms_ease,color_250ms_ease] hover:bg-cta-hover hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
              >
                {t("occupationalHealth.cta.requestConsultation")}
              </Link>

              <a
                href={SITE.phoneHref}
                className="inline-flex h-12 items-center gap-[9px] rounded-lg border-[1.5px] border-white/60 bg-transparent px-6 text-[15px] font-bold text-white no-underline transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <PhoneIcon size={16} className="text-white" />
                {t("occupationalHealth.cta.call")} {SITE.phone}
              </a>
            </div>

            <ul className="mt-[26px] flex flex-wrap gap-x-[22px] gap-y-2 mw-880:justify-center">
              {SUPPORT_KEYS.map((key) => (
                <li key={key} className="text-[13.5px] leading-[1.3] text-white/75">
                  {t(`occupationalHealth.cta.support.${key}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
