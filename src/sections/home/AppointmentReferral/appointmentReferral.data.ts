import type { ReferralFormField } from "./AppointmentReferral.types";

export const REFERRAL_FORM_FIELDS: ReferralFormField[] = [
  { id: "apptref-name", name: "name", label: "Your Name", placeholder: "Your Name", type: "text" },
  { id: "apptref-email", name: "email", label: "Your Email", placeholder: "Your Email", type: "email" },
  {
    id: "apptref-doctor-name",
    name: "doctorName",
    label: "Your Doctor Name",
    placeholder: "Your Doctor Name",
    type: "text",
  },
  {
    id: "apptref-disease",
    name: "disease",
    label: "Your Disease Name",
    placeholder: "Your Disease Name",
    type: "text",
  },
];

export const REFERRAL_SUCCESS_MESSAGE = "Thanks — we'll be in touch shortly.";
