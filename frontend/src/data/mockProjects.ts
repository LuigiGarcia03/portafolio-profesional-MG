// frontend/src/data/mockProjects.ts

// frontend/src/data/mockProjects.ts
import type { Project } from '../types/Project';

// Usaremos esta imagen de placeholder genérica
const placeholderImg = 'https://via.placeholder.com/600x400.png?text=Proyecto+Destacado';

export const allProjects: Project[] = [
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