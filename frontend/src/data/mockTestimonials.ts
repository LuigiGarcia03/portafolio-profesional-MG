// frontend/src/data/mockTestimonials.ts

// frontend/src/data/mockTestimonials.ts
import type { Testimonial } from '../types/Testimonial';

// Usaremos placeholders de UI Faces
const placeholderImg1 = 'https://uifaces.co/our-content/donated/xS40Nsw9.jpg';
const placeholderImg2 = 'https://uifaces.co/our-content/donated/vA1D2RLc.jpg';
const placeholderImg3 = 'https://uifaces.co/our-content/donated/AW-YqCBj.jpg';

export const allTestimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Torres',
    company: 'CEO de TechLoom',
    quote:
      'Marcos no solo entregó una tienda online, sino una plataforma de ventas. Nuestra conversión aumentó un 30% gracias a su enfoque en performance y UX.',
    imageUrl: placeholderImg1,
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    company: 'Director de InnovaFin',
    quote:
      'La profesionalidad y el conocimiento técnico de Marcos son excepcionales. Entendió nuestra visión y la ejecutó a la perfección con React y Node.js.',
    imageUrl: placeholderImg2,
  },
  {
    id: 3,
    name: 'Sofía Jiménez',
    company: 'Fundadora de GestorApp',
    quote:
      'El backend que Marcos construyó para nuestra API es robusto, escalable y seguro. Un desarrollador Full Stack en toda regla. 100% recomendado.',
    imageUrl: placeholderImg3,
  },
];