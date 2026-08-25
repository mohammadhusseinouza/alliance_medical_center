import { useTranslation } from "react-i18next";
import labImage from "../../../assets/urgent-care/lab-diagnostics.png";
import mainPhotoImage from "../../../assets/urgent-care/main-consultation.png";
import pediatricImage from "../../../assets/urgent-care/pediatric-care.png";
import { CheckIcon } from "../../../components/icons";
import { UrgentCareFaq } from "./UrgentCareFaq";

const BENEFIT_KEYS = [
  "minorIllnesses",
  "walkIns",
  "convenientAccess",
  "diagnostics",
  "minorInjuries",
  "commonIllnesses",
  "screenings",
  "followUp",
] as const;

export function UrgentCareContent() {
  const { t } = useTranslation();

  return (
    <div className="min-w-0">
      <img
        src={mainPhotoImage}
        alt={t("servicePage.urgentCare.mainPhotoAlt")}
        className="block aspect-[16/8] w-full rounded-2xl object-cover"
        loading="lazy"
      />

      <h2 className="mt-[30px] text-[clamp(28px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.8px] text-text-primary">
        {t("servicePage.urgentCare.heading")}
      </h2>

      <p className="mt-[14px] max-w-[780px] text-[16.5px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("servicePage.urgentCare.intro")}
      </p>

      <div className="mt-[26px] w-fit rounded-full bg-badge-bg px-[15px] py-[7px] text-xs font-bold uppercase tracking-[0.7px] text-badge-text">
        {t("servicePage.urgentCare.whatsIncluded")}
      </div>

      <ul className="mt-[18px] grid grid-cols-2 gap-x-[34px] gap-y-[14px] mw-880:grid-cols-1">
        {BENEFIT_KEYS.map((key) => (
          <li key={key} className="flex items-start gap-[11px]">
            <CheckIcon size={18} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
            <span className="text-[15.5px] leading-[1.55] text-[#41586D]">
              {t(`servicePage.urgentCare.benefits.${key}`)}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mt-[42px] text-[clamp(24px,2vw,26px)] font-bold leading-[1.25] tracking-[-0.6px] text-text-primary">
        {t("servicePage.urgentCare.comprehensive.heading")}
      </h2>

      <p className="mt-3 max-w-[780px] text-base leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("servicePage.urgentCare.comprehensive.description")}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-[22px] mw-880:grid-cols-1">
        <img
          src={pediatricImage}
          alt={t("servicePage.urgentCare.pairAlt.pediatric")}
          className="block aspect-[4/3] w-full rounded-[14px] object-cover object-center"
          loading="lazy"
        />
        <img
          src={labImage}
          alt={t("servicePage.urgentCare.pairAlt.lab")}
          className="block aspect-[4/3] w-full rounded-[14px] object-cover object-[55%_center]"
          loading="lazy"
        />
      </div>

      <UrgentCareFaq />
    </div>
  );
}
