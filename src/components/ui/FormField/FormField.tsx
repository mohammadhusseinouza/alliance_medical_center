import type { ReactNode } from "react";

export interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}

export function FormField({ label, htmlFor, required, error, className, children }: FormFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-semibold text-[#374D62]">
        {label} {required && <span className="text-[#DC5962]">*</span>}
      </label>
      {children}
      {error && (
        <div id={`${htmlFor}-error`} className="mt-[5px] text-xs text-[#DC5962]">
          {error}
        </div>
      )}
    </div>
  );
}
