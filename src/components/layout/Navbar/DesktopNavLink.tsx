import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "../../icons";
import type { NavItem } from "./navigation.data";
import { isNavItemActive, parseNavHref } from "./navHref";

export interface DesktopNavLinkProps {
  item: NavItem;
}

const linkClass =
  "relative -mx-2.5 flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[15px] font-medium text-text-nav no-underline " +
  "transition-colors duration-200 hover:bg-nav-hover hover:text-nav-active " +
  "mw-1300:text-[14px]";

function labelClass(active: boolean) {
  const color = active ? "text-nav-active" : "";
  const underline = active ? "after:scale-x-100" : "after:scale-x-0";
  return (
    "relative inline-block after:absolute after:bottom-[-13px] after:left-0 after:right-0 after:h-[2px] after:origin-left after:bg-nav-underline after:transition-transform after:duration-200 after:content-[''] " +
    color +
    " " +
    underline
  );
}

export function DesktopNavLink({ item }: DesktopNavLinkProps) {
  const { pathname, hash } = useLocation();
  const active = isNavItemActive(item, pathname);

  if (!item.dropdown) {
    return (
      <div className="relative">
        <Link to={item.href} className={linkClass}>
          <span className={labelClass(active)}>{item.label}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="group relative">
      <Link to={item.href} className={linkClass}>
        <span className={labelClass(active)}>{item.label}</span>
        <ChevronDownIcon
          size={12}
          className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </Link>
      <div className="absolute left-0 top-full z-50 hidden w-[250px] pt-3 group-hover:block group-focus-within:block">
        <div className="rounded-lg bg-white p-2.5 shadow-dropdown">
          {item.dropdown.map((entry) => {
            const entryTarget = parseNavHref(entry.href);
            const entryActive = pathname === entryTarget.pathname && hash === entryTarget.hash;
            return (
              <Link
                key={entry.label}
                to={entry.href}
                className={
                  "block rounded-md px-3.5 py-2.5 text-[15px] font-medium no-underline transition-colors duration-150 hover:bg-nav-hover hover:text-brand-icon focus-visible:bg-nav-hover focus-visible:text-brand-icon " +
                  (entryActive ? "bg-nav-hover text-brand-icon" : "text-text-nav-alt")
                }
              >
                {entry.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
