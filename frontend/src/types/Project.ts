// frontend/src/types/Project.ts

// Definimos las categorías que usaremos para filtrar
// Puedes expandir esto tanto como quieras
export type ProjectCategory = 
  | 'E-commerce' 
  | 'React' 
  | 'Node.js' 
  | 'Corporativo'
  | 'IA'
  | 'Google Gemini';

export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string; // Usaremos un placeholder por ahora
  categories: ProjectCategory[];
  liveUrl?: string;
  repoUrl?: string;
}