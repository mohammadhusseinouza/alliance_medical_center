import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { Hero } from "../sections/home/Hero";
import { HeroInfoCards } from "../sections/home/HeroInfoCards";
import { Services } from "../sections/home/Services";
import { About } from "../sections/home/About";
import { Care } from "../sections/home/Care";
import { Team } from "../sections/home/Team";
import { AppointmentReferral } from "../sections/home/AppointmentReferral";
import { ReachUs } from "../sections/home/ReachUs";
import { Footer } from "../components/layout/Footer";

export function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header>
        <TopBar
          hamburger={<MobileMenuButton isOpen={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />}
        />
      </header>
      <Navbar mobileOpen={mobileOpen} />
      <main>
        <Hero />
        <HeroInfoCards />
        <Services />
        <About />
        <Care />
        <Team />
        <AppointmentReferral />
        <ReachUs />
      </main>
      <Footer />
    </>
  );
}
