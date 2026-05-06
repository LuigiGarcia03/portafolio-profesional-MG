// frontend/src/types/Project.ts

// Definimos las categorías que usaremos para filtrar
// Puedes expandir esto tanto como quieras
export type ProjectCategory = 
  | 'E-commerce' 
  | 'React' 
  | 'TypeScript'
  | 'Tailwind CSS'
  | 'Vite'
  | 'Node.js' 
  | 'Corporativo'
  | 'Landing Page'
  | 'IA'
  | 'Google AI Studio'
  | 'PHP'
  | 'Next.js'
  | 'Otro'; // 'Otro' para cualquier categoría que no encaje en las anteriores

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Usaremos un placeholder por ahora
  categories: ProjectCategory[];
  liveUrl?: string;
  repoUrl?: string;
}