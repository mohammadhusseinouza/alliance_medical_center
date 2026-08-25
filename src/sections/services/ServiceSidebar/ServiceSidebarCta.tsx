import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ctaPortraitImage from "../../../assets/urgent-care/cta-portrait.png";
import { ArrowRightIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

export function ServiceSidebarCta() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <div className="overflow-hidden rounded-2xl text-white" style={{ background: "linear-gradient(160deg, #0E5C69 0%, #0B8995 100%)" }}>
      <div className="px-6 pb-5 pt-[26px]">
        <h3 className="m-0 text-[22px] font-bold leading-[1.2] tracking-[-0.4px]">
          {t("servicePage.sidebarCta.heading")}
        </h3>
        <p className="mt-2.5 text-[14.5px] leading-[1.6] text-white/[0.82]">
          {t("servicePage.sidebarCta.description")}
        </p>
        <Link
          to={withLocale(SITE.bookingHref, language)}
          className="group mt-4 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-[14.5px] font-bold text-[#0B5F6B] no-underline [transition:background-color_250ms_ease,color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-[#1A5560] hover:text-white hover:shadow-[0_6px_14px_rgba(18,63,72,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
        >
          {t("common.bookAppointment")}
          <ArrowRightIcon size={15} className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]" />
        </Link>
      </div>

      <img
        src={ctaPortraitImage}
        alt={t("servicePage.sidebarCta.portraitAlt")}
        className="block h-[280px] w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
