// frontend/src/data/mockProjects.ts

// frontend/src/data/mockProjects.ts
import type { Project } from '../types/Project';

// Usaremos esta imagen de placeholder genérica
const placeholderImg = 'https://i.blogs.es/4e5da4/github3/1366_2000.jpg';
import tlvAiImage from '../assets/images/projects-img/tlv-ai-preview.png';
import hvsfaImage from '../assets/images/projects-img/hvsfa-preview.png';
import IlusiónImage from '../assets/images/projects-img/ilusion-preview.png';
import NanaJajuImage from '../assets/images/projects-img/nana-jaju-preview.png';

export const allProjects: Project[] = [
  {
    id: 0, // ID 0 para asegurar que salga primero si se ordena, o simplemente por orden de array
    title: 'Traductor Inteligente TLV AI',
    description: 'Prototipo de traducción avanzada potenciado por Google Gemini. Utiliza Inteligencia Artificial para ofrecer traducciones contextuales y precisas en tiempo real.',
    imageUrl: tlvAiImage,
    categories: ['IA', 'React', 'Google AI Studio', 'TypeScript', 'Tailwind CSS', 'Vite'],
    repoUrl: 'https://github.com/luigigarcia03/tlv-ai-prototipo', 
    liveUrl: 'https://tlv-ai-prototipo.vercel.app/', 
  },
  {
    id: 1,
    title: 'Hospital Veterinario San Francisco de Asís - Sitio Web',
    description: 'Landing Page para un hospital veterinario, diseñada para atraer clientes y mostrar servicios de manera clara y atractiva.',
    imageUrl: hvsfaImage,
    categories: ['Landing Page', 'React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'http://hvsfa.com.mx/',
  },
  {
    id: 2,
    title: 'Pastelerías Ilusión - Sitio Web"',
    description: 'Sitio web para una cadena de pastelerías, con un diseño moderno, con catalogo de productos, información de sucursales y contacto.',
    imageUrl: IlusiónImage,
    categories: ['Corporativo', 'React', 'TypeScript', 'Tailwind CSS', 'PHP'],
    liveUrl: 'https://pasteleriasilusion.com.mx/',
  },
  {
    id: 3,
    title: 'Menjurjes Nana Jajú"',
    description: 'Sitio web para una empresa de productos naturales, con catálogo de productos, talleres y ceremonias, información de beneficios y contacto.',
    imageUrl: NanaJajuImage,
    categories: ['Node.js', 'React','TypeScript', 'Tailwind CSS', 'Next.js'],
    liveUrl: 'https://www.menjurjesnanajaju.shop/',
  },
  {
    id: 4,
    title: 'Portfolio Personal (este sitio)',
    description: 'Portfolio profesional desarrollado con Vite, React, TypeScript y Tailwind CSS.',
    imageUrl: placeholderImg,
    categories: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
];