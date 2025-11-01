// frontend/src/types/Testimonial.ts

export interface Testimonial {
  id: number;
  name: string;
  company: string; // Ej: "CEO de TechLoom"
  quote: string;
  imageUrl: string; // Usaremos un placeholder por ahora
}