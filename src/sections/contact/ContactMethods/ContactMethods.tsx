import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon, CalendarIcon, MailIcon, MapPinIcon, PhoneIcon } from "../../../components/icons";
import { withLocale } from "../../../i18n/routing";
import { useLanguage } from "../../../i18n/useLanguage";
import { SITE } from "../../../lib/constants";
import { CONTACT_ADDRESS } from "../contact.data";
import { CONTACT_METHODS } from "./contactMethods.data";
import type { ContactMethodIcon, ContactMethodItem } from "./contactMethods.data";

const cardBaseClass = "flex flex-col items-start gap-3 rounded-2xl border bg-white p-6 shadow-card";
const cardInteractiveClass =
  cardBaseClass +
  " group border-[#E1EAED] no-underline [transition:transform_220ms_ease,box-shadow_220ms_ease,border-color_220ms_ease] hover:-translate-y-[3px] hover:border-badge-text hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#72C6D2]";
const cardStaticClass = cardBaseClass + " border-[#E1EAED]";
const iconCircleClass = "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-badge-bg text-badge-text";
const titleClass = "text-[17px] font-bold text-text-primary";
const descriptionClass = "mt-1 text-[13.5px] leading-[1.5] text-text-secondary";

function MethodIcon({ icon }: { icon: ContactMethodIcon }) {
  switch (icon) {
    case "phone":
      return <PhoneIcon size={22} />;
    case "mail":
      return <MailIcon size={22} />;
    case "map-pin":
      return <MapPinIcon size={22} />;
    case "calendar":
      return <CalendarIcon size={22} />;
  }
}

function ContactMethodValue({ method }: { method: ContactMethodItem }) {
  const { t } = useTranslation();

  switch (method.id) {
    case "call":
      return <span className="mt-2 text-[14px] font-semibold text-badge-text">{SITE.phone}</span>;
    case "email":
      return <span className="mt-2 text-[14px] font-semibold text-badge-text">{SITE.email}</span>;
    case "visit":
      return (
        <span className="mt-2 text-[14px] font-semibold leading-[1.5] text-text-primary">
          <span className="block">{CONTACT_ADDRESS.line1}</span>
          <span className="block">{CONTACT_ADDRESS.line2}</span>
        </span>
      );
    case "bookOnline":
      return (
        <span className="mt-2 inline-flex items-center gap-1.5 text-[14px] font-semibold text-badge-text">
          {t("contact.methods.items.bookOnline.action")}
          <ArrowRightIcon size={13} className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]" />
        </span>
      );
  }
}

function ContactMethodCard({ method }: { method: ContactMethodItem }) {
  const { t } = useTranslation();
  const language = useLanguage();

  const content = (
    <>
      <span className={iconCircleClass} aria-hidden="true">
        <MethodIcon icon={method.icon} />
      </span>
      <div>
        <div className={titleClass}>{t(`contact.methods.items.${method.translationKey}.title`)}</div>
        <p className={descriptionClass}>{t(`contact.methods.items.${method.translationKey}.description`)}</p>
        <ContactMethodValue method={method} />
      </div>
    </>
  );

  if (!method.href) {
    return <div className={cardStaticClass}>{content}</div>;
  }

  if (method.href.startsWith("/")) {
    return (
      <Link to={withLocale(method.href, language)} className={cardInteractiveClass}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={method.href}
      target={method.external ? "_blank" : undefined}
      rel={method.external ? "noopener" : undefined}
      className={cardInteractiveClass}
    >
      {content}
    </a>
  );
}

export function ContactMethods() {
  const { t } = useTranslation();

  return (
    <section className="mt-[70px]">
      <h2 className="m-0 text-[clamp(26px,2.4vw,32px)] font-bold leading-[1.2] tracking-[-0.6px] text-text-primary">
        {t("contact.methods.heading")}
      </h2>
      <p className="mt-2.5 max-w-[620px] text-[15.5px] leading-[1.6] text-text-secondary">
        {t("contact.methods.description")}
      </p>
      <div className="mt-7 grid grid-cols-4 gap-5 mw-1000:grid-cols-2 mw-640:grid-cols-1">
        {CONTACT_METHODS.map((method) => (
          <ContactMethodCard key={method.id} method={method} />
        ))}
      </div>
    </section>
  );
}
