import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "../../../components/icons";
import { SITE } from "../../../lib/constants";

const FAQ_KEYS = ["appointment", "conditions", "insurance", "hours", "emergency", "moreInformation"] as const;

const DEFAULT_OPEN_INDEX = FAQ_KEYS.length - 1;

export function UrgentCareFaq() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(DEFAULT_OPEN_INDEX);

  return (
    <section aria-labelledby="urgent-care-faq-heading" className="mt-[42px]">
      <p id="urgent-care-faq-heading" className="m-0 text-xs font-bold uppercase tracking-[0.8px] text-badge-text">
        {t("servicePage.urgentCare.faq.eyebrow")}
      </p>

      <div className="mt-4 flex flex-col gap-2.5">
        {FAQ_KEYS.map((key, index) => {
          const isOpen = openIndex === index;
          const triggerId = `urgent-care-faq-trigger-${index}`;
          const panelId = `urgent-care-faq-panel-${index}`;
          const answer =
            key === "moreInformation"
              ? t(`servicePage.urgentCare.faq.items.${key}.answer`, { phone: SITE.phone })
              : t(`servicePage.urgentCare.faq.items.${key}.answer`);

          return (
            <div
              key={key}
              className={`overflow-hidden rounded-xl border bg-white [transition:border-color_180ms_ease,box-shadow_180ms_ease] ${
                isOpen
                  ? "border-[#BFDDE2] shadow-[0_6px_18px_rgba(20,70,85,0.07)]"
                  : "border-[#E4EBEE] hover:border-[#BFDDE2]"
              }`}
            >
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between gap-4 px-[22px] py-[18px] text-left text-base font-semibold [transition:background-color_180ms_ease,color_180ms_ease] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2] ${
                  isOpen ? "bg-badge-text text-white" : "bg-white text-text-primary hover:text-badge-text"
                }`}
              >
                <span className="min-w-0">{t(`servicePage.urgentCare.faq.items.${key}.question`)}</span>
                <ChevronDownIcon
                  size={18}
                  strokeWidth={2.2}
                  className={`flex-shrink-0 transition-transform duration-[220ms] ease ${isOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  aria-labelledby={triggerId}
                  className="px-[22px] pb-5 text-[15.5px] leading-[1.7] text-text-secondary"
                >
                  {answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
