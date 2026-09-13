import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrolled } from "../../../hooks/useScrolled";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { Container } from "../Container";
import { DesktopNavLink } from "./DesktopNavLink";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNavItem } from "./MobileNavItem";
import { buildNavItems } from "./navigation.data";

const ctaTransition =
  "[transition:background-color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-cta-hover hover:shadow-nav-cta-hover";

export interface NavbarProps {
  mobileOpen: boolean;
}

/**
 * Desktop/tablet navbar (hides itself below `md` via `md:hidden`). Sticks
 * to `top: 0` on its own via `position: sticky`.
 *
 * Callers must render this as a direct sibling of page content, NOT inside
 * a div that only wraps the desktop chrome (e.g. alongside the TopBar
 * `<header>`) — a `position: sticky` element can't stick past the bottom
 * of its own containing block, so a wrapper that's only as tall as
 * TopBar + Navbar would cap the sticky range at that wrapper's height and
 * it would scroll away with it instead of pinning to the viewport.
 */
export function Navbar({ mobileOpen }: NavbarProps) {
  const scrolled = useScrolled();
  const { t } = useTranslation();
  const language = useLanguage();
  const navItems = buildNavItems(t, language);
  const bookingHref = withLocale(SITE.bookingHref, language);

  return (
    <div
      className={
        "sticky top-0 z-[1000] hidden w-full border-y border-border-nav bg-white [transition:box-shadow_220ms_ease,background-color_220ms_ease,backdrop-filter_220ms_ease] md:block " +
        (scrolled ? "bg-white/[.98] shadow-nav-scrolled backdrop-blur-[10px]" : "")
      }
    >
      <Container className="flex h-16 items-center justify-between px-[60px]">
        <nav aria-label={t("navbar.primaryLabel")} className="flex items-center gap-7 mw-1300:gap-[22px] mw-980:hidden">
          {navItems.map((item) => (
            <DesktopNavLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex flex-shrink-0 items-center gap-4 mw-980:hidden">
          <LanguageSwitcher />
          <Link
            to={bookingHref}
            className={
              "inline-flex h-11 min-w-[190px] items-center justify-center rounded-lg bg-cta px-[22px] text-[14.5px] font-semibold text-white shadow-[0_4px_8px_rgba(0,0,0,0.16)] " +
              ctaTransition
            }
          >
            {t("common.bookAppointment")}
          </Link>
        </div>
      </Container>

      {mobileOpen && (
        <nav
          aria-label={t("navbar.mobileLabel")}
          className="w-full animate-mobile-fade border-t border-border-nav-mobile bg-white px-6 pb-6 pt-3.5 shadow-nav-mobile-panel"
        >
          <LanguageSwitcher className="mb-3.5" />
          {navItems.map((item) => (
            <MobileNavItem key={item.label} item={item} />
          ))}
          <Link
            to={bookingHref}
            className={
              "mt-[18px] flex h-[52px] w-full items-center justify-center rounded-lg bg-cta text-[16px] font-semibold text-white " +
              ctaTransition
            }
          >
            {t("common.bookAppointment")}
          </Link>
        </nav>
      )}
    </div>
  );
}
