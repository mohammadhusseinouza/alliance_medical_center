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
  return (
    <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-[18px] mw-700:grid-cols-1">
      <FormField label="First name" htmlFor="firstName" required error={errors.firstName}>
        <input
          id="firstName"
          type="text"
          value={values.firstName}
          onChange={(e) => onFieldChange("firstName", e.target.value)}
          placeholder="First name"
          className={bookingInputClass(Boolean(errors.firstName))}
        />
      </FormField>
      <FormField label="Last name" htmlFor="lastName" required error={errors.lastName}>
        <input
          id="lastName"
          type="text"
          value={values.lastName}
          onChange={(e) => onFieldChange("lastName", e.target.value)}
          placeholder="Last name"
          className={bookingInputClass(Boolean(errors.lastName))}
        />
      </FormField>
      <FormField label="Email" htmlFor="email" required error={errors.email}>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => onFieldChange("email", e.target.value)}
          placeholder="your-email@example.com"
          className={bookingInputClass(Boolean(errors.email))}
        />
      </FormField>
      <FormField label="Phone" htmlFor="phone" required error={errors.phone}>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => onFieldChange("phone", e.target.value)}
          placeholder="Enter phone number"
          className={bookingInputClass(Boolean(errors.phone))}
        />
      </FormField>
      <FormField label="Date of birth" htmlFor="dob" required error={errors.dob}>
        <input
          id="dob"
          type="date"
          value={values.dob}
          onChange={(e) => onFieldChange("dob", e.target.value)}
          className={bookingInputClass(Boolean(errors.dob))}
        />
      </FormField>
      <FormField label="Gender" htmlFor="gender" required error={errors.gender}>
        <select
          id="gender"
          value={values.gender}
          onChange={(e) => onFieldChange("gender", e.target.value)}
          className={bookingInputClass(Boolean(errors.gender))}
        >
          <option value="">Select gender</option>
          {GENDER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormField>
      <FormField label="Street address" htmlFor="address" required error={errors.address}>
        <input
          id="address"
          type="text"
          value={values.address}
          onChange={(e) => onFieldChange("address", e.target.value)}
          placeholder="123 Main Street"
          className={bookingInputClass(Boolean(errors.address))}
        />
      </FormField>
      <FormField label="ZIP" htmlFor="zip" required error={errors.zip}>
        <input
          id="zip"
          type="text"
          value={values.zip}
          onChange={(e) => onFieldChange("zip", e.target.value)}
          placeholder="Enter ZIP code"
          className={bookingInputClass(Boolean(errors.zip))}
        />
      </FormField>
    </div>
  );
}
