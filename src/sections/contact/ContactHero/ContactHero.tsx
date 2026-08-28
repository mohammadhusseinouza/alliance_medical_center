import { useTranslation } from "react-i18next";
import heroImage from "../../../assets/contact/AccessNow Care team member ready to assist a patient.png";

export function ContactHero() {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute -right-16 -top-20 -z-[1] h-[280px] w-[280px] rounded-full"
        style={{ background: "var(--contact-page-hero-glow)" }}
      />

      <div className="grid grid-cols-[minmax(0,1fr)_360px] items-center gap-10 mw-1000:grid-cols-1 mw-1000:gap-6">
        <div className="animate-card-up motion-reduce:[animation-duration:0.01ms]">
          <h1 className="m-0 font-heading text-[clamp(36px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-1.4px] text-text-primary mw-600:text-[34px]">
            {t("contact.hero.heading")}
          </h1>
          <p className="mt-4 max-w-[560px] text-[16.5px] leading-[1.7] text-text-secondary">
            {t("contact.hero.description")}
          </p>
        </div>
        <div className="aspect-[4/3] w-full animate-hero-img-in overflow-hidden rounded-2xl shadow-card motion-reduce:[animation-duration:0.01ms] mw-1000:aspect-[16/8]">
          <img
            src={heroImage}
            alt={t("contact.hero.imageAlt")}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
