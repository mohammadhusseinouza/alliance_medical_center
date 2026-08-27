export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type ContactValidationCode =
  | "firstName"
  | "lastName"
  | "emailRequired"
  | "emailInvalid"
  | "phoneInvalid"
  | "subject"
  | "message";

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, ContactValidationCode>>;
