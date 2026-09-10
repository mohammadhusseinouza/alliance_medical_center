import { useTranslation } from "react-i18next";
import type { BookingStep } from "./BookingForm.types";

export interface MobileStepIndicatorProps {
  step: BookingStep;
  onStepChange: (step: BookingStep) => void;
}

const ROWS: { n: BookingStep; labelKey: string }[] = [
  { n: 1, labelKey: "booking.steps.appointmentDetails" },
  { n: 2, labelKey: "booking.steps.insuranceMedical" },
];

/**
 * Mobile step indicator (handoff 5a): two stacked rows instead of the
 * desktop's single horizontal row with a connector line. Each row is a
 * SINGLE `<button>` (32px number circle + label) — one interactive control
 * per step, with a large touch target. Step switching goes through the
 * shared `useBookingForm` state, so entered values are preserved. The
 * desktop `StepIndicator.tsx` is untouched.
 */
export function MobileStepIndicator({ step, onStepChange }: MobileStepIndicatorProps) {
  const { t } = useTranslation();

  return (
    <div className="mt-5 flex flex-col gap-2.5">
      {ROWS.map((row) => {
        const active = step === row.n;
        return (
          <button
            key={row.n}
            type="button"
            onClick={() => onStepChange(row.n)}
            aria-current={active ? "step" : undefined}
            className="flex w-full items-center gap-3 rounded-lg text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus-ring"
          >
            <span
              aria-hidden="true"
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                active ? "bg-badge-text text-white" : "bg-booking-step-inactive-bg text-booking-text-muted-alt"
              }`}
            >
              {row.n}
            </span>
            <span className={`text-[13px] font-semibold ${active ? "text-badge-text" : "text-booking-text-muted-alt"}`}>
              {t(row.labelKey)}
            </span>
          </button>
        );
      })}
    </div>
  );
}
