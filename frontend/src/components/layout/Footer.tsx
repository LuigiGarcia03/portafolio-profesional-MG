// src/components/layout/Footer.tsx
import React from 'react';
// Importa iconos de React
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    // Usamos 'olive-dark' como en el ejemplo
    <footer className="w-full bg-olive-dark text-platinum">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          
          {/* Copyright */}
          <div className="text-sm">
            &copy; {year} Marcos García Cruz. Todos los derechos reservados.
          </div>

          {/* Redes Sociales */}
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <a 
              href="https://github.com/tu-usuario" // ✅ Corregido - sin [cite_start]
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-platinum hover:text-lemon"
              aria-label="GitHub de Marcos García"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/marcos-garc%C3%ADa-cruz-8199041a/" // ✅ Corregido - sin [cite_start]
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-platinum hover:text-lemon"
              aria-label="LinkedIn de Marcos García"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};