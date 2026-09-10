import { useTranslation } from "react-i18next";
import { ArrowRightIcon } from "../../../components/icons";
import { FormField } from "../../../components/ui/FormField";
import { contactInputClass, contactTextareaClass } from "./contactFieldStyles";
import { ContactFormSuccess } from "./ContactFormSuccess";
import { useContactForm } from "./useContactForm";

/** Distinct id prefix so the mobile controls never collide with the hidden desktop `ContactForm`. */
const ID = (field: string) => `m-contact-${field}`;

/**
 * Mobile presentation of the Contact form (handoff 4a): a white card with
 * a paired First/Last name row and the remaining fields stacked. It shares
 * ALL behaviour with the desktop `ContactForm` via `useContactForm`
 * (validation rules, field set, submit, focus-first-invalid, success
 * state) — nothing about the form's business logic is duplicated here.
 */
export function MobileContactForm() {
  const { t } = useTranslation();
  const { values, errors, submitted, fieldRefs, handleFieldChange, handleSubmit, handleReset } = useContactForm();
  const {
    firstName: firstNameRef,
    lastName: lastNameRef,
    email: emailRef,
    phone: phoneRef,
    subject: subjectRef,
    message: messageRef,
  } = fieldRefs;

  const validationError = (code: string | undefined) => (code ? t(`contact.form.validation.${code}`) : undefined);

  return (
    <div className="rounded-2xl border border-reach-us-info-card-border bg-white p-4 pt-5 shadow-card">
      {submitted ? (
        <ContactFormSuccess onReset={handleReset} />
      ) : (
        <>
          <h2 className="m-0 font-heading text-[24px] font-bold leading-[1.25] tracking-[-0.5px] text-text-primary">
            {t("contact.form.heading")}
          </h2>

          <form className="mt-5" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-3">
              <FormField
                label={t("contact.form.fields.firstName.label")}
                htmlFor={ID("first-name")}
                required
                error={validationError(errors.firstName)}
              >
                <input
                  ref={firstNameRef}
                  id={ID("first-name")}
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={(event) => handleFieldChange("firstName", event.target.value)}
                  placeholder={t("contact.form.fields.firstName.placeholder")}
                  className={contactInputClass(Boolean(errors.firstName))}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? `${ID("first-name")}-error` : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.lastName.label")}
                htmlFor={ID("last-name")}
                required
                error={validationError(errors.lastName)}
              >
                <input
                  ref={lastNameRef}
                  id={ID("last-name")}
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={(event) => handleFieldChange("lastName", event.target.value)}
                  placeholder={t("contact.form.fields.lastName.placeholder")}
                  className={contactInputClass(Boolean(errors.lastName))}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? `${ID("last-name")}-error` : undefined}
                />
              </FormField>
            </div>

            <div className="mt-4 flex flex-col gap-4">
              <FormField
                label={t("contact.form.fields.email.label")}
                htmlFor={ID("email")}
                required
                error={validationError(errors.email)}
              >
                <input
                  ref={emailRef}
                  id={ID("email")}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => handleFieldChange("email", event.target.value)}
                  placeholder={t("contact.form.fields.email.placeholder")}
                  className={contactInputClass(Boolean(errors.email))}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${ID("email")}-error` : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.phone.label")}
                htmlFor={ID("phone")}
                error={validationError(errors.phone)}
              >
                <input
                  ref={phoneRef}
                  id={ID("phone")}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(event) => handleFieldChange("phone", event.target.value)}
                  placeholder={t("contact.form.fields.phone.placeholder")}
                  className={contactInputClass(Boolean(errors.phone))}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? `${ID("phone")}-error` : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.subject.label")}
                htmlFor={ID("subject")}
                required
                error={validationError(errors.subject)}
              >
                <input
                  ref={subjectRef}
                  id={ID("subject")}
                  name="subject"
                  type="text"
                  required
                  value={values.subject}
                  onChange={(event) => handleFieldChange("subject", event.target.value)}
                  placeholder={t("contact.form.fields.subject.placeholder")}
                  className={contactInputClass(Boolean(errors.subject))}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? `${ID("subject")}-error` : undefined}
                />
              </FormField>
              <FormField
                label={t("contact.form.fields.message.label")}
                htmlFor={ID("message")}
                required
                error={validationError(errors.message)}
              >
                <textarea
                  ref={messageRef}
                  id={ID("message")}
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  placeholder={t("contact.form.fields.message.placeholder")}
                  className={contactTextareaClass(Boolean(errors.message))}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${ID("message")}-error` : undefined}
                />
              </FormField>
            </div>

            <button
              type="submit"
              className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-cta text-[15.5px] font-semibold text-white shadow-[0_4px_8px_rgba(0,0,0,0.16)] [transition:background-color_250ms_ease] hover:bg-cta-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-focus-ring"
            >
              {t("contact.form.submit")}
              <ArrowRightIcon size={15} />
            </button>
          </form>
        </>
      )}
    </div>
  );
}
