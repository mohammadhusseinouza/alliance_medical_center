import { FormField } from "../../../components/ui/FormField";
import { bookingInputClass, bookingTextareaClass } from "./bookingFieldStyles";
import type { BookingFormValues } from "./BookingForm.types";

export interface InsuranceFieldsProps {
  values: BookingFormValues;
  onFieldChange: (field: keyof BookingFormValues, value: string) => void;
}

export function InsuranceFields({ values, onFieldChange }: InsuranceFieldsProps) {
  return (
    <div className="mt-7">
      <FormField label="Insurance provider" htmlFor="insuranceProvider">
        <input
          id="insuranceProvider"
          type="text"
          value={values.insuranceProvider}
          onChange={(e) => onFieldChange("insuranceProvider", e.target.value)}
          placeholder="e.g. Blue Cross Blue Shield"
          className={bookingInputClass(false)}
        />
      </FormField>
      <FormField label="Policy number" htmlFor="policyNumber" className="mt-[18px]">
        <input
          id="policyNumber"
          type="text"
          value={values.policyNumber}
          onChange={(e) => onFieldChange("policyNumber", e.target.value)}
          placeholder="Policy / member ID"
          className={bookingInputClass(false)}
        />
      </FormField>
      <FormField label="Medical notes / conditions" htmlFor="medicalNotes" className="mt-[18px]">
        <textarea
          id="medicalNotes"
          value={values.medicalNotes}
          onChange={(e) => onFieldChange("medicalNotes", e.target.value)}
          placeholder="Allergies, current medications, relevant history..."
          rows={4}
          className={bookingTextareaClass}
        />
      </FormField>
    </div>
  );
}
