import { useTranslation } from "react-i18next";
import { HomeIcon, RunningIcon, ShieldCheckIcon } from "../../../components/icons";
import { ADDITIONAL_HEALTH_SERVICES } from "./additionalHealthServices.data";
import type { AdditionalHealthServiceIconName } from "./additionalHealthServices.types";

function ServiceIcon({ icon }: { icon: AdditionalHealthServiceIconName }) {
  const props = { size: 20, strokeWidth: 1.8 };
  switch (icon) {
    case "running":
      return <RunningIcon {...props} />;
    case "home":
      return <HomeIcon {...props} />;
    case "shield-check":
      return <ShieldCheckIcon {...props} />;
  }
}

export function AdditionalHealthServices() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 pb-20 pt-5 mw-650:px-[18px] mw-650:pb-[50px] mw-650:pt-4">
      <div className="mx-auto max-w-[1380px]">
        <h2 className="mx-auto font-heading text-center text-[clamp(28px,2.6vw,34px)] font-bold leading-[1.16] tracking-[-0.8px] text-text-primary">
          {t("occupationalHealth.additionalServices.heading")}
        </h2>

        <p className="mx-auto mt-3 max-w-[600px] text-center text-base leading-[1.6] text-text-secondary">
          {t("occupationalHealth.additionalServices.description")}
        </p>

        <ul className="mt-9 grid grid-cols-3 gap-[22px] mw-880:grid-cols-1">
          {ADDITIONAL_HEALTH_SERVICES.map((item) => (
            <li
              key={item.id}
              className={`rounded-2xl border bg-white p-[22px] [transition:transform_200ms_ease,box-shadow_200ms_ease] hover:-translate-y-[2px] hover:shadow-card-hover motion-reduce:duration-[0.01ms] ${
                item.accent === "success" ? "border-success/30" : "border-border-subtle"
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-[12px] ${
                  item.accent === "success" ? "bg-success-bg text-success-text" : "bg-badge-bg text-badge-text"
                }`}
              >
                <ServiceIcon icon={item.icon} />
              </div>

              <h3 className="mt-[14px] font-heading text-[17px] font-bold leading-[1.3] text-text-primary">
                {t(`occupationalHealth.additionalServices.items.${item.translationKey}.title`)}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.55] text-text-secondary">
                {t(`occupationalHealth.additionalServices.items.${item.translationKey}.description`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
