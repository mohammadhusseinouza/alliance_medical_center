import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroImage from "../../../assets/contact/AccessNow Care team member ready to assist a patient.png";
import ctaImage from "../../../assets/contact/helpyou.png";
import { ArrowRightIcon, ChevronIcon, ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { CONTACT_ADDRESS, CONTACT_HOURS } from "../contact.data";
import { MobileContactForm } from "../ContactForm";

/** Unique mobile anchor — the desktop `ContactHours` section already owns `id="hours"`. */
export const MOBILE_HOURS_ANCHOR = "mobile-contact-hours";

const HERO_SCRIM =
  "linear-gradient(180deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.65) 62%, rgba(255,255,255,0.95) 100%)";
const IMMEDIATE_CARE_GRADIENT =
  "linear-gradient(120deg, var(--brand-teal-700) 0%, var(--brand-teal-600) 55%, var(--brand-teal-500) 100%)";
const PHOTO_CTA_SCRIM =
  "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.58) 50%, rgba(0,0,0,0.30) 100%)";

const cardClass = "rounded-2xl border border-border-subtle bg-white p-4 pt-5 shadow-card";

function ContactRow({
  href,
  external,
  icon,
  value,
  support,
  truncate,
}: {
  href: string;
  external?: boolean;
  icon: ReactNode;
  value: string;
  support: string;
  truncate?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="grid min-h-[64px] grid-cols-[40px_1fr_16px] items-center gap-3 border-t border-border-subtle py-2 no-underline first:border-t-0"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-badge-bg text-badge-text" aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0">
        <span className={`block text-[15px] font-bold text-text-primary ${truncate ? "truncate" : ""}`}>{value}</span>
        <span className="mt-0.5 block text-[13px] leading-[1.4] text-text-secondary">{support}</span>
      </span>
      <ChevronIcon direction="right" size={16} strokeWidth={2.2} className="text-brand-icon" aria-hidden="true" />
    </a>
  );
}

/**
 * Dedicated mobile Contact Us composition (handoff 4a). Contact details
 * come before the form. Rendered only below the `md` breakpoint; the
 * approved desktop Contact page renders unchanged at `md` and up. All copy,
 * data, images, routes and the form's behaviour are the existing
 * production ones.
 */
export function MobileContact() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <>
      {/* 3. Hero — one continuous image; the heading/description sit over
          its lower portion (bottom fade for readability) rather than in a
          separate white block below the photo. */}
      <section className="relative flex min-h-[300px] w-full flex-col justify-end overflow-hidden">
        <img
          src={heroImage}
          alt={t("contact.hero.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover object-[58%_24%]"
          loading="eager"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: HERO_SCRIM }} />
        <div className="relative z-[1] px-4 pb-5">
          <h1 className="m-0 font-heading text-[34px] font-bold leading-[1.08] tracking-[-1.2px] text-brand-navy [text-wrap:pretty]">
            {t("contact.hero.heading")}
          </h1>
          <p className="mt-3 text-[15.5px] leading-[1.65] text-text-secondary [text-wrap:pretty]">
            {t("contact.hero.description")}
          </p>
        </div>
      </section>

      {/* 4. Contact Information card */}
      <section className="bg-white px-4 pb-[30px]">
        <div className="rounded-2xl border border-border-subtle bg-surface-pale-1 p-4">
          <h2 className="m-0 pb-1 text-[12px] font-bold uppercase tracking-[0.8px] text-badge-text">
            {t("contact.sidebar.infoHeading")}
          </h2>
          <ContactRow
            href={SITE.phoneHref}
            icon={<PhoneIcon size={18} />}
            value={SITE.phone}
            support={t("contact.sidebar.phoneSupport")}
          />
          <ContactRow
            href={SITE.mailtoHref}
            icon={<MailIcon size={18} />}
            value={SITE.email}
            support={t("contact.sidebar.emailSupport")}
            truncate
          />
          <ContactRow
            href={CONTACT_ADDRESS.mapsHref}
            external
            icon={<MapPinIcon size={18} />}
            value={CONTACT_ADDRESS.line1}
            support={CONTACT_ADDRESS.line2}
          />
          <ContactRow
            href={`#${MOBILE_HOURS_ANCHOR}`}
            icon={<ClockIcon size={18} />}
            value={t("contact.sidebar.hoursValue")}
            support={t("contact.sidebar.hoursSupport")}
          />
        </div>
      </section>

      {/* 5. Send Us a Message */}
      <section className="bg-surface-pale-1 px-4 py-[30px]">
        <MobileContactForm />
      </section>

      {/* 6 + 7. Hours of Operation + Need immediate care */}
      <section
        id={MOBILE_HOURS_ANCHOR}
        className="flex scroll-mt-[76px] flex-col gap-3.5 bg-surface-pale-1 px-4 pb-[30px]"
      >
        <div className={cardClass}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-badge-text">
              <ClockIcon size={20} />
            </span>
            <h2 className="m-0 font-heading text-[20px] font-bold text-text-primary">{t("contact.hours.heading")}</h2>
          </div>
          <dl className="mt-4 flex flex-col gap-3">
            {[
              { dt: t("contact.hours.weekdayDays"), dd: CONTACT_HOURS.weekdayTime },
              { dt: t("contact.hours.weekendDays"), dd: CONTACT_HOURS.weekendTime },
              { dt: t("contact.hours.daysOpenLabel"), dd: t("contact.hours.daysOpenValue") },
              { dt: t("contact.hours.holidaysLabel"), dd: t("contact.hours.holidaysValue") },
            ].map((row) => (
              <div key={row.dt} className="flex items-start justify-between gap-4 border-t border-border-subtle pt-3">
                <dt className="text-[14.5px] font-bold text-text-primary">{row.dt}</dt>
                <dd className="m-0 text-right text-[14.5px] text-text-secondary">{row.dd}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 rounded-lg bg-badge-bg px-3.5 py-3 text-[13.5px] leading-[1.55] text-badge-text">
            {t("contact.hours.updateNote")}
          </p>
        </div>

        <div className="rounded-2xl p-4 pt-5 text-white shadow-elevated" style={{ background: IMMEDIATE_CARE_GRADIENT }}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.45] bg-white/[0.06]">
              <PhoneIcon size={19} />
            </span>
            <h3 className="m-0 font-heading text-[18px] font-bold">{t("contact.hours.emergencyLabel")}</h3>
          </div>
          <a
            href={CONTACT_HOURS.emergencyPhoneHref}
            className="mt-4 flex min-h-[52px] w-full items-center justify-center rounded-lg bg-white px-3 py-2 text-center text-[14.5px] font-bold leading-tight text-brand-navy no-underline"
          >
            {t("contact.hours.emergencyAction")}: {CONTACT_HOURS.emergencyPhone}
          </a>
        </div>
      </section>

      {/* 8. Photo CTA */}
      <section className="relative flex h-[320px] w-full items-center overflow-hidden">
        <img
          src={ctaImage}
          alt={t("contact.sidebar.cta.imageAlt")}
          className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
          loading="lazy"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: PHOTO_CTA_SCRIM }} />
        <div className="relative z-[1] w-full px-5 text-center text-white">
          <h3 className="m-0 font-heading text-[22px] font-bold leading-[1.2] [text-wrap:pretty]">
            {t("contact.sidebar.cta.heading")}
          </h3>
          <p className="mx-auto mt-2 max-w-[300px] text-[14px] leading-[1.55] text-white/90 [text-wrap:pretty]">
            {t("contact.sidebar.cta.description")}
          </p>
          <Link
            to={withLocale(SITE.bookingHref, language)}
            className="mt-4 flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-white text-[15px] font-bold text-brand-navy no-underline"
          >
            {t("common.bookAppointment")}
            <ArrowRightIcon size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
