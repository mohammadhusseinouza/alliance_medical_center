import { useState } from "react";
import { useTranslation } from "react-i18next";
import ctaPortraitImage from "../assets/womens-health/Female healthcare provider ready to help patients.png";
import heroImage from "../assets/womens-health/wh-hero.png";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { MobileActionBar, MobileHeader, MobileUtilityStrip } from "../components/layout/MobileChrome";
import { Footer } from "../components/layout/Footer";
import { withLocale } from "../i18n/routing";
import { useLanguage } from "../i18n/useLanguage";
import { SITE } from "../lib/constants";
import { ServicePageHero } from "../sections/services/ServicePageHero";
import { ServiceSidebar } from "../sections/services/ServiceSidebar";
import { WomensHealthContent } from "../sections/services/WomensHealthContent";
import { MobileServiceDetail } from "../sections/services/MobileServiceDetail";

export function WomensHealthPage() {
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
          <MobileServiceDetail slug="womens-health" />
        </div>
        <div className="hidden md:block">
          <ServicePageHero
            currentServiceLabel={t("services.items.womensHealth.title")}
            heroImage={heroImage}
            heroImageAlt={t("womensHealth.hero.imageAlt")}
          />
          <div className="mx-auto grid w-[min(1320px,calc(100%-64px))] grid-cols-[280px_minmax(0,1fr)] items-start gap-10 pt-[46px] pb-[80px] mw-1100:grid-cols-[250px_minmax(0,1fr)] mw-1100:gap-[30px] mw-880:flex mw-880:grid-cols-none mw-880:flex-col mw-880:items-stretch mw-600:w-[calc(100%-32px)]">
            <ServiceSidebar
              activeServiceId="womens-health"
              activeHref={withLocale(SITE.womensHealthHref, language)}
              cta={{
                heading: t("womensHealth.sidebarCta.heading"),
                description: t("womensHealth.sidebarCta.description"),
                portraitAlt: t("womensHealth.sidebarCta.portraitAlt"),
                portraitImage: ctaPortraitImage,
              }}
            />
            <WomensHealthContent />
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
