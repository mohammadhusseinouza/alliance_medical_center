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
  return (
    <div className="box-border h-[348px] w-full max-w-full overflow-hidden rounded-[9px] border border-[#DCE5EB] bg-white p-4 mw-1100:h-auto">
      <div className="mb-3 text-[14.5px] font-bold text-[#10264A]">Available times</div>

      {!selectedDate && (
        <div className="py-[30px] text-center text-[13.5px] text-[#8A97A3]">Select a date to see available times.</div>
      )}

      {selectedDate && (
        <div className="grid max-h-[290px] grid-cols-4 gap-2 overflow-y-auto [scrollbar-color:#0B8995_#EDF6FB] [scrollbar-width:thin] mw-700:grid-cols-3 mw-420:grid-cols-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-[#0B8995] [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-track]:bg-[#EDF6FB]">
          {buildTimeSlots(selectedTime).map((slot) => {
            const stateClass = slot.selected
              ? "border-[#2E86EA] bg-[#2E86EA] text-white cursor-pointer"
              : slot.disabled
                ? "border-[#D7E1E7] bg-white text-[#263F57] opacity-45 cursor-not-allowed"
                : "border-[#D7E1E7] bg-white text-[#263F57] cursor-pointer hover:border-[#2E86EA] hover:bg-[#F1F7FF]";
            return (
              <button
                key={slot.label}
                type="button"
                disabled={slot.disabled}
                aria-selected={slot.selected}
                aria-label={`${slot.label}${slot.disabled ? " (unavailable)" : ""}`}
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
