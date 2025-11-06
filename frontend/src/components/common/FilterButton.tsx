// frontend/src/components/common/FilterButton.tsx

import React from 'react';

interface FilterButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ label, onClick, isActive }) => {
  // Clases base "senior" (incluyen estados de focus)
  const baseClasses = 
    'rounded-full px-5 py-2 font-bold text-sm transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-lemon focus-visible:ring-offset-2 ring-offset-alabaster';
  
  // Clases condicionales (Glassmorphism para inactivos, sólido para activos)
  const activeClasses = 'bg-olive-dark text-alabaster shadow-md';
  const inactiveClasses = 
    'bg-white/60 text-olive-dark/80 backdrop-blur-sm hover:bg-white/90 hover:text-olive-dark';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
};