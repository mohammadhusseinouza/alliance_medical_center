import { MobileHero } from "../sections/home/Hero";
import { MobileHighlightCarousel } from "../sections/home/HeroInfoCards";
import { MobileServices } from "../sections/home/Services";
import { MobileAbout } from "../sections/home/About";
import { MobileCare } from "../sections/home/Care";
import { MobileWorkplaceHealth } from "../sections/home/WorkplaceHealth";
import { MobileTeam } from "../sections/home/Team";
import { MobileAppointmentReferral } from "../sections/home/AppointmentReferral";
import { MobileReachUs } from "../sections/home/ReachUs";

/**
 * The dedicated mobile composition of the Home page body (handoff design
 * 1a), in the required section order. Rendered by `HomePage` inside the
 * shared `<main>` only below the `md` breakpoint; the approved desktop
 * sections render at `md` and up. Shared chrome (utility strip, header /
 * drawer, footer, action bar) is composed by `HomePage`.
 */
export function MobileHomePage() {
  return (
    <>
      <MobileHero />
      <MobileHighlightCarousel />
      <MobileServices />
      <MobileAbout />
      <MobileCare />
      <MobileWorkplaceHealth />
      <MobileTeam />
      <MobileAppointmentReferral />
      <MobileReachUs />
    </>
  );
}
