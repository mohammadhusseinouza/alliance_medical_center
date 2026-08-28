import { useTranslation } from "react-i18next";
import drugTestingImage from "../../../assets/occupational-health/om_drugtesting.png";
import { DRUG_TESTING_ITEMS } from "./drugTestingServices.data";

export function DrugTestingServices() {
  const { t } = useTranslation();

  return (
    <section className="bg-white px-6 py-[76px] mw-650:px-[18px] mw-650:py-[50px]">
      <div className="mx-auto grid max-w-[1380px] grid-cols-2 items-center gap-[56px] mw-880:grid-cols-1 mw-880:gap-8">
        <div>
          <h2 className="font-heading text-[clamp(28px,2.6vw,36px)] font-bold leading-[1.15] tracking-[-0.8px] text-text-primary">
            {t("occupationalHealth.drugTesting.heading")}
          </h2>

          <p className="mt-[14px] text-[16px] leading-[1.7] text-text-secondary [text-wrap:pretty]">
            {t("occupationalHealth.drugTesting.description")}
          </p>

          <ul className="mt-7 grid grid-cols-3 gap-[14px] mw-880:grid-cols-1">
            {DRUG_TESTING_ITEMS.map((item) => (
              <li key={item.id} className="rounded-[14px] border border-border-subtle bg-contact-page-sidebar-bg p-4">
                <p className="text-[14.5px] font-bold leading-[1.3] text-text-primary">
                  {t(`occupationalHealth.drugTesting.items.${item.translationKey}.title`)}
                </p>
                <p className="mt-[6px] text-[13px] leading-[1.5] text-text-secondary">
                  {t(`occupationalHealth.drugTesting.items.${item.translationKey}.description`)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
          <img
            src={drugTestingImage}
            alt={t("occupationalHealth.drugTesting.imageAlt")}
            className="block h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
