import { useState } from "react";
import { ChevronIcon } from "../../../components/icons";
import { TEAM_MEMBERS } from "./team.data";
import { TeamCard } from "./TeamCard";

const WINDOW_SIZE = 3;
const arrowButtonClass =
  "absolute top-[150px] z-[5] flex h-[52px] w-[52px] items-center justify-center rounded-full border-none bg-white text-[#168394] shadow-[0_7px_20px_rgba(20,70,90,0.10)] transition-[transform,background-color,color] duration-[220ms] ease hover:scale-[1.06] hover:bg-[#168394] hover:text-white focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[rgba(38,150,170,0.25)] mw-700:h-11 mw-700:w-11";

function wrap(index: number, length: number): number {
  return ((index % length) + length) % length;
}

export function Team() {
  const [index, setIndex] = useState(4);
  const total = TEAM_MEMBERS.length;

  const visible = Array.from({ length: WINDOW_SIZE }, (_, k) => TEAM_MEMBERS[wrap(index + k, total)]);

  return (
    <section
      className="relative px-6 pb-[105px] pt-[95px]"
      style={{ background: "linear-gradient(180deg, #FBFDFE 0%, #F3F8FA 100%)" }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto w-fit animate-team-badge rounded-[5px] bg-[#E6F4F7] px-[14px] py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-[#168397] motion-reduce:[animation-duration:0.01ms]">
          Our Team
        </div>

        <h2 className="mt-[18px] animate-team-title text-center text-[clamp(42px,4vw,58px)] font-bold leading-[1.08] tracking-[-1.2px] text-[#10203B] motion-reduce:[animation-duration:0.01ms]">
          Meet Our Expert Medical Team
        </h2>

        <p className="mx-auto mt-[18px] max-w-[760px] animate-team-desc text-center text-[16px] leading-[1.65] text-[#5E7186] motion-reduce:[animation-duration:0.01ms]">
          Meet the professionals dedicated to providing compassionate urgent care, family medicine, and convenient
          healthcare services to our community.
        </p>

        <div className="relative mt-[55px]">
          <button
            type="button"
            aria-label="Previous team members"
            onClick={() => setIndex((i) => wrap(i - 1, total))}
            className={`${arrowButtonClass} left-[-26px]`}
          >
            <ChevronIcon direction="left" size={19} />
          </button>
          <button
            type="button"
            aria-label="Next team members"
            onClick={() => setIndex((i) => wrap(i + 1, total))}
            className={`${arrowButtonClass} right-[-26px]`}
          >
            <ChevronIcon direction="right" size={19} />
          </button>

          <div className="grid grid-cols-3 gap-7 mw-1100:grid-cols-2 mw-700:grid-cols-1">
            {visible.map((member, k) => (
              <TeamCard
                key={`${index}-${member.id}`}
                member={member}
                animationDelayMs={k * 70}
                hiddenClassName={k === 2 ? "mw-1100:hidden" : k === 1 ? "mw-700:hidden" : ""}
              />
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-[9px]">
            {TEAM_MEMBERS.map((member, i) => {
              const active = i === index;
              return (
                <button
                  key={member.id}
                  type="button"
                  aria-label={`Go to team member ${i + 1}`}
                  aria-current={active || undefined}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full border-none p-0 ${active ? "w-5 bg-[#168899]" : "w-2 bg-[#D1DDE1]"}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
