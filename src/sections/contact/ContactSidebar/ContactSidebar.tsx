import { useTranslation } from "react-i18next";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "../../../components/icons";
import { SITE } from "../../../lib/constants";
import { CONTACT_ADDRESS } from "../contact.data";
import { ContactSidebarCta } from "./ContactSidebarCta";

const infoRowClass = "flex items-start gap-3 border-t border-contact-page-sidebar-row-border py-4 first:border-t-0 first:pt-1.5";
const iconCircleClass =
  "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-badge-text";
const rowLinkClass =
  "group block min-w-0 rounded-md no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring";
const rowValueClass =
  "block truncate text-[15px] font-bold text-text-primary transition-colors duration-150 group-hover:text-badge-text";
const rowValueWrapClass =
  "block text-[15px] font-bold leading-[1.3] text-text-primary transition-colors duration-150 group-hover:text-badge-text";
const rowSupportClass = "mt-0.5 block text-[13px] leading-[1.4] text-text-secondary";
const addressPrimaryClass = "block text-[15px] font-bold leading-[1.3] text-text-primary";
const addressLineClass = "block text-[13px] leading-[1.4] text-text-secondary";

export function ContactSidebar() {
  const { t } = useTranslation();

  return (
    <aside className="sticky top-[84px] flex flex-col gap-6 mw-880:static mw-880:top-auto">
      <div className="rounded-2xl border border-contact-page-sidebar-border bg-contact-page-sidebar-bg p-5">
        <h2 className="m-0 pb-3 text-xs font-bold uppercase tracking-[0.8px] text-badge-text">
          {t("contact.sidebar.infoHeading")}
        </h2>

        <div className={infoRowClass}>
          <span className={iconCircleClass} aria-hidden="true">
            <PhoneIcon size={18} />
          </span>
          <a href={SITE.phoneHref} className={rowLinkClass}>
            <span className="sr-only">{t("contact.sidebar.phoneLabel")}: </span>
            <span className={rowValueClass}>{SITE.phone}</span>
            <span className={rowSupportClass}>{t("contact.sidebar.phoneSupport")}</span>
          </a>
        </div>

        <div className={infoRowClass}>
          <span className={iconCircleClass} aria-hidden="true">
            <MailIcon size={18} />
          </span>
          <a href={SITE.mailtoHref} className={rowLinkClass}>
            <span className="sr-only">{t("contact.sidebar.emailLabel")}: </span>
            <span className={rowValueClass}>{SITE.email}</span>
            <span className={rowSupportClass}>{t("contact.sidebar.emailSupport")}</span>
          </a>
        </div>

        <div className={infoRowClass}>
          <span className={iconCircleClass} aria-hidden="true">
            <MapPinIcon size={18} />
          </span>
          <div className="min-w-0">
            <span className="sr-only">{t("contact.sidebar.addressLabel")}: </span>
            <span className={addressPrimaryClass}>{CONTACT_ADDRESS.line1}</span>
            <span className={`${addressLineClass} mt-0.5`}>{CONTACT_ADDRESS.line2}</span>
            <span className={addressLineClass}>{CONTACT_ADDRESS.line3}</span>
          </div>
        </div>

        <div className={infoRowClass}>
          <span className={iconCircleClass} aria-hidden="true">
            <ClockIcon size={18} />
          </span>
          {/* Plain in-page anchor — a router link to a hash re-routes instead of scrolling. */}
          <a href="#hours" className={rowLinkClass}>
            <span className="sr-only">{t("contact.sidebar.hoursLabel")}: </span>
            <span className={rowValueWrapClass}>{t("contact.sidebar.hoursValue")}</span>
            <span className={rowSupportClass}>{t("contact.sidebar.hoursSupport")}</span>
          </a>
        </div>
      </div>

      <ContactSidebarCta />
    </aside>
  );
}
