// frontend/src/components/sections/AboutSection.tsx

import React from 'react';
// 1. Importa la imagen optimizada
import dadImageUrl from '../../assets/Dad-img.webp';
// Importa la imagen original como fallback
import dadImageFallback from '../../assets/Dad-img.png'; 
// 2. Importa iconos de tecnologías
import { SiReact, SiTypescript, SiNodedotjs, SiTailwindcss, SiNextdotjs, SiMercadopago } from 'react-icons/si';

// Biografía extraída de DATOS CV
const bioParagraph1 = "Un desarrollador Web especializado en Páginas e-commerce. Estudiado en la Universidad Autónoma Metropolitana como Ingeniero en Sistemas, empeze como desarrollador .NET con dominio de C# y .NET Core."; // [cite: 77-78]
const bioParagraph2 = "Mi curiosidad insaciable me impulsa a mantenerme adaptable y a colaborar eficazmente en equipo. Diseño y desarrollo páginas web e-commerce personalizadas a la medida para emprendedores y pequeños negocios."; // [cite: 79, 81]

// Tecnologías principales de DATOS CV (las de 4 y 5 estrellas)
const techStack = [
  { name: 'React', icon: <SiReact /> }, // [cite: 229]
  { name: 'TypeScript', icon: <SiTypescript /> }, // [cite: 230]
  { name: 'Node.js', icon: <SiNodedotjs /> }, // [cite: 237]
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> }, // [cite: 233]
  { name: 'Next.js', icon: <SiNextdotjs /> }, // [cite: 234]
  { name: 'Mercado Pago', icon: <SiMercadopago /> }, // [cite: 246]
];

export const AboutSection: React.FC = () => {
  return (
    // 3. ¡SIN bg-white! Se integra con el fondo 'alabaster' global
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-5 md:gap-16">
          
          {/* Columna de Imagen (Modificada a Rectangular) */}
          <div className="md:col-span-2 flex justify-center">
            
            {/* CAMBIOS:
              1. Rectángulo más largo: 'h-80' (320px) en móvil y 'md:h-112' (448px) en desktop.
              2. Mantenemos el ancho: 'w-64' (256px) y 'md:w-80' (320px).
            */}
            <div className="relative w-80 h-85 md:w-85 md:h-120 rounded-2xl bg-lemon p-2 shadow-xl">
              
              <div className="absolute inset-0 rounded-2xl border-4 border-dashed border-olive-dark/20 animate-spin-slow" />
              
              <picture>
                <source srcSet={dadImageUrl} type="image/webp" />
                <source srcSet={dadImageFallback} type="image/png" />
                
                <img
                  src={dadImageFallback} 
                  alt="Retrato de Marcos García Cruz, Desarrollador Full Stack"
                  className="h-full w-full rounded-xl object-cover shadow-inner"
                  loading="lazy" 
                  width="304" // Ancho de md:w-80 (320px) - p-2 (16px)
                  height="432" // Alto de md:h-112 (448px) - p-2 (16px)
                />
              </picture>
            </div>
          </div>

          {/* Columna de Texto */}
          <div className="md:col-span-3 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-olive-dark md:text-5xl">
              Hola, soy Marcos García
            </h2>
            <p className="mt-6 text-lg text-olive-dark/80">
              {bioParagraph1}
            </p>
            <p className="mt-4 text-lg text-olive-dark/80">
              {bioParagraph2}
            </p>

            {/* 6. Sección de Tecnologías (¡Esto añade valor!) */}
            <h3 className="mt-10 text-2xl font-bold text-olive-dark">
              Mis Herramientas Principales
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-3 md:justify-start">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className="flex items-center rounded-md bg-platinum px-3 py-1.5 text-sm font-bold text-olive-dark shadow-sm"
                >
                  {/* Clonamos el icono para añadirle clases */}
                  {React.cloneElement(tech.icon, { className: 'w-4 h-4 mr-2 text-teal-dark' })}
                  {tech.name}
                </span>
              ))}
            </div>

            {/* 7. CTAs Mejorados */}
            <div className="mt-10 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:items-start md:justify-start">
              <a
                href="#contact"
                className="rounded-md bg-lemon px-8 py-3 text-lg font-bold text-olive-dark shadow-lg transition-all hover:scale-105 hover:bg-opacity-90"
              >
                Hablemos de tu Proyecto
              </a>
              <a
                href="#portfolio"
                className="rounded-md border-2 border-olive-dark px-8 py-3 text-lg font-bold text-olive-dark transition-colors hover:bg-olive-dark hover:text-alabaster"
              >
                Ver mis Proyectos
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};