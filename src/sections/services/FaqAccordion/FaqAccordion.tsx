import { useState } from "react";
import { ChevronDownIcon } from "../../../components/icons";

export interface FaqAccordionItem {
  key: string;
  question: string;
  answer: string;
}

export interface FaqAccordionProps {
  eyebrow: string;
  idPrefix: string;
  items: FaqAccordionItem[];
  defaultOpenIndex?: number;
}

export function FaqAccordion({ eyebrow, idPrefix, items, defaultOpenIndex }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? items.length - 1);
  const headingId = `${idPrefix}-faq-heading`;

  return (
    <section aria-labelledby={headingId} className="mt-[42px]">
      <p id={headingId} className="m-0 text-xs font-bold uppercase tracking-[0.8px] text-badge-text">
        {eyebrow}
      </p>

      <div className="mt-4 flex flex-col gap-2.5">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const triggerId = `${idPrefix}-faq-trigger-${index}`;
          const panelId = `${idPrefix}-faq-panel-${index}`;

          return (
            <div
              key={item.key}
              className={`overflow-hidden rounded-xl border bg-white [transition:border-color_180ms_ease,box-shadow_180ms_ease] ${
                isOpen
                  ? "border-service-detail-faq-border shadow-service-detail-faq"
                  : "border-contact-page-sidebar-row-border hover:border-service-detail-faq-border"
              }`}
            >
              <button
                type="button"
                id={triggerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={`flex w-full items-center justify-between gap-4 px-[22px] py-[18px] text-left text-base font-semibold [transition:background-color_180ms_ease,color_180ms_ease] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring ${
                  isOpen ? "bg-badge-text text-white" : "bg-white text-text-primary hover:text-badge-text"
                }`}
              >
                <span className="min-w-0">{item.question}</span>
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
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
