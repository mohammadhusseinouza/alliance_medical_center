import { useTranslation } from "react-i18next";
import { SITE } from "../../../lib/constants";
import { FaqAccordion } from "../FaqAccordion";

const FAQ_KEYS = ["appointment", "conditions", "insurance", "hours", "emergency", "moreInformation"] as const;

export function UrgentCareFaq() {
  const { t } = useTranslation();

  const items = FAQ_KEYS.map((key) => ({
    key,
    question: t(`servicePage.urgentCare.faq.items.${key}.question`),
    answer:
      key === "moreInformation"
        ? t(`servicePage.urgentCare.faq.items.${key}.answer`, { phone: SITE.phone })
        : t(`servicePage.urgentCare.faq.items.${key}.answer`),
  }));

  return <FaqAccordion eyebrow={t("servicePage.urgentCare.faq.eyebrow")} idPrefix="urgent-care" items={items} />;
}
