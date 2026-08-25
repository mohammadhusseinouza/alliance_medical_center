export type TeamRoleTranslationKey =
  | "mahmoudKassir"
  | "dalalKassir"
  | "amyMeints"
  | "robinKuiper"
  | "amandaKerwin"
  | "breiannChurch";

export interface TeamMember {
  id: string;
  name: string;
  /** Key suffix under the `team.roles.*` translation resource domain. */
  roleTranslationKey: TeamRoleTranslationKey;
  photo: string;
}
