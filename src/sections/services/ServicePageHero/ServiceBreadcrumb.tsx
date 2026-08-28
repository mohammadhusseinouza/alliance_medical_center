import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronIcon, HomeIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";

export interface ServiceBreadcrumbProps {
  currentServiceLabel: string;
}

export function ServiceBreadcrumb({ currentServiceLabel }: ServiceBreadcrumbProps) {
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <nav aria-label={t("servicePage.breadcrumbLabel")} className="mt-[14px]">
      <ol className="flex flex-wrap items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.5px] text-text-secondary">
        <li>
          <Link
            to={withLocale("/", language)}
            className="inline-flex items-center gap-[7px] text-text-secondary no-underline transition-colors hover:text-nav-active"
          >
            <HomeIcon size={14} />
            {t("navbar.home")}
          </Link>
        </li>
        <li role="presentation" aria-hidden="true" className="flex items-center">
          <ChevronIcon direction="right" size={13} strokeWidth={2.2} className="text-service-detail-breadcrumb-chevron" />
        </li>
        <li>
          <Link
            to={withLocale("/#services", language)}
            className="text-text-secondary no-underline transition-colors hover:text-nav-active"
          >
            {t("navbar.services")}
          </Link>
        </li>
        <li role="presentation" aria-hidden="true" className="flex items-center">
          <ChevronIcon direction="right" size={13} strokeWidth={2.2} className="text-service-detail-breadcrumb-chevron" />
        </li>
        <li aria-current="page" className="text-badge-text">
          {currentServiceLabel}
        </li>
      </ol>
    </nav>
  );
}
