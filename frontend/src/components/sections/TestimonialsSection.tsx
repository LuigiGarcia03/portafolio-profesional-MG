// frontend/src/components/sections/TestimonialsSection.tsx

import React from 'react';

// 1. Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// 2. Importar los estilos de Swiper (¡MUY IMPORTANTE!)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 3. Importar nuestros datos
import { allTestimonials } from '../../data/mockTestimonials';

// 4. Importar iconos
import { FaQuoteLeft } from 'react-icons/fa';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonios" className="bg-text-dark text-text-light py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Título de la Sección */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Lo que dicen mis Clientes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-light/80">
            Resultados reales de colaboraciones exitosas.
          </p>
        </div>

        {/* 5. Implementación del Carrusel */}
        <Swiper
          // 6. Módulos que usaremos
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={50} // Espacio entre slides
          slidesPerView={1} // Mostrar 1 slide a la vez
          navigation // Habilita flechas de navegación
          pagination={{ clickable: true }} // Habilita puntos de paginación
          autoplay={{
            delay: 5000, // Cambia cada 5 segundos
            disableOnInteraction: true, // No se detiene si el usuario interactúa
          }}
          loop={true} // Vuelve al principio
          className="pb-12" // Añade padding-bottom para la paginación
        >
          {allTestimonials.map((testimonial) => (
            
            // 7. Cada slide es un componente SwiperSlide
            <SwiperSlide key={testimonial.id}>
              
              {/* Contenido de la Tarjeta de Testimonio */}
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-10">
                <FaQuoteLeft className="h-10 w-10 text-primary-yellow" />
                
                <p className="mt-6 font-sans text-xl italic text-text-light md:text-2xl">
                  "{testimonial.quote}"
                </p>
                
                <img
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  className="mt-8 h-20 w-20 rounded-full border-4 border-primary-yellow object-cover"
                />
                
                <h4 className="mt-4 font-display text-xl font-bold text-text-light">
                  {testimonial.name}
                </h4>
                <p className="font-sans text-text-light/70">
                  {testimonial.company}
                </p>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};