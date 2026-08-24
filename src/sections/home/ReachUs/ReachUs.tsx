import { MapPinIcon } from "../../../components/icons";
import { ReachUsDetails } from "./ReachUsDetails";
import { ReachUsMap } from "./ReachUsMap";

export function ReachUs() {
  return (
    <section
      id="contact"
      className="relative px-6 pb-[300px] pt-[90px]"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, rgba(13,145,155,0.05), transparent 42%), linear-gradient(180deg, #F8FBFC 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="text-center">
          <div className="mx-auto inline-flex w-fit animate-ru-badge items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-[#0B8490] motion-reduce:[animation-duration:0.01ms]">
            <MapPinIcon size={14} />
            Location
          </div>

          <h2 className="mt-5 animate-ru-heading text-[clamp(46px,4vw,64px)] font-bold leading-[1.05] tracking-[-1.2px] text-text-primary motion-reduce:[animation-duration:0.01ms] mw-650:text-[34px]">
            Reach Us in Portage
          </h2>

          <p className="mx-auto mt-[18px] max-w-[900px] animate-ru-desc text-[16px] leading-[1.65] text-text-secondary motion-reduce:[animation-duration:0.01ms]">
            Walk in, call ahead, or get directions—we are here in Portage with convenient parking and a welcoming
            clinic ready to help your family.
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
