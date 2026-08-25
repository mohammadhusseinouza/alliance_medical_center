import { useTranslation } from "react-i18next";
import { ClockDialIcon, FlaskBasicIcon, MapPinIcon } from "../../../components/icons";
import type { AboutStat, AboutStatIcon } from "./About.types";

function StatIcon({ icon }: { icon: AboutStatIcon }) {
  if (icon === "clock-dial") return <ClockDialIcon size={30} strokeWidth={1.8} />;
  if (icon === "flask-basic") return <FlaskBasicIcon size={30} strokeWidth={1.8} />;
  return <MapPinIcon size={30} />;
}

export interface AboutStatRowProps {
  stat: AboutStat;
  showDivider: boolean;
}

export function AboutStatRow({ stat, showDivider }: AboutStatRowProps) {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-1 animate-about-fade-up items-center gap-5 py-4 motion-reduce:[animation-duration:0.01ms] mw-1100:flex-col mw-1100:border-t-0 mw-1100:text-center mw-700:flex-row mw-700:py-[22px] mw-700:text-left ${
        showDivider ? "border-t border-white/[0.13]" : ""
      }`}
      style={{ animationDelay: `${stat.animationDelayMs}ms` }}
    >
      <div className="flex h-[76px] w-[76px] flex-shrink-0 items-center justify-center rounded-full text-white mw-700:h-[62px] mw-700:w-[62px]" style={{ background: "linear-gradient(145deg, #1AA7AD, #0D6B78)" }}>
        <StatIcon icon={stat.icon} />
      </div>
      <div>
        <p className="text-[19px] font-bold tracking-[0.2px] text-white">
          {t(stat.titleKey ?? `about.stats.${stat.translationKey}.title`)}
        </p>
        <p className="mt-2 text-[13px] leading-[1.5] text-white/70">
          {t(`about.stats.${stat.translationKey}.description`)}
        </p>
      </div>
    </div>
  );
}
