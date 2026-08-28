import { useTranslation } from "react-i18next";
import careDoctorImage from "../../../assets/home/care-doctor.webp";
import { ShieldCheckIcon } from "../../../components/icons";
import { CARE_ITEMS } from "./care.data";
import { CareCard } from "./CareCard";

export function Care() {
  const { t } = useTranslation();
  const leftItems = CARE_ITEMS.filter((item) => item.position === "left");
  const rightItems = CARE_ITEMS.filter((item) => item.position === "right");

  return (
    <section
      className="relative overflow-hidden px-6 pb-[25px] pt-[70px]"
      style={{ background: "radial-gradient(circle at 50% 55%, var(--care-bg-glow), transparent 42%), var(--care-bg)" }}
    >
      <div className="mx-auto flex w-fit animate-care-fade items-center gap-[7px] whitespace-nowrap rounded-full bg-care-eyebrow-bg px-[15px] py-2 text-[12px] font-bold uppercase tracking-[0.8px] text-care-eyebrow-text motion-reduce:[animation-duration:0.01ms]">
        <ShieldCheckIcon size={14} />
        {t("care.eyebrow")}
      </div>

      <h2 className="mx-auto mt-[18px] max-w-[1000px] animate-care-title font-heading text-center text-[clamp(42px,4vw,62px)] font-bold leading-[1.05] tracking-[-1.2px] text-text-primary motion-reduce:[animation-duration:0.01ms] mw-650:text-[32px]">
        {t("care.headingLine1Before")} <span className="text-care-highlight">{t("care.headingHighlight")}</span>
        <br />
        {t("care.headingLine2")}
      </h2>

      <p className="mx-auto mt-[18px] max-w-[930px] animate-care-desc text-center text-[16px] leading-[1.65] text-care-body motion-reduce:[animation-duration:0.01ms]">
        {t("care.description")}
      </p>

      <div className="relative mx-auto mt-7 grid max-w-[1380px] grid-cols-[minmax(320px,0.95fr)_minmax(420px,0.95fr)_minmax(320px,0.95fr)] items-center gap-[18px] mw-1100:grid-cols-3 mw-1100:gap-4 mw-850:grid-cols-2 mw-650:grid-cols-1">
        <div className="flex flex-col gap-[22px]">
          {leftItems.map((item) => (
            <CareCard key={item.id} item={item} />
          ))}
        </div>

        <div className="relative isolate flex min-h-[540px] animate-care-doctor-in items-end justify-center motion-reduce:[animation-duration:0.01ms] mw-850:order-[-1] mw-850:col-span-full">
          <img
            src={careDoctorImage}
            alt={t("care.imageAlt")}
            className="h-[420px] w-auto max-w-full -translate-y-[40px] object-contain"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col gap-[22px]">
          {rightItems.map((item) => (
            <CareCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
