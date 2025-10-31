// frontend/src/components/layout/Header.tsx

import React, { useState } from 'react';

// Icono de Menú (Hamburguesa)
const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

// Icono de Cerrar (X)
const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#portfolio', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-background-light sticky top-0 z-50 w-full shadow-md">
      <nav className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo/Nombre */}
        <a
          href="#inicio"
          className="font-display text-2xl font-bold text-accent-teal-dark"
        >
          Marcos García <span className="text-primary-yellow">.</span>
        </a>

        {/* Menú de Escritorio */}
        <div className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans font-bold text-text-dark transition-colors hover:text-primary-teal"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón de Menú Móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-text-dark"
          >
            {isMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Menú Móvil (Desplegable) */}
      {isMenuOpen && (
        <div className="flex flex-col space-y-4 px-6 pb-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
              className="block rounded-md py-2 text-center font-sans font-bold text-text-dark transition-colors hover:bg-primary-teal hover:text-text-light"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};