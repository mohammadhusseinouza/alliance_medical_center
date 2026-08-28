import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { ImagePlaceholder } from "../../../components/ui/ImagePlaceholder";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

export interface ServiceSidebarCtaProps {
  heading: string;
  description: string;
  portraitAlt: string;
  portraitImage?: string;
}

export function ServiceSidebarCta({ heading, description, portraitAlt, portraitImage }: ServiceSidebarCtaProps) {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-2xl text-white">
      {portraitImage ? (
        <img
          src={portraitImage}
          alt={portraitAlt}
          className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_35%]"
          loading="lazy"
        />
      ) : (
        <ImagePlaceholder label={portraitAlt} className="absolute inset-0 z-0 h-full w-full" />
      )}

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.32) 28%, rgba(0,0,0,0.12) 48%, rgba(0,0,0,0) 68%)",
        }}
      />

      <div className="relative z-[2] px-6 pt-[26px]">
        <h3 className="m-0 font-heading text-[22px] font-bold leading-[1.2] tracking-[-0.4px]">{heading}</h3>
        <p className="mt-2.5 text-[14.5px] leading-[1.6] text-white/[0.82]">{description}</p>
        <Link
          to={withLocale(SITE.bookingHref, language)}
          className="group mt-4 inline-flex h-11 items-center gap-2 rounded-lg bg-white px-5 text-[14.5px] font-bold text-contact-page-cta-text no-underline [transition:background-color_250ms_ease,color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-cta-hover hover:text-white hover:shadow-nav-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
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
