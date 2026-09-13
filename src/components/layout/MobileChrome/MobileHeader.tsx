import { useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon, CloseIcon, Logo, MenuIcon, PhoneIcon } from "../../icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { LanguageSwitcher } from "../Navbar/LanguageSwitcher";
import { buildNavItems } from "../Navbar/navigation.data";
import { isNavItemActive, parseNavHref } from "../Navbar/navHref";

/**
 * Sticky mobile header + expandable navigation drawer (handoff design 1a).
 * Rendered below the `md` breakpoint only (hides itself via `md:hidden`
 * below); the desktop TopBar / Navbar are untouched. Reuses the shared
 * Logo, LanguageSwitcher, route table (`buildNavItems`) and SITE constants
 * rather than duplicating any of them.
 *
 * Callers must render this as a direct sibling of page content, NOT inside
 * a div that only wraps mobile chrome (e.g. alongside MobileUtilityStrip) —
 * a `position: sticky` element can't stick past the bottom of its own
 * containing block, so a wrapper that's only as tall as its children would
 * cap the header's sticky range at that wrapper's height and it would
 * scroll away with it instead of pinning to the viewport.
 */
export function MobileHeader() {
  const { t } = useTranslation();
  const language = useLanguage();
  const { pathname, hash } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(true);
  const drawerId = useId();
  const servicesSubId = useId();

  const navItems = buildNavItems(t, language);
  const bookingHref = withLocale(SITE.bookingHref, language);

  // Following any link dismisses the drawer, matching the desktop pattern.
  const closeMenu = () => setMenuOpen(false);

  const rowBase =
    "flex w-full items-center justify-between border-t border-border-subtle px-1 py-4 text-left text-[17px] font-semibold no-underline";

  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between gap-3 border-b border-border-subtle bg-white px-4 md:hidden">
        <Link to={withLocale("/", language)} onClick={closeMenu} className="flex">
          <Logo size={41} />
        </Link>
        <div className="flex items-center gap-1.5">
          <a
            href={SITE.phoneHref}
            aria-label={t("common.callClinicAria")}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] border-[1.5px] border-brand-icon text-brand-icon"
          >
            <PhoneIcon size={20} />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t("navbar.toggleMenu")}
            aria-expanded={menuOpen}
            aria-controls={drawerId}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-[10px] bg-badge-bg text-brand-navy"
          >
            {menuOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav
          id={drawerId}
          aria-label={t("navbar.mobileLabel")}
          className="sticky top-16 z-[39] animate-mobile-fade border-b border-border-subtle bg-white px-4 pb-5 pt-3.5 shadow-nav-mobile-panel md:hidden"
        >
          <LanguageSwitcher className="pb-3" />

          {navItems.map((item) => {
            const active = isNavItemActive(item, pathname);

            if (!item.dropdown) {
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  className={`${rowBase} ${active ? "text-nav-active" : "text-text-nav"}`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-controls={servicesSubId}
                  className={`${rowBase} bg-transparent ${active ? "text-nav-active" : "text-text-nav"}`}
                >
                  {item.label}
                  <ChevronDownIcon
                    size={16}
                    strokeWidth={2.5}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div id={servicesSubId} className="flex flex-col gap-0.5 pb-3.5 pl-3.5 pr-1">
                    <Link
                      to={item.href}
                      onClick={closeMenu}
                      className="rounded-lg px-2.5 py-3 text-[15px] font-bold text-nav-active no-underline"
                    >
                      {t("common.viewAllServices")}
                    </Link>
                    {item.dropdown.map((entry) => {
                      const target = parseNavHref(entry.href);
                      const entryActive = pathname === target.pathname && hash === target.hash;
                      return (
                        <Link
                          key={entry.label}
                          to={entry.href}
                          onClick={closeMenu}
                          className={`rounded-lg px-2.5 py-3 text-[15px] no-underline ${
                            entryActive ? "text-brand-icon" : "text-text-nav"
                          }`}
                        >
                          {entry.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            to={bookingHref}
            onClick={closeMenu}
            className="mt-[18px] flex h-[52px] w-full items-center justify-center rounded-lg bg-cta text-[16px] font-semibold text-white no-underline"
          >
            {t("common.bookAppointment")}
          </Link>
        </nav>
      )}
    </>
  );
}
