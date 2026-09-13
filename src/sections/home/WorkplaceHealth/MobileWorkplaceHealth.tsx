import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import workplaceHealthImage from "../../../assets/home/workplace-health.webp";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  FlaskIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  UserIcon,
  VideoIcon,
} from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { WORKPLACE_HEALTH_SERVICES } from "./workplaceHealth.data";
import type { WorkplaceHealthIconName } from "./WorkplaceHealth.types";

function CardIcon({ icon }: { icon: WorkplaceHealthIconName }) {
  const props = { size: 22, strokeWidth: 1.8 };
  switch (icon) {
    case "user":
      return <UserIcon size={22} />;
    case "shield-check":
      return <ShieldCheckIcon {...props} />;
    case "flask":
      return <FlaskIcon {...props} />;
    case "video":
      return <VideoIcon {...props} />;
    default:
      return <HeartPulseIcon {...props} />;
  }
}

/**
 * Mobile Workplace Health / For Employers (handoff design 1a). Reuses the
 * shared `WORKPLACE_HEALTH_SERVICES` data, `workplaceHealth.*` copy, the
 * production image and the occupational-health route.
 */
export function MobileWorkplaceHealth() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section className="bg-white px-[22px] pb-[46px] pt-[44px]">
      <div className="flex w-fit items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-badge-text">
        <BriefcaseIcon size={14} strokeWidth={1.8} />
        {t("workplaceHealth.eyebrow")}
      </div>

      <h2 className="mt-4 font-heading text-[32px] font-bold leading-[1.1] tracking-[-0.7px] text-text-primary">
        {t("workplaceHealth.heading")}
      </h2>

      <div className="mt-5 aspect-[3/2] w-full overflow-hidden rounded-[14px] shadow-card">
        <img
          src={workplaceHealthImage}
          alt={t("workplaceHealth.imageAlt")}
          className="block h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <p className="mt-5 text-[16px] leading-[1.7] text-text-primary [text-wrap:pretty]">
        {t("workplaceHealth.description")}
      </p>
      <p className="mt-3.5 text-[15px] leading-[1.7] text-text-primary [text-wrap:pretty]">
        {t("workplaceHealth.descriptionSecondary")}
      </p>
      <p className="mt-3.5 text-[15px] leading-[1.7] text-text-primary [text-wrap:pretty]">
        {t("workplaceHealth.descriptionTertiary")}
      </p>

      <ul className="mt-[26px] flex list-none flex-col gap-3 p-0">
        {WORKPLACE_HEALTH_SERVICES.map((item) => (
          <li
            key={item.id}
            className="grid grid-cols-[44px_1fr] items-start gap-3.5 rounded-[14px] border border-border-subtle bg-white p-[18px] shadow-card"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-brand-icon">
              <CardIcon icon={item.icon} />
            </div>
            <div>
              <h3 className="font-heading text-[16px] font-bold leading-[1.3] text-text-primary">
                {t(`workplaceHealth.items.${item.translationKey}.title`)}
              </h3>
              <p className="mt-1.5 text-[13.5px] leading-[1.55] text-text-primary">
                {t(`workplaceHealth.items.${item.translationKey}.description`)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <Link
        to={withLocale(SITE.occupationalHealthHref, language)}
        className="mt-6 flex h-[54px] w-full items-center justify-center gap-[9px] rounded-[7px] text-[15px] font-semibold text-white no-underline shadow-bright-cta"
        style={{ background: "linear-gradient(90deg, var(--bright-cta-from), var(--bright-cta-to))" }}
      >
        {t("workplaceHealth.cta")}
        <ArrowRightIcon size={15} />
      </Link>
    </section>
  );
}
