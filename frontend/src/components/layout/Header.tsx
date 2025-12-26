// src/components/layout/Header.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react'; // Añadí Code2 aquí
// ojo
interface HeaderProps {
  activeSection?: string; // Hacemos esta prop opcional
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // 1. Detectar Scroll para el efecto de transparencia/degradado
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. Función de Navegación Inteligente
  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false); // Cerrar menú móvil si está abierto

    // CASO A: Ya estamos en el Home ('/')
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } 
    // CASO B: Estamos en otra página (/sobre-mi, /contacto)
    else {
      // Navegamos al Home y pasamos el ID como "state" para que el Home sepa qué hacer
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  // Definimos los links de navegación
  const navLinks = [
    { title: 'Inicio', id: 'hero' },
    { title: 'Servicios', id: 'services' },
    { title: 'Portfolio', id: 'portfolio' },
    { title: 'Testimonios', id: 'testimonials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-4' // Fondo sólido/translucido al bajar
          : 'bg-transparent py-6' // Fondo transparente arriba
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* LOGO MODIFICADO CON ICONO </> */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => handleNavClick('hero')}
        >
          <div className="p-2 bg-[#1E837B] rounded-lg group-hover:bg-[#16605a] transition-colors">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className={`text-xl font-bold ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-gray-900'}`}>
            Marcos<span className="text-[#1E837B]">Dev</span>
          </span>
        </div>

        {/* NAVEGACIÓN DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavClick(link.id)}
              className="text-gray-600 hover:text-[#1E837B] font-medium transition-colors"
            >
              {link.title}
            </button>
          ))}

          {/* Enlace directo a PÁGINAS INDEPENDIENTES */}
          <Link 
            to="/sobre-mi" 
            className={`font-medium transition-colors ${
              location.pathname === '/sobre-mi' ? 'text-[#1E837B] font-bold' : 'text-gray-600 hover:text-[#1E837B]'
            }`}
          >
            Sobre Mí
          </Link>

          {/* BOTÓN CTA (La Excepción: Siempre lleva a /contacto) */}
          <Link
            to="/contacto"
            className="px-6 py-2.5 bg-[#1E837B] text-white rounded-lg font-semibold hover:bg-[#16605a] transition-all shadow-lg hover:shadow-[#1E837B]/20"
          >
            Contactar
          </Link>
        </nav>

        {/* MENÚ MÓVIL (Hamburguesa) */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* DROPDOWN MÓVIL */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavClick(link.id)}
              className="text-left py-2 text-gray-600 hover:text-[#1E837B] font-medium"
            >
              {link.title}
            </button>
          ))}
          <Link 
             to="/sobre-mi"
             onClick={() => setIsMobileMenuOpen(false)}
             className="text-left py-2 text-gray-600 hover:text-[#1E837B] font-medium"
          >
            Sobre Mí
          </Link>
          <Link
            to="/contacto"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-center w-full py-3 bg-[#1E837B] text-white rounded-lg font-semibold"
          >
            Contactar
          </Link>
        </div>
      )}
    </header>
  );
};
