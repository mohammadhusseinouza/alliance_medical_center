export interface TimeSlotsProps {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectTime: (label: string) => void;
  /**
   * Presentation only. `"desktop"` (default) reproduces the existing
   * output exactly. `"mobile"` pins a 3-column grid at every width and a
   * ~214px scroll height (handoff 5a). Availability, selection, callbacks,
   * ARIA and copy are identical for both.
   */
  variant?: "desktop" | "mobile";
}

export interface TimeSlot {
  label: string;
  disabled: boolean;
  selected: boolean;
}
