import { stripLocale } from "../../../i18n/routing";
import type { NavItem } from "./navigation.data";

export interface ParsedNavHref {
  pathname: string;
  hash: string;
}

export function parseNavHref(href: string): ParsedNavHref {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return { pathname: href, hash: "" };
  return { pathname: href.slice(0, hashIndex) || "/", hash: href.slice(hashIndex) };
}

/**
 * Route-only active state. Home-page hashes (#services, #about, #contact, ...)
 * never affect which top-level label is active — only the canonical
 * (locale-stripped) pathname does, via each item's `activeMatch`. This
 * guarantees exactly one top-level item can ever be active at a time.
 */
export function isNavItemActive(item: NavItem, pathname: string): boolean {
  if (!item.activeMatch) return false;
  const canonical = stripLocale(pathname);
  switch (item.activeMatch) {
    case "home":
      return canonical === "/";
    case "urgent-care":
      return canonical === "/urgent-care";
    case "services":
      return canonical.startsWith("/services/");
    case "occupational-health":
      return canonical === "/occupational-health";
    case "contact":
      return canonical === "/contact";
  }
}
