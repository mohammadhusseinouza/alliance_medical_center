import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { stripLocale } from "../i18n/routing";

const PAGE_BY_CANONICAL_PATH: Record<string, string> = {
  "/book-appointment": "booking",
  "/urgent-care": "urgentCare",
  "/services/diagnostic-services": "diagnosticServices",
  "/services/womens-health": "womensHealth",
  "/services/pediatric-care": "pediatricCare",
  "/services/family-health": "familyHealth",
  "/occupational-health": "occupationalHealth",
  "/contact": "contact",
};

export function useDocumentMeta() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const canonicalPath = stripLocale(pathname);
    const page = PAGE_BY_CANONICAL_PATH[canonicalPath] ?? "home";
    document.title = t(`meta.${page}.title`);
    document.querySelector('meta[name="description"]')?.setAttribute("content", t(`meta.${page}.description`));
  }, [pathname, i18n.language, t]);
}
