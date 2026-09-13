import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, CalendarIcon, HeartIcon, MedicalKitIcon, PhoneIcon, UsersIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";

const cardBase =
  "relative flex-[0_0_300px] snap-center overflow-hidden rounded-[14px] px-[22px] py-[26px] text-white";

/**
 * Mobile highlight carousel (handoff design 1a): the three Home info cards
 * become a native horizontal scroll-snap rail. Reuses the same copy the
 * desktop HeroInfoCards uses (`heroInfoCards.*`) and the SITE hours/phone
 * constants. No slider library — CSS scroll snap only.
 */
export function MobileHighlightCarousel() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <div className="om-scroll flex snap-x snap-mandatory gap-3.5 overflow-x-auto bg-white px-[22px] pb-[26px]">
      {/* Urgent Care */}
      <article
        className={cardBase}
        style={{ background: "linear-gradient(145deg, var(--hero-info-urgent-from), var(--hero-info-urgent-to))" }}
      >
        <HeartIcon size={72} strokeWidth={1.6} className="absolute right-4 top-[18px] opacity-[0.14]" />
        <MedicalKitIcon size={42} strokeWidth={1.6} className="text-white/95" />
        <h2 className="mt-4 font-heading text-[22px] font-bold leading-[1.2] text-white">
          {t("heroInfoCards.urgentCare.title")}
        </h2>
        <p className="mt-2.5 text-[14.5px] leading-[1.6] text-white/[0.82]">
          {t("heroInfoCards.urgentCare.description")}
        </p>
        <a
          href={SITE.phoneHref}
          className="mt-[18px] inline-flex min-h-[44px] items-center gap-3 text-[16px] font-bold text-white no-underline"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.18]">
            <PhoneIcon size={14} />
          </span>
          {SITE.phone}
        </a>
      </article>

      {/* Family Health */}
      <article
        className={cardBase}
        style={{ background: "linear-gradient(145deg, var(--brand-navy-light), var(--brand-navy))" }}
      >
        <HeartIcon size={72} strokeWidth={1.6} className="absolute right-4 top-[18px] opacity-[0.14]" />
        <UsersIcon size={42} strokeWidth={1.6} className="text-white/95" />
        <h2 className="mt-4 font-heading text-[22px] font-bold leading-[1.2] text-white">
          {t("heroInfoCards.familyHealth.title")}
        </h2>
        <p className="mt-2.5 text-[14.5px] leading-[1.6] text-white/[0.82]">
          {t("heroInfoCards.familyHealth.description")}
        </p>
        <Link
          to={withLocale(SITE.bookingHref, language)}
          className="mt-[18px] flex h-12 w-full items-center justify-center gap-2 rounded-md bg-white text-[15px] font-semibold text-text-primary no-underline"
        >
          {t("common.bookAppointment")}
          <ArrowRightIcon size={13} />
        </Link>
      </article>

      {/* Opening Hours */}
      <article
        className={cardBase}
        style={{ background: "linear-gradient(145deg, var(--hero-info-hours-from), var(--hero-info-hours-to))" }}
      >
        <CalendarIcon size={72} strokeWidth={1.6} className="absolute right-4 top-[18px] opacity-[0.14]" />
        <h2 className="mt-1 font-heading text-[22px] font-bold leading-[1.2] text-white">
          {t("heroInfoCards.openingHours.title")}
        </h2>
        <div className="mt-3.5 flex items-center justify-between gap-3 text-[14.5px] text-white/90">
          <span>{t("common.hoursDaysRange")}</span>
          <span>{SITE.hours.time}</span>
        </div>
        <div className="mt-3.5 border-t border-white/25 pt-3.5 text-[13.5px] font-semibold text-white/[0.92]">
          {t("common.openDays")}
        </div>
      </article>
    </div>
  );
}
