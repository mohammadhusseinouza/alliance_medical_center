import { useTranslation } from "react-i18next";
import doctorPhoto from "../../../assets/book-appointment/doctor.webp";
import { PhoneIcon } from "../../../components/icons";
import { SITE } from "../../../lib/constants";
import { MobileBookingForm } from "../BookingForm/MobileBookingForm";

const DOCTOR_MASK =
  "linear-gradient(to right, transparent 0, #000 9%, #000 91%, transparent 100%), linear-gradient(to bottom, transparent 0, #000 6%, #000 92%, transparent 100%)";
const WALK_IN_GRADIENT =
  "linear-gradient(120deg, var(--brand-teal-700) 0%, var(--brand-teal-600) 55%, var(--brand-teal-500) 100%)";

/**
 * Dedicated mobile Book Appointment composition (handoff 5a): intro →
 * masked doctor image band → booking card (`MobileBookingForm`) → "Prefer
 * to walk in?" call card. Rendered only below the `md` breakpoint; the
 * approved desktop booking page renders unchanged at `md` and up. There is
 * intentionally no persistent bottom action bar on this page.
 */
export function MobileBookAppointment() {
  const { t } = useTranslation();

  return (
    <>
      {/* Intro */}
      <div className="bg-white px-4 pt-[26px] text-center">
        <span className="inline-block rounded-[20px] bg-booking-badge-bg px-4 py-[7px] text-[12.5px] font-bold uppercase tracking-[0.6px] text-badge-text">
          {t("booking.intro.eyebrow")}
        </span>
        <h1 className="mt-4 font-heading text-[34px] font-bold leading-[1.12] tracking-[-1px] text-text-primary [text-wrap:pretty]">
          {t("booking.intro.heading")}
        </h1>
        <p className="mx-auto mt-3 max-w-[520px] text-[15.5px] leading-[1.65] text-booking-text-body [text-wrap:pretty]">
          {t("booking.intro.description")}
        </p>
      </div>

      {/* Doctor image band */}
      <div className="relative bg-white px-4 pt-3.5">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-4 top-[14%] bottom-[6%]"
          style={{ background: "radial-gradient(circle, var(--booking-doctor-glow), transparent 68%)" }}
        />
        <div
          className="relative h-[232px] w-full"
          style={{
            filter: "brightness(1.07) contrast(1.02)",
            WebkitMaskImage: DOCTOR_MASK,
            maskImage: DOCTOR_MASK,
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        >
          <img
            src={doctorPhoto}
            alt={t("booking.doctorAlt")}
            className="block h-full w-full object-cover object-[50%_12%]"
            loading="eager"
          />
        </div>
      </div>

      {/* Booking card + walk-in card */}
      <section className="flex flex-col gap-4 bg-surface-pale-1 px-4 pb-[30px] pt-[22px]">
        <MobileBookingForm />

        <div className="rounded-2xl px-4 py-[18px] text-white shadow-[0_12px_30px_rgba(13,71,161,0.18)]" style={{ background: WALK_IN_GRADIENT }}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.45] bg-white/[0.06]">
              <PhoneIcon size={19} />
            </span>
            <div>
              <h2 className="m-0 font-heading text-[17px] font-bold leading-[1.2]">{t("booking.walkIn.heading")}</h2>
              <p className="mt-1 text-[13px] leading-[1.45] text-white/[0.85]">
                {t("servicePage.urgentCare.benefits.walkIns")}
              </p>
            </div>
          </div>
          <a
            href={SITE.phoneHref}
            className="mt-4 flex min-h-[50px] w-full items-center justify-center rounded-lg bg-white px-3 text-center text-[14.5px] font-bold leading-tight text-brand-navy no-underline"
          >
            {t("common.call")} {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
