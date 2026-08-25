import { useState } from "react";
import { useTranslation } from "react-i18next";
import { REFERRAL_FORM_FIELDS } from "./appointmentReferral.data";
import type { ReferralFormValues } from "./AppointmentReferral.types";

const EMPTY_VALUES: ReferralFormValues = { name: "", email: "", doctorName: "", disease: "" };

const inputClass =
  "h-[58px] w-full rounded-[3px] border-none bg-white/[0.13] px-[18px] font-sans text-[16px] text-white outline-none placeholder:text-white/90 focus:bg-white/[0.18] focus:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.25)]";

export function AppointmentForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState<ReferralFormValues>(EMPTY_VALUES);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setValues(EMPTY_VALUES);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-[52px] grid max-w-[900px] grid-cols-2 gap-x-[26px] gap-y-[30px] mw-700:grid-cols-1 mw-700:gap-4">
        {REFERRAL_FORM_FIELDS.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id} className="sr-only">
              {t(`appointmentReferral.fields.${field.translationKey}.label`)}
            </label>
            <input
              id={field.id}
              type={field.type}
              placeholder={t(`appointmentReferral.fields.${field.translationKey}.placeholder`)}
              value={values[field.name]}
              onChange={(event) => setValues((prev) => ({ ...prev, [field.name]: event.target.value }))}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="mt-[30px] h-[56px] w-[180px] cursor-pointer rounded-[3px] border-none bg-white font-sans text-[13px] font-medium uppercase tracking-[0.4px] text-[#0B5664] hover:bg-[#F4F4F4]"
      >
        {t("appointmentReferral.submit")}
      </button>

      {submitted && <div>{t("appointmentReferral.successMessage")}</div>}
    </form>
  );
}
