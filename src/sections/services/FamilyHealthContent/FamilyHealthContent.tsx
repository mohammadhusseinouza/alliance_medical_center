import { useTranslation } from "react-i18next";
import consultationImage from "../../../assets/family-health/Primary care physician performing a routine health examination with an adult patient.png";
import mainPhotoImage from "../../../assets/family-health/Primary care physician consulting with a patient in a bright exam room.png";
import familyVisitImage from "../../../assets/family-health/Family medicine provider meeting with a parent and child in a modern clinical environment.png";
import { CheckIcon } from "../../../components/icons";
import { FamilyHealthFaq } from "./FamilyHealthFaq";

const BENEFIT_KEYS = [
  "annualExams",
  "cholesterolManagement",
  "immunizations",
  "asthmaCare",
  "healthScreenings",
  "arthritisTreatment",
  "wellnessCounseling",
  "pediatricCare",
  "mentalHealthScreening",
  "adultMedicine",
  "diabetesCare",
  "geriatricCare",
  "hypertensionTreatment",
  "sportsMedicine",
] as const;

const WHY_CHOOSE_KEYS = [
  "sameDay",
  "careCoordination",
  "electronicRecords",
  "prescriptionManagement",
  "specialistReferrals",
  "telehealth",
] as const;

export function FamilyHealthContent() {
  const { t } = useTranslation();

  return (
    <div className="min-w-0">
      <img
        src={mainPhotoImage}
        alt={t("familyHealth.mainPhotoAlt")}
        className="block aspect-[16/8] w-full rounded-2xl object-cover"
        loading="lazy"
      />

      <h2 className="mt-[30px] font-heading text-[clamp(28px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.8px] text-text-primary">
        {t("familyHealth.heading")}
      </h2>

      <p className="mt-[14px] max-w-[780px] text-[16.5px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("familyHealth.intro")}
      </p>

      <div className="mt-[26px] w-fit rounded-full bg-badge-bg px-[15px] py-[7px] text-xs font-bold uppercase tracking-[0.7px] text-badge-text">
        {t("familyHealth.whatsIncluded")}
      </div>

      <ul className="mt-[18px] grid grid-cols-2 gap-x-[34px] gap-y-[14px] mw-880:grid-cols-1">
        {BENEFIT_KEYS.map((key) => (
          <li key={key} className="flex items-start gap-[11px]">
            <CheckIcon size={18} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
            <span className="text-[15.5px] leading-[1.55] text-service-detail-benefit-text">
              {t(`familyHealth.benefits.${key}`)}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mt-[42px] font-heading text-[clamp(24px,2vw,26px)] font-bold leading-[1.25] tracking-[-0.6px] text-text-primary">
        {t("familyHealth.whyChoose.heading")}
      </h2>

      <ul className="mt-[18px] grid grid-cols-2 gap-x-[34px] gap-y-[14px] mw-880:grid-cols-1">
        {WHY_CHOOSE_KEYS.map((key) => (
          <li key={key} className="flex items-start gap-[11px]">
            <CheckIcon size={18} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
            <span className="text-[15.5px] leading-[1.55] text-service-detail-benefit-text">
              {t(`familyHealth.whyChoose.items.${key}`)}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mt-[42px] font-heading text-[clamp(24px,2vw,26px)] font-bold leading-[1.25] tracking-[-0.6px] text-text-primary">
        {t("familyHealth.comprehensive.heading")}
      </h2>

      <p className="mt-3 max-w-[780px] text-base leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("familyHealth.comprehensive.description")}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-[22px] mw-880:grid-cols-1">
        <img
          src={consultationImage}
          alt={t("familyHealth.pairAlt.consultation")}
          className="block aspect-[4/3] w-full rounded-[14px] object-cover object-center"
          loading="lazy"
        />
        <img
          src={familyVisitImage}
          alt={t("familyHealth.pairAlt.familyVisit")}
          className="block aspect-[4/3] w-full rounded-[14px] object-cover object-center"
          loading="lazy"
        />
      </div>

      <FamilyHealthFaq />
    </div>
  );
}
