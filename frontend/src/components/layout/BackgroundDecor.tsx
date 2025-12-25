// src/components/layout/BackgroundDecor.tsx

import React, { useEffect, useState } from 'react';
import HexagonSolid from '../../assets/svg/hexagon-solid.svg';
import HexagonOutline from '../../assets/svg/hexagon-outline.svg';

interface HexagonProps {
  id: string;
  type: 'solid' | 'outline';
  colorClass: string;
  sizeClass: string;
  initialX: string; // Posición X (ej: 'left-1/4', 'right-[10%]')
  initialY: string; // Posición Y (ej: 'top-1/3', 'bottom-[5vh]')
  parallaxFactor: number; // Factor de parallax (MUY SUTIL)
  opacityClass: string; // Opacidad BAJA (ej: 'opacity-10', 'opacity-20')
  rotation: number; // Rotación en grados
  hiddenOnMobile?: boolean; // Ocultar en móviles para no saturar
  zIndex?: string; // z-index opcional
}

// --- Definición de la "Constelación" de Hexágonos ---
// Hemos duplicado la cantidad y ajustado los colores, posiciones y opacidades
const hexagons: HexagonProps[] = [
  // --- Cluster Superior (Zona Hero) ---
  {
    id: 'h1', type: 'outline', colorClass: 'text-mint', sizeClass: 'w-32 h-32',
    initialX: 'right-[5%]', initialY: 'top-[8vh]',
    parallaxFactor: 0.02, opacityClass: 'opacity-20', rotation: 15,
  },
  {
    id: 'h2', type: 'solid', colorClass: 'text-lemon', sizeClass: 'w-16 h-16',
    initialX: 'left-[10%]', initialY: 'top-[12vh]',
    parallaxFactor: 0.04, opacityClass: 'opacity-30', rotation: 45,
  },
  {
    id: 'h3', type: 'solid', colorClass: 'text-platinum', sizeClass: 'w-12 h-12',
    initialX: 'left-[18%]', initialY: 'top-[15vh]',
    parallaxFactor: 0.02, opacityClass: 'opacity-40', rotation: -10,
    hiddenOnMobile: true,
  },
  
  // --- Cluster Medio-Izquierda (Zona Servicios/About) ---
  {
    id: 'h4', type: 'solid', colorClass: 'text-olive-gold', sizeClass: 'w-24 h-24',
    initialX: 'left-[2%]', initialY: 'top-[40vh]',
    parallaxFactor: 0.03, opacityClass: 'opacity-20', rotation: 0,
    hiddenOnMobile: true,
  },
  {
    id: 'h5', type: 'outline', colorClass: 'text-teal-medium', sizeClass: 'w-12 h-12',
    initialX: 'left-[12%]', initialY: 'top-[50vh]',
    parallaxFactor: 0.05, opacityClass: 'opacity-30', rotation: 60,
  },
  {
    id: 'h6', type: 'solid', colorClass: 'text-mint', sizeClass: 'w-8 h-8',
    initialX: 'left-[8%]', initialY: 'top-[55vh]',
    parallaxFactor: 0.02, opacityClass: 'opacity-20', rotation: -30,
    hiddenOnMobile: true,
  },
  
  // --- Cluster Medio-Derecha (Zona Portfolio) ---
  {
    id: 'h7', type: 'solid', colorClass: 'text-lemon', sizeClass: 'w-20 h-20',
    // Posicionamiento preciso: 50% del viewport + 30rem (mitad de max-w-6xl)
    initialX: 'left-[calc(50%+30rem)]', initialY: 'top-[60vh]',
    parallaxFactor: 0.04, opacityClass: 'opacity-30', rotation: 20,
    hiddenOnMobile: true,
  },
  {
    id: 'h8', type: 'outline', colorClass: 'text-platinum', sizeClass: 'w-28 h-28',
    initialX: 'right-[2%]', initialY: 'top-[75vh]',
    parallaxFactor: 0.01, opacityClass: 'opacity-40', rotation: 45,
    hiddenOnMobile: true,
  },
  {
    id: 'h9', type: 'solid', colorClass: 'text-olive-gold', sizeClass: 'w-10 h-10',
    initialX: 'right-[10%]', initialY: 'top-[85vh]',
    parallaxFactor: 0.03, opacityClass: 'opacity-30', rotation: -20,
  },

  // --- Cluster Inferior (Zona Testimonios/Contacto) ---
  {
    id: 'h10', type: 'outline', colorClass: 'text-mint', sizeClass: 'w-20 h-20',
    initialX: 'left-[15%]', initialY: 'bottom-[30vh]',
    parallaxFactor: -0.02, opacityClass: 'opacity-20', rotation: 0,
  },
  {
    id: 'h11', type: 'solid', colorClass: 'text-teal-medium', sizeClass: 'w-14 h-14',
    initialX: 'left-[5%]', initialY: 'bottom-[15vh]',
    parallaxFactor: -0.04, opacityClass: 'opacity-30', rotation: 30,
    hiddenOnMobile: true,
  },
  {
    id: 'h12', type: 'outline', colorClass: 'text-platinum', sizeClass: 'w-10 h-10',
    initialX: 'left-[12%]', initialY: 'bottom-[10vh]',
    parallaxFactor: -0.01, opacityClass: 'opacity-50', rotation: -45,
  },
  {
    id: 'h13', type: 'solid', colorClass: 'text-lemon', sizeClass: 'w-24 h-24',
    initialX: 'right-[8%]', initialY: 'bottom-[25vh]',
    parallaxFactor: -0.03, opacityClass: 'opacity-20', rotation: 10,
    hiddenOnMobile: true,
  },
  {
    id: 'h14', type: 'outline', colorClass: 'text-olive-gold', sizeClass: 'w-12 h-12',
    initialX: 'right-[15%]', initialY: 'bottom-[15vh]',
    parallaxFactor: -0.05, opacityClass: 'opacity-30', rotation: 70,
  },
  {
    id: 'h15', type: 'solid', colorClass: 'text-mint', sizeClass: 'w-10 h-10',
    initialX: 'right-[5%]', initialY: 'bottom-[10vh]',
    parallaxFactor: -0.02, opacityClass: 'opacity-20', rotation: -15,
  },
  {
    id: 'h16', type: 'solid', colorClass: 'text-platinum', sizeClass: 'w-16 h-16',
    initialX: 'right-[20%]', initialY: 'bottom-[5vh]',
    parallaxFactor: -0.01, opacityClass: 'opacity-30', rotation: 0,
    hiddenOnMobile: true,
  },
];


export const BackgroundDecor: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Optimización: Usar requestAnimationFrame para un scroll más suave
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {hexagons.map((hex) => {
        const SVGComponent = hex.type === 'solid' ? HexagonSolid : HexagonOutline;
        // Calcula el desplazamiento del parallax
        // El movimiento es ahora mucho más sutil
        const translateY = scrollY * hex.parallaxFactor;

        return (
          <img
            key={hex.id}
            src={SVGComponent}
            alt="Decorative Hexagon"
            className={`
              absolute ${hex.initialX} ${hex.initialY}
              ${hex.colorClass} ${hex.sizeClass} 
              ${hex.opacityClass}
              ${hex.hiddenOnMobile ? 'hidden md:block' : ''}
              ${hex.zIndex || ''}
              transition-transform duration-150 ease-out will-change-transform
            `}
            style={{
              // Aplicamos la rotación y el parallax en la misma propiedad transform
              transform: `translateY(${translateY}px) rotate(${hex.rotation}deg)`
            }}
          />
        );
      })}
    </div>
  );
};