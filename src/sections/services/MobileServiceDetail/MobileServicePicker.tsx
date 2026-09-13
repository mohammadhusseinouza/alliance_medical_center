import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon, ChevronIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { SERVICES } from "../../home/Services/services.data";
import type { ServiceSlug } from "./serviceDetail.data";

/**
 * Slug → dedicated route for the five service-detail pages (Occupational
 * Health is excluded — it is not part of this shell). Mirrors the maps the
 * Navbar / Footer / ServiceSidebar already use.
 */
const SERVICE_HREFS: Record<string, string> = {
  "family-health": SITE.familyHealthHref,
  "womens-health": SITE.womensHealthHref,
  "pediatric-care": SITE.pediatricCareHref,
  "diagnostic-services": SITE.diagnosticServicesHref,
};

export interface MobileServicePickerProps {
  current: ServiceSlug;
}

/**
 * Sticky, collapsed service picker for the mobile service-detail shell
 * (handoff 2a — "service nav B"). Sits at `top-16` (below the sticky
 * header). Closed by default; the trigger shows the current service, the
 * panel lists only the OTHER four services. Selecting one navigates via
 * React Router preserving the current locale, then closes.
 */
export function MobileServicePicker({ current }: MobileServicePickerProps) {
  const { t } = useTranslation();
  const language = useLanguage();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const currentName = t(`services.items.${SERVICES.find((s) => s.id === current)?.translationKey}.title`);

  const others = SERVICES.filter(
    (service) => service.id !== "occupational-health" && service.id !== current && SERVICE_HREFS[service.id],
  );

  function go(id: string) {
    setOpen(false);
    navigate(withLocale(SERVICE_HREFS[id], language));
  }

  return (
    <div className="sticky top-16 z-30 border-b border-border-subtle bg-white/[0.97] px-4 py-3 backdrop-blur-[8px]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-[52px] w-full items-center justify-between gap-3 rounded-[10px] border border-border-subtle bg-surface-pale-1 px-4"
      >
        <span className="min-w-0 flex-1 text-left">
          <span className="block text-[10.5px] font-bold uppercase tracking-[0.7px] text-service-detail-breadcrumb-chevron">
            {t("navbar.services")}
          </span>
          <span className="block truncate text-[15px] font-bold text-brand-navy">{currentName}</span>
        </span>
        <ChevronDownIcon
          size={18}
          strokeWidth={2.2}
          className={`flex-shrink-0 text-brand-icon transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul id={panelId} className="mt-2 list-none overflow-hidden rounded-[10px] border border-border-subtle bg-white p-0">
          {others.map((service, i) => (
            <li key={service.id} className={i > 0 ? "border-t border-border-subtle" : ""}>
              <button
                type="button"
                onClick={() => go(service.id)}
                className="flex min-h-[52px] w-full items-center justify-between gap-3 px-4 text-left text-[15px] font-semibold text-text-primary"
              >
                <span className={service.titleNoWrap ? "whitespace-nowrap" : undefined}>
                  {t(`services.items.${service.translationKey}.title`)}
                </span>
                <ChevronIcon direction="right" size={15} strokeWidth={2.2} className="flex-shrink-0 text-brand-icon" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
