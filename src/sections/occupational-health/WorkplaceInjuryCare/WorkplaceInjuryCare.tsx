import { useTranslation } from "react-i18next";
import injuryCareImage from "../../../assets/occupational-health/om_workplaceinjurycare.png";
import { CheckIcon } from "../../../components/icons";

const BENEFIT_KEYS = ["immediateEvaluation", "caseManagement", "rehabilitation", "followUp"] as const;

export function WorkplaceInjuryCare() {
  const { t } = useTranslation();

  return (
    <section className="bg-appointment-referral-section-bg px-6 py-[76px] mw-650:px-[18px] mw-650:py-[50px]">
      <div className="mx-auto grid max-w-[1380px] grid-cols-2 items-center gap-[56px] mw-880:grid-cols-1 mw-880:gap-8">
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
          <img
            src={injuryCareImage}
            alt={t("occupationalHealth.injuryCare.imageAlt")}
            className="block h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h2 className="font-heading text-[clamp(28px,2.6vw,36px)] font-bold leading-[1.15] tracking-[-0.8px] text-text-primary">
            {t("occupationalHealth.injuryCare.heading")}
          </h2>

          <p className="mt-[14px] text-[16px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
            {t("occupationalHealth.injuryCare.description")}
          </p>

          <ul className="mt-[26px] grid grid-cols-2 gap-x-6 gap-y-4 mw-650:grid-cols-1">
            {BENEFIT_KEYS.map((key) => (
              <li key={key} className="flex items-center gap-[10px]">
                <CheckIcon size={16} strokeWidth={3} className="flex-shrink-0 text-badge-text" />
                <span className="text-[15px] font-semibold leading-[1.3] text-text-primary">
                  {t(`occupationalHealth.injuryCare.benefits.${key}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
