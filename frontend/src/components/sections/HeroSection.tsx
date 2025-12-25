// frontend/src/components/sections/HeroSection.tsx

import React from 'react';

// === 1. IMPORTACIÓN ACTIVA DE LA IMAGEN ===
// Asumiendo que la imagen está en: 'frontend/src/assets/images/laptop-mockup.png'
import laptopMockupImage from '../../assets/images/laptop-mockup.png';

// === 2. IMPORTACIÓN DE COMPONENTES UI REUTILIZABLES ===
import { Button } from '../ui/Button';
import { CheckIcon } from '../ui/CheckIcon';

/**
 * Sección de Héroe (Hero Section) del portfolio.
 * Presenta la propuesta de valor principal y las CTAs.
 */
export const HeroSection: React.FC = () => {
  return (
    // 'bg-background-light' ahora debe estar definido en tu tailwind.config.js
    <section
      id="inicio"
      className="flex min-h-screen items-center bg-background-light py-20 md:py-32"
    >
      <div className="container mx-auto flex max-w-6xl flex-col items-center px-6 lg:flex-row lg:gap-12">
        
        {/* === COLUMNA DE TEXTO (Contenido) === */}
        {/* Responsivo: centrado en móvil, alineado a la izquierda en escritorio */}
        <div className="flex w-full flex-col items-center text-center lg:w-3/5 lg:flex-shrink-0 lg:items-start lg:text-left">
          
          {/* Headline Principal */}
          <h1 className="font-display text-4xl font-bold tracking-tight text-text-dark sm:text-5xl md:text-6xl">
            Desarrollo Tiendas Online que <br></br>
            <span className="block text-primary-teal xl:inline">
              Convierte Visitantes <br></br>
            </span>
              en Clientes
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 max-w-lg font-sans text-lg text-text-dark md:text-xl">
            Especializado en React, TypeScript y Soluciones E-commerce a la
            medida. Transformo tus ideas en experiencias web rápidas y
            efectivas.
          </p>

          {/* Puntos clave (Tech Stack) */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <div className="flex items-center rounded-full bg-primary-teal/20 px-4 py-1 font-sans text-sm font-bold text-accent-teal-dark">
              {/* Usamos el componente Icono */}
              <CheckIcon className="mr-2 h-5 w-5 text-primary-teal" />
              React
            </div>
            <div className="flex items-center rounded-full bg-primary-teal/20 px-4 py-1 font-sans text-sm font-bold text-accent-teal-dark">
              <CheckIcon className="mr-2 h-5 w-5 text-primary-teal" />
              TypeScript
            </div>
            <div className="flex items-center rounded-full bg-primary-teal/20 px-4 py-1 font-sans text-sm font-bold text-accent-teal-dark">
              <CheckIcon className="mr-2 h-5 w-5 text-primary-teal" />
              Node.js
            </div>
          </div>

          {/* Botones de Llamada a la Acción (CTAs) */}
          {/* Responsivo: apilados en móvil, lado a lado en escritorio */}
          <div className="mt-12 flex w-full flex-col justify-center gap-4 sm:flex-row sm:gap-6 lg:justify-start">
            
            {/* Usamos nuestro componente Button profesional */}
            <Button href="#contacto" variant="primary">
              Solicitar Presupuesto
            </Button>
            
            <Button href="#portfolio" variant="secondary">
              Ver Mi Trabajo
            </Button>
          </div>
        </div>

        {/* === COLUMNA DE IMAGEN (Visual) === */}
        {/* Responsivo: aparece debajo en móvil, al lado en escritorio */}
        <div className="mt-12 w-full max-w-md lg:mt-0 lg:w-2/5 lg:max-w-none">
          <img
            // 3. Usamos la variable importada
            src={laptopMockupImage}
            alt="Laptop mostrando un proyecto de e-commerce"
            className="h-auto w-full rounded-lg object-cover shadow-xl"
            
            // 4. MEJORES PRÁCTICAS (Performance)
            // Priorizamos la carga de esta imagen (es LCP - Largest Contentful Paint)
            fetchPriority="high"
            
            // Especificamos dimensiones para evitar Cumulative Layout Shift (CLS)
            // (Ajusta esto a las dimensiones reales de tu imagen)
            width={1200}
            height={900}
          />
          
        </div>
      </div>
    </section>
  );
};