import { useState } from "react";
import { useTranslation } from "react-i18next";
import ctaPortraitImage from "../assets/diagnostic-services/Diagnostic lab technician ready to help patients.png";
import heroImage from "../assets/diagnostic-services/diagnostic-hero.png";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { MobileActionBar, MobileHeader, MobileUtilityStrip } from "../components/layout/MobileChrome";
import { Footer } from "../components/layout/Footer";
import { withLocale } from "../i18n/routing";
import { useLanguage } from "../i18n/useLanguage";
import { SITE } from "../lib/constants";
import { ServicePageHero } from "../sections/services/ServicePageHero";
import { ServiceSidebar } from "../sections/services/ServiceSidebar";
import { DiagnosticServicesContent } from "../sections/services/DiagnosticServicesContent";
import { MobileServiceDetail } from "../sections/services/MobileServiceDetail";

export function DiagnosticServicesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <>
      <div className="md:hidden">
        <MobileUtilityStrip right="phone" />
        <MobileHeader />
      </div>
      <div className="hidden md:block">
        <header>
          <TopBar
            hamburger={<MobileMenuButton isOpen={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />}
          />
        </header>
        <Navbar mobileOpen={mobileOpen} />
      </div>

      <main>
        <div className="md:hidden">
          <MobileServiceDetail slug="diagnostic-services" />
        </div>
        <div className="hidden md:block">
          <ServicePageHero
            currentServiceLabel={t("services.items.diagnosticServices.title")}
            heroImage={heroImage}
            heroImageAlt={t("diagnosticServices.hero.imageAlt")}
          />
          <div className="mx-auto grid w-[min(1320px,calc(100%-64px))] grid-cols-[280px_minmax(0,1fr)] items-start gap-10 pt-[46px] pb-[80px] mw-1100:grid-cols-[250px_minmax(0,1fr)] mw-1100:gap-[30px] mw-880:flex mw-880:grid-cols-none mw-880:flex-col mw-880:items-stretch mw-600:w-[calc(100%-32px)]">
            <ServiceSidebar
              activeServiceId="diagnostic-services"
              activeHref={withLocale(SITE.diagnosticServicesHref, language)}
              cta={{
                heading: t("diagnosticServices.sidebarCta.heading"),
                description: t("diagnosticServices.sidebarCta.description"),
                portraitAlt: t("diagnosticServices.sidebarCta.portraitAlt"),
                portraitImage: ctaPortraitImage,
              }}
            />
            <DiagnosticServicesContent />
          </div>
        </div>
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
