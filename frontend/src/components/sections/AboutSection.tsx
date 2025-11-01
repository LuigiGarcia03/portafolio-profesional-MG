// frontend/src/components/sections/AboutSection.tsx

import React from 'react';
// 1. Importa la imagen optimizada
import dadImageUrl from '../../assets/Dad-img.webp';
// Importa la imagen original como fallback para navegadores antiguos
import dadImageFallback from '../../assets/Dad-img.png'; 

export const AboutSection: React.FC = () => {
  // Biografía extraída de DATOS CV
  const bioParagraph1 = `Un desarrollador Web especializado en Páginas e-commerce. Estudiado en la Universidad Autónoma Metropolitana como Ingeniero en Sistemas, empeze como desarrollador .NET con dominio de C# y .NET Core.`;
  const bioParagraph2 = `Mi curiosidad insaciable me impulsa a mantenerme adaptable y a colaborar eficazmente en equipo. Diseño y desarrollo páginas web e-commerce personalizadas a la medida para emprendedores y pequeños negocios.`;

  return (
    <section id="sobre-mi" className="bg-white py-20 md:py-32">
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-5 md:items-center">
        
        {/* Columna de Imagen */}
        <div className="md:col-span-2">
          <picture>
            {/* 2. Fuente WebP (moderna) */}
            <source srcSet={dadImageUrl} type="image/webp" />
            {/* 3. Fuente PNG (fallback) */}
            <source srcSet={dadImageFallback} type="image/png" />
            {/* 4. Imagen base */}
            <img
              src={dadImageFallback} // Fallback final
              alt="Retrato de Marcos García Cruz, Desarrollador Full Stack"
              className="mx-auto rounded-lg object-cover shadow-2xl"
              // 5. ¡Lazy Loading para Performance!
              loading="lazy" 
              width="400"
              height="400"
            />
          </picture>
        </div>

        {/* Columna de Texto */}
        <div className="md:col-span-3">
          <h2 className="font-display text-4xl font-bold text-text-dark md:text-5xl">
            Hola, soy Marcos García
          </h2>
          <p className="mt-6 font-sans text-lg text-text-dark/80">
            {bioParagraph1}
          </p>
          <p className="mt-4 font-sans text-lg text-text-dark/80">
            {bioParagraph2}
          </p>
          <a
            href="#contacto"
            className="mt-8 inline-block rounded-lg bg-primary-yellow px-8 py-3 font-sans text-lg font-bold text-accent-teal-dark shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-opacity-80"
          >
            Contactar
          </a>
        </div>

      </div>
    </section>
  );
};