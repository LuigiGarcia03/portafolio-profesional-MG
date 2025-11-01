// frontend/src/components/layout/Layout.tsx
import React, { useState } from 'react'; // ✅ Añadir import de React y useState
import { Header } from './Header'; // ✅ Header importado
import { Footer } from './Footer'; // ✅ Footer importado

// ✅ Interface para las props (si las necesitas)
interface LayoutProps {
  children: React.ReactNode;
}

// ✅ Componente Layout principal
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  // ✅ Si necesitas estado local para algo específico del Layout
  const [isSomeState, setIsSomeState] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header /> {/* ✅ Usando el Header importado */}
      <main className="flex-grow">
        {children}
      </main>
      <Footer /> {/* ✅ Usando el Footer importado */}
    </div>
  );
};