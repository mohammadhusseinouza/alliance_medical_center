import { useTranslation } from "react-i18next";
import { ClockDialIcon, PhoneIcon } from "../../../components/icons";
import { CONTACT_HOURS } from "../contact.data";

const hourRowClass = "flex items-center justify-between border-t border-reach-us-row-border pt-3";

export function ContactHours() {
  const { t } = useTranslation();

  return (
    <section id="hours" className="flex flex-col gap-5">
      <div className="rounded-2xl border border-reach-us-info-card-border bg-white p-7 shadow-card">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-badge-text">
            <ClockDialIcon size={20} />
          </span>
          <h2 className="m-0 font-heading text-[20px] font-bold text-text-primary">{t("contact.hours.heading")}</h2>
        </div>

        <dl className="mt-5 flex flex-col gap-3">
          <div className={hourRowClass}>
            <dt className="text-[14.5px] font-semibold text-text-primary">{t("contact.hours.weekdayDays")}</dt>
            <dd className="m-0 text-[14.5px] text-text-secondary">{CONTACT_HOURS.weekdayTime}</dd>
          </div>
          <div className={hourRowClass}>
            <dt className="text-[14.5px] font-semibold text-text-primary">{t("contact.hours.weekendDays")}</dt>
            <dd className="m-0 text-[14.5px] text-text-secondary">{CONTACT_HOURS.weekendTime}</dd>
          </div>
          <div className={hourRowClass}>
            <dt className="text-[14.5px] font-semibold text-text-primary">{t("contact.hours.daysOpenLabel")}</dt>
            <dd className="m-0 text-[14.5px] text-text-secondary">{t("contact.hours.daysOpenValue")}</dd>
          </div>
          <div className={hourRowClass}>
            <dt className="text-[14.5px] font-semibold text-text-primary">{t("contact.hours.holidaysLabel")}</dt>
            <dd className="m-0 text-[14.5px] text-text-secondary">{t("contact.hours.holidaysValue")}</dd>
          </div>
        </dl>

        <p className="mt-4 rounded-lg bg-badge-bg px-4 py-3 text-[13.5px] leading-[1.55] text-badge-text">
          {t("contact.hours.updateNote")}
        </p>
      </div>

      <div
        className="rounded-2xl p-7 text-white shadow-elevated"
        style={{ background: "linear-gradient(120deg, var(--brand-teal-700) 0%, var(--brand-teal-600) 55%, var(--brand-teal-500) 100%)" }}
      >
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.45] bg-white/[0.06]">
            <PhoneIcon size={19} />
          </span>
          <h3 className="m-0 font-heading text-[18px] font-bold">{t("contact.hours.emergencyLabel")}</h3>
        </div>
        <a
          href={CONTACT_HOURS.emergencyPhoneHref}
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 py-2 text-[14.5px] font-bold text-contact-page-cta-text no-underline [transition:background-color_200ms_ease,color_200ms_ease,transform_200ms_ease] hover:-translate-y-px hover:bg-cta-hover hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {t("contact.hours.emergencyAction")}: {CONTACT_HOURS.emergencyPhone}
        </a>
      </div>
    </section>
  );
}
