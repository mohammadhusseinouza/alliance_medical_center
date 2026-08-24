import { ArrowRightIcon, PlusIcon, PulseLineIcon } from "../../../components/icons";
import { SERVICES } from "./services.data";
import { ServiceItem } from "./ServiceItem";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden px-6 pb-[95px] pt-[78px] mw-650:px-[18px] mw-650:pb-[75px] mw-650:pt-[65px]"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FBFDFE 70%, #F5FBFC 100%)" }}
    >
      <div className="relative z-[2] mx-auto max-w-[1380px]">
        <div className="mx-auto flex w-fit animate-[hero-up_550ms_cubic-bezier(0.22,1,0.36,1)_0ms_both] items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-badge-text motion-reduce:[animation-duration:0.01ms]">
          <PlusIcon size={14} />
          Our Services
        </div>

        <h2 className="mt-4 animate-[hero-up_550ms_cubic-bezier(0.22,1,0.36,1)_60ms_both] text-center text-[clamp(44px,4.5vw,70px)] font-bold leading-[1.05] tracking-[-1.5px] text-text-primary motion-reduce:[animation-duration:0.01ms] mw-650:text-[38px] mw-650:tracking-[-1px]">
          Your <span className="text-badge-text">Health</span> Journey Starts Here
        </h2>

        <div className="mx-auto mt-[18px] flex w-[600px] max-w-[70%] animate-[hero-up_550ms_cubic-bezier(0.22,1,0.36,1)_110ms_both] items-center gap-[14px] motion-reduce:[animation-duration:0.01ms] mw-650:max-w-[80%]">
          <div className="h-px flex-1 bg-[#C8E7EA]" />
          <PulseLineIcon />
          <div className="h-px flex-1 bg-[#C8E7EA]" />
        </div>

        <p className="mx-auto mt-[18px] max-w-[820px] animate-[hero-up_550ms_cubic-bezier(0.22,1,0.36,1)_160ms_both] text-center text-[17px] leading-[1.65] text-text-secondary motion-reduce:[animation-duration:0.01ms] mw-650:text-[15.5px]">
          Compassionate care, trusted expertise, and personalized support for every stage of your health and
          wellness.
        </p>

        <div className="mt-[50px] grid grid-cols-4 border-l border-t border-[#DCE7EB] mw-1050:grid-cols-2 mw-650:grid-cols-1">
          {SERVICES.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>

        <a
          href="#"
          className="group relative z-[3] mx-auto mt-7 inline-flex w-fit items-center justify-center gap-2 text-[12px] font-bold uppercase tracking-[0.4px] text-[#087C91] no-underline"
        >
          View All Services
          <ArrowRightIcon
            size={14}
            className="transition-transform duration-[220ms] ease group-hover:translate-x-[5px]"
          />
        </a>
      </div>
    </section>
  );
}
