import { useTranslation } from "react-i18next";
import { FaqAccordion } from "../FaqAccordion";

const FAQ_KEYS = ["hours", "servicesAvailable", "appointment", "resultsTiming", "insurance"] as const;

export function DiagnosticServicesFaq() {
  const { t } = useTranslation();

  const items = FAQ_KEYS.map((key) => ({
    key,
    question: t(`diagnosticServices.faq.items.${key}.question`),
    answer: t(`diagnosticServices.faq.items.${key}.answer`),
  }));

  return (
    <FaqAccordion eyebrow={t("diagnosticServices.faq.eyebrow")} idPrefix="diagnostic-services" items={items} />
  );
}
