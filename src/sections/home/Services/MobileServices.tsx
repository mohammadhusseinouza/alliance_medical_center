import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  FlaskIcon,
  HeartIcon,
  MedicalKitIcon,
  PlusIcon,
  PulseLineIcon,
  TeddyBearIcon,
  UsersIcon,
} from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { HOME_SERVICES } from "./homeServices.data";
import type { ServiceIconName } from "./Services.types";

const DEDICATED_SERVICE_HREFS: Record<string, string> = {
  "urgent-care": SITE.urgentCareHref,
  "occupational-health": SITE.occupationalHealthHref,
  "diagnostic-services": SITE.diagnosticServicesHref,
  "womens-health": SITE.womensHealthHref,
  "pediatric-care": SITE.pediatricCareHref,
  "family-health": SITE.familyHealthHref,
};

function ServiceCardIcon({ icon }: { icon: ServiceIconName }) {
  const props = { size: 24, strokeWidth: 1.8 };
  switch (icon) {
    case "medical-kit":
      return <MedicalKitIcon {...props} />;
    case "users":
      return <UsersIcon {...props} />;
    case "briefcase":
      return <BriefcaseIcon {...props} />;
    case "heart":
      return <HeartIcon {...props} />;
    case "teddy-bear":
      return <TeddyBearIcon {...props} />;
    default:
      return <FlaskIcon {...props} />;
  }
}

/**
 * Mobile services (handoff design 1a): the redesigned 2-column staggered
 * hairline-card grid. Reuses the shared `SERVICES` enumeration, its
 * dedicated routes, the `services.*` copy and the per-service accent
 * colours — no duplicated service content.
 */
export function MobileServices() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section
      className="px-[22px] pb-[48px] pt-[44px]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, var(--surface-pale-1) 70%)" }}
    >
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-badge-text">
        <PlusIcon size={14} />
        {t("services.eyebrow")}
      </div>

      <h2 className="mt-3.5 text-center font-heading text-[34px] font-bold leading-[1.1] tracking-[-0.8px] text-text-primary [text-wrap:pretty]">
        {t("services.headingBeforeHighlight")} <span className="text-badge-text">{t("services.headingHighlight")}</span>{" "}
        {t("services.headingAfterHighlight")}
      </h2>

      <div className="mx-auto mt-4 flex w-[200px] items-center gap-2.5">
        <div className="h-px flex-1 bg-services-divider" />
        <PulseLineIcon className="flex-shrink-0 text-badge-text" />
        <div className="h-px flex-1 bg-services-divider" />
      </div>

      <p className="mt-4 text-center text-[15.5px] leading-[1.6] text-text-primary [text-wrap:pretty]">
        {t("services.description")}
      </p>

      <div className="mt-[26px] grid grid-cols-2 items-start gap-x-3 gap-y-3.5">
        {HOME_SERVICES.map((service, i) => {
          const cardClassName =
            "relative flex min-h-[236px] flex-col items-start overflow-hidden rounded-[20px] border border-[#ECEFF1] bg-white p-4 pt-[18px] no-underline shadow-[0_14px_32px_rgba(13,71,161,0.08)] " +
            (i % 2 === 0 ? "mt-5" : "");
          const cardContent = (
            <>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: service.accentColor }}
              />
              <span
                aria-hidden="true"
                className="absolute -top-3.5 right-[-6px] font-heading text-[66px] font-bold leading-none text-[#F1F5F9]"
              >
                {`0${i + 1}`}
              </span>
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[#F5F9FF] text-brand-icon">
                <ServiceCardIcon icon={service.icon} />
              </span>
              <h3 className="mt-3.5 font-heading text-[16.5px] font-bold leading-[1.25] text-text-primary">
                {t(`services.items.${service.translationKey}.title`)}
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-[1.5] text-services-desc">
                {t(`services.items.${service.translationKey}.description`)}
              </p>
              <span className="mt-auto flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-cta text-white">
                <ArrowRightIcon size={14} />
              </span>
            </>
          );

          if (service.disableLink) {
            return (
              <div key={service.id} className={cardClassName}>
                {cardContent}
              </div>
            );
          }

          const href = withLocale(DEDICATED_SERVICE_HREFS[service.id] ?? "/#services", language);
          return (
            <Link key={service.id} to={href} className={cardClassName}>
              {cardContent}
            </Link>
          );
        })}
      </div>

      <Link
        to={withLocale("/#services", language)}
        className="mt-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-[7px] border-[1.5px] border-brand-icon text-[12.5px] font-bold uppercase tracking-[0.4px] text-brand-icon no-underline"
      >
        {t("common.viewAllServices")}
        <ArrowRightIcon size={14} />
      </Link>
    </section>
  );
}
