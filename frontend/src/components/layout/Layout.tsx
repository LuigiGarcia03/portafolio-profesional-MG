// frontend/src/components/layout/Layout.tsx

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // 👇 ESTAS son las clases globales que aplican tu tema
    <div className="flex min-h-screen flex-col bg-background-light font-sans text-text-dark">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};