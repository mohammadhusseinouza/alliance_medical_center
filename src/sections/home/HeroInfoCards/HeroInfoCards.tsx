import {
  ArrowRightIcon,
  CalendarIcon,
  ClockAltIcon,
  HeartIcon,
  MedicalBagIcon,
  PhoneIcon,
  UsersIcon,
} from "../../../components/icons";
import { HERO_INFO_CARDS } from "./heroInfoCards.data";
import type { HeroInfoCardDecoration, HeroInfoCardIcon, HeroInfoCardItem } from "./HeroInfoCards.types";

const mainIconClass =
  "mb-[26px] box-border h-[60px] w-[60px] p-[10px] text-white/95 transition-transform duration-[250ms] ease group-hover:-translate-y-[3px] group-hover:scale-[1.04]";

function MainIcon({ icon }: { icon: HeroInfoCardIcon }) {
  if (icon === "medical-bag") return <MedicalBagIcon size={48} strokeWidth={1.6} className={mainIconClass} />;
  if (icon === "users") return <UsersIcon size={48} strokeWidth={1.6} className={mainIconClass} />;
  return <ClockAltIcon size={48} strokeWidth={1.6} className={mainIconClass} />;
}

function DecorationIcon({ decoration }: { decoration: HeroInfoCardDecoration }) {
  const className = "absolute right-[32px] top-[34px] opacity-[0.14]";
  if (decoration === "heart") return <HeartIcon size={88} strokeWidth={1.6} className={className} />;
  return <CalendarIcon size={88} strokeWidth={1.6} className={className} />;
}

function CardBody({ card }: { card: HeroInfoCardItem }) {
  if (card.kind === "phone") {
    return (
      <>
        <p className="mt-[14px] max-w-[300px] text-[14.5px] leading-[1.65] text-white/[0.82]">{card.description}</p>
        <a
          href={card.phoneHref}
          className="mt-[26px] inline-flex items-center gap-3 text-[16px] font-bold text-white no-underline"
        >
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.18]">
            <PhoneIcon size={14} />
          </span>
          {card.phoneLabel}
        </a>
      </>
    );
  }

  if (card.kind === "cta") {
    return (
      <>
        <p className="mt-[14px] max-w-[300px] text-[14.5px] leading-[1.65] text-white/[0.82]">{card.description}</p>
        <a
          href={card.ctaHref}
          className="mt-[26px] inline-flex h-[50px] min-w-[200px] items-center justify-center gap-2 rounded-md bg-white px-[22px] text-[15px] font-semibold text-[#13324F] no-underline"
        >
          {card.ctaLabel}
          <ArrowRightIcon size={13} />
        </a>
      </>
    );
  }

  return (
    <>
      <div className="mt-[18px] flex flex-col text-[14.5px] text-white/90">
        {card.rows.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-3 py-3">
            <span>{row.label}</span>
            <span>{row.value}</span>
          </div>
        ))}
      </div>
      <div className="mt-[14px] border-t border-white/25 pt-[14px] text-[13.5px] font-semibold text-white/[0.92]">
        {card.statusLabel}
      </div>
    </>
  );
}

export function HeroInfoCards() {
  return (
    <div className="relative -mt-[175px] pb-[175px] mw-900:mt-0 mw-900:pb-0">
      <div className="absolute left-1/2 bottom-[-110px] z-10 grid w-[min(1320px,calc(100%-80px))] -translate-x-1/2 grid-cols-3 items-stretch gap-[22px] mw-1100:w-[calc(100%-60px)] mw-1100:gap-[18px] mw-900:relative mw-900:left-auto mw-900:bottom-auto mw-900:mt-[-40px] mw-900:w-full mw-900:transform-none mw-900:grid-cols-1 mw-900:gap-[14px] mw-900:px-[18px]">
        {HERO_INFO_CARDS.map((card) => (
          <article
            key={card.id}
            className="group relative h-full min-h-[410px] overflow-hidden px-[34px] pb-[34px] pt-[38px] text-white [transition:transform_260ms_ease,box-shadow_260ms_ease] animate-card-up hover:z-[2] hover:-translate-y-[7px] hover:shadow-[0_16px_30px_rgba(8,55,75,0.16)] motion-reduce:animate-none mw-1100:min-h-[370px] mw-1100:px-[24px] mw-1100:py-[30px] mw-900:min-h-[340px]"
            style={{ background: card.gradient, animationDelay: `${card.animationDelayMs}ms` }}
          >
            <DecorationIcon decoration={card.decoration} />
            <MainIcon icon={card.icon} />
            <h2 className="mt-[2px] text-[23px] font-bold leading-[1.2] text-white">{card.title}</h2>
            <CardBody card={card} />
          </article>
        ))}
      </div>
    </div>
  );
}
