import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { stripLocale } from "../i18n/routing";

export function useDocumentMeta() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const page = stripLocale(pathname) === "/book-appointment" ? "booking" : "home";
    document.title = t(`meta.${page}.title`);
    document.querySelector('meta[name="description"]')?.setAttribute("content", t(`meta.${page}.description`));
  }, [pathname, i18n.language, t]);
}
