/**
 * Shared field styling for the Contact form, consumed by both the desktop
 * `ContactForm` and the mobile `MobileContactForm` so the two presentations
 * stay visually identical at the control level. Values are unchanged from
 * the original inline helpers in `ContactForm.tsx`.
 */
export function contactInputClass(hasError: boolean): string {
  const borderColor = hasError ? "border-error" : "border-divider";
  return `h-[52px] w-full rounded-[7px] border bg-white px-[14px] text-sm text-text-primary outline-none placeholder:text-booking-text-placeholder focus:border-badge-text focus:shadow-booking-focus-ring ${borderColor}`;
}

export function contactTextareaClass(hasError: boolean): string {
  const borderColor = hasError ? "border-error" : "border-divider";
  return `w-full rounded-[7px] border bg-white px-[14px] py-3 font-sans text-sm text-text-primary outline-none placeholder:text-booking-text-placeholder focus:border-badge-text focus:shadow-booking-focus-ring resize-y ${borderColor}`;
}
