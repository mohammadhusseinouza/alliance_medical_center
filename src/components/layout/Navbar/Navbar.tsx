import { Link } from "react-router-dom";
import { useScrolled } from "../../../hooks/useScrolled";
import { SITE } from "../../../lib/constants";
import { Container } from "../Container";
import { DesktopNavLink } from "./DesktopNavLink";
import { MobileNavItem } from "./MobileNavItem";
import { NAV_ITEMS } from "./navigation.data";

const ctaTransition =
  "[transition:background-color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-[#1A5560] hover:shadow-[0_6px_14px_rgba(18,63,72,0.22)]";

export interface NavbarProps {
  mobileOpen: boolean;
}

export function Navbar({ mobileOpen }: NavbarProps) {
  const scrolled = useScrolled();

  return (
    <div
      className={
        "sticky top-0 z-[1000] w-full border-y border-[#EEEEEE] bg-white [transition:box-shadow_220ms_ease,background-color_220ms_ease,backdrop-filter_220ms_ease] " +
        (scrolled ? "bg-white/[.98] shadow-[0_4px_18px_rgba(16,38,74,0.08)] backdrop-blur-[10px]" : "")
      }
    >
      <Container className="flex h-16 items-center justify-between px-[60px]">
        <nav aria-label="Primary" className="flex items-center gap-7 mw-1300:gap-[22px] mw-980:hidden">
          {NAV_ITEMS.map((item) => (
            <DesktopNavLink key={item.label} item={item} />
          ))}
        </nav>

        <div className="flex flex-shrink-0 mw-980:hidden">
          <Link
            to={SITE.bookingHref}
            className={
              "inline-flex h-11 min-w-[190px] items-center justify-center rounded-lg bg-cta px-[22px] text-[14.5px] font-semibold text-white shadow-[0_4px_8px_rgba(0,0,0,0.16)] " +
              ctaTransition
            }
          >
            Book Appointment
          </Link>
        </div>
      </Container>

      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="w-full animate-mobile-fade border-t border-[#EDF1F2] bg-white px-6 pb-6 pt-3.5 shadow-[0_16px_32px_rgba(18,63,72,0.12)]"
        >
          {NAV_ITEMS.map((item) => (
            <MobileNavItem key={item.label} item={item} />
          ))}
          <Link
            to={SITE.bookingHref}
            className={
              "mt-[18px] flex h-[52px] w-full items-center justify-center rounded-lg bg-cta text-[16px] font-semibold text-white " +
              ctaTransition
            }
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </div>
  );
}
