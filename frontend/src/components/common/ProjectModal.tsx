// frontend/src/components/common/ProjectModal.tsx

import React, { useEffect } from 'react';
import type { Project } from '../../types/Project';
import { FaTimes, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // --- Mejor Práctica de Accesibilidad (Cerrar con 'Esc') ---
  useEffect(() => {
    // Función que maneja el evento de tecla
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Añade el event listener cuando el modal se monta
    window.addEventListener('keydown', handleEsc);

    // Limpia el event listener cuando el modal se desmonta
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]); // Se ejecuta solo si 'onClose' cambia

  return (
    // 1. Overlay (Fondo oscuro)
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose} // 2. Cierra al hacer clic en el fondo
    >
      {/* 3. Contenedor del Modal */}
      <div
        className="relative mx-auto w-full max-w-3xl rounded-lg bg-white shadow-xl"
        // 4. Evita que el clic DENTRO del modal lo cierre
        onClick={(e) => e.stopPropagation()} 
      >
        {/* 5. Botón de Cerrar (X) */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-teal text-white shadow-lg transition-transform hover:scale-110"
          aria-label="Cerrar modal"
        >
          <FaTimes />
        </button>

        {/* 6. Contenido del Modal */}
        <div className="flex flex-col md:flex-row">
          {/* Imagen */}
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-64 w-full rounded-t-lg object-cover md:h-auto md:w-1/2 md:rounded-l-lg md:rounded-t-none"
          />

          {/* Detalles */}
          <div className="flex flex-col p-6 md:w-1/2">
            <h2 className="mb-3 font-display text-3xl font-bold text-text-dark">
              {project.title}
            </h2>

            {/* Categorías (Tags) */}
            <div className="mb-4 flex flex-wrap gap-2">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-primary-teal/20 px-3 py-1 text-xs font-bold text-accent-teal-dark"
                >
                  {category}
                </span>
              ))}
            </div>

            <p className="flex-grow font-sans text-text-dark/80">
              {project.description}
              {/* Nota: En un proyecto real, aquí iría una descripción MÁS larga */}
            </p>

            {/* Botones de Links */}
            <div className="mt-6 flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg bg-primary-teal px-4 py-2 font-sans font-bold text-text-light transition-colors hover:bg-accent-teal-dark"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Ver Proyecto
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 font-sans font-bold text-text-dark transition-colors hover:bg-gray-300"
                >
                  <FaCode className="mr-2" />
                  Ver Código
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};