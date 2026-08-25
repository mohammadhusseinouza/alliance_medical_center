export interface BookingFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
  zip: string;
  date: string | null;
  time: string | null;
  visitType: string;
  reason: string;
  insuranceProvider: string;
  policyNumber: string;
  medicalNotes: string;
}

export type BookingRequiredField =
  | "firstName"
  | "lastName"
  | "email"
  | "phone"
  | "dob"
  | "gender"
  | "address"
  | "zip"
  | "visitType"
  | "reason";

export type BookingErrorCode = BookingRequiredField | "dateRequired" | "timeRequired";

export type BookingErrors = Partial<Record<BookingRequiredField, BookingErrorCode>> & {
  dateTime?: Extract<BookingErrorCode, "dateRequired" | "timeRequired">;
};

export type BookingStep = 1 | 2;
