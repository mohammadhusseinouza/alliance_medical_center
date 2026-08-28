import { useTranslation } from "react-i18next";
import { BookingCalendar } from "../BookingCalendar";
import { TimeSlots } from "../TimeSlots";
import type { BookingErrors, BookingFormValues } from "./BookingForm.types";

export interface DateTimeFieldsProps {
  values: BookingFormValues;
  errors: BookingErrors;
  month: Date;
  onSelectDate: (iso: string) => void;
  onSelectTime: (label: string) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function DateTimeFields({
  values,
  errors,
  month,
  onSelectDate,
  onSelectTime,
  onPrevMonth,
  onNextMonth,
}: DateTimeFieldsProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-7">
      <span className="mb-1.5 block text-xs font-semibold text-form-label">
        {t("booking.dateTimeLabel")} <span className="text-error">*</span>
      </span>
      <div className="mt-2 grid grid-cols-2 gap-4 mw-1100:grid-cols-1">
        <BookingCalendar
          month={month}
          selectedDate={values.date}
          onSelectDate={onSelectDate}
          onPrevMonth={onPrevMonth}
          onNextMonth={onNextMonth}
        />
        <TimeSlots selectedDate={values.date} selectedTime={values.time} onSelectTime={onSelectTime} />
      </div>
      {errors.dateTime && <div className="mt-2 text-xs text-error">{t(`validation.${errors.dateTime}`)}</div>}
    </div>
  );
}
