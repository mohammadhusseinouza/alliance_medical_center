import { CheckIcon } from "../../../components/icons";

export interface BookingConfirmationProps {
  onReset: () => void;
}

export function BookingConfirmation({ onReset }: BookingConfirmationProps) {
  return (
    <div className="px-2.5 py-[50px] text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EDF6FB]">
        <CheckIcon size={30} strokeWidth={2.4} className="text-[#0B8995]" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-[#10264A]">Appointment Request Received</h2>
      <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-[1.65] text-[#566D82]">
        Thank you. Our team will contact you if any additional information is needed.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-7 min-h-[48px] rounded-[7px] border border-[#BFCBD5] bg-white px-6 text-sm font-bold text-[#36526B] transition-colors duration-200 hover:bg-[#F5F9FC]"
      >
        Book Another Appointment
      </button>
    </div>
  );
}
