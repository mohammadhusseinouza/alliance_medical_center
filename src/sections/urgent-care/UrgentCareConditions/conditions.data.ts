import coldFlu from "../../../assets/urgent-care/cond-cold-flu.png";
import strepThroat from "../../../assets/urgent-care/cond-strep-throat.png";
import earInfections from "../../../assets/urgent-care/cond-ear-infections.png";
import minorInjuries from "../../../assets/urgent-care/cond-minor-injuries.png";
import allergies from "../../../assets/urgent-care/cond-allergies.png";
import skinConditions from "../../../assets/urgent-care/cond-skin-conditions.png";
import utis from "../../../assets/urgent-care/cond-utis.png";
import andMore from "../../../assets/urgent-care/cond-and-more.png";

export interface ConditionCardItem {
  id: string;
  image: string;
  /** Key suffix under the `urgentCare.conditions.items.*` translation resource domain. */
  translationKey: string;
}

export const URGENT_CARE_CONDITIONS: ConditionCardItem[] = [
  { id: "cold-flu", image: coldFlu, translationKey: "coldFlu" },
  { id: "strep-throat", image: strepThroat, translationKey: "strepThroat" },
  { id: "ear-infections", image: earInfections, translationKey: "earInfections" },
  { id: "minor-injuries", image: minorInjuries, translationKey: "minorInjuries" },
  { id: "allergies", image: allergies, translationKey: "allergies" },
  { id: "skin-conditions", image: skinConditions, translationKey: "skinConditions" },
  { id: "utis", image: utis, translationKey: "utis" },
  { id: "and-more", image: andMore, translationKey: "andMore" },
];
