import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { withLocale } from "../i18n/routing";
import { useLanguage } from "../i18n/useLanguage";
import { SITE } from "../lib/constants";
import { ServicePageHero } from "../sections/services/ServicePageHero";
import { ServiceSidebar } from "../sections/services/ServiceSidebar";
import { PediatricCareContent } from "../sections/services/PediatricCareContent";

export function PediatricCarePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const language = useLanguage();

  return (
    <>
      <header>
        <TopBar
          hamburger={<MobileMenuButton isOpen={mobileOpen} onToggle={() => setMobileOpen((open) => !open)} />}
        />
      </header>
      <Navbar mobileOpen={mobileOpen} />
      <main>
        <ServicePageHero
          currentServiceLabel={t("services.items.pediatricCare.title")}
          heroImageAlt={t("pediatricCare.hero.imageAlt")}
        />
        <div className="mx-auto grid w-[min(1320px,calc(100%-64px))] grid-cols-[280px_minmax(0,1fr)] items-start gap-10 pt-[46px] pb-[80px] mw-1100:grid-cols-[250px_minmax(0,1fr)] mw-1100:gap-[30px] mw-880:flex mw-880:grid-cols-none mw-880:flex-col mw-880:items-stretch mw-600:w-[calc(100%-32px)]">
          <ServiceSidebar
            activeServiceId="pediatric-care"
            activeHref={withLocale(SITE.pediatricCareHref, language)}
            cta={{
              heading: t("pediatricCare.sidebarCta.heading"),
              description: t("pediatricCare.sidebarCta.description"),
              portraitAlt: t("pediatricCare.sidebarCta.portraitAlt"),
            }}
          />
          <PediatricCareContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
