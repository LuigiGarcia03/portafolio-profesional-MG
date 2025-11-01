// src/components/layout/Header.tsx
import React from 'react';

export const Header: React.FC = () => {
  return (
    // Usamos 'teal-medium' como en el ejemplo [cite: 300, 305]
    <header className="w-full bg-teal-medium text-alabaster shadow-md">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo / Nombre */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold tracking-tight">
              Marcos García 
            </a>
          </div>

          {/* Navegación */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-teal-dark">
                Home
              </a>
              <a href="#services" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-teal-dark">
                Servicios
              </a>
              <a href="#portfolio" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-teal-dark">
                Proyectos
              </a>
              <a href="#about" className="rounded-md px-3 py-2 text-sm font-medium hover:bg-teal-dark">
                Acerca de Mí
              </a>
              <a href="#contact" className="rounded-md bg-lemon px-4 py-2 text-sm font-bold text-olive-dark shadow hover:bg-opacity-80">
                Contactar 
              </a>
            </div>
          </div>
          
          {/* Botón de Menú Móvil (funcionalidad pendiente) */}
          <div className="-mr-2 flex md:hidden">
            <button className="inline-flex items-center justify-center rounded-md p-2 text-alabaster hover:bg-teal-dark focus:outline-none">
              <span className="sr-only">Abrir menú</span>
              {/* Icono de Hamburguesa (puedes usar react-icons) */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};