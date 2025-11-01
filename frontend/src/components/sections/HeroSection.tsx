// frontend/src/components/sections/HeroSection.tsx

import React from 'react';

// Un icono simple de "check" para las especialidades
const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export const HeroSection: React.FC = () => {
  return (
    <section
      id="inicio"
      className="flex min-h-screen items-center bg-background-light"
    >
      <div className="container mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center md:py-32">
        {/* Título Principal (Headline) */}
        <h1 className="max-w-3xl font-display text-4xl font-bold text-text-dark md:text-6xl">
          Desarrollo Tiendas Online que
          <span className="text-primary-teal"> Convierte Visitantes </span>
          en Clientes
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 max-w-lg font-sans text-lg text-text-dark md:text-xl">
          Especializado en React, TypeScript y Soluciones E-commerce a la medida.
        </p>

        {/* Especialidades (Tech Stack) */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <span className="flex items-center rounded-full bg-primary-teal/20 px-4 py-1 font-sans text-sm font-bold text-accent-teal-dark">
            <CheckIcon className="mr-2 h-5 w-5 text-primary-teal" />
            React
          </span>
          <span className="flex items-center rounded-full bg-primary-teal/20 px-4 py-1 font-sans text-sm font-bold text-accent-teal-dark">
            <CheckIcon className="mr-2 h-5 w-5 text-primary-teal" />
            TypeScript
          </span>
          <span className="flex items-center rounded-full bg-primary-teal/20 px-4 py-1 font-sans text-sm font-bold text-accent-teal-dark">
            <CheckIcon className="mr-2 h-5 w-5 text-primary-teal" />
            Node.js
          </span>
        </div>

        {/* Botones de Llamada a la Acción (CTAs) */}
        <div className="mt-12 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <a
            href="#contacto"
            className="rounded-lg bg-primary-teal px-8 py-3 font-sans text-lg font-bold text-text-light shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent-teal-dark"
          >
            Solicitar Presupuesto
          </a>
          <a
            href="#portfolio"
            className="rounded-lg border-2 border-text-dark px-8 py-3 font-sans text-lg font-bold text-text-dark transition-colors duration-300 hover:bg-text-dark hover:text-text-light"
          >
            Ver Mi Trabajo
          </a>
        </div>
      </div>
    </section>
  );
};