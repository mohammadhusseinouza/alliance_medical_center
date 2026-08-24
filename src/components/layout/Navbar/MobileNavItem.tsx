import { Link, useLocation } from "react-router-dom";
import type { NavItem } from "./navigation.data";
import { parseNavHref } from "./navHref";

export interface MobileNavItemProps {
  item: NavItem;
}

export function MobileNavItem({ item }: MobileNavItemProps) {
  const { pathname, hash } = useLocation();
  const target = parseNavHref(item.href);
  const active = pathname === target.pathname && hash === target.hash;

  return (
    <Link to={item.href} className="block border-b border-[#F0F3F4] no-underline">
      <div className="flex items-center justify-between px-1 py-4">
        <span className={`text-[17px] font-semibold ${active ? "text-[#155D72]" : "text-[#29364A]"}`}>
          {item.label}
        </span>
      </div>
    </Link>
  );
}
