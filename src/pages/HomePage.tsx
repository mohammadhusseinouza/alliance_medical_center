import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { MobileActionBar, MobileHeader, MobileUtilityStrip } from "../components/layout/MobileChrome";
import { Hero } from "../sections/home/Hero";
import { HeroInfoCards } from "../sections/home/HeroInfoCards";
import { Services } from "../sections/home/Services";
import { About } from "../sections/home/About";
import { Care } from "../sections/home/Care";
import { WorkplaceHealth } from "../sections/home/WorkplaceHealth";
import { Team } from "../sections/home/Team";
import { AppointmentReferral } from "../sections/home/AppointmentReferral";
import { ReachUs } from "../sections/home/ReachUs";
import { Footer } from "../components/layout/Footer";
import { MobileHomePage } from "./MobileHomePage";

/**
 * One responsive Home page:
 *  - below `md` (768px): the dedicated mobile composition from the mobile
 *    Home handoff (utility strip, sticky header/drawer, `MobileHomePage`
 *    sections, responsive Footer accordion, persistent bottom action bar).
 *  - `md` and up: the existing, approved desktop Home page, unchanged.
 *
 * Both compositions share one `<main>` landmark and the responsive shared
 * `Footer`; content data, routes and copy are shared, not duplicated.
 */
export function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Chrome — mobile (each component hides itself at md+ via md:hidden;
          not wrapped in a shared div — see MobileHeader.tsx for why) */}
      <MobileUtilityStrip />
      <MobileHeader />

      {/* Chrome — approved desktop / tablet, unchanged */}
      <header className="hidden md:block">
        <TopBar
          hamburger={<MobileMenuButton isOpen={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />}
        />
      </header>
      <Navbar mobileOpen={mobileOpen} />

      <main>
        <div className="md:hidden">
          <MobileHomePage />
        </div>
        <div className="hidden md:block">
          <Hero />
          <HeroInfoCards />
          <Services />
          <About />
          <Care />
          <WorkplaceHealth />
          <Team />
          <AppointmentReferral />
          <ReachUs />
        </div>
      </main>

      <Footer />

      {/* Spacer so the fixed mobile action bar never covers the footer's end */}
      <div
        aria-hidden="true"
        className="md:hidden"
        style={{ height: "calc(72px + env(safe-area-inset-bottom))" }}
      />
      <MobileActionBar />
    </>
  );
}
