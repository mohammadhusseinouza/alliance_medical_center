import { useTranslation } from "react-i18next";
import type { BookingStep } from "./BookingForm.types";

export interface StepIndicatorProps {
  step: BookingStep;
}

function stepStyles(active: boolean) {
  return {
    circle: active ? "bg-badge-text text-white" : "bg-booking-step-inactive-bg text-booking-text-muted-alt",
    label: active ? "text-badge-text" : "text-booking-text-muted-alt",
  };
}

export function StepIndicator({ step }: StepIndicatorProps) {
  const { t } = useTranslation();
  const step1 = stepStyles(step === 1);
  const step2 = stepStyles(step === 2);

  return (
    <div className="mt-6 flex items-center justify-center gap-3.5">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step1.circle}`}>1</div>
      <span className={`text-[13px] font-semibold ${step1.label}`}>{t("booking.steps.appointmentDetails")}</span>
      <div className="h-0.5 w-[60px] bg-booking-step-inactive-bg" />
      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step2.circle}`}>2</div>
      <span className={`text-[13px] font-semibold ${step2.label}`}>{t("booking.steps.insuranceMedical")}</span>
    </div>
  );
}
