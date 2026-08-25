import { useTranslation } from "react-i18next";
import { ImagePlaceholder } from "../../../components/ui/ImagePlaceholder";
import { ServiceBreadcrumb } from "./ServiceBreadcrumb";

export interface ServicePageHeroProps {
  currentServiceLabel: string;
}

export function ServicePageHero({ currentServiceLabel }: ServicePageHeroProps) {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-[250px] overflow-hidden mw-1100:min-h-[200px]"
      style={{ background: "linear-gradient(90deg, #F1F9FB 0%, #EAF5F8 55%, #E6F3F6 100%)" }}
    >
      <div
        className="pointer-events-none absolute -left-[90px] -bottom-[120px] h-[320px] w-[320px] rounded-full"
        style={{ background: "rgba(11,137,149,0.06)" }}
      />

      <div className="relative mx-auto grid min-h-[250px] w-[min(1320px,calc(100%-64px))] grid-cols-2 items-center gap-9 mw-880:grid-cols-1 mw-600:w-[calc(100%-32px)]">
        <div className="py-[38px]">
          <h1 className="m-0 text-[clamp(36px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-1.4px] text-text-primary mw-600:text-[34px]">
            {t("services.eyebrow")}
          </h1>
          <ServiceBreadcrumb currentServiceLabel={currentServiceLabel} />
        </div>

        <div className="relative h-full min-h-[250px] mw-880:min-h-[180px]">
          <ImagePlaceholder label={t("servicePage.imagePlaceholder")} className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
