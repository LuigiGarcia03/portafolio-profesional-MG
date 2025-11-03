// frontend/src/components/ui/Button.tsx

import React from 'react';

// 1. Definimos las props
interface ButtonProps {
  /** El contenido del botón */
  children: React.ReactNode;
  /** El tipo de botón (primario o secundario) */
  variant: 'primary' | 'secondary';
  /** URL a la que enlaza (si es un 'a') */
  href?: string;
  /** Etiqueta que renderizará (enlace o botón) */
  as?: 'a' | 'button';
  /** Clases de Tailwind adicionales */
  className?: string;
  /** Permite pasar otras props (ej. onClick, type="submit") */
  [x: string]: any; // Para props restantes como onClick, type, etc.
}

/**
 * Componente de UI reutilizable para botones y enlaces de CTA.
 * Es polimórfico: se renderiza como <a> (default) o <button>.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  href,
  as = 'a', // Por defecto es un enlace
  className = '',
  ...rest
}) => {
  
  // 2. Estilos base y variantes
  const baseStyles =
    'rounded-lg px-8 py-3 font-sans text-lg font-bold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary:
      'bg-primary-teal text-text-light shadow-lg hover:scale-105 hover:bg-accent-teal-dark focus:ring-primary-teal',
    secondary:
      'border-2 border-text-dark text-text-dark hover:bg-text-dark hover:text-text-light focus:ring-text-dark',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // 3. Renderizado polimórfico
  if (as === 'a') {
    return (
      <a href={href} className={combinedStyles} role="button" {...rest}>
        {children}
      </a>
    );
  }

  // Si as === 'button'
  return (
    <button className={combinedStyles} {...rest}>
      {children}
    </button>
  );
};