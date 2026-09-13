import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { SERVICES } from "../../home/Services/services.data";
import { ServiceSidebarCta, type ServiceSidebarCtaProps } from "./ServiceSidebarCta";

const OCCUPATIONAL_HEALTH_SERVICE_ID = "occupational-health";

/**
 * Every service currently shown in this sidebar (Occupational Health is
 * filtered out above) now has its own dedicated page, so each row links
 * there directly instead of only the active one being clickable.
 */
const SERVICE_HREFS: Record<string, string> = {
  "family-health": SITE.familyHealthHref,
  "womens-health": SITE.womensHealthHref,
  "pediatric-care": SITE.pediatricCareHref,
  "diagnostic-services": SITE.diagnosticServicesHref,
};

export interface ServiceSidebarProps {
  activeServiceId: string;
  activeHref: string;
  cta: ServiceSidebarCtaProps;
}

export function ServiceSidebar({ activeServiceId, activeHref, cta }: ServiceSidebarProps) {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <aside className="sticky top-[84px] flex flex-col gap-6 mw-880:static mw-880:top-auto">
      <div className="rounded-2xl border border-contact-page-sidebar-border bg-contact-page-sidebar-bg p-3.5">
        <h2 className="m-0 px-2 pb-3 pt-1.5 text-xs font-bold uppercase tracking-[0.8px] text-badge-text">
          {t("services.eyebrow")}
        </h2>
        <div className="flex flex-col gap-2">
          {SERVICES.filter((service) => service.id !== OCCUPATIONAL_HEALTH_SERVICE_ID).map((service) => {
            const label = t(`services.items.${service.translationKey}.title`);
            const labelClassName = service.titleNoWrap ? "whitespace-nowrap" : undefined;
            const chevron = (className: string) => (
              <ChevronIcon direction="right" size={16} strokeWidth={2.2} className={className} />
            );

            if (service.id === activeServiceId) {
              return (
                <Link
                  key={service.id}
                  to={activeHref}
                  aria-current="page"
                  className="group flex items-center justify-between gap-3 rounded-[10px] border border-badge-text bg-badge-text px-[15px] py-[13px] text-[15px] font-semibold text-white no-underline [transition:background-color_180ms_ease,border-color_180ms_ease,color_180ms_ease]"
                >
                  <span className={labelClassName}>{label}</span>
                  {chevron("flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px]")}
                </Link>
              );
            }

            const href = SERVICE_HREFS[service.id];

            if (!href) {
              return (
                <div
                  key={service.id}
                  className="flex cursor-default items-center justify-between gap-3 rounded-[10px] border border-contact-page-sidebar-row-border bg-white px-[15px] py-[13px] text-[15px] font-semibold text-text-primary"
                >
                  <span className={labelClassName}>{label}</span>
                  {chevron("flex-shrink-0")}
                </div>
              );
            }

            return (
              <Link
                key={service.id}
                to={withLocale(href, language)}
                className="group flex items-center justify-between gap-3 rounded-[10px] border border-contact-page-sidebar-row-border bg-white px-[15px] py-[13px] text-[15px] font-semibold text-text-primary no-underline [transition:background-color_180ms_ease,border-color_180ms_ease,color_180ms_ease] hover:border-badge-text hover:bg-nav-hover hover:text-brand-icon"
              >
                <span className={labelClassName}>{label}</span>
                {chevron("flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px]")}
              </Link>
            );
          })}
        </div>
      </div>

      <ServiceSidebarCta {...cta} />
    </aside>
  );
}
