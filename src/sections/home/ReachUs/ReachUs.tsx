import { useTranslation } from "react-i18next";
import { MapPinIcon } from "../../../components/icons";
import { ReachUsDetails } from "./ReachUsDetails";
import { ReachUsMap } from "./ReachUsMap";

export function ReachUs() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative px-6 pb-[90px] pt-[90px]"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, var(--reach-us-bg-glow), transparent 42%), linear-gradient(180deg, var(--surface-pale-1) 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <div className="mx-auto inline-flex w-fit animate-ru-badge items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-teal-marker motion-reduce:[animation-duration:0.01ms]">
            <MapPinIcon size={14} />
            {t("reachUs.eyebrow")}
          </div>

          <h2 className="mt-5 animate-ru-heading font-heading text-[clamp(46px,4vw,64px)] font-bold leading-[1.05] tracking-[-1.2px] text-text-primary motion-reduce:[animation-duration:0.01ms] mw-650:text-[34px]">
            {t("reachUs.heading")}
          </h2>

          <p className="mx-auto mt-[18px] max-w-[900px] animate-ru-desc text-[16px] leading-[1.65] text-text-secondary motion-reduce:[animation-duration:0.01ms]">
            {t("reachUs.description")}
          </p>
        </div>

        <div className="mt-12 grid max-w-[1450px] grid-cols-[minmax(0,1.55fr)_minmax(380px,1fr)] items-stretch gap-[22px] mw-1100:grid-cols-[1.2fr_0.8fr] mw-850:grid-cols-1">
          <ReachUsMap />
          <ReachUsDetails />
        </div>
      </div>
    </section>
  );
}
