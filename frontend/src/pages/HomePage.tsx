import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Tus imports de secciones...
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ContactSection } from '../components/sections/ContactSection';

const HomePage: React.FC = () => {
  const location = useLocation();

  // EFECTO MÁGICO: Escucha si venimos redireccionados con una orden de scroll
  useEffect(() => {
    // Verificamos si hay un "state" con la propiedad "scrollTo"
    if (location.state && location.state.scrollTo) {
      const sectionId = location.state.scrollTo;
      
      // Damos un pequeño respiro (100ms) para asegurar que el DOM cargó
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);

      // Opcional: Limpiar el state para que no vuelva a scrollear si refrescas (avanzado)
      // window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* Añadimos los IDs correspondientes para que el scroll funcione */}
      <div id="hero"> <HeroSection /> </div>
      <AboutSection /> {/* Este ya tiene id="about" dentro del componente? Verifica */}
      
      <div id="services"> <ServicesSection /> </div>
      
      <div id="portfolio"> <PortfolioSection /> </div>
      
      <div id="testimonials"> <TestimonialsSection /> </div>
      
      {/* Nota: ContactSection suele estar al final, pero ahora tenemos página dedicada también */}
      <ContactSection /> 
    </div>
  );
};

export default HomePage;