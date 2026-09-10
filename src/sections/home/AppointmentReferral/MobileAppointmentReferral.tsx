import { useState } from "react";
import { useTranslation } from "react-i18next";
import applyForTreatmentImage from "../../../assets/home/apply-for-treatment.webp";
import { REFERRAL_FORM_FIELDS } from "./appointmentReferral.data";
import type { ReferralFormValues } from "./AppointmentReferral.types";

const EMPTY_VALUES: ReferralFormValues = { name: "", email: "", doctorName: "", disease: "" };

const inputClass =
  "h-[54px] w-full rounded-[3px] border-none bg-white/[0.13] px-4 font-sans text-[16px] text-white outline-none placeholder:text-white/90 focus:bg-white/[0.18] focus:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]";

/**
 * Mobile appointment section (handoff design 1a): the gradient panel with
 * the stacked input column beside the doctor portrait and a full-width
 * Send Message button. Mirrors the existing desktop `AppointmentForm`
 * behaviour (controlled state, submit handler, success message) and reuses
 * `REFERRAL_FORM_FIELDS` and the `appointmentReferral.*` copy.
 */
export function MobileAppointmentReferral() {
  const { t } = useTranslation();
  const [values, setValues] = useState<ReferralFormValues>(EMPTY_VALUES);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setValues(EMPTY_VALUES);
  }

  return (
    <section className="bg-surface-pale-1 pb-10">
      <div
        className="px-[22px] pb-9 pt-[34px] text-white"
        style={{
          background:
            "linear-gradient(150deg, var(--brand-teal-700) 0%, var(--brand-teal-600) 55%, var(--brand-teal-500) 100%)",
        }}
      >
        <div className="inline-block rounded-[3px] bg-white/[0.15] px-[11px] py-[7px] text-[12.5px] font-medium uppercase tracking-[0.5px] text-white">
          {t("appointmentReferral.eyebrow")}
        </div>
        <h2 className="mt-3.5 font-heading text-[34px] font-normal leading-[1.12] text-white">
          {t("appointmentReferral.heading")}
        </h2>

        <form onSubmit={handleSubmit} className="mt-[22px]">
          <div className="grid grid-cols-[minmax(0,1fr)_132px] items-stretch gap-3.5">
            <div className="flex flex-col gap-2.5">
              {REFERRAL_FORM_FIELDS.map((field) => (
                <div key={field.id}>
                  <label htmlFor={`m-${field.id}`} className="sr-only">
                    {t(`appointmentReferral.fields.${field.translationKey}.label`)}
                  </label>
                  <input
                    id={`m-${field.id}`}
                    type={field.type}
                    required
                    placeholder={t(`appointmentReferral.fields.${field.translationKey}.placeholder`)}
                    value={values[field.name]}
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, [field.name]: event.target.value }))
                    }
                    className={inputClass}
                  />
                </div>
              ))}
            </div>
            <img
              src={applyForTreatmentImage}
              alt={t("appointmentReferral.imageAlt")}
              className="block h-full w-[132px] object-cover object-[50%_15%]"
              loading="lazy"
            />
          </div>

          <button
            type="submit"
            className="mt-[18px] h-[54px] w-full cursor-pointer rounded-[3px] border-none bg-white font-sans text-[13px] font-medium uppercase tracking-[0.4px] text-brand-teal-700"
          >
            {t("appointmentReferral.submit")}
          </button>

          {submitted && (
            <p className="mt-3 text-[13.5px] text-white" role="status">
              {t("appointmentReferral.successMessage")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
