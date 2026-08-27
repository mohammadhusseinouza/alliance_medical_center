import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { ImagePlaceholder } from "../../../components/ui/ImagePlaceholder";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

export function ContactSidebarCta() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <div className="relative min-h-[380px] overflow-hidden rounded-2xl text-white">
      <ImagePlaceholder
        label={t("contact.sidebar.cta.imageAlt")}
        className="absolute inset-0 z-0 h-full w-full"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.32) 28%, rgba(0,0,0,0.12) 48%, rgba(0,0,0,0) 68%)",
        }}
      />

      <div className="relative z-[2] px-6 pt-[26px] pb-6">
        <h3 className="m-0 text-[20px] font-bold leading-[1.2] tracking-[-0.4px]">
          {t("contact.sidebar.cta.heading")}
        </h3>
        <p className="mt-2.5 text-[14px] leading-[1.6] text-white/[0.82]">
          {t("contact.sidebar.cta.description")}
        </p>
        <Link
          to={withLocale(SITE.bookingHref, language)}
          className="group mt-4 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-[14.5px] font-bold text-[#0B5F6B] no-underline [transition:background-color_250ms_ease,color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-[#1A5560] hover:text-white hover:shadow-[0_6px_14px_rgba(18,63,72,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
        >
          {t("common.bookAppointment")}
          <ArrowRightIcon
            size={15}
            className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
          />
        </Link>
      </div>
    </div>
  );
}
