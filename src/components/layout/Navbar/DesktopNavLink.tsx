import { ChevronDownIcon } from "../../icons";
import type { NavItem } from "./navigation.data";

export interface DesktopNavLinkProps {
  item: NavItem;
}

function linkClass(active: boolean | undefined) {
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
  if (!item.dropdown) {
    return (
      <div className="relative">
        <a href={item.href} className={linkClass(item.active)}>
          {item.label}
        </a>
      </div>
    );
  }

  return (
    <div className="group relative">
      <a href={item.href} className={linkClass(item.active)}>
        {item.label}
        <ChevronDownIcon
          size={12}
          className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
        />
      </a>
      <div className="absolute left-0 top-[calc(100%+12px)] z-50 hidden w-[250px] animate-fade-slide rounded-lg bg-white p-2.5 shadow-dropdown group-hover:block group-focus-within:block">
        {item.dropdown.map((entry) => (
          <a
            key={entry.label}
            href={entry.href}
            className="block rounded-md px-3.5 py-2.5 text-[15px] font-medium text-[#27354A] no-underline transition-colors duration-150 hover:bg-[#EAF3F4] hover:text-brand-icon focus-visible:bg-[#EAF3F4] focus-visible:text-brand-icon"
          >
            {entry.label}
          </a>
        ))}
      </div>
    </div>
  );
}
