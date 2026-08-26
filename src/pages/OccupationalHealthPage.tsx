import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { OccupationalMedicine } from "../sections/occupational-health/OccupationalMedicine";
import { WorkplaceHealthServices } from "../sections/occupational-health/WorkplaceHealthServices";
import { WorkplaceInjuryCare } from "../sections/occupational-health/WorkplaceInjuryCare";
import { PhysicalExamsScreenings } from "../sections/occupational-health/PhysicalExamsScreenings";
import { DrugTestingServices } from "../sections/occupational-health/DrugTestingServices";
import { DotPhysicalExaminations } from "../sections/occupational-health/DotPhysicalExaminations";
import { TelemedicineServices } from "../sections/occupational-health/TelemedicineServices";
import { AdditionalHealthServices } from "../sections/occupational-health/AdditionalHealthServices";
import { WorkplaceHealthCta } from "../sections/occupational-health/WorkplaceHealthCta";

export function OccupationalHealthPage() {
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
        <OccupationalMedicine />
        <WorkplaceHealthServices />
        <WorkplaceInjuryCare />
        <PhysicalExamsScreenings />
        <DrugTestingServices />
        <DotPhysicalExaminations />
        <TelemedicineServices />
        <AdditionalHealthServices />
        <WorkplaceHealthCta />
      </main>
      <Footer />
    </>
  );
}
