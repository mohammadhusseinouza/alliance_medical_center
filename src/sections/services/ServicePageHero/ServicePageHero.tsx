import { useTranslation } from "react-i18next";
import { ImagePlaceholder } from "../../../components/ui/ImagePlaceholder";
import { ServiceBreadcrumb } from "./ServiceBreadcrumb";

export interface ServicePageHeroProps {
  currentServiceLabel: string;
}

export function ServicePageHero({ currentServiceLabel }: ServicePageHeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[250px] items-center overflow-hidden mw-1100:min-h-[200px]">
      <ImagePlaceholder label={t("servicePage.imagePlaceholder")} className="absolute -inset-1" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(241,249,251,0.96) 0%, rgba(234,245,248,0.88) 35%, rgba(230,243,246,0.55) 65%, rgba(230,243,246,0.20) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute -left-[90px] -bottom-[120px] h-[320px] w-[320px] rounded-full"
        style={{ background: "rgba(11,137,149,0.06)" }}
      />

      <div className="relative z-[1] mx-auto w-[min(1320px,calc(100%-64px))] py-[38px] mw-600:w-[calc(100%-32px)]">
        <div className="max-w-[640px]">
          <h1 className="m-0 text-[clamp(36px,4.2vw,52px)] font-bold leading-[1.08] tracking-[-1.4px] text-text-primary mw-600:text-[34px]">
            {t("services.eyebrow")}
          </h1>
          <ServiceBreadcrumb currentServiceLabel={currentServiceLabel} />
        </div>
      </div>
    </section>
  );
}
