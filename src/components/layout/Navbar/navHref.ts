export interface ParsedNavHref {
  pathname: string;
  hash: string;
}

export function parseNavHref(href: string): ParsedNavHref {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return { pathname: href, hash: "" };
  return { pathname: href.slice(0, hashIndex) || "/", hash: href.slice(hashIndex) };
}
