import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { MobileActionBar, MobileHeader, MobileUtilityStrip } from "../components/layout/MobileChrome";
import { Footer } from "../components/layout/Footer";
import { UrgentCareHero } from "../sections/urgent-care/UrgentCareHero";
import { UrgentCareConditions } from "../sections/urgent-care/UrgentCareConditions";
import { UrgentCareCta } from "../sections/urgent-care/UrgentCareCta";

/**
 * The standalone top-level Urgent Care marketing page on `/urgent-care`
 * (and `/es/urgent-care`) — not the service-detail layout used by the
 * other `/services/*` pages. One responsive composition (no separate
 * mobile section tree): each section decomposes via Tailwind's `mw-*`
 * breakpoints, per the design handoff.
 */
export function UrgentCareLandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <MobileUtilityStrip right="phone" />
      <MobileHeader />
      <header className="hidden md:block">
        <TopBar
          hamburger={<MobileMenuButton isOpen={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />}
        />
      </header>
      <Navbar mobileOpen={mobileOpen} />

      <main>
        <UrgentCareHero />
        <UrgentCareConditions />
        <UrgentCareCta />
      </main>

      <Footer variant="service" />
      <div
        aria-hidden="true"
        className="md:hidden"
        style={{ height: "calc(72px + env(safe-area-inset-bottom))" }}
      />
      <MobileActionBar />
    </>
  );
}
