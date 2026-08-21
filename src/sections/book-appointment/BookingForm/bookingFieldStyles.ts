export function bookingInputClass(hasError: boolean): string {
  const borderColor = hasError ? "border-[#DC5962]" : "border-[#D6E0E7]";
  return `h-[52px] w-full rounded-[7px] border bg-white px-[14px] text-sm text-[#10264A] outline-none placeholder:text-[#98A9B8] focus:border-[#0B8995] focus:shadow-[0_0_0_3px_rgba(11,137,149,0.10)] ${borderColor}`;
}

export const bookingTextareaClass =
  "w-full rounded-[7px] border border-[#D6E0E7] bg-white px-[14px] py-3 font-sans text-sm text-[#10264A] outline-none placeholder:text-[#98A9B8] focus:border-[#0B8995] focus:shadow-[0_0_0_3px_rgba(11,137,149,0.10)] resize-y";
