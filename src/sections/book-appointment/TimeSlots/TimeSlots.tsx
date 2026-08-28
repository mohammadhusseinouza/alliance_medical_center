import { useTranslation } from "react-i18next";
import type { TimeSlot, TimeSlotsProps } from "./TimeSlots.types";

function buildTimeSlots(selectedTime: string | null): TimeSlot[] {
  const labels: string[] = [];
  for (let h = 9; h < 20; h += 1) {
    for (let m = 0; m < 60; m += 15) {
      labels.push(`${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`);
    }
  }
  return labels.map((label, idx) => ({
    label,
    disabled: idx % 5 === 0,
    selected: label === selectedTime,
  }));
}

export function TimeSlots({ selectedDate, selectedTime, onSelectTime }: TimeSlotsProps) {
  const { t } = useTranslation();

  return (
    <div className="box-border h-[348px] w-full max-w-full overflow-hidden rounded-[9px] border border-booking-border-panel bg-white p-4 mw-1100:h-auto">
      <div className="mb-3 text-[14.5px] font-bold text-text-primary">{t("calendar.availableTimes")}</div>

      {!selectedDate && (
        <div className="py-[30px] text-center text-[13.5px] text-text-muted">{t("calendar.selectDatePrompt")}</div>
      )}

      {selectedDate && (
        <div className="grid max-h-[290px] grid-cols-4 gap-2 overflow-y-auto [scrollbar-color:theme(colors.badge.text)_theme(colors.booking.badge-bg)] [scrollbar-width:thin] mw-700:grid-cols-3 mw-420:grid-cols-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-badge-text [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-track]:bg-booking-badge-bg">
          {buildTimeSlots(selectedTime).map((slot) => {
            const stateClass = slot.selected
              ? "border-booking-blue bg-booking-blue text-white cursor-pointer"
              : slot.disabled
                ? "border-booking-time-border bg-white text-booking-time-text opacity-45 cursor-not-allowed"
                : "border-booking-time-border bg-white text-booking-time-text cursor-pointer hover:border-booking-blue hover:bg-booking-time-hover-bg";
            return (
              <button
                key={slot.label}
                type="button"
                disabled={slot.disabled}
                aria-selected={slot.selected}
                aria-label={`${slot.label}${slot.disabled ? ` ${t("calendar.unavailableSuffix")}` : ""}`}
                onClick={slot.disabled ? undefined : () => onSelectTime(slot.label)}
                className={`min-h-[38px] rounded-md border px-2 py-[7px] text-[12px] transition-colors duration-150 ${stateClass}`}
              >
                {slot.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
