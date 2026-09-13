import { useTranslation } from "react-i18next";
import { ClockIcon, MapPinIcon, PhoneIcon } from "../../icons";
import { SITE } from "../../../lib/constants";

export interface MobileUtilityStripProps {
  /**
   * Right-hand slot. `"location"` (default) links to Google Maps — used on
   * the mobile Home page. `"phone"` is a tap-to-call link — used on the
   * mobile service-detail pages.
   */
  right?: "location" | "phone";
}

/**
 * Navy utility strip shown above the sticky mobile header (below the `md`
 * breakpoint only — the parent controls visibility). Mirrors the desktop
 * TopBar's hours content in the compact phone treatment; the right slot is
 * configurable per page (see `right`).
 */
export function MobileUtilityStrip({ right = "location" }: MobileUtilityStripProps) {
  const { t } = useTranslation();

  return (
    <div className="flex h-[34px] items-center justify-between gap-2.5 bg-brand-navy px-4 text-white md:hidden">
      <span className="inline-flex items-center gap-1.5 text-[11.5px] font-bold leading-none tracking-[0.3px]">
        <ClockIcon size={13} strokeWidth={2} />
        {t("common.openDaysShort")}
      </span>
      {right === "phone" ? (
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center gap-1.5 text-[11.5px] font-bold leading-none text-[#90CAF9]"
        >
          <PhoneIcon size={12} strokeWidth={2} />
          {SITE.phone}
        </a>
      ) : (
        <a
          href={SITE.address.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11.5px] font-bold leading-none text-[#90CAF9]"
        >
          <MapPinIcon size={12} strokeWidth={2} />
          {t("common.cityShort")}
        </a>
      )}
    </div>
  );
}
