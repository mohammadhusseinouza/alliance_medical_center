import type { ReferralFormField } from "./AppointmentReferral.types";

export const REFERRAL_FORM_FIELDS: ReferralFormField[] = [
  { id: "apptref-name", name: "name", translationKey: "name", type: "text" },
  { id: "apptref-email", name: "email", translationKey: "email", type: "email" },
  { id: "apptref-doctor-name", name: "doctorName", translationKey: "doctorName", type: "text" },
  { id: "apptref-disease", name: "disease", translationKey: "disease", type: "text" },
];
