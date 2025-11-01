// frontend/src/components/common/ProjectCard.tsx

import React from 'react';
import type { Project } from '../../types/Project';
import { FaEye, FaCode } from 'react-icons/fa'; // Iconos para los botones

interface ProjectCardProps {
  project: Project;
  // Pasaremos esta función para manejar el clic y abrir el modal
  onViewDetails: (id: number) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div className="flex transform flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Imagen */}
      <img src={project.imageUrl} alt={project.title} className="h-48 w-full object-cover" />

      {/* Contenido */}
      <div className="flex flex-grow flex-col p-6">
        {/* Categorías (Tags) */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-primary-teal/20 px-3 py-1 text-xs font-bold text-accent-teal-dark"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Título y Descripción */}
        <h3 className="mb-2 font-display text-2xl font-bold text-text-dark">
          {project.title}
        </h3>
        <p className="flex-grow font-sans text-text-dark/80">
          {project.description}
        </p>

        {/* Botones */}
        <div className="mt-6 flex space-x-4">
          <button
            onClick={() => onViewDetails(project.id)}
            className="flex items-center rounded-lg bg-primary-teal px-4 py-2 font-sans font-bold text-text-light transition-colors hover:bg-accent-teal-dark"
          >
            <FaEye className="mr-2" />
            Ver Detalles
          </button>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg bg-gray-200 px-4 py-2 font-sans font-bold text-text-dark transition-colors hover:bg-gray-300"
            >
              <FaCode className="mr-2" />
              Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};