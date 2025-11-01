// src/App.tsx
import React from 'react';

// --- Layout Components ---
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BackgroundDecor } from './components/layout/BackgroundDecor';

// --- Page Section Components (Tus componentes ya creados) ---
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
// Asumiré que también tienes una sección 'About'
import { AboutSection } from './components/sections/AboutSection';


function App() {
  return (
    <div className="relative flex min-h-screen flex-col">
      {/* 1. Decoración de Fondo (detrás de todo) */}
      <BackgroundDecor />

      {/* 2. Contenido Principal (con z-index positivo por defecto) */}
      {/* 'isolate' crea un nuevo contexto de apilamiento. Es una
          buena práctica cuando se juega con z-index. */}
      <div className="flex-grow isolate">
        
        {/* ENCABEZADO */}
        <Header />

        {/* CONTENIDO DE PÁGINA */}
        <main>
          {/* Aquí aplicamos el contenedor centralizado que viste 
            en las imágenes de ejemplo.
          */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            
            {/* Todas tus secciones van AQUÍ DENTRO */}
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <AboutSection /> {/* Ajusta esto al orden que prefieras */}
            <TestimonialsSection />
            <ContactSection />

          </div>
        </main>
      </div>

      {/* 3. PIE DE PÁGINA */}
      <Footer />
    </div>
  );
}

export default App;