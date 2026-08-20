import { PersonIcon, ShieldCheckIcon } from "../../../components/icons";
import { CARE_ITEMS } from "./care.data";
import { CareCard } from "./CareCard";

export function Care() {
  const leftItems = CARE_ITEMS.filter((item) => item.position === "left");
  const rightItems = CARE_ITEMS.filter((item) => item.position === "right");

  return (
    <section
      className="relative overflow-hidden px-6 pb-[25px] pt-[70px]"
      style={{ background: "radial-gradient(circle at 50% 55%, rgba(23,170,180,0.04), transparent 42%), #F9FCFD" }}
    >
      <div className="mx-auto flex w-fit animate-care-fade items-center gap-[7px] whitespace-nowrap rounded-full bg-[#E9F5F6] px-[15px] py-2 text-[12px] font-bold uppercase tracking-[0.8px] text-[#0B7F8B] motion-reduce:[animation-duration:0.01ms]">
        <ShieldCheckIcon size={14} />
        Our care
      </div>

      <h2 className="mx-auto mt-[18px] max-w-[1000px] animate-care-title text-center text-[clamp(42px,4vw,62px)] font-bold leading-[1.05] tracking-[-1.2px] text-text-primary motion-reduce:[animation-duration:0.01ms] mw-650:text-[32px]">
        Care for <span className="text-[#0B8F9B]">everyone.</span>
        <br />
        Treatment for everyday needs.
      </h2>

      <p className="mx-auto mt-[18px] max-w-[930px] animate-care-desc text-center text-[16px] leading-[1.65] text-[#566B81] motion-reduce:[animation-duration:0.01ms]">
        Whether you are bringing in your child, reporting a work injury, or need same-day help for a common
        illness—we are built for Portage families, workers, and employers alike.
      </p>

      <div className="relative mx-auto mt-7 grid max-w-[1380px] grid-cols-[minmax(320px,0.95fr)_minmax(420px,0.95fr)_minmax(320px,0.95fr)] items-center gap-[18px] mw-1100:grid-cols-3 mw-1100:gap-4 mw-850:grid-cols-2 mw-650:grid-cols-1">
        <div className="flex flex-col gap-[22px]">
          {leftItems.map((item) => (
            <CareCard key={item.id} item={item} />
          ))}
        </div>

        <div className="relative isolate flex min-h-[540px] animate-care-doctor-in items-end justify-center motion-reduce:[animation-duration:0.01ms] mw-850:order-[-1] mw-850:col-span-full">
          <div
            role="img"
            aria-label="Doctor facing forward, arms crossed"
            className="pointer-events-none absolute left-1/2 top-[52%] z-[1] flex h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 items-end justify-center rounded-full pb-5"
            style={{
              background:
                "radial-gradient(circle, rgba(15,164,175,0.10) 0%, rgba(15,164,175,0.06) 40%, rgba(15,164,175,0.02) 65%, transparent 78%)",
            }}
          >
            <PersonIcon size={180} strokeWidth={1.3} className="relative z-[5] text-[#0F8FA0] opacity-55" />
          </div>
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
