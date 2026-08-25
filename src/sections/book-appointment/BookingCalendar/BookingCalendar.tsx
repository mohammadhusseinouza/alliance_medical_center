import { useTranslation } from "react-i18next";
import { ChevronIcon } from "../../../components/icons";
import { INTL_LOCALE_TAGS } from "../../../i18n/types";
import { useLanguage } from "../../../i18n/useLanguage";
import type { BookingCalendarProps, CalendarCell } from "./BookingCalendar.types";

function isDateBooked(date: Date): boolean {
  return (date.getDate() + date.getMonth()) % 7 === 0;
}

function buildCalendarCells(month: Date, selectedIso: string | null): CalendarCell[] {
  const year = month.getFullYear();
  const monthIdx = month.getMonth();
  const firstDay = new Date(year, monthIdx, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, monthIdx + 1, 0).getDate();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dates: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i += 1) dates.push(null);
  for (let d = 1; d <= daysInMonth; d += 1) dates.push(new Date(year, monthIdx, d));
  while (dates.length % 7 !== 0) dates.push(null);

  return dates.map((date) => {
    if (!date) {
      return { date: null, iso: "", label: "", disabled: true, selected: false, available: false };
    }
    const iso = date.toISOString().slice(0, 10);
    const isPast = date < today;
    const isBooked = isDateBooked(date);
    const disabled = isPast || isBooked;
    return {
      date,
      iso,
      label: String(date.getDate()),
      disabled,
      selected: iso === selectedIso,
      available: !disabled,
    };
  });
}

export function BookingCalendar({ month, selectedDate, onSelectDate, onPrevMonth, onNextMonth }: BookingCalendarProps) {
  const { t } = useTranslation();
  const language = useLanguage();
  const localeTag = INTL_LOCALE_TAGS[language];
  const monthLabel = month.toLocaleDateString(localeTag, { month: "long", year: "numeric" });
  const weekdayLabels = t("calendar.weekdaysShort", { returnObjects: true }) as string[];
  const cells = buildCalendarCells(month, selectedDate);

  return (
    <div className="rounded-[9px] border border-[#DCE5EB] bg-white p-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onPrevMonth}
          aria-label={t("calendar.previousMonth")}
          className="flex h-[30px] w-[30px] items-center justify-center rounded-md border-none bg-transparent text-[#374D62] transition-colors duration-150 hover:bg-[#EAF3F4]"
        >
          <ChevronIcon direction="left" size={16} strokeWidth={2.2} />
        </button>
        <span className="text-[14.5px] font-bold text-[#10264A]">{monthLabel}</span>
        <button
          type="button"
          onClick={onNextMonth}
          aria-label={t("calendar.nextMonth")}
          className="flex h-[30px] w-[30px] items-center justify-center rounded-md border-none bg-transparent text-[#374D62] transition-colors duration-150 hover:bg-[#EAF3F4]"
        >
          <ChevronIcon direction="right" size={16} strokeWidth={2.2} />
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-[2px] text-center">
        {weekdayLabels.map((wd) => (
          <span key={wd} className="py-1 text-[11px] font-semibold text-[#8A97A3]">
            {wd}
          </span>
        ))}
      </div>

      <div className="mt-[2px] grid grid-cols-7 gap-[2px]">
        {cells.map((cell, idx) => {
          if (!cell.date) {
            return <button key={`blank-${idx}`} type="button" disabled className="invisible h-9" />;
          }
          const stateClass = cell.selected
            ? "bg-[#2E86EA] text-white cursor-pointer"
            : cell.disabled
              ? "bg-transparent text-[#AEBBC5] cursor-default"
              : "bg-[#EDF6FF] text-[#214D7A] cursor-pointer hover:bg-[#DCECFF]";
          return (
            <button
              key={cell.iso}
              type="button"
              disabled={cell.disabled}
              aria-selected={cell.selected}
              aria-label={cell.date.toLocaleDateString(localeTag, { weekday: "long", month: "long", day: "numeric" })}
              onClick={cell.disabled ? undefined : () => onSelectDate(cell.iso)}
              className={`h-9 rounded-[7px] border-none text-[13px] font-semibold transition-colors duration-150 ${stateClass}`}
            >
              {cell.label}
            </button>
          );
        })}
      </div>

      <div className="mt-3.5 flex gap-4 text-[12px] text-[#687B8D]">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-[9px] w-[9px] rounded-full bg-[#2E86EA]" />
          {t("calendar.selected")}
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-[9px] w-[9px] rounded-full border-[1.5px] border-[#214D7A]" />
          {t("calendar.available")}
        </span>
      </div>
    </div>
  );
}
