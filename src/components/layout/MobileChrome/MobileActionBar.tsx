import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, PhoneIcon } from "../../icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

export interface MobileActionBarProps {
  /** Right-button label (default: "Book Appointment"). e.g. "Request Consultation" on Occupational Health. */
  secondaryLabel?: string;
  /** Right-button internal route (default: `SITE.bookingHref`); locale is applied automatically. */
  secondaryHref?: string;
}

/**
 * Persistent Call / <secondary> bar pinned to the bottom of the viewport
 * on phones. Hidden at `md` and up. Respects the device safe-area inset;
 * the mobile page reserves matching bottom padding so the bar never covers
 * the end of the content.
 */
export function MobileActionBar({ secondaryLabel, secondaryHref = SITE.bookingHref }: MobileActionBarProps = {}) {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[96px_1fr] gap-2.5 border-t border-border-subtle bg-white/[0.97] px-4 pt-[11px] shadow-[0_-6px_20px_rgba(13,71,161,0.10)] backdrop-blur-[8px] md:hidden"
      style={{ paddingBottom: "calc(11px + env(safe-area-inset-bottom))" }}
    >
      <a
        href={SITE.phoneHref}
        className="flex h-[50px] items-center justify-center gap-[7px] rounded-lg border-[1.5px] border-brand-icon text-[14.5px] font-bold text-brand-icon no-underline"
      >
        <PhoneIcon size={17} />
        {t("common.call")}
      </a>
      <Link
        to={withLocale(secondaryHref, language)}
        className="flex h-[50px] items-center justify-center gap-2 rounded-lg bg-cta text-[15.5px] font-semibold text-white no-underline shadow-[0_4px_8px_rgba(0,0,0,0.16)]"
      >
        {secondaryLabel ?? t("common.bookAppointment")}
        <ArrowRightIcon size={15} />
      </Link>
    </div>
  );
}
