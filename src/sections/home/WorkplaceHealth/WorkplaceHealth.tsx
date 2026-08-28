import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import workplaceHealthImage from "../../../assets/home/workplace-health.webp";
import { ArrowRightIcon, BriefcaseIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { WORKPLACE_HEALTH_SERVICES } from "./workplaceHealth.data";
import { WorkplaceHealthCard } from "./WorkplaceHealthCard";

export function WorkplaceHealth() {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <section className="relative bg-white px-6 pb-[85px] pt-[85px] mw-650:px-[18px] mw-650:pb-[60px] mw-650:pt-[55px]">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid grid-cols-2 items-center gap-[52px] mw-880:grid-cols-1 mw-880:gap-8">
          <div className="animate-about-fade-l motion-reduce:[animation-duration:0.01ms]">
            <div className="flex w-fit items-center gap-2 rounded-full bg-badge-bg px-4 py-2 text-[12.5px] font-bold uppercase tracking-[0.7px] text-badge-text">
              <BriefcaseIcon size={14} />
              {t("workplaceHealth.eyebrow")}
            </div>

            <h2 className="mt-[18px] font-heading text-[clamp(34px,4vw,48px)] font-bold leading-[1.1] tracking-[-1px] text-text-primary">
              {t("workplaceHealth.heading")}
            </h2>

            <p className="mt-[18px] max-w-[560px] text-[17px] leading-[1.7] text-text-secondary">
              {t("workplaceHealth.description")}
            </p>
          </div>

          <div className="animate-about-fade-img aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-card motion-reduce:[animation-duration:0.01ms]">
            <img
              src={workplaceHealthImage}
              alt={t("workplaceHealth.imageAlt")}
              className="block h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <ul className="mt-[60px] grid grid-cols-5 gap-5 mw-1100:grid-cols-3 mw-880:grid-cols-2 mw-600:grid-cols-1">
          {WORKPLACE_HEALTH_SERVICES.map((item) => (
            <WorkplaceHealthCard key={item.id} item={item} />
          ))}
        </ul>

        <div className="mt-10 flex animate-about-fade-up justify-center motion-reduce:[animation-duration:0.01ms]">
          <Link
            to={withLocale(SITE.occupationalHealthHref, language)}
            className="inline-flex min-h-[50px] items-center gap-[9px] rounded-[7px] px-[26px] text-[14px] font-semibold text-white shadow-bright-cta [transition:background_220ms_ease,transform_220ms_ease,box-shadow_220ms_ease] hover:-translate-y-0.5 hover:shadow-bright-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
            style={{ background: "linear-gradient(90deg, var(--bright-cta-from), var(--bright-cta-to))" }}
          >
            {t("workplaceHealth.cta")}
            <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
