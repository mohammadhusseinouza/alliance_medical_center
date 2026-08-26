export type DiagnosticServiceTranslationKey =
  | "bloodWork"
  | "hormoneTesting"
  | "infectiousDisease"
  | "cancerMarkers"
  | "allergyTesting"
  | "digitalXrays"
  | "ultrasound"
  | "ctScans"
  | "mri"
  | "mammography"
  | "ekgEcg"
  | "stressTesting"
  | "echocardiogram"
  | "holterMonitoring";

export interface DiagnosticServiceItem {
  id: string;
  translationKey: DiagnosticServiceTranslationKey;
}

export const DIAGNOSTIC_SERVICE_ITEMS: DiagnosticServiceItem[] = [
  { id: "blood-work", translationKey: "bloodWork" },
  { id: "hormone-testing", translationKey: "hormoneTesting" },
  { id: "infectious-disease-testing", translationKey: "infectiousDisease" },
  { id: "cancer-markers", translationKey: "cancerMarkers" },
  { id: "allergy-testing", translationKey: "allergyTesting" },
  { id: "digital-xrays", translationKey: "digitalXrays" },
  { id: "ultrasound", translationKey: "ultrasound" },
  { id: "ct-scans", translationKey: "ctScans" },
  { id: "mri", translationKey: "mri" },
  { id: "mammography", translationKey: "mammography" },
  { id: "ekg-ecg", translationKey: "ekgEcg" },
  { id: "stress-testing", translationKey: "stressTesting" },
  { id: "echocardiogram", translationKey: "echocardiogram" },
  { id: "holter-monitoring", translationKey: "holterMonitoring" },
];
