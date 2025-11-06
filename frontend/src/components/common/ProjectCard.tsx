// frontend/src/components/common/ProjectCard.tsx

import React from 'react';
import type { Project } from '../../types/Project';
import { FaEye, FaCode, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (id: number) => void;
  index: number; // Para la animación escalonada
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails, index }) => {
  return (
    // 1. Contenedor de la Tarjeta (Glassmorphism y Animación)
    <div
      className="group transform flex-col overflow-hidden rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] opacity-0 animate-fade-in-up"
      // 2. Animación escalonada
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* 3. Contenedor de Imagen con Overlay en Hover */}
      <button 
        onClick={() => onViewDetails(project.id)} 
        className="relative block w-full overflow-hidden cursor-pointer"
        aria-label={`Ver detalles del proyecto ${project.title}`}
      >
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="h-56 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          loading="lazy"
        />
        {/* 4. Overlay "Senior" (aparece al hacer hover) */}
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaEye className="h-10 w-10 text-lemon" />
          <span className="mt-2 text-lg font-bold text-alabaster">
            Ver Detalles
          </span>
        </div>
      </button>

            {/* 5. Contenido de la Tarjeta (Texto) */}
      <div className="flex flex-grow flex-col p-6">
        {/* Categorías (Tags con nueva paleta) */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <span
              key={category}
              className="rounded-full bg-lemon/80 px-3 py-1 text-xs font-bold text-olive-dark"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Título y Descripción */}
        <h3 className="mb-2 text-2xl font-bold text-olive-dark">
          {project.title}
        </h3>
        <p className="flex-grow font-sans text-olive-dark/90">
          {project.description}
        </p>

        {/* 6. Botones (Ambos son enlaces externos) */}
        <div className="mt-6 flex flex-wrap gap-4">
          
          {/* BOTÓN 1: VER PROYECTO (Primary CTA) */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-lemon px-4 py-2 font-sans font-bold text-olive-dark shadow-sm transition-all hover:scale-105 hover:bg-opacity-90"
              // Detiene el clic para que no abra el modal
              onClick={(e) => e.stopPropagation()} 
            >
              <FaExternalLinkAlt className="mr-2 h-4 w-4" />
              Ver Proyecto
            </a>
          )}

          {/* BOTÓN 2: VER CÓDIGO (Secondary CTA) */}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-platinum px-4 py-2 font-sans font-bold text-olive-dark/80 transition-colors duration-200 hover:bg-platinum/60 hover:text-olive-dark"
              // Detiene el clic para que no abra el modal
              onClick={(e) => e.stopPropagation()} 
            >
              <FaCode className="mr-2 h-4 w-4" />
              Ver Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};