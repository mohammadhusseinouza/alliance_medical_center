import { useTranslation } from "react-i18next";
import { SITE } from "../../../lib/constants";
import { FaqAccordion } from "../FaqAccordion";

const FAQ_KEYS = ["services", "allAges", "chronicConditions", "screenings", "hours", "moreInformation"] as const;

export function FamilyHealthFaq() {
  const { t } = useTranslation();

  const items = FAQ_KEYS.map((key) => ({
    key,
    question: t(`familyHealth.faq.items.${key}.question`),
    answer:
      key === "moreInformation"
        ? t(`familyHealth.faq.items.${key}.answer`, { phone: SITE.phone })
        : t(`familyHealth.faq.items.${key}.answer`),
  }));

  return <FaqAccordion eyebrow={t("familyHealth.faq.eyebrow")} idPrefix="family-health" items={items} />;
}
