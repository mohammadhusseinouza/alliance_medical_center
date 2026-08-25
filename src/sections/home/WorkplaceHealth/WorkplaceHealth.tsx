import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, BriefcaseIcon } from "../../../components/icons";
import { ImagePlaceholder } from "../../../components/ui/ImagePlaceholder";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
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

            <h2 className="mt-[18px] text-[clamp(34px,4vw,48px)] font-bold leading-[1.1] tracking-[-1px] text-text-primary">
              {t("workplaceHealth.heading")}
            </h2>

            <p className="mt-[18px] max-w-[560px] text-[17px] leading-[1.7] text-text-secondary">
              {t("workplaceHealth.description")}
            </p>
          </div>

          <div className="animate-about-fade-img motion-reduce:[animation-duration:0.01ms]">
            <ImagePlaceholder
              label={t("workplaceHealth.imagePlaceholder")}
              className="aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-card"
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
            to={withLocale("/#services", language)}
            className="inline-flex min-h-[50px] items-center gap-[9px] rounded-[7px] px-[26px] text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(10,120,140,0.16)] [transition:background_220ms_ease,transform_220ms_ease,box-shadow_220ms_ease] hover:-translate-y-0.5 hover:shadow-[0_12px_25px_rgba(10,120,140,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]"
            style={{ background: "linear-gradient(90deg, #087E8D, #0594A1)" }}
          >
            {t("workplaceHealth.cta")}
            <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
