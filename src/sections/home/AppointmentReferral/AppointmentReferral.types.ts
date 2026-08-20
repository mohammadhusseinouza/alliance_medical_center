export interface ReferralFormValues {
  name: string;
  email: string;
  doctorName: string;
  disease: string;
}

export interface ReferralFormField {
  id: string;
  name: keyof ReferralFormValues;
  label: string;
  placeholder: string;
  type: "text" | "email";
}
