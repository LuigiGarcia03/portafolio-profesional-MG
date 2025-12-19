// src/components/layout/Footer.tsx

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { GrCycle } from 'react-icons/gr';

// --- Datos de los Enlaces del Footer ---
const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'Acerca de Mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#portfolio' },
  ],
  services: [
    { name: 'Desarrollo Web', href: '#services' },
    { name: 'E-commerce', href: '#services' },
    { name: 'Consultoría SEO', href: '#services' },
    { name: 'Mantenimiento', href: '#services' },
  ],
};

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-teal-dark text-platinum pt-12 pb-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* --- Sección Superior del Footer: Contenido en Columnas --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Columna 1: Branding y Descripción Corta */}
          <div className="md:col-span-2 lg:col-span-2">
            <a href="#home" className="text-3xl font-bold tracking-tight text-lemon hover:text-alabaster transition-colors">
              Marcos García
            </a>
            <p className="mt-4 text-sm leading-relaxed text-platinum/80">
              Diseñador y desarrollador FullStack enfocado en crear experiencias digitales robustas y atractivas.
            </p>
            {/* Opcional: Un icono con un mensaje personal */}
            <div className="mt-6 flex items-center space-x-2 text-sm text-platinum/70">
              <GrCycle className="h-5 w-5 text-lemon" />
              <span>Construyendo el futuro, línea a línea.</span>
            </div>
          </div>

          {/* Columna 2: Navegación Principal */}
          <div>
            <h3 className="text-lg font-semibold text-alabaster">Navegación</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-platinum/80 hover:text-lemon transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h3 className="text-lg font-semibold text-alabaster">Servicios</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-platinum/80 hover:text-lemon transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto y Redes Sociales */}
          <div>
            <h3 className="text-lg font-semibold text-alabaster">Contacto</h3>
            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center space-x-2 text-platinum/80">
                <FaEnvelope className="h-4 w-4 text-lemon" />
                <a href="mailto:marcos.garcia.web.dev@gmail.com" className="hover:text-lemon transition-colors">
                  marcos.garcia.web.dev@gmail.com
                </a>
              </p>
              <p className="flex items-center space-x-2 text-platinum/80">
                <FaWhatsapp className="h-4 w-4 text-lemon" />
                <a 
                  href="https://wa.me/5491136587980" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-lemon transition-colors"
                >
                  +220 466 0376
                </a>
              </p>
            </div>
            
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://github.com/LuigiGarcia03"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-platinum hover:text-lemon transition-colors"
                aria-label="GitHub de Marcos García"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/marcos-garc%C3%ADa-cruz-8199041a/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-platinum hover:text-lemon transition-colors"
                aria-label="LinkedIn de Marcos García"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

        </div> {/* Fin de la Sección Superior */}

        {/* --- Separador --- */}
        <hr className="my-8 border-platinum/20" />

        {/* --- Sección Inferior del Footer: Copyright y Branding --- */}
        <div className="flex flex-col items-center justify-between text-sm sm:flex-row">
          <div className="text-platinum/70">
            &copy; {year} Marcos García. Todos los derechos reservados.
          </div>
          <div className="mt-4 flex items-center space-x-2 sm:mt-0 text-platinum/70">
            <span>Desarrollado por Marcos García</span>
          </div>
        </div>

      </div> {/* Fin del Contenedor Principal */}
    </footer>
  );
};