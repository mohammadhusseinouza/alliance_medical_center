import applyForTreatmentImage from "../../../assets/home/apply-for-treatment.webp";
import { AppointmentForm } from "./AppointmentForm";

export function AppointmentReferral() {
  return (
    <section className="relative bg-[#F4F6F8] px-0 pb-[55px] pt-[100px] mw-700:px-[15px] mw-700:pb-10 mw-700:pt-[30px]">
      <div
        className="relative mx-auto min-h-[550px] w-[min(1660px,calc(100%-80px))] overflow-visible rounded-[2px] mw-700:min-h-[auto] mw-700:w-full mw-700:pt-[30px]"
        style={{ background: "linear-gradient(120deg, #0B5664 0%, #087B87 55%, #0C8F98 100%)" }}
      >
        <div className="absolute bottom-0 left-[55px] z-[4] flex h-[650px] w-[400px] items-end justify-center overflow-hidden mw-1100:w-[330px] mw-700:relative mw-700:bottom-auto mw-700:left-auto mw-700:mx-auto mw-700:mb-[-20px] mw-700:block mw-700:w-3/4 mw-700:max-w-[330px]">
          <img
            src={applyForTreatmentImage}
            alt="Doctor portrait, arms crossed"
            className="max-h-full max-w-full object-contain mw-700:block mw-700:h-full mw-700:w-full mw-700:object-cover"
            loading="lazy"
          />
        </div>

        <div className="ml-[470px] pb-[65px] pl-[60px] pr-[90px] pt-[82px] mw-1100:ml-[370px] mw-700:ml-0 mw-700:px-[25px] mw-700:pb-10 mw-700:pt-[45px]">
          <div className="inline-block rounded-[3px] bg-white/[0.15] px-[11px] py-[7px] text-[13px] font-medium uppercase tracking-[0.5px] text-white">
            Appointment
          </div>

          <h2 className="mt-[18px] text-[48px] font-normal leading-[1.1] text-white mw-1100:text-[40px]">
            Apply For Free Treatments
          </h2>

          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
