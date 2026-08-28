import { useTranslation } from "react-i18next";
import {
  ActivityIcon,
  BagIcon,
  ChevronIcon,
  FirstAidBoxIcon,
  FlaskIcon,
  ThermometerIcon,
  UserGroupIcon,
} from "../../../components/icons";
import type { CareIconName, CareItem } from "./Care.types";

function CardIcon({ icon }: { icon: CareIconName }) {
  const props = { size: 28, strokeWidth: 2 };
  switch (icon) {
    case "user-group":
      return <UserGroupIcon {...props} />;
    case "bag":
      return <BagIcon {...props} />;
    case "activity":
      return <ActivityIcon {...props} />;
    case "thermometer":
      return <ThermometerIcon {...props} />;
    case "first-aid-box":
      return <FirstAidBoxIcon {...props} />;
    case "flask":
      return <FlaskIcon {...props} strokeWidth={1.7} />;
  }
}

export interface CareCardProps {
  item: CareItem;
}

export function CareCard({ item }: CareCardProps) {
  const { t } = useTranslation();
  const isLeft = item.position === "left";
  const connectorSide = isLeft ? "right-[-25px]" : "left-[-25px]";
  const entranceAnimation = isLeft ? "animate-care-left-in" : "animate-care-right-in";

  return (
    <a
      href="#"
      tabIndex={0}
      className={`group relative grid min-h-[116px] w-full grid-cols-[66px_1fr_26px] items-center gap-4 rounded-2xl border border-border-subtle bg-white px-5 py-[18px] shadow-care-card no-underline [transition:transform_220ms_ease,box-shadow_220ms_ease,border-color_220ms_ease] hover:-translate-y-[3px] hover:border-care-card-hover-border hover:shadow-care-card-hover focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-care-card-focus-ring motion-reduce:duration-[0.01ms] motion-reduce:[animation-duration:0.01ms] ${entranceAnimation} mw-1100:max-w-[340px] mw-650:grid-cols-[56px_1fr_auto] mw-650:min-h-[100px] mw-650:p-4`}
      style={{ animationDelay: `${item.animationDelayMs}ms` }}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 h-0 w-[25px] -translate-y-1/2 border-t-[1.2px] border-dashed border-care-connector-dash opacity-65 mw-850:hidden ${connectorSide}`}
      />
      <div
        aria-hidden="true"
        className={`absolute top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-care-connector-dot shadow-care-dot-ring ${connectorSide}`}
      />

      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-teal-icon-bg text-care-icon-text mw-1100:h-[52px] mw-1100:w-[52px]">
        <CardIcon icon={item.icon} />
      </div>

      <div>
        <h3 className="font-heading text-[18px] font-bold leading-[1.25] text-text-primary">
          {t(`care.items.${item.translationKey}.title`)}
        </h3>
        <p className="mt-[6px] text-[13.5px] leading-[1.55] text-care-desc">
          {t(`care.items.${item.translationKey}.description`)}
        </p>
      </div>

      <ChevronIcon
        direction="right"
        size={22}
        strokeWidth={2}
        className="text-teal-icon transition-transform duration-200 group-hover:translate-x-[3px]"
      />
    </a>
  );
}
