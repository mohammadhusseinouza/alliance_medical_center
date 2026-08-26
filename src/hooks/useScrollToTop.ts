import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the top of the page on every route change that has no hash,
 * so normal page-to-page navigation never inherits the previous page's
 * scroll position. When the destination has a hash, this is a no-op —
 * useScrollToHash owns scrolling to that section instead.
 */
export function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);
}
