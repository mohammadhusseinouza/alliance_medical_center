import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { stripLocale } from "../i18n/routing";

export function useDocumentMeta() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const canonicalPath = stripLocale(pathname);
    const page =
      canonicalPath === "/book-appointment"
        ? "booking"
        : canonicalPath === "/services/urgent-care"
          ? "urgentCare"
          : canonicalPath === "/services/diagnostic-services"
            ? "diagnosticServices"
            : canonicalPath === "/occupational-health"
              ? "occupationalHealth"
              : "home";
    document.title = t(`meta.${page}.title`);
    document.querySelector('meta[name="description"]')?.setAttribute("content", t(`meta.${page}.description`));
  }, [pathname, i18n.language, t]);
}
