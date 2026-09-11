import { useState } from "react";
import { TopBar } from "../components/layout/TopBar";
import { Navbar, MobileMenuButton } from "../components/layout/Navbar";
import { MobileHeader, MobileUtilityStrip } from "../components/layout/MobileChrome";
import { Footer } from "../components/layout/Footer";
import { BookingIntro } from "../sections/book-appointment/BookingIntro";
import { BookingForm } from "../sections/book-appointment/BookingForm";
import { DoctorPanel } from "../sections/book-appointment/DoctorPanel";
import { MobileBookAppointment } from "../sections/book-appointment/MobileBookAppointment";

/**
 * One responsive Book Appointment page on `/book-appointment`
 * (and `/es/book-appointment`):
 *  - below `md`: the dedicated mobile composition (`MobileBookAppointment`,
 *    handoff 5a). No persistent bottom action bar — the visitor is already
 *    in the booking flow.
 *  - `md` and up: the existing, approved desktop page, unchanged.
 *
 * The desktop `BookingForm` and the mobile `MobileBookingForm` share one
 * `useBookingForm` hook (values, errors, step, month, date/time selection,
 * validation, submit, reset); each uses a distinct id prefix so the two
 * DOM trees never collide.
 */
export function BookAppointmentPage() {
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
          <MobileBookAppointment />
        </div>
        <div className="hidden md:block">
          <BookingIntro />
          <div className="mx-auto grid w-[min(1500px,calc(100%-64px))] grid-cols-[minmax(0,1.15fr)_minmax(380px,0.85fr)] items-start gap-[50px] pt-10 pb-[90px] mw-1100:grid-cols-[minmax(0,1fr)_340px] mw-900:flex mw-900:flex-col-reverse mw-900:grid-cols-none mw-700:w-[calc(100%-28px)]">
            <BookingForm />
            <DoctorPanel />
          </div>
        </div>
      </main>

      <Footer variant="service" />
    </>
  );
}
