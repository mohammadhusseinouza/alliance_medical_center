import { useTranslation } from "react-i18next";
import {
  ArrowUpRightIcon,
  CarIcon,
  MapMarkerIcon,
  MapPinIcon,
  PhoneIcon,
  PrinterIcon,
  StopwatchIcon,
  UserIcon,
} from "../../../components/icons";
import { SITE } from "../../../lib/constants";

const infoCard = "rounded-[18px] border border-border-subtle bg-white p-5";
const rowGrid = "grid grid-cols-[42px_1fr] items-center gap-3 border-t border-border-subtle py-4";
const rowChip = "flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-brand-icon";

/**
 * Mobile Reach Us / Contact (handoff design 1a). Uses the production
 * address / phone / fax / hours constants and `reachUs.*` copy, the same
 * Google Maps embed as the desktop `ReachUsMap`, and keeps external links
 * safe with target/rel.
 */
export function MobileReachUs() {
  const { t } = useTranslation();

  return (
    <section
      className="px-[22px] pb-[46px] pt-10"
      style={{ background: "linear-gradient(180deg, var(--surface-pale-1) 0%, #FFFFFF 100%)" }}
    >
      <div className="text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-badge-text">
          <MapPinIcon size={14} strokeWidth={1.8} />
          {t("reachUs.eyebrow")}
        </div>
        <h2 className="mt-4 font-heading text-[34px] font-bold leading-[1.08] tracking-[-0.8px] text-text-primary">
          {t("reachUs.heading")}
        </h2>
        <p className="mt-3.5 text-[15.5px] leading-[1.6] text-text-primary [text-wrap:pretty]">
          {t("reachUs.description")}
        </p>
      </div>

      <div className="relative mt-6 h-[260px] overflow-hidden rounded-[18px] border border-border-subtle bg-badge-bg shadow-elevated">
        <iframe
          title={t("reachUs.mapTitle", { business: SITE.name, address: SITE.address.full })}
          src="https://www.google.com/maps?q=1220+N+Perry+St.,+Pontiac,+MI+48340&output=embed"
          width="100%"
          height="100%"
          className="absolute inset-0 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="mt-3 flex items-center gap-3.5 rounded-[16px] border border-border-subtle bg-white p-4 shadow-card">
        <div className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-brand-icon">
          <MapMarkerIcon size={24} />
        </div>
        <div>
          <div className="text-[16px] font-bold text-text-primary">{SITE.name}</div>
          <div className="mt-0.5 text-[13px] leading-[1.5] text-text-primary">{SITE.address.full}</div>
        </div>
      </div>

      <a
        href={SITE.address.directionsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex min-h-[64px] items-center gap-3.5 rounded-[16px] border border-border-subtle bg-white p-4 no-underline shadow-card"
      >
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-brand-icon">
          <CarIcon size={20} />
        </div>
        <div>
          <div className="text-[15px] font-bold text-text-primary">{t("reachUs.parkingTitle")}</div>
          <div className="mt-0.5 text-[13px] text-text-primary">{t("reachUs.parkingSubtitle")}</div>
        </div>
      </a>

      <div className={`mt-3 ${infoCard} shadow-card`}>
        <div className="flex items-center gap-3.5">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-brand-icon">
            <UserIcon size={20} />
          </span>
          <div className="text-[20px] font-bold text-text-primary">{t("reachUs.contactDetailsTitle")}</div>
        </div>

        <a
          href={SITE.address.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${rowGrid} mt-1.5 no-underline`}
        >
          <span className={rowChip}>
            <MapPinIcon size={18} strokeWidth={1.8} />
          </span>
          <span>
            <span className="block text-[12.5px] font-bold text-brand-icon">{t("reachUs.labels.address")}</span>
            <span className="mt-0.5 block text-[14px] leading-[1.5] text-text-primary">{SITE.address.full}</span>
          </span>
        </a>

        <a href={SITE.phoneHref} className={`${rowGrid} no-underline`}>
          <span className={rowChip}>
            <PhoneIcon size={18} />
          </span>
          <span>
            <span className="block text-[12.5px] font-bold text-brand-icon">{t("reachUs.labels.phone")}</span>
            <span className="mt-0.5 block text-[14px] leading-[1.5] text-text-primary">{SITE.phone}</span>
          </span>
        </a>

        <div className={`${rowGrid} pb-1`}>
          <span className={rowChip}>
            <PrinterIcon size={18} />
          </span>
          <span>
            <span className="block text-[12.5px] font-bold text-brand-icon">{t("reachUs.labels.fax")}</span>
            <span className="mt-0.5 block text-[14px] leading-[1.5] text-text-primary">{SITE.fax}</span>
          </span>
        </div>
      </div>

      <div className={`mt-3 flex flex-col gap-3.5 ${infoCard} shadow-card`}>
        <div className="flex items-center gap-3.5">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-brand-icon">
            <StopwatchIcon size={20} />
          </span>
          <div>
            <div className="text-[16px] font-bold text-text-primary">{t("reachUs.hoursTitle")}</div>
            <div className="mt-0.5 text-[13.5px] text-text-primary">
              {t("reachUs.hoursValue", { days: t("common.hoursDaysRange"), time: SITE.hours.time })}
            </div>
          </div>
        </div>
        <div className="inline-flex w-fit items-center gap-[7px] rounded-full bg-success-bg px-[18px] py-3 text-[12px] font-bold text-success-text">
          <span className="h-[7px] w-[7px] rounded-full bg-success" />
          {t("reachUs.openDaysBadge")}
        </div>
      </div>

      <div
        className="mt-3 flex flex-col gap-4 overflow-hidden rounded-[18px] p-[22px] text-white shadow-reach-cta"
        style={{
          background:
            "linear-gradient(140deg, var(--brand-teal-700) 0%, var(--brand-teal-600) 55%, var(--brand-teal-500) 100%)",
        }}
      >
        <a
          href={SITE.address.directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[58px] items-center gap-3.5 text-white no-underline"
        >
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/[0.06]">
            <ArrowUpRightIcon size={20} />
          </span>
          <span>
            <span className="block text-[16px] font-bold">{t("reachUs.actions.getDirections.title")}</span>
            <span className="mt-0.5 block text-[13px] text-white/[0.82]">
              {t("reachUs.actions.getDirections.subtitle")}
            </span>
          </span>
        </a>
        <a
          href={SITE.phoneHref}
          className="flex min-h-[58px] items-center gap-3.5 border-t border-white/20 pt-4 text-white no-underline"
        >
          <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/[0.06]">
            <PhoneIcon size={19} />
          </span>
          <span>
            <span className="block text-[16px] font-bold">{t("reachUs.actions.callNow.title")}</span>
            <span className="mt-0.5 block text-[13px] text-white/[0.82]">{SITE.phone}</span>
          </span>
        </a>
      </div>
    </section>
  );
}
