import { useTranslation } from "react-i18next";
import { FlaskIcon, HeartPulseIcon, ShieldCheckIcon, UserIcon, VideoIcon } from "../../../components/icons";
import type { WorkplaceHealthIconName, WorkplaceHealthItem } from "./WorkplaceHealth.types";

function CardIcon({ icon }: { icon: WorkplaceHealthIconName }) {
  const props = { size: 22, strokeWidth: 1.8 };
  switch (icon) {
    case "user":
      return <UserIcon {...props} />;
    case "shield-check":
      return <ShieldCheckIcon {...props} />;
    case "flask":
      return <FlaskIcon {...props} />;
    case "video":
      return <VideoIcon {...props} />;
    case "heart-pulse":
      return <HeartPulseIcon {...props} />;
  }
}

export interface WorkplaceHealthCardProps {
  item: WorkplaceHealthItem;
}

export function WorkplaceHealthCard({ item }: WorkplaceHealthCardProps) {
  const { t } = useTranslation();

  return (
    <li
      className="animate-svc-item flex flex-col gap-3 rounded-2xl border border-border-subtle bg-white p-6 shadow-card [transition:transform_220ms_ease,box-shadow_220ms_ease] hover:-translate-y-[3px] hover:shadow-card-hover motion-reduce:duration-[0.01ms] motion-reduce:[animation-duration:0.01ms]"
      style={{ animationDelay: `${item.animationDelayMs}ms` }}
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-badge-text">
        <CardIcon icon={item.icon} />
      </div>
      <h3 className="font-heading text-[16px] font-bold leading-[1.3] text-text-primary">
        {t(`workplaceHealth.items.${item.translationKey}.title`)}
      </h3>
      <p className="text-[13.5px] leading-[1.55] text-text-secondary">
        {t(`workplaceHealth.items.${item.translationKey}.description`)}
      </p>
    </li>
  );
}
