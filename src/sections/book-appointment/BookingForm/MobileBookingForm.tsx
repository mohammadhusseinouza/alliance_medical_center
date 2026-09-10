import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { FormField } from "../../../components/ui/FormField";
import { INTL_LOCALE_TAGS } from "../../../i18n/types";
import { useLanguage } from "../../../i18n/useLanguage";
import { BookingCalendar } from "../BookingCalendar";
import { TimeSlots } from "../TimeSlots";
import { bookingInputClass, bookingTextareaClass } from "./bookingFieldStyles";
import { bookingDateLabel } from "./bookingDate";
import { BookingConfirmation } from "./BookingConfirmation";
import { GENDER_OPTIONS, VISIT_TYPE_OPTIONS } from "./bookingForm.data";
import { MobileStepIndicator } from "./MobileStepIndicator";
import { useBookingForm } from "./useBookingForm";
import type { BookingErrorCode } from "./BookingForm.types";

/** Distinct id prefix so the mobile controls never collide with the hidden desktop `BookingForm`. */
const ID = (field: string) => `m-booking-${field}`;

const primaryBtnClass =
  "flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[7px] border-none px-4 text-[15.5px] font-bold leading-tight text-white shadow-[0_4px_8px_rgba(0,0,0,0.16)]";
const secondaryBtnClass =
  "flex min-h-[52px] w-full items-center justify-center gap-2 rounded-[7px] border border-booking-button-secondary-border bg-white px-4 py-2 text-[14px] font-bold leading-tight text-booking-button-secondary-text";
const primaryBtnStyle = { background: "linear-gradient(90deg,var(--booking-cta-from),var(--booking-blue))" } as const;

/**
 * Mobile presentation of the Book-Appointment workflow (handoff 5a). It
 * shares ALL behaviour with the desktop `BookingForm` via `useBookingForm`
 * (values, errors, step, month nav, date/time selection, full
 * `validateBookingForm`, submit, reset) and reuses `BookingCalendar`,
 * `TimeSlots`, `FormField`, the booking field styles, the option lists and
 * `BookingConfirmation`. Only the field arrangement is mobile-specific.
 */
export function MobileBookingForm() {
  const { t } = useTranslation();
  const localeTag = INTL_LOCALE_TAGS[useLanguage()];
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

  const vErr = (code: BookingErrorCode | undefined) => (code ? t(`validation.${code}`) : undefined);
  const dateLabel = values.date ? bookingDateLabel(values.date, localeTag) : "";
  const slotSummary =
    values.date && values.time
      ? t("booking.confirmation.slot", { date: dateLabel, time: values.time })
      : undefined;

  let summaryText: string;
  let summaryClass: string;
  if (errors.dateTime) {
    summaryText = t(`validation.${errors.dateTime}`);
    summaryClass = "text-error";
  } else if (!values.date) {
    summaryText = t("booking.summary.prompt");
    summaryClass = "text-text-muted";
  } else if (!values.time) {
    summaryText = t("booking.summary.datePicked", { date: dateLabel });
    summaryClass = "text-booking-text-body";
  } else {
    summaryText = t("booking.summary.selected", { date: dateLabel, time: values.time });
    summaryClass = "text-badge-text";
  }

  const field = (
    name: string,
    labelKey: string,
    node: (id: string, className: string, describedBy: string | undefined) => ReactNode,
    opts: { required?: boolean; error?: string; wrap?: string } = {},
  ) => {
    const id = ID(name);
    const describedBy = opts.error ? `${id}-error` : undefined;
    return (
      <FormField label={t(labelKey)} htmlFor={id} required={opts.required} error={opts.error} className={opts.wrap}>
        {node(id, bookingInputClass(Boolean(opts.error)), describedBy)}
      </FormField>
    );
  };

  const textInput = (
    name: keyof typeof values,
    labelKey: string,
    placeholderKey: string,
    type: string,
    error?: string,
  ) =>
    field(
      name,
      labelKey,
      (id, className, describedBy) => (
        <input
          id={id}
          type={type}
          value={(values[name] as string) ?? ""}
          onChange={(e) => handleFieldChange(name, e.target.value)}
          placeholder={placeholderKey ? t(placeholderKey) : undefined}
          className={className}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={describedBy}
        />
      ),
      { required: true, error },
    );

  return (
    <div className="rounded-2xl border border-booking-border-card bg-white p-4 pt-5 shadow-booking-card">
      {submitted ? (
        <BookingConfirmation onReset={handleReset} slotSummary={slotSummary} />
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="font-heading text-[24px] font-bold leading-[1.25] text-text-primary">
            {t("booking.formHeading")}
          </h2>
          <MobileStepIndicator step={step} onStepChange={goToStep} />

          {step === 1 && (
            <>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {textInput("firstName", "booking.fields.firstName.label", "booking.fields.firstName.placeholder", "text", vErr(errors.firstName))}
                {textInput("lastName", "booking.fields.lastName.label", "booking.fields.lastName.placeholder", "text", vErr(errors.lastName))}
              </div>

              <div className="mt-4 flex flex-col gap-4">
                {textInput("email", "booking.fields.email.label", "booking.fields.email.placeholder", "email", vErr(errors.email))}
                {textInput("phone", "booking.fields.phone.label", "booking.fields.phone.placeholder", "tel", vErr(errors.phone))}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {textInput("dob", "booking.fields.dob.label", "", "date", vErr(errors.dob))}
                {field(
                  "gender",
                  "booking.fields.gender.label",
                  (id, className, describedBy) => (
                    <select
                      id={id}
                      value={values.gender}
                      onChange={(e) => handleFieldChange("gender", e.target.value)}
                      className={className}
                      aria-invalid={Boolean(errors.gender) || undefined}
                      aria-describedby={describedBy}
                    >
                      <option value="">{t("booking.fields.gender.placeholder")}</option>
                      {GENDER_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {t(`booking.genderOptions.${o.translationKey}`)}
                        </option>
                      ))}
                    </select>
                  ),
                  { required: true, error: vErr(errors.gender) },
                )}
              </div>

              <div className="mt-4 flex flex-col gap-4">
                {textInput("address", "booking.fields.address.label", "booking.fields.address.placeholder", "text", vErr(errors.address))}
                {textInput("zip", "booking.fields.zip.label", "booking.fields.zip.placeholder", "text", vErr(errors.zip))}
              </div>

              {/* Date & time — stacked on mobile */}
              <div className="mt-6">
                <span className="mb-1.5 block text-xs font-semibold text-form-label">
                  {t("booking.dateTimeLabel")} <span className="text-error">*</span>
                </span>
                <div className="mt-2 flex flex-col gap-3">
                  <BookingCalendar
                    variant="mobile"
                    month={month}
                    selectedDate={values.date}
                    onSelectDate={handleSelectDate}
                    onPrevMonth={prevMonth}
                    onNextMonth={nextMonth}
                  />
                  <TimeSlots
                    variant="mobile"
                    selectedDate={values.date}
                    selectedTime={values.time}
                    onSelectTime={handleSelectTime}
                  />
                </div>
                <p
                  className={`mt-2 text-[13.5px] leading-[1.5] ${summaryClass}`}
                  role={errors.dateTime ? "alert" : undefined}
                >
                  {summaryText}
                </p>
              </div>

              {/* Visit details */}
              <div className="mt-6 flex flex-col gap-4">
                {field(
                  "visitType",
                  "booking.fields.visitType.label",
                  (id, className, describedBy) => (
                    <select
                      id={id}
                      value={values.visitType}
                      onChange={(e) => handleFieldChange("visitType", e.target.value)}
                      className={className}
                      aria-invalid={Boolean(errors.visitType) || undefined}
                      aria-describedby={describedBy}
                    >
                      <option value="">{t("booking.fields.visitType.placeholder")}</option>
                      {VISIT_TYPE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {t(`booking.visitTypeOptions.${o.translationKey}`)}
                        </option>
                      ))}
                    </select>
                  ),
                  { required: true, error: vErr(errors.visitType) },
                )}
                {textInput("reason", "booking.fields.reason.label", "booking.fields.reason.placeholder", "text", vErr(errors.reason))}
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <button type="submit" className={primaryBtnClass} style={primaryBtnStyle}>
                  {t("booking.requestAppointment")}
                  <ArrowRightIcon size={15} />
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
              <div className="mt-6 flex flex-col gap-4">
                <FormField label={t("booking.fields.insuranceProvider.label")} htmlFor={ID("insurance-provider")}>
                  <input
                    id={ID("insurance-provider")}
                    type="text"
                    value={values.insuranceProvider}
                    onChange={(e) => handleFieldChange("insuranceProvider", e.target.value)}
                    placeholder={t("booking.fields.insuranceProvider.placeholder")}
                    className={bookingInputClass(false)}
                  />
                </FormField>
                <FormField label={t("booking.fields.policyNumber.label")} htmlFor={ID("policy-number")}>
                  <input
                    id={ID("policy-number")}
                    type="text"
                    value={values.policyNumber}
                    onChange={(e) => handleFieldChange("policyNumber", e.target.value)}
                    placeholder={t("booking.fields.policyNumber.placeholder")}
                    className={bookingInputClass(false)}
                  />
                </FormField>
                <FormField label={t("booking.fields.medicalNotes.label")} htmlFor={ID("medical-notes")}>
                  <textarea
                    id={ID("medical-notes")}
                    rows={4}
                    value={values.medicalNotes}
                    onChange={(e) => handleFieldChange("medicalNotes", e.target.value)}
                    placeholder={t("booking.fields.medicalNotes.placeholder")}
                    className={bookingTextareaClass}
                  />
                </FormField>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <button type="submit" className={primaryBtnClass} style={primaryBtnStyle}>
                  {t("booking.requestAppointment")}
                  <ArrowRightIcon size={15} />
                </button>
                <button type="button" onClick={() => goToStep(1)} className={secondaryBtnClass}>
                  {t("booking.back")}
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
}
