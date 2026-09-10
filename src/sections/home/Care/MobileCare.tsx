import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import careDoctorImage from "../../../assets/home/care-doctor.webp";
import {
  ActivityIcon,
  BagIcon,
  ChevronIcon,
  FirstAidBoxIcon,
  FlaskIcon,
  ShieldCheckIcon,
  ThermometerIcon,
  UserGroupIcon,
} from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { CARE_ITEMS } from "./care.data";
import type { CareIconName } from "./Care.types";

/**
 * Each Care audience/service item's "Learn more" destination, using the
 * existing project route constants (no new routes, no duplicated URLs).
 */
const CARE_LEARN_MORE_HREFS: Record<string, string> = {
  "families-individuals": SITE.familyHealthHref,
  "work-school": SITE.occupationalHealthHref,
  "active-people": SITE.urgentCareHref,
  "everyday-illnesses": SITE.urgentCareHref,
  "minor-injuries": SITE.urgentCareHref,
  "on-site-services": SITE.diagnosticServicesHref,
};

function ChipIcon({ icon }: { icon: CareIconName }) {
  const props = { size: 24, strokeWidth: 1.9 };
  switch (icon) {
    case "user-group":
      return <UserGroupIcon {...props} />;
    case "bag":
      return <BagIcon {...props} />;
    case "activity":
      return <ActivityIcon {...props} />;
    case "thermometer":
      return <ThermometerIcon {...props} />;
    case "first-aid-box":
      return <FirstAidBoxIcon {...props} />;
    default:
      return <FlaskIcon {...props} strokeWidth={1.7} />;
  }
}

/**
 * Mobile "Our care" interactive picker (handoff design 1a): six circular
 * icon chips flanking the doctor cut-out, with a detail card below that
 * updates on selection. Single-select, always one active, default index 0.
 * Reuses `CARE_ITEMS` and the `care.*` copy — plain React state, no
 * prototype templating.
 */
export function MobileCare() {
  const { t } = useTranslation();
  const language = useLanguage();
  const [selected, setSelected] = useState(0);
  const active = CARE_ITEMS[selected];

  const renderChip = (startIndex: number) =>
    CARE_ITEMS.slice(startIndex, startIndex + 3).map((item, i) => {
      const index = startIndex + i;
      const isActive = index === selected;
      return (
        <button
          key={item.id}
          type="button"
          aria-label={t(`care.items.${item.translationKey}.title`)}
          aria-pressed={isActive}
          onClick={() => setSelected(index)}
          style={{ gridRow: i + 1, gridColumn: startIndex === 0 ? 1 : 3 }}
          className={
            "flex h-[52px] w-[52px] items-center justify-center rounded-full border shadow-care-card [transition:background-color_160ms,color_160ms,transform_160ms] motion-reduce:transition-none " +
            (isActive
              ? "scale-[1.08] border-brand-icon bg-brand-icon text-white"
              : "border-border-subtle bg-white text-brand-icon")
          }
        >
          <ChipIcon icon={item.icon} />
        </button>
      );
    });

  return (
    <section
      className="px-[22px] pb-10 pt-[42px]"
      style={{
        background:
          "radial-gradient(circle at 50% 22%, var(--care-bg-glow), transparent 46%), var(--care-bg)",
      }}
    >
      <div className="mx-auto flex w-fit items-center gap-[7px] rounded-full bg-care-eyebrow-bg px-[15px] py-2 text-[12px] font-bold uppercase tracking-[0.8px] text-care-eyebrow-text">
        <ShieldCheckIcon size={14} />
        {t("care.eyebrow")}
      </div>

      <h2 className="mt-4 text-center font-heading text-[32px] font-bold leading-[1.08] tracking-[-0.7px] text-text-primary [text-wrap:pretty]">
        {t("care.headingLine1Before")} <span className="text-care-highlight">{t("care.headingHighlight")}</span>
        <br />
        {t("care.headingLine2")}
      </h2>
      <p className="mt-3.5 text-center text-[15.5px] leading-[1.6] text-care-body [text-wrap:pretty]">
        {t("care.description")}
      </p>

      <div className="mt-3.5 grid min-h-[212px] grid-cols-[56px_1fr_56px] grid-rows-3 items-center justify-items-center gap-2">
        <div className="col-start-2 row-span-3 flex h-[200px] items-end justify-center overflow-hidden">
          <img
            src={careDoctorImage}
            alt={t("care.imageAlt")}
            className="h-[200px] w-auto max-w-full object-contain"
            loading="lazy"
          />
        </div>
        {renderChip(0)}
        {renderChip(3)}
      </div>

      <div className="mt-1.5 rounded-[16px] border border-border-subtle bg-white p-[18px] pb-4 text-center shadow-care-card">
        <h3 className="font-heading text-[19px] font-bold leading-[1.2] text-text-primary">
          {t(`care.items.${active.translationKey}.title`)}
        </h3>
        <p className="mt-2 text-[14px] leading-[1.55] text-care-desc [text-wrap:pretty]">
          {t(`care.items.${active.translationKey}.description`)}
        </p>
        <Link
          to={withLocale(CARE_LEARN_MORE_HREFS[active.id] ?? SITE.urgentCareHref, language)}
          className="mt-3 inline-flex min-h-[44px] items-center justify-center gap-[7px] text-[14.5px] font-bold text-brand-icon no-underline"
        >
          {t("care.learnMore")}
          <ChevronIcon direction="right" size={15} strokeWidth={2.2} />
        </Link>
      </div>
    </section>
  );
}
