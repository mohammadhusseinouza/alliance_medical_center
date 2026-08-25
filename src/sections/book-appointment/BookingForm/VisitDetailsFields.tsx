import { useTranslation } from "react-i18next";
import { FormField } from "../../../components/ui/FormField";
import { VISIT_TYPE_OPTIONS } from "./bookingForm.data";
import { bookingInputClass } from "./bookingFieldStyles";
import type { BookingErrors, BookingFormValues } from "./BookingForm.types";

export interface VisitDetailsFieldsProps {
  values: BookingFormValues;
  errors: BookingErrors;
  onFieldChange: (field: keyof BookingFormValues, value: string) => void;
}

export function VisitDetailsFields({ values, errors, onFieldChange }: VisitDetailsFieldsProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-[18px] mw-700:grid-cols-1">
      <FormField
        label={t("booking.fields.visitType.label")}
        htmlFor="visitType"
        required
        error={errors.visitType ? t(`validation.${errors.visitType}`) : undefined}
      >
        <select
          id="visitType"
          value={values.visitType}
          onChange={(e) => onFieldChange("visitType", e.target.value)}
          className={bookingInputClass(Boolean(errors.visitType))}
        >
          <option value="">{t("booking.fields.visitType.placeholder")}</option>
          {VISIT_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {t(`booking.visitTypeOptions.${option.translationKey}`)}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label={t("booking.fields.reason.label")}
        htmlFor="reason"
        required
        error={errors.reason ? t(`validation.${errors.reason}`) : undefined}
      >
        <input
          id="reason"
          type="text"
          value={values.reason}
          onChange={(e) => onFieldChange("reason", e.target.value)}
          placeholder={t("booking.fields.reason.placeholder")}
          className={bookingInputClass(Boolean(errors.reason))}
        />
      </FormField>
    </div>
  );
}
