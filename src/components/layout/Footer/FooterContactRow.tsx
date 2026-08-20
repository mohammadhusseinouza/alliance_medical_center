import { MailIcon, MapPinIcon, PhoneIcon, PrinterIcon } from "../../icons";
import type { FooterContactIconName, FooterContactRow } from "./Footer.types";

function ContactIcon({ icon, color }: { icon: FooterContactIconName; color: string }) {
  const props = { size: 18, strokeWidth: 2, className: "mt-0.5 flex-shrink-0", style: { color } };
  if (icon === "map-pin") return <MapPinIcon {...props} />;
  if (icon === "phone") return <PhoneIcon {...props} />;
  if (icon === "printer") return <PrinterIcon {...props} />;
  return <MailIcon {...props} />;
}

export interface FooterContactRowItemProps {
  row: FooterContactRow;
}

export function FooterContactRowItem({ row }: FooterContactRowItemProps) {
  const content = (
    <>
      <ContactIcon icon={row.icon} color={row.iconColor} />
      <span>
        {row.lines.map((line, i) => (
          <span key={line}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </span>
    </>
  );
  const className = "flex items-start gap-[13px] text-[14.5px] leading-[1.55] text-white/[0.78]";

  if (row.href) {
    return (
      <a
        href={row.href}
        target={row.external ? "_blank" : undefined}
        rel={row.external ? "noopener" : undefined}
        className={`${className} no-underline transition-colors duration-200 hover:text-white`}
      >
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}
