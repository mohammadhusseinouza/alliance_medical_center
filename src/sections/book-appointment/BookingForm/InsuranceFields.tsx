import { useTranslation } from "react-i18next";
import { FormField } from "../../../components/ui/FormField";
import { bookingInputClass, bookingTextareaClass } from "./bookingFieldStyles";
import type { BookingFormValues } from "./BookingForm.types";

export interface InsuranceFieldsProps {
  values: BookingFormValues;
  onFieldChange: (field: keyof BookingFormValues, value: string) => void;
}

export function InsuranceFields({ values, onFieldChange }: InsuranceFieldsProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-7">
      <FormField label={t("booking.fields.insuranceProvider.label")} htmlFor="insuranceProvider">
        <input
          id="insuranceProvider"
          type="text"
          value={values.insuranceProvider}
          onChange={(e) => onFieldChange("insuranceProvider", e.target.value)}
          placeholder={t("booking.fields.insuranceProvider.placeholder")}
          className={bookingInputClass(false)}
        />
      </FormField>
      <FormField label={t("booking.fields.policyNumber.label")} htmlFor="policyNumber" className="mt-[18px]">
        <input
          id="policyNumber"
          type="text"
          value={values.policyNumber}
          onChange={(e) => onFieldChange("policyNumber", e.target.value)}
          placeholder={t("booking.fields.policyNumber.placeholder")}
          className={bookingInputClass(false)}
        />
      </FormField>
      <FormField label={t("booking.fields.medicalNotes.label")} htmlFor="medicalNotes" className="mt-[18px]">
        <textarea
          id="medicalNotes"
          value={values.medicalNotes}
          onChange={(e) => onFieldChange("medicalNotes", e.target.value)}
          placeholder={t("booking.fields.medicalNotes.placeholder")}
          rows={4}
          className={bookingTextareaClass}
        />
      </FormField>
    </div>
  );
}
