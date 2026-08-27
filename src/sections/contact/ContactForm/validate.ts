import type { ContactFormErrors, ContactFormValues } from "./ContactForm.types";

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;
const PHONE_ALLOWED_CHARS = /^[0-9+()\-.\s]+$/;
const PHONE_MIN_DIGITS = 7;

function isValidPhone(trimmedPhone: string): boolean {
  if (!PHONE_ALLOWED_CHARS.test(trimmedPhone)) return false;
  const digitCount = (trimmedPhone.match(/\d/g) ?? []).length;
  return digitCount >= PHONE_MIN_DIGITS;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName.trim()) errors.firstName = "firstName";
  if (!values.lastName.trim()) errors.lastName = "lastName";

  const email = values.email.trim();
  if (!email) {
    errors.email = "emailRequired";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "emailInvalid";
  }

  const phone = values.phone.trim();
  if (phone && !isValidPhone(phone)) {
    errors.phone = "phoneInvalid";
  }

  if (!values.subject.trim()) errors.subject = "subject";
  if (!values.message.trim()) errors.message = "message";

  return errors;
}
