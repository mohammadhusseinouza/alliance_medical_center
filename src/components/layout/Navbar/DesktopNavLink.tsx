import { Link, useLocation } from "react-router-dom";
import type { NavItem } from "./navigation.data";
import { parseNavHref } from "./navHref";

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
  const target = parseNavHref(item.href);
  const active = pathname === target.pathname && hash === target.hash;

  return (
    <div className="relative">
      <Link to={item.href} className={linkClass(active)}>
        {item.label}
      </Link>
    </div>
  );
}
