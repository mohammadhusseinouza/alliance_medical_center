import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRightIcon, MapPinIcon, PhoneIcon, PrinterIcon, StopwatchIcon, UserIcon } from "../../../components/icons";
import { SITE } from "../../../lib/constants";
import { CONTACT_ROWS, REACH_ACTIONS } from "./reachUs.data";
import type { ContactIconName, ContactRow, ReachActionIcon, ReachAction } from "./ReachUs.types";

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
  const { t } = useTranslation();
  const hoverValueClass = row.href
    ? row.hoverUnderline
      ? "group-hover:text-footer-hover-text group-hover:underline"
      : "group-hover:text-footer-hover-text"
    : "group-hover:text-reach-us-hover-alt";

  const content = (
    <>
      <span className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-teal-icon-bg text-teal-icon transition-transform duration-[220ms] group-hover:-translate-y-0.5 group-hover:scale-[1.04]">
        <ContactRowIcon icon={row.icon} />
      </span>
      <span className="whitespace-nowrap text-[13px] font-bold text-teal-icon">
        {t(`reachUs.labels.${row.translationKey}`)}
      </span>
      <span className={`text-[14px] leading-[1.5] text-reach-us-value-text transition-colors duration-[220ms] ${hoverValueClass}`}>
        {row.value}
      </span>
    </>
  );

  const sharedClass =
    "group grid animate-ru-row grid-cols-[44px_auto_1fr] items-center gap-3 border-t border-reach-us-row-border py-[18px] no-underline motion-reduce:duration-[0.01ms] motion-reduce:[animation-duration:0.01ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-focus-ring-teal" +
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

function ActionItem({ action, index }: { action: ReachAction; index: number }) {
  const { t } = useTranslation();
  const subtitle = action.subtitleValue ?? t(`reachUs.actions.${action.translationKey}.subtitle`);

  return (
    <a
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
        <div className="text-[16px] font-bold">{t(`reachUs.actions.${action.translationKey}.title`)}</div>
        <div className="mt-0.5 text-[13px] text-white/[0.82]">{subtitle}</div>
      </div>
    </a>
  );
}

function InfoCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[20px] border border-reach-us-info-card-border bg-white transition-shadow duration-[220ms] ${className}`}
    >
      {children}
    </div>
  );
}

export function ReachUsDetails() {
  const { t } = useTranslation();

  return (
    <div className="flex animate-ru-side flex-col gap-[18px] motion-reduce:[animation-duration:0.01ms] mw-850:order-2">
      <InfoCard className="px-[30px] py-7 shadow-reach-info-card-1">
        <div className="flex items-center gap-[14px]">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-teal-icon-bg text-teal-icon">
            <UserIcon size={20} />
          </span>
          <div className="text-[22px] font-bold text-text-primary">{t("reachUs.contactDetailsTitle")}</div>
        </div>

        {CONTACT_ROWS.map((row) => (
          <ContactRowItem key={row.id} row={row} />
        ))}
      </InfoCard>

      <InfoCard className="grid grid-cols-[1fr_auto] items-center gap-[18px] px-7 py-6 shadow-reach-info-card-2 mw-650:grid-cols-1">
        <div className="flex items-center gap-[14px]">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-teal-icon-bg text-teal-icon">
            <StopwatchIcon size={20} />
          </span>
          <div>
            <div className="text-[16px] font-bold text-text-primary">{t("reachUs.hoursTitle")}</div>
            <div className="mt-1 text-[13.5px] text-text-secondary">
              {t("reachUs.hoursValue", { days: t("common.hoursDaysRange"), time: SITE.hours.time })}
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-[7px] whitespace-nowrap rounded-full bg-success-bg px-[18px] py-3 text-[12px] font-bold text-success-text">
          <span className="h-[7px] w-[7px] rounded-full bg-success" />
          {t("reachUs.openDaysBadge")}
        </div>
      </InfoCard>

      <div
        className="grid min-h-[122px] grid-cols-2 items-center overflow-hidden rounded-[20px] px-[26px] py-[22px] text-white shadow-reach-cta mw-650:grid-cols-1 mw-650:gap-4"
        style={{ background: "linear-gradient(120deg, var(--brand-teal-700) 0%, var(--brand-teal-600) 55%, var(--brand-teal-500) 100%)" }}
      >
        {REACH_ACTIONS.map((action, index) => (
          <ActionItem key={action.id} action={action} index={index} />
        ))}
      </div>
    </div>
  );
}
