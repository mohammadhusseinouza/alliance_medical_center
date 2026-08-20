import type { ReactNode } from "react";
import { ArrowUpRightIcon, MapPinIcon, PhoneIcon, PrinterIcon, StopwatchIcon, UserIcon } from "../../../components/icons";
import { CONTACT_ROWS, REACH_ACTIONS } from "./reachUs.data";
import type { ContactIconName, ContactRow, ReachActionIcon } from "./ReachUs.types";

function ContactRowIcon({ icon }: { icon: ContactIconName }) {
  const props = { size: 18 };
  if (icon === "map-pin") return <MapPinIcon {...props} />;
  if (icon === "phone") return <PhoneIcon {...props} />;
  return <PrinterIcon {...props} />;
}

function ActionIcon({ icon }: { icon: ReachActionIcon }) {
  if (icon === "arrow-up-right") return <ArrowUpRightIcon size={20} />;
  return <PhoneIcon size={19} />;
}

function ContactRowItem({ row }: { row: ContactRow }) {
  const hoverValueClass = row.href
    ? row.hoverUnderline
      ? "group-hover:text-[#176D7C] group-hover:underline"
      : "group-hover:text-[#176D7C]"
    : "group-hover:text-[#334D61]";

  const content = (
    <>
      <span className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-[#EDF8F9] text-[#0B8794] transition-transform duration-[220ms] group-hover:-translate-y-0.5 group-hover:scale-[1.04]">
        <ContactRowIcon icon={row.icon} />
      </span>
      <span className="whitespace-nowrap text-[13px] font-bold text-[#0B8794]">{row.label}</span>
      <span className={`text-[14px] leading-[1.5] text-[#4F657A] transition-colors duration-[220ms] ${hoverValueClass}`}>
        {row.value}
      </span>
    </>
  );

  const sharedClass =
    "group grid animate-ru-row grid-cols-[44px_auto_1fr] items-center gap-3 border-t border-[#EDF2F4] py-[18px] no-underline motion-reduce:duration-[0.01ms] motion-reduce:[animation-duration:0.01ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(35,145,165,0.25)]" +
    (row.id === "address" ? " mt-1.5" : "");

  if (row.href) {
    return (
      <a
        href={row.href}
        target={row.external ? "_blank" : undefined}
        rel={row.external ? "noopener" : undefined}
        className={sharedClass}
        style={{ animationDelay: `${row.animationDelayMs}ms` }}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={sharedClass} style={{ animationDelay: `${row.animationDelayMs}ms` }}>
      {content}
    </div>
  );
}

function InfoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[20px] border border-[#E1EAED] bg-white transition-shadow duration-[220ms] ${className}`}
    >
      {children}
    </div>
  );
}

export function ReachUsDetails() {
  return (
    <div className="flex animate-ru-side flex-col gap-[18px] motion-reduce:[animation-duration:0.01ms] mw-850:order-2">
      <InfoCard className="px-[30px] py-7 shadow-[0_12px_30px_rgba(20,65,85,0.07)]">
        <div className="flex items-center gap-[14px]">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#EDF8F9] text-[#0B8794]">
            <UserIcon size={20} />
          </span>
          <div className="text-[22px] font-bold text-text-primary">Contact Details</div>
        </div>

        {CONTACT_ROWS.map((row) => (
          <ContactRowItem key={row.id} row={row} />
        ))}
      </InfoCard>

      <InfoCard className="grid grid-cols-[1fr_auto] items-center gap-[18px] px-7 py-6 shadow-[0_12px_28px_rgba(20,65,85,0.06)] mw-650:grid-cols-1">
        <div className="flex items-center gap-[14px]">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#EDF8F9] text-[#0B8794]">
            <StopwatchIcon size={20} />
          </span>
          <div>
            <div className="text-[16px] font-bold text-text-primary">Hours &amp; Availability</div>
            <div className="mt-1 text-[13.5px] text-text-secondary">
              Monday - Sunday: 12:00 PM - 8:00 PM
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-[7px] whitespace-nowrap rounded-full bg-success-bg px-[18px] py-3 text-[12px] font-bold text-success-text">
          <span className="h-[7px] w-[7px] rounded-full bg-success" />
          Open 7 Days a Week
        </div>
      </InfoCard>

      <div
        className="grid min-h-[122px] grid-cols-2 items-center overflow-hidden rounded-[20px] px-[26px] py-[22px] text-white shadow-[0_14px_32px_rgba(8,90,100,0.16)] mw-650:grid-cols-1 mw-650:gap-4"
        style={{ background: "linear-gradient(120deg, #0B5664 0%, #087B87 55%, #0C8F98 100%)" }}
      >
        {REACH_ACTIONS.map((action, index) => (
          <a
            key={action.id}
            href={action.href}
            target={action.external ? "_blank" : undefined}
            rel={action.external ? "noopener" : undefined}
            className={`group flex items-center gap-[14px] text-white no-underline ${
              index === 1
                ? "border-l border-[rgba(255,255,255,0.20)] pl-[26px] mw-650:border-l-0 mw-650:border-t mw-650:border-t-[rgba(255,255,255,0.20)] mw-650:pl-0 mw-650:pt-4"
                : ""
            }`}
          >
            <span className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-full border border-[rgba(255,255,255,0.45)] bg-white/[0.06] transition-colors duration-200 group-hover:bg-white/[0.16]">
              <span className="inline-flex transition-transform duration-200 group-hover:translate-x-0.5">
                <ActionIcon icon={action.icon} />
              </span>
            </span>
            <div>
              <div className="text-[16px] font-bold">{action.title}</div>
              <div className="mt-0.5 text-[13px] text-white/[0.82]">{action.subtitle}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
