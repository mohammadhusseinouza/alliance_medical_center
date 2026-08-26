import { useTranslation } from "react-i18next";
import { ImagePlaceholder } from "../../../components/ui/ImagePlaceholder";
import { ServiceBreadcrumb } from "./ServiceBreadcrumb";

export interface ServicePageHeroProps {
  currentServiceLabel: string;
  heroImage?: string;
  heroImageAlt: string;
}

export function ServicePageHero({ currentServiceLabel, heroImage, heroImageAlt }: ServicePageHeroProps) {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[250px] items-center overflow-hidden mw-1100:min-h-[200px]">
      {heroImage ? (
        <img
          src={heroImage}
          alt={heroImageAlt}
          className="absolute inset-0 z-0 h-full w-full object-cover object-[60%_center]"
          loading="eager"
        />
      ) : (
        <ImagePlaceholder label={heroImageAlt} className="absolute inset-0 z-0 h-full w-full" />
      )}

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, rgba(241,249,251,0.96) 0%, rgba(234,245,248,0.82) 32%, rgba(230,243,246,0.38) 62%, rgba(230,243,246,0.08) 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute -left-[90px] -bottom-[120px] z-[2] h-[320px] w-[320px] rounded-full"
        style={{ background: "rgba(11,137,149,0.06)" }}
      />

      <div className="relative z-[3] mx-auto w-[min(1320px,calc(100%-64px))] py-[38px] mw-600:w-[calc(100%-32px)]">
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
