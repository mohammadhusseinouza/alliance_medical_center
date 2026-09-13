import { DesktopFooter } from "./DesktopFooter";
import { MobileFooter } from "./MobileFooter";

export interface FooterProps {
  /**
   * Passed through to the mobile accordion footer. `"service"` trims its
   * Contact Info list to phone + address (mobile service-detail handoff).
   * The desktop footer is unaffected by this prop.
   */
  variant?: "default" | "service";
}

/**
 * Responsive site footer. Below the `md` breakpoint it renders the mobile
 * accordion composition (handoff design 1a); at `md` and up it renders the
 * approved desktop footer unchanged. Both share the same `footer.data`
 * link builders and SITE constants.
 */
export function Footer({ variant = "default" }: FooterProps) {
  return (
    <>
      <div className="md:hidden">
        <MobileFooter variant={variant} />
      </div>
      <div className="hidden md:block">
        <DesktopFooter />
      </div>
    </>
  );
}
