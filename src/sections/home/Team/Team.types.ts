export type TeamRoleTranslationKey =
  | "emilyCarter"
  | "michaelReed"
  | "sophiaBennett"
  | "danielBrooks"
  | "oliviaHayes"
  | "ethanCollins";

export interface TeamMember {
  id: string;
  name: string;
  /** Key suffix under the `team.roles.*` translation resource domain. */
  roleTranslationKey: TeamRoleTranslationKey;
  photo: string;
}
