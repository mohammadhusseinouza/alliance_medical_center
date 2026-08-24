import {
  ArrowRightIcon,
  BookOpenIcon,
  BriefcaseIcon,
  FlaskIcon,
  HeartIcon,
  HeartPulseIcon,
  MedicalKitIcon,
  TeddyBearIcon,
  UsersIcon,
} from "../../../components/icons";
import type { ServiceIconName, ServiceItem as ServiceItemData } from "./Services.types";

const iconClass =
  "mb-[22px] transition-transform duration-[280ms] ease group-hover:-translate-y-[5px] group-hover:scale-[1.045] motion-reduce:duration-[0.01ms]";

function ServiceIcon({ icon }: { icon: ServiceIconName }) {
  const props = { size: 62, strokeWidth: 1.7, className: iconClass };
  switch (icon) {
    case "medical-kit":
      return <MedicalKitIcon {...props} />;
    case "users":
      return <UsersIcon {...props} />;
    case "heart-pulse":
      return <HeartPulseIcon {...props} />;
    case "briefcase":
      return <BriefcaseIcon {...props} />;
    case "heart":
      return <HeartIcon {...props} />;
    case "teddy-bear":
      return <TeddyBearIcon {...props} />;
    case "flask":
      return <FlaskIcon {...props} />;
    case "book-open":
      return <BookOpenIcon {...props} />;
  }
}

export interface ServiceItemProps {
  service: ServiceItemData;
}

export function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div
      id={service.id}
      className="group relative flex min-h-[290px] animate-svc-item flex-col items-center border-b border-r border-[#DCE7EB] px-[30px] pb-[34px] pt-[40px] text-center [transition:background_250ms_ease,transform_250ms_ease] hover:-translate-y-[2px] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.95),#F6FBFC)] motion-reduce:duration-[0.01ms] motion-reduce:[animation-duration:0.01ms] mw-650:min-h-[auto] mw-650:items-start mw-650:px-[22px] mw-650:pb-[30px] mw-650:pt-[30px] mw-650:text-left"
      style={{ color: service.accentColor, animationDelay: `${service.animationDelayMs}ms` }}
    >
      <div className="mb-[22px] h-0.5 w-[46px] rounded-full bg-current transition-[width] duration-[250ms] ease group-hover:w-[62px] motion-reduce:duration-[0.01ms]" />
      <ServiceIcon icon={service.icon} />
      <h3
        className={`text-[20px] font-bold leading-[1.25] text-[#102039] ${service.titleNoWrap ? "whitespace-nowrap" : ""}`}
      >
        {service.title}
      </h3>
      <p className="mt-3 max-w-[245px] text-[14px] leading-[1.55] text-[#61758A] mw-650:max-w-none">
        {service.description}
      </p>
      <a
        href={service.href}
        className="mt-auto inline-flex items-center gap-2 pt-6 text-[12px] font-bold uppercase tracking-[0.4px] text-[#087C91] no-underline"
      >
        Explore Service
        <ArrowRightIcon
          size={14}
          className="transition-transform duration-[220ms] ease group-hover:translate-x-[5px] motion-reduce:duration-[0.01ms]"
        />
      </a>
    </div>
  );
}
