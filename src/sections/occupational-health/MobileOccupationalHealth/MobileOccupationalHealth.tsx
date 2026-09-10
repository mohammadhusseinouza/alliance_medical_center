import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import injuryCareImage from "../../../assets/occupational-health/om_workplaceinjurycare.png";
import drugTestingImage from "../../../assets/occupational-health/om_drugtesting.png";
import dotPhysicalImage from "../../../assets/occupational-health/om_dotexamiantion.png";
import telemedicineImage from "../../../assets/occupational-health/om_telemedicine.png";
import heroImage from "../../../assets/occupational-health/hero/occupational-hero.png";
import {
  ArrowRightIcon,
  BriefcaseIcon,
  CheckIcon,
  EyeIcon,
  FlaskIcon,
  HomeIcon,
  LungsIcon,
  PhoneIcon,
  RotateIcon,
  RunningIcon,
  ShieldCheckIcon,
  TruckIcon,
  UserIcon,
  VideoIcon,
} from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { WORKPLACE_HEALTH_SERVICES } from "../WorkplaceHealthServices/workplaceHealthServices.data";
import type { WorkplaceHealthServiceIconName } from "../WorkplaceHealthServices/workplaceHealthServices.types";
import { PHYSICAL_EXAM_ITEMS } from "../PhysicalExamsScreenings/physicalExamsScreenings.data";
import type { PhysicalExamIconName } from "../PhysicalExamsScreenings/physicalExamsScreenings.types";
import { DRUG_TESTING_ITEMS } from "../DrugTestingServices/drugTestingServices.data";
import { ADDITIONAL_HEALTH_SERVICES } from "../AdditionalHealthServices/additionalHealthServices.data";
import type { AdditionalHealthServiceIconName } from "../AdditionalHealthServices/additionalHealthServices.types";

/** Unique mobile anchor — the desktop hero already owns `#occupational-health-services`. */
export const MOBILE_SERVICES_ANCHOR = "mobile-occupational-services";

/**
 * Mobile-only "success" accent flags for the exams grid, keyed by the
 * existing `PHYSICAL_EXAM_ITEMS` id (data-driven, not position/title). The
 * approved mobile handoff accents Fit-for-Duty and Respirator exams; the
 * desktop data's own `accent` (Laboratory Testing) is left untouched for
 * the desktop page.
 */
const MOBILE_EXAM_SUCCESS = new Set(["fit-for-duty-exams", "respirator-medical-exams"]);

const HERO_BENEFIT_KEYS = ["preEmployment", "returnToWork", "injuryCare", "surveillance"] as const;
const INJURY_BENEFIT_KEYS = ["immediateEvaluation", "caseManagement", "rehabilitation", "followUp"] as const;
const DOT_INCLUDE_KEYS = [
  "medicalHistory",
  "vision",
  "hearing",
  "bloodPressure",
  "physicalExam",
  "medicalCertification",
] as const;
const TELEMED_BENEFIT_KEYS = ["immediateAccess", "remoteWorkforce", "convenientFollowUp"] as const;
const CTA_SUPPORT_KEYS = ["experiencedTeam", "trustedReliable", "fastAppointments"] as const;

const HERO_SCRIM =
  "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.10) 46%, rgba(255,255,255,0.55) 82%, rgba(255,255,255,0.94) 100%)";
const PARTNER_GRADIENT =
  "linear-gradient(150deg, var(--brand-teal-700) 0%, var(--brand-teal-600) 55%, var(--brand-teal-500) 100%)";
const PRIMARY_CTA_GRADIENT = "linear-gradient(90deg, var(--bright-cta-from), var(--bright-cta-to))";

function ServiceIcon({ icon }: { icon: WorkplaceHealthServiceIconName }) {
  const props = { size: 24, strokeWidth: 1.8 };
  switch (icon) {
    case "user":
      return <UserIcon {...props} />;
    case "flask":
      return <FlaskIcon {...props} />;
    case "truck":
      return <TruckIcon {...props} />;
    default:
      return <VideoIcon {...props} />;
  }
}

function ExamIcon({ icon }: { icon: PhysicalExamIconName }) {
  const props = { size: 20, strokeWidth: 1.8 };
  switch (icon) {
    case "user":
      return <UserIcon {...props} />;
    case "eye":
      return <EyeIcon {...props} />;
    case "rotate":
      return <RotateIcon {...props} />;
    case "lungs":
      return <LungsIcon {...props} />;
    case "shield-check":
      return <ShieldCheckIcon {...props} />;
    default:
      return <FlaskIcon {...props} />;
  }
}

function AdditionalIcon({ icon }: { icon: AdditionalHealthServiceIconName }) {
  const props = { size: 20, strokeWidth: 1.8 };
  switch (icon) {
    case "running":
      return <RunningIcon {...props} />;
    case "home":
      return <HomeIcon {...props} />;
    default:
      return <ShieldCheckIcon {...props} />;
  }
}

const sectionHeading =
  "font-heading text-[27px] font-bold leading-[1.16] tracking-[-0.8px] text-text-primary [text-wrap:pretty]";
const sectionBody = "mt-3.5 text-[15.5px] leading-[1.6] text-text-secondary [text-wrap:pretty]";
const image16by10 = "block aspect-[16/10] w-full rounded-2xl object-cover shadow-card";

/**
 * The dedicated mobile Occupational Health / Occupational Medicine page
 * (handoff 3a). An employer-focused landing page — deliberately NOT the
 * five-service `MobileServiceDetail` shell (no breadcrumb, no service
 * picker, no FAQ). Rendered only below the `md` breakpoint; the approved
 * desktop page renders unchanged at `md` and up. All copy, data, images
 * and routes are the existing production ones.
 */
export function MobileOccupationalHealth() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <>
      {/* 3. Hero */}
      <section>
        <div className="relative h-[196px] w-full overflow-hidden">
          <img
            src={heroImage}
            alt={t("occupationalHealth.imageAlt")}
            className="absolute inset-0 h-full w-full object-cover object-[44%_22%]"
            loading="eager"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: HERO_SCRIM }} />
        </div>

        <div className="relative -mt-[18px] bg-white px-4 pb-[34px]">
          <div className="flex w-fit items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-badge-text">
            <BriefcaseIcon size={14} />
            {t("occupationalHealth.eyebrow")}
          </div>

          <h1 className="mt-4 font-heading text-[36px] font-bold leading-[1.06] tracking-[-1.1px] text-brand-navy [text-wrap:pretty]">
            {t("occupationalHealth.heading")}
          </h1>

          <p className={sectionBody}>{t("occupationalHealth.description")}</p>

          <ul className="mt-6 flex list-none flex-col gap-4 p-0">
            {HERO_BENEFIT_KEYS.map((key) => (
              <li key={key} className="grid grid-cols-[26px_1fr] items-start gap-3">
                <span className="mt-px flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-badge-text">
                  <CheckIcon size={14} strokeWidth={3} />
                </span>
                <div>
                  <p className="text-[15.5px] font-bold leading-[1.3] text-text-primary">
                    {t(`occupationalHealth.benefits.${key}.title`)}
                  </p>
                  <p className="mt-0.5 text-[14px] leading-[1.55] text-text-secondary">
                    {t(`occupationalHealth.benefits.${key}.description`)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to={withLocale(SITE.contactHref, language)}
            className="mt-6 flex h-[52px] w-full items-center justify-center gap-2 rounded-[7px] text-[15px] font-semibold text-white no-underline shadow-bright-cta"
            style={{ background: PRIMARY_CTA_GRADIENT }}
          >
            {t("occupationalHealth.hero.partnerCta")}
            <ArrowRightIcon size={15} />
          </Link>
          <a
            href={`#${MOBILE_SERVICES_ANCHOR}`}
            className="mt-2.5 flex h-[52px] w-full items-center justify-center rounded-[7px] border-[1.5px] border-brand-icon text-[15px] font-semibold text-brand-icon no-underline"
          >
            {t("occupationalHealth.hero.learnMoreCta")}
          </a>
        </div>
      </section>

      {/* 4. Workplace Health Services */}
      <section id={MOBILE_SERVICES_ANCHOR} className="scroll-mt-[76px] bg-white pb-[34px] pt-1.5">
        <div className="px-4">
          <div className="flex w-fit items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-badge-text">
            {t("occupationalHealth.services.eyebrow")}
          </div>
          <h2 className="mt-4 font-heading text-[28px] font-bold leading-[1.16] tracking-[-0.9px] text-text-primary [text-wrap:pretty]">
            {t("occupationalHealth.services.heading")}
          </h2>
          <p className={sectionBody}>{t("occupationalHealth.services.description")}</p>
        </div>

        <ul className="om-scroll mt-4 flex list-none snap-x snap-mandatory gap-3 overflow-x-auto p-0 px-4 pb-2">
          {WORKPLACE_HEALTH_SERVICES.map((item) => (
            <li
              key={item.id}
              className="flex-[0_0_296px] snap-center rounded-2xl border border-border-subtle bg-white p-[22px] shadow-[0_8px_24px_rgba(13,71,161,0.06)]"
            >
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-badge-bg text-badge-text">
                <ServiceIcon icon={item.icon} />
              </div>
              <h3 className="mt-4 font-heading text-[19px] font-bold leading-[1.3] text-text-primary">
                {t(`occupationalHealth.services.items.${item.translationKey}.title`)}
              </h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-text-secondary">
                {t(`occupationalHealth.services.items.${item.translationKey}.description`)}
              </p>
              <ul className="mt-4 flex list-none flex-col gap-2 p-0">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-[13.5px] leading-[1.4] text-text-secondary">
                    <CheckIcon size={14} strokeWidth={3} className="flex-shrink-0 text-badge-text" />
                    {t(`occupationalHealth.services.items.${item.translationKey}.features.${feature}`)}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* 5. Workplace Injury Care */}
      <section className="bg-surface-pale-1 px-4 py-[34px]">
        <img src={injuryCareImage} alt={t("occupationalHealth.injuryCare.imageAlt")} className={image16by10} loading="lazy" />
        <h2 className={`mt-6 ${sectionHeading}`}>{t("occupationalHealth.injuryCare.heading")}</h2>
        <p className={sectionBody}>{t("occupationalHealth.injuryCare.description")}</p>
        <ul className="mt-[22px] flex list-none flex-col gap-[13px] p-0">
          {INJURY_BENEFIT_KEYS.map((key) => (
            <li key={key} className="flex items-center gap-2.5">
              <CheckIcon size={16} strokeWidth={3} className="flex-shrink-0 text-badge-text" />
              <span className="text-[15px] font-bold leading-[1.3] text-text-primary">
                {t(`occupationalHealth.injuryCare.benefits.${key}`)}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* 6. Physical Exams, Tests & Screenings */}
      <section className="bg-white px-4 py-[34px]">
        <h2 className={sectionHeading}>{t("occupationalHealth.exams.heading")}</h2>
        <p className={sectionBody}>{t("occupationalHealth.exams.description")}</p>
        <ul className="mt-5 grid list-none grid-cols-2 gap-3 p-0">
          {PHYSICAL_EXAM_ITEMS.map((item) => {
            const success = MOBILE_EXAM_SUCCESS.has(item.id);
            return (
              <li
                key={item.id}
                className={`flex min-h-[168px] flex-col rounded-[14px] border bg-white p-4 ${
                  success ? "border-success/30" : "border-border-subtle"
                }`}
              >
                <div
                  className={`flex h-[42px] w-[42px] items-center justify-center rounded-[11px] ${
                    success ? "bg-success-bg text-success-text" : "bg-badge-bg text-badge-text"
                  }`}
                >
                  <ExamIcon icon={item.icon} />
                </div>
                <h3 className="mt-3 font-heading text-[15.5px] font-bold leading-[1.3] text-text-primary">
                  {t(`occupationalHealth.exams.items.${item.translationKey}.title`)}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.5] text-text-secondary">
                  {t(`occupationalHealth.exams.items.${item.translationKey}.description`)}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 7. Drug Testing Services */}
      <section className="bg-white px-4 pb-[34px]">
        <h2 className={sectionHeading}>{t("occupationalHealth.drugTesting.heading")}</h2>
        <p className={sectionBody}>{t("occupationalHealth.drugTesting.description")}</p>
        <ul className="mt-5 flex list-none flex-col gap-2.5 p-0">
          {DRUG_TESTING_ITEMS.map((item) => (
            <li key={item.id} className="rounded-[14px] border border-border-subtle bg-surface-pale-1 p-4">
              <p className="text-[14.5px] font-bold leading-[1.3] text-text-primary">
                {t(`occupationalHealth.drugTesting.items.${item.translationKey}.title`)}
              </p>
              <p className="mt-1.5 text-[13px] leading-[1.5] text-text-secondary">
                {t(`occupationalHealth.drugTesting.items.${item.translationKey}.description`)}
              </p>
            </li>
          ))}
        </ul>
        <img
          src={drugTestingImage}
          alt={t("occupationalHealth.drugTesting.imageAlt")}
          className={`mt-4 ${image16by10}`}
          loading="lazy"
        />
      </section>

      {/* 8. DOT Physical Examinations */}
      <section className="bg-surface-pale-1 px-4 py-[34px]">
        <img src={dotPhysicalImage} alt={t("occupationalHealth.dotPhysical.imageAlt")} className={image16by10} loading="lazy" />
        <h2 className={`mt-6 ${sectionHeading}`}>{t("occupationalHealth.dotPhysical.heading")}</h2>
        <p className={sectionBody}>{t("occupationalHealth.dotPhysical.description")}</p>
        <div className="mt-5 rounded-2xl border border-border-subtle bg-white p-5">
          <div className="text-[12.5px] font-bold uppercase tracking-[0.5px] text-badge-text">
            {t("occupationalHealth.dotPhysical.includesLabel")}
          </div>
          <ul className="mt-3.5 flex list-none flex-col gap-[11px] p-0">
            {DOT_INCLUDE_KEYS.map((key) => (
              <li key={key} className="flex items-center gap-2.5">
                <CheckIcon size={14} strokeWidth={3} className="flex-shrink-0 text-badge-text" />
                <span className="text-[14.5px] leading-[1.3] text-text-secondary">
                  {t(`occupationalHealth.dotPhysical.includes.${key}`)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. Telemedicine Services */}
      <section className="bg-white px-4 py-[34px]">
        <h2 className={sectionHeading}>{t("occupationalHealth.telemedicine.heading")}</h2>
        <p className={sectionBody}>{t("occupationalHealth.telemedicine.description")}</p>
        <ul className="mt-5 flex list-none flex-col gap-3.5 p-0">
          {TELEMED_BENEFIT_KEYS.map((key) => (
            <li key={key} className="flex items-center gap-2.5">
              <CheckIcon size={16} strokeWidth={3} className="flex-shrink-0 text-badge-text" />
              <span className="text-[15px] font-bold leading-[1.3] text-text-primary">
                {t(`occupationalHealth.telemedicine.benefits.${key}`)}
              </span>
            </li>
          ))}
        </ul>
        <img
          src={telemedicineImage}
          alt={t("occupationalHealth.telemedicine.imageAlt")}
          className={`mt-4 ${image16by10}`}
          loading="lazy"
        />
      </section>

      {/* 10. Additional Health Services */}
      <section className="bg-white px-4 pb-[34px]">
        <h2 className="font-heading text-[25px] font-bold leading-[1.16] tracking-[-0.8px] text-text-primary [text-wrap:pretty]">
          {t("occupationalHealth.additionalServices.heading")}
        </h2>
        <p className={sectionBody}>{t("occupationalHealth.additionalServices.description")}</p>
        <ul className="mt-5 flex list-none flex-col gap-2.5 p-0">
          {ADDITIONAL_HEALTH_SERVICES.map((item) => {
            const success = item.accent === "success";
            return (
              <li
                key={item.id}
                className={`grid grid-cols-[44px_1fr] items-start gap-3.5 rounded-2xl border p-4 ${
                  success ? "border-success/30" : "border-border-subtle"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    success ? "bg-success-bg text-success-text" : "bg-badge-bg text-badge-text"
                  }`}
                >
                  <AdditionalIcon icon={item.icon} />
                </div>
                <div>
                  <h3 className="font-heading text-[17px] font-bold leading-[1.3] text-text-primary">
                    {t(`occupationalHealth.additionalServices.items.${item.translationKey}.title`)}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-[1.5] text-text-secondary">
                    {t(`occupationalHealth.additionalServices.items.${item.translationKey}.description`)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* 11. Partner With Us CTA */}
      <section className="bg-white px-4 pb-[34px] pt-1.5">
        <div className="overflow-hidden rounded-[20px] px-[22px] pb-[26px] pt-7 text-white" style={{ background: PARTNER_GRADIENT }}>
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white/15">
            <ShieldCheckIcon size={26} strokeWidth={1.8} />
          </div>
          <h2 className="mt-4 font-heading text-[26px] font-bold leading-[1.2] tracking-[-0.4px] text-white [text-wrap:pretty]">
            {t("occupationalHealth.cta.heading")}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-white/85 [text-wrap:pretty]">
            {t("occupationalHealth.cta.description")}
          </p>
          <Link
            to={withLocale(SITE.bookingHref, language)}
            className="mt-5 flex h-[52px] w-full items-center justify-center rounded-[7px] bg-white text-[15px] font-bold text-brand-navy no-underline"
          >
            {t("occupationalHealth.cta.requestConsultation")}
          </Link>
          <a
            href={SITE.phoneHref}
            className="mt-2.5 flex h-[52px] w-full items-center justify-center gap-2 rounded-[7px] border-[1.5px] border-white/60 text-[15px] font-bold text-white no-underline"
          >
            <PhoneIcon size={16} />
            {t("occupationalHealth.cta.call")} {SITE.phone}
          </a>
          <ul className="mt-[22px] flex list-none flex-col gap-2 p-0">
            {CTA_SUPPORT_KEYS.map((key) => (
              <li key={key} className="text-[13.5px] leading-[1.3] text-white/75">
                {t(`occupationalHealth.cta.support.${key}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
