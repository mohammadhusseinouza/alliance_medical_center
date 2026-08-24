import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const element = document.getElementById(hash.slice(1));
    element?.scrollIntoView();
  }, [pathname, hash]);
}
