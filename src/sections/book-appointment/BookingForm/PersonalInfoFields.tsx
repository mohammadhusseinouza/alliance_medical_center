import { useTranslation } from "react-i18next";
import { FormField } from "../../../components/ui/FormField";
import { GENDER_OPTIONS } from "./bookingForm.data";
import { bookingInputClass } from "./bookingFieldStyles";
import type { BookingErrors, BookingFormValues } from "./BookingForm.types";

export interface PersonalInfoFieldsProps {
  values: BookingFormValues;
  errors: BookingErrors;
  onFieldChange: (field: keyof BookingFormValues, value: string) => void;
}

export function PersonalInfoFields({ values, errors, onFieldChange }: PersonalInfoFieldsProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-[18px] mw-700:grid-cols-1">
      <FormField
        label={t("booking.fields.firstName.label")}
        htmlFor="firstName"
        required
        error={errors.firstName ? t(`validation.${errors.firstName}`) : undefined}
      >
        <input
          id="firstName"
          type="text"
          value={values.firstName}
          onChange={(e) => onFieldChange("firstName", e.target.value)}
          placeholder={t("booking.fields.firstName.placeholder")}
          className={bookingInputClass(Boolean(errors.firstName))}
        />
      </FormField>
      <FormField
        label={t("booking.fields.lastName.label")}
        htmlFor="lastName"
        required
        error={errors.lastName ? t(`validation.${errors.lastName}`) : undefined}
      >
        <input
          id="lastName"
          type="text"
          value={values.lastName}
          onChange={(e) => onFieldChange("lastName", e.target.value)}
          placeholder={t("booking.fields.lastName.placeholder")}
          className={bookingInputClass(Boolean(errors.lastName))}
        />
      </FormField>
      <FormField
        label={t("booking.fields.email.label")}
        htmlFor="email"
        required
        error={errors.email ? t(`validation.${errors.email}`) : undefined}
      >
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => onFieldChange("email", e.target.value)}
          placeholder={t("booking.fields.email.placeholder")}
          className={bookingInputClass(Boolean(errors.email))}
        />
      </FormField>
      <FormField
        label={t("booking.fields.phone.label")}
        htmlFor="phone"
        required
        error={errors.phone ? t(`validation.${errors.phone}`) : undefined}
      >
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => onFieldChange("phone", e.target.value)}
          placeholder={t("booking.fields.phone.placeholder")}
          className={bookingInputClass(Boolean(errors.phone))}
        />
      </FormField>
      <FormField
        label={t("booking.fields.dob.label")}
        htmlFor="dob"
        required
        error={errors.dob ? t(`validation.${errors.dob}`) : undefined}
      >
        <input
          id="dob"
          type="date"
          value={values.dob}
          onChange={(e) => onFieldChange("dob", e.target.value)}
          className={bookingInputClass(Boolean(errors.dob))}
        />
      </FormField>
      <FormField
        label={t("booking.fields.gender.label")}
        htmlFor="gender"
        required
        error={errors.gender ? t(`validation.${errors.gender}`) : undefined}
      >
        <select
          id="gender"
          value={values.gender}
          onChange={(e) => onFieldChange("gender", e.target.value)}
          className={bookingInputClass(Boolean(errors.gender))}
        >
          <option value="">{t("booking.fields.gender.placeholder")}</option>
          {GENDER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {t(`booking.genderOptions.${option.translationKey}`)}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label={t("booking.fields.address.label")}
        htmlFor="address"
        required
        error={errors.address ? t(`validation.${errors.address}`) : undefined}
      >
        <input
          id="address"
          type="text"
          value={values.address}
          onChange={(e) => onFieldChange("address", e.target.value)}
          placeholder={t("booking.fields.address.placeholder")}
          className={bookingInputClass(Boolean(errors.address))}
        />
      </FormField>
      <FormField
        label={t("booking.fields.zip.label")}
        htmlFor="zip"
        required
        error={errors.zip ? t(`validation.${errors.zip}`) : undefined}
      >
        <input
          id="zip"
          type="text"
          value={values.zip}
          onChange={(e) => onFieldChange("zip", e.target.value)}
          placeholder={t("booking.fields.zip.placeholder")}
          className={bookingInputClass(Boolean(errors.zip))}
        />
      </FormField>
    </div>
  );
}
