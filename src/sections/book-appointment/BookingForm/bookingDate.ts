/**
 * Formats an ISO `YYYY-MM-DD` booking date into a short, locale-aware
 * label (e.g. "Thu, Sep 10" / "jue, 10 sept"). The ISO string is parsed
 * from its calendar components so it is not shifted by the local timezone
 * (matching how `BookingCalendar` derives the ISO from a local `Date`).
 */
export function bookingDateLabel(iso: string, localeTag: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString(localeTag, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}
