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
  { value: "female", translationKey: "female" },
  { value: "male", translationKey: "male" },
  { value: "other", translationKey: "other" },
  { value: "prefer-not", translationKey: "preferNot" },
];

export const VISIT_TYPE_OPTIONS = [
  { value: "urgent", translationKey: "urgent" },
  { value: "family", translationKey: "family" },
  { value: "weightloss", translationKey: "weightloss" },
  { value: "physical", translationKey: "physical" },
  { value: "followup", translationKey: "followup" },
];
