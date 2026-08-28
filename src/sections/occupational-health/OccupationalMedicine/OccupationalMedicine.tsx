import { useTranslation } from "react-i18next";
import occupationalMedicineImage from "../../../assets/occupational-health/om_ocupationalmedicine.png";
import { BriefcaseIcon, CheckIcon } from "../../../components/icons";

const BENEFIT_KEYS = ["preEmployment", "returnToWork", "injuryCare", "surveillance"] as const;

export function OccupationalMedicine() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 pb-[85px] pt-[85px] mw-650:px-[18px] mw-650:pb-[60px] mw-650:pt-[55px]">
      <div className="mx-auto grid max-w-[1380px] grid-cols-2 items-center gap-[56px] mw-880:grid-cols-1 mw-880:gap-8">
        <div>
          <div className="flex w-fit items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.7px] text-badge-text">
            <BriefcaseIcon size={14} />
            {t("occupationalHealth.eyebrow")}
          </div>

          <h1 className="mt-[18px] font-heading text-[clamp(34px,4vw,48px)] font-bold leading-[1.1] tracking-[-1px] text-text-primary">
            {t("occupationalHealth.heading")}
          </h1>

          <p className="mt-[18px] max-w-[560px] text-[17px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
            {t("occupationalHealth.description")}
          </p>

          <ul className="mt-[30px] flex flex-col gap-5">
            {BENEFIT_KEYS.map((key) => (
              <li key={key} className="flex items-start gap-[13px]">
                <span className="mt-px flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-badge-text">
                  <CheckIcon size={14} strokeWidth={3} />
                </span>
                <div>
                  <p className="text-[16px] font-semibold leading-[1.3] text-text-primary">
                    {t(`occupationalHealth.benefits.${key}.title`)}
                  </p>
                  <p className="mt-[3px] text-[14.5px] leading-[1.55] text-text-secondary">
                    {t(`occupationalHealth.benefits.${key}.description`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
          <img
            src={occupationalMedicineImage}
            alt={t("occupationalHealth.imageAlt")}
            className="block h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
