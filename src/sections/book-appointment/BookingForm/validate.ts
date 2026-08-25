import type { BookingErrors, BookingFormValues, BookingRequiredField } from "./BookingForm.types";

const REQUIRED_FIELDS: BookingRequiredField[] = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "dob",
  "gender",
  "address",
  "zip",
  "visitType",
  "reason",
];

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export function validateBookingForm(values: BookingFormValues): BookingErrors {
  const errors: BookingErrors = {};

  REQUIRED_FIELDS.forEach((field) => {
    if (!values[field]) errors[field] = field;
  });

  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = "email";
  }

  if (!values.date) {
    errors.dateTime = "dateRequired";
  } else if (!values.time) {
    errors.dateTime = "timeRequired";
  }

  return errors;
}
