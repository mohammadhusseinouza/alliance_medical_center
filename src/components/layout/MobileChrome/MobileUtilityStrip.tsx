import { useTranslation } from "react-i18next";
import { ClockIcon, MapPinIcon } from "../../icons";
import { SITE } from "../../../lib/constants";

/**
 * Navy utility strip shown above the sticky mobile header (below the `md`
 * breakpoint only — the parent controls visibility). Mirrors the desktop
 * TopBar's hours/address content in the compact phone treatment from the
 * mobile Home handoff.
 */
export function MobileUtilityStrip() {
  const { t } = useTranslation();

  return (
    <div className="flex h-[34px] items-center justify-between gap-2.5 bg-brand-navy px-4 text-white">
      <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold leading-none tracking-[0.3px]">
        <ClockIcon size={13} strokeWidth={2} />
        {t("common.openDaysShort")}
      </span>
      <a
        href={SITE.address.mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[11.5px] font-bold leading-none text-[#90CAF9]"
      >
        <MapPinIcon size={12} strokeWidth={2} />
        {t("common.cityShort")}
      </a>
    </div>
  );
}
