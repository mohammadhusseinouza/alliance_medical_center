import { useTranslation } from "react-i18next";
import { URGENT_CARE_CONDITIONS } from "./conditions.data";

export function UrgentCareConditions() {
  const { t } = useTranslation();

  return (
    <section className="relative bg-white pb-[70px] pt-5">
      <div className="mx-auto w-[min(1320px,calc(100%-64px))] mw-700:w-[calc(100%-32px)]">
        <h2 className="m-0 text-center font-heading text-[clamp(30px,3vw,40px)] font-bold leading-[1.2] tracking-[-1px] text-brand-navy">
          {t("urgentCare.conditions.heading")}
        </h2>

        <div className="mt-[34px] grid grid-cols-4 gap-[22px] mw-1100:grid-cols-3 mw-900:grid-cols-2 mw-600:gap-[14px]">
          {URGENT_CARE_CONDITIONS.map((condition) => (
            <div
              key={condition.id}
              className="flex flex-col items-center gap-5 rounded-[10px] bg-badge-bg p-[28px_20px] [transition:transform_220ms_ease,box-shadow_220ms_ease] hover:-translate-y-[3px] hover:shadow-care-card"
            >
              <img
                src={condition.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="block h-[104px] w-[104px] flex-shrink-0"
              />
              <span className="text-[16px] font-semibold text-text-secondary">
                {t(`urgentCare.conditions.items.${condition.translationKey}`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
