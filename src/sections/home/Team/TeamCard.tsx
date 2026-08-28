import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import type { TeamMember } from "./Team.types";

export interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const { t } = useTranslation();

  return (
    <div className="group relative min-h-[420px] overflow-hidden rounded-[18px] border border-team-card-border bg-white shadow-card [transition:transform_260ms_ease,box-shadow_260ms_ease,border-color_260ms_ease] hover:-translate-y-[7px] hover:border-team-card-hover-border hover:shadow-team-card-hover motion-reduce:duration-[0.01ms]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={member.photo}
          alt={t("team.photoAlt", { name: member.name })}
          className="h-full w-full object-cover transition-transform duration-[450ms] ease group-hover:scale-[1.035]"
          loading="lazy"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "linear-gradient(180deg, var(--team-overlay-from) 45%, var(--team-overlay-to) 100%)" }}
      />

      <div className="absolute inset-x-0 bottom-0 px-[26px] pb-[26px] pt-6">
        <h3 className="font-heading text-[21px] font-bold leading-[1.2] text-white">{member.name}</h3>
        <p className="mt-[6px] text-[14px] font-semibold text-team-role-text">
          {t(`team.roles.${member.roleTranslationKey}`)}
        </p>
        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-[13px] font-semibold text-white no-underline"
        >
          {t("team.viewFullProfile")}
          <ArrowRightIcon size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
}
