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
  return (
    <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-[18px] mw-700:grid-cols-1">
      <FormField label="Visit type" htmlFor="visitType" required error={errors.visitType}>
        <select
          id="visitType"
          value={values.visitType}
          onChange={(e) => onFieldChange("visitType", e.target.value)}
          className={bookingInputClass(Boolean(errors.visitType))}
        >
          <option value="">Select visit type</option>
          {VISIT_TYPE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Reason for visit" htmlFor="reason" required error={errors.reason}>
        <input
          id="reason"
          type="text"
          value={values.reason}
          onChange={(e) => onFieldChange("reason", e.target.value)}
          placeholder="What brings you in?"
          className={bookingInputClass(Boolean(errors.reason))}
        />
      </FormField>
    </div>
  );
}
