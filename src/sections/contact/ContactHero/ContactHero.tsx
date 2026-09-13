import { useTranslation } from "react-i18next";
import heroImage from "../../../assets/contact/team-member-ready-to-assist.png";

/**
 * Desktop readability wash — strong white on the left, a pale Alliance-blue
 * (#E3F2FD) mid-transition, transparent on the right so the reception scene
 * stays visible. Mirrors the Occupational Medicine hero's overlay direction.
 */
const OVERLAY_HORIZONTAL =
  "linear-gradient(97deg, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.93) 32%, rgba(227,242,253,0.55) 52%, rgba(227,242,253,0.14) 72%, rgba(227,242,253,0) 100%)";

/** Mobile: vertical wash — image reads at the top, near-opaque white behind the stacked text. */
const OVERLAY_VERTICAL =
  "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.9) 44%, rgba(255,255,255,0.96) 100%)";

export function ContactHero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[500px] items-center overflow-hidden bg-white mw-1000:min-h-[420px] mw-650:min-h-[380px]">
      <img
        src={heroImage}
        alt={t("contact.hero.imageAlt")}
        className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_32%] mw-1000:object-[55%_28%] mw-650:object-[58%_center]"
        loading="lazy"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] mw-650:hidden"
        style={{ background: OVERLAY_HORIZONTAL }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] hidden mw-650:block"
        style={{ background: OVERLAY_VERTICAL }}
      />

      <div className="relative z-[2] w-full px-10 py-12 mw-1000:px-8 mw-650:px-6 mw-650:py-10">
        <div className="w-[min(520px,42%)] animate-card-up motion-reduce:animate-none mw-1000:w-[min(520px,64%)] mw-650:w-full">
          <h1 className="m-0 font-heading text-[clamp(36px,4.4vw,54px)] font-bold leading-[1.08] tracking-[-1.4px] text-hero-heading mw-600:text-[32px]">
            {t("contact.hero.heading")}
          </h1>
          <p className="mt-4 max-w-[460px] text-[16.5px] leading-[1.7] text-text-secondary [text-wrap:pretty] mw-650:max-w-none">
            {t("contact.hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
