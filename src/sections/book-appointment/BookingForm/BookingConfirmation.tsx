import { useTranslation } from "react-i18next";
import { CheckIcon } from "../../../components/icons";

export interface BookingConfirmationProps {
  onReset: () => void;
  /**
   * Optional confirmed-slot echo (e.g. "Thu, Sep 10 at 14:30"), shown
   * between the message and the reset button. The mobile presentation
   * passes it; the desktop presentation omits it, so desktop output is
   * unchanged.
   */
  slotSummary?: string;
}

export function BookingConfirmation({ onReset, slotSummary }: BookingConfirmationProps) {
  const { t } = useTranslation();

  return (
    <div className="px-2.5 py-[50px] text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-booking-badge-bg">
        <CheckIcon size={30} strokeWidth={2.4} className="text-badge-text" />
      </div>
      <h2 className="mt-6 font-heading text-2xl font-bold text-text-primary">{t("booking.confirmation.heading")}</h2>
      <p className="mx-auto mt-3 max-w-[420px] text-[15px] leading-[1.65] text-booking-text-body">
        {t("booking.confirmation.description")}
      </p>
      {slotSummary && <p className="mt-3 text-[14px] font-bold text-badge-text">{slotSummary}</p>}
      <button
        type="button"
        onClick={onReset}
        className="mt-7 min-h-[48px] rounded-[7px] border border-booking-button-secondary-border bg-white px-6 text-sm font-bold text-booking-button-secondary-text transition-colors duration-200 hover:bg-booking-button-secondary-hover-bg"
      >
        {t("booking.confirmation.bookAnother")}
      </button>
    </div>
  );
}
