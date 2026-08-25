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

export function isNavItemActive(item: NavItem, pathname: string, hash: string): boolean {
  const target = parseNavHref(item.href);
  // The Services nav item points at the homepage's #services anchor, but a
  // service detail page (e.g. /services/urgent-care) has no hash to match —
  // treat any /services/* route as still being "within" Services.
  if (target.hash === "#services" && stripLocale(pathname).startsWith("/services/")) return true;
  if (pathname !== target.pathname) return false;
  if (hash === target.hash) return true;
  return (item.dropdown ?? []).some((entry) => parseNavHref(entry.href).hash === hash);
}
