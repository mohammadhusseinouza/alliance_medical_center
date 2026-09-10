import { useEffect, useRef, useState, type FormEvent, type RefObject } from "react";
import { EMPTY_CONTACT_VALUES } from "./contactForm.data";
import { validateContactForm } from "./validate";
import type { ContactFormErrors, ContactFormValues } from "./ContactForm.types";

export interface ContactFormFieldRefs {
  firstName: RefObject<HTMLInputElement>;
  lastName: RefObject<HTMLInputElement>;
  email: RefObject<HTMLInputElement>;
  phone: RefObject<HTMLInputElement>;
  subject: RefObject<HTMLInputElement>;
  message: RefObject<HTMLTextAreaElement>;
}

export interface UseContactFormResult {
  values: ContactFormValues;
  errors: ContactFormErrors;
  submitted: boolean;
  fieldRefs: ContactFormFieldRefs;
  handleFieldChange: (field: keyof ContactFormValues, value: string) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
}

/**
 * The single source of truth for Contact-form state, validation, submission
 * and focus management. Both the desktop `ContactForm` and the mobile
 * `MobileContactForm` presentations consume this hook — the validation
 * rules (`validateContactForm`), field set (`ContactFormValues`), submit
 * behavior and success/error handling are defined exactly once. Each
 * rendered form gets its own hook instance (and its own refs), so the two
 * responsive trees never interfere.
 */
export function useContactForm(): UseContactFormResult {
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

  return {
    values,
    errors,
    submitted,
    fieldRefs: {
      firstName: firstNameRef,
      lastName: lastNameRef,
      email: emailRef,
      phone: phoneRef,
      subject: subjectRef,
      message: messageRef,
    },
    handleFieldChange,
    handleSubmit,
    handleReset,
  };
}
