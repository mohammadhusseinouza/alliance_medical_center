import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { SERVICES } from "../../home/Services/services.data";
import { ServiceSidebarCta } from "./ServiceSidebarCta";

const ACTIVE_SERVICE_ID = "urgent-care";
const OCCUPATIONAL_HEALTH_SERVICE_ID = "occupational-health";

export function ServiceSidebar() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <aside className="sticky top-[84px] flex flex-col gap-6 mw-880:static mw-880:top-auto">
      <div className="rounded-2xl border border-[#E3ECEF] bg-[#F7FAFB] p-3.5">
        <h2 className="m-0 px-2 pb-3 pt-1.5 text-xs font-bold uppercase tracking-[0.8px] text-badge-text">
          {t("services.eyebrow")}
        </h2>
        <div className="flex flex-col gap-2">
          {SERVICES.filter((service) => service.id !== OCCUPATIONAL_HEALTH_SERVICE_ID).map((service) => {
            const label = t(`services.items.${service.translationKey}.title`);
            const labelClassName = service.titleNoWrap ? "whitespace-nowrap" : undefined;

            if (service.id === ACTIVE_SERVICE_ID) {
              return (
                <Link
                  key={service.id}
                  to={withLocale(SITE.urgentCareHref, language)}
                  aria-current="page"
                  className="group flex items-center justify-between gap-3 rounded-[10px] border border-badge-text bg-badge-text px-[15px] py-[13px] text-[15px] font-semibold text-white no-underline [transition:background-color_180ms_ease,border-color_180ms_ease,color_180ms_ease]"
                >
                  <span className={labelClassName}>{label}</span>
                  <ChevronIcon
                    direction="right"
                    size={16}
                    strokeWidth={2.2}
                    className="flex-shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px]"
                  />
                </Link>
              );
            }

            return (
              <div
                key={service.id}
                className="flex cursor-default items-center justify-between gap-3 rounded-[10px] border border-[#E4EBEE] bg-white px-[15px] py-[13px] text-[15px] font-semibold text-text-primary"
              >
                <span className={labelClassName}>{label}</span>
                <ChevronIcon direction="right" size={16} strokeWidth={2.2} className="flex-shrink-0" />
              </div>
            );
          })}
        </div>
      </div>

      <ServiceSidebarCta />
    </aside>
  );
}
