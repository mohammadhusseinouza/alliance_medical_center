import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

/**
 * Responsive site footer. Below the `md` breakpoint it renders the mobile
 * accordion composition (handoff design 1a); at `md` and up it renders the
 * approved desktop footer unchanged. Both share the same `footer.data`
 * link builders and SITE constants.
 */
export function Footer() {
  return (
    <>
      <div className="md:hidden">
        <MobileFooter />
      </div>
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
    </>
  );
}
