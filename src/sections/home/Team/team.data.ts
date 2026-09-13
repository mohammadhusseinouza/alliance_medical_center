import teamPhoto1 from "../../../assets/home/team-1.webp";
import teamPhoto2 from "../../../assets/home/team-2.webp";
import teamPhoto3 from "../../../assets/home/team-3.webp";
import teamPhoto4 from "../../../assets/home/team-4.webp";
import teamPhoto5 from "../../../assets/home/team-5.webp";
import teamPhoto6 from "../../../assets/home/team-6.webp";
import type { TeamMember } from "./Team.types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "emily-carter",
    name: "Dr. Emily Carter",
    roleTranslationKey: "emilyCarter",
    photo: teamPhoto1,
  },
  {
    id: "michael-reed",
    name: "Dr. Michael Reed",
    roleTranslationKey: "michaelReed",
    photo: teamPhoto2,
  },
  {
    id: "sophia-bennett",
    name: "Sophia Bennett",
    roleTranslationKey: "sophiaBennett",
    photo: teamPhoto3,
  },
  {
    id: "daniel-brooks",
    name: "Daniel Brooks",
    roleTranslationKey: "danielBrooks",
    photo: teamPhoto4,
  },
  {
    id: "olivia-hayes",
    name: "Olivia Hayes",
    roleTranslationKey: "oliviaHayes",
    photo: teamPhoto5,
  },
  {
    id: "ethan-collins",
    name: "Ethan Collins",
    roleTranslationKey: "ethanCollins",
    photo: teamPhoto6,
  },
];
