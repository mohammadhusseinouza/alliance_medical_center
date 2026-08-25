import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ClockDialIcon, FacebookIcon, InstagramIcon, Logo, TwitterIcon } from "../../icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { buildFooterLegalLinks, buildFooterServiceLinks, FOOTER_CONTACT_ROWS } from "./footer.data";
import { FooterContactRowItem } from "./FooterContactRow";
import { Newsletter } from "./Newsletter";
import type { FooterProps } from "./Footer.types";

export function Footer({ showNewsletter = true }: FooterProps) {
  const { t } = useTranslation();
  const language = useLanguage();
  const footerServiceLinks = buildFooterServiceLinks(t, language);
  const footerLegalLinks = buildFooterLegalLinks(t);

  return (
    <footer
      className="relative overflow-visible text-white"
      style={{ background: "linear-gradient(135deg, #103F48 0%, #124954 60%, #103F48 100%)" }}
    >
      {showNewsletter && <Newsletter />}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute right-[-100px] top-[-250px] h-[500px] w-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(72,180,197,0.08), transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-200px] left-[-100px] h-[400px] w-[400px] rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(72,180,197,0.05), transparent 70%)" }}
        />
      </div>

      <div
        className={
          "relative mx-auto max-w-[1320px] px-6 pb-[45px] mw-650:px-5 mw-650:pb-[30px] " +
          (showNewsletter ? "pt-[95px] mw-1000:pt-[330px] mw-650:pt-[360px]" : "pt-[45px]")
        }
      >
        <div className="grid grid-cols-[1.05fr_1fr_1.15fr_1.15fr] gap-[55px] mw-1000:grid-cols-2 mw-1000:gap-x-[35px] mw-1000:gap-y-[45px] mw-650:grid-cols-1 mw-650:gap-[38px]">
          <div className="animate-ft-col1 motion-reduce:[animation-duration:0.01ms]">
            <div className="flex items-center gap-2.5">
              <Logo secondaryColor="#5FB6C4" />
              <div className="flex flex-col leading-[1.15]">
                <span className="whitespace-nowrap text-[22px] font-bold text-white">{SITE.name}</span>
                <span className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.4px] text-[#A9D85C]">
                  {t("common.tagline")}
                </span>
              </div>
            </div>
            <p className="mt-5 max-w-[260px] text-[14px] leading-[1.65] text-white/[0.68]">
              {t("footer.tagline")}
            </p>
          </div>

          <div className="animate-ft-col2 motion-reduce:[animation-duration:0.01ms]">
            <div className="text-[21px] font-bold text-white">Access Now</div>
            <p className="mt-[18px] text-[15px] leading-[1.7] text-white/[0.76]">
              {t("footer.aboutDescription")}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label={t("footer.socialAria.facebook")}
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.07] text-white/[0.65] no-underline transition-[transform,background-color,color,border-color] duration-[220ms] ease hover:-translate-y-[3px] hover:scale-[1.03] hover:border-white hover:bg-white hover:text-[#176D7C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="#"
                aria-label={t("footer.socialAria.twitter")}
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.07] text-white/[0.65] no-underline transition-[transform,background-color,color,border-color] duration-[220ms] ease hover:-translate-y-[3px] hover:scale-[1.03] hover:border-white hover:bg-white hover:text-[#176D7C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="#"
                aria-label={t("footer.socialAria.instagram")}
                className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.07] text-white/[0.65] no-underline transition-[transform,background-color,color,border-color] duration-[220ms] ease hover:-translate-y-[3px] hover:scale-[1.03] hover:border-white hover:bg-white hover:text-[#176D7C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
              >
                <InstagramIcon size={18} />
              </a>
            </div>
            <Link
              to={withLocale(SITE.bookingHref, language)}
              className="mt-[22px] inline-flex items-center gap-2 rounded-[9px] border border-white/[0.13] bg-white/[0.08] px-[18px] py-[11px] text-[13px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-white hover:text-[#176D7C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
            >
              {t("footer.ctaText")}
            </Link>
          </div>

          <div className="animate-ft-col3 motion-reduce:[animation-duration:0.01ms]">
            <div className="text-[21px] font-bold text-white">{t("footer.contactInfoHeading")}</div>
            <div className="mt-5 flex flex-col gap-[17px]">
              {FOOTER_CONTACT_ROWS.map((row) => (
                <FooterContactRowItem key={row.id} row={row} />
              ))}
            </div>
            <div className="mt-[22px] flex items-center gap-2.5 border-t border-white/[0.08] pt-[18px]">
              <ClockDialIcon size={16} strokeWidth={2} className="text-white/70" />
              <span className="text-[13.5px] text-white/70">
                {t("common.hoursSummary", { time: SITE.hours.time })}
              </span>
            </div>
          </div>

          <div className="animate-ft-col4 motion-reduce:[animation-duration:0.01ms]">
            <div className="text-[21px] font-bold text-white">{t("footer.servicesHeading")}</div>
            <div className="mt-5 grid grid-cols-2 gap-x-7 gap-y-[13px] text-[14.5px]">
              {footerServiceLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative inline-flex w-fit items-center text-white/[0.78] no-underline transition-[color,transform] duration-200 before:h-[5px] before:w-0 before:flex-shrink-0 before:rounded-full before:bg-[#A9D85C] before:transition-[width,margin-right] before:duration-200 before:content-[''] hover:translate-x-1 hover:text-white hover:before:mr-[7px] hover:before:w-[5px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.09]" />

        <div className="flex items-center justify-between gap-5 pt-7 mw-650:flex-col mw-650:items-start mw-650:gap-4">
          <div className="text-[13.5px] text-white/[0.55]">
            © {new Date().getFullYear()} Access Now URGENT CARE
          </div>
          <div className="flex gap-[30px]">
            {footerLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13.5px] text-white/[0.42] no-underline transition-colors duration-200 hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
