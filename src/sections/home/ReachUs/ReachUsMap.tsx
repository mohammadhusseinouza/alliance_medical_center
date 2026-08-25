import { useTranslation } from "react-i18next";
import { CarIcon, MapMarkerIcon } from "../../../components/icons";
import { SITE } from "../../../lib/constants";

export function ReachUsMap() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[560px] animate-ru-map overflow-hidden rounded-[22px] border border-[#DCE7EA] bg-[#EAF3F5] shadow-elevated motion-reduce:[animation-duration:0.01ms] mw-1100:min-h-[500px] mw-850:order-1 mw-850:min-h-[460px] mw-650:min-h-[380px] mw-650:rounded-[18px]">
      <iframe
        title={t("reachUs.mapTitle", { business: "Access Now Urgent Care", address: SITE.address.full })}
        src="https://www.google.com/maps?q=8145+Valleywood+Lane,+Portage,+MI+49024&output=embed"
        width="100%"
        height="100%"
        className="absolute inset-0 min-h-[560px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute left-[48px] top-[54px] z-[5] flex w-[360px] animate-ru-clinic-card items-center gap-[18px] rounded-[18px] border border-[rgba(220,230,233,0.9)] bg-white/95 p-[22px] shadow-[0_12px_28px_rgba(20,60,80,0.12)] backdrop-blur-[10px] motion-reduce:[animation-duration:0.01ms] mw-650:left-4 mw-650:top-4 mw-650:w-[calc(100%-32px)] mw-650:p-4">
        <div className="flex h-[58px] w-[58px] flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-[#0B8490]">
          <MapMarkerIcon size={26} />
        </div>
        <div>
          <div className="text-[16px] font-bold text-text-primary">Access Now Urgent Care</div>
          <div className="mt-1 text-[13px] leading-[1.5] text-text-secondary">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </div>
        </div>
      </div>

      <a
        href={SITE.address.directionsHref}
        target="_blank"
        rel="noopener"
        className="absolute bottom-8 left-[34px] z-[5] flex animate-ru-parking-note items-center gap-3 rounded-[15px] bg-white/[0.94] px-[18px] py-[15px] no-underline shadow-[0_10px_24px_rgba(20,60,80,0.10)] backdrop-blur-[8px] motion-reduce:[animation-duration:0.01ms] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(35,145,165,0.25)] mw-650:bottom-4 mw-650:left-4"
      >
        <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-[#0B8490]">
          <CarIcon size={18} />
        </div>
        <div>
          <div className="text-[14px] font-bold text-text-primary">{t("reachUs.parkingTitle")}</div>
          <div className="mt-0.5 text-[12.5px] text-text-secondary">{t("reachUs.parkingSubtitle")}</div>
        </div>
      </a>
    </div>
  );
}
