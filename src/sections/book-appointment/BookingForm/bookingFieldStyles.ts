export function bookingInputClass(hasError: boolean): string {
  const borderColor = hasError ? "border-error" : "border-divider";
  return `h-[52px] w-full rounded-[7px] border bg-white px-[14px] text-sm text-text-primary outline-none placeholder:text-booking-text-placeholder focus:border-badge-text focus:shadow-booking-focus-ring ${borderColor}`;
}

export const bookingTextareaClass =
  "w-full rounded-[7px] border border-divider bg-white px-[14px] py-3 font-sans text-sm text-text-primary outline-none placeholder:text-booking-text-placeholder focus:border-badge-text focus:shadow-booking-focus-ring resize-y";
