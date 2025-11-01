// frontend/src/App.tsx

import { Layout } from './components/layout/Layout';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection'; // <-- 1. Importa
import { ContactSection } from './components/sections/ContactSection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection /> {/* <-- 2. Añade la nueva sección */}
      <ContactSection />
    </Layout>
  );
}

export default App;