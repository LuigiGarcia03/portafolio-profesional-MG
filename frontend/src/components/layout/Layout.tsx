// frontend/src/components/layout/Layout.tsx

import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background-light">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};