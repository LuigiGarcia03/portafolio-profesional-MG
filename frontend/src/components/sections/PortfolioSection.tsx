// frontend/src/components/sections/PortfolioSection.tsx (¡REFRACTORIZADO!)

import React, { useState, useMemo } from 'react';
import { allProjects } from '../../data/mockProjects';
import type { Project, ProjectCategory } from '../../types/Project';
import { ProjectModal } from '../common/ProjectModal';
import { ProjectCard } from '../common/ProjectCard';
import { FilterButton } from '../common/FilterButton'; // ¡Importamos el botón rediseñado!

// 1. Generamos las categorías dinámicamente
const allCategories: ProjectCategory[] = [...new Set(allProjects.flatMap(p => p.categories))];
const filterCategories: { label: string, value: ProjectCategory | 'all' }[] = [
  { label: 'Todos', value: 'all' },
  ...allCategories.map(cat => ({ label: cat, value: cat }))
];

export const PortfolioSection: React.FC = () => {
  // 2. ¡Arreglamos el bug! Añadimos el 'setActiveFilter'
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return allProjects;
    }
    return allProjects.filter((project) =>
      project.categories.includes(activeFilter)
    );
  }, [activeFilter]);

  const handleViewDetails = (id: number) => {
    const projectToShow = allProjects.find((p) => p.id === id);
    if (projectToShow) {
      setSelectedProject(projectToShow);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    // 3. ¡SIN FONDO GRIS! Se integra con el 'alabaster' global
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Título de la Sección */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-olive-dark md:text-5xl">
            Proyectos Destacados
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-olive-dark/80">
            Una selección de mi trabajo en E-commerce, desarrollo web y más.
          </p>
        </div>

        {/* 4. Barra de Filtros (Restaurada) */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {filterCategories.map((filter) => (
            <FilterButton
              key={filter.value}
              label={filter.label}
              onClick={() => setActiveFilter(filter.value)}
              isActive={activeFilter === filter.value}
            />
          ))}
        </div>
        
        {/* 5. Grid de Proyectos (con 'index' para animación) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
              index={index} // Pasamos el índice para la animación escalonada
            />
          ))}
        </div>
      </div>

      {/* El Modal (sin cambios, ya funciona bien) */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};