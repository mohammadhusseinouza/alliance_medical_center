import { useState, type FormEvent } from "react";
import { EMPTY_BOOKING_VALUES } from "./bookingForm.data";
import { validateBookingForm } from "./validate";
import type { BookingErrors, BookingFormValues, BookingStep } from "./BookingForm.types";

function currentMonthStart(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
}

export interface UseBookingFormResult {
  values: BookingFormValues;
  errors: BookingErrors;
  step: BookingStep;
  submitted: boolean;
  month: Date;
  handleFieldChange: (field: keyof BookingFormValues, value: string) => void;
  handleSelectDate: (iso: string) => void;
  handleSelectTime: (label: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
  goToStep: (step: BookingStep) => void;
  prevMonth: () => void;
  nextMonth: () => void;
}

/**
 * The single source of truth for the Book-Appointment workflow: form
 * values, errors, step, calendar month, date/time selection, full
 * validation, submission, and reset. Both the desktop `BookingForm` and
 * the mobile `MobileBookingForm` presentations consume this hook — the
 * rules (`validateBookingForm`), the `BookingFormValues` model,
 * `EMPTY_BOOKING_VALUES`, month navigation, "selecting a date clears the
 * time", submit and reset are defined exactly once. Each rendered form
 * gets its own hook instance (its own state), so the two responsive trees
 * never interfere. The hook has no effects, timers, network calls,
 * autofocus or analytics — mounting both presentations is side-effect free.
 */
export function useBookingForm(): UseBookingFormResult {
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

  return {
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
    goToStep: setStep,
    prevMonth: () => setMonth((m) => new Date(m.getFullYear(), m.getMonth() - 1, 1)),
    nextMonth: () => setMonth((m) => new Date(m.getFullYear(), m.getMonth() + 1, 1)),
  };
}
