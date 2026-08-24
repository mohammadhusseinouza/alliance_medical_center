import type { ReactNode } from "react";
import { ClockIcon, Logo, MapPinIcon, PhoneIcon } from "../../icons";
import { Container } from "../Container";
import { SITE } from "../../../lib/constants";

const iconCircleClass =
  "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-brand-icon text-brand-icon";

export interface TopBarProps {
  hamburger?: ReactNode;
}

export function TopBar({ hamburger }: TopBarProps) {
  return (
    <div className="w-full bg-white">
      <Container className="flex min-h-[96px] flex-wrap items-center justify-between gap-4 px-[60px] py-4">
        <div className="flex flex-shrink-0 items-center gap-2.5">
          <Logo />
          <div className="flex flex-col leading-[1.15]">
            <span className="whitespace-nowrap text-[20px] font-bold text-[#29364A]">{SITE.name}</span>
            <span className="whitespace-nowrap text-[10.5px] font-semibold uppercase tracking-[0.4px] text-[#5B9A5E]">
              {SITE.tagline}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-10 mw-1300:gap-[26px] mw-640:hidden">
          <div className="flex items-center gap-3 mw-1100:hidden">
            <span className={iconCircleClass}>
              <ClockIcon size={20} />
            </span>
            <div className="flex flex-col leading-[1.3]">
              <span className="whitespace-nowrap text-[15px] font-semibold text-[#29364A]">Open 7 Days</span>
              <span className="whitespace-nowrap text-[13px] font-normal text-text-muted">{SITE.hours.time}</span>
            </div>
          </div>

          <div className="flex items-center gap-3 mw-980:hidden">
            <span className={iconCircleClass}>
              <PhoneIcon size={19} />
            </span>
            <div className="flex flex-col leading-[1.3]">
              <a href={SITE.phoneHref} className="whitespace-nowrap text-[15px] font-semibold text-[#29364A]">
                {SITE.phone}
              </a>
              <a href={SITE.mailtoHref} className="whitespace-nowrap text-[13px] font-normal text-text-muted">
                {SITE.email}
              </a>
            </div>
          </div>

          <a
            href={SITE.address.mapsHref}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-3"
          >
            <span className={iconCircleClass}>
              <MapPinIcon size={19} />
            </span>
            <div className="flex flex-col leading-[1.3]">
              <span className="whitespace-nowrap text-[15px] font-semibold text-[#29364A]">
                {SITE.address.line1}
              </span>
              <span className="whitespace-nowrap text-[13px] font-normal text-text-muted">
                {SITE.address.line2}
              </span>
            </div>
          </a>
        </div>

        {hamburger}
      </Container>
    </div>
  );
}
