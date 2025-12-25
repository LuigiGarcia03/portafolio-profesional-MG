// frontend/src/components/sections/ServicesSection.tsx

import React from 'react';
import { ServiceCard } from '../common/ServiceCard';

// Importamos los iconos que usaremos
import { FaShoppingCart, FaLaptopCode, FaTools, FaTachometerAlt } from 'react-icons/fa';

// Definimos los datos de los servicios (basado en DATOS CV)
const servicesData = [
  {
    icon: <FaShoppingCart />,
    title: 'Páginas Web E-commerce',
    description: 'Tiendas online personalizadas, optimizadas para la venta y la conversión de clientes.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Páginas Web Profesionales',
    description: 'Sitios web corporativos y portfolios que reflejan la identidad de tu marca.',
  },
  {
    icon: <FaTools />,
    title: 'Mantenimiento Web',
    description: 'Actualizaciones, seguridad y soporte técnico para que tu sitio siempre esté operativo.',
  },
  {
    icon: <FaTachometerAlt />,
    title: 'Optimización de Performance',
    description: 'Mejora de la velocidad de carga (Core Web Vitals) para un mejor SEO y experiencia de usuario.',
  },
];


export const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="bg-background-light py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Título de la Sección */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold text-text-dark md:text-5xl">
            Lo que Hago
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-dark/80">
            Desde tiendas online completas hasta páginas corporativas,
            ofrezco soluciones a la medida.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};