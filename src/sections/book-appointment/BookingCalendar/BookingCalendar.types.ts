export interface BookingCalendarProps {
  month: Date;
  selectedDate: string | null;
  onSelectDate: (iso: string) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  /**
   * Presentation only. `"desktop"` (default) reproduces the existing
   * output exactly. `"mobile"` uses 34px month-nav buttons, 38px date-cell
   * height and a 3px date-grid gap (handoff 5a). Columns, availability,
   * month logic, selection/disabled states and ARIA are identical.
   */
  variant?: "desktop" | "mobile";
}

export interface CalendarCell {
  date: Date | null;
  iso: string;
  label: string;
  disabled: boolean;
  selected: boolean;
  available: boolean;
}
