import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { MobileActionBar, MobileHeader, MobileUtilityStrip } from "../components/layout/MobileChrome";
import { Footer } from "../components/layout/Footer";
import { ContactSidebar } from "../sections/contact/ContactSidebar";
import { ContactHero } from "../sections/contact/ContactHero";
import { ContactForm } from "../sections/contact/ContactForm";
import { ContactHours } from "../sections/contact/ContactHours";
import { MobileContact } from "../sections/contact/MobileContact";

/**
 * One responsive Contact page on `/contact` (and `/es/contact`):
 *  - below `md`: the dedicated mobile composition (`MobileContact`,
 *    handoff 4a) — contact details before the form.
 *  - `md` and up: the existing, approved desktop page, unchanged.
 *
 * The desktop `ContactForm` and the mobile `MobileContactForm` share one
 * `useContactForm` hook (state, validation, submit, success); each uses a
 * distinct id prefix so the two DOM trees never collide.
 */
export function ContactPage() {
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
        <div className="md:hidden">
          <MobileContact />
        </div>
        <div className="hidden md:block">
          <div className="mx-auto grid w-[min(1320px,calc(100%-64px))] grid-cols-[280px_minmax(0,1fr)] items-start gap-10 pt-[46px] pb-[80px] mw-1100:grid-cols-[250px_minmax(0,1fr)] mw-1100:gap-[30px] mw-880:flex mw-880:grid-cols-none mw-880:flex-col mw-880:items-stretch mw-600:w-[calc(100%-32px)]">
            <ContactSidebar />
            <div className="min-w-0">
              <ContactHero />
              <div className="mt-[70px] grid grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] items-start gap-8 mw-1000:grid-cols-1 mw-1000:gap-[50px]">
                <ContactForm />
                <ContactHours />
              </div>
            </div>
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
