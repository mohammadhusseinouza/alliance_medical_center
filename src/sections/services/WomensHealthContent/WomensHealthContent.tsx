import { useTranslation } from "react-i18next";
import { CheckIcon } from "../../../components/icons";
import { ImagePlaceholder } from "../../../components/ui/ImagePlaceholder";
import { WomensHealthFaq } from "./WomensHealthFaq";

const BENEFIT_KEYS = [
  "annualExams",
  "nutritionalCounseling",
  "papSmears",
  "highRiskPregnancy",
  "breastExams",
  "menopauseManagement",
  "familyPlanning",
  "pcosTreatment",
  "stdTesting",
  "thyroidManagement",
  "pregnancyTesting",
  "osteoporosisPrevention",
  "prenatalCare",
  "wellnessCare",
] as const;

export function WomensHealthContent() {
  const { t } = useTranslation();

  return (
    <div className="min-w-0">
      <div className="aspect-[16/8] w-full overflow-hidden rounded-2xl">
        <ImagePlaceholder label={t("womensHealth.mainPhotoAlt")} className="h-full w-full" />
      </div>

      <h2 className="mt-[30px] text-[clamp(28px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.8px] text-text-primary">
        {t("womensHealth.heading")}
      </h2>

      <p className="mt-[14px] max-w-[780px] text-[16.5px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("womensHealth.intro")}
      </p>

      <div className="mt-[26px] w-fit rounded-full bg-badge-bg px-[15px] py-[7px] text-xs font-bold uppercase tracking-[0.7px] text-badge-text">
        {t("womensHealth.whatsIncluded")}
      </div>

      <ul className="mt-[18px] grid grid-cols-2 gap-x-[34px] gap-y-[14px] mw-880:grid-cols-1">
        {BENEFIT_KEYS.map((key) => (
          <li key={key} className="flex items-start gap-[11px]">
            <CheckIcon size={18} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
            <span className="text-[15.5px] leading-[1.55] text-[#41586D]">
              {t(`womensHealth.benefits.${key}`)}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mt-[42px] text-[clamp(24px,2vw,26px)] font-bold leading-[1.25] tracking-[-0.6px] text-text-primary">
        {t("womensHealth.comprehensive.heading")}
      </h2>

      <p className="mt-3 max-w-[780px] text-base leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("womensHealth.comprehensive.description")}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-[22px] mw-880:grid-cols-1">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px]">
          <ImagePlaceholder label={t("womensHealth.pairAlt.consultation")} className="h-full w-full" />
        </div>
        <div className="aspect-[4/3] w-full overflow-hidden rounded-[14px]">
          <ImagePlaceholder label={t("womensHealth.pairAlt.screening")} className="h-full w-full" />
        </div>
      </div>

      <WomensHealthFaq />
    </div>
  );
}
