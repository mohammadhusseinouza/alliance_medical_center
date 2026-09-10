import { useId, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ChevronDownIcon,
  ClockDialIcon,
  FacebookIcon,
  InstagramIcon,
  Logo,
  TwitterIcon,
} from "../../icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { buildFooterLegalLinks, buildFooterServiceLinks, FOOTER_CONTACT_ROWS } from "./footer.data";
import { FooterContactRowItem } from "./FooterContactRow";

const headerRow =
  "flex w-full min-h-[56px] items-center justify-between border-t border-white/[0.12] bg-transparent py-[18px] px-0.5 text-left text-[16px] font-bold text-white";

/**
 * Accordion footer for phones (handoff design 1a): Contact Info always
 * open, Services and About Alliance collapsed by default. Shares the
 * Logo, the `footer.data` link builders and the SITE constants with the
 * desktop footer — no duplicated footer content.
 */
export function MobileFooter() {
  const { t } = useTranslation();
  const language = useLanguage();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const servicesId = useId();
  const aboutId = useId();

  const serviceLinks = buildFooterServiceLinks(t, language);
  const legalLinks = buildFooterLegalLinks(t);

  return (
    <footer className="bg-brand-navy px-[22px] pb-[26px] pt-[30px] text-white">
      <Logo size={45} />
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.4px] text-accent-lime">
        {t("common.tagline")}
      </div>
      <p className="mt-3.5 text-[14px] leading-[1.65] text-white/[0.72]">{t("footer.tagline")}</p>

      <div className="mt-[22px]">
        {/* Contact Info — always open */}
        <div className="flex items-center justify-between border-t border-white/[0.12] px-0.5 py-[18px] text-[16px] font-bold">
          {t("footer.contactInfoHeading")}
        </div>
        <div className="flex flex-col gap-3 px-0.5 pb-[18px]">
          {FOOTER_CONTACT_ROWS.map((row) => (
            <FooterContactRowItem key={row.id} row={row} />
          ))}
          <div className="flex items-center gap-2.5 text-[13.5px] text-white/70">
            <ClockDialIcon size={16} strokeWidth={2} className="flex-shrink-0" />
            {t("common.hoursSummary", { time: SITE.hours.time })}
          </div>
        </div>

        {/* Services — collapsed */}
        <button
          type="button"
          onClick={() => setServicesOpen((open) => !open)}
          aria-expanded={servicesOpen}
          aria-controls={servicesId}
          className={headerRow}
        >
          {t("footer.servicesHeading")}
          <ChevronDownIcon
            size={16}
            strokeWidth={2.2}
            className={`flex-shrink-0 text-[#90CAF9] transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
          />
        </button>
        {servicesOpen && (
          <div id={servicesId} className="grid grid-cols-2 gap-x-3.5 px-0.5 pb-3.5 text-[14.5px]">
            {serviceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-[44px] items-center text-white/[0.82] no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* About Alliance — collapsed */}
        <button
          type="button"
          onClick={() => setAboutOpen((open) => !open)}
          aria-expanded={aboutOpen}
          aria-controls={aboutId}
          className={headerRow}
        >
          {t("footer.aboutHeading")}
          <ChevronDownIcon
            size={16}
            strokeWidth={2.2}
            className={`flex-shrink-0 text-[#90CAF9] transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
          />
        </button>
        {aboutOpen && (
          <div id={aboutId} className="px-0.5 pb-4">
            <p className="text-[14.5px] leading-[1.65] text-white/[0.72]">{t("footer.aboutDescription")}</p>
            <Link
              to={withLocale(SITE.bookingHref, language)}
              className="mt-3.5 flex h-[52px] items-center justify-center gap-2 rounded-[9px] border border-white/[0.20] bg-white/[0.10] text-[14px] font-semibold text-white no-underline"
            >
              {t("footer.ctaText")}
            </Link>
          </div>
        )}

        <div className="border-t border-white/[0.12] pt-5">
          <div className="flex gap-3">
            <a
              href="#"
              aria-label={t("footer.socialAria.facebook")}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.08] text-white/75 no-underline"
            >
              <FacebookIcon size={18} />
            </a>
            <a
              href="#"
              aria-label={t("footer.socialAria.twitter")}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.08] text-white/75 no-underline"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="#"
              aria-label={t("footer.socialAria.instagram")}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-white/[0.10] bg-white/[0.08] text-white/75 no-underline"
            >
              <InstagramIcon size={18} />
            </a>
          </div>
          <div className="mt-[18px] flex flex-wrap gap-x-5 gap-y-1.5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex min-h-[44px] items-center text-[13px] text-white/60 no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-1.5 text-[12.5px] text-white/[0.55]">
            © {new Date().getFullYear()} Alliance Medical Clinic
          </div>
        </div>
      </div>
    </footer>
  );
}
