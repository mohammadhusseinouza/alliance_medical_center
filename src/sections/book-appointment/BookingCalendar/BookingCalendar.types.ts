export interface BookingCalendarProps {
  month: Date;
  selectedDate: string | null;
  onSelectDate: (iso: string) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export interface CalendarCell {
  date: Date | null;
  iso: string;
  label: string;
  disabled: boolean;
  selected: boolean;
  available: boolean;
}
