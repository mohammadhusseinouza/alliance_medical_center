import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "../../icons";
import type { NavItem } from "./navigation.data";
import { isNavItemActive, parseNavHref } from "./navHref";

export interface DesktopNavLinkProps {
  item: NavItem;
}

function linkClass(active: boolean) {
  const color = active ? "text-[#155D72]" : "text-[#29364A]";
  const underline = active ? "after:scale-x-100" : "after:scale-x-0";
  return (
    "relative -mx-2.5 flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[15px] font-medium no-underline " +
    "transition-colors duration-200 hover:bg-[#EAF3F4] hover:text-[#155D72] " +
    "after:absolute after:bottom-[-13px] after:left-2.5 after:h-[2px] after:w-[calc(100%-20px)] after:origin-left after:bg-[#176477] after:transition-transform after:duration-200 after:content-[''] " +
    "mw-1300:text-[14px] " +
    color +
    " " +
    underline
  );
}

export function DesktopNavLink({ item }: DesktopNavLinkProps) {
  const { pathname, hash } = useLocation();
  const active = isNavItemActive(item, pathname, hash);

  if (!item.dropdown) {
    return (
      <div className="relative">
        <Link to={item.href} className={linkClass(active)}>
          {item.label}
        </Link>
      </div>
    );
  }

  return (
    <div className="group relative">
      <Link to={item.href} className={linkClass(active)}>
        {item.label}
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
                  "block rounded-md px-3.5 py-2.5 text-[15px] font-medium no-underline transition-colors duration-150 hover:bg-[#EAF3F4] hover:text-brand-icon focus-visible:bg-[#EAF3F4] focus-visible:text-brand-icon " +
                  (entryActive ? "bg-[#EAF3F4] text-brand-icon" : "text-[#27354A]")
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
