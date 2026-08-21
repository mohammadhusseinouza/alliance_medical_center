export interface TimeSlotsProps {
  selectedDate: string | null;
  selectedTime: string | null;
  onSelectTime: (label: string) => void;
}

export interface TimeSlot {
  label: string;
  disabled: boolean;
  selected: boolean;
}
