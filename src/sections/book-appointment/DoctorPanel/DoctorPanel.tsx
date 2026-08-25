import { useTranslation } from "react-i18next";
import doctorPhoto from "../../../assets/book-appointment/doctor.webp";

const maskImage =
  "linear-gradient(to right, transparent 0, #000 9%, #000 91%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 6%, #000 95%, transparent 100%)";

export function DoctorPanel() {
  const { t } = useTranslation();

  return (
    <div className="sticky top-[130px] mw-900:static mw-900:mx-auto mw-900:mb-2 mw-900:w-[min(340px,80%)] mw-700:w-[min(320px,85vw)]">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-x-0 top-[10%] bottom-[5%] -z-10"
          style={{ background: "radial-gradient(circle, rgba(48,133,230,0.08), transparent 68%)" }}
        />
        <div
          className="mx-auto h-[760px] w-[min(560px,100%)] mw-1100:h-[560px] mw-1100:w-[min(400px,100%)] mw-900:h-[460px] mw-900:w-full mw-700:h-[380px]"
          style={{
            filter: "brightness(1.07) contrast(1.02)",
            WebkitMaskImage: maskImage,
            maskImage,
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        >
          <img
            src={doctorPhoto}
            alt={t("booking.doctorAlt")}
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
