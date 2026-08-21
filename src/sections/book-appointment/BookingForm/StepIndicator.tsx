import type { BookingStep } from "./BookingForm.types";

export interface StepIndicatorProps {
  step: BookingStep;
}

function stepStyles(active: boolean) {
  return {
    circle: active ? "bg-[#0B8995] text-white" : "bg-[#E8EDF1] text-[#687B8D]",
    label: active ? "text-[#0B8995]" : "text-[#687B8D]",
  };
}

export function StepIndicator({ step }: StepIndicatorProps) {
  const step1 = stepStyles(step === 1);
  const step2 = stepStyles(step === 2);

  return (
    <div className="mt-6 flex items-center justify-center gap-3.5">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step1.circle}`}>1</div>
      <span className={`text-[13px] font-semibold ${step1.label}`}>Appointment Details</span>
      <div className="h-0.5 w-[60px] bg-[#E8EDF1]" />
      <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step2.circle}`}>2</div>
      <span className={`text-[13px] font-semibold ${step2.label}`}>Insurance &amp; Medical Info</span>
    </div>
  );
}
