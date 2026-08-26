import { useTranslation } from "react-i18next";
import { CheckIcon } from "../../../components/icons";
import { ImagePlaceholder } from "../../../components/ui/ImagePlaceholder";

const INCLUDE_KEYS = [
  "medicalHistory",
  "vision",
  "hearing",
  "bloodPressure",
  "physicalExam",
  "medicalCertification",
] as const;

export function DotPhysicalExaminations() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F4F6F8] px-6 py-[76px] mw-650:px-[18px] mw-650:py-[50px]">
      <div className="mx-auto grid max-w-[1380px] grid-cols-2 items-center gap-[56px] mw-880:grid-cols-1 mw-880:gap-8">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
          <ImagePlaceholder label={t("servicePage.imagePlaceholder")} className="h-full w-full" />
        </div>

        <div>
          <h2 className="text-[clamp(28px,2.6vw,36px)] font-bold leading-[1.15] tracking-[-0.8px] text-text-primary">
            {t("occupationalHealth.dotPhysical.heading")}
          </h2>

          <p className="mt-[14px] text-[16px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
            {t("occupationalHealth.dotPhysical.description")}
          </p>

          <div className="mt-6 rounded-2xl border border-border-subtle bg-white px-6 py-[22px]">
            <div className="text-[13px] font-bold uppercase tracking-[0.5px] text-badge-text">
              {t("occupationalHealth.dotPhysical.includesLabel")}
            </div>

            <ul className="mt-[14px] grid grid-cols-2 gap-x-5 gap-y-[10px] mw-650:grid-cols-1">
              {INCLUDE_KEYS.map((key) => (
                <li key={key} className="flex items-center gap-[9px]">
                  <CheckIcon size={14} strokeWidth={3} className="flex-shrink-0 text-badge-text" />
                  <span className="text-[14.5px] leading-[1.3] text-text-secondary">
                    {t(`occupationalHealth.dotPhysical.includes.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
