import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, CheckIcon, ChevronIcon, HomeIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { FaqAccordion } from "../FaqAccordion";
import { MobileServicePicker } from "./MobileServicePicker";
import { SERVICE_DETAIL_CONFIG, type ServiceSlug } from "./serviceDetail.data";

export interface MobileServiceDetailProps {
  slug: ServiceSlug;
}

const HERO_WASH =
  "linear-gradient(180deg, rgba(227,242,253,0.95) 0%, rgba(227,242,253,0.86) 46%, rgba(13,71,161,0.30) 100%)";

function SimpleChecklist({ itemKeys }: { itemKeys: string[] }) {
  const { t } = useTranslation();
  return (
    <ul className="mt-4 grid list-none grid-cols-2 gap-x-3.5 gap-y-3.5 p-0">
      {itemKeys.map((key) => (
        <li key={key} className="grid grid-cols-[18px_1fr] items-start gap-2">
          <CheckIcon size={16} strokeWidth={2.6} className="mt-[3px] flex-shrink-0 text-badge-text" />
          <span className="text-[13.5px] leading-[1.45] text-service-detail-benefit-text">{t(key)}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * The single mobile service-detail shell (handoff 2a). Drives every field
 * from `SERVICE_DETAIL_CONFIG[slug]`, which points at the EXISTING i18n
 * keys and image assets used by the desktop service pages. Rendered only
 * below the `md` breakpoint; the approved desktop service page renders
 * unchanged at `md` and up.
 */
export function MobileServiceDetail({ slug }: MobileServiceDetailProps) {
  const { t } = useTranslation();
  const language = useLanguage();
  const config = SERVICE_DETAIL_CONFIG[slug];
  const serviceName = t(config.nameKey);

  const faqItems = config.faq.keys.map((key) => ({
    key,
    question: t(`${config.faq.base}.${key}.question`),
    answer:
      key === config.faq.phoneKey
        ? t(`${config.faq.base}.${key}.answer`, { phone: SITE.phone })
        : t(`${config.faq.base}.${key}.answer`),
  }));

  return (
    <>
      {/* Hero band + breadcrumb */}
      <section className="relative flex h-[186px] items-center overflow-hidden">
        <img
          src={config.heroImage}
          alt={t(config.heroAltKey)}
          className="absolute inset-0 h-full w-full object-cover object-[60%_40%]"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0" style={{ background: HERO_WASH }} />
        <div className="relative z-[1] w-full px-[22px]">
          <h1 className="m-0 font-heading text-[32px] font-bold leading-[1.08] tracking-[-1px] text-brand-navy">
            {t("services.eyebrow")}
          </h1>
          <nav aria-label={t("servicePage.breadcrumbLabel")} className="mt-2.5">
            <ol className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.4px]">
              <li>
                <Link
                  to={withLocale("/", language)}
                  className="inline-flex items-center gap-1.5 text-text-primary no-underline"
                >
                  <HomeIcon size={13} />
                  {t("navbar.home")}
                </Link>
              </li>
              <li aria-hidden="true" className="flex items-center text-service-detail-breadcrumb-chevron">
                <ChevronIcon direction="right" size={12} strokeWidth={2.2} />
              </li>
              <li aria-current="page" className="text-brand-icon">
                {serviceName}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <MobileServicePicker current={slug} />

      {/* Main content */}
      <div className="px-4 pb-[34px] pt-[22px]">
        <img
          src={config.mainImage}
          alt={t(config.mainAltKey)}
          className="block aspect-[16/10] w-full rounded-[14px] object-cover"
          loading="lazy"
        />

        <h2 className="mt-6 font-heading text-[27px] font-bold leading-[1.2] tracking-[-0.7px] text-text-primary [text-wrap:pretty]">
          {t(config.headingKey)}
        </h2>

        {config.subheadingKey && (
          <p className="mt-2 text-[15px] font-semibold leading-[1.4] text-badge-text">{t(config.subheadingKey)}</p>
        )}

        <p className="mt-3.5 text-[15.5px] leading-[1.65] text-text-secondary [text-wrap:pretty]">
          {t(config.introKey)}
        </p>

        <div className="mt-[26px] w-fit rounded-full bg-badge-bg px-[15px] py-[7px] text-[12px] font-bold uppercase tracking-[0.7px] text-badge-text">
          {t(config.benefits.headingKey)}
        </div>

        {config.benefits.kind === "simple" ? (
          <SimpleChecklist itemKeys={config.benefits.itemKeys} />
        ) : (
          <ul className="mt-4 flex list-none flex-col gap-4 p-0">
            {config.benefits.items.map((item) => (
              <li key={item.titleKey} className="grid grid-cols-[18px_1fr] items-start gap-2.5">
                <CheckIcon size={16} strokeWidth={2.6} className="mt-1 flex-shrink-0 text-badge-text" />
                <div>
                  <p className="text-[15px] font-bold leading-[1.4] text-text-primary">{t(item.titleKey)}</p>
                  <p className="mt-1 text-[14px] leading-[1.55] text-text-secondary [text-wrap:pretty]">
                    {t(item.descKey)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {config.whyChoose && (
          <>
            <h2 className="mt-[38px] font-heading text-[23px] font-bold leading-[1.25] tracking-[-0.5px] text-text-primary">
              {t(config.whyChoose.headingKey)}
            </h2>
            <SimpleChecklist itemKeys={config.whyChoose.itemKeys} />
          </>
        )}

        {config.secondary && (
          <>
            <h2 className="mt-[38px] font-heading text-[23px] font-bold leading-[1.25] tracking-[-0.5px] text-text-primary">
              {t(config.secondary.headingKey)}
            </h2>
            <p className="mt-3 text-[15.5px] leading-[1.65] text-text-secondary [text-wrap:pretty]">
              {t(config.secondary.bodyKey)}
            </p>
          </>
        )}
      </div>

      {/* Image rail */}
      <ul className="om-scroll flex list-none snap-x snap-mandatory gap-3 overflow-x-auto p-0 px-4 pb-[30px]">
        {config.gallery.map((item) => (
          <li key={item.altKey} className="flex-[0_0_290px] snap-center">
            <img
              src={item.image}
              alt={t(item.altKey)}
              className="block aspect-[4/3] w-full rounded-[14px] object-cover"
              style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              loading="lazy"
            />
          </li>
        ))}
      </ul>

      {/* FAQ */}
      <div className="bg-surface-pale-1 px-4 pb-[34px] pt-[30px]">
        <FaqAccordion
          className="mt-0"
          eyebrow={t(config.faq.eyebrowKey)}
          idPrefix={config.faq.idPrefix}
          items={faqItems}
        />
      </div>

      {/* CTA card */}
      <div className="bg-surface-pale-1 px-4 pb-[30px] pt-1.5">
        <div className="grid grid-cols-[84px_1fr] items-center gap-3.5 rounded-[14px] bg-brand-navy p-4">
          <img
            src={config.cta.image}
            alt={t(config.cta.altKey)}
            className="h-[84px] w-[84px] rounded-[12px] object-cover object-[50%_25%]"
            loading="lazy"
          />
          <div>
            <h3 className="m-0 font-heading text-[18px] font-bold leading-[1.2] text-white">{t(config.cta.headingKey)}</h3>
            <p className="mt-1.5 text-[13px] leading-[1.5] text-white/[0.82]">{t(config.cta.descKey)}</p>
          </div>
        </div>
        <Link
          to={withLocale(SITE.bookingHref, language)}
          className="mt-3 flex h-[50px] w-full items-center justify-center gap-2 rounded-lg bg-cta text-[15px] font-semibold text-white no-underline"
        >
          {t("common.bookAppointment")}
          <ArrowRightIcon size={15} />
        </Link>
      </div>
    </>
  );
}
