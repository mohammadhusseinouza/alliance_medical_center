import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { BookingIntro } from "../sections/book-appointment/BookingIntro";
import { BookingForm } from "../sections/book-appointment/BookingForm";
import { DoctorPanel } from "../sections/book-appointment/DoctorPanel";

export function BookAppointmentPage() {
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
        <BookingIntro />
        <div className="mx-auto grid w-[min(1500px,calc(100%-64px))] grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)] items-start gap-[50px] pt-10 pb-[90px] mw-1100:grid-cols-[minmax(0,1fr)_340px] mw-900:flex mw-900:flex-col-reverse mw-900:grid-cols-none mw-700:w-[calc(100%-28px)]">
          <BookingForm />
          <DoctorPanel />
        </div>
      </main>
      <Footer showNewsletter={false} />
    </>
  );
}
