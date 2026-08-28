import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { BookingConfirmation } from "./BookingConfirmation";
import { DateTimeFields } from "./DateTimeFields";
import { EMPTY_BOOKING_VALUES } from "./bookingForm.data";
import { InsuranceFields } from "./InsuranceFields";
import { PersonalInfoFields } from "./PersonalInfoFields";
import { StepIndicator } from "./StepIndicator";
import { validateBookingForm } from "./validate";
import { VisitDetailsFields } from "./VisitDetailsFields";
import type { BookingErrors, BookingFormValues, BookingStep } from "./BookingForm.types";

const primaryBtnClass =
  "min-h-[50px] rounded-[7px] border-none px-6 text-sm font-bold text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-booking-cta-hover";
const secondaryBtnClass =
  "flex min-h-[50px] items-center justify-center gap-2 rounded-[7px] border border-booking-button-secondary-border bg-white px-6 text-sm font-bold text-booking-button-secondary-text transition-colors duration-200 hover:bg-booking-button-secondary-hover-bg";

function currentMonthStart(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

export function BookingForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState<BookingFormValues>(EMPTY_BOOKING_VALUES);
  const [errors, setErrors] = useState<BookingErrors>({});
  const [step, setStep] = useState<BookingStep>(1);
  const [submitted, setSubmitted] = useState(false);
  const [month, setMonth] = useState<Date>(currentMonthStart);

  function handleFieldChange(field: keyof BookingFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSelectDate(iso: string) {
    setValues((prev) => ({ ...prev, date: iso, time: null }));
    setErrors((prev) => ({ ...prev, dateTime: undefined }));
  }

  function handleSelectTime(label: string) {
    setValues((prev) => ({ ...prev, time: label }));
    setErrors((prev) => ({ ...prev, dateTime: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateBookingForm(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setStep(1);
    setErrors({});
    setValues(EMPTY_BOOKING_VALUES);
  }

  return (
    <div
      id="bk-form"
      className="rounded-2xl border border-booking-border-card bg-white p-[30px] shadow-booking-card mw-1100:p-6"
    >
      {!submitted && (
        <form onSubmit={handleSubmit}>
          <h2 className="font-heading text-[26px] font-bold text-text-primary">{t("booking.formHeading")}</h2>
          <StepIndicator step={step} />

          {step === 1 && (
            <>
              <PersonalInfoFields values={values} errors={errors} onFieldChange={handleFieldChange} />
              <DateTimeFields
                values={values}
                errors={errors}
                month={month}
                onSelectDate={handleSelectDate}
                onSelectTime={handleSelectTime}
                onPrevMonth={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1))}
                onNextMonth={() => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1))}
              />
              <VisitDetailsFields values={values} errors={errors} onFieldChange={handleFieldChange} />

              <div className="mt-[30px] flex gap-3.5 mw-700:flex-col mw-700:[&>*]:w-full">
                <button type="submit" className={primaryBtnClass} style={{ background: "linear-gradient(90deg,var(--booking-cta-from),var(--booking-blue))" }}>
                  {t("booking.requestAppointment")}
                </button>
                <button type="button" onClick={() => setStep(2)} className={secondaryBtnClass}>
                  {t("booking.addInsuranceOptional")}
                  <ArrowRightIcon size={14} />
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <InsuranceFields values={values} onFieldChange={handleFieldChange} />

              <div className="mt-[30px] flex gap-3.5 mw-700:flex-col mw-700:[&>*]:w-full">
                <button type="submit" className={primaryBtnClass} style={{ background: "linear-gradient(90deg,var(--booking-cta-from),var(--booking-blue))" }}>
                  {t("booking.requestAppointment")}
                </button>
                <button type="button" onClick={() => setStep(1)} className={secondaryBtnClass}>
                  {t("booking.back")}
                </button>
              </div>
            </>
          )}
        </form>
      )}

      {submitted && <BookingConfirmation onReset={handleReset} />}
    </div>
  );
}
