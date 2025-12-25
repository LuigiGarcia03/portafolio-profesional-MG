// frontend/src/components/common/FormControls.tsx

import React, { type ComponentPropsWithoutRef } from 'react';
import type { FieldError } from 'react-hook-form';

// --- COMPONENTE INPUT ---
type FormInputProps = {
  label: string;
  name: string;
  error?: FieldError;
} & ComponentPropsWithoutRef<'input'>; // Hereda todos los props de un <input>

// Usamos React.forwardRef para que react-hook-form pueda vincularse al input
export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, name, error, type = 'text', ...props }, ref) => {
    // Cambia el borde si hay un error
    const errorClasses = error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-primary-teal focus:ring-primary-teal';

    return (
      <div className="w-full">
        <label htmlFor={name} className="block font-sans font-bold text-text-dark">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={`mt-2 block w-full rounded-md border ${errorClasses} p-3 shadow-sm transition-colors focus:outline-none focus:ring-1`}
          {...props}
        />
        {/* Muestra el mensaje de error si existe */}
        {error && (
          <p className="mt-1 text-sm text-red-600">{error.message}</p>
        )}
      </div>
    );
  },
);

// --- COMPONENTE TEXTAREA ---
type FormTextareaProps = {
  label: string;
  name: string;
  error?: FieldError;
} & ComponentPropsWithoutRef<'textarea'>; // Hereda props de <textarea>

export const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(({ label, name, error, ...props }, ref) => {
  const errorClasses = error
    ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
    : 'border-gray-300 focus:border-primary-teal focus:ring-primary-teal';

  return (
    <div className="w-full">
      <label htmlFor={name} className="block font-sans font-bold text-text-dark">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={5}
        ref={ref}
        className={`mt-2 block w-full rounded-md border ${errorClasses} p-3 shadow-sm transition-colors focus:outline-none focus:ring-1`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
});