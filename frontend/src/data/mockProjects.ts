// frontend/src/data/mockProjects.ts

// frontend/src/data/mockProjects.ts
import type { Project } from '../types/Project';

// Usaremos esta imagen de placeholder genérica
const placeholderImg = 'https://i.blogs.es/4e5da4/github3/1366_2000.jpg';
import tlvAiImage from '../assets/images/projects-img/tlv-ai-preview.png';

export const allProjects: Project[] = [
  {
    id: 0, // ID 0 para asegurar que salga primero si se ordena, o simplemente por orden de array
    title: 'Traductor Inteligente TLV AI',
    description: 'Prototipo de traducción avanzada potenciado por Google Gemini. Utiliza Inteligencia Artificial para ofrecer traducciones contextuales y precisas en tiempo real.',
    imageUrl: tlvAiImage,
    categories: ['IA', 'React', 'Google Gemini'],
    repoUrl: 'https://github.com/luigigarcia03/tlv-ai-prototipo', 
    liveUrl: 'https://tlv-ai-prototipo.vercel.app/', 
  },
  {
    id: 1,
    title: 'Tienda E-commerce "TechLoom"',
    description: 'Plataforma de E-commerce completa con carrito de compras, pagos y panel de admin.',
    imageUrl: placeholderImg,
    categories: ['E-commerce', 'React', 'Node.js'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 2,
    title: 'Web Corporativa "InnovaFin"',
    description: 'Sitio web profesional para una startup fintech, enfocado en captación de leads.',
    imageUrl: placeholderImg,
    categories: ['Corporativo', 'React'],
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'API REST para "GestorApp"',
    description: 'Backend robusto con Node.js, Express y MongoDB para una app de gestión de tareas.',
    imageUrl: placeholderImg,
    categories: ['Node.js'],
    repoUrl: '#',
  },
  {
    id: 4,
    title: 'Portfolio Personal (este sitio)',
    description: 'Portfolio profesional desarrollado con Vite, React, TypeScript y Tailwind CSS.',
    imageUrl: placeholderImg,
    categories: ['React', 'Corporativo'],
    liveUrl: '#',
    repoUrl: '#',
  },
];