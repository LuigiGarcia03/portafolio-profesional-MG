// frontend/src/components/common/ServiceCard.tsx

import React from 'react';

interface ServiceCardProps {
  // Especificamos que debe ser un elemento React que acepte className
  icon: React.ReactElement<{ className?: string }>; 
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex transform flex-col items-center rounded-lg bg-white p-8 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl md:items-start md:text-left">
      {/* Círculo del icono con tus colores de marca */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-teal text-text-light">
        {/* Clonamos el icono y añadimos className de forma segura */}
        {React.cloneElement(icon, { className: 'w-8 h-8' })}
      </div>
      <h3 className="mb-2 font-display text-2xl font-bold text-text-dark">
        {title}
      </h3>
      <p className="font-sans text-text-dark/80">
        {description}
      </p>
    </div>
  );
};