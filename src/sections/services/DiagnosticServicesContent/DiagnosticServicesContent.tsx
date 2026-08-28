import { useTranslation } from "react-i18next";
import imagingImage from "../../../assets/diagnostic-services/Clinician performing an ultrasound examination.png";
import mainPhotoImage from "../../../assets/diagnostic-services/Diagnostic imaging technician preparing a patient for a scan.png";
import labImage from "../../../assets/diagnostic-services/Laboratory technician analyzing a blood sample.png";
import { CheckIcon } from "../../../components/icons";
import { DiagnosticServicesFaq } from "./DiagnosticServicesFaq";
import { DIAGNOSTIC_SERVICE_ITEMS } from "./diagnosticServicesContent.data";

const WHY_CHOOSE_KEYS = [
  "sameDay",
  "digitalImaging",
  "radiologists",
  "electronicResults",
  "insurance",
  "scheduling",
] as const;

export function DiagnosticServicesContent() {
  const { t } = useTranslation();

  return (
    <div className="min-w-0">
      <img
        src={mainPhotoImage}
        alt={t("diagnosticServices.content.mainPhotoAlt")}
        className="block aspect-[16/8] w-full rounded-2xl object-cover"
        loading="lazy"
      />

      <h2 className="mt-[30px] font-heading text-[clamp(28px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.8px] text-text-primary">
        {t("diagnosticServices.content.heading")}
      </h2>

      <p className="mt-2 text-[17px] font-semibold leading-[1.4] text-badge-text">
        {t("diagnosticServices.content.subheading")}
      </p>

      <p className="mt-[14px] max-w-[780px] text-[16.5px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
        {t("diagnosticServices.content.description")}
      </p>

      <div className="mt-[26px] w-fit rounded-full bg-badge-bg px-[15px] py-[7px] text-xs font-bold uppercase tracking-[0.7px] text-badge-text">
        {t("diagnosticServices.services.heading")}
      </div>

      <ul className="mt-[18px] grid grid-cols-2 gap-x-[34px] gap-y-5 mw-880:grid-cols-1">
        {DIAGNOSTIC_SERVICE_ITEMS.map((item) => (
          <li key={item.id} className="flex items-start gap-[11px]">
            <CheckIcon size={18} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
            <div>
              <p className="text-[15.5px] font-bold leading-[1.4] text-text-primary">
                {t(`diagnosticServices.services.items.${item.translationKey}.title`)}
              </p>
              <p className="mt-[3px] text-[14px] leading-[1.55] text-text-secondary">
                {t(`diagnosticServices.services.items.${item.translationKey}.description`)}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <h2 className="mt-[42px] font-heading text-[clamp(24px,2vw,26px)] font-bold leading-[1.25] tracking-[-0.6px] text-text-primary">
        {t("diagnosticServices.whyChoose.heading")}
      </h2>

      <ul className="mt-[18px] grid grid-cols-2 gap-x-[34px] gap-y-[14px] mw-880:grid-cols-1">
        {WHY_CHOOSE_KEYS.map((key) => (
          <li key={key} className="flex items-start gap-[11px]">
            <CheckIcon size={18} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
            <span className="text-[15.5px] leading-[1.55] text-service-detail-benefit-text">
              {t(`diagnosticServices.whyChoose.items.${key}`)}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 grid grid-cols-2 gap-[22px] mw-880:grid-cols-1">
        <img
          src={labImage}
          alt={t("diagnosticServices.content.pairAlt.lab")}
          className="block aspect-[4/3] w-full rounded-[14px] object-cover object-center"
          loading="lazy"
        />
        <img
          src={imagingImage}
          alt={t("diagnosticServices.content.pairAlt.imaging")}
          className="block aspect-[4/3] w-full rounded-[14px] object-cover object-center"
          loading="lazy"
        />
      </div>

      <DiagnosticServicesFaq />
    </div>
  );
}
