// src/components/layout/Header.tsx

import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3, HiX } from 'react-icons/hi';

// --- Tipos de Datos ---
interface NavLink {
  id: string;
  href: string;
  label: string;
  isButton?: boolean;
}

// --- Datos de Navegación (Fácil de actualizar) ---
const navLinks: NavLink[] = [
  { id: 'home', href: '#home', label: 'Home' },
  { id: 'services', href: '#services', label: 'Servicios' },
  { id: 'portfolio', href: '#portfolio', label: 'Proyectos' },
  { id: 'about', href: '#about', label: 'Acerca de Mí' },
  { id: 'contact', href: '#contact', label: 'Contactar', isButton: true },
];

// --- Props del Componente ---
interface HeaderProps {
  // Pasaremos la sección activa para el efecto "píldora"
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Efecto para detectar el scroll y cambiar el fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // --- Clases reutilizables para los enlaces ---
  const linkBaseClass = "relative px-3 py-1.5 text-sm font-medium transition-colors duration-200";
  
  const getLinkClasses = (link: NavLink) => {
    const isActive = activeSection === link.id;
    
    if (link.isButton) {
      return "ml-4 bg-lemon text-olive-dark font-bold px-4 py-1.5 rounded-md shadow-sm hover:bg-opacity-80 transition-all duration-200";
    }

    return `
      ${linkBaseClass}
      ${isActive
        ? "text-teal-dark font-semibold" 
        : "text-olive-dark/80 hover:text-olive-dark"}
    `;
  };

  // --- Clase para la píldora de fondo activo (Desktop) ---
  const activePillClass = "absolute inset-0 bg-white/70 rounded-md -z-10";

  return (
    <header 
      className={`
        sticky top-0 z-50 w-full transition-all duration-300
        ${isScrolled 
          ? "bg-gradient-to-r from-mint/90 to-lemon/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"}
      `}
    >
      {/* --- Contenedor Principal de Navegación --- */}
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* 1. Logo / Nombre */}
        <a 
          href="#home" 
          className="text-2xl font-bold tracking-tight text-olive-dark"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Marcos García {/* [cite: 56] */}
        </a>

        {/* 2. Navegación de Escritorio (Desktop) */}
        <div className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} className={getLinkClasses(link)}>
              {/* Esta es la "píldora" que se mueve */}
              {activeSection === link.id && !link.isButton && (
                <span className={activePillClass} />
              )}
              {link.label}
            </a>
          ))}
        </div>

        {/* 3. Botón de Menú Móvil (Mobile) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Abrir menú"
            className="rounded-md p-2 text-olive-dark/80 transition-colors hover:text-olive-dark focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <HiX className="h-6 w-6" />
            ) : (
              <HiOutlineMenuAlt3 className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* --- 4. Panel de Menú Móvil (Dropdown) --- */}
      <div 
        className={`
          absolute w-full origin-top transform bg-alabaster shadow-xl transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? "scale-y-100" : "scale-y-0 opacity-0"}
        `}
      >
        <div className="flex flex-col space-y-1 px-4 pt-2 pb-4">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              onClick={toggleMobileMenu} // Cierra el menú al hacer clic
              className={`
                block rounded-md px-3 py-2.5 text-base
                ${link.isButton 
                  ? "my-2 bg-lemon text-olive-dark font-bold shadow-sm" 
                  : activeSection === link.id 
                    ? "bg-lemon/50 text-teal-dark font-semibold"
                    : "text-olive-dark/80 hover:bg-platinum"}
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};