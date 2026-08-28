import { useTranslation } from "react-i18next";
import examinationImage from "../../../assets/pediatric-care/Pediatric physician performing a routine health examination on a young child with a parent present.png";
import mainPhotoImage from "../../../assets/pediatric-care/Pediatrician warmly interacting with a child and parent in a bright exam room.png";
import wellnessImage from "../../../assets/pediatric-care/Healthcare professional interacting with a child during a pediatric wellness assessment.png";
import { CheckIcon } from "../../../components/icons";
import { PediatricCareFaq } from "./PediatricCareFaq";

const BENEFIT_KEYS = [
  "regularCheckups",
  "skinConditions",
  "growthTracking",
  "digestiveProblems",
  "immunizations",
  "minorInjuries",
  "developmentalScreening",
  "teenHealthExams",
  "schoolPhysicals",
  "mentalHealthSupport",
  "commonIllnesses",
  "sportsMedicine",
  "respiratoryCare",
  "nutritionCounseling",
] as const;

const WHY_CHOOSE_KEYS = [
  "childFriendly",
  "specialists",
  "parentEducation",
  "flexibleScheduling",
  "immunizationRecords",
  "schoolCoordination",
] as const;

export function PediatricCareContent() {
  const { t } = useTranslation();

  return (
    <div className="min-w-0">
      <img
        src={mainPhotoImage}
        alt={t("pediatricCare.mainPhotoAlt")}
        className="block aspect-[16/8] w-full rounded-2xl object-cover"
        loading="lazy"
      />

      <h2 className="mt-[30px] font-heading text-[clamp(28px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.8px] text-text-primary">
        {t("pediatricCare.heading")}
      </h2>

      <p className="mt-[14px] max-w-[780px] text-[16.5px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("pediatricCare.intro")}
      </p>

      <div className="mt-[26px] w-fit rounded-full bg-badge-bg px-[15px] py-[7px] text-xs font-bold uppercase tracking-[0.7px] text-badge-text">
        {t("pediatricCare.whatsIncluded")}
      </div>

      <ul className="mt-[18px] grid grid-cols-2 gap-x-[34px] gap-y-[14px] mw-880:grid-cols-1">
        {BENEFIT_KEYS.map((key) => (
          <li key={key} className="flex items-start gap-[11px]">
            <CheckIcon size={18} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
            <span className="text-[15.5px] leading-[1.55] text-service-detail-benefit-text">
              {t(`pediatricCare.benefits.${key}`)}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mt-[42px] font-heading text-[clamp(24px,2vw,26px)] font-bold leading-[1.25] tracking-[-0.6px] text-text-primary">
        {t("pediatricCare.whyChoose.heading")}
      </h2>

      <ul className="mt-[18px] grid grid-cols-2 gap-x-[34px] gap-y-[14px] mw-880:grid-cols-1">
        {WHY_CHOOSE_KEYS.map((key) => (
          <li key={key} className="flex items-start gap-[11px]">
            <CheckIcon size={18} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
            <span className="text-[15.5px] leading-[1.55] text-service-detail-benefit-text">
              {t(`pediatricCare.whyChoose.items.${key}`)}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mt-[42px] font-heading text-[clamp(24px,2vw,26px)] font-bold leading-[1.25] tracking-[-0.6px] text-text-primary">
        {t("pediatricCare.comprehensive.heading")}
      </h2>

      <p className="mt-3 max-w-[780px] text-base leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("pediatricCare.comprehensive.description")}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-[22px] mw-880:grid-cols-1">
        <img
          src={examinationImage}
          alt={t("pediatricCare.pairAlt.examination")}
          className="block aspect-[4/3] w-full rounded-[14px] object-cover object-center"
          loading="lazy"
        />
        <img
          src={wellnessImage}
          alt={t("pediatricCare.pairAlt.wellness")}
          className="block aspect-[4/3] w-full rounded-[14px] object-cover object-center"
          loading="lazy"
        />
      </div>

      <PediatricCareFaq />
    </div>
  );
}
