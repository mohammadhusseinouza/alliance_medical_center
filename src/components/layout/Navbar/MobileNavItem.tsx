import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "../../icons";
import type { NavItem } from "./navigation.data";

export interface MobileNavItemProps {
  item: NavItem;
}

export function MobileNavItem({ item }: MobileNavItemProps) {
  const { pathname } = useLocation();
  const isInternalRoute = item.href.startsWith("/");
  const active = isInternalRoute && pathname === item.href;

  if (!item.dropdown) {
    const label = <span className={`text-[17px] font-semibold ${active ? "text-[#155D72]" : "text-[#29364A]"}`}>{item.label}</span>;

    return isInternalRoute ? (
      <Link to={item.href} className="block border-b border-[#F0F3F4] no-underline">
        <div className="flex items-center justify-between px-1 py-4">{label}</div>
      </Link>
    ) : (
      <a href={item.href} className="block border-b border-[#F0F3F4] no-underline">
        <div className="flex items-center justify-between px-1 py-4">{label}</div>
      </a>
    );
  }

  return (
    <details className="group block border-b border-[#F0F3F4]">
      <summary className="flex cursor-pointer list-none items-center justify-between px-1 py-4 [&::-webkit-details-marker]:hidden">
        <span className="text-[17px] font-semibold text-[#29364A]">{item.label}</span>
        <ChevronDownIcon
          size={16}
          strokeWidth={2.5}
          className="text-[#27354A] transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="flex flex-col gap-1 pb-3 pl-3.5 pr-1">
        {item.dropdown.map((entry) => (
          <a
            key={entry.label}
            href={entry.href}
            className="rounded-md px-2.5 py-2 text-[15px] text-[#5B6B78] no-underline transition-colors hover:bg-[#EAF3F4] hover:text-brand-icon"
          >
            {entry.label}
          </a>
        ))}
      </div>
    </details>
  );
}
