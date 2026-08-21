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

const REQUIRED_MESSAGES: Record<BookingRequiredField, string> = {
  firstName: "Please enter your first name.",
  lastName: "Please enter your last name.",
  email: "Please enter a valid email.",
  phone: "Please enter your phone number.",
  dob: "Please enter your date of birth.",
  gender: "Please select a gender.",
  address: "Please enter your street address.",
  zip: "Please enter your ZIP code.",
  visitType: "Please select a visit type.",
  reason: "Please tell us the reason for your visit.",
};

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export function validateBookingForm(values: BookingFormValues): BookingErrors {
  const errors: BookingErrors = {};

  REQUIRED_FIELDS.forEach((field) => {
    if (!values[field]) errors[field] = REQUIRED_MESSAGES[field];
  });

  if (values.email && !EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.date) {
    errors.dateTime = "Please choose an available date.";
  } else if (!values.time) {
    errors.dateTime = "Please select an appointment time.";
  }

  return errors;
}
