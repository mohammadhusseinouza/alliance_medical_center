import { useState } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/urgent-care/hero.png";
import ctaPortraitImage from "../assets/urgent-care/cta-portrait.png";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { MobileActionBar, MobileHeader, MobileUtilityStrip } from "../components/layout/MobileChrome";
import { Footer } from "../components/layout/Footer";
import { withLocale } from "../i18n/routing";
import { useLanguage } from "../i18n/useLanguage";
import { SITE } from "../lib/constants";
import { ServicePageHero } from "../sections/services/ServicePageHero";
import { ServiceSidebar } from "../sections/services/ServiceSidebar";
import { UrgentCareContent } from "../sections/services/UrgentCareContent";
import { MobileServiceDetail } from "../sections/services/MobileServiceDetail";

export function UrgentCarePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const language = useLanguage();

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
          <MobileServiceDetail slug="urgent-care" />
        </div>
        <div className="hidden md:block">
          <ServicePageHero
            currentServiceLabel={t("services.items.urgentCare.title")}
            heroImage={heroImage}
            heroImageAlt={t("servicePage.urgentCare.heroImageAlt")}
          />
          <div className="mx-auto grid w-[min(1320px,calc(100%-64px))] grid-cols-[280px_minmax(0,1fr)] items-start gap-10 pt-[46px] pb-[80px] mw-1100:grid-cols-[250px_minmax(0,1fr)] mw-1100:gap-[30px] mw-880:flex mw-880:grid-cols-none mw-880:flex-col mw-880:items-stretch mw-600:w-[calc(100%-32px)]">
            <ServiceSidebar
              activeServiceId="urgent-care"
              activeHref={withLocale(SITE.urgentCareHref, language)}
              cta={{
                heading: t("servicePage.sidebarCta.heading"),
                description: t("servicePage.sidebarCta.description"),
                portraitAlt: t("servicePage.sidebarCta.portraitAlt"),
                portraitImage: ctaPortraitImage,
              }}
            />
            <UrgentCareContent />
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
