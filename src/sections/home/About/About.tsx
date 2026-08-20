import { ArrowRightIcon, HeartPulseIcon } from "../../../components/icons";
import { ABOUT_FEATURE, ABOUT_STATS } from "./about.data";
import { AboutStatRow } from "./AboutStatRow";

export function About() {
  return (
    <section className="relative w-full" style={{ background: "linear-gradient(180deg, #F8FBFC 0%, #F4F8FA 100%)" }}>
      <div className="grid w-full min-h-[520px] grid-cols-[minmax(430px,38%)_minmax(520px,39%)_minmax(300px,23%)] overflow-hidden bg-white mw-1100:min-h-[auto] mw-1100:grid-cols-2 mw-700:w-[calc(100%-32px)] mw-700:grid-cols-1">
        <div
          className="flex animate-about-fade-l flex-col justify-center px-[clamp(40px,4.5vw,78px)] py-[50px] motion-reduce:[animation-duration:0.01ms] mw-700:px-6 mw-700:py-[30px]"
          style={{ background: "linear-gradient(110deg, #FFFFFF 0%, #FBFCFD 100%)" }}
        >
          <div className="w-fit rounded bg-[#E3F3F5] px-[11px] py-[7px] text-[12px] font-bold uppercase tracking-[0.5px] text-[#147B8B]">
            About Us
          </div>

          <h2 className="mt-[22px] max-w-[540px] text-[clamp(43px,3.5vw,62px)] font-bold leading-[1.03] tracking-[-1.5px] text-text-primary">
            Complete Care,<br />All in One Place
          </h2>

          <p className="mt-[25px] max-w-[520px] text-[16px] leading-[1.75] text-[#53677C]">
            From urgent care and family medicine to diagnostics and preventive services, AccessNow Care offers
            coordinated care designed around your everyday health needs.
          </p>

          <div className="mt-9 flex items-start gap-5">
            <div
              className="flex h-[74px] w-[74px] flex-shrink-0 items-center justify-center rounded-full text-white shadow-[0_7px_18px_rgba(8,115,130,0.15)]"
              style={{ background: "linear-gradient(145deg, #078A94, #0B6C77)" }}
            >
              <HeartPulseIcon size={30} strokeWidth={1.8} />
            </div>
            <div>
              <h3 className="text-[20px] font-bold text-[#10223E]">{ABOUT_FEATURE.title}</h3>
              <p className="mt-[5px] max-w-[340px] text-[14px] leading-[1.6] text-[#627488]">
                {ABOUT_FEATURE.description}
              </p>
            </div>
          </div>

          <a
            href="#"
            className="group mt-9 inline-flex h-[54px] w-fit min-w-[230px] items-center justify-center gap-[18px] rounded-md px-[26px] text-[14px] font-bold uppercase tracking-[0.3px] text-white no-underline [transition:transform_220ms_ease,box-shadow_220ms_ease,background-color_220ms_ease] hover:-translate-y-0.5 hover:shadow-[0_9px_20px_rgba(9,120,135,0.18)]"
            style={{ background: "linear-gradient(90deg, #087E8A, #068F98)" }}
          >
            Explore Services
            <ArrowRightIcon
              size={16}
              className="transition-transform duration-[220ms] ease group-hover:translate-x-1"
            />
          </a>
        </div>

        <div
          role="img"
          aria-label="Doctor consulting with a patient at AccessNow Care"
          className="relative h-full min-h-[520px] w-full animate-about-fade-img [transition:transform_600ms_ease] motion-reduce:duration-[0.01ms] motion-reduce:[animation-duration:0.01ms] mw-1100:min-h-[420px] mw-700:min-h-[360px]"
          style={{ background: "linear-gradient(135deg, #0B5664 0%, #087B87 55%, #0C8F98 100%)" }}
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[30%] max-h-[220px] w-[30%] max-w-[220px] text-white opacity-[0.16]">
              <HeartPulseIcon strokeWidth={1.2} className="h-full w-full" />
            </div>
          </div>
        </div>

        <div
          className="flex h-full min-h-[520px] animate-about-fade-r flex-col justify-center p-11 text-white motion-reduce:[animation-duration:0.01ms] mw-1100:grid mw-1100:min-h-[auto] mw-1100:grid-cols-3 mw-1100:px-[30px] mw-1100:py-[40px] mw-1100:col-span-full mw-700:grid-cols-1"
          style={{ background: "linear-gradient(135deg, #103F48 0%, #124954 55%, #0D3941 100%)" }}
        >
          {ABOUT_STATS.map((stat, index) => (
            <AboutStatRow key={stat.id} stat={stat} showDivider={index > 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
