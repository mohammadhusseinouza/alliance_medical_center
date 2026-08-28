import { useEffect, useRef, useState, type FormEvent, type RefObject } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { FormField } from "../../../components/ui/FormField";
import { EMPTY_CONTACT_VALUES } from "./contactForm.data";
import { ContactFormSuccess } from "./ContactFormSuccess";
import { validateContactForm } from "./validate";
import type { ContactFormErrors, ContactFormValues } from "./ContactForm.types";

function contactInputClass(hasError: boolean): string {
  const borderColor = hasError ? "border-error" : "border-divider";
  return `h-[52px] w-full rounded-[7px] border bg-white px-[14px] text-sm text-text-primary outline-none placeholder:text-booking-text-placeholder focus:border-badge-text focus:shadow-booking-focus-ring ${borderColor}`;
}

function contactTextareaClass(hasError: boolean): string {
  const borderColor = hasError ? "border-error" : "border-divider";
  return `w-full rounded-[7px] border bg-white px-[14px] py-3 font-sans text-sm text-text-primary outline-none placeholder:text-booking-text-placeholder focus:border-badge-text focus:shadow-booking-focus-ring resize-y ${borderColor}`;
}

export function ContactForm() {
  const { t } = useTranslation();
  const [values, setValues] = useState<ContactFormValues>(EMPTY_CONTACT_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!submitted) {
      firstNameRef.current?.focus();
    }
  }, [submitted]);

  function handleFieldChange(field: keyof ContactFormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const fieldOrder: { field: keyof ContactFormValues; ref: RefObject<HTMLElement | null> }[] = [
        { field: "firstName", ref: firstNameRef },
        { field: "lastName", ref: lastNameRef },
        { field: "email", ref: emailRef },
        { field: "phone", ref: phoneRef },
        { field: "subject", ref: subjectRef },
        { field: "message", ref: messageRef },
      ];
      const firstInvalid = fieldOrder.find((entry) => nextErrors[entry.field]);
      firstInvalid?.ref.current?.focus();
      return;
    }
    setSubmitted(true);
  }

  function handleReset() {
    setValues(EMPTY_CONTACT_VALUES);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section className="rounded-2xl border border-reach-us-info-card-border bg-white p-7 shadow-card mw-640:p-5">
      {submitted ? (
        <ContactFormSuccess onReset={handleReset} />
      ) : (
        <>
          <h2 className="m-0 font-heading text-[clamp(24px,2vw,28px)] font-bold leading-[1.25] tracking-[-0.6px] text-text-primary">
            {t("contact.form.heading")}
          </h2>

          <form className="mt-6" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-x-5 gap-y-[18px] mw-640:grid-cols-1">
              <FormField
                label={t("contact.form.fields.firstName.label")}
                htmlFor="contact-first-name"
                required
                error={errors.firstName ? t(`contact.form.validation.${errors.firstName}`) : undefined}
              >
                <input
                  ref={firstNameRef}
                  id="contact-first-name"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={(event) => handleFieldChange("firstName", event.target.value)}
                  placeholder={t("contact.form.fields.firstName.placeholder")}
                  className={contactInputClass(Boolean(errors.firstName))}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? "contact-first-name-error" : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.lastName.label")}
                htmlFor="contact-last-name"
                required
                error={errors.lastName ? t(`contact.form.validation.${errors.lastName}`) : undefined}
              >
                <input
                  ref={lastNameRef}
                  id="contact-last-name"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={(event) => handleFieldChange("lastName", event.target.value)}
                  placeholder={t("contact.form.fields.lastName.placeholder")}
                  className={contactInputClass(Boolean(errors.lastName))}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? "contact-last-name-error" : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.email.label")}
                htmlFor="contact-email"
                required
                error={errors.email ? t(`contact.form.validation.${errors.email}`) : undefined}
              >
                <input
                  ref={emailRef}
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => handleFieldChange("email", event.target.value)}
                  placeholder={t("contact.form.fields.email.placeholder")}
                  className={contactInputClass(Boolean(errors.email))}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.phone.label")}
                htmlFor="contact-phone"
                error={errors.phone ? t(`contact.form.validation.${errors.phone}`) : undefined}
              >
                <input
                  ref={phoneRef}
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(event) => handleFieldChange("phone", event.target.value)}
                  placeholder={t("contact.form.fields.phone.placeholder")}
                  className={contactInputClass(Boolean(errors.phone))}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "contact-phone-error" : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.subject.label")}
                htmlFor="contact-subject"
                required
                error={errors.subject ? t(`contact.form.validation.${errors.subject}`) : undefined}
                className="col-span-2"
              >
                <input
                  ref={subjectRef}
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  value={values.subject}
                  onChange={(event) => handleFieldChange("subject", event.target.value)}
                  placeholder={t("contact.form.fields.subject.placeholder")}
                  className={contactInputClass(Boolean(errors.subject))}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.message.label")}
                htmlFor="contact-message"
                required
                error={errors.message ? t(`contact.form.validation.${errors.message}`) : undefined}
                className="col-span-2"
              >
                <textarea
                  ref={messageRef}
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  placeholder={t("contact.form.fields.message.placeholder")}
                  className={contactTextareaClass(Boolean(errors.message))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                />
              </FormField>
            </div>

            <button
              type="submit"
              className="group mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-cta px-7 text-[14.5px] font-semibold text-white shadow-[0_4px_8px_rgba(0,0,0,0.16)] [transition:background-color_250ms_ease,transform_200ms_ease,box-shadow_250ms_ease] hover:-translate-y-px hover:bg-cta-hover hover:shadow-nav-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
            >
              {t("contact.form.submit")}
              <ArrowRightIcon size={15} className="transition-transform duration-200 ease-out group-hover:translate-x-[3px]" />
            </button>
          </form>
        </>
      )}
    </section>
  );
}
