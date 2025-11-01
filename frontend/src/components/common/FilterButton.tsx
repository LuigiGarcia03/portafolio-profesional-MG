// frontend/src/components/common/FilterButton.tsx

import React from 'react';

interface FilterButtonProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ label, onClick, isActive }) => {
  // Clases base
  const baseClasses = 'px-5 py-2 rounded-full font-sans font-bold text-sm transition-all duration-300';
  
  // Clases condicionales
  const activeClasses = 'bg-primary-teal text-text-light shadow-md';
  const inactiveClasses = 'bg-gray-200 text-text-dark/70 hover:bg-gray-300';

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {label}
    </button>
  );
};