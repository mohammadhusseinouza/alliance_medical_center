import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ChevronDownIcon } from "../../icons";
import type { NavItem } from "./navigation.data";
import { isNavItemActive, parseNavHref } from "./navHref";

export interface MobileNavItemProps {
  item: NavItem;
}

export function MobileNavItem({ item }: MobileNavItemProps) {
  const { t } = useTranslation();
  const { pathname, hash } = useLocation();
  const active = isNavItemActive(item, pathname, hash);

  if (!item.dropdown) {
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

  return (
    <details className="group block border-b border-[#F0F3F4]">
      <summary className="flex cursor-pointer list-none items-center justify-between px-1 py-4 [&::-webkit-details-marker]:hidden">
        <span className={`text-[17px] font-semibold ${active ? "text-[#155D72]" : "text-[#29364A]"}`}>
          {item.label}
        </span>
        <ChevronDownIcon
          size={16}
          strokeWidth={2.5}
          className="text-[#27354A] transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="flex flex-col gap-1 pb-3 pl-3.5 pr-1">
        <Link
          to={item.href}
          className="rounded-md px-2.5 py-2 text-[15px] font-semibold text-[#155D72] no-underline transition-colors hover:bg-[#EAF3F4] hover:text-brand-icon"
        >
          {t("common.viewAllServices")}
        </Link>
        {item.dropdown.map((entry) => {
          const entryTarget = parseNavHref(entry.href);
          const entryActive = pathname === entryTarget.pathname && hash === entryTarget.hash;
          return (
            <Link
              key={entry.label}
              to={entry.href}
              className={
                "rounded-md px-2.5 py-2 text-[15px] no-underline transition-colors hover:bg-[#EAF3F4] hover:text-brand-icon " +
                (entryActive ? "bg-[#EAF3F4] text-brand-icon" : "text-[#5B6B78]")
              }
            >
              {entry.label}
            </Link>
          );
        })}
      </div>
    </details>
  );
}
