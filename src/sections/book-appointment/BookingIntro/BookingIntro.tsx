import { useTranslation } from "react-i18next";

export function BookingIntro() {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-[1000px] px-6 pt-[54px] text-center">
      <span className="inline-block rounded-[20px] bg-[#EDF6FB] px-4 py-[7px] text-[12.5px] font-bold tracking-[0.6px] text-[#0B8995]">
        {t("booking.intro.eyebrow")}
      </span>
      <h1 className="mt-4 text-[clamp(32px,4vw,44px)] font-bold leading-[1.15] text-[#10264A]">
        {t("booking.intro.heading")}
      </h1>
      <p className="mx-auto mt-3.5 max-w-[560px] text-[16px] leading-[1.65] text-[#566D82]">
        {t("booking.intro.description")}
      </p>
    </div>
  );
}
