import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { MobileActionBar, MobileHeader, MobileUtilityStrip } from "../components/layout/MobileChrome";
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
import { MobileOccupationalHealth } from "../sections/occupational-health/MobileOccupationalHealth";

/**
 * One responsive Occupational Health page on `/occupational-health`:
 *  - below `md`: the dedicated employer-focused mobile composition
 *    (`MobileOccupationalHealth`, handoff 3a) — not the five-service
 *    `MobileServiceDetail` shell.
 *  - `md` and up: the existing, approved desktop page, unchanged.
 */
export function OccupationalHealthPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();

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
        <div className="md:hidden">
          <MobileOccupationalHealth />
        </div>
        <div className="hidden md:block">
          <OccupationalMedicine />
          <WorkplaceHealthServices />
          <WorkplaceInjuryCare />
          <PhysicalExamsScreenings />
          <DrugTestingServices />
          <DotPhysicalExaminations />
          <TelemedicineServices />
          <AdditionalHealthServices />
          <WorkplaceHealthCta />
        </div>
      </main>

      <Footer variant="service" />
      <div
        aria-hidden="true"
        className="md:hidden"
        style={{ height: "calc(72px + env(safe-area-inset-bottom))" }}
      />
      <MobileActionBar secondaryLabel={t("occupationalHealth.cta.requestConsultation")} />
    </>
  );
}
