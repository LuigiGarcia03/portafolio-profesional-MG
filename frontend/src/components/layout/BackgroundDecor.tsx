// src/components/layout/BackgroundDecor.tsx
import React from 'react';

export const BackgroundDecor: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 -z-10 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Este es el contenedor principal del fondo.
        - 'absolute inset-0': Ocupa toda la pantalla.
        - '-z-10': Lo envía 10 niveles "detrás" del contenido.
        - 'overflow-hidden': Evita que los bloques generen scrollbars.
      */}

      {/* Bloque Amarillo (arriba)  */}
      <div className="absolute left-0 top-0 h-[30vh] w-[40vw] -translate-x-1/4 bg-lemon opacity-70" />

      {/* Bloque Menta (derecha)  */}
      <div className="absolute right-0 top-[10vh] h-[50vh] w-[30vw] translate-x-1/3 bg-mint opacity-60" />

      {/* Bloque Oliva Oscuro (abajo-izquierda)  */}
      <div className="absolute bottom-[5vh] left-[5vw] h-[40vh] w-[40vw] -translate-x-1/4 bg-olive-dark opacity-70" />
      
      {/* Bloque Verde Azulado Oscuro (abajo-derecha)  */}
      <div className="absolute bottom-0 right-0 h-[30vh] w-[30vw] translate-x-1/2 translate-y-1/4 bg-teal-dark opacity-60" />

    </div>
  );
};