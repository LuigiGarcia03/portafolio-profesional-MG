// frontend/src/components/sections/PortfolioSection.tsx (¡MODIFICADO!)

import React, { useState, useMemo } from 'react';
import { allProjects } from '../../data/mockProjects';
// 1. Importa el tipo 'Project' y el nuevo Modal
// 1. Importa el tipo 'Project' y el nuevo Modal
import type { Project, ProjectCategory } from '../../types/Project';
import { ProjectModal } from '../common/ProjectModal';
import { ProjectCard } from '../common/ProjectCard';
// ... (imports de FilterButton y ProjectCard siguen igual)

// ... (const filterCategories sigue igual)

export const PortfolioSection: React.FC = () => {
  const [activeFilter] = useState<ProjectCategory | 'all'>('all');

  // --- 2. Lógica de Estado del Modal ---
  // Guardamos el *proyecto completo* seleccionado, o 'null' si no hay ninguno
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    // ... (esta lógica no cambia)
    if (activeFilter === 'all') {
      return allProjects;
    }
    return allProjects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  // --- 3. Funciones para Abrir y Cerrar el Modal ---
  
  // Esta función se la pasamos a ProjectCard.
  const handleViewDetails = (id: number) => {
    // Buscamos el proyecto en nuestros datos por su ID
    const projectToShow = allProjects.find((p) => p.id === id);
    if (projectToShow) {
      setSelectedProject(projectToShow);
    }
  };

  // Esta función se la pasamos al Modal
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    // bg-gray-200 py-20 md:py-32
    <section id="portfolio" className="bg-gray-200 py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* ... (El Título y la Barra de Filtros no cambian) ... */}
        
        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              // Ahora esta función abre el modal
              onViewDetails={handleViewDetails} 
            />
          ))}
        </div>
      </div>

      {/* --- 4. Renderizado Condicional del Modal --- */}
      {/* Si 'selectedProject' NO es 'null', renderiza el modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};