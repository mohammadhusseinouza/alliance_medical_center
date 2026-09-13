import { SERVICE_ACCENT } from "../../../lib/theme";
import { SERVICES } from "./services.data";
import type { ServiceItem } from "./Services.types";

/**
 * Urgent Care is a standalone top-level page (`/urgent-care`), not a
 * service-detail page, so it's deliberately absent from the shared
 * `SERVICES` enumeration (Navbar dropdown, Footer links, service-detail
 * sidebar/picker all consume `SERVICES` directly and must not show it).
 * This card exists only so the Home page can keep displaying it alongside
 * the other services, linking to `SITE.urgentCareHref` via each Home
 * component's own local href map (see `ServiceItem.tsx` / `MobileServices.tsx`).
 */
const URGENT_CARE_HOME_CARD: ServiceItem = {
  id: "urgent-care",
  icon: "medical-kit",
  accentColor: SERVICE_ACCENT.service1,
  animationDelayMs: 80,
  translationKey: "urgentCare",
};

/**
 * Home-only service list: the shared `SERVICES` plus the Urgent Care card,
 * in the original display order. Used exclusively by the Home page's
 * Services grid (desktop `Services.tsx` and mobile `MobileServices.tsx`).
 */
export const HOME_SERVICES: ServiceItem[] = [URGENT_CARE_HOME_CARD, ...SERVICES];
