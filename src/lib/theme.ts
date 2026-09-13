/**
 * Canonical source for identity values that must be consumed both by
 * `tailwind.config.ts` (for className-based utilities) and by plain
 * runtime TypeScript (for inline styles driven by data files) — a
 * Tailwind config value can't otherwise be imported at runtime.
 *
 * Exactly matches `theme.colors.accent.service1`–`service8` in
 * tailwind.config.ts. `services.data.ts` and `tailwind.config.ts` both
 * import from here so there is one definition, not two.
 *
 * Alliance Medical Center migration (Phase 7.1): all eight now cycle
 * through the four interactive Alliance blues (Deep, Primary, Bright,
 * Light) instead of the old unrelated teal/green/purple/pink/orange set.
 */
export const SERVICE_ACCENT = {
  service1: "#0D47A1",
  service2: "#1976D2",
  service3: "#42A5F5",
  service4: "#90CAF9",
  service5: "#0D47A1",
  service6: "#1976D2",
  service7: "#42A5F5",
  service8: "#90CAF9",
} as const;

/**
 * Exactly matches `theme.colors.contact.*` in tailwind.config.ts.
 * `footer.data.ts` and `tailwind.config.ts` both import from here so there
 * is one definition, not two — same pattern as `SERVICE_ACCENT` above.
 *
 * Alliance Medical Center migration (Phase 7.1): the four Footer contact
 * rows (address/phone/fax/email) now use four distinct Alliance blues
 * instead of the old cyan/teal/purple/blue mixture, preserving the
 * per-row color-coding that helps scan the four rows at a glance.
 */
export const CONTACT_ICON_COLORS = {
  map: "#0D47A1",
  phone: "#1976D2",
  fax: "#42A5F5",
  email: "#90CAF9",
} as const;
