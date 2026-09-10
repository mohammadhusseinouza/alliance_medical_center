import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { BookingConfirmation } from "./BookingConfirmation";
import { DateTimeFields } from "./DateTimeFields";
import { InsuranceFields } from "./InsuranceFields";
import { PersonalInfoFields } from "./PersonalInfoFields";
import { StepIndicator } from "./StepIndicator";
import { useBookingForm } from "./useBookingForm";
import { VisitDetailsFields } from "./VisitDetailsFields";

const primaryBtnClass =
  "min-h-[50px] rounded-[7px] border-none px-6 text-sm font-bold text-white transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-booking-cta-hover";
const secondaryBtnClass =
  "flex min-h-[50px] items-center justify-center gap-2 rounded-[7px] border border-booking-button-secondary-border bg-white px-6 text-sm font-bold text-booking-button-secondary-text transition-colors duration-200 hover:bg-booking-button-secondary-hover-bg";

export function BookingForm() {
  const { t } = useTranslation();
  const {
    values,
    errors,
    step,
    submitted,
    month,
    handleFieldChange,
    handleSelectDate,
    handleSelectTime,
    handleSubmit,
    handleReset,
    goToStep,
    prevMonth,
    nextMonth,
  } = useBookingForm();

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
                onPrevMonth={prevMonth}
                onNextMonth={nextMonth}
              />
              <VisitDetailsFields values={values} errors={errors} onFieldChange={handleFieldChange} />

              <div className="mt-[30px] flex gap-3.5 mw-700:flex-col mw-700:[&>*]:w-full">
                <button type="submit" className={primaryBtnClass} style={{ background: "linear-gradient(90deg,var(--booking-cta-from),var(--booking-blue))" }}>
                  {t("booking.requestAppointment")}
                </button>
                <button type="button" onClick={() => goToStep(2)} className={secondaryBtnClass}>
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
                <button type="button" onClick={() => goToStep(1)} className={secondaryBtnClass}>
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
