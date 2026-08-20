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
  const isLeft = item.position === "left";
  const connectorSide = isLeft ? "right-[-25px]" : "left-[-25px]";
  const entranceAnimation = isLeft ? "animate-care-left-in" : "animate-care-right-in";

  return (
    <a
      href="#"
      tabIndex={0}
      className={`group relative grid min-h-[116px] w-full grid-cols-[66px_1fr_26px] items-center gap-4 rounded-2xl border border-[#E2EAED] bg-white px-5 py-[18px] shadow-[0_12px_30px_rgba(25,70,90,0.07)] no-underline [transition:transform_220ms_ease,box-shadow_220ms_ease,border-color_220ms_ease] hover:-translate-y-[3px] hover:border-[rgba(15,135,150,0.28)] hover:shadow-[0_18px_36px_rgba(25,70,90,0.11)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(15,135,150,0.25)] motion-reduce:duration-[0.01ms] motion-reduce:[animation-duration:0.01ms] ${entranceAnimation} mw-1100:max-w-[340px] mw-650:grid-cols-[56px_1fr_auto] mw-650:min-h-[100px] mw-650:p-4`}
      style={{ animationDelay: `${item.animationDelayMs}ms` }}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-1/2 h-0 w-[25px] -translate-y-1/2 border-t-[1.2px] border-dashed border-[#9FDDE2] opacity-65 mw-850:hidden ${connectorSide}`}
      />
      <div
        aria-hidden="true"
        className={`absolute top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0B8F9A] shadow-[0_0_0_5px_rgba(13,145,155,0.08)] ${connectorSide}`}
      />

      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#EDF8F9] text-[#0B8E99] mw-1100:h-[52px] mw-1100:w-[52px]">
        <CardIcon icon={item.icon} />
      </div>

      <div>
        <h3 className="text-[18px] font-bold leading-[1.25] text-text-primary">{item.title}</h3>
        <p className="mt-[6px] text-[13.5px] leading-[1.55] text-[#566D82]">{item.description}</p>
      </div>

      <ChevronIcon
        direction="right"
        size={22}
        strokeWidth={2}
        className="text-[#0B8794] transition-transform duration-200 group-hover:translate-x-[3px]"
      />
    </a>
  );
}
