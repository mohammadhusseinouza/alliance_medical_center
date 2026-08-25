import teamPhoto1 from "../../../assets/home/team-1.webp";
import teamPhoto2 from "../../../assets/home/team-2.webp";
import teamPhoto3 from "../../../assets/home/team-3.webp";
import teamPhoto4 from "../../../assets/home/team-4.webp";
import teamPhoto5 from "../../../assets/home/team-5.webp";
import teamPhoto6 from "../../../assets/home/team-6.webp";
import type { TeamMember } from "./Team.types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "mahmoud-kassir",
    name: "Dr. Mahmoud Kassir",
    roleTranslationKey: "mahmoudKassir",
    photo: teamPhoto1,
  },
  {
    id: "dalal-kassir",
    name: "Dr. Dalal Kassir",
    roleTranslationKey: "dalalKassir",
    photo: teamPhoto2,
  },
  {
    id: "amy-meints",
    name: "Amy Meints",
    roleTranslationKey: "amyMeints",
    photo: teamPhoto3,
  },
  {
    id: "robin-kuiper",
    name: "Robin Kuiper",
    roleTranslationKey: "robinKuiper",
    photo: teamPhoto4,
  },
  {
    id: "amanda-kerwin",
    name: "Amanda Kerwin",
    roleTranslationKey: "amandaKerwin",
    photo: teamPhoto5,
  },
  {
    id: "breiann-church",
    name: "BreiAnn Church",
    roleTranslationKey: "breiannChurch",
    photo: teamPhoto6,
  },
];
