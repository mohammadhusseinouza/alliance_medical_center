import { useTranslation } from "react-i18next";
import { CheckIcon, FlaskIcon, TruckIcon, UserIcon, VideoIcon } from "../../../components/icons";
import { WORKPLACE_HEALTH_SERVICES } from "./workplaceHealthServices.data";
import type { WorkplaceHealthServiceIconName } from "./workplaceHealthServices.types";

function ServiceIcon({ icon }: { icon: WorkplaceHealthServiceIconName }) {
  const props = { size: 24, strokeWidth: 1.8 };
  switch (icon) {
    case "user":
      return <UserIcon {...props} />;
    case "flask":
      return <FlaskIcon {...props} />;
    case "truck":
      return <TruckIcon {...props} />;
    case "video":
      return <VideoIcon {...props} />;
  }
}

export function WorkplaceHealthServices() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 pb-[85px] pt-5 mw-650:px-[18px] mw-650:pb-[55px] mw-650:pt-4">
      <div className="mx-auto max-w-[1380px]">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.7px] text-badge-text">
          {t("occupationalHealth.services.eyebrow")}
        </div>

        <h2 className="mx-auto mt-4 max-w-[640px] text-center text-[clamp(30px,3vw,40px)] font-bold leading-[1.14] tracking-[-1px] text-text-primary">
          {t("occupationalHealth.services.heading")}
        </h2>

        <p className="mx-auto mt-[14px] max-w-[680px] text-center text-base leading-[1.65] text-text-secondary [text-wrap:pretty]">
          {t("occupationalHealth.services.description")}
        </p>

        <ul className="mt-11 grid grid-cols-4 gap-[22px] mw-1100:grid-cols-2 mw-880:grid-cols-1">
          {WORKPLACE_HEALTH_SERVICES.map((item) => (
            <li
              key={item.id}
              className="flex h-full flex-col rounded-2xl border border-border-subtle bg-white p-[26px] shadow-card [transition:transform_200ms_ease,box-shadow_200ms_ease] hover:-translate-y-[2px] hover:shadow-card-hover motion-reduce:duration-[0.01ms]"
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] bg-badge-bg text-badge-text">
                <ServiceIcon icon={item.icon} />
              </div>

              <h3 className="mt-[18px] text-[19px] font-bold leading-[1.3] text-text-primary">
                {t(`occupationalHealth.services.items.${item.translationKey}.title`)}
              </h3>

              <p className="mt-[10px] text-[14.5px] leading-[1.6] text-text-secondary">
                {t(`occupationalHealth.services.items.${item.translationKey}.description`)}
              </p>

              <ul className="mt-4 flex flex-col gap-2">
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-[13.5px] leading-[1.4] text-text-secondary"
                  >
                    <CheckIcon size={14} strokeWidth={3} className="flex-shrink-0 text-badge-text" />
                    {t(`occupationalHealth.services.items.${item.translationKey}.features.${feature}`)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
