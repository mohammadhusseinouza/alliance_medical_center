import type { BookingFormValues } from "./BookingForm.types";

export const EMPTY_BOOKING_VALUES: BookingFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  address: "",
  zip: "",
  date: null,
  time: null,
  visitType: "",
  reason: "",
  insuranceProvider: "",
  policyNumber: "",
  medicalNotes: "",
};

export const GENDER_OPTIONS = [
  { value: "female", label: "Female" },
  { value: "male", label: "Male" },
  { value: "other", label: "Other" },
  { value: "prefer-not", label: "Prefer not to say" },
];

export const VISIT_TYPE_OPTIONS = [
  { value: "urgent", label: "Urgent Care" },
  { value: "family", label: "Family Medicine / Wellness" },
  { value: "weightloss", label: "Weight Loss" },
  { value: "physical", label: "Physical Exam" },
  { value: "followup", label: "Follow-up Visit" },
];

export const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
