import { useTranslation } from "react-i18next";
import { SITE } from "../../../lib/constants";
import { FaqAccordion } from "../FaqAccordion";

const FAQ_KEYS = ["services", "appointment", "pregnancy", "confidentiality", "hours", "moreInformation"] as const;

export function WomensHealthFaq() {
  const { t } = useTranslation();

  const items = FAQ_KEYS.map((key) => ({
    key,
    question: t(`womensHealth.faq.items.${key}.question`),
    answer:
      key === "moreInformation"
        ? t(`womensHealth.faq.items.${key}.answer`, { phone: SITE.phone })
        : t(`womensHealth.faq.items.${key}.answer`),
  }));

  return <FaqAccordion eyebrow={t("womensHealth.faq.eyebrow")} idPrefix="womens-health" items={items} />;
}
