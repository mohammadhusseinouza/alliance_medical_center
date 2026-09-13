import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { TEAM_MEMBERS } from "./team.data";

/**
 * Mobile team rail (handoff design 1a): a native horizontal scroll-snap
 * rail of portrait cards. Reuses `TEAM_MEMBERS` and the `team.*` copy, and
 * uses semantic `<img>` with real alt text rather than the prototype's
 * CSS-background workaround.
 */
export function MobileTeam() {
  const { t } = useTranslation();

  return (
    <section className="bg-surface-pale-1 pb-[46px] pt-[44px]">
      <div className="px-[22px]">
        <div className="mx-auto w-fit rounded-[5px] bg-team-eyebrow-bg px-3.5 py-2 text-[12px] font-bold uppercase tracking-[0.7px] text-team-eyebrow-text">
          {t("team.eyebrow")}
        </div>
        <h2 className="mt-4 text-center font-heading text-[32px] font-bold leading-[1.1] tracking-[-0.7px] text-text-primary [text-wrap:pretty]">
          {t("team.heading")}
        </h2>
        <p className="mt-3.5 text-center text-[15.5px] leading-[1.6] text-text-primary [text-wrap:pretty]">
          {t("team.description")}
        </p>
      </div>

      <ul className="om-scroll mt-[26px] flex list-none snap-x snap-mandatory gap-3.5 overflow-x-auto p-0 px-[22px]">
        {TEAM_MEMBERS.map((member) => (
          <li
            key={member.id}
            className="relative flex-[0_0_288px] snap-center overflow-hidden rounded-[18px] bg-white shadow-card"
          >
            <div className="relative min-h-[380px]">
              <img
                src={member.photo}
                alt={t("team.photoAlt", { name: member.name })}
                className="absolute inset-0 h-full w-full object-cover object-[50%_22%]"
                loading="lazy"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, rgba(13,71,161,0) 42%, rgba(13,71,161,0.78) 100%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-[22px]">
                <h3 className="font-heading text-[20px] font-bold leading-[1.2] text-white">{member.name}</h3>
                <p className="mt-1.5 text-[13.5px] font-semibold text-[#90CAF9]">
                  {t(`team.roles.${member.roleTranslationKey}`)}
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-white/[0.85]">
                  {t("team.viewFullProfile")}
                  <ArrowRightIcon size={15} />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <p className="mx-[22px] mt-4 text-center text-[12.5px] text-text-muted">{t("team.swipeHint")}</p>
    </section>
  );
}
