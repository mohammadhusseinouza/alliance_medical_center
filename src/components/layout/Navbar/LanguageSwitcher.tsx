import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { switchLanguagePath } from "../../../i18n/routing";
import { LANGUAGE_STORAGE_KEY } from "../../../i18n/types";
import type { Language } from "../../../i18n/types";
import { useLanguage } from "../../../i18n/useLanguage";

export interface LanguageSwitcherProps {
  className?: string;
}

function languageButtonClass(active: boolean) {
  return (
    "rounded px-1 py-0.5 text-[13px] font-bold uppercase tracking-[0.3px] transition-colors duration-150 " +
    (active ? "text-nav-active" : "text-text-muted hover:text-text-nav")
  );
}

export function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { t } = useTranslation();
  const language = useLanguage();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  function switchTo(target: Language) {
    if (target === language) return;
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, target);
    } catch {
      // localStorage may be unavailable (privacy mode, disabled storage) — not fatal.
    }
    navigate(switchLanguagePath(pathname, hash, target));
  }

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <button
        type="button"
        onClick={() => switchTo("en")}
        aria-label={t("navbar.switchToEnglish")}
        aria-pressed={language === "en"}
        className={languageButtonClass(language === "en")}
      >
        EN
      </button>
      <span aria-hidden="true" className="text-divider">
        |
      </span>
      <button
        type="button"
        onClick={() => switchTo("es")}
        aria-label={t("navbar.switchToSpanish")}
        aria-pressed={language === "es"}
        className={languageButtonClass(language === "es")}
      >
        ES
      </button>
    </div>
  );
}
