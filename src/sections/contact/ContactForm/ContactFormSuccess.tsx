import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { CheckIcon, MailIcon, PhoneIcon } from "../../../components/icons";
import { SITE } from "../../../lib/constants";

const primaryActionClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta px-6 py-2 text-center text-[14.5px] font-semibold text-white no-underline shadow-[0_4px_8px_rgba(0,0,0,0.16)] [transition:background-color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-cta-hover hover:shadow-nav-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring";
const secondaryActionClass =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-divider bg-white px-6 py-2 text-center text-[14.5px] font-semibold text-text-primary no-underline transition-colors duration-200 hover:bg-booking-button-secondary-hover-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring";
const resetButtonClass =
  "mt-6 inline-flex min-h-11 items-center justify-center rounded-[7px] border border-booking-button-secondary-border bg-white px-6 py-2 text-sm font-bold text-booking-button-secondary-text transition-colors duration-200 hover:bg-booking-button-secondary-hover-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring";

export interface ContactFormSuccessProps {
  onReset: () => void;
}

export function ContactFormSuccess({ onReset }: ContactFormSuccessProps) {
  const { t } = useTranslation();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="animate-card-up px-2.5 py-10 text-center motion-reduce:[animation-duration:0.01ms]"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-badge-bg">
        <CheckIcon size={30} strokeWidth={2.4} className="text-badge-text" />
      </div>
      <h2 ref={headingRef} tabIndex={-1} className="mt-6 font-heading text-2xl font-bold text-text-primary outline-none">
        {t("contact.form.success.heading")}
      </h2>
      <p className="mx-auto mt-3 max-w-[440px] text-[15px] leading-[1.65] text-text-secondary">
        {t("contact.form.success.description")}
      </p>

      <div className="mx-auto mt-7 flex max-w-[440px] flex-row items-stretch justify-center gap-3 mw-640:flex-col">
        <a href={SITE.phoneHref} className={primaryActionClass}>
          <PhoneIcon size={16} />
          {t("contact.form.success.callAction")}: {SITE.phone}
        </a>
        <a href={SITE.mailtoHref} className={secondaryActionClass}>
          <MailIcon size={16} />
          {t("contact.form.success.emailAction")}: {SITE.email}
        </a>
      </div>

      <button type="button" onClick={onReset} className={resetButtonClass}>
        {t("contact.form.success.newMessageAction")}
      </button>
    </div>
  );
}
