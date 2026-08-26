import { useTranslation } from "react-i18next";
import { SITE } from "../../../lib/constants";
import { FaqAccordion } from "../FaqAccordion";

const FAQ_KEYS = ["services", "ages", "immunizations", "illnessesInjuries", "hours", "moreInformation"] as const;

export function PediatricCareFaq() {
  const { t } = useTranslation();

  const items = FAQ_KEYS.map((key) => ({
    key,
    question: t(`pediatricCare.faq.items.${key}.question`),
    answer:
      key === "moreInformation"
        ? t(`pediatricCare.faq.items.${key}.answer`, { phone: SITE.phone })
        : t(`pediatricCare.faq.items.${key}.answer`),
  }));

  return <FaqAccordion eyebrow={t("pediatricCare.faq.eyebrow")} idPrefix="pediatric-care" items={items} />;
}
