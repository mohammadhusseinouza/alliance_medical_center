export interface ReferralFormValues {
  name: string;
  email: string;
  doctorName: string;
  disease: string;
}

export type ReferralFieldTranslationKey = "name" | "email" | "doctorName" | "disease";

export interface ReferralFormField {
  id: string;
  name: keyof ReferralFormValues;
  /** Key suffix under the `appointmentReferral.fields.*` translation resource domain. */
  translationKey: ReferralFieldTranslationKey;
  type: "text" | "email";
}
